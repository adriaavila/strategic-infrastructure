import { Navbar } from "@/components/landing/Navbar";
import { Automations } from "@/components/landing/Automations";
import { Footer } from "@/components/landing/Footer";

const Automatizaciones = () => {
  return (
    <div className="relative min-h-screen bg-background">
      {/* Noise Texture Overlay */}
      <div className="noise-overlay" />
      
      {/* Navigation */}
      <Navbar />
      
      {/* Main Content */}
      <main>
        <Automations />
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Automatizaciones;
