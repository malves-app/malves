import { Brain, Heart, Shield } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="sobre" className="relative z-10 py-24 sm:py-32 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 sm:mb-24">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 sm:mb-8">
            Sobre{" "}
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Malves
            </span>
          </h2>

          <div className="max-w-5xl mx-auto">
            <p className="text-xl sm:text-2xl text-gray-300 mb-12 sm:mb-16 leading-relaxed px-4">
              Desenvolvedor independente apaixonado por criar aplicativos que
              combinam design excepcional com tecnologia de ponta.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
              <div className="bg-white/10 backdrop-blur-xl p-8 sm:p-10 rounded-3xl border border-white/20 hover:bg-white/15 transition-all duration-500 transform hover:scale-105 group">
                <div className="p-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl inline-block mb-6 shadow-xl group-hover:shadow-2xl transition-all duration-300">
                  <Brain size={32} className="text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold mb-4">
                  IA Avançada
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Utilizo inteligência artificial de última geração para criar
                  experiências únicas e personalizadas.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-xl p-8 sm:p-10 rounded-3xl border border-white/20 hover:bg-white/15 transition-all duration-500 transform hover:scale-105 group">
                <div className="p-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl inline-block mb-6 shadow-xl group-hover:shadow-2xl transition-all duration-300">
                  <Shield size={32} className="text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold mb-4">
                  Segurança
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Todos os apps são desenvolvidos com as melhores práticas de
                  segurança e privacidade.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-xl p-8 sm:p-10 rounded-3xl border border-white/20 hover:bg-white/15 transition-all duration-500 transform hover:scale-105 group sm:col-span-2 lg:col-span-1">
                <div className="p-4 bg-gradient-to-r from-green-500 to-teal-500 rounded-2xl inline-block mb-6 shadow-xl group-hover:shadow-2xl transition-all duration-300">
                  <Heart size={32} className="text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold mb-4">
                  Experiência
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Design intuitivo e experiência do usuário excepcional em cada
                  detalhe.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
