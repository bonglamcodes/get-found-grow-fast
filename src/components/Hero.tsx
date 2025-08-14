import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { ArrowRight, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-subtle overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 gradient-primary rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 gradient-secondary rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }}></div>
      </div>
      
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <ScrollReveal className="lg:order-1">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 bg-accent/50 backdrop-blur-sm border border-primary/20 rounded-full px-4 py-2 text-sm font-medium text-accent-foreground">
                <Sparkles className="w-4 h-4 text-primary" />
                Empowering businesses through smart technology
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                HOW A STRONG
                <span className="block gradient-hero bg-clip-text text-transparent">
                  ONLINE PRESENCE
                </span>
                BOOSTS YOUR BUSINESS GROWTH
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
                Attract More Visitors, Win More Customers. Get found online and turn visitors into paying customers with professional websites, e-commerce solutions, and powerful digital marketing.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="hero" size="lg" className="group">
                  Get Your Free Consultation
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button variant="outline" size="lg">
                  View Our Work
                </Button>
              </div>
              
              <div className="flex items-center gap-8 pt-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">50%</div>
                  <div className="text-sm text-muted-foreground">Increase in leads</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-secondary">24/7</div>
                  <div className="text-sm text-muted-foreground">Digital storefront</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">100+</div>
                  <div className="text-sm text-muted-foreground">Happy clients</div>
                </div>
              </div>
            </div>
          </ScrollReveal>
          
          {/* Image */}
          <ScrollReveal delay={200} className="lg:order-2">
            <div className="relative">
              <div className="absolute inset-0 gradient-primary rounded-3xl blur-2xl opacity-20 animate-pulse-glow"></div>
              <img 
                src={heroImage}
                alt="Modern digital solutions showcase"
                className="relative rounded-3xl shadow-elegant hover-lift"
              />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};