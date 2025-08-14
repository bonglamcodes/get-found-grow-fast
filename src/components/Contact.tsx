import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { 
  Mail, 
  Phone, 
  Calendar, 
  MessageCircle, 
  Sparkles, 
  Rocket,
  ArrowRight
} from "lucide-react";

export const Contact = () => {
  return (
    <section id="contact" className="py-32 relative overflow-hidden w-full">
      {/* Background glow effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 gradient-primary rounded-full blur-3xl opacity-20 floating"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 gradient-secondary rounded-full blur-3xl opacity-20 floating-delayed"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10 w-full max-w-full">
        <ScrollReveal>
          <div className="text-center mb-20 px-2">
            <div className="inline-flex items-center gap-3 glass rounded-full px-6 py-3 border-glow mb-8">
              <Rocket className="w-5 h-5 text-primary" />
              <span className="text-sm font-semibold">Let's Launch</span>
            </div>
            
            <h2 className="text-4xl sm:text-5xl lg:text-7xl font-black mb-8">
              Ready to Dominate
              Your Market?
            </h2>
            
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
              Join the digital revolution. Get your free consultation and discover how we can transform your business into a market leader.
            </p>
          </div>
        </ScrollReveal>
        
        {/* Contact and package section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <ScrollReveal delay={200}>
            <Card className="glass border-glow p-8 sm:p-12 hover-lift w-full">
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-glow">
                    Get Your Free Strategy Session
                  </h3>
                  <p className="text-muted-foreground text-base sm:text-lg">
                    Let's discuss your vision and create a roadmap to digital dominance.
                  </p>
                </div>
                
                <div className="space-y-6">
                  {/* Email */}
                  <div className="flex items-center gap-4 p-6 glass border-glow rounded-2xl hover-lift group w-full">
                    <div className="flex items-center justify-center w-16 h-16 gradient-primary rounded-2xl group-hover:scale-110 transition-transform">
                      <Mail className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <div className="font-bold text-lg">Email Us</div>
                      <a 
                        href="mailto:bonglamlouis@gmail.com" 
                        className="text-primary hover:text-primary/80 transition-colors text-glow break-all"
                      >
                        bonglamlouis@gmail.com
                      </a>
                    </div>
                  </div>
                  
                  {/* Phone */}
                  <div className="flex items-center gap-4 p-6 glass border-glow rounded-2xl hover-lift group w-full">
                    <div className="flex items-center justify-center w-16 h-16 gradient-secondary rounded-2xl group-hover:scale-110 transition-transform">
                      <Phone className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <div className="font-bold text-lg">Call or WhatsApp</div>
                      <a 
                        href="tel:+233534726135" 
                        className="text-secondary hover:text-secondary/80 transition-colors text-glow break-all"
                      >
                        +233 53 4726 135
                      </a>
                    </div>
                  </div>
                </div>
                
                {/* Action buttons */}
                <div className="space-y-4">
                  <Button variant="hero" size="lg" className="w-full text-lg py-6 group">
                    <Calendar className="w-6 h-6 mr-3" />
                    Book Free Strategy Call
                    <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-2 transition-transform" />
                  </Button>
                  
                  <Button variant="neon" size="lg" className="w-full text-lg py-6 group">
                    <MessageCircle className="w-6 h-6 mr-3" />
                    Start WhatsApp Chat
                  </Button>
                </div>
              </div>
            </Card>
          </ScrollReveal>
          
          {/* Right side info card */}
          <ScrollReveal delay={400}>
            <div className="space-y-8 w-full">
              <Card className="gradient-primary p-8 text-white border-0 shadow-glow w-full">
                <div className="flex items-center gap-3 mb-6">
                  <Sparkles className="w-8 h-8" />
                  <h4 className="text-xl sm:text-2xl font-bold">Custom Packages Available</h4>
                </div>
                <p className="text-white/90 mb-6 text-base sm:text-lg">
                  Flexible solutions tailored to your budget and goals.
                </p>
                <Button 
                  variant="outline" 
                  className="bg-white/10 border-white/20 text-white hover:bg-white/20 hover:scale-105"
                >
                  Get Custom Quote
                </Button>
              </Card>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};
