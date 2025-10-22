import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import productFlowers from "@/assets/product-flowers.jpg";
import productAnimals from "@/assets/product-animals.jpg";
import productFonts from "@/assets/product-fonts.jpg";
import productTemplates from "@/assets/product-templates.jpg";

const Browse = () => {
  const [priceRange, setPriceRange] = useState([0, 50]);

  // Mock products - in a real app, these would come from an API
  const products = [
    {
      id: "1",
      title: "Watercolor Flower Clipart Pack - 50 PNG Files",
      price: 12.99,
      image: productFlowers,
      rating: 5,
      reviews: 342,
      seller: "FloralDesigns",
    },
    {
      id: "2",
      title: "Cute Animal Stickers Bundle - Kawaii Style",
      price: 8.99,
      image: productAnimals,
      rating: 4.8,
      reviews: 256,
      seller: "CuteCreations",
    },
    {
      id: "3",
      title: "Elegant Script Font Collection with Florals",
      price: 15.99,
      image: productFonts,
      rating: 4.9,
      reviews: 189,
      seller: "TypeArtistry",
    },
    {
      id: "4",
      title: "Planner Templates Set - Watercolor Style",
      price: 10.99,
      image: productTemplates,
      rating: 4.7,
      reviews: 421,
      seller: "PlannerPro",
    },
    {
      id: "5",
      title: "Rose Garden Watercolor Bundle",
      price: 14.99,
      image: productFlowers,
      rating: 4.9,
      reviews: 198,
      seller: "FloralDesigns",
    },
    {
      id: "6",
      title: "Kawaii Pet Sticker Collection",
      price: 7.99,
      image: productAnimals,
      rating: 4.6,
      reviews: 143,
      seller: "CuteCreations",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="flex gap-8">
          {/* Filters Sidebar */}
          <aside className="w-64 flex-shrink-0 space-y-6">
            <div>
              <h3 className="font-semibold mb-3 text-foreground">Category</h3>
              <div className="space-y-2">
                {["All", "Clipart", "Templates", "Fonts", "Stickers"].map((cat) => (
                  <Button
                    key={cat}
                    variant="ghost"
                    className="w-full justify-start"
                  >
                    {cat}
                  </Button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-3 text-foreground">Price Range</h3>
              <div className="space-y-4">
                <Slider
                  min={0}
                  max={50}
                  step={1}
                  value={priceRange}
                  onValueChange={setPriceRange}
                  className="py-4"
                />
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <span>${priceRange[0]}</span>
                  <span>${priceRange[1]}</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-3 text-foreground">File Format</h3>
              <div className="space-y-2">
                {["PNG", "JPG", "SVG", "PDF", "ZIP"].map((format) => (
                  <label key={format} className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="rounded" />
                    <span className="text-sm">{format}</span>
                  </label>
                ))}
              </div>
            </div>
          </aside>

          {/* Products Grid */}
          <div className="flex-1">
            <div className="flex items-center justify-between mb-6">
              <p className="text-muted-foreground">
                Showing {products.length} results
              </p>
              <Select defaultValue="popular">
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="popular">Most Popular</SelectItem>
                  <SelectItem value="newest">Newest First</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="rating">Highest Rated</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Browse;
