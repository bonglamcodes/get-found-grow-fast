import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { Quote, ExternalLink, TrendingUp, Users, ShoppingBag } from "lucide-react";

export const CaseStudy = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              <span className="gradient-hero bg-clip-text text-transparent">Success</span> Stories
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              See how we've helped businesses like yours grow their online presence and boost revenue.
            </p>
          </div>
        </ScrollReveal>
        
        <ScrollReveal delay={200}>
          <Card className="max-w-4xl mx-auto p-8 lg:p-12 border-0 bg-card/50 backdrop-blur-sm shadow-elegant">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <Quote className="w-8 h-8 text-primary" />
                  <h3 className="text-2xl font-bold">Rose Fabric Mall</h3>
                  <Button variant="outline" size="sm" className="ml-auto">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Visit Site
                  </Button>
                </div>
                
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  "A clothing and beauty business owner in UK, saw a <span className="text-secondary font-semibold">50% increase in customer leads within 3 months</span> after we built her a clean, mobile-friendly website. The site made it easy for people to see her services, prices, and contact her directly."
                </p>
                
                <p className="text-muted-foreground mb-8">
                  We also connected her Instagram and optimized the site for Google search. As a result, more people started finding her through Google, her social media followers grew, and she started getting more bookings and product sales—all from her website traffic.
                </p>
                
                <div className="flex gap-4">
                  <Button variant="secondary">
                    Read Full Case Study
                  </Button>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-6 rounded-2xl gradient-primary">
                    <TrendingUp className="w-8 h-8 text-white mx-auto mb-2" />
                    <div className="text-3xl font-bold text-white">50%</div>
                    <div className="text-primary-foreground/80 text-sm">Increase in Leads</div>
                  </div>
                  <div className="text-center p-6 rounded-2xl gradient-secondary">
                    <Users className="w-8 h-8 text-white mx-auto mb-2" />
                    <div className="text-3xl font-bold text-white">3</div>
                    <div className="text-secondary-foreground/80 text-sm">Months to Success</div>
                  </div>
                </div>
                
                <div className="text-center p-6 rounded-2xl bg-accent/20 border border-primary/10">
                  <ShoppingBag className="w-8 h-8 text-primary mx-auto mb-2" />
                  <div className="text-2xl font-bold text-primary">More Sales</div>
                  <div className="text-muted-foreground text-sm">Through Website Traffic</div>
                </div>
                
                <div className="text-center">
                  <div className="inline-flex items-center gap-2 bg-secondary/10 backdrop-blur-sm border border-secondary/20 rounded-full px-4 py-2 text-sm font-medium text-secondary">
                    <div className="w-2 h-2 bg-secondary rounded-full animate-pulse"></div>
                    Active Success Story
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </ScrollReveal>
      </div>
    </section>
  );
};