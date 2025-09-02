"use client";
import ContactSection from "../../components/malves/ContactSection";
import FooterSection from "../../components/malves/FooterSection";
import Header from "../../components/malves/Header";
import HeroSection from "../../components/malves/HeroSection";
import AboutSection from "../../components/malves/AboutSection";
import ShowcaseSection from "../../components/malves/ShowcaseSection";
import { useEffect } from "react";

const LandingPage: React.FC = () => {
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const sectionId = hash.substring(1);

      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          const headerHeight = -20;
          const elementPosition = element.offsetTop - headerHeight - 20;
          window.scrollTo({
            top: elementPosition,
            behavior: "smooth",
          });
        }
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  }, []);
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-32 right-16 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-32 left-16 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-float animation-delay-700"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-indigo-500/5 rounded-full blur-2xl animate-float animation-delay-500"></div>
      </div>
      <Header />
      <HeroSection />
      <ShowcaseSection />
      <AboutSection />
      <ContactSection />
      <FooterSection />
    </div>
  );
};

export default LandingPage;
