import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { MarketingServices } from "@/components/landing/BentoGrid";
import { Automations } from "@/components/landing/Automations";
import { Integrations } from "@/components/landing/Integrations";
import { Pricing } from "@/components/landing/Pricing";
import { FAQ } from "@/components/landing/FAQ";
import { Footer } from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="relative min-h-screen bg-background">
      {/* Noise Texture Overlay */}
      <div className="noise-overlay" />
      
      {/* Navigation */}
      <Navbar />
      
      {/* Main Content */}
      <main>
        <Hero />
        <MarketingServices />
        <Automations />
        <Integrations />
        <Pricing />
        <FAQ />
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
