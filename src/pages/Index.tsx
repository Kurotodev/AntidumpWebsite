import { LanguageProvider } from "@/i18n/LanguageContext";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import ProtectionSection from "@/components/ProtectionSection";
import PricingSection from "@/components/PricingSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background">
        <Navbar />
        <HeroSection />
        <FeaturesSection />
        <ProtectionSection />
        <PricingSection />
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default Index;
