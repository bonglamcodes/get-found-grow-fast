import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { Shield, Lock, Eye, UserCheck, Database, Mail } from "lucide-react";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/30">
      {/* Header */}
      <section className="py-20 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <div className="text-center">
              <div className="inline-flex items-center gap-3 bg-white/80 border border-gray-300 rounded-full px-6 py-3 mb-8">
                <Shield className="w-5 h-5 text-primary" />
                <span className="text-sm font-semibold text-gray-800">Your Privacy Matters</span>
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-black mb-6 text-foreground">
                Privacy Policy
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                We are committed to protecting your privacy and ensuring your personal information is handled responsibly.
              </p>
              
              <p className="text-sm text-muted-foreground mt-4">
                Last updated: January 2025
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="bg-white rounded-3xl shadow-lg border border-gray-200 p-8 lg:p-12">
            
            {/* Introduction */}
            <ScrollReveal>
              <div className="mb-12">
                <div className="flex items-center gap-3 mb-6">
                  <UserCheck className="w-6 h-6 text-primary" />
                  <h2 className="text-2xl font-bold text-foreground">Introduction</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  GenzLogic ("we," "our," or "us") respects your privacy and is committed to protecting your personal data. 
                  This privacy policy explains how we collect, use, and safeguard your information when you visit our website 
                  at genzlogic.com, use our services, or interact with us through social media platforms including Instagram.
                </p>
              </div>
            </ScrollReveal>

            {/* Information We Collect */}
            <ScrollReveal delay={100}>
              <div className="mb-12">
                <div className="flex items-center gap-3 mb-6">
                  <Database className="w-6 h-6 text-secondary" />
                  <h2 className="text-2xl font-bold text-foreground">Information We Collect</h2>
                </div>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-3">Personal Information</h3>
                    <p className="text-muted-foreground mb-3">We may collect the following personal information:</p>
                    <ul className="space-y-2 text-muted-foreground ml-6">
                      <li className="flex items-start gap-2">
                        <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                        Name and contact information (email address, phone number)
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                        Business information (company name, industry, project details)
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                        Communication preferences and marketing consent
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                        Social media profile information (when you interact with our ads or content)
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-3">Technical Information</h3>
                    <ul className="space-y-2 text-muted-foreground ml-6">
                      <li className="flex items-start gap-2">
                        <span className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></span>
                        IP address and location data
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></span>
                        Browser type and device information
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></span>
                        Website usage data and analytics
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* How We Use Your Information */}
            <ScrollReveal delay={200}>
              <div className="mb-12">
                <div className="flex items-center gap-3 mb-6">
                  <Eye className="w-6 h-6 text-accent" />
                  <h2 className="text-2xl font-bold text-foreground">How We Use Your Information</h2>
                </div>
                
                <p className="text-muted-foreground mb-4">We use your personal information for the following purposes:</p>
                <ul className="space-y-3 text-muted-foreground ml-6">
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></span>
                    <span><strong>Service Delivery:</strong> To provide our digital solutions, web development, and consulting services</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></span>
                    <span><strong>Communication:</strong> To respond to inquiries, provide customer support, and send project updates</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></span>
                    <span><strong>Marketing:</strong> To send promotional materials and information about our services (with your consent)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></span>
                    <span><strong>Lead Generation:</strong> To follow up on leads generated through social media platforms including Instagram</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></span>
                    <span><strong>Website Improvement:</strong> To analyze website usage and improve our user experience</span>
                  </li>
                </ul>
              </div>
            </ScrollReveal>

            {/* Data Sharing */}
            <ScrollReveal delay={300}>
              <div className="mb-12">
                <div className="flex items-center gap-3 mb-6">
                  <Lock className="w-6 h-6 text-primary" />
                  <h2 className="text-2xl font-bold text-foreground">Data Sharing and Disclosure</h2>
                </div>
                
                <p className="text-muted-foreground mb-4">We do not sell your personal information. We may share your data only in the following circumstances:</p>
                <ul className="space-y-3 text-muted-foreground ml-6">
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                    <span><strong>Service Providers:</strong> With trusted third-party vendors who help us operate our business (hosting, email services, analytics)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                    <span><strong>Legal Requirements:</strong> When required by law or to protect our legal rights</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                    <span><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</span>
                  </li>
                </ul>
              </div>
            </ScrollReveal>

            {/* Social Media and Lead Collection */}
            <ScrollReveal delay={400}>
              <div className="mb-12">
                <div className="flex items-center gap-3 mb-6">
                  <Mail className="w-6 h-6 text-secondary" />
                  <h2 className="text-2xl font-bold text-foreground">Social Media and Lead Collection</h2>
                </div>
                
                <p className="text-muted-foreground mb-4">
                  When you interact with our advertisements or content on social media platforms (including Instagram, Facebook, LinkedIn), 
                  we may collect information you provide through:
                </p>
                <ul className="space-y-3 text-muted-foreground ml-6 mb-4">
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></span>
                    Lead generation forms in social media ads
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></span>
                    Direct messages and comments on our posts
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></span>
                    Contact forms and inquiry submissions
                  </li>
                </ul>
                <p className="text-muted-foreground">
                  By submitting your information through these channels, you consent to us contacting you about our services 
                  and digital solutions that may benefit your business.
                </p>
              </div>
            </ScrollReveal>

            {/* Data Security */}
            <ScrollReveal delay={500}>
              <div className="mb-12">
                <div className="flex items-center gap-3 mb-6">
                  <Shield className="w-6 h-6 text-accent" />
                  <h2 className="text-2xl font-bold text-foreground">Data Security</h2>
                </div>
                
                <p className="text-muted-foreground">
                  We implement appropriate technical and organizational security measures to protect your personal information 
                  against unauthorized access, alteration, disclosure, or destruction. However, no internet transmission is 
                  100% secure, and we cannot guarantee absolute security of your data.
                </p>
              </div>
            </ScrollReveal>

            {/* Your Rights */}
            <ScrollReveal delay={600}>
              <div className="mb-12">
                <div className="flex items-center gap-3 mb-6">
                  <UserCheck className="w-6 h-6 text-primary" />
                  <h2 className="text-2xl font-bold text-foreground">Your Rights</h2>
                </div>
                
                <p className="text-muted-foreground mb-4">You have the right to:</p>
                <ul className="space-y-3 text-muted-foreground ml-6">
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                    Access and request a copy of your personal information
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                    Correct or update your personal information
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                    Request deletion of your personal information
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                    Opt-out of marketing communications at any time
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                    Withdraw consent for data processing (where applicable)
                  </li>
                </ul>
              </div>
            </ScrollReveal>

            {/* Contact Information */}
            <ScrollReveal delay={700}>
              <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Mail className="w-6 h-6 text-primary" />
                  <h2 className="text-2xl font-bold text-foreground">Contact Us</h2>
                </div>
                
                <p className="text-muted-foreground mb-4">
                  If you have any questions about this Privacy Policy or wish to exercise your rights, please contact us:
                </p>
                
                <div className="space-y-2 text-muted-foreground">
                  <p><strong>Email:</strong> genzlogic@gmail.com</p>
                  <p><strong>Phone:</strong> +233 53 4726 135</p>
                  <p><strong>Instagram:</strong> @genz_logic</p>
                </div>
                
                <p className="text-sm text-muted-foreground mt-6">
                  We will respond to your request within 30 days of receiving it.
                </p>
              </div>
            </ScrollReveal>

            {/* Updates to Policy */}
            <ScrollReveal delay={800}>
              <div className="mt-12 pt-8 border-t border-gray-200">
                <h3 className="text-lg font-semibold text-foreground mb-4">Changes to This Privacy Policy</h3>
                <p className="text-muted-foreground text-sm">
                  We may update this Privacy Policy from time to time. We will notify you of any changes by posting the 
                  new Privacy Policy on this page and updating the "Last updated" date. Your continued use of our services 
                  after any modifications indicates your acceptance of the updated Privacy Policy.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;