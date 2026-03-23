import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { CoreServices } from "@/components/landing/CoreServices";
import { ProjectsShowcase } from "@/components/landing/ProjectsShowcase";
import { EngagementModel } from "@/components/landing/EngagementModel";
import { IdealClient } from "@/components/landing/IdealClient";
import { CTAFinal } from "@/components/landing/CTAFinal";
import { Footer } from "@/components/landing/Footer";
import { useSEO } from "@/lib/seo";

const Index = () => {
  useSEO({
    title: "Creativv",
    description:
      "Creativv implementa agentes de IA, automatizaciones de WhatsApp, workflows y sistemas web para negocios que quieren vender mejor y operar con más claridad.",
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
        <EngagementModel />
        <ProjectsShowcase />
        <CTAFinal />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
