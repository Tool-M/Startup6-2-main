import SponsorsGrid from "@/components/SponsorsGrid";
import { useLanguage } from "@/contexts/LanguageContext";

// Update this page (the content is just a fallback if you fail to update the page)

const Index = () => {
  const { t } = useLanguage();
  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold">
          Welcome to Startup Weekend Sur
        </h1>
        <p className="text-xl text-muted-foreground">
          The event is coming soon. Stay tuned for updates and join us for an
          inspiring weekend!
        </p>
      </div>
    </div>
  );
};

const SponsorsSection = () => {
  const { t } = useLanguage();
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="mt-16 text-3xl md:text-5xl font-bold text-center text-foreground mb-12 animate-fade-in-up">
          {t("home.sponsors.title")}
        </h2>
        <SponsorsGrid />
      </div>
    </section>
  );
};

export default Index;
