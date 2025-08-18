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
    solution: "We help startups launch scalable web and mobile apps, with modern UI/UX and API integrations.",
    description: "Turning fresh ideas into powerful digital products.",
    gradient: "primary"
  },
  {
    name: "Online Shop",
    industry: "E-commerce",
    logo: "🛒",
    solution: "We build sleek online stores with secure payments, inventory management, and social media integration.",
    description: "Helping eco-brands sell smarter and reach more customers online.",
    gradient: "secondary"
  },
  {
    name: "FinanceFlow",
    industry: "Fintech",
    logo: "💰",
    solution: "We create secure fintech solutions with dashboards, real-time data, and easy customer onboarding.",
    description: "Simplifying digital banking and financial services.",
    gradient: "accent"
  },
  {
    name: "HealthHub",
    industry: "Healthcare",
    logo: "🏥 ",
    solution: "We design patient-friendly booking systems, telemedicine platforms, and digital health records.",
    description: "Making healthcare accessible anytime, anywhere.",
    gradient: "primary"
  },
  {
    name: "EduPlatform",
    industry: "Education",
    logo: "🎓",
    solution: "We build e-learning portals, school management systems, and interactive virtual classrooms.",
    description: "Bringing modern education online for schools and learners.",
    gradient: "secondary"
  },
  {
    name: "FoodieExpress",
    industry: "Food Delivery",
    logo: "🍕",
    solution: "We create delivery apps with GPS tracking, order management, and secure online payments.",
    description: "Connecting food businesses with hungry customers seamlessly.",
    gradient: "accent"
  }
];

export const CompaniesTransformed = () => {
  return (
    <section className="py-32 relative overflow-hidden bg-white">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-72 h-72 gradient-primary rounded-full blur-3xl opacity-10 floating"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 gradient-secondary rounded-full blur-3xl opacity-10 floating-delayed"></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 gradient-accent rounded-full blur-2xl opacity-10 floating"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-3 bg-gray-100 border border-gray-300 rounded-full px-6 py-3 mb-8">
              <Award className="w-5 h-5 text-primary" />
              <span className="text-sm font-semibold text-gray-800">Transforming Businesses</span>
            </div>
            
            <h2 className="text-5xl lg:text-7xl font-black mb-8 text-gray-900">
              Industries We Transform
           
            </h2>
            
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            From tech startups to healthcare, education, and beyond — we empower businesses across sectors to unlock growth, efficiency, and innovation through technology.
            </p>
          </div>
        </ScrollReveal>
        
        {/* Stats Overview */}
        <ScrollReveal delay={200}>
          <div className="grid md:grid-cols-4 gap-8 mb-20">
            <Card className="bg-white/80 border border-gray-200 shadow-md text-center p-8 hover-lift">
              <Building className="w-12 h-12 text-primary mx-auto mb-4" />
              <div className="text-3xl font-black text-primary text-glow">10+</div>
              <div className="text-sm text-gray-600">Companies Transformed</div>
            </Card>
            
            <Card className="bg-white/80 border border-gray-200 shadow-md text-center p-8 hover-lift">
              <TrendingUp className="w-12 h-12 text-secondary mx-auto mb-4" />
              <div className="text-3xl font-black text-secondary text-glow">85%</div>
              <div className="text-sm text-gray-600">Average Growth</div>
            </Card>
            
            <Card className="bg-white/80 border border-gray-200 shadow-md text-center p-8 hover-lift">
              <Users className="w-12 h-12 text-accent mx-auto mb-4" />
              <div className="text-3xl font-black text-accent text-glow">1M+</div>
              <div className="text-sm text-gray-600">Users Reached</div>
            </Card>
            
            <Card className="bg-white/80 border border-gray-200 shadow-md text-center p-8 hover-lift">
              <Globe className="w-12 h-12 text-primary mx-auto mb-4" />
              <div className="text-3xl font-black text-primary text-glow">3+</div>
              <div className="text-sm text-gray-600">Countries</div>
            </Card>
          </div>
        </ScrollReveal>
        
        {/* Company Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {transformedCompanies.map((company, index) => (
            <ScrollReveal key={company.name} delay={index * 100}>
              <Card className="bg-white/80 border border-gray-200 shadow-md hover-lift p-8 group relative overflow-hidden">
                {/* Background Gradient */}
                <div className={`absolute inset-0 gradient-${company.gradient} opacity-5 group-hover:opacity-15 transition-opacity`}></div>
                
                <div className="relative z-10">
                  {/* Logo */}
                  <div className="text-4xl mb-4">{company.logo}</div>
                  
                  {/* Company Info */}
                  <h3 className="text-xl font-bold mb-2 text-gray-900">{company.name}</h3>
                  <p className="text-sm text-gray-600 mb-4">{company.industry}</p>
                  
                  {/* Improvement */}
                  <div className={`inline-flex px-4 py-2 rounded-full gradient-${company.gradient} mb-4`}>
                    <span className="text-white font-semibold text-sm">{company.improvement}</span>
                  </div>
                  
                  {/* Description */}
                  <p className="text-gray-700 text-sm">{company.description}</p>
                  
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
            <div className="bg-white/90 border border-gray-200 shadow-lg rounded-3xl p-12 max-w-4xl mx-auto">
              <h3 className="text-3xl font-bold mb-6 text-gray-900">
                Your Digital Transformation Starts Here
              </h3>
              <p className="text-gray-700 mb-8 text-lg">
              Join the ranks of businesses embracing digital growth
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="gradient-hero text-white px-8 py-4 rounded-xl font-bold hover:scale-105 transition-smooth shadow-glow">
                  Get Started
                </button>
                <button className="bg-white/90 border border-gray-300 text-gray-900 px-8 py-4 rounded-xl font-semibold hover:scale-105 transition-smooth shadow-md">
                  
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};