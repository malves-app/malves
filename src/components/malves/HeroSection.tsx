import { ArrowRight, ChevronDown } from "lucide-react";

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 0; // Altura aproximada do header fixo
      const elementPosition = element.offsetTop - headerHeight - 20; // 20px de margem extra
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      });
      // Atualiza a URL com o hash
      window.history.pushState(null, "", `#${sectionId}`);
    }
  };

  return (
    <section
      id="inicio"
      className="relative z-10 min-h-screen flex items-center justify-center px-4 sm:px-6 pt-24 pb-16"
    >
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 sm:mb-8 leading-tight animate-fade-in-up animation-delay-200">
          Criando apps que
          <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
            fazem a diferença
          </span>
        </h1>

        <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-12 sm:mb-16 leading-relaxed max-w-4xl mx-auto px-4 animate-fade-in-up animation-delay-400">
          Conectando tecnologia ao que faz sentido no seu dia a dia
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 animate-fade-in-up animation-delay-600">
          <button
            onClick={() => scrollToSection("apps")}
            className="group bg-gradient-to-r from-purple-600 to-blue-500 px-8 sm:px-10 py-4 sm:py-5 rounded-2xl hover:from-purple-700 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 shadow-2xl font-bold text-lg sm:text-xl flex items-center space-x-3 w-full sm:w-auto justify-center"
          >
            <span>Explorar Apps</span>
          </button>

          <button
            onClick={() => scrollToSection("sobre")}
            className="px-8 sm:px-10 py-4 sm:py-5 border-2 border-white/20 rounded-2xl hover:bg-white/10 transition-all duration-300 font-bold text-lg sm:text-xl backdrop-blur-sm w-full sm:w-auto text-center"
          >
            Sobre Malves
          </button>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown size={32} className="text-white/60" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
