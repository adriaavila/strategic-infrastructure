import { Navbar } from "@/components/landing/Navbar";
import { MarketingServices } from "@/components/landing/MarketingServices";
import { Footer } from "@/components/landing/Footer";

const Marketing = () => {
  return (
    <div className="relative min-h-screen bg-brand-dark">
      {/* Noise Texture Overlay */}
      <div className="noise-overlay" />
      
      {/* Navigation */}
      <Navbar />
      
      {/* Main Content */}
      <main>
        <MarketingServices />
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Marketing;
