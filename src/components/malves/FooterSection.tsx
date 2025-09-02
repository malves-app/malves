"use client";

import {
  Brain,
  Code,
  ExternalLink,
  Github,
  Linkedin,
  Users,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const FooterSection = () => {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  const scrollToSection = (sectionId: string) => {
    // Se não estiver na página inicial, navega para lá primeiro
    if (!isHomePage) {
      window.location.href = `/#${sectionId}`;
      return;
    }

    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 120; // Altura correta do header fixo
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
    <footer className="relative z-10 py-16 sm:py-20 px-4 sm:px-6 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 mb-12 sm:mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link
              href={"/#"}
              className="inline-flex items-center space-x-3 mb-6 group"
            >
              <div className="p-3 bg-gradient-to-r from-purple-600 to-blue-500 rounded-2xl group-hover:shadow-xl transition-all duration-300">
                <Code size={28} className="text-white" />
              </div>
              <span className="text-3xl font-bold bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
                Malves
              </span>
            </Link>

            <p className="text-gray-400 leading-relaxed mb-8 text-lg max-w-md">
              Desenvolvedor independente criando aplicativos que fazem a
              diferença na vida das pessoas através da tecnologia.
            </p>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              <button
                onClick={() =>
                  window.open("https://github.com/malves-app", "_blank")
                }
                className="p-4 bg-white/10 hover:bg-gradient-to-r hover:from-gray-700 hover:to-gray-600 rounded-2xl transition-all duration-300 transform hover:scale-110 group"
              >
                <Github
                  size={24}
                  className="text-gray-300 group-hover:text-white transition-colors duration-200"
                />
              </button>
              <button
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/in/moabebarbosaa/",
                    "_blank"
                  )
                }
                className="p-4 bg-white/10 hover:bg-gradient-to-r hover:from-blue-600 hover:to-blue-500 rounded-2xl transition-all duration-300 transform hover:scale-110 group"
              >
                <Linkedin
                  size={24}
                  className="text-gray-300 group-hover:text-white transition-colors duration-200"
                />
              </button>
            </div>
          </div>

          {/* Navigation Column */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-white">Navegação</h4>
            <div className="space-y-4">
              {isHomePage ? (
                <>
                  <button
                    onClick={() => scrollToSection("apps")}
                    className="block text-gray-400 hover:text-white transition-colors duration-200 text-left"
                  >
                    Meus Apps
                  </button>
                  <button
                    onClick={() => scrollToSection("sobre")}
                    className="block text-gray-400 hover:text-white transition-colors duration-200 text-left"
                  >
                    Sobre
                  </button>
                  <button
                    onClick={() => scrollToSection("contato")}
                    className="block text-gray-400 hover:text-white transition-colors duration-200 text-left"
                  >
                    Contato
                  </button>
                </>
              ) : (
                <Link
                  href="/"
                  className="block text-gray-400 hover:text-white transition-colors duration-200"
                >
                  Voltar ao Início
                </Link>
              )}
              <Link
                href="/politica-de-privacidade"
                className="block text-gray-400 hover:text-white transition-colors duration-200"
              >
                Política de Privacidade e Uso do Site
              </Link>
            </div>
          </div>

          {/* Apps Column */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-white">Aplicativos</h4>
            <div className="space-y-4">
              <Link
                href="/nomeia"
                className="flex items-center space-x-3 text-gray-400 hover:text-white transition-colors duration-200 group"
              >
                <div className="p-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg">
                  <Brain size={16} className="text-white" />
                </div>
                <span>NomeIA</span>
                <ExternalLink
                  size={14}
                  className="opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                />
              </Link>
              <div className="flex items-center space-x-3 text-gray-500">
                <div className="p-2 bg-gray-600 rounded-lg">
                  <Users size={16} className="text-gray-400" />
                </div>
                <span>Mais apps em breve</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 sm:pt-12 border-t border-white/10">
          <div className="flex flex-col lg:flex-row items-center justify-between space-y-6 lg:space-y-0">
            <div className="flex flex-col sm:flex-row items-justify space-y-4 sm:space-y-0 sm:space-x-8">
              <p className="text-gray-400 text-center sm:text-left">
                &copy; {new Date().getFullYear()} Malves. Todos os direitos
                reservados.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
