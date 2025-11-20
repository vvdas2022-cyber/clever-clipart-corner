import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { items, total } = await req.json();
    
    const PAYPAL_CLIENT_ID = Deno.env.get('PAYPAL_CLIENT_ID');
    const PAYPAL_SECRET = Deno.env.get('PAYPAL_SECRET');
    
    console.log('PayPal Client ID length:', PAYPAL_CLIENT_ID?.length);
    console.log('PayPal Secret length:', PAYPAL_SECRET?.length);
    console.log('PayPal Client ID (first 10 chars):', PAYPAL_CLIENT_ID?.substring(0, 10));
    
    if (!PAYPAL_CLIENT_ID || !PAYPAL_SECRET) {
      throw new Error('PayPal credentials not configured');
    }

    // Trim any whitespace from credentials
    const clientId = PAYPAL_CLIENT_ID.trim();
    const secret = PAYPAL_SECRET.trim();

    // Get PayPal access token
    const auth = btoa(`${clientId}:${secret}`);
    console.log('Making token request to PayPal sandbox...');
    const tokenResponse = await fetch('https://api-m.sandbox.paypal.com/v1/oauth2/token', {
      method: 'POST',
      headers: {
        'Authorization': `Basic ${auth}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: 'grant_type=client_credentials',
    });

    const tokenData = await tokenResponse.json();
    
    if (!tokenResponse.ok || tokenData.error) {
      console.error('PayPal token error:', JSON.stringify(tokenData));
      throw new Error(`PayPal authentication failed: ${tokenData.error_description || tokenData.error || 'Unknown error'}`);
    }
    
    console.log('PayPal token obtained successfully');
    const { access_token } = tokenData;

    // Create PayPal order
    const orderResponse = await fetch('https://api-m.sandbox.paypal.com/v2/checkout/orders', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${access_token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        intent: 'CAPTURE',
        purchase_units: [{
          amount: {
            currency_code: 'USD',
            value: total.toFixed(2),
            breakdown: {
              item_total: {
                currency_code: 'USD',
                value: total.toFixed(2),
              }
            }
          },
          items: items.map((item: any) => ({
            name: item.title,
            unit_amount: {
              currency_code: 'USD',
              value: item.price.toFixed(2),
            },
            quantity: String(item.quantity || 1),
          })),
        }],
        application_context: {
          return_url: `${req.headers.get('origin')}/cart?success=true`,
          cancel_url: `${req.headers.get('origin')}/cart?cancelled=true`,
        }
      }),
    });

    const orderData = await orderResponse.json();
    
    console.log('PayPal order response:', JSON.stringify(orderData));
    
    if (orderData.error || !orderData.id) {
      console.error('PayPal error:', orderData);
      throw new Error(orderData.message || 'Failed to create PayPal order');
    }

    return new Response(JSON.stringify(orderData), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('PayPal checkout error:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
    return new Response(
      JSON.stringify({ error: errorMessage }),
      { 
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );
  }
});
