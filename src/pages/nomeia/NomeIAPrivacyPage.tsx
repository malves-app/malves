"use client";

import {
  AlertCircle,
  ArrowLeft,
  Brain,
  Database,
  Eye,
  FileText,
  Globe,
  Lock,
  Shield,
  Users,
} from "lucide-react";
import Link from "next/link";
import React from "react";

const NomeIAPrivacyPage: React.FC = () => {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white">
        {/* Header */}
        <header className="px-6 py-8 border-b border-white/10">
          <nav className="max-w-4xl mx-auto flex items-center justify-between">
            <Link href="/nomeia" className="flex items-center space-x-3 group">
              <div className="p-2 bg-gradient-to-r from-purple-600 to-blue-500 rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-300">
                <Brain size={24} className="text-white" />
              </div>
              <span className="text-xl font-bold text-gray-300 group-hover:text-white transition-colors duration-200">
                NomeIA
              </span>
            </Link>

            <Link
              href="/nomeia"
              className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-200 font-medium"
            >
              <ArrowLeft size={20} />
              <span>Voltar</span>
            </Link>
          </nav>
        </header>

        {/* Content */}
        <main className="px-6 py-12">
          <div className="max-w-4xl mx-auto">
            {/* Hero */}
            <div className="text-center mb-16">
              <div className="mb-8">
                <div className="p-6 bg-gradient-to-r from-purple-600 to-blue-500 rounded-3xl inline-block shadow-2xl">
                  <Shield size={48} className="text-white" />
                </div>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Política de{" "}
                <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                  Privacidade
                </span>
              </h1>

              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                NomeIA está comprometido em proteger sua privacidade. Esta
                política explica como coletamos, usamos e protegemos suas
                informações.
              </p>

              <div className="mt-8 inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium">
                  Atualizado em: 02 de setembro de 2025
                </span>
              </div>
            </div>

            {/* Content Sections */}
            <div className="space-y-12">
              {/* Definições */}
              <section className="bg-white/5 backdrop-blur-xl p-8 rounded-3xl border border-white/10">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="p-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl">
                    <FileText size={24} className="text-white" />
                  </div>
                  <h2 className="text-2xl font-bold">
                    Definições e Termos-Chave
                  </h2>
                </div>

                <div className="space-y-4 text-gray-300 leading-relaxed">
                  <p>
                    <strong className="text-white">Cookie:</strong> Pequena
                    quantidade de dados gerada por um site e salva pelo seu
                    navegador web. É usado para identificar seu navegador,
                    fornecer análises e lembrar informações sobre você.
                  </p>
                  <p>
                    <strong className="text-white">Empresa:</strong> Quando esta
                    política menciona "Empresa", "nós" ou "nosso", refere-se ao
                    NomeIA, responsável por suas informações sob esta Política
                    de Privacidade.
                  </p>
                  <p>
                    <strong className="text-white">Dados Pessoais:</strong>{" "}
                    Qualquer informação que direta, indireta ou em conexão com
                    outras informações permita a identificação de uma pessoa
                    natural.
                  </p>
                  <p>
                    <strong className="text-white">Serviço:</strong> Refere-se
                    ao serviço fornecido pelo NomeIA conforme descrito nos
                    termos relativos e nesta plataforma.
                  </p>
                </div>
              </section>

              {/* Informações Coletadas Automaticamente */}
              <section className="bg-white/5 backdrop-blur-xl p-8 rounded-3xl border border-white/10">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl">
                    <Database size={24} className="text-white" />
                  </div>
                  <h2 className="text-2xl font-bold">
                    Informações Coletadas Automaticamente
                  </h2>
                </div>

                <div className="space-y-4 text-gray-300 leading-relaxed">
                  <p>
                    Algumas informações como seu endereço IP e características
                    do navegador e dispositivo são coletadas automaticamente
                    quando você visita nossa plataforma. Essas informações podem
                    incluir:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Endereço IP e informações de conexão</li>
                    <li>Tipo e versão do navegador</li>
                    <li>Sistema operacional e plataforma</li>
                    <li>Páginas visitadas e tempo de navegação</li>
                    <li>Informações de interação (cliques, rolagem)</li>
                  </ul>
                  <p>
                    Essas informações são necessárias principalmente para manter
                    a segurança e operação de nossa plataforma, e para nossos
                    propósitos internos de análise e relatórios.
                  </p>
                </div>
              </section>

              {/* Cookies */}
              <section className="bg-white/5 backdrop-blur-xl p-8 rounded-3xl border border-white/10">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="p-3 bg-gradient-to-r from-green-500 to-teal-500 rounded-2xl">
                    <Globe size={24} className="text-white" />
                  </div>
                  <h2 className="text-2xl font-bold">Cookies</h2>
                </div>

                <div className="space-y-4 text-gray-300 leading-relaxed">
                  <p>
                    O NomeIA usa &ldquo;Cookies&rdquo; para identificar as áreas
                    do nosso site que você visitou. Um Cookie é um pequeno
                    pedaço de dados armazenado em seu computador ou dispositivo
                    móvel pelo seu navegador web.
                  </p>
                  <p>
                    Usamos Cookies para melhorar o desempenho e funcionalidade
                    do nosso app, mas eles não são essenciais para seu uso. No
                    entanto, sem esses cookies, certas funcionalidades podem
                    ficar indisponíveis.
                  </p>
                  <p>
                    A maioria dos navegadores web pode ser configurada para
                    desabilitar o uso de Cookies. No entanto, se você
                    desabilitar os Cookies, pode não conseguir acessar a
                    funcionalidade do nosso site corretamente.
                  </p>
                </div>
              </section>

              {/* Venda de Negócios */}
              <section className="bg-white/5 backdrop-blur-xl p-8 rounded-3xl border border-white/10">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="p-3 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl">
                    <Users size={24} className="text-white" />
                  </div>
                  <h2 className="text-2xl font-bold">Venda de Negócios</h2>
                </div>

                <div className="space-y-4 text-gray-300 leading-relaxed">
                  <p>
                    Reservamo-nos o direito de transferir informações para
                    terceiros no caso de venda, fusão ou outra transferência de
                    todos ou substancialmente todos os ativos do NomeIA, desde
                    que o terceiro concorde em aderir aos termos desta Política
                    de Privacidade.
                  </p>
                </div>
              </section>

              {/* Afiliadas */}
              <section className="bg-white/5 backdrop-blur-xl p-8 rounded-3xl border border-white/10">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="p-3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl">
                    <Users size={24} className="text-white" />
                  </div>
                  <h2 className="text-2xl font-bold">Afiliadas</h2>
                </div>

                <div className="space-y-4 text-gray-300 leading-relaxed">
                  <p>
                    Podemos divulgar informações (incluindo informações
                    pessoais) sobre você para nossas Afiliadas Corporativas.
                    Qualquer informação relacionada a você que fornecemos às
                    nossas Afiliadas Corporativas será tratada por essas
                    Afiliadas de acordo com os termos desta Política de
                    Privacidade.
                  </p>
                </div>
              </section>

              {/* Lei Aplicável */}
              <section className="bg-white/5 backdrop-blur-xl p-8 rounded-3xl border border-white/10">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="p-3 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-2xl">
                    <Shield size={24} className="text-white" />
                  </div>
                  <h2 className="text-2xl font-bold">Lei Aplicável</h2>
                </div>

                <div className="space-y-4 text-gray-300 leading-relaxed">
                  <p>
                    Esta Política de Privacidade é regida pelas leis do Brasil,
                    sem considerar suas disposições de conflito de leis. Você
                    consente com a jurisdição exclusiva dos tribunais em conexão
                    com qualquer ação ou disputa decorrente entre as partes sob
                    ou em conexão com esta Política de Privacidade.
                  </p>
                </div>
              </section>

              {/* Publicidade */}
              <section className="bg-white/5 backdrop-blur-xl p-8 rounded-3xl border border-white/10">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="p-3 bg-gradient-to-r from-pink-500 to-rose-500 rounded-2xl">
                    <Eye size={24} className="text-white" />
                  </div>
                  <h2 className="text-2xl font-bold">Publicidade</h2>
                </div>

                <div className="space-y-4 text-gray-300 leading-relaxed">
                  <p>
                    Este aplicativo pode conter anúncios de terceiros e links
                    para sites de terceiros. O NomeIA não faz nenhuma
                    representação quanto à precisão ou adequação de qualquer
                    informação contida nesses anúncios ou sites.
                  </p>
                  <p>
                    A publicidade mantém o NomeIA e muitos dos sites e serviços
                    que você usa gratuitos. Trabalhamos duro para garantir que
                    os anúncios sejam seguros, discretos e o mais relevantes
                    possível.
                  </p>
                </div>
              </section>

              {/* LGPD */}
              <section className="bg-white/5 backdrop-blur-xl p-8 rounded-3xl border border-white/10">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="p-3 bg-gradient-to-r from-green-500 to-teal-500 rounded-2xl">
                    <Lock size={24} className="text-white" />
                  </div>
                  <h2 className="text-2xl font-bold">
                    Lei Geral de Proteção de Dados (LGPD)
                  </h2>
                </div>

                <div className="space-y-4 text-gray-300 leading-relaxed">
                  <p>
                    Estamos comprometidos em cumprir a Lei Geral de Proteção de
                    Dados Pessoais (LGPD). Você tem os seguintes direitos:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>
                      <strong className="text-white">Acesso:</strong> Solicitar
                      informações sobre os dados que coletamos sobre você
                    </li>
                    <li>
                      <strong className="text-white">Correção:</strong>{" "}
                      Solicitar a correção de dados incorretos ou incompletos
                    </li>
                    <li>
                      <strong className="text-white">Exclusão:</strong>{" "}
                      Solicitar a exclusão de seus dados pessoais
                    </li>
                    <li>
                      <strong className="text-white">Portabilidade:</strong>{" "}
                      Solicitar uma cópia de seus dados em formato estruturado
                    </li>
                    <li>
                      <strong className="text-white">Oposição:</strong> Opor-se
                      ao processamento de seus dados pessoais
                    </li>
                  </ul>
                </div>
              </section>

              {/* Privacidade de Crianças */}
              <section className="bg-white/5 backdrop-blur-xl p-8 rounded-3xl border border-white/10">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="p-3 bg-gradient-to-r from-pink-500 to-rose-500 rounded-2xl">
                    <Users size={24} className="text-white" />
                  </div>
                  <h2 className="text-2xl font-bold">
                    Privacidade de Crianças
                  </h2>
                </div>

                <div className="space-y-4 text-gray-300 leading-relaxed">
                  <p>
                    Coletamos informações de crianças menores de 13 anos apenas
                    para melhorar nossos serviços. Se você é pai ou responsável
                    e está ciente de que seu filho nos forneceu Dados Pessoais
                    sem sua permissão, entre em contato conosco.
                  </p>
                  <p>
                    Se tomarmos conhecimento de que coletamos Dados Pessoais de
                    qualquer pessoa menor de 13 anos sem verificação do
                    consentimento dos pais, tomamos medidas para remover essas
                    informações de nossos servidores.
                  </p>
                </div>
              </section>

              {/* Tecnologias de Rastreamento */}
              <section className="bg-white/5 backdrop-blur-xl p-8 rounded-3xl border border-white/10">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="p-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl">
                    <Database size={24} className="text-white" />
                  </div>
                  <h2 className="text-2xl font-bold">
                    Tecnologias de Rastreamento
                  </h2>
                </div>

                <div className="space-y-4 text-gray-300 leading-relaxed">
                  <p>
                    <strong className="text-white">Armazenamento Local:</strong>{" "}
                    O Armazenamento Local, às vezes conhecido como armazenamento
                    DOM, fornece aos aplicativos web métodos e protocolos para
                    armazenar dados do lado do cliente. O armazenamento web
                    suporta armazenamento de dados persistente, semelhante aos
                    cookies, mas com capacidade muito maior.
                  </p>
                </div>
              </section>

              {/* Serviços de Terceiros */}
              <section className="bg-white/5 backdrop-blur-xl p-8 rounded-3xl border border-white/10">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="p-3 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl">
                    <Globe size={24} className="text-white" />
                  </div>
                  <h2 className="text-2xl font-bold">Serviços de Terceiros</h2>
                </div>

                <div className="space-y-4 text-gray-300 leading-relaxed">
                  <p>
                    Podemos exibir, incluir ou disponibilizar conteúdo de
                    terceiros ou fornecer links para sites ou serviços de
                    terceiros. Você reconhece e concorda que o NomeIA não será
                    responsável por quaisquer Serviços de Terceiros.
                  </p>
                  <p>
                    Os Serviços de Terceiros são fornecidos apenas como uma
                    conveniência para você e você os acessa e usa inteiramente
                    por sua conta e risco.
                  </p>
                </div>
              </section>

              {/* Alterações na Política */}
              <section className="bg-white/5 backdrop-blur-xl p-8 rounded-3xl border border-white/10">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="p-3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl">
                    <AlertCircle size={24} className="text-white" />
                  </div>
                  <h2 className="text-2xl font-bold">
                    Alterações em Nossa Política de Privacidade
                  </h2>
                </div>

                <div className="space-y-4 text-gray-300 leading-relaxed">
                  <p>
                    Podemos alterar nosso Serviço e políticas, e pode ser
                    necessário fazer alterações nesta Política de Privacidade
                    para que reflitam com precisão nosso Serviço e políticas.
                  </p>
                  <p>
                    A menos que exigido por lei, notificaremos você (por
                    exemplo, através do nosso Serviço) antes de fazermos
                    alterações nesta Política de Privacidade e daremos a você a
                    oportunidade de revisá-las antes que entrem em vigor.
                  </p>
                </div>
              </section>

              {/* Seu Consentimento */}
              <section className="bg-white/5 backdrop-blur-xl p-8 rounded-3xl border border-white/10">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="p-3 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl">
                    <Shield size={24} className="text-white" />
                  </div>
                  <h2 className="text-2xl font-bold">Seu Consentimento</h2>
                </div>

                <div className="space-y-4 text-gray-300 leading-relaxed">
                  <p>
                    Atualizamos nossa Política de Privacidade para fornecer
                    transparência completa sobre o que é definido quando você
                    visita nosso site e como está sendo usado.
                  </p>
                  <p>
                    Ao usar nosso aplicativo, registrar uma conta ou fazer uma
                    compra, você consente com nossa Política de Privacidade e
                    concorda com seus termos.
                  </p>
                </div>
              </section>

              {/* Contato */}
              <section className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-xl p-8 rounded-3xl border border-white/20">
                <div className="text-center">
                  <h2 className="text-2xl font-bold mb-6">Entre em Contato</h2>
                  <p className="text-gray-300 mb-8 leading-relaxed">
                    Não hesite em nos contatar se tiver alguma dúvida sobre esta
                    política de privacidade.
                  </p>

                  <div className="space-y-4">
                    <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                      <a
                        href="mailto:malvesappbr@gmail.com"
                        className="inline-block bg-gradient-to-r from-purple-600 to-blue-500 px-6 py-3 rounded-2xl hover:from-purple-700 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 shadow-lg font-semibold"
                      >
                        malvesappbr@gmail.com
                      </a>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </main>

        <footer className="px-6 py-12 border-t border-white/10">
          <div className="max-w-4xl mx-auto text-center">
            <Link
              href="/nomeia"
              className="inline-flex items-center space-x-3 mb-6 group"
            >
              <div className="p-2 bg-gradient-to-r from-purple-600 to-blue-500 rounded-xl group-hover:shadow-xl transition-all duration-300">
                <Brain size={24} className="text-white" />
              </div>
              <span className="text-2xl font-bold">NomeIA</span>
            </Link>

            <p className="text-gray-400 mb-4">
              Gerador inteligente de nomes by Malves
            </p>

            <div className="flex items-center justify-center space-x-6 text-sm">
              <Link
                href="/nomeia"
                className="text-gray-400 hover:text-white transition-colors duration-200 hover:underline"
              >
                Voltar ao NomeIA
              </Link>
              <Link
                href="/"
                className="text-gray-400 hover:text-white transition-colors duration-200 hover:underline"
              >
                Malves
              </Link>
              <a
                href="mailto:contato@malves.com"
                className="text-gray-400 hover:text-white transition-colors duration-200 hover:underline"
              >
                Contato
              </a>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default NomeIAPrivacyPage;
