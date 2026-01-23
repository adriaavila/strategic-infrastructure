import { Navbar } from "@/components/landing/Navbar";
import { MarketingServices } from "@/components/landing/MarketingServices";
import { Footer } from "@/components/landing/Footer";

const Marketing = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <MarketingServices />
      </main>
      <Footer />
    </div>
  );
};

export default Marketing;
