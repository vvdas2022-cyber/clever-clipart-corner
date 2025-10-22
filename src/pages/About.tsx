import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-16 max-w-4xl">
        <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
          About ArtClip
        </h1>
        <div className="prose prose-lg max-w-none space-y-6 text-foreground">
          <p className="text-xl text-muted-foreground leading-relaxed">
            Welcome to ArtClip, your premier destination for high-quality digital clipart, templates, and creative assets.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-4">Our Story</h2>
          <p className="text-muted-foreground leading-relaxed">
            Founded by artists for artists, ArtClip was created to bridge the gap between talented digital creators 
            and those seeking beautiful, unique assets for their projects. We believe that everyone deserves access 
            to professional-quality digital art without breaking the bank.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-4">What We Offer</h2>
          <ul className="space-y-3 text-muted-foreground">
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 rounded-full bg-primary mt-2" />
              <span>Thousands of high-quality digital products from talented creators worldwide</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 rounded-full bg-primary mt-2" />
              <span>Instant digital downloads for immediate use in your projects</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 rounded-full bg-primary mt-2" />
              <span>Commercial use licenses included with most products</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 rounded-full bg-primary mt-2" />
              <span>A supportive community of creators and designers</span>
            </li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-4">Our Mission</h2>
          <p className="text-muted-foreground leading-relaxed">
            We're on a mission to empower creators to earn a living from their art while making beautiful digital 
            assets accessible to everyone. Whether you're a seasoned designer or just starting your creative journey, 
            ArtClip provides the tools and platform you need to succeed.
          </p>

          <div className="bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 rounded-2xl p-8 mt-12">
            <h3 className="text-2xl font-bold mb-4">Join Our Community</h3>
            <p className="text-muted-foreground mb-6">
              Ready to start creating or shopping for digital art? Join thousands of creators and customers 
              who trust ArtClip for their digital asset needs.
            </p>
            <a href="/auth" className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 text-primary-foreground font-semibold shadow-lg hover:shadow-xl transition-all">
              Get Started Today
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
