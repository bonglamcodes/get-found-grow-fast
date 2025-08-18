import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { 
  Globe, 
  ShoppingCart, 
  TrendingUp, 
  Share2, 
  BarChart3, 
  MapPin, 
  Palette,
  Zap,
  Rocket,
  Shield,
  ArrowRight
} from "lucide-react";
import portfolioImage from "@/assets/portfolio-devices.jpg";
import dashboardImage from "@/assets/dashboard-analytics.jpg";

const services = [
  {
    icon: Rocket,
    title: "Lightning-Fast Websites",
    description: "Blazing fast, mobile-first websites that load in under 2 seconds and convert like crazy.",
    color: "primary",
    image: portfolioImage
  },
  {
    icon: ShoppingCart,
    title: "Modern E-commerce",
    description: "Next-gen online stores with AI-powered recommendations, one-click checkout, and real-time inventory.",
    color: "secondary"
  },
  {
    icon: TrendingUp,
    title: "SEO Domination",
    description: "Rank #1 on Google with our advanced SEO strategies and real-time performance tracking.",
    color: "accent",
    image: dashboardImage
  },
  {
    icon: Share2,
    title: "Social Media Integration",
    description: "Connect all your social platforms for viral growth and instant customer engagement.",
    color: "primary"
  },
  {
    icon: BarChart3,
    title: "Smart Analytics",
    description: "AI-powered insights that predict customer behavior and maximize your revenue.",
    color: "secondary"
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-level security with advanced encryption and real-time threat protection.",
    color: "accent"
  }
];

export const Services = () => {
  return (
    <section id="services" className="py-32 relative overflow-hidden bg-gradient-to-br from-white to-gray-50/80">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-64 h-64 gradient-primary rounded-full blur-3xl opacity-10 floating"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 gradient-secondary rounded-full blur-3xl opacity-10 floating-delayed"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-3 glass rounded-full px-6 py-3 border-glow mb-8">
              <Zap className="w-5 h-5 text-accent" />
              <span className="text-sm font-semibold">Our Superpowers</span>
            </div>
            
            <h2 className="text-5xl lg:text-7xl font-black mb-8">
              <span className=" p-2 rounded-sm bg-clip-text text-white ">
                Digital Solutions
              </span>
              <br />
            </h2>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We don't just build websites and applications we create digital experiences that transform businesses and captivate audiences.
            </p>
          </div>
        </ScrollReveal>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ScrollReveal key={service.title} delay={index * 150}>
              <Card className={`glass border-glow hover-lift p-8 group relative overflow-hidden ${
                service.image ? 'lg:col-span-2' : ''
              }`}>
                {/* Background Gradient */}
                <div className={`absolute inset-0 gradient-${service.color} opacity-5 group-hover:opacity-10 transition-opacity`}></div>
                
                <div className={`grid ${service.image ? 'lg:grid-cols-2' : ''} gap-6 items-center relative z-10`}>
                  <div>
                    <div className={`inline-flex p-4 rounded-2xl gradient-${service.color} mb-6 shadow-glow`}>
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-4 text-glow">{service.title}</h3>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {service.description}
                    </p>
                    
                    <Button variant="neon" size="sm" className="group/btn">
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                  
                  {service.image && (
                    <div className="relative">
                      <div className={`absolute inset-0 gradient-${service.color} rounded-2xl blur-xl opacity-20`}></div>
                      <img 
                        src={service.image}
                        alt={service.title}
                        className="relative rounded-2xl shadow-card hover-lift border border-white/10"
                      />
                    </div>
                  )}
                </div>
              </Card>
            </ScrollReveal>
          ))}
        </div>
        
        <ScrollReveal delay={600}>
          <div className="text-center mt-20">
            <Button variant="hero" size="lg" className="text-lg py-6 px-12">
              <Rocket className="w-6 h-6 mr-3" />
              Launch Your Project
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};