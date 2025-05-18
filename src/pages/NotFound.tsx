
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/layout/Header";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 flex flex-col items-center justify-center py-12 px-4">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-brandblue-600 mb-4">404</h1>
          <p className="text-2xl font-medium mb-6">Page not found</p>
          <p className="text-muted-foreground mb-8">
            Sorry, the page you are looking for doesn't exist or has been moved.
          </p>
          <Link to="/">
            <Button>Return to Home</Button>
          </Link>
        </div>
      </main>
      
      <footer className="bg-white border-t border-border py-4 px-4">
        <div className="container mx-auto">
          <p className="text-sm text-center text-muted-foreground">
            © 2025 BrandCraft AI. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default NotFound;
