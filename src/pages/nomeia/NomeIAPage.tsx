import {
  ArrowRight,
  Award,
  Brain,
  ChevronDown,
  Code,
  ExternalLink,
  Filter,
  Github,
  Globe,
  Heart,
  Linkedin,
  Menu,
  Play,
  Shield,
  Smartphone,
  Sparkles,
  Target,
  TrendingUp,
  Users,
  X,
  Zap
} from "lucide-react";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import googlePlayIcon from "../../assets/googleplay.png";

const NomeIAPage: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    // Garante que a página sempre carregue no topo
    window.scrollTo(0, 0);

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-32 right-16 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-32 left-16 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-float animation-delay-700"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-indigo-500/5 rounded-full blur-2xl animate-float animation-delay-500"></div>
      </div>

      {/* Modern Floating Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "backdrop-blur-2xl shadow-2xl py-3"
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
          <div className="hidden lg:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("sobre")}
              className="text-gray-300 hover:text-white transition-colors duration-200 font-medium relative group"
            >
              Sobre
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-blue-400 group-hover:w-full transition-all duration-300"></div>
            </button>
            <button
              onClick={() => scrollToSection("categorias")}
              className="text-gray-300 hover:text-white transition-colors duration-200 font-medium relative group"
            >
              Categorias
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-blue-400 group-hover:w-full transition-all duration-300"></div>
            </button>
            <button
              onClick={() => scrollToSection("como-funciona")}
              className="text-gray-300 hover:text-white transition-colors duration-200 font-medium relative group"
            >
              Como Funciona
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-blue-400 group-hover:w-full transition-all duration-300"></div>
            </button>
            <Link
              to="/nomeia/app"
              className="bg-gradient-to-r from-purple-600 to-blue-500 px-6 py-3 rounded-full hover:from-purple-700 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 shadow-lg font-semibold"
            >
              Testar Agora
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 hover:bg-white/10 rounded-xl transition-colors duration-200"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-2xl border-b border-white/10 shadow-2xl">
            <div className="px-4 py-6 space-y-4">
              <button
                onClick={() => scrollToSection("sobre")}
                className="block w-full text-left text-gray-300 hover:text-white transition-colors duration-200 font-medium py-3 px-4 hover:bg-white/10 rounded-xl"
              >
                Sobre
              </button>
              <button
                onClick={() => scrollToSection("categorias")}
                className="block w-full text-left text-gray-300 hover:text-white transition-colors duration-200 font-medium py-3 px-4 hover:bg-white/10 rounded-xl"
              >
                Categorias
              </button>
              <button
                onClick={() => scrollToSection("como-funciona")}
                className="block w-full text-left text-gray-300 hover:text-white transition-colors duration-200 font-medium py-3 px-4 hover:bg-white/10 rounded-xl"
              >
                Como Funciona
              </button>
              <Link
                to="/nomeia/app"
                className="block bg-gradient-to-r from-purple-600 to-blue-500 px-6 py-3 rounded-xl hover:from-purple-700 hover:to-blue-600 transition-all duration-300 font-semibold text-center"
              >
                Testar Agora
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative z-10 min-h-screen flex items-center justify-center px-4 sm:px-6 pt-24 pb-16">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-8">
            <div className="p-8 sm:p-12 bg-gradient-to-r from-purple-600 to-blue-500 rounded-3xl sm:rounded-4xl inline-block shadow-2xl animate-float">
              <Brain size={64} className="text-white sm:w-20 sm:h-20" />
            </div>
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-8 sm:mb-12 leading-tight">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              NomeIA
            </span>
          </h1>

          <p className="text-xl sm:text-2xl md:text-3xl text-gray-300 mb-12 sm:mb-16 leading-relaxed max-w-5xl mx-auto px-4">
            O gerador de nomes mais inteligente do Brasil. Crie nomes únicos
            para empresas, produtos, marcas e bebês com o poder da IA.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center space-y-6 sm:space-y-0 sm:space-x-8 mb-16">
            <button
              onClick={() => {
                window.open(
                  "https://play.google.com/store/apps/details?id=br.app.malves.nomeia",
                  "_blank"
                );
              }}
            >
              <img src={googlePlayIcon} alt="Google Play" />
            </button>

            <button
              onClick={() => scrollToSection("recursos")}
              className="px-10 sm:px-12 py-5 sm:py-6 border-2 border-white/20 rounded-2xl hover:bg-white/10 transition-all duration-300 font-bold text-xl sm:text-2xl backdrop-blur-sm w-full sm:w-auto text-center"
            >
              Conhecer Recursos
            </button>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 max-w-5xl mx-auto">
            <div className="bg-white/10 backdrop-blur-xl p-6 sm:p-8 rounded-2xl sm:rounded-3xl border border-white/20 hover:bg-white/15 transition-all duration-300 transform hover:scale-105">
              <div className="text-3xl sm:text-4xl font-bold text-purple-400 mb-2">
                1000+
              </div>
              <div className="text-gray-300 text-sm sm:text-base">
                Nomes gerados
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-xl p-6 sm:p-8 rounded-2xl sm:rounded-3xl border border-white/20 hover:bg-white/15 transition-all duration-300 transform hover:scale-105">
              <div className="text-3xl sm:text-4xl font-bold text-blue-400 mb-2">
                95%
              </div>
              <div className="text-gray-300 text-sm sm:text-base">
                Precisão IA
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-xl p-6 sm:p-8 rounded-2xl sm:rounded-3xl border border-white/20 hover:bg-white/15 transition-all duration-300 transform hover:scale-105">
              <div className="text-3xl sm:text-4xl font-bold text-green-400 mb-2">
                5
              </div>
              <div className="text-gray-300 text-sm sm:text-base">
                Categorias
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-xl p-6 sm:p-8 rounded-2xl sm:rounded-3xl border border-white/20 hover:bg-white/15 transition-all duration-300 transform hover:scale-105">
              <div className="text-3xl sm:text-4xl font-bold text-yellow-400 mb-2">
                4.9
              </div>
              <div className="text-gray-300 text-sm sm:text-base">
                Avaliação
              </div>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown size={32} className="text-white/60" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section
        id="recursos"
        className="relative z-10 py-24 sm:py-32 px-4 sm:px-6"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 sm:mb-24">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 sm:mb-8">
              Por que escolher o{" "}
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                NomeIA
              </span>
              ?
            </h2>
            <p className="text-xl sm:text-2xl text-gray-300 max-w-4xl mx-auto px-4 leading-relaxed">
              Tecnologia de ponta combinada com design intuitivo para criar a
              melhor experiência de geração de nomes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
            <div className="bg-white/10 backdrop-blur-xl p-8 sm:p-10 rounded-3xl border border-white/20 hover:bg-white/15 transition-all duration-500 transform hover:scale-105 group">
              <div className="p-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl inline-block mb-6 shadow-xl group-hover:shadow-2xl transition-all duration-300">
                <Brain size={32} className="text-white" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-4">
                IA Avançada
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Algoritmos de última geração que analisam padrões, tendências e
                significados para criar nomes únicos e memoráveis.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-xl p-8 sm:p-10 rounded-3xl border border-white/20 hover:bg-white/15 transition-all duration-500 transform hover:scale-105 group">
              <div className="p-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl inline-block mb-6 shadow-xl group-hover:shadow-2xl transition-all duration-300">
                <Filter size={32} className="text-white" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-4">
                Filtros Inteligentes
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Personalize completamente sua busca com filtros de estilo,
                categoria, idioma e tamanho para resultados precisos.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-xl p-8 sm:p-10 rounded-3xl border border-white/20 hover:bg-white/15 transition-all duration-500 transform hover:scale-105 group">
              <div className="p-4 bg-gradient-to-r from-green-500 to-teal-500 rounded-2xl inline-block mb-6 shadow-xl group-hover:shadow-2xl transition-all duration-300">
                <Zap size={32} className="text-white" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-4">
                Resultados Instantâneos
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Gere múltiplas sugestões em segundos, com explicações detalhadas
                sobre o significado de cada nome.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-xl p-8 sm:p-10 rounded-3xl border border-white/20 hover:bg-white/15 transition-all duration-500 transform hover:scale-105 group">
              <div className="p-4 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl inline-block mb-6 shadow-xl group-hover:shadow-2xl transition-all duration-300">
                <Heart size={32} className="text-white" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-4">
                Sistema de Favoritos
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Salve seus nomes preferidos com suas explicações e acesse
                facilmente sua coleção pessoal.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-xl p-8 sm:p-10 rounded-3xl border border-white/20 hover:bg-white/15 transition-all duration-500 transform hover:scale-105 group">
              <div className="p-4 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl inline-block mb-6 shadow-xl group-hover:shadow-2xl transition-all duration-300">
                <Shield size={32} className="text-white" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-4">
                100% Seguro
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Seus dados são processados localmente. Nenhuma informação
                pessoal é armazenada em nossos servidores.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-xl p-8 sm:p-10 rounded-3xl border border-white/20 hover:bg-white/15 transition-all duration-500 transform hover:scale-105 group">
              <div className="p-4 bg-gradient-to-r from-pink-500 to-rose-500 rounded-2xl inline-block mb-6 shadow-xl group-hover:shadow-2xl transition-all duration-300">
                <Globe size={32} className="text-white" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-4">
                Multiplataforma
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Funciona perfeitamente em qualquer dispositivo, com interface
                otimizada para mobile e desktop.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section
        id="categorias"
        className="relative z-10 py-24 sm:py-32 px-4 sm:px-6"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 sm:mb-24">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 sm:mb-8">
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Categorias
              </span>{" "}
              Disponíveis
            </h2>
            <p className="text-xl sm:text-2xl text-gray-300 max-w-4xl mx-auto px-4 leading-relaxed">
              Gere nomes personalizados para diferentes tipos de projetos
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-xl p-8 sm:p-10 rounded-2xl sm:rounded-3xl border border-white/20 hover:from-blue-500/30 hover:to-purple-500/30 transition-all duration-500 transform hover:scale-105 group">
              <div className="p-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl inline-block mb-6 shadow-xl group-hover:shadow-2xl transition-all duration-300">
                <Award size={32} className="text-white" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-4 text-blue-300">
                🏢 Empresas
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Nomes profissionais para startups, corporações e negócios
                inovadores
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-500/20 to-teal-500/20 backdrop-blur-xl p-8 sm:p-10 rounded-2xl sm:rounded-3xl border border-white/20 hover:from-green-500/30 hover:to-teal-500/30 transition-all duration-500 transform hover:scale-105 group">
              <div className="p-4 bg-gradient-to-r from-green-500 to-teal-500 rounded-2xl inline-block mb-6 shadow-xl group-hover:shadow-2xl transition-all duration-300">
                <Target size={32} className="text-white" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-4 text-green-300">
                📦 Produtos
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Nomes criativos para produtos e serviços inovadores
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-xl p-8 sm:p-10 rounded-2xl sm:rounded-3xl border border-white/20 hover:from-purple-500/30 hover:to-pink-500/30 transition-all duration-500 transform hover:scale-105 group">
              <div className="p-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl inline-block mb-6 shadow-xl group-hover:shadow-2xl transition-all duration-300">
                <Smartphone size={32} className="text-white" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-4 text-purple-300">
                📱 Aplicativos
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Nomes tech para apps, softwares e plataformas digitais
              </p>
            </div>

            <div className="bg-gradient-to-br from-orange-500/20 to-red-500/20 backdrop-blur-xl p-8 sm:p-10 rounded-2xl sm:rounded-3xl border border-white/20 hover:from-orange-500/30 hover:to-red-500/30 transition-all duration-500 transform hover:scale-105 group">
              <div className="p-4 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl inline-block mb-6 shadow-xl group-hover:shadow-2xl transition-all duration-300">
                <TrendingUp size={32} className="text-white" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-4 text-orange-300">
                🏆 Marcas
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Identidades únicas para marcas e projetos pessoais
              </p>
            </div>

            <div className="bg-gradient-to-br from-pink-500/20 to-rose-500/20 backdrop-blur-xl p-8 sm:p-10 rounded-2xl sm:rounded-3xl border border-white/20 hover:from-pink-500/30 hover:to-rose-500/30 transition-all duration-500 transform hover:scale-105 group">
              <div className="p-4 bg-gradient-to-r from-pink-500 to-rose-500 rounded-2xl inline-block mb-6 shadow-xl group-hover:shadow-2xl transition-all duration-300">
                <Heart size={32} className="text-white" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-4 text-pink-300">
                👶 Bebês
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Nomes especiais e únicos para seu futuro filho ou filha
              </p>
            </div>

            <div className="bg-gradient-to-br from-indigo-500/20 to-blue-500/20 backdrop-blur-xl p-8 sm:p-10 rounded-2xl sm:rounded-3xl border border-white/20 hover:from-indigo-500/30 hover:to-blue-500/30 transition-all duration-500 transform hover:scale-105 group">
              <div className="p-4 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-2xl inline-block mb-6 shadow-xl group-hover:shadow-2xl transition-all duration-300">
                <Sparkles size={32} className="text-white" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-4 text-indigo-300">
                ✨ Mais categorias
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Novas categorias sendo adicionadas constantemente
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section
        id="como-funciona"
        className="relative z-10 py-24 sm:py-32 px-4 sm:px-6"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 sm:mb-24">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 sm:mb-8">
              Como{" "}
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Funciona
              </span>
            </h2>
            <p className="text-xl sm:text-2xl text-gray-300 max-w-4xl mx-auto px-4 leading-relaxed">
              Processo simples e intuitivo para gerar nomes únicos
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
            <div className="text-center group">
              <div className="mb-8">
                <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-r from-purple-600 to-blue-500 rounded-full flex items-center justify-center mx-auto shadow-2xl group-hover:shadow-3xl transition-all duration-300 transform group-hover:scale-110">
                  <span className="text-2xl sm:text-3xl font-bold text-white">
                    1
                  </span>
                </div>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">
                Escolha a Categoria
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Selecione se você precisa de um nome para empresa, produto,
                aplicativo, marca ou bebê.
              </p>
            </div>

            <div className="text-center group">
              <div className="mb-8">
                <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full flex items-center justify-center mx-auto shadow-2xl group-hover:shadow-3xl transition-all duration-300 transform group-hover:scale-110">
                  <span className="text-2xl sm:text-3xl font-bold text-white">
                    2
                  </span>
                </div>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">
                Configure os Filtros
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Defina o estilo, segmento, idioma, tamanho e quantidade de nomes
                que deseja gerar.
              </p>
            </div>

            <div className="text-center group">
              <div className="mb-8">
                <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-r from-green-600 to-teal-500 rounded-full flex items-center justify-center mx-auto shadow-2xl group-hover:shadow-3xl transition-all duration-300 transform group-hover:scale-110">
                  <span className="text-2xl sm:text-3xl font-bold text-white">
                    3
                  </span>
                </div>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">
                IA Gera Sugestões
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Nossa inteligência artificial processa suas preferências e cria
                nomes únicos em segundos.
              </p>
            </div>

            <div className="text-center group">
              <div className="mb-8">
                <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-r from-pink-600 to-rose-500 rounded-full flex items-center justify-center mx-auto shadow-2xl group-hover:shadow-3xl transition-all duration-300 transform group-hover:scale-110">
                  <span className="text-2xl sm:text-3xl font-bold text-white">
                    4
                  </span>
                </div>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">
                Explore e Favorite
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Analise as sugestões com suas explicações, copie, compartilhe e
                salve seus favoritos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 py-24 sm:py-32 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto text-center">
          <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-2xl p-12 sm:p-16 rounded-3xl sm:rounded-4xl border border-white/20 shadow-2xl">
            <div className="mb-8 sm:mb-12">
              <div className="p-6 sm:p-8 bg-gradient-to-r from-purple-600 to-blue-500 rounded-3xl inline-block shadow-2xl animate-pulse-glow">
                <Sparkles
                  size={48}
                  className="text-white sm:w-16 sm:h-16 w-12 h-12"
                />
              </div>
            </div>

            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 sm:mb-8">
              Pronto para{" "}
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                começar
              </span>
              ?
            </h2>

            <p className="text-xl sm:text-2xl text-gray-300 mb-12 sm:mb-16 leading-relaxed px-4">
              Experimente agora o NomeIA e descubra nomes únicos para seus
              projetos
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center space-y-6 sm:space-y-0 sm:space-x-8">
              <Link
                to="/nomeia/app"
                className="group bg-gradient-to-r from-purple-600 to-blue-500 px-12 sm:px-16 py-6 sm:py-8 rounded-2xl hover:from-purple-700 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 shadow-2xl font-bold text-xl sm:text-2xl flex items-center space-x-4 w-full sm:w-auto justify-center"
              >
                <Play size={28} />
                <span>Testar Agora</span>
                <ArrowRight
                  size={28}
                  className="group-hover:translate-x-1 transition-transform duration-200"
                />
              </Link>

              <Link
                to="/"
                className="px-12 sm:px-16 py-6 sm:py-8 border-2 border-white/20 rounded-2xl hover:bg-white/10 transition-all duration-300 font-bold text-xl sm:text-2xl backdrop-blur-sm w-full sm:w-auto text-center"
              >
                Voltar para Malves
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Modern Footer */}
      <footer className="relative z-10 py-16 sm:py-20 px-4 sm:px-6 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          {/* Newsletter Section */}
          <div className="bg-gradient-to-r from-purple-600/10 to-blue-600/10 backdrop-blur-xl p-8 sm:p-12 rounded-3xl border border-white/20 mb-12 sm:mb-16 text-center">
            <h3 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">
              Fique por dentro das novidades
            </h3>
            <p className="text-gray-300 mb-6 sm:mb-8 text-lg">
              Seja o primeiro a saber sobre novos apps e atualizações
            </p>
            <div className="flex flex-col sm:flex-row max-w-md mx-auto space-y-4 sm:space-y-0 sm:space-x-4">
              <input
                type="email"
                placeholder="Seu melhor email"
                className="flex-1 px-6 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 transition-all duration-200"
              />
              <button className="bg-gradient-to-r from-purple-600 to-blue-500 px-8 py-4 rounded-2xl hover:from-purple-700 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 shadow-lg font-semibold">
                Inscrever
              </button>
            </div>
          </div>

          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 mb-12 sm:mb-16">
            {/* Brand Column */}
            <div className="lg:col-span-2">
              <Link
                to="/"
                className="inline-flex items-center space-x-4 mb-8 group"
              >
                <div className="p-3 bg-gradient-to-r from-purple-600 to-blue-500 rounded-2xl group-hover:shadow-xl transition-all duration-300">
                  <Code size={32} className="text-white" />
                </div>
                <span className="text-3xl font-bold bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
                  Malves
                </span>
              </Link>

              <p className="text-gray-400 leading-relaxed mb-8 text-lg max-w-lg">
                Desenvolvedor independente criando aplicativos que fazem a
                diferença na vida das pessoas através da tecnologia e
                inteligência artificial.
              </p>

              {/* Social Links */}
              <div className="flex items-center space-x-4">
                <a
                  href="#"
                  className="p-4 bg-white/10 hover:bg-gradient-to-r hover:from-gray-700 hover:to-gray-600 rounded-2xl transition-all duration-300 transform hover:scale-110 group"
                >
                  <Github
                    size={24}
                    className="text-gray-300 group-hover:text-white transition-colors duration-200"
                  />
                </a>
                <a
                  href="#"
                  className="p-4 bg-white/10 hover:bg-gradient-to-r hover:from-blue-600 hover:to-blue-500 rounded-2xl transition-all duration-300 transform hover:scale-110 group"
                >
                  <Linkedin
                    size={24}
                    className="text-gray-300 group-hover:text-white transition-colors duration-200"
                  />
                </a>
              </div>
            </div>

            {/* Navigation Column */}
            <div>
              <h4 className="text-xl font-bold mb-6 text-white">Navegação</h4>
              <div className="space-y-4">
                <Link
                  to="/"
                  className="block text-gray-400 hover:text-white transition-colors duration-200 hover:translate-x-1 transform"
                >
                  Início
                </Link>
                <button
                  onClick={() => scrollToSection("recursos")}
                  className="block text-gray-400 hover:text-white transition-colors duration-200 text-left hover:translate-x-1 transform"
                >
                  Recursos
                </button>
                <button
                  onClick={() => scrollToSection("categorias")}
                  className="block text-gray-400 hover:text-white transition-colors duration-200 text-left hover:translate-x-1 transform"
                >
                  Categorias
                </button>
                <button
                  onClick={() => scrollToSection("como-funciona")}
                  className="block text-gray-400 hover:text-white transition-colors duration-200 text-left hover:translate-x-1 transform"
                >
                  Como Funciona
                </button>
                <Link
                  to="/privacy"
                  className="block text-gray-400 hover:text-white transition-colors duration-200 hover:translate-x-1 transform"
                >
                  Privacidade
                </Link>
              </div>
            </div>

            {/* Apps Column */}
            <div>
              <h4 className="text-xl font-bold mb-6 text-white">Aplicativos</h4>
              <div className="space-y-4">
                <Link
                  to="/nomeia"
                  className="flex items-center space-x-3 text-gray-400 hover:text-white transition-all duration-200 group hover:translate-x-1 transform"
                >
                  <div className="p-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg group-hover:shadow-lg transition-all duration-200">
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
              <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-8">
                <p className="text-gray-400 text-center sm:text-left">
                  &copy; 2024 Malves. Feito com ❤️ no Brasil.
                </p>

                <div className="flex items-center space-x-6 text-sm">
                  <Link
                    to="/privacy"
                    className="text-gray-400 hover:text-white transition-colors duration-200 hover:underline"
                  >
                    Política de Privacidade
                  </Link>
                  <a
                    href="mailto:contato@malves.com"
                    className="text-gray-400 hover:text-white transition-colors duration-200 hover:underline"
                  >
                    Contato
                  </a>
                </div>
              </div>

              {/* Status Badge */}
              <div className="flex items-center space-x-3 bg-green-500/20 px-6 py-3 rounded-full border border-green-400/30">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-green-300 font-semibold">
                  App funcionando perfeitamente
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default NomeIAPage;
