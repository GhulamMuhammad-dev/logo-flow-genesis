
import { Header } from "@/components/layout/Header";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="gradient-bg py-20 px-4">
          <div className="container mx-auto max-w-5xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  Create your brand identity with AI
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground">
                  Generate professional logos, color palettes, and brand voice in minutes, not months.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link to="/auth">
                    <Button size="lg" className="text-lg">
                      Get Started
                    </Button>
                  </Link>
                  <Link to="/auth">
                    <Button variant="outline" size="lg" className="text-lg">
                      Learn More
                    </Button>
                  </Link>
                </div>
              </div>
              
              <div className="flex justify-center">
                <div className="relative">
                  {/* Animated logo placeholder with color transitions */}
                  <div className="w-64 h-64 rounded-full logo-placeholder flex items-center justify-center text-white font-bold text-3xl shadow-lg transition-all duration-500">
                    B
                  </div>
                  <div className="absolute -bottom-4 -right-4 glass-card p-3 rounded-lg shadow-lg">
                    <div className="flex gap-2">
                      {/* Animated color palette with staggered transitions */}
                      {[
                        { color: "#60A5FA", delay: 0 },
                        { color: "#A78BFA", delay: 0.25 },
                        { color: "#F472B6", delay: 0.5 },
                        { color: "#34D399", delay: 0.75 },
                        { color: "#FBBF24", delay: 1 }
                      ].map((item, i) => (
                        <div 
                          key={i} 
                          className="w-6 h-6 rounded-full palette-color" 
                          style={{ '--delay': item.delay } as React.CSSProperties}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="glass-card p-6 rounded-lg shadow-sm">
                <div className="h-12 w-12 bg-primary/20 text-primary rounded-lg flex items-center justify-center text-xl font-bold mb-4">
                  1
                </div>
                <h3 className="text-xl font-bold mb-2">Create Your Brief</h3>
                <p className="text-muted-foreground">
                  Tell us about your brand, audience, and vision in a simple form.
                </p>
              </div>
              
              <div className="glass-card p-6 rounded-lg shadow-sm">
                <div className="h-12 w-12 bg-primary/20 text-primary rounded-lg flex items-center justify-center text-xl font-bold mb-4">
                  2
                </div>
                <h3 className="text-xl font-bold mb-2">AI Generation</h3>
                <p className="text-muted-foreground">
                  Our AI creates multiple options for logos, colors, and brand voice.
                </p>
              </div>
              
              <div className="glass-card p-6 rounded-lg shadow-sm">
                <div className="h-12 w-12 bg-primary/20 text-primary rounded-lg flex items-center justify-center text-xl font-bold mb-4">
                  3
                </div>
                <h3 className="text-xl font-bold mb-2">Download & Use</h3>
                <p className="text-muted-foreground">
                  Get your complete brand kit ready for use across all platforms.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 px-4 bg-secondary/30 backdrop-blur-sm">
          <div className="container mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to build your brand?</h2>
            <p className="text-lg mb-8 max-w-xl mx-auto text-muted-foreground">
              Join thousands of entrepreneurs who have created stunning brand identities with BrandCraft AI.
            </p>
            <Link to="/auth">
              <Button size="lg">Get Started Free</Button>
            </Link>
          </div>
        </section>
      </main>
      
      <footer className="border-t border-border py-8 px-4 bg-background">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-sm text-muted-foreground">
                © 2025 BrandCraft AI. All rights reserved.
              </p>
            </div>
            <div className="flex gap-6">
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground">
                Terms
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground">
                Privacy
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground">
                Contact
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
