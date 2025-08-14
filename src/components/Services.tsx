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
  Palette 
} from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Professional Business Websites",
    description: "Fast, mobile-friendly websites that become your 24/7 digital storefront.",
    gradient: "gradient-primary"
  },
  {
    icon: ShoppingCart,
    title: "Online Shops / E-commerce",
    description: "Sell products or services online with secure payments, easy checkout, order tracking, and customer email notifications—even while you sleep.",
    gradient: "gradient-secondary"
  },
  {
    icon: TrendingUp,
    title: "SEO Optimization + Google Analytics",
    description: "Rank higher on Google and track visitor data, location, and behavior—so you can grow with insights, not guesswork.",
    gradient: "gradient-primary"
  },
  {
    icon: Share2,
    title: "Social Media Integration",
    description: "Link your website to WhatsApp, Instagram, Facebook, TikTok, Snapchat, Telegram and more—for instant engagement.",
    gradient: "gradient-secondary"
  },
  {
    icon: BarChart3,
    title: "Business Dashboards",
    description: "Manage orders, customers, inventory, and reports all in one place.",
    gradient: "gradient-primary"
  },
  {
    icon: MapPin,
    title: "Google Business Profile Setup",
    description: "Show up in local Google searches and Maps when people search nearby.",
    gradient: "gradient-secondary"
  },
  {
    icon: Palette,
    title: "Website Redesigns",
    description: "Upgrade outdated websites into clean, modern, results-driven platforms.",
    gradient: "gradient-primary"
  }
];

export const Services = () => {
  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Our <span className="gradient-hero bg-clip-text text-transparent">Services</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We help small middle-scale businesses and startups get found online and turn visitors into paying customers.
            </p>
          </div>
        </ScrollReveal>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ScrollReveal key={service.title} delay={index * 100}>
              <Card className="p-8 hover-lift border-0 bg-card/50 backdrop-blur-sm">
                <div className={`inline-flex p-3 rounded-2xl ${service.gradient} mb-6`}>
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </Card>
            </ScrollReveal>
          ))}
        </div>
        
        <ScrollReveal delay={400}>
          <div className="text-center mt-16">
            <Button variant="hero" size="lg">
              Get Started Today
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};