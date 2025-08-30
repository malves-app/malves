import { ArrowRight, Code, Mail, Users } from "lucide-react";
import { useState, useRef } from "react";
import toast from "react-hot-toast";

const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);

    formData.append("_subject", "Nova mensagem - Malves");
    formData.append("_template", "table");
    formData.append("_captcha", "false");

    try {
      const response = await fetch(
        "https://formsubmit.co/malvesappbr@gmail.com",
        {
          method: "POST",
          body: formData,
          headers: {
            Accept: "application/json",
          },
        }
      );

      if (response.status === 200 || response.status === 302) {
        toast.success(
          "Mensagem enviada com sucesso! Entrarei em contato em breve."
        );
        setTimeout(() => {
          if (formRef.current) {
            formRef.current.reset();
            console.log("Formulário resetado com sucesso");
          }
        }, 100);
      } else {
        console.error("Status da resposta:", response.status);
        toast.error("Erro ao enviar mensagem. Tente novamente.");
      }
    } catch (error) {
      console.error("Erro no envio:", error);
      toast.error("Erro ao enviar mensagem. Tente novamente.");
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <section id="contato" className="relative z-10 py-24 sm:py-32 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 sm:mb-20">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 sm:mb-8">
            Vamos{" "}
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Conversar
            </span>
          </h2>
          <p className="text-xl sm:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed px-4">
            Interessado em colaborar? Tem uma ideia incrível? Vamos trocar
            ideias sobre tecnologia!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-white/10 backdrop-blur-xl p-8 rounded-3xl border border-white/20 hover:bg-white/15 transition-all duration-300 group">
              <div className="flex items-center space-x-6 mb-6">
                <div className="p-4 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl group-hover:shadow-xl transition-all duration-300">
                  <Mail size={28} className="text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Email Direto</h3>
                  <a
                    href="mailto:contato@malves.com"
                    className="text-purple-300 hover:text-purple-200 transition-colors duration-200 text-lg"
                  >
                    malvesappbr@gmail.com
                  </a>
                </div>
              </div>
              <p className="text-gray-300">
                Respondo pessoalmente todos os emails. Vamos conversar sobre seu
                projeto!
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-xl p-8 rounded-3xl border border-white/20 hover:bg-white/15 transition-all duration-300 group">
              <div className="flex items-center space-x-6 mb-6">
                <div className="p-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl group-hover:shadow-xl transition-all duration-300">
                  <Code size={28} className="text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Desenvolvimento</h3>
                  <p className="text-blue-300 text-lg">Apps mobile e web</p>
                </div>
              </div>
              <p className="text-gray-300">
                Especializado em React, React Native, Flutter, NestJS, NextJS e
                inteligência artificial.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-xl p-8 rounded-3xl border border-white/20 hover:bg-white/15 transition-all duration-300 group">
              <div className="flex items-center space-x-6 mb-6">
                <div className="p-4 bg-gradient-to-r from-green-500 to-teal-500 rounded-2xl group-hover:shadow-xl transition-all duration-300">
                  <Users size={28} className="text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Colaboração</h3>
                  <p className="text-green-300 text-lg">Projetos em parceria</p>
                </div>
              </div>
              <p className="text-gray-300">
                Aberto a parcerias e projetos interessantes que façam a
                diferença.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl p-8 sm:p-10 rounded-3xl border border-white/20 shadow-2xl">
            <h3 className="text-2xl sm:text-3xl font-bold mb-8 text-center">
              Envie uma mensagem
            </h3>
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-2">
                    Nome
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Seu nome"
                    required
                    className="w-full px-4 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 focus:bg-white/15 transition-all duration-200"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="seu@email.com"
                    required
                    className="w-full px-4 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 focus:bg-white/15 transition-all duration-200"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-2">
                  Assunto
                </label>
                <input
                  type="text"
                  name="subject"
                  placeholder="Sobre o que você quer conversar?"
                  required
                  className="w-full px-4 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 focus:bg-white/15 transition-all duration-200"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-2">
                  Mensagem
                </label>
                <textarea
                  name="message"
                  rows={5}
                  placeholder="Conte-me sobre sua ideia ou projeto..."
                  required
                  className="w-full px-4 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 focus:bg-white/15 transition-all duration-200 resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-purple-600 to-blue-500 px-8 py-4 rounded-2xl hover:from-purple-700 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 shadow-xl font-bold text-lg flex items-center justify-center space-x-3 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    <span>Enviando...</span>
                  </>
                ) : (
                  <>
                    <span>Enviar Mensagem</span>
                    <ArrowRight size={20} />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
