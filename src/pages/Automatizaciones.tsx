import { Navbar } from "@/components/landing/Navbar";
import { Automations } from "@/components/landing/Automations";
import { Footer } from "@/components/landing/Footer";

const Automatizaciones = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Automations />
      </main>
      <Footer />
    </div>
  );
};

export default Automatizaciones;
