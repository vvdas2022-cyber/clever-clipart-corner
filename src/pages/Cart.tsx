import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Trash2 } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { useCart } from "@/hooks/useCart";
import { useAuth } from "@/contexts/AuthContext";

const Cart = () => {
  const { toast } = useToast();
  const [isProcessing, setIsProcessing] = useState(false);
  const { cartItems, removeFromCart, isLoading, clearCart, getTotal } = useCart();
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/auth");
    }
  }, [user, navigate]);

  const subtotal = getTotal();
  const tax = subtotal * 0.1;
  const total = subtotal + tax;

  const handlePayPalCheckout = async () => {
    if (!user) {
      navigate("/auth");
      return;
    }

    setIsProcessing(true);
    try {
      const formattedItems = cartItems.map(item => ({
        id: item.product_id,
        title: item.product.title,
        price: item.product.price,
        quantity: item.quantity,
        seller: item.product.seller,
      }));

      const { data, error } = await supabase.functions.invoke('paypal-checkout', {
        body: {
          items: formattedItems,
          total: total,
        },
      });

      if (error) throw error;

      if (data && data.links) {
        const approvalUrl = data.links.find((link: any) => link.rel === 'approve')?.href;
        if (approvalUrl) {
          // Clear cart after successful checkout
          await clearCart();
          window.location.href = approvalUrl;
        }
      }
    } catch (error) {
      console.error('PayPal checkout error:', error);
      toast({
        title: "भुगतान त्रुटि",
        description: "PayPal चेकआउट शुरू करने में विफल। कृपया पुनः प्रयास करें।",
        variant: "destructive",
      });
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">शॉपिंग कार्ट</h1>

        {cartItems.length === 0 ? (
          <Card className="p-12 text-center">
            <p className="text-muted-foreground mb-4">आपकी कार्ट खाली है</p>
            <Link to="/browse">
              <Button>खरीदारी जारी रखें</Button>
            </Link>
          </Card>
        ) : (
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              {isLoading ? (
                <Card className="p-8 text-center">
                  <p className="text-muted-foreground">कार्ट लोड हो रहा है...</p>
                </Card>
              ) : (
                cartItems.map((item) => (
                  <Card key={item.id} className="p-4">
                    <div className="flex gap-4">
                      <img
                        src={item.product.image_url}
                        alt={item.product.title}
                        className="w-24 h-24 rounded-lg object-cover"
                      />
                      <div className="flex-1">
                        <Link to={`/product/${item.product_id}`}>
                          <h3 className="font-semibold hover:text-primary transition-colors">
                            {item.product.title}
                          </h3>
                        </Link>
                        <p className="text-sm text-muted-foreground">by {item.product.seller}</p>
                        <p className="text-lg font-bold text-primary mt-2">
                          ${item.product.price.toFixed(2)} × {item.quantity}
                        </p>
                      </div>
                      <Button 
                        variant="ghost" 
                        size="icon" 
                        className="text-destructive"
                        onClick={() => removeFromCart(item.id)}
                      >
                        <Trash2 className="w-5 h-5" />
                      </Button>
                    </div>
                  </Card>
                ))
              )}
            </div>

            {/* Order Summary */}
            <div>
              <Card className="p-6 space-y-4 sticky top-24">
                <h2 className="text-xl font-bold">Order Summary</h2>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Tax</span>
                    <span>${tax.toFixed(2)}</span>
                  </div>
                  <div className="border-t pt-2 flex justify-between text-lg font-bold">
                    <span>Total</span>
                    <span className="text-primary">${total.toFixed(2)}</span>
                  </div>
                </div>
                <Button 
                  className="w-full bg-[#0070ba] hover:bg-[#005ea6] text-white" 
                  size="lg"
                  onClick={handlePayPalCheckout}
                  disabled={isProcessing}
                >
                  {isProcessing ? "Processing..." : "Pay with PayPal"}
                </Button>
                <Link to="/browse">
                  <Button variant="outline" className="w-full">
                    Continue Shopping
                  </Button>
                </Link>
              </Card>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Cart;
