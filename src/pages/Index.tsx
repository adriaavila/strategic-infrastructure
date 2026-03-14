import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { CoreServices } from "@/components/landing/CoreServices";
import { ProjectsShowcase } from "@/components/landing/ProjectsShowcase";
import { EngagementModel } from "@/components/landing/EngagementModel";
import { IdealClient } from "@/components/landing/IdealClient";
import { CTAFinal } from "@/components/landing/CTAFinal";
import { Footer } from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="relative min-h-screen bg-brand-dark">
      <div className="noise-overlay" />
      <Navbar />
      <main>
        <Hero />
        <CoreServices />
        <ProjectsShowcase />
        <EngagementModel />
        <IdealClient />
        <CTAFinal />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
