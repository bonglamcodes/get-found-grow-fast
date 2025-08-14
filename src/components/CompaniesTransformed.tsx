import { Card } from "@/components/ui/card";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { 
  Star, 
  TrendingUp, 
  Award, 
  Users,
  Building,
  Globe,
  Sparkles
} from "lucide-react";

const transformedCompanies = [
  {
    name: "TechStart",
    industry: "Tech Startup",
    logo: "🚀",
    improvement: "400% lead increase",
    description: "From zero to hero in 6 months",
    gradient: "primary"
  },
  {
    name: "EcoShop",
    industry: "E-commerce",
    logo: "🌱",
    improvement: "300% sales boost",
    description: "Sustainable fashion goes viral",
    gradient: "secondary"
  },
  {
    name: "FinanceFlow",
    industry: "Fintech",
    logo: "💰",
    improvement: "200% conversions",
    description: "Modern banking redefined",
    gradient: "accent"
  },
  {
    name: "HealthHub",
    industry: "Healthcare",
    logo: "⚕️",
    improvement: "500% appointments",
    description: "Digital health revolution",
    gradient: "primary"
  },
  {
    name: "EduPlatform",
    industry: "Education",
    logo: "🎓",
    improvement: "250% enrollments",
    description: "Learning without limits",
    gradient: "secondary"
  },
  {
    name: "FoodieExpress",
    industry: "Food Delivery",
    logo: "🍕",
    improvement: "350% orders",
    description: "Taste meets technology",
    gradient: "accent"
  }
];

export const CompaniesTransformed = () => {
  return (
    <section className="py-32 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-72 h-72 gradient-primary rounded-full blur-3xl opacity-10 floating"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 gradient-secondary rounded-full blur-3xl opacity-10 floating-delayed"></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 gradient-accent rounded-full blur-2xl opacity-10 floating"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-3 glass rounded-full px-6 py-3 border-glow mb-8">
              <Award className="w-5 h-5 text-primary" />
              <span className="text-sm font-semibold">Success Stories</span>
            </div>
            
            <h2 className="text-5xl lg:text-7xl font-black mb-8">
              Companies We've
              <span className="block gradient-hero bg-clip-text text-transparent text-glow">
                Transformed
              </span>
            </h2>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From startups to established brands, we've helped companies across industries achieve extraordinary digital transformation.
            </p>
          </div>
        </ScrollReveal>
        
        {/* Stats Overview */}
        <ScrollReveal delay={200}>
          <div className="grid md:grid-cols-4 gap-8 mb-20">
            <Card className="glass border-glow text-center p-8 hover-lift">
              <Building className="w-12 h-12 text-primary mx-auto mb-4" />
              <div className="text-3xl font-black text-primary text-glow">200+</div>
              <div className="text-sm text-muted-foreground">Companies Transformed</div>
            </Card>
            
            <Card className="glass border-glow text-center p-8 hover-lift">
              <TrendingUp className="w-12 h-12 text-secondary mx-auto mb-4" />
              <div className="text-3xl font-black text-secondary text-glow">350%</div>
              <div className="text-sm text-muted-foreground">Average Growth</div>
            </Card>
            
            <Card className="glass border-glow text-center p-8 hover-lift">
              <Users className="w-12 h-12 text-accent mx-auto mb-4" />
              <div className="text-3xl font-black text-accent text-glow">1M+</div>
              <div className="text-sm text-muted-foreground">Users Reached</div>
            </Card>
            
            <Card className="glass border-glow text-center p-8 hover-lift">
              <Globe className="w-12 h-12 text-primary mx-auto mb-4" />
              <div className="text-3xl font-black text-primary text-glow">50+</div>
              <div className="text-sm text-muted-foreground">Countries</div>
            </Card>
          </div>
        </ScrollReveal>
        
        {/* Company Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {transformedCompanies.map((company, index) => (
            <ScrollReveal key={company.name} delay={index * 100}>
              <Card className="glass border-glow hover-lift p-8 group relative overflow-hidden">
                {/* Background Gradient */}
                <div className={`absolute inset-0 gradient-${company.gradient} opacity-5 group-hover:opacity-15 transition-opacity`}></div>
                
                <div className="relative z-10">
                  {/* Logo */}
                  <div className="text-4xl mb-4">{company.logo}</div>
                  
                  {/* Company Info */}
                  <h3 className="text-xl font-bold mb-2 text-glow">{company.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{company.industry}</p>
                  
                  {/* Improvement */}
                  <div className={`inline-flex px-4 py-2 rounded-full gradient-${company.gradient} mb-4`}>
                    <span className="text-white font-semibold text-sm">{company.improvement}</span>
                  </div>
                  
                  {/* Description */}
                  <p className="text-muted-foreground text-sm">{company.description}</p>
                  
                  {/* Rating */}
                  <div className="flex items-center gap-1 mt-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                    ))}
                  </div>
                </div>
                
                {/* Floating Sparkle */}
                <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-40 transition-opacity">
                  <Sparkles className="w-6 h-6 text-primary floating" />
                </div>
              </Card>
            </ScrollReveal>
          ))}
        </div>
        
        {/* Bottom CTA */}
        <ScrollReveal delay={800}>
          <div className="text-center mt-20">
            <div className="glass border-glow rounded-3xl p-12 max-w-4xl mx-auto">
              <h3 className="text-3xl font-bold mb-6 text-glow">
                Ready to Join These Success Stories?
              </h3>
              <p className="text-muted-foreground mb-8 text-lg">
                Your company could be next on our transformation list. Let's make it happen.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="gradient-hero text-white px-8 py-4 rounded-xl font-bold hover:scale-105 transition-smooth shadow-glow">
                  Start Your Transformation
                </button>
                <button className="glass border-glow text-foreground px-8 py-4 rounded-xl font-semibold hover:scale-105 transition-smooth">
                  View More Cases
                </button>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};