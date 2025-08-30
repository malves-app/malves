import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Code, ArrowLeft, Shield, Eye, Database, Lock } from "lucide-react";
import FooterSection from "@/components/malves/FooterSection";

const PrivacyPolicyPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 120;
      const elementPosition = element.offsetTop - headerHeight - 20;
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      });

      window.history.pushState(null, "", `#${sectionId}`);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-900 text-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 px-6 py-8 border-b border-white/10 bg-gradient-to-br from-slate-900/95 via-gray-900/95 to-slate-900/95 backdrop-blur-xl">
        <nav className="max-w-4xl mx-auto flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="p-2 bg-gradient-to-r from-purple-600 to-blue-500 rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-300">
              <Code size={24} className="text-white" />
            </div>
            <span className="text-xl font-bold text-gray-300 group-hover:text-white transition-colors duration-200">
              Malves
            </span>
          </Link>

          <Link
            to="/"
            className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-200 font-medium"
          >
            <ArrowLeft size={20} />
            <span>Voltar</span>
          </Link>
        </nav>
      </header>

      {/* Content */}
      <main className="px-6 py-12 pt-32">
        <div className="max-w-4xl mx-auto">
          {/* Hero */}
          <div className="text-center mb-16">
            <div className="mb-8">
              <div className="p-6 bg-gradient-to-r from-green-600 to-teal-500 rounded-3xl inline-block shadow-2xl">
                <Shield size={48} className="text-white" />
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Política de{" "}
              <span className="bg-gradient-to-r from-green-400 to-teal-400 bg-clip-text text-transparent">
                Privacidade e Uso do Site
              </span>
            </h1>

            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Este site tem como finalidade apresentar e divulgar aplicativos
              desenvolvidos por Malves. Ao acessar este site, você concorda com
              os termos desta política.
            </p>

            <div className="mt-8 inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium">
                Última atualização: Agosto 2025
              </span>
            </div>
          </div>

          {/* Menu de Navegação Rápida */}
          <div className="mb-12">
            <div className="bg-white/5 backdrop-blur-xl p-6 rounded-3xl border border-white/10">
              <h3 className="text-lg font-semibold mb-4 text-center">
                Navegação Rápida
              </h3>
              <div className="flex flex-wrap justify-center gap-3">
                <button
                  onClick={() => scrollToSection("finalidade")}
                  className="px-4 py-2 bg-white/10 hover:bg-white/20 rounded-xl transition-all duration-200 text-sm font-medium cursor-pointer"
                >
                  Finalidade
                </button>
                <button
                  onClick={() => scrollToSection("coleta")}
                  className="px-4 py-2 bg-white/10 hover:bg-white/20 rounded-xl transition-all duration-200 text-sm font-medium cursor-pointer"
                >
                  Coleta
                </button>
                <button
                  onClick={() => scrollToSection("uso")}
                  className="px-4 py-2 bg-white/10 hover:bg-white/20 rounded-xl transition-all duration-200 text-sm font-medium cursor-pointer"
                >
                  Uso
                </button>
                <button
                  onClick={() => scrollToSection("links")}
                  className="px-4 py-2 bg-white/10 hover:bg-white/20 rounded-xl transition-all duration-200 text-sm font-medium cursor-pointer"
                >
                  Links
                </button>
                <button
                  onClick={() => scrollToSection("seguranca")}
                  className="px-4 py-2 bg-white/10 hover:bg-white/20 rounded-xl transition-all duration-200 text-sm font-medium cursor-pointer"
                >
                  Segurança
                </button>
                <button
                  onClick={() => scrollToSection("alteracoes")}
                  className="px-4 py-2 bg-white/10 hover:bg-white/20 rounded-xl transition-all duration-200 text-sm font-medium cursor-pointer"
                >
                  Alterações
                </button>
                <button
                  onClick={() => scrollToSection("contato")}
                  className="px-4 py-2 bg-white/10 hover:bg-white/20 rounded-xl transition-all duration-200 text-sm font-medium cursor-pointer"
                >
                  Contato
                </button>
              </div>
            </div>
          </div>

          {/* Content Sections */}
          <div className="space-y-12">
            {/* Finalidade do site */}
            <section
              id="finalidade"
              className="bg-white/5 backdrop-blur-xl p-8 rounded-3xl border border-white/10"
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className="p-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl">
                  <Database size={24} className="text-white" />
                </div>
                <h2 className="text-2xl font-bold">1. Finalidade do site</h2>
              </div>

              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  O site funciona exclusivamente como vitrine dos aplicativos,
                  fornecendo informações, descrições e links para download em
                  lojas oficiais (Google Play, App Store ou outras).
                </p>
              </div>
            </section>

            {/* Coleta de informações */}
            <section
              id="coleta"
              className="bg-white/5 backdrop-blur-xl p-8 rounded-3xl border border-white/10"
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl">
                  <Eye size={24} className="text-white" />
                </div>
                <h2 className="text-2xl font-bold">2. Coleta de informações</h2>
              </div>

              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>O site não coleta dados pessoais automaticamente.</p>
                <p>
                  Caso exista um formulário de contato, poderão ser solicitados
                  nome, e-mail e mensagem, que serão utilizados apenas para
                  retorno do contato solicitado.
                </p>
                <p>
                  Não utilizamos cookies de rastreamento, salvo os estritamente
                  necessários para o funcionamento do site.
                </p>
              </div>
            </section>

            {/* Uso das informações */}
            <section
              id="uso"
              className="bg-white/5 backdrop-blur-xl p-8 rounded-3xl border border-white/10"
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className="p-3 bg-gradient-to-r from-green-500 to-teal-500 rounded-2xl">
                  <Lock size={24} className="text-white" />
                </div>
                <h2 className="text-2xl font-bold">3. Uso das informações</h2>
              </div>

              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  As informações fornecidas voluntariamente por meio do
                  formulário de contato serão utilizadas apenas para comunicação
                  entre o visitante e Malves, não sendo compartilhadas com
                  terceiros.
                </p>
              </div>
            </section>

            {/* Links externos */}
            <section
              id="links"
              className="bg-white/5 backdrop-blur-xl p-8 rounded-3xl border border-white/10"
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className="p-3 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl">
                  <Shield size={24} className="text-white" />
                </div>
                <h2 className="text-2xl font-bold">4. Links externos</h2>
              </div>

              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  Este site pode conter links para outras páginas e lojas de
                  aplicativos. Não nos responsabilizamos pelas práticas de
                  privacidade ou conteúdo de sites/aplicativos de terceiros.
                </p>
              </div>
            </section>

            {/* Segurança */}
            <section
              id="seguranca"
              className="bg-white/5 backdrop-blur-xl p-8 rounded-3xl border border-white/10"
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className="p-3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl">
                  <Eye size={24} className="text-white" />
                </div>
                <h2 className="text-2xl font-bold">5. Segurança</h2>
              </div>

              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  Adotamos medidas técnicas e organizacionais para proteger as
                  informações eventualmente enviadas pelos usuários, evitando
                  acesso não autorizado, divulgação ou alteração indevida.
                </p>
              </div>
            </section>

            {/* Alterações nesta política */}
            <section
              id="alteracoes"
              className="bg-white/5 backdrop-blur-xl p-8 rounded-3xl border border-white/10"
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className="p-3 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-2xl">
                  <Database size={24} className="text-white" />
                </div>
                <h2 className="text-2xl font-bold">
                  6. Alterações nesta política
                </h2>
              </div>

              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  Esta política pode ser atualizada periodicamente. Recomendamos
                  a verificação desta página para estar ciente de eventuais
                  mudanças.
                </p>
              </div>
            </section>

            {/* Contato */}
            <section
              id="contato"
              className="bg-white/5 backdrop-blur-xl p-8 rounded-3xl border border-white/10"
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className="p-3 bg-gradient-to-r from-pink-500 to-rose-500 rounded-2xl">
                  <Shield size={24} className="text-white" />
                </div>
                <h2 className="text-2xl font-bold">7. Contato</h2>
              </div>

              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  Em caso de dúvidas sobre esta política ou sobre o
                  funcionamento do site, entre em contato pelo e-mail:{" "}
                  <strong className="text-white">malvesappbr@gmail.com</strong>.
                </p>
              </div>
            </section>

            {/* Contato */}
            <section className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-xl p-8 rounded-3xl border border-white/20">
              <div className="text-center">
                <h2 className="text-2xl font-bold mb-6">
                  Dúvidas sobre Política de Privacidade e Uso do Site?
                </h2>
                <p className="text-gray-300 mb-8 leading-relaxed">
                  Se você tiver dúvidas sobre esta política de privacidade ou
                  sobre o funcionamento do site, entre em contato conosco.
                </p>

                <div className="space-y-4">
                  <a
                    href=""
                    className="inline-block bg-gradient-to-r from-purple-600 to-blue-500 px-8 py-4 rounded-2xl hover:from-purple-700 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 shadow-lg font-semibold"
                  >
                    Entrar em contato
                  </a>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>

      <FooterSection />
    </div>
  );
};

export default PrivacyPolicyPage;
