import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { Quote, ExternalLink, TrendingUp, Users, ShoppingBag, Star, Zap, ArrowRight } from "lucide-react";
import ecommerceImage from "@/assets/ecommerce-showcase.jpg";

export const CaseStudy = () => {
  return (
    <section className="py-32 relative overflow-hidden gradient-dark">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 gradient-secondary rounded-full blur-3xl opacity-10 floating"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 gradient-accent rounded-full blur-3xl opacity-10 floating-delayed"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-3 glass rounded-full px-6 py-3 border-glow mb-8">
              <Star className="w-5 h-5 text-accent" />
              <span className="text-sm font-semibold">Client Success</span>
            </div>
            
            <h2 className="text-5xl lg:text-7xl font-black mb-8">
              Real Impact
            </h2>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover how we helped Rose Fabric Mall evolve from a small local shop into a thriving online store with booming sales and nationwide reach.
            </p>
          </div>
        </ScrollReveal>
        
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
          {/* Case Study Content */}
          <ScrollReveal delay={200}>
            <div className="space-y-8">
              {/* Header */}
              <div className="flex items-center gap-4">
                <Quote className="w-12 h-12 text-primary" />
                <div>
                  <h3 className="text-3xl font-bold text-glow">Rose Fabric Mall</h3>
                  <p className="text-muted-foreground">Fashion & Beauty • United Kingdom</p>
                </div>
                <a
                  href="https://rosefabricmall.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="neon" size="sm" className="ml-auto">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Visit Site
                  </Button>
                </a>
              </div>
              
              {/* Story */}
              <Card className="glass border-glow p-8">
                <p className="text-lg leading-relaxed mb-6">
                  "Within just <span className="text-secondary font-bold text-glow">3 months</span>, 
                  Rose Fabric Mall’s online store boosted sales by <span className="text-secondary font-bold text-glow">200%</span> 
                  and expanded their reach far beyond local customers."
                </p>
                
                <p className="text-muted-foreground mb-6">
                  We transformed their physical shop into a fully functional e-commerce platform, complete with product browsing, secure checkout, and mobile-first design. Our SEO, social media integration, and analytics strategies helped them capture a national audience and build lasting online presence.
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {[
                    'E-commerce Storefront', 
                    'SEO Growth', 
                    'Mobile-Optimized Design', 
                    'Social Media Integration', 
                    'Analytics & Insights'
                  ].map((tag) => (
                    <span key={tag} className="glass border-glow px-3 py-1 rounded-full text-sm">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <Button variant="hero" className="group">
                  Read Full Case Study
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Card>
              
              {/* Rating */}
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-muted-foreground">5.0 rating from client</p>
              </div>
            </div>
          </ScrollReveal>
          
          {/* Visual Results */}
          <ScrollReveal delay={400}>
            <div className="space-y-8">
              {/* Main Image */}
              <div className="relative group">
                <div className="absolute inset-0 gradient-secondary rounded-3xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity"></div>
                <img 
                  src={ecommerceImage}
                  alt="Rose Fabric Mall online store showcase"
                  className="relative rounded-3xl shadow-glow hover-lift border border-primary/20"
                />
                
                {/* Floating Stats */}
                <div className="absolute -top-4 -right-4 glass border-glow rounded-2xl p-4 floating">
                  <div className="text-2xl font-bold text-secondary text-glow">200%</div>
                  <div className="text-xs text-muted-foreground">Sales Growth</div>
                </div>
              </div>
              
              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4">
                <Card className="glass border-glow p-6 text-center hover-lift">
                  <TrendingUp className="w-8 h-8 text-primary mx-auto mb-2" />
                  <div className="text-2xl font-bold text-primary text-glow">200%</div>
                  <div className="text-sm text-muted-foreground">More Sales</div>
                </Card>
                
                <Card className="glass border-glow p-6 text-center hover-lift">
                  <Users className="w-8 h-8 text-secondary mx-auto mb-2" />
                  <div className="text-2xl font-bold text-secondary text-glow">5</div>
                  <div className="text-sm text-muted-foreground">Months</div>
                </Card>
                
                <Card className="glass border-glow p-6 text-center hover-lift">
                  <ShoppingBag className="w-8 h-8 text-accent mx-auto mb-2" />
                  <div className="text-2xl font-bold text-accent text-glow">+500</div>
                  <div className="text-sm text-muted-foreground">New Customers</div>
                </Card>
                
                <Card className="glass border-glow p-6 text-center hover-lift">
                  <Zap className="w-8 h-8 text-primary mx-auto mb-2" />
                  <div className="text-2xl font-bold text-primary text-glow">24/7</div>
                  <div className="text-sm text-muted-foreground">Online Presence</div>
                </Card>
              </div>
              
              {/* Success Badge */}
              <div className="text-center">
                <div className="inline-flex items-center gap-2 gradient-hero px-6 py-3 rounded-full text-white font-semibold shadow-glow">
                  <Star className="w-5 h-5" />
                  Active Success Story
                  <Star className="w-5 h-5" />
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};
