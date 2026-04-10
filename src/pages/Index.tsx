import { Navbar } from "@/components/landing/Navbar";
import { HomeHero } from "@/components/landing/HomeHero";
import { Footer } from "@/components/landing/Footer";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { Catalog } from "@/components/landing/Catalog";
import { useSEO } from "@/lib/seo";

const Index = () => {
  useSEO({
    title: "Creativv | Sistemas con IA para vender mejor",
    description:
      "Sistemas con Inteligencia Artificial, agentes inteligentes, y soluciones avanzadas para escalar tu negocio exponencialmente.",
    path: "/",
  });

  return (
    <div className="relative min-h-screen bg-background flex flex-col">
      <div className="noise-overlay" />
      <Navbar />
      
      <main className="flex-1">
        <HomeHero />
        <HowItWorks />
        <Catalog />
      </main>

      <Footer />
    </div>
  );
};

export default Index;
