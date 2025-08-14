import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { CompaniesTransformed } from "@/components/CompaniesTransformed";
import { CaseStudy } from "@/components/CaseStudy";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Services />
        <CompaniesTransformed />
        <CaseStudy />
        <Contact />
      </main>
      <Footer />
      
      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "GenzLogic",
            "url": "https://genzlogic.com",
            "logo": "https://genzlogic.com/logo.png",
            "description": "Professional websites, e-commerce solutions, and digital marketing services",
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "Ghana"
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+233534726135",
              "contactType": "customer service",
              "email": "bonglamlouis@gmail.com"
            },
            "sameAs": [
              "https://instagram.com/genzlogic",
              "https://facebook.com/genzlogic"
            ]
          })
        }}
      />
    </div>
  );
};

export default Index;
