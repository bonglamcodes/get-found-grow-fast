import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { ArrowRight, Sparkles, Play, Zap } from "lucide-react";
import heroImage from "@/assets/hero-futuristic.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 gradient-primary rounded-full blur-3xl opacity-20 floating"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 gradient-secondary rounded-full blur-3xl opacity-20 floating-delayed"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 gradient-accent rounded-full blur-2xl opacity-10 floating"></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="h-full w-full" style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}></div>
        </div>
      </div>
      
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <ScrollReveal className="space-y-8">
            <div className="inline-flex items-center gap-3 glass rounded-full px-6 py-3 border-glow">
              <Sparkles className="w-5 h-5 text-primary" />
              <span className="text-sm font-semibold text-glow">Next-Gen Digital Solutions</span>
            </div>
            
            <h1 className="text-6xl lg:text-8xl font-black leading-tight">
              TRANSFORM
              <span className="block gradient-hero bg-clip-text text-transparent text-glow">
                YOUR BUSINESS
              </span>
              <span className="block text-4xl lg:text-5xl font-normal text-muted-foreground">
                with modern web solutions
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
              We create <span className="text-primary font-semibold text-glow">stunning digital experiences</span> that convert visitors into customers. Get ready to dominate your market with cutting-edge web technology.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6">
              <Button variant="hero" size="lg" className="group text-lg py-6 px-8">
                <Zap className="w-6 h-6 mr-3" />
                Start Your Transformation
                <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-2 transition-transform" />
              </Button>
              
              <Button variant="neon" size="lg" className="text-lg py-6 px-8 group">
                <Play className="w-5 h-5 mr-3" />
                Watch Demo
              </Button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="text-center">
                <div className="text-4xl font-black text-primary text-glow">500%</div>
                <div className="text-sm text-muted-foreground">ROI Increase</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-black text-secondary text-glow">24/7</div>
                <div className="text-sm text-muted-foreground">Always Working</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-black text-accent text-glow">∞</div>
                <div className="text-sm text-muted-foreground">Possibilities</div>
              </div>
            </div>
          </ScrollReveal>
          
          {/* Futuristic Image */}
          <ScrollReveal delay={300} className="relative">
            <div className="relative group">
              <div className="absolute inset-0 gradient-primary rounded-3xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity"></div>
              <div className="absolute inset-4 gradient-secondary rounded-3xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
              <img 
                src={heroImage}
                alt="Futuristic digital transformation"
                className="relative rounded-3xl shadow-glow hover-lift border border-primary/20"
              />
              
              {/* Floating Elements */}
              <div className="absolute -top-6 -right-6 glass rounded-2xl p-4 floating border-glow">
                <Sparkles className="w-8 h-8 text-primary" />
              </div>
              <div className="absolute -bottom-6 -left-6 glass rounded-2xl p-4 floating-delayed border-glow">
                <Zap className="w-8 h-8 text-secondary" />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};