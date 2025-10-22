import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "How do I purchase digital products?",
      answer: "Simply browse our marketplace, add items to your cart, and proceed to checkout. After payment, you'll receive instant access to download your digital files.",
    },
    {
      question: "What file formats do you offer?",
      answer: "We offer a variety of file formats including PNG, JPG, SVG, PDF, and more. Each product listing clearly specifies what formats are included.",
    },
    {
      question: "Can I use these products commercially?",
      answer: "Most products include a commercial use license, but always check the specific product listing for license details. Some sellers may have restrictions.",
    },
    {
      question: "How do I start selling on ArtClip?",
      answer: "Create an account, set up your seller profile, and start uploading your digital products. We handle payments, delivery, and customer support for you.",
    },
    {
      question: "What fees do you charge sellers?",
      answer: "We charge a small commission on each sale to cover platform costs and payment processing. You keep the majority of your earnings.",
    },
    {
      question: "How do I download my purchased files?",
      answer: "After purchase, you'll receive an email with download links. You can also access your purchases anytime from your account dashboard.",
    },
    {
      question: "What if I have issues with a purchase?",
      answer: "Contact our support team within 30 days of purchase if you experience any issues. We're here to help resolve any problems quickly.",
    },
    {
      question: "Can I resell items I purchase?",
      answer: "Generally, you cannot resell digital files as-is. However, you can use them in your own creative projects and sell those final products. Check each product's license for specific terms.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-16 max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-muted-foreground">
            Find answers to common questions about ArtClip
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border border-border rounded-lg px-6 bg-card"
            >
              <AccordionTrigger className="text-left hover:text-primary">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-12 text-center p-8 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 rounded-2xl">
          <h2 className="text-2xl font-bold mb-4">Still have questions?</h2>
          <p className="text-muted-foreground mb-6">
            Can't find what you're looking for? Get in touch with our support team.
          </p>
          <a href="/contact" className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 text-primary-foreground font-semibold shadow-lg hover:shadow-xl transition-all">
            Contact Support
          </a>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default FAQ;
