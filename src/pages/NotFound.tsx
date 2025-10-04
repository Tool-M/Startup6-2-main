import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import SponsorsGrid from "@/components/SponsorsGrid";
import { useLanguage } from "@/contexts/LanguageContext";

const NotFound = () => {
  const location = useLocation();
  const { t } = useLanguage();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold">404</h1>
        <p className="mb-4 text-xl text-gray-600">Sorry, the page you are looking for does not exist.</p>
        <a href="/" className="text-blue-500 underline hover:text-blue-700">
          Go back to Home
        </a>
      </div>
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

export default NotFound;
