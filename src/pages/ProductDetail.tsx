import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Heart, ShoppingCart, Star, Download, Shield } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useCart } from "@/hooks/useCart";
import { useAuth } from "@/contexts/AuthContext";
import productFlowers from "@/assets/product-flowers.jpg";

const ProductDetail = () => {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleAddToCart = () => {
    if (id) {
      addToCart(id);
    }
  };

  const handleBuyNow = () => {
    if (!user) {
      navigate("/auth");
      return;
    }
    if (id) {
      addToCart(id);
      navigate("/cart");
    }
  };

  // Mock product data
  const product = {
    id: "1",
    title: "Watercolor Flower Clipart Pack - 50 PNG Files",
    price: 12.99,
    image: productFlowers,
    rating: 5,
    reviews: 342,
    seller: "FloralDesigns",
    description: "Beautiful watercolor flower clipart perfect for wedding invitations, scrapbooking, digital planners, and more. Each element is hand-painted with love and exported as high-resolution PNG files with transparent backgrounds.",
    features: [
      "50 individual PNG files",
      "High resolution 300 DPI",
      "Transparent backgrounds",
      "Commercial use license included",
      "Instant digital download",
    ],
    formats: ["PNG"],
    fileSize: "125 MB",
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Product Image */}
          <div className="space-y-4">
            <div className="aspect-square rounded-2xl overflow-hidden bg-muted border border-border">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <h1 className="text-4xl font-bold mb-2">{product.title}</h1>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < Math.floor(product.rating)
                          ? "fill-primary text-primary"
                          : "fill-muted text-muted"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-muted-foreground">
                  ({product.reviews} reviews)
                </span>
              </div>
            </div>

            <div className="flex items-baseline gap-3">
              <span className="text-4xl font-bold text-primary">
                ${product.price.toFixed(2)}
              </span>
            </div>

            <p className="text-muted-foreground leading-relaxed">
              {product.description}
            </p>

            <div className="flex gap-3">
              <Button size="lg" className="flex-1 gap-2" onClick={handleAddToCart}>
                <ShoppingCart className="w-5 h-5" />
                Add to Cart
              </Button>
              <Button size="lg" variant="outline">
                <Heart className="w-5 h-5" />
              </Button>
            </div>

            <Button size="lg" className="w-full" variant="secondary" onClick={handleBuyNow}>
              Buy Now
            </Button>

            <div className="space-y-3 p-4 rounded-lg bg-muted/30">
              <div className="flex items-center gap-2 text-sm">
                <Download className="w-4 h-4 text-primary" />
                <span>Instant digital download</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Shield className="w-4 h-4 text-primary" />
                <span>Commercial use license included</span>
              </div>
            </div>

            <Tabs defaultValue="details" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="details">Details</TabsTrigger>
                <TabsTrigger value="seller">About Seller</TabsTrigger>
              </TabsList>
              <TabsContent value="details" className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">What's Included</h3>
                  <ul className="space-y-2">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">File Information</h3>
                  <div className="space-y-1 text-sm text-muted-foreground">
                    <p>Format: {product.formats.join(", ")}</p>
                    <p>File Size: {product.fileSize}</p>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="seller" className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                    <span className="text-2xl font-bold text-primary-foreground">
                      {product.seller[0]}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">{product.seller}</h3>
                    <p className="text-sm text-muted-foreground">Member since 2023</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  I'm a watercolor artist passionate about creating beautiful digital assets for crafters and designers. Each piece is lovingly hand-painted and digitized with care.
                </p>
                <Button variant="outline" className="w-full">
                  View More from {product.seller}
                </Button>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProductDetail;
