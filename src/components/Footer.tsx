import { Mail, Phone, MapPin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img 
                src="/lovable-uploads/1a725d54-1cf7-4edb-a792-f02965ebf726.png" 
                alt="GenzLogic" 
                className="w-8 h-8 brightness-0 invert"
              />
              <span className="text-2xl font-bold">GENZLOGIC</span>
            </div>
            <p className="text-primary-foreground/80 mb-6 max-w-md">
              Empowering businesses through smart and modern technology solutions. We help small to mid-scale businesses build their online presence and grow their customer base.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-3 text-sm">
                <Mail className="w-4 h-4" />
                <a href="mailto:bonglamlouis@gmail.com" className="hover:text-primary-foreground/80">
                  bonglamlouis@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Phone className="w-4 h-4" />
                <a href="tel:+233534726135" className="hover:text-primary-foreground/80">
                  +233 53 4726 135
                </a>
              </div>
            </div>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li><a href="#services" className="hover:text-primary-foreground">Website Development</a></li>
              <li><a href="#services" className="hover:text-primary-foreground">E-commerce Solutions</a></li>
              <li><a href="#services" className="hover:text-primary-foreground">SEO Optimization</a></li>
              <li><a href="#services" className="hover:text-primary-foreground">Social Media Integration</a></li>
              <li><a href="#services" className="hover:text-primary-foreground">Business Dashboards</a></li>
            </ul>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li><a href="#services" className="hover:text-primary-foreground">Our Services</a></li>
              <li><a href="#case-studies" className="hover:text-primary-foreground">Case Studies</a></li>
              <li><a href="#contact" className="hover:text-primary-foreground">Contact Us</a></li>
              <li><a href="#contact" className="hover:text-primary-foreground">Free Consultation</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm text-primary-foreground/60">
          <p>&copy; 2025 GenzLogic. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};