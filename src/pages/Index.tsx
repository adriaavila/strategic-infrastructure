import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { Intro } from "@/components/landing/Intro";
import { ServicePillars } from "@/components/landing/BentoGrid";
import { EngagementModel } from "@/components/landing/EngagementModel";
import { Pricing } from "@/components/landing/Pricing";
import { CustomMade } from "@/components/landing/CustomMade";
import { Positioning } from "@/components/landing/Positioning";
import { Portfolio } from "@/components/landing/Portfolio";
import { IdealClient } from "@/components/landing/IdealClient";
import { CTAFinal } from "@/components/landing/CTAFinal";
import { Footer } from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="relative min-h-screen bg-brand-dark">
      {/* Noise Texture Overlay */}
      <div className="noise-overlay" />
      
      {/* Navigation */}
      <Navbar />
      
      {/* Main Content */}
      <main>
        <Hero />
        <Intro />
        <ServicePillars />
        <EngagementModel />
        <Pricing />
        <CustomMade />
        <Positioning />
        <Portfolio />
        <IdealClient />
        <CTAFinal />
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
