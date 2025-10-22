import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Terms = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-16 max-w-4xl">
        <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
          Terms of Use
        </h1>
        <p className="text-muted-foreground mb-8">Last updated: January 2025</p>

        <div className="prose prose-lg max-w-none space-y-8 text-foreground">
          <section>
            <h2 className="text-3xl font-bold mb-4">1. Acceptance of Terms</h2>
            <p className="text-muted-foreground leading-relaxed">
              By accessing and using ArtClip, you accept and agree to be bound by these Terms of Use. 
              If you do not agree to these terms, please do not use our platform.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-4">2. User Accounts</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              When you create an account with us, you must provide accurate and complete information. 
              You are responsible for maintaining the security of your account and password.
            </p>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-primary mt-2" />
                <span>You must be at least 18 years old to create an account</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-primary mt-2" />
                <span>You are responsible for all activities under your account</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-primary mt-2" />
                <span>You must notify us immediately of any unauthorized access</span>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-4">3. Seller Terms</h2>
            <p className="text-muted-foreground leading-relaxed">
              Sellers on ArtClip agree to provide high-quality digital products and maintain accurate product 
              descriptions. Sellers retain ownership of their work but grant ArtClip the right to display and 
              distribute their products through our platform.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-4">4. Buyer Terms</h2>
            <p className="text-muted-foreground leading-relaxed">
              Buyers receive a license to use purchased digital products according to the terms specified in 
              each product listing. Digital products are non-refundable once downloaded unless they are 
              significantly different from their description.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-4">5. Intellectual Property</h2>
            <p className="text-muted-foreground leading-relaxed">
              All content on ArtClip, including text, graphics, logos, and software, is protected by 
              copyright and other intellectual property laws. Sellers retain copyright to their uploaded content.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-4">6. Prohibited Activities</h2>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-destructive mt-2" />
                <span>Uploading content you don't have rights to</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-destructive mt-2" />
                <span>Reselling purchased digital files as-is</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-destructive mt-2" />
                <span>Sharing download links with others</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-destructive mt-2" />
                <span>Attempting to reverse engineer or copy platform features</span>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-4">7. Limitation of Liability</h2>
            <p className="text-muted-foreground leading-relaxed">
              ArtClip is not liable for any indirect, incidental, or consequential damages arising from 
              your use of the platform. We make no warranties about the accuracy or reliability of content.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-4">8. Changes to Terms</h2>
            <p className="text-muted-foreground leading-relaxed">
              We reserve the right to modify these terms at any time. Continued use of ArtClip after 
              changes constitutes acceptance of the new terms.
            </p>
          </section>

          <div className="bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 rounded-2xl p-8 mt-12">
            <h3 className="text-2xl font-bold mb-4">Questions About Our Terms?</h3>
            <p className="text-muted-foreground mb-6">
              If you have any questions about these Terms of Use, please contact our support team.
            </p>
            <a href="/contact" className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 text-primary-foreground font-semibold shadow-lg hover:shadow-xl transition-all">
              Contact Us
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Terms;
