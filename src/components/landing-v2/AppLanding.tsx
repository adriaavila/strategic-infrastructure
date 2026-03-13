import { CompatibilitySection } from "./CompatibilitySection";
import { DemoSection } from "./DemoSection";
import { DifferentiatorsSection } from "./DifferentiatorsSection";
import { FAQSection } from "./FAQSection";
import { FeaturesSection } from "./FeaturesSection";
import { FinalCTASection } from "./FinalCTASection";
import { FooterSection } from "./FooterSection";
import { HeroSection } from "./HeroSection";
import { HowItWorksSection } from "./HowItWorksSection";
import { IndustriesSection } from "./IndustriesSection";
import { NavBar } from "./NavBar";
import { ProblemSection } from "./ProblemSection";
import { SocialProofSection } from "./SocialProofSection";
import { SolutionSection } from "./SolutionSection";
import { PricingSection } from "./PricingSection";

export function AppLanding() {
  return (
    <div className="relative overflow-x-hidden bg-[#050816] text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(16,185,129,0.16),transparent_28%),radial-gradient(circle_at_top_right,rgba(139,92,246,0.16),transparent_32%),linear-gradient(180deg,#060816_0%,#07101d_38%,#050816_100%)]" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.18] [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:72px_72px] [mask-image:radial-gradient(circle_at_top,black,transparent_85%)]" />
      <div className="noise-overlay" />

      <NavBar />

      <main>
        <HeroSection />
        <SocialProofSection />
        <ProblemSection />
        <SolutionSection />
        <HowItWorksSection />
        <FeaturesSection />
        <DemoSection />
        <IndustriesSection />
        <CompatibilitySection />
        <DifferentiatorsSection />
        <PricingSection />
        <FAQSection />
        <FinalCTASection />
      </main>

      <FooterSection />
    </div>
  );
}
