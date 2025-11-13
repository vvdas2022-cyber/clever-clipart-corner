import { Heart, ShoppingCart, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { useCart } from "@/hooks/useCart";

interface ProductCardProps {
  id: string;
  title: string;
  price: number;
  image: string;
  rating: number;
  reviews: number;
  seller: string;
}

const ProductCard = ({ id, title, price, image, rating, reviews, seller }: ProductCardProps) => {
  const { addToCart } = useCart();
  return (
    <Card className="group overflow-hidden border-border hover:border-primary/50 transition-all duration-500 hover:shadow-[0_8px_40px_rgba(0,0,0,0.12)]">
      <Link to={`/product/${id}`}>
        <div className="relative overflow-hidden aspect-square bg-muted">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          />
          <Button
            size="icon"
            variant="secondary"
            className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity shadow-lg"
            onClick={(e) => {
              e.preventDefault();
              // Handle wishlist
            }}
          >
            <Heart className="w-4 h-4" />
          </Button>
        </div>
      </Link>

      <div className="p-5 space-y-3">
        <Link to={`/product/${id}`}>
          <h3 className="font-semibold text-foreground line-clamp-2 hover:text-primary transition-colors text-base">
            {title}
          </h3>
        </Link>

        <div className="flex items-center gap-2">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${
                  i < Math.floor(rating)
                    ? "fill-secondary text-secondary"
                    : "fill-muted text-muted"
                }`}
              />
            ))}
          </div>
          <span className="text-sm text-muted-foreground">({reviews})</span>
        </div>

        <p className="text-sm text-muted-foreground">by {seller}</p>

        <div className="flex items-center justify-between pt-2 border-t border-border">
          <span className="text-2xl font-bold text-primary">${price.toFixed(2)}</span>
          <Button
            size="sm"
            className="gap-2 shadow-md hover:shadow-lg transition-all"
            onClick={(e) => {
              e.preventDefault();
              addToCart(id);
            }}
          >
            <ShoppingCart className="w-4 h-4" />
            Add
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default ProductCard;
