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
    title: "Software Engineering",
    description: "Custom, scalable software solutions designed to solve complex business challenges with modern technologies.",
    color: "primary"
  },
  {
    icon: ShoppingCart,
    title: "E-commerce",
    description: "Future-ready online stores with one-click checkout, personalized shopping, and AI-powered recommendations.",
    color: "secondary"
  },
  {
    icon: Globe,
    title: "Web & Mobile Apps",
    description: "High-performance applications for web and mobile, built to deliver seamless user experiences everywhere.",
    color: "accent"
  },
  {
    icon: TrendingUp,
    title: "Product Management",
    description: "From strategy to launch — agile product roadmaps that ensure your idea turns into a market success.",
    color: "primary"
  },
  {
    icon: BarChart3,
    title: "Cloud & DevOps",
    description: "AWS deployments, CI/CD pipelines, and scalable infrastructure engineered for growth and reliability.",
    color: "secondary"
  },
  {
    icon: Share2,
    title: "API & System Integration",
    description: "Seamlessly connect systems, automate workflows, and integrate third-party APIs for smarter operations.",
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
            <div className="inline-flex items-center gap-3 bg-gray-100 border border-gray-300 rounded-full px-6 py-3 mb-8">
              <Zap className="w-5 h-5 text-accent" />
              <span className="text-sm font-semibold text-gray-800">Our Superpowers</span>
            </div>
            
            <h2 className="text-5xl lg:text-7xl font-black mb-8">
              <span className="text-gray-900">
                Digital Solutions
              </span>
              <br />
            </h2>
            
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              We don't just build websites and applications we create digital experiences that transform businesses and captivate audiences.
            </p>
          </div>
        </ScrollReveal>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ScrollReveal key={service.title} delay={index * 150}>
              <Card className="bg-white/80 border border-gray-200 shadow-md hover-lift p-8 group relative overflow-hidden">
                {/* Background Gradient */}
                <div className={`absolute inset-0 gradient-${service.color} opacity-5 group-hover:opacity-10 transition-opacity`}></div>
                
                <div className="relative z-10">
                  <div className={`inline-flex p-4 rounded-2xl gradient-${service.color} mb-6 shadow-glow`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">{service.title}</h3>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    {service.description}
                  </p>
                  
                  <Button variant="neon" size="sm" className="group/btn">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
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