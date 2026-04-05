import { Suspense, lazy } from "react";
import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { Footer } from "@/components/landing/Footer";
import { useSEO } from "@/lib/seo";

const HomeSectionsPrimary = lazy(() => import("@/components/landing/HomeSectionsPrimary"));
const HomeSectionsSecondary = lazy(() => import("@/components/landing/HomeSectionsSecondary"));

const SectionFallback = ({ minHeightClass }: { minHeightClass: string }) => (
  <div className={`py-24 md:py-32 ${minHeightClass}`} aria-hidden="true" />
);

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
        <Suspense fallback={<SectionFallback minHeightClass="min-h-[1100px]" />}>
          <HomeSectionsPrimary />
        </Suspense>
        <Suspense fallback={<SectionFallback minHeightClass="min-h-[900px]" />}>
          <HomeSectionsSecondary />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
