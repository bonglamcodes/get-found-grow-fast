import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { Check, Target, Shield, Clock, TrendingUp, Users } from "lucide-react";

const benefits = [
  {
    icon: Users,
    title: "More customers discovering you online",
    description: "Expand your reach and attract new customers through digital channels"
  },
  {
    icon: Shield,
    title: "More credibility and trust",
    description: "Professional online presence builds customer confidence and trust"
  },
  {
    icon: Clock,
    title: "A business that works even when you're offline",
    description: "Your website works 24/7, generating leads and sales around the clock"
  },
  {
    icon: Target,
    title: "Tools to track and understand customer behavior",
    description: "Make data-driven decisions with detailed analytics and insights"
  },
  {
    icon: TrendingUp,
    title: "A stronger online brand",
    description: "Build a consistent, professional brand across all digital platforms"
  }
];

export const Benefits = () => {
  return (
    <section className="py-20 gradient-subtle">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              What You'll <span className="gradient-hero bg-clip-text text-transparent">Gain</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Transform your business with a powerful online presence that drives real results.
            </p>
          </div>
        </ScrollReveal>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <ScrollReveal key={benefit.title} delay={index * 100}>
              <div className="flex items-start gap-4 p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-primary/10 hover-lift">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-12 h-12 gradient-primary rounded-xl">
                    <benefit.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
          
          <ScrollReveal delay={500}>
            <div className="md:col-span-2 lg:col-span-1 flex items-center justify-center">
              <div className="text-center p-8">
                <div className="inline-flex items-center justify-center w-20 h-20 gradient-secondary rounded-full mb-4 animate-pulse-glow">
                  <Check className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-2 gradient-hero bg-clip-text text-transparent">
                  Guaranteed Results
                </h3>
                <p className="text-muted-foreground">
                  We're confident our services will provide a significant return on your investment.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};