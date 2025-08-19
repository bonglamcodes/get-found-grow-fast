import { Mail, Phone, Instagram, Youtube, Facebook } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-black to-gray-950 text-primary-foreground">
      <div className="container mx-auto px-6 py-12">
       {/* Top Section: Logo + About */}
<div className="flex flex-col items-center text-center max-w-2xl mx-auto">
  <a href="#" className="mb-4">
    <img
      src="/lovable-uploads/1a725d54-1cf7-4edb-a792-f02965ebf726.png"
      alt="GenzLogic"
      className="w-12 h-12 rounded-full"
    />
  </a>
  <p className="text-primary-foreground/80 mb-6">
    Empowering businesses with smart and modern technology solutions.
  </p>
</div>

        {/* Middle Section: Links */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left mt-10">
          {/* Contact */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact</h4>
            <div className="space-y-3 text-sm text-primary-foreground/80">
              <div className="flex justify-center md:justify-start items-center gap-2">
                <Mail className="w-4 h-4" />
                <a href="mailto:genzlogic@gmail.com" className="hover:text-primary-foreground transition">
                  genzlogic@gmail.com
                </a>
              </div>
              <div className="flex justify-center md:justify-start items-center gap-2">
                <Phone className="w-4 h-4" />
                <a href="tel:+233534726135" className="hover:text-primary-foreground transition">
                  +233 53 4726 135
                </a>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li><a href="#services" className="hover:text-primary-foreground transition">Software Engineering</a></li>
              <li><a href="#services" className="hover:text-primary-foreground transition">E-commerce Solutions</a></li>
              <li><a href="#services" className="hover:text-primary-foreground transition">Web & Mobile Apps</a></li>
              <li><a href="#services" className="hover:text-primary-foreground transition">Product Management</a></li>
              <li><a href="#services" className="hover:text-primary-foreground transition">Cloud & DevOps</a></li>
              <li><a href="#services" className="hover:text-primary-foreground transition">API & System Integration</a></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li><a href="#services" className="hover:text-primary-foreground transition">Our Services</a></li>
              <li><a href="#case-studies" className="hover:text-primary-foreground transition">Case Studies</a></li>
              <li><a href="#contact" className="hover:text-primary-foreground transition">Contact Us</a></li>
              <li><a href="#contact" className="hover:text-primary-foreground transition">Free Consultation</a></li>
              <li><a href="/privacy-policy" className="hover:text-primary-foreground transition">Privacy Policy</a></li>
            </ul>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center gap-6 mt-12">
          <a 
            href="https://www.instagram.com/genz_logic/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform hover:scale-110"
            style={{ color: "#E1306C" }}
          >
            <Instagram className="w-8 h-8" />
          </a>
          <a 
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform hover:scale-110"
            style={{ color: "#FF0000" }}
          >
            <Youtube className="w-8 h-8" />
          </a>
          <a 
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform hover:scale-110"
            style={{ color: "#1877F2" }}
          >
            <Facebook className="w-8 h-8" />
          </a>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-primary-foreground/20 mt-10 pt-6 text-center text-sm text-primary-foreground/60">
          <p>&copy; 2025 GenzLogic. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
