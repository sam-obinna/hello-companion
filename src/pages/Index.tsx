import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Heart, Zap } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between">
          <span className="text-lg sm:text-xl font-semibold text-foreground">brand.</span>
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">Features</a>
            <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">About</a>
            <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">Contact</a>
          </div>
          <Button size="sm">Get Started</Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 sm:pt-32 pb-12 sm:pb-20 px-4 sm:px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-secondary text-secondary-foreground text-xs sm:text-sm mb-6 sm:mb-8 animate-fade-in">
            <Sparkles className="w-3 h-3 sm:w-4 sm:h-4" />
            <span>Welcome to something new</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight mb-4 sm:mb-6 animate-fade-in [animation-delay:100ms] opacity-0">
            Beautiful things
            <br />
            <span className="text-primary">start here.</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 sm:mb-10 animate-fade-in [animation-delay:200ms] opacity-0">
            Create, design, and build extraordinary experiences with simplicity at the core. Your journey begins now.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 animate-fade-in [animation-delay:300ms] opacity-0">
            <Button size="lg" className="gap-2 w-full sm:w-auto">
              Start Creating <ArrowRight className="w-4 h-4" />
            </Button>
            <Button variant="outline" size="lg" className="w-full sm:w-auto">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-12 sm:py-20 px-4 sm:px-6 bg-card">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-10 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 sm:mb-4">
              Why choose us?
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground max-w-xl mx-auto">
              Simple, powerful, and designed with you in mind.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            <FeatureCard
              icon={<Sparkles className="w-5 h-5 sm:w-6 sm:h-6" />}
              title="Intuitive Design"
              description="Clean interfaces that feel natural and easy to navigate from day one."
            />
            <FeatureCard
              icon={<Zap className="w-5 h-5 sm:w-6 sm:h-6" />}
              title="Lightning Fast"
              description="Built for performance so you can focus on what matters most."
            />
            <FeatureCard
              icon={<Heart className="w-5 h-5 sm:w-6 sm:h-6" />}
              title="Made with Care"
              description="Every detail crafted with attention and love for great experiences."
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-20 px-4 sm:px-6">
        <div className="container mx-auto max-w-2xl text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4 sm:mb-6">
            Ready to get started?
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground mb-6 sm:mb-8">
            Join thousands of others who have already made the switch.
          </p>
          <Button size="lg" className="gap-2 w-full sm:w-auto">
            Get Started Today <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 sm:py-8 px-4 sm:px-6 border-t border-border">
        <div className="container mx-auto text-center text-muted-foreground text-xs sm:text-sm">
          © 2024 brand. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

const FeatureCard = ({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) => (
  <div className="p-5 sm:p-6 md:p-8 rounded-xl bg-background border border-border hover:border-primary/30 transition-colors">
    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-4 sm:mb-5">
      {icon}
    </div>
    <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-2 sm:mb-3">{title}</h3>
    <p className="text-sm sm:text-base text-muted-foreground">{description}</p>
  </div>
);

export default Index;
