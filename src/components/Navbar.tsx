import { ShoppingCart, User, Search, Heart } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/browse?search=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-card/95 backdrop-blur-sm border-b border-border shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg">
              <span className="text-xl font-bold text-primary-foreground">A</span>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              Artory
            </span>
          </Link>

          {/* Search Bar */}
          <form onSubmit={handleSearch} className="flex-1 max-w-xl">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search for premium clipart, templates, fonts..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 py-2 w-full bg-muted/50 border-border focus:border-primary transition-colors shadow-sm"
              />
            </div>
          </form>

          {/* Action Buttons */}
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="relative">
              <Heart className="w-5 h-5" />
            </Button>
            <Link to="/cart">
              <Button variant="ghost" size="icon" className="relative">
                <ShoppingCart className="w-5 h-5" />
                <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  0
                </span>
              </Button>
            </Link>
            <Link to="/auth">
              <Button variant="default" size="sm" className="gap-2">
                <User className="w-4 h-4" />
                Sign In
              </Button>
            </Link>
          </div>
        </div>

        {/* Category Links */}
        <div className="flex items-center gap-6 mt-4 text-sm">
          <Link to="/browse?category=clipart" className="text-foreground/80 hover:text-primary transition-colors">
            Clipart
          </Link>
          <Link to="/browse?category=templates" className="text-foreground/80 hover:text-primary transition-colors">
            Templates
          </Link>
          <Link to="/browse?category=fonts" className="text-foreground/80 hover:text-primary transition-colors">
            Fonts
          </Link>
          <Link to="/browse?category=stickers" className="text-foreground/80 hover:text-primary transition-colors">
            Stickers
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
