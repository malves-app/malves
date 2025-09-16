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
  Mail,
  ExternalLink,
  Cookie,
  Baby,
  Gavel,
  Target,
  RefreshCw,
  CheckCircle,
  XCircle,
  User,
  Copyright,
  AlertTriangle,
  Scale,
} from "lucide-react";
import Link from "next/link";
import React, { useState, useEffect } from "react";

const NomeIAPrivacyPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"privacy" | "terms">("privacy");

  useEffect(() => {
    // Detectar hash da URL ao carregar a página
    const hash = window.location.hash;
    if (hash === "#termos-de-uso") {
      setActiveTab("terms");
    } else {
      setActiveTab("privacy");
    }

    // Escutar mudanças no hash
    const handleHashChange = () => {
      const newHash = window.location.hash;
      if (newHash === "#termos-de-uso") {
        setActiveTab("terms");
      } else {
        setActiveTab("privacy");
      }
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const handleTabClick = (tab: "privacy" | "terms") => {
    setActiveTab(tab);
    // Atualizar o hash da URL
    if (tab === "terms") {
      window.location.hash = "#termos-de-uso";
    } else {
      window.location.hash = "#privacidade";
    }
  };

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
            {/* Tab Navigation */}
            <div className="mb-12">
              <div className="flex justify-center">
                <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-2 border border-white/20">
                  <div className="flex space-x-2">
                    <button
                      onClick={() => handleTabClick("privacy")}
                      className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center space-x-2 ${
                        activeTab === "privacy"
                          ? "bg-gradient-to-r from-purple-600 to-blue-500 text-white shadow-lg"
                          : "text-gray-300 hover:text-white hover:bg-white/10"
                      }`}
                    >
                      <Shield size={20} />
                      <span>Política de Privacidade</span>
                    </button>
                    <button
                      onClick={() => handleTabClick("terms")}
                      className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center space-x-2 ${
                        activeTab === "terms"
                          ? "bg-gradient-to-r from-purple-600 to-blue-500 text-white shadow-lg"
                          : "text-gray-300 hover:text-white hover:bg-white/10"
                      }`}
                    >
                      <Scale size={20} />
                      <span>Termos de Uso</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Hero */}
            <div className="text-center mb-16">
              <div className="mb-8">
                <div className="p-6 bg-gradient-to-r from-purple-600 to-blue-500 rounded-3xl inline-block shadow-2xl">
                  {activeTab === "privacy" ? (
                    <Shield size={48} className="text-white" />
                  ) : (
                    <Scale size={48} className="text-white" />
                  )}
                </div>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                {activeTab === "privacy" ? (
                  <>
                    Política de{" "}
                    <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                      Privacidade
                    </span>
                  </>
                ) : (
                  <>
                    Termos de{" "}
                    <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                      Uso
                    </span>
                  </>
                )}
              </h1>

              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                {activeTab === "privacy" ? (
                  <>
                    A NomeIA ("nós", "nosso" ou "nos") está comprometida com a
                    proteção da sua privacidade. Esta Política de Privacidade
                    explica como suas informações pessoais são coletadas, usadas
                    e divulgadas pela NomeIA.
                  </>
                ) : (
                  <>
                    Bem-vindo ao <strong className="text-white">NomeIA</strong>{" "}
                    ("nós", "nosso" ou "nos"). Estes Termos de Uso regulam o
                    acesso e a utilização do nosso aplicativo e site. Ao usar
                    nossos serviços, você declara que leu, entendeu e concorda
                    com estes Termos.
                  </>
                )}
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
              {activeTab === "privacy" && (
                <>
                  {/* Aplicação da Política */}
                  <section className="bg-white/5 backdrop-blur-xl p-8 rounded-3xl border border-white/10">
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="p-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl">
                        <FileText size={24} className="text-white" />
                      </div>
                      <h2 className="text-2xl font-bold">
                        Aplicação da Política
                      </h2>
                    </div>

                    <div className="space-y-4 text-gray-300 leading-relaxed">
                      <p>
                        Esta Política de Privacidade se aplica ao nosso site e
                        seus subdomínios (coletivamente, nosso "Serviço"), bem
                        como ao nosso aplicativo, NomeIA. Ao acessar ou usar
                        nosso Serviço, você declara que leu, entendeu e concorda
                        com a coleta, armazenamento, uso e divulgação de suas
                        informações pessoais conforme descrito nesta Política de
                        Privacidade e em nossos Termos de Serviço.
                      </p>
                    </div>
                  </section>

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
                        quantidade de dados gerados por um site e salvos pelo
                        seu navegador. É usado para identificar seu navegador,
                        fornecer análises, lembrar informações como preferência
                        de idioma ou login.
                      </p>
                      <p>
                        <strong className="text-white">Empresa:</strong> Quando
                        esta política menciona "Empresa", "nós", "nos" ou
                        "nosso", refere-se à NomeIA, responsável por suas
                        informações sob esta Política de Privacidade.
                      </p>
                      <p>
                        <strong className="text-white">País:</strong> Onde a
                        NomeIA ou os proprietários/fundadores estão sediados,
                        neste caso o Brasil.
                      </p>
                      <p>
                        <strong className="text-white">Cliente:</strong>{" "}
                        Empresa, organização ou pessoa que se cadastra para usar
                        o Serviço da NomeIA para gerenciar relacionamentos com
                        seus consumidores ou usuários de serviço.
                      </p>
                      <p>
                        <strong className="text-white">Dispositivo:</strong>{" "}
                        Qualquer dispositivo conectado à Internet, como celular,
                        tablet, computador, etc., que possa ser usado para
                        acessar a NomeIA e utilizar os serviços.
                      </p>
                      <p>
                        <strong className="text-white">Endereço IP:</strong>{" "}
                        Número atribuído a cada dispositivo conectado à
                        internet. Pode ser usado para identificar a localização
                        de onde o dispositivo está se conectando.
                      </p>
                      <p>
                        <strong className="text-white">Pessoal:</strong> Pessoas
                        empregadas pela NomeIA ou contratadas para prestar
                        serviços em nome da empresa.
                      </p>
                      <p>
                        <strong className="text-white">Dados Pessoais:</strong>{" "}
                        Qualquer informação que permita identificar direta ou
                        indiretamente uma pessoa física.
                      </p>
                      <p>
                        <strong className="text-white">Serviço:</strong>{" "}
                        Refere-se ao serviço fornecido pela NomeIA conforme
                        descrito nos termos e nesta plataforma.
                      </p>
                      <p>
                        <strong className="text-white">
                          Serviço de terceiros:
                        </strong>{" "}
                        Anunciantes, patrocinadores, parceiros promocionais e
                        outros que fornecem conteúdo ou produtos que acreditamos
                        ser de seu interesse.
                      </p>
                      <p>
                        <strong className="text-white">Website:</strong> O site
                        da NomeIA, acessível pelo link fornecido.
                      </p>
                      <p>
                        <strong className="text-white">Você:</strong> Pessoa ou
                        entidade registrada na NomeIA para usar os serviços.
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
                        Coletamos automaticamente certas informações ao visitar
                        ou navegar na nossa plataforma. Essas informações não
                        revelam sua identidade (como nome ou contato), mas podem
                        incluir:
                      </p>
                      <ul className="list-disc list-inside space-y-2 ml-4">
                        <li>
                          Endereço IP, características do navegador e
                          dispositivo, sistema operacional, idioma, URLs de
                          referência, nome do dispositivo, país, localização,
                          entre outros dados técnicos.
                        </li>
                        <li>
                          Dados sobre sua navegação, como páginas visitadas,
                          tempo de visita, interações com o site (scroll,
                          cliques, etc.), erros de download, e número de
                          telefone utilizado para contatar nosso suporte.
                        </li>
                      </ul>
                      <p>
                        Essas informações são necessárias para manter a
                        segurança, operação da plataforma e fins analíticos
                        internos.
                      </p>
                    </div>
                  </section>

                  {/* Venda do Negócio */}
                  <section className="bg-white/5 backdrop-blur-xl p-8 rounded-3xl border border-white/10">
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="p-3 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl">
                        <Users size={24} className="text-white" />
                      </div>
                      <h2 className="text-2xl font-bold">Venda do Negócio</h2>
                    </div>

                    <div className="space-y-4 text-gray-300 leading-relaxed">
                      <p>
                        Reservamo-nos o direito de transferir informações em
                        caso de venda, fusão ou outra transferência de ativos da
                        NomeIA ou de suas afiliadas. O terceiro deverá respeitar
                        os termos desta Política de Privacidade.
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
                        Podemos compartilhar informações (incluindo pessoais)
                        com nossas Afiliadas Corporativas. Essas afiliadas devem
                        tratar seus dados conforme esta política.
                      </p>
                    </div>
                  </section>

                  {/* Legislação Aplicável */}
                  <section className="bg-white/5 backdrop-blur-xl p-8 rounded-3xl border border-white/10">
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="p-3 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-2xl">
                        <Gavel size={24} className="text-white" />
                      </div>
                      <h2 className="text-2xl font-bold">
                        Legislação Aplicável
                      </h2>
                    </div>

                    <div className="space-y-4 text-gray-300 leading-relaxed">
                      <p>
                        Esta Política de Privacidade é regida pelas leis do
                        Brasil, sem considerar seus conflitos de leis. Você
                        concorda com a jurisdição exclusiva dos tribunais do
                        Brasil em relação a qualquer disputa relacionada a esta
                        Política de Privacidade.
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
                        Ao usar o aplicativo, registrar uma conta ou fazer uma
                        compra, você consente com esta Política de Privacidade e
                        concorda com seus termos.
                      </p>
                    </div>
                  </section>

                  {/* Links para Outros Sites */}
                  <section className="bg-white/5 backdrop-blur-xl p-8 rounded-3xl border border-white/10">
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="p-3 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl">
                        <ExternalLink size={24} className="text-white" />
                      </div>
                      <h2 className="text-2xl font-bold">
                        Links para Outros Sites
                      </h2>
                    </div>

                    <div className="space-y-4 text-gray-300 leading-relaxed">
                      <p>
                        Esta política aplica-se somente aos nossos Serviços.
                        Podemos conter links para outros sites. Não nos
                        responsabilizamos pelo conteúdo ou políticas de
                        privacidade de terceiros.
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
                        O app pode conter anúncios de terceiros e links
                        externos. A NomeIA não se responsabiliza pelo conteúdo
                        desses anúncios ou pela qualidade dos produtos/serviços
                        anunciados.
                      </p>
                    </div>
                  </section>

                  {/* Cookies para Publicidade */}
                  <section className="bg-white/5 backdrop-blur-xl p-8 rounded-3xl border border-white/10">
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="p-3 bg-gradient-to-r from-green-500 to-teal-500 rounded-2xl">
                        <Cookie size={24} className="text-white" />
                      </div>
                      <h2 className="text-2xl font-bold">
                        Cookies para Publicidade
                      </h2>
                    </div>

                    <div className="space-y-4 text-gray-300 leading-relaxed">
                      <p>
                        Usamos cookies para publicidade com base em interesses,
                        evitando mostrar anúncios repetidos e garantindo
                        relevância. Sem cookies, anunciantes não conseguem
                        mensurar a eficácia de suas campanhas.
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
                        Usamos cookies para melhorar o desempenho e
                        funcionalidades do app. Você pode desativá-los, mas isso
                        pode afetar o funcionamento do site.
                      </p>
                    </div>
                  </section>

                  {/* Bloqueio de Cookies */}
                  <section className="bg-white/5 backdrop-blur-xl p-8 rounded-3xl border border-white/10">
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="p-3 bg-gradient-to-r from-red-500 to-pink-500 rounded-2xl">
                        <Lock size={24} className="text-white" />
                      </div>
                      <h2 className="text-2xl font-bold">
                        Bloqueio de Cookies
                      </h2>
                    </div>

                    <div className="space-y-4 text-gray-300 leading-relaxed">
                      <p>
                        Você pode configurar seu navegador para bloquear
                        cookies. Isso pode impedir que o site funcione
                        corretamente e apagar informações salvas, como logins e
                        preferências.
                      </p>
                    </div>
                  </section>

                  {/* Serviços de Remarketing */}
                  <section className="bg-white/5 backdrop-blur-xl p-8 rounded-3xl border border-white/10">
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="p-3 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-2xl">
                        <Target size={24} className="text-white" />
                      </div>
                      <h2 className="text-2xl font-bold">
                        Serviços de Remarketing
                      </h2>
                    </div>

                    <div className="space-y-4 text-gray-300 leading-relaxed">
                      <p>
                        Utilizamos remarketing para exibir anúncios a usuários
                        que já visitaram nosso site, fazendo com que sua empresa
                        "siga" essas pessoas pela internet.
                      </p>
                    </div>
                  </section>

                  {/* Privacidade de Crianças */}
                  <section className="bg-white/5 backdrop-blur-xl p-8 rounded-3xl border border-white/10">
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="p-3 bg-gradient-to-r from-pink-500 to-rose-500 rounded-2xl">
                        <Baby size={24} className="text-white" />
                      </div>
                      <h2 className="text-2xl font-bold">
                        Privacidade de Crianças
                      </h2>
                    </div>

                    <div className="space-y-4 text-gray-300 leading-relaxed">
                      <p>
                        Coletamos informações de crianças menores de 13 anos
                        apenas para melhorar nossos serviços. Se você é
                        pai/mãe/responsável e acredita que seu filho nos
                        forneceu dados pessoais sem seu consentimento, entre em
                        contato conosco. Removeremos os dados imediatamente.
                      </p>
                    </div>
                  </section>

                  {/* Alterações na Política */}
                  <section className="bg-white/5 backdrop-blur-xl p-8 rounded-3xl border border-white/10">
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="p-3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl">
                        <RefreshCw size={24} className="text-white" />
                      </div>
                      <h2 className="text-2xl font-bold">
                        Alterações na Política de Privacidade
                      </h2>
                    </div>

                    <div className="space-y-4 text-gray-300 leading-relaxed">
                      <p>
                        Podemos alterar esta política. Notificaremos antes de
                        mudanças entrarem em vigor. Se continuar usando o
                        serviço após mudanças, estará concordando com a nova
                        política.
                      </p>
                    </div>
                  </section>

                  {/* Serviços de Terceiros */}
                  <section className="bg-white/5 backdrop-blur-xl p-8 rounded-3xl border border-white/10">
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="p-3 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl">
                        <Globe size={24} className="text-white" />
                      </div>
                      <h2 className="text-2xl font-bold">
                        Serviços de Terceiros
                      </h2>
                    </div>

                    <div className="space-y-4 text-gray-300 leading-relaxed">
                      <p>
                        Podemos incluir conteúdo e links de terceiros. A NomeIA
                        não é responsável por esses conteúdos nem pelos termos e
                        condições de terceiros.
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
                        <strong className="text-white">
                          Armazenamento Local (Local Storage):
                        </strong>{" "}
                        Método de armazenamento de dados do lado do cliente, com
                        maior capacidade que os cookies.
                      </p>
                    </div>
                  </section>

                  {/* GDPR */}
                  <section className="bg-white/5 backdrop-blur-xl p-8 rounded-3xl border border-white/10">
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="p-3 bg-gradient-to-r from-green-500 to-teal-500 rounded-2xl">
                        <Lock size={24} className="text-white" />
                      </div>
                      <h2 className="text-2xl font-bold">
                        Informações sobre o GDPR
                      </h2>
                    </div>

                    <div className="space-y-4 text-gray-300 leading-relaxed">
                      <p>
                        Se você é da Área Econômica Europeia (EEE), coletamos
                        seus dados conforme o Regulamento Geral de Proteção de
                        Dados (GDPR):
                      </p>

                      <h3 className="text-lg font-semibold text-white mt-4">
                        O que é GDPR?
                      </h3>
                      <p>
                        Regulamento europeu sobre privacidade e proteção de
                        dados. Dá mais controle aos cidadãos sobre seus dados e
                        impõe obrigações às empresas que processam dados de
                        cidadãos da UE.
                      </p>

                      <h3 className="text-lg font-semibold text-white mt-4">
                        O que são Dados Pessoais?
                      </h3>
                      <p>
                        Qualquer dado que identifique ou torne identificável uma
                        pessoa. Ex: nome, email, endereço IP, orientação sexual,
                        etnia, dados financeiros, genéticos, biométricos, etc.
                      </p>

                      <h3 className="text-lg font-semibold text-white mt-4">
                        Princípios do GDPR:
                      </h3>
                      <ul className="list-disc list-inside space-y-2 ml-4">
                        <li>Coleta legal, justa e transparente.</li>
                        <li>Uso somente para fins específicos.</li>
                        <li>Retenção apenas pelo tempo necessário.</li>
                        <li>
                          Direito de acesso, portabilidade, exclusão e
                          atualização dos dados pelo titular.
                        </li>
                      </ul>

                      <h3 className="text-lg font-semibold text-white mt-4">
                        Nossos Compromissos:
                      </h3>
                      <ul className="list-disc list-inside space-y-2 ml-4">
                        <li>
                          Armazenamos dados em fornecedores compatíveis com o
                          GDPR.
                        </li>
                        <li>
                          Retemos dados por até 6 anos, exceto se você excluir
                          sua conta — neste caso, os dados serão removidos em
                          até 60 dias.
                        </li>
                      </ul>
                    </div>
                  </section>

                  {/* CCPA e CalOPPA */}
                  <section className="bg-white/5 backdrop-blur-xl p-8 rounded-3xl border border-white/10">
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="p-3 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-2xl">
                        <Shield size={24} className="text-white" />
                      </div>
                      <h2 className="text-2xl font-bold">
                        Residentes da Califórnia (CCPA e CalOPPA)
                      </h2>
                    </div>

                    <div className="space-y-4 text-gray-300 leading-relaxed">
                      <p>
                        Se você reside na Califórnia, você tem os seguintes
                        direitos:
                      </p>
                      <ul className="list-disc list-inside space-y-2 ml-4">
                        <li>
                          <strong className="text-white">
                            Direito de Saber e Acessar:
                          </strong>{" "}
                          Saber quais dados coletamos e para que usamos.
                        </li>
                        <li>
                          <strong className="text-white">
                            Direito à Igualdade de Serviço:
                          </strong>{" "}
                          Não haverá discriminação se você exercer seus
                          direitos.
                        </li>
                        <li>
                          <strong className="text-white">
                            Direito de Exclusão:
                          </strong>{" "}
                          Você pode pedir para deletarmos seus dados.
                        </li>
                        <li>
                          <strong className="text-white">
                            Direito de Recusar Venda de Dados:
                          </strong>{" "}
                          Nós não vendemos seus dados pessoais.
                        </li>
                      </ul>
                      <p>
                        Para exercer esses direitos, entre em contato conosco.
                        Temos até um mês para responder.
                      </p>
                    </div>
                  </section>

                  {/* Contato */}
                  <section className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-xl p-8 rounded-3xl border border-white/20">
                    <div className="text-center">
                      <h2 className="text-2xl font-bold mb-6">
                        Entre em Contato
                      </h2>
                      <p className="text-gray-300 mb-8 leading-relaxed">
                        Se tiver dúvidas, não hesite em nos contatar:
                      </p>

                      <div className="space-y-4">
                        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                          <a
                            href="mailto:malvesappbr@gmail.com"
                            className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-600 to-blue-500 px-6 py-3 rounded-2xl hover:from-purple-700 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 shadow-lg font-semibold"
                          >
                            <Mail size={20} />
                            <span>malvesappbr@gmail.com</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </section>
                </>
              )}

              {activeTab === "terms" && (
                <>
                  {/* 1. Aceitação dos Termos */}
                  <section className="bg-white/5 backdrop-blur-xl p-8 rounded-3xl border border-white/10">
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="p-3 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl">
                        <CheckCircle size={24} className="text-white" />
                      </div>
                      <h2 className="text-2xl font-bold">
                        1. Aceitação dos Termos
                      </h2>
                    </div>

                    <div className="space-y-4 text-gray-300 leading-relaxed">
                      <p>
                        Ao acessar ou usar o NomeIA, você concorda em cumprir
                        estes Termos e todas as leis e regulamentos aplicáveis.
                        Caso não concorde, não utilize o Serviço.
                      </p>
                    </div>
                  </section>

                  {/* 2. Uso do Serviço */}
                  <section className="bg-white/5 backdrop-blur-xl p-8 rounded-3xl border border-white/10">
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="p-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl">
                        <Globe size={24} className="text-white" />
                      </div>
                      <h2 className="text-2xl font-bold">2. Uso do Serviço</h2>
                    </div>

                    <div className="space-y-4 text-gray-300 leading-relaxed">
                      <ul className="list-disc list-inside space-y-2 ml-4">
                        <li>
                          O NomeIA é destinado para uso pessoal e não comercial,
                          salvo autorização expressa.
                        </li>
                        <li>
                          Você se compromete a não usar o Serviço para
                          atividades ilegais, fraudulentas, abusivas ou que
                          violem direitos de terceiros.
                        </li>
                        <li>
                          Podemos suspender ou encerrar seu acesso em caso de
                          violação destes Termos.
                        </li>
                      </ul>
                    </div>
                  </section>

                  {/* 3. Cadastro e Conta */}
                  <section className="bg-white/5 backdrop-blur-xl p-8 rounded-3xl border border-white/10">
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl">
                        <User size={24} className="text-white" />
                      </div>
                      <h2 className="text-2xl font-bold">
                        3. Cadastro e Conta
                      </h2>
                    </div>

                    <div className="space-y-4 text-gray-300 leading-relaxed">
                      <ul className="list-disc list-inside space-y-2 ml-4">
                        <li>
                          Algumas funcionalidades podem exigir cadastro. Você
                          deve fornecer informações verdadeiras e atualizadas.
                        </li>
                        <li>
                          Você é responsável por manter a confidencialidade de
                          suas credenciais.
                        </li>
                        <li>
                          Não nos responsabilizamos por acessos não autorizados
                          resultantes de negligência do usuário.
                        </li>
                      </ul>
                    </div>
                  </section>

                  {/* 4. Propriedade Intelectual */}
                  <section className="bg-white/5 backdrop-blur-xl p-8 rounded-3xl border border-white/10">
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="p-3 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl">
                        <Copyright size={24} className="text-white" />
                      </div>
                      <h2 className="text-2xl font-bold">
                        4. Propriedade Intelectual
                      </h2>
                    </div>

                    <div className="space-y-4 text-gray-300 leading-relaxed">
                      <ul className="list-disc list-inside space-y-2 ml-4">
                        <li>
                          O NomeIA, incluindo design, código, marca e conteúdo,
                          pertence exclusivamente a nós ou a nossos
                          licenciadores.
                        </li>
                        <li>
                          É proibido copiar, modificar, distribuir, vender ou
                          explorar qualquer parte do Serviço sem nossa
                          autorização por escrito.
                        </li>
                      </ul>
                    </div>
                  </section>

                  {/* 5. Conteúdo do Usuário */}
                  <section className="bg-white/5 backdrop-blur-xl p-8 rounded-3xl border border-white/10">
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="p-3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl">
                        <FileText size={24} className="text-white" />
                      </div>
                      <h2 className="text-2xl font-bold">
                        5. Conteúdo do Usuário
                      </h2>
                    </div>

                    <div className="space-y-4 text-gray-300 leading-relaxed">
                      <ul className="list-disc list-inside space-y-2 ml-4">
                        <li>
                          Você pode salvar e compartilhar nomes ou informações
                          geradas pelo app.
                        </li>
                        <li>
                          Você é responsável por qualquer conteúdo que criar ou
                          compartilhar através do Serviço.
                        </li>
                        <li>
                          Reservamo-nos o direito de remover conteúdos que
                          violem estes Termos ou a legislação vigente.
                        </li>
                      </ul>
                    </div>
                  </section>

                  {/* 6. Publicidade e Serviços de Terceiros */}
                  <section className="bg-white/5 backdrop-blur-xl p-8 rounded-3xl border border-white/10">
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="p-3 bg-gradient-to-r from-pink-500 to-rose-500 rounded-2xl">
                        <Eye size={24} className="text-white" />
                      </div>
                      <h2 className="text-2xl font-bold">
                        6. Publicidade e Serviços de Terceiros
                      </h2>
                    </div>

                    <div className="space-y-4 text-gray-300 leading-relaxed">
                      <ul className="list-disc list-inside space-y-2 ml-4">
                        <li>
                          O NomeIA pode exibir anúncios de terceiros. Não nos
                          responsabilizamos pelo conteúdo ou produtos
                          anunciados.
                        </li>
                        <li>
                          Links para sites de terceiros são fornecidos apenas
                          para conveniência. Não temos controle nem
                          responsabilidade sobre eles.
                        </li>
                      </ul>
                    </div>
                  </section>

                  {/* 7. Limitação de Responsabilidade */}
                  <section className="bg-white/5 backdrop-blur-xl p-8 rounded-3xl border border-white/10">
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="p-3 bg-gradient-to-r from-red-500 to-pink-500 rounded-2xl">
                        <AlertTriangle size={24} className="text-white" />
                      </div>
                      <h2 className="text-2xl font-bold">
                        7. Limitação de Responsabilidade
                      </h2>
                    </div>

                    <div className="space-y-4 text-gray-300 leading-relaxed">
                      <ul className="list-disc list-inside space-y-2 ml-4">
                        <li>
                          O NomeIA é fornecido "como está", sem garantias de
                          funcionamento ininterrupto, livre de erros ou
                          compatível com todos os dispositivos.
                        </li>
                        <li>
                          Não nos responsabilizamos por perdas ou danos
                          resultantes do uso ou da incapacidade de usar o
                          Serviço.
                        </li>
                        <li>O uso do app é por sua conta e risco.</li>
                      </ul>
                    </div>
                  </section>

                  {/* 8. Alterações nos Termos */}
                  <section className="bg-white/5 backdrop-blur-xl p-8 rounded-3xl border border-white/10">
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="p-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl">
                        <RefreshCw size={24} className="text-white" />
                      </div>
                      <h2 className="text-2xl font-bold">
                        8. Alterações nos Termos
                      </h2>
                    </div>

                    <div className="space-y-4 text-gray-300 leading-relaxed">
                      <p>
                        Podemos atualizar estes Termos a qualquer momento.
                        Avisaremos sobre mudanças significativas. O uso contínuo
                        do Serviço após alterações significa aceitação dos novos
                        Termos.
                      </p>
                    </div>
                  </section>

                  {/* 9. Rescisão */}
                  <section className="bg-white/5 backdrop-blur-xl p-8 rounded-3xl border border-white/10">
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="p-3 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-2xl">
                        <XCircle size={24} className="text-white" />
                      </div>
                      <h2 className="text-2xl font-bold">9. Rescisão</h2>
                    </div>

                    <div className="space-y-4 text-gray-300 leading-relaxed">
                      <p>
                        Podemos encerrar ou suspender sua conta e acesso ao
                        Serviço, sem aviso prévio, se você violar estes Termos.
                      </p>
                    </div>
                  </section>

                  {/* 10. Legislação Aplicável */}
                  <section className="bg-white/5 backdrop-blur-xl p-8 rounded-3xl border border-white/10">
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="p-3 bg-gradient-to-r from-green-500 to-teal-500 rounded-2xl">
                        <Gavel size={24} className="text-white" />
                      </div>
                      <h2 className="text-2xl font-bold">
                        10. Legislação Aplicável
                      </h2>
                    </div>

                    <div className="space-y-4 text-gray-300 leading-relaxed">
                      <p>
                        Estes Termos são regidos pelas leis do Brasil. Fica
                        eleito o foro da comarca onde a NomeIA está sediada,
                        para resolver quaisquer disputas.
                      </p>
                    </div>
                  </section>

                  {/* 11. Contato */}
                  <section className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-xl p-8 rounded-3xl border border-white/20">
                    <div className="text-center">
                      <h2 className="text-2xl font-bold mb-6">11. Contato</h2>
                      <p className="text-gray-300 mb-8 leading-relaxed">
                        Se tiver dúvidas sobre estes Termos, entre em contato:
                      </p>

                      <div className="space-y-4">
                        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                          <a
                            href="mailto:malvesappbr@gmail.com"
                            className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-600 to-blue-500 px-6 py-3 rounded-2xl hover:from-purple-700 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 shadow-lg font-semibold"
                          >
                            <Mail size={20} />
                            <span>malvesappbr@gmail.com</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </section>
                </>
              )}
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
