import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { CoreServices } from "@/components/landing/CoreServices";
import { ProjectsShowcase } from "@/components/landing/ProjectsShowcase";
import { EngagementModel } from "@/components/landing/EngagementModel";
import { IdealClient } from "@/components/landing/IdealClient";
import { Pricing } from "@/components/landing/Pricing";
import { CTAFinal } from "@/components/landing/CTAFinal";
import { Footer } from "@/components/landing/Footer";
import { useSEO } from "@/lib/seo";

const Index = () => {
  useSEO({
    title: "Creativv | Websites y web apps para negocios",
    description:
      "Creativv diseña y desarrolla websites, landing pages y web apps para negocios que necesitan una presencia digital más clara y sistemas web más útiles.",
    path: "/",
  });

  return (
    <div className="relative min-h-screen bg-background">
      <div className="noise-overlay" />
      <Navbar />
      <main>
        <Hero />
        <CoreServices />
        <IdealClient />
        <Pricing />
        <EngagementModel />
        <ProjectsShowcase />
        <CTAFinal />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
