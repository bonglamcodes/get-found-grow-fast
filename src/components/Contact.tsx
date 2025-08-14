import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { Mail, Phone, Calendar, MessageCircle, Sparkles } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contact" className="py-20 gradient-subtle">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Ready to <span className="gradient-hero bg-clip-text text-transparent">Grow</span> Your Business?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We are excited about the opportunity to help your business thrive online. Contact us to schedule a free consultation and discuss your specific needs.
            </p>
          </div>
        </ScrollReveal>
        
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <ScrollReveal delay={200}>
            <Card className="p-8 lg:p-12 border-0 bg-card/50 backdrop-blur-sm shadow-elegant">
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Get Your Free Consultation</h3>
                  <p className="text-muted-foreground">
                    Let's discuss how we can help you achieve your goals and build a powerful online presence that drives results.
                  </p>
                </div>
                
                <div className="space-y-6">
                  <div className="flex items-center gap-4 p-4 rounded-xl bg-accent/20 border border-primary/10">
                    <div className="flex items-center justify-center w-12 h-12 gradient-primary rounded-xl">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold">Email Us</div>
                      <a href="mailto:bonglamlouis@gmail.com" className="text-primary hover:underline">
                        bonglamlouis@gmail.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 p-4 rounded-xl bg-accent/20 border border-secondary/10">
                    <div className="flex items-center justify-center w-12 h-12 gradient-secondary rounded-xl">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold">Call or WhatsApp</div>
                      <a href="tel:+233534726135" className="text-secondary hover:underline">
                        +233 53 4726 135
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button variant="hero" size="lg" className="flex-1">
                    <Calendar className="w-5 h-5 mr-2" />
                    Schedule Free Consultation
                  </Button>
                  <Button variant="outline" size="lg" className="flex-1">
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Send WhatsApp
                  </Button>
                </div>
              </div>
            </Card>
          </ScrollReveal>
          
          <ScrollReveal delay={400}>
            <div className="space-y-8">
              <Card className="p-8 border-0 bg-gradient-primary text-white">
                <div className="flex items-center gap-3 mb-4">
                  <Sparkles className="w-6 h-6" />
                  <h4 className="text-xl font-bold">Affordable & Flexible Packages</h4>
                </div>
                <p className="text-white/80 mb-6">
                  We offer affordable and flexible packages tailored to your business needs. Let's build something powerful—on your budget.
                </p>
                <Button variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
                  Get Detailed Quote
                </Button>
              </Card>
              
              <Card className="p-8 border-0 bg-gradient-secondary text-white">
                <h4 className="text-xl font-bold mb-4">Why Choose GenzLogic?</h4>
                <ul className="space-y-3 text-white/80">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                    <span>Proven track record with 50% increase in client leads</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                    <span>Modern, mobile-first design approach</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                    <span>Complete digital solutions under one roof</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                    <span>Ongoing support and analytics tracking</span>
                  </li>
                </ul>
              </Card>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};