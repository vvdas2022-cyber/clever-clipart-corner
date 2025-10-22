import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProductCard from "@/components/ProductCard";
import CategoryCard from "@/components/CategoryCard";
import Footer from "@/components/Footer";
import { Palette, FileText, Type, Sparkles } from "lucide-react";
import productFlowers from "@/assets/product-flowers.jpg";
import productAnimals from "@/assets/product-animals.jpg";
import productFonts from "@/assets/product-fonts.jpg";
import productTemplates from "@/assets/product-templates.jpg";

const Index = () => {
  // Mock featured products
  const featuredProducts = [
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
  ];

  const categories = [
    {
      title: "Clipart",
      icon: Palette,
      description: "Beautiful watercolor & digital illustrations",
      image: productFlowers,
      link: "/browse?category=clipart",
    },
    {
      title: "Templates",
      icon: FileText,
      description: "Ready-to-use designs for any project",
      image: productTemplates,
      link: "/browse?category=templates",
    },
    {
      title: "Fonts",
      icon: Type,
      description: "Unique typography for your creations",
      image: productFonts,
      link: "/browse?category=fonts",
    },
    {
      title: "Stickers",
      icon: Sparkles,
      description: "Adorable digital stickers & graphics",
      image: productAnimals,
      link: "/browse?category=stickers",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />

        {/* Categories Section */}
        <section className="container mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Browse by Category</h2>
            <p className="text-muted-foreground text-lg">Explore our curated collections of digital assets</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category) => (
              <CategoryCard key={category.title} {...category} />
            ))}
          </div>
        </section>

        {/* Featured Products Section */}
        <section className="container mx-auto px-4 py-16 bg-muted/30 rounded-3xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Featured Products</h2>
            <p className="text-muted-foreground text-lg">Handpicked favorites from our talented creators</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="container mx-auto px-4 py-20">
          <div className="bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 rounded-3xl p-12 text-center">
            <h2 className="text-4xl font-bold mb-4">Ready to Start Selling?</h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
              Join thousands of creators earning money from their digital art. 
              It's free to start, and we provide all the tools you need.
            </p>
            <a href="/dashboard" className="inline-flex items-center justify-center rounded-lg bg-primary px-8 py-3 text-primary-foreground font-semibold shadow-lg hover:shadow-xl transition-all">
              Get Started Today
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
