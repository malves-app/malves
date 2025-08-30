import { Code, Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    if (!isHomePage) {
      window.location.href = `/#${sectionId}`;
      return;
    }

    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 0; 
      const elementPosition = element.offsetTop - headerHeight - 20;
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      });
      window.history.pushState(null, "", `#${sectionId}`);
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-from-purple-600 to-blue-500 backdrop-blur-2xl shadow-2xl py-3"
          : "bg-transparent py-6"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-3 group">
          <div
            className={`p-2 bg-gradient-to-r from-purple-600 to-blue-500 rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-300 ${
              isScrolled ? "scale-90" : ""
            }`}
          >
            <Code size={isScrolled ? 20 : 24} className="text-white" />
          </div>
          <span
            className={`font-bold text-gray-300 group-hover:text-white transition-all duration-300 ${
              isScrolled ? "text-lg" : "text-xl"
            }`}
          >
            Malves
          </span>
        </Link>

        {/* Desktop Navigation */}
        {isHomePage && (
          <div className="hidden lg:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("inicio")}
              className="text-gray-300 hover:text-white transition-colors duration-200 font-medium relative group"
            >
              Início
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-blue-400 group-hover:w-full transition-all duration-300"></div>
            </button>
            <button
              onClick={() => scrollToSection("apps")}
              className="text-gray-300 hover:text-white transition-colors duration-200 font-medium relative group"
            >
              Apps
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-blue-400 group-hover:w-full transition-all duration-300"></div>
            </button>
            <button
              onClick={() => scrollToSection("sobre")}
              className="text-gray-300 hover:text-white transition-colors duration-200 font-medium relative group"
            >
              Sobre
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-blue-400 group-hover:w-full transition-all duration-300"></div>
            </button>

            <button
              onClick={() => scrollToSection("contato")}
              className="bg-gradient-to-r from-purple-600 to-blue-500 px-6 py-3 rounded-full hover:from-purple-700 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 shadow-lg font-semibold"
            >
              Contato
            </button>
          </div>
        )}

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden p-2 hover:bg-white/10 rounded-xl transition-colors duration-200"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && isHomePage && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-2xl border-b border-white/10 shadow-2xl">
          <div className="px-4 py-6 space-y-4">
            <button
              onClick={() => scrollToSection("inicio")}
              className="block w-full text-left text-gray-300 hover:text-white transition-colors duration-200 font-medium py-3 px-4 hover:bg-white/10 rounded-xl"
            >
              Início
            </button>
            <button
              onClick={() => scrollToSection("apps")}
              className="block w-full text-left text-gray-300 hover:text-white transition-colors duration-200 font-medium py-3 px-4 hover:bg-white/10 rounded-xl"
            >
              Apps
            </button>
            <button
              onClick={() => scrollToSection("sobre")}
              className="block w-full text-left text-gray-300 hover:text-white transition-colors duration-200 font-medium py-3 px-4 hover:bg-white/10 rounded-xl"
            >
              Sobre
            </button>

            <button
              onClick={() => scrollToSection("contato")}
              className="block bg-gradient-to-r from-purple-600 to-blue-500 px-6 py-3 rounded-xl hover:from-purple-700 hover:to-blue-600 transition-all duration-300 font-semibold text-center"
            >
              Contato
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
