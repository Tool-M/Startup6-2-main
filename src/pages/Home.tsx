import CountdownTimer from "@/components/CountdownTimer";
import EventTimetable from "@/components/EventTimetable";
import SponsorsGrid from "@/components/SponsorsGrid";
import { useLanguage } from "@/contexts/LanguageContext";
import backImg from "@/assets/back.png";
import BackgroundParticles from "@/components/BackgroundParticles";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Home = () => {
  const { t } = useLanguage();
  return (
    <div className="min-h-screen">
      {/* Hero Section with clearer background */}
      <section
        className="relative min-h-[600px] flex items-center justify-center overflow-hidden pt-20 md:pt-24 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(20,25,60,0.15), rgba(20,25,60,0.25)), url(${backImg})`,
          backgroundColor: '#1A2A80',
        }}
        aria-label="Hero section with event countdown and background image"
      >
        <div className="absolute inset-0 bg-black/5 z-0" aria-hidden="true" />
        <BackgroundParticles />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto glass rounded-2xl p-8 md:p-12 animate-scale-in bg-white/10 backdrop-blur-md">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 animate-fade-in-down drop-shadow-lg">
              {t("home.hero.title")}
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-6 animate-fade-in-down drop-shadow" style={{ animationDelay: "0.1s" }}>
              {t("home.hero.subtitle")}
            </p>
            <p className="text-white/80 mb-8 animate-fade-in-down drop-shadow" style={{ animationDelay: "0.2s" }}>
              {t("home.hero.description")}
            </p>
            <div className="animate-fade-in-up mb-6" style={{ animationDelay: "0.3s" }}>
              <CountdownTimer />
            </div>
            <h2 className="text-2xl md:text-4xl font-bold text-white animate-fade-in-down drop-shadow" style={{ animationDelay: "0.4s" }}>
              {t("home.hero.coming")}
            </h2>
          </div>
        </div>
      </section>

      {/* What is Startup Weekend */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              {t("home.what.title")}
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {t("home.what.description")}
            </p>
          </div>
        </div>
      </section>

      {/* Event Timetable */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold text-center text-foreground mb-12 animate-fade-in-up">
            {t("home.timetable.title")}
          </h2>
          <EventTimetable />
        </div>
      </section>

      {/* Sponsors */}
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

export default Home;
