import { ArrowRight, Code, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import googlePlayIcon from "../../assets/googleplay.png";
import nomeiaIcon from "../../assets/nomeia.png";

const ShowcaseSection = () => {
  return (
    <section id="apps" className="relative z-10 py-24 sm:py-32 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 sm:mb-24">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 sm:mb-8">
            Meus{" "}
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Applicativos
            </span>
          </h2>
          <p className="text-xl sm:text-2xl text-gray-300 max-w-4xl mx-auto px-4 leading-relaxed">
            Cada aplicativo é desenvolvido com foco na experiência do usuário e
            tecnologia de ponta
          </p>
        </div>

        {/* Featured App - NomeIA */}
        <div className="mb-20 sm:mb-32">
          <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-2xl p-8 sm:p-12 lg:p-16 rounded-3xl sm:rounded-4xl border border-white/20 shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div className="order-2 lg:order-1">
                <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-500/20 to-blue-500/20 px-4 py-2 rounded-full border border-purple-400/30 mb-6">
                  <Sparkles size={16} className="text-purple-400" />
                  <span className="text-sm font-semibold text-purple-300">
                    App em Destaque
                  </span>
                </div>

                <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
                  NomeIA
                </h3>

                <p className="text-lg sm:text-xl text-gray-300 mb-8 leading-relaxed">
                  O gerador de nomes mais inteligente do Brasil. Crie nomes
                  únicos para empresas, produtos, marcas entre outras categorias
                  usando IA avançada.
                </p>

                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="bg-white/10 backdrop-blur-sm p-4 rounded-2xl border border-white/20">
                    <div className="text-2xl font-bold text-purple-400 mb-1">
                      1000+
                    </div>
                    <div className="text-gray-300 text-sm">Nomes gerados</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm p-4 rounded-2xl border border-white/20">
                    <div className="text-2xl font-bold text-blue-400 mb-1">
                      5
                    </div>
                    <div className="text-gray-300 text-sm">Categorias</div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                  <Link
                    to="/nomeia"
                    className="w-80 bg-gradient-to-r from-purple-600 to-blue-500 px-8 py-4 rounded-2xl hover:from-purple-700 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 shadow-xl font-bold text-lg flex items-center justify-center space-x-3"
                  >
                    <span>Ver Detalhes</span>
                    <ArrowRight
                      size={20}
                      className="group-hover:translate-x-1 transition-transform duration-200"
                    />
                  </Link>

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
                </div>
              </div>

              <div className="order-1 lg:order-2 flex justify-center">
                <div className="relative">
                  <div className="p-8 sm:p-10 bg-gradient-to-r rounded-3xl shadow-2xl animate-float">
                    <img src={nomeiaIcon} alt="NomeIA" className="size-48" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Coming Soon Apps */}
        <div className="text-center mb-12">
          <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-300">
            Próximos Lançamentos
          </h3>
          <p className="text-gray-400 text-lg">
            Mais aplicativos inovadores em desenvolvimento
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 justify-center">
          {/* <div className="bg-white/5 backdrop-blur-xl p-8 rounded-2xl sm:rounded-3xl border border-white/10 relative overflow-hidden group hover:bg-white/10 transition-all duration-500">
            <div className="absolute top-4 right-4 bg-gradient-to-r from-yellow-400 to-orange-400 px-3 py-1 rounded-full text-xs font-bold text-black">
              Em breve
            </div>

            <div className="mb-6">
              <div className="p-4 bg-gradient-to-r from-gray-600 to-gray-700 rounded-2xl inline-block group-hover:from-purple-600 group-hover:to-blue-500 transition-all duration-500">
                <Users
                  size={32}
                  className="text-gray-300 group-hover:text-white transition-colors duration-500"
                />
              </div>
            </div>

            <h3 className="text-xl font-bold mb-4 text-gray-400 group-hover:text-gray-200 transition-colors duration-300">
              App de Produtividade
            </h3>

            <p className="text-gray-500 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
              Uma nova forma de organizar suas tarefas e projetos com
              inteligência artificial.
            </p>
          </div> */}

          <div className="bg-white/5 backdrop-blur-xl p-8 rounded-2xl sm:rounded-3xl border border-white/10 relative overflow-hidden group hover:bg-white/10 transition-all duration-500">
            <div className="absolute top-4 right-4 bg-gradient-to-r from-yellow-400 to-orange-400 px-3 py-1 rounded-full text-xs font-bold text-black">
              Em breve
            </div>

            <div className="mb-6">
              <div className="p-4 bg-gradient-to-r from-gray-600 to-gray-700 rounded-2xl inline-block group-hover:from-green-600 group-hover:to-teal-500 transition-all duration-500">
                <Code
                  size={32}
                  className="text-gray-300 group-hover:text-white transition-colors duration-500"
                />
              </div>
            </div>

            <h3 className="text-xl font-bold mb-4 text-gray-400 group-hover:text-gray-200 transition-colors duration-300">
              Próximos Lançamentos
            </h3>

            <p className="text-gray-500 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
              Novos aplicativos estão a caminho! Em breve você poderá explorar
              soluções ainda mais inovadoras feitas para você.
            </p>
          </div>

          {/* <div className="bg-white/5 backdrop-blur-xl p-8 rounded-2xl sm:rounded-3xl border border-white/10 relative overflow-hidden group hover:bg-white/10 transition-all duration-500 sm:col-span-2 lg:col-span-1">
            <div className="absolute top-4 right-4 bg-gradient-to-r from-yellow-400 to-orange-400 px-3 py-1 rounded-full text-xs font-bold text-black">
              Em breve
            </div>

            <div className="mb-6">
              <div className="p-4 bg-gradient-to-r from-gray-600 to-gray-700 rounded-2xl inline-block group-hover:from-pink-600 group-hover:to-rose-500 transition-all duration-500">
                <Heart
                  size={32}
                  className="text-gray-300 group-hover:text-white transition-colors duration-500"
                />
              </div>
            </div>

            <h3 className="text-xl font-bold mb-4 text-gray-400 group-hover:text-gray-200 transition-colors duration-300">
              Mais Inovações
            </h3>

            <p className="text-gray-500 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
              Sempre trabalhando em novas ideias para facilitar sua vida
              digital.
            </p>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default ShowcaseSection;
