import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import backImg from "@/assets/back.png";
import BackgroundParticles from "@/components/BackgroundParticles";
import { useLanguage } from "@/contexts/LanguageContext";
import SponsorsGrid from "@/components/SponsorsGrid";

const Registration = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen">
      {/* Hero Section with same background as Home */}
      <section
        className="relative min-h-[600px] flex items-center justify-center overflow-hidden pt-20 md:pt-24 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(20,25,60,0.15), rgba(20,25,60,0.25)), url(${backImg})`,
          backgroundColor: '#1A2A80',
        }}
        aria-label="Registration Hero section"
      >
        {/* يمكنك تقليل أو حذف هذه الطبقة */}
        <div className="absolute inset-0 bg-black/5 z-0" aria-hidden="true" />
        <BackgroundParticles />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto glass rounded-2xl p-8 md:p-12 animate-scale-in bg-white/10 backdrop-blur-md">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 animate-fade-in-down drop-shadow-lg">
              {t("registration.title")}
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              {t("registration.description")}
            </p>
            <div className="animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
              <a href="https://www.techstars.com/" target="_blank" rel="noopener noreferrer">
                <Button 
                  size="lg" 
                  className="gradient-primary text-white text-lg px-8 py-6 hover:scale-105 transition-all ripple shadow-glow group w-full sm:w-auto text-base sm:text-lg"
                >
                  {t("registration.button")}
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Sponsors Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="mt-16 text-3xl md:text-5xl font-bold text-center text-foreground mb-12 animate-fade-in-up">
            {t("home.sponsors.title")}
          </h2>
          <SponsorsGrid />
        </div>
      </section>
    </div>
  );
};

export default Registration;
