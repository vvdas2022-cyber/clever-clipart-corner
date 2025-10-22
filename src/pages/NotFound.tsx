import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10">
      <div className="text-center space-y-6 p-8">
        <h1 className="text-9xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
          404
        </h1>
        <h2 className="text-3xl font-bold text-foreground">Page Not Found</h2>
        <p className="text-xl text-muted-foreground max-w-md">
          Oops! The page you're looking for seems to have wandered off into the digital art gallery.
        </p>
        <a href="/">
          <Button size="lg" className="mt-4">
            Return to Home
          </Button>
        </a>
      </div>
    </div>
  );
};

export default NotFound;
