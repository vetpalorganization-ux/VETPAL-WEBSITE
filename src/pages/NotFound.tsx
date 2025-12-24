import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft, Anchor } from "lucide-react";

const NotFound = () => {
  return (
    <Layout>
      <section className="min-h-[70vh] flex items-center justify-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-24 h-24 mx-auto mb-8 rounded-full bg-accent/10 flex items-center justify-center">
              <Anchor className="w-12 h-12 text-accent" />
            </div>
            
            <h1 className="font-heading text-6xl md:text-8xl font-bold text-foreground mb-4">
              404
            </h1>
            
            <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-4">
              Page Not Found
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8">
              Looks like this page has drifted out to sea. 
              Let us help you navigate back to shore.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="accent" asChild>
                <Link to="/">
                  <Home className="w-4 h-4" />
                  Go Home
                </Link>
              </Button>
              <Button variant="outline" onClick={() => window.history.back()}>
                <ArrowLeft className="w-4 h-4" />
                Go Back
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default NotFound;
