import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { 
  ChevronLeft, 
  ArrowRight, 
  Tag, 
  Building,
  MapPin,
  Instagram,
  Compass,
  CheckCircle2,
  Layers,
  Sparkles,
  Smartphone,
  Eye,
  ShieldCheck,
  HeartHandshake,
  TrendingUp,
  LayoutGrid,
  FileCheck,
  MessageCircle,
  Clock,
  KeyRound,
  Home,
  Check,
  Sliders,
  HelpCircle,
  Heart
} from "lucide-react";
import Header from "./Header";
import Footer from "./Footer";
import SEO from "./SEO";
import lojaCapa from "../assets/mari-locacoes/loja-centro-01-capa.png";
import lojaBanheiro from "../assets/mari-locacoes/loja-centro-02-banheiro.png";
import lojaEspaco from "../assets/mari-locacoes/loja-centro-03-espaco.png";
import lojaEsquina from "../assets/mari-locacoes/loja-centro-04-esquina.png";
import lojaPotencial from "../assets/mari-locacoes/loja-centro-05-potencial.png";
import template2SeloLocal from "../assets/mari-locacoes/template2-selo-local.png";
import template2Tags from "../assets/mari-locacoes/template2-tags.png";

export const MariLocacoesCaseStudy: React.FC = () => {
  const [activeVisualTab, setActiveVisualTab] = useState<"capa" | "etiquetas" | "stories">("capa");

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const whatsappMessage = encodeURIComponent(
    "Olá! Estava analisando o case da Mari Locações no site da Lunae e gostaria de conversar sobre a estratégia e identidade visual da minha marca."
  );

  return (
    <div className="min-h-screen bg-[#FDFBF7] dark:bg-[#0C0B12] text-[#1E1E1E] dark:text-[#F3F2F8] font-['Montserrat',sans-serif] selection:bg-[#CC4840] selection:text-white transition-colors duration-300">
      <SEO
        title="Mari Locações • Estudo de Caso de Identidade Visual e Estratégia"
        description="Como a Lunae transformou a presença digital da Mari Locações em Santos/SP em uma comunicação estratégica, profissional e altamente reconhecível."
      />

      <Header />

      <main className="pt-20">
        {/* ========================================================= */}
        {/* 1. HERO SECTION — MARI LOCAÇÕES                            */}
        {/* ========================================================= */}
        <section 
          id="hero-mari-locacoes" 
          className="relative py-16 md:py-28 bg-[#06121D] text-white overflow-hidden"
        >
          {/* Subtle Ambient Background Gradients */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#CC4840]/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-3xl pointer-events-none" />
          
          <div className="max-w-6xl mx-auto px-6 relative z-10">
            {/* Breadcrumb Navigation */}
            <div className="flex items-center gap-3 mb-8">
              <Link 
                to="/#projetos" 
                className="inline-flex items-center gap-2 text-[#D9D9D9] hover:text-[#CC4840] transition-colors font-medium text-xs md:text-sm group min-h-[44px]"
              >
                <ChevronLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
                <span>Voltar para Projetos</span>
              </Link>
              <span className="text-white/30">•</span>
              <span className="text-xs md:text-sm text-white/70 font-light">Estudo de Caso</span>
            </div>

            <div className="grid lg:grid-cols-12 gap-12 items-center">
              {/* Left Column: Headlines & Overview */}
              <div className="lg:col-span-8 space-y-6">
                <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#CC4840] text-white text-xs font-bold uppercase tracking-wider shadow-md">
                  <Building size={15} />
                  <span>Mercado Imobiliário • Santos/SP</span>
                </div>

                <h1 className="text-3xl sm:text-5xl lg:text-6xl font-display font-normal text-white tracking-wide leading-[1.15]">
                  Mari Locações
                </h1>

                <p className="text-lg sm:text-xl md:text-2xl text-[#CC4840] font-medium leading-snug">
                  Posicionamento, identidade visual e comunicação estratégica para locação imobiliária.
                </p>

                <p className="text-base sm:text-lg text-[#D9D9D9] leading-relaxed font-light max-w-2xl">
                  A presença digital de uma corretora especializada precisa ir muito além de fotos soltas. A Lunae transformou a comunicação da Mari em um sistema visual reconhecível, transparente e focado em gerar conexão do primeiro anúncio até a entrega das chaves.
                </p>

                {/* Narrative Statement Callout */}
                <div className="p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm max-w-2xl">
                  <p className="text-xs sm:text-sm text-white/90 italic font-light leading-relaxed">
                    <strong className="text-[#CC4840] font-semibold not-italic">O princípio da Lunae: </strong>
                    "Transformamos negócios em marcas mais claras, profissionais e reconhecíveis."
                  </p>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-4 pt-2">
                  <button
                    type="button"
                    onClick={() => scrollToSection("sobre-o-projeto")}
                    className="inline-flex items-center gap-2 px-7 py-4 bg-[#CC4840] text-white font-semibold rounded-full text-sm sm:text-base hover:bg-white hover:text-[#06121D] transition-all duration-300 shadow-lg group min-h-[48px]"
                  >
                    <span>Explorar o Estudo de Caso</span>
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                  <a
                    href={`https://wa.me/5513991598181?text=${whatsappMessage}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-7 py-4 border border-white/25 text-white font-medium rounded-full text-sm sm:text-base hover:bg-white/10 hover:border-white transition-all min-h-[48px]"
                  >
                    <MessageCircle size={18} />
                    <span>Falar com a Lunae</span>
                  </a>
                </div>
              </div>

              {/* Right Column: Project Metadata Snapshot Card */}
              <div className="lg:col-span-4">
                <div className="rounded-3xl bg-[#081827] border border-white/15 p-6 sm:p-8 space-y-6 shadow-2xl">
                  <div className="flex items-center justify-between pb-4 border-b border-white/10">
                    <span className="text-xs uppercase font-mono tracking-widest text-[#CC4840]">Ficha do Projeto</span>
                    <span className="text-[11px] px-2.5 py-1 bg-white/10 text-white rounded-full">Santos / SP</span>
                  </div>

                  <div className="space-y-4 text-xs sm:text-sm">
                    <div>
                      <p className="text-white/50 text-[11px] uppercase tracking-wider mb-0.5">Cliente</p>
                      <p className="text-white font-semibold text-base">Mari Locações</p>
                      <p className="text-white/70 text-xs">Corretora Especialista em Aluguéis</p>
                    </div>

                    <div>
                      <p className="text-white/50 text-[11px] uppercase tracking-wider mb-0.5">Segmento</p>
                      <p className="text-white font-medium">Mercado Imobiliário • Locação Residencial e Comercial</p>
                    </div>

                    <div>
                      <p className="text-white/50 text-[11px] uppercase tracking-wider mb-0.5">Escopo Desenvolvido pela Lunae</p>
                      <ul className="space-y-1.5 text-white/80 text-xs">
                        <li className="flex items-center gap-2">
                          <Check size={14} className="text-[#CC4840]" />
                          <span>Identidade & Direção Visual</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Check size={14} className="text-[#CC4840]" />
                          <span>Sistema de Conteúdo para Imóveis</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Check size={14} className="text-[#CC4840]" />
                          <span>Comunicação Estratégica & Copywriting</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Check size={14} className="text-[#CC4840]" />
                          <span>Estruturação de Feed & Templates de Stories</span>
                        </li>
                      </ul>
                    </div>

                    <div className="pt-2 border-t border-white/10 flex items-center justify-between text-xs text-white/60">
                      <span>Conceito Central</span>
                      <span className="font-semibold text-white text-right">"Do anúncio às chaves"</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* 2. SOBRE O PROJETO                                        */}
        {/* ========================================================= */}
        <section 
          id="sobre-o-projeto" 
          className="py-20 md:py-28 bg-white dark:bg-[#100F1A] border-b border-black/5 dark:border-white/5"
        >
          <div className="max-w-6xl mx-auto px-6">
            <div className="max-w-3xl mb-14">
              <span className="text-xs font-bold uppercase tracking-widest text-[#CC4840] block mb-3">
                01 • SOBRE O PROJETO
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-normal text-[#06121D] dark:text-white leading-tight mb-6">
                Quem é a Mari Locações e como seu negócio precisava ser visto
              </h2>
              <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed font-light">
                A Mari Locações é uma corretora que atua especificamente com <strong>locação de imóveis em Santos/SP</strong>. Diferente de grandes imobiliárias impessoais ou corretores generalistas, sua proposta de valor sempre foi o <strong>atendimento próximo, consultivo e o conhecimento profundo da rotina santista</strong>.
              </p>
            </div>

            {/* The 3 Pillars of Mari's Positioning */}
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="p-8 rounded-3xl bg-[#F8F7F4] dark:bg-[#181724] border border-[#06121D]/5 dark:border-white/10 space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-[#06121D] text-white flex items-center justify-center">
                  <Home size={22} className="text-[#CC4840]" />
                </div>
                <h3 className="text-lg font-bold text-[#06121D] dark:text-white">
                  🏡 Locação de imóveis | Santos/SP
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 font-light leading-relaxed">
                  Foco exclusivo no nicho de locação, cobrindo os principais bairros da cidade (Gonzaga, Ponta da Praia, Boqueirão, Embaré, Aparecida e Canal 1 ao 7).
                </p>
              </div>

              <div className="p-8 rounded-3xl bg-[#F8F7F4] dark:bg-[#181724] border border-[#06121D]/5 dark:border-white/10 space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-[#06121D] text-white flex items-center justify-center">
                  <MapPin size={22} className="text-[#CC4840]" />
                </div>
                <h3 className="text-lg font-bold text-[#06121D] dark:text-white">
                  📍 Conhecimento local, agilidade e transparência
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 font-light leading-relaxed">
                  Clareza absoluta de valores de pacote (aluguel, condomínio e IPTU), sem pegadinhas contratuais e com resposta rápida para quem tem urgência em se mudar.
                </p>
              </div>

              <div className="p-8 rounded-3xl bg-[#F8F7F4] dark:bg-[#181724] border border-[#06121D]/5 dark:border-white/10 space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-[#06121D] text-white flex items-center justify-center">
                  <HeartHandshake size={22} className="text-[#CC4840]" />
                </div>
                <h3 className="text-lg font-bold text-[#06121D] dark:text-white">
                  🤝 Do anúncio às chaves
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 font-light leading-relaxed">
                  Uma presença acolhedora e presente em cada etapa: da seleção do imóvel, análise cadastral de garantias até a entrega das chaves na mão do locatário.
                </p>
              </div>
            </div>

            {/* Strategic Summary Box */}
            <div className="rounded-3xl bg-[#06121D] text-white p-8 md:p-12 border border-[#CC4840]/30 relative overflow-hidden">
              <div className="max-w-3xl relative z-10 space-y-4">
                <span className="text-xs font-mono uppercase tracking-widest text-[#CC4840]">
                  O OBJETIVO DA MARCA
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-white leading-snug">
                  Posicionar a Mari de forma profissional, acessível e confiável, destacando o domínio da cidade e a proximidade humana no atendimento.
                </h3>
                <p className="text-sm text-[#D9D9D9] font-light leading-relaxed">
                  Quem busca um imóvel para alugar em Santos muitas vezes se depara com anúncios confusos, fotos desordenadas e falta de respostas rápidas. A Mari precisava se destacar exatamente pelo oposto: organização impecável, estética refinada e confiança instantânea.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* 3. O DESAFIO                                              */}
        {/* ========================================================= */}
        <section 
          id="o-desafio" 
          className="py-20 md:py-28 bg-[#F8F7F4] dark:bg-[#0C0B12] border-b border-black/5 dark:border-white/5"
        >
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid lg:grid-cols-12 gap-12 items-start">
              
              {/* Left: Challenge Manifesto */}
              <div className="lg:col-span-5 space-y-6">
                <span className="text-xs font-bold uppercase tracking-widest text-[#CC4840] block">
                  02 • O CONTEXTO & DESAFIO
                </span>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-normal text-[#06121D] dark:text-white leading-tight">
                  Não era apenas "deixar o Instagram bonito".
                </h2>
                <p className="text-base text-gray-600 dark:text-gray-300 font-light leading-relaxed">
                  A Mari precisava fortalecer sua presença digital e construir uma comunicação mais consistente para que sua marca fosse facilmente reconhecida nas redes sociais.
                </p>
                <div className="p-6 rounded-2xl bg-white dark:bg-[#181724] border border-[#06121D]/10 dark:border-white/10 space-y-3 shadow-sm">
                  <p className="text-xs font-mono uppercase tracking-wider text-[#CC4840] font-bold">O padrão mais comum do mercado, direto do feed da Mari:</p>
                  <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 font-light leading-relaxed">
                    Um anúncio publicado em 1º de julho mostra bem o ponto de partida: uma foto crua do cômodo e a legenda <span className="italic">"Portaria 24h. Garantias: caução. Valor: 2600$ pacote"</span> — sem tabela de dados, sem hierarquia visual e sem nenhum elemento de marca. Treze dias depois, o mesmo perfil já publicava com o sistema completo da Lunae (veja a comparação real na seção 06).
                  </p>
                </div>
              </div>

              {/* Right: The 7 Strategic Demands */}
              <div className="lg:col-span-7">
                <div className="bg-white dark:bg-[#181724] p-8 md:p-10 rounded-3xl border border-[#06121D]/10 dark:border-white/10 shadow-sm space-y-6">
                  <h3 className="text-xl sm:text-2xl font-bold text-[#06121D] dark:text-white">
                    A Lunae foi desafiada a criar uma comunicação que:
                  </h3>

                  <div className="grid sm:grid-cols-2 gap-4">
                    {[
                      {
                        title: "Transmitisse confiança",
                        desc: "Eliminar ruídos e deixar regras de locação, taxas e garantias cristalinas para proprietários e inquilinos."
                      },
                      {
                        title: "Reforçasse a atuação em Santos",
                        desc: "Destacar o conhecimento da cidade, proximidade da praia, canais e características de cada bairro."
                      },
                      {
                        title: "Diferenciasse no mercado",
                        desc: "Sair do modelo tradicional e burocrático, posicionando a Mari como consultora moderna e atenciosa."
                      },
                      {
                        title: "Organizasse os imóveis",
                        desc: "Criar uma leitura em menos de 3 segundos com dormitórios, vagas, metragem e valor de pacote."
                      },
                      {
                        title: "Criasse reconhecimento visual",
                        desc: "Cores, tipografia e diagramação proprietárias para que o público identifique a Mari instantaneamente."
                      },
                      {
                        title: "Aproximasse o público",
                        desc: "Linguagem humana, acolhedora e acessível, convidando para o diálogo direto no WhatsApp."
                      },
                      {
                        title: "Mantivesse profissionalismo",
                        desc: "Equilíbrio perfeito entre autoridade técnica imobiliária e personalidade calorosa."
                      }
                    ].map((item, idx) => (
                      <div 
                        key={idx} 
                        className={`p-4 rounded-2xl border transition-all ${
                          idx === 6 ? "sm:col-span-2 bg-[#06121D] text-white border-[#CC4840]/30" : "bg-[#F8F7F4] dark:bg-[#100F1A] border-[#06121D]/5 dark:border-white/5"
                        }`}
                      >
                        <div className="flex items-start gap-3">
                          <CheckCircle2 size={18} className="text-[#CC4840] shrink-0 mt-0.5" />
                          <div>
                            <h4 className={`text-sm font-bold ${idx === 6 ? "text-white" : "text-[#06121D] dark:text-white"} mb-1`}>
                              {item.title}
                            </h4>
                            <p className={`text-xs ${idx === 6 ? "text-[#D9D9D9]" : "text-gray-600 dark:text-gray-400"} font-light leading-relaxed`}>
                              {item.desc}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* 4. A ESTRATÉGIA DA LUNAE                                   */}
        {/* ========================================================= */}
        <section 
          id="estrategia-lunae" 
          className="py-20 md:py-28 bg-white dark:bg-[#100F1A] border-b border-black/5 dark:border-white/5"
        >
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-bold uppercase tracking-widest text-[#CC4840] block mb-3">
                03 • A ESTRATÉGIA DA LUNAE
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-normal text-[#06121D] dark:text-white leading-tight mb-4">
                Os 3 pilares da comunicação e o conceito de marca
              </h2>
              <p className="text-gray-600 dark:text-gray-300 text-base sm:text-lg font-light leading-relaxed">
                A Lunae atuou como o estúdio responsável por transformar os objetivos da Mari em uma estratégia visual e de comunicação integrada, estruturada sobre três fundamentos inegociáveis:
              </p>
            </div>

            {/* The 3 Strategic Pillars Grid */}
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="p-8 md:p-10 rounded-3xl bg-[#FDFBF7] dark:bg-[#181724] border border-[#06121D]/10 dark:border-white/10 space-y-5 hover:-translate-y-1 transition-all duration-300">
                <span className="text-xs font-mono font-bold text-[#CC4840] uppercase tracking-widest block">PILAR 01</span>
                <h3 className="text-2xl font-bold text-[#06121D] dark:text-white">
                  Conhecimento Local
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 font-light leading-relaxed">
                  Santos não aparece apenas como uma cidade no rodapé. O domínio da geografia santista, da proximidade à orla, dos canais e das particularidades de cada bairro faz parte central do posicionamento da Mari, transmitindo autoridade imediata para quem já mora ou planeja vir para a Baixada Santista.
                </p>
              </div>

              <div className="p-8 md:p-10 rounded-3xl bg-[#FDFBF7] dark:bg-[#181724] border border-[#06121D]/10 dark:border-white/10 space-y-5 hover:-translate-y-1 transition-all duration-300">
                <span className="text-xs font-mono font-bold text-[#CC4840] uppercase tracking-widest block">PILAR 02</span>
                <h3 className="text-2xl font-bold text-[#06121D] dark:text-white">
                  Confiança & Transparência
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 font-light leading-relaxed">
                  A comunicação foi desenhada para transmitir segurança e clareza durante todo o processo de locação. As informações são diretas: o valor do pacote é discriminado, as fotos mostram a realidade e os atributos de cada oportunidade são detalhados com total honestidade.
                </p>
              </div>

              <div className="p-8 md:p-10 rounded-3xl bg-[#FDFBF7] dark:bg-[#181724] border border-[#06121D]/10 dark:border-white/10 space-y-5 hover:-translate-y-1 transition-all duration-300">
                <span className="text-xs font-mono font-bold text-[#CC4840] uppercase tracking-widest block">PILAR 03</span>
                <h3 className="text-2xl font-bold text-[#06121D] dark:text-white">
                  Proximidade Humana
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 font-light leading-relaxed">
                  A Mari não é apresentada como um anúncio frio de classificados, mas como uma profissional de confiança que acompanha o cliente de perto em uma etapa importante da vida: escolher o lugar onde vai morar ou empreender.
                </p>
              </div>
            </div>

            {/* Central Concept Signature Display */}
            <div className="p-8 md:p-14 rounded-3xl bg-[#06121D] text-white border border-[#CC4840]/40 text-center relative overflow-hidden shadow-2xl">
              <div className="max-w-3xl mx-auto space-y-4">
                <span className="text-xs font-mono uppercase tracking-widest text-[#CC4840]">
                  CONCEITO CENTRAL & ASSINATURA DE MARCA
                </span>
                <h3 className="text-3xl sm:text-4xl md:text-5xl font-display font-normal text-white leading-tight">
                  "Do anúncio às chaves, conte com a Mari."
                </h3>
                <p className="text-sm sm:text-base text-[#D9D9D9] font-light leading-relaxed max-w-2xl mx-auto">
                  Um slogan que sintetiza a jornada inteira. Funciona como assinatura visual no feed, encerramento de Reels, chamada para Stories e reforço verbal no atendimento do WhatsApp.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* 5. IDENTIDADE E DIREÇÃO VISUAL                            */}
        {/* ========================================================= */}
        <section 
          id="identidade-visual" 
          className="py-20 md:py-28 bg-[#F8F7F4] dark:bg-[#0C0B12] border-b border-black/5 dark:border-white/5"
        >
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-bold uppercase tracking-widest text-[#CC4840] block mb-3">
                04 • IDENTIDADE & DIREÇÃO VISUAL
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-normal text-[#06121D] dark:text-white leading-tight mb-4">
                Padrões de composição, cores e tipografia
              </h2>
              <p className="text-gray-600 dark:text-gray-300 text-base sm:text-lg font-light leading-relaxed">
                Desenvolvimento de uma linguagem visual consistente para os conteúdos da marca, estabelecendo equilíbrio entre o protagonismo da fotografia e a clareza das informações gráficas.
              </p>
            </div>

            {/* 4 Color Palette Cards */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              <div className="p-6 rounded-3xl bg-[#06121D] text-white space-y-4 border border-[#06121D] shadow-md">
                <div className="h-16 rounded-2xl bg-[#06121D] border border-white/20 flex items-center justify-center font-mono text-xs font-bold">
                  HEX: #06121D
                </div>
                <div>
                  <h4 className="font-bold text-base text-white">Azul Escuro</h4>
                  <p className="text-xs text-[#CC4840] font-semibold mb-1">Autoridade & Contraste</p>
                  <p className="text-xs text-[#D9D9D9] font-light leading-relaxed">
                    Cor principal para fundos de capas, caixas de dados, tipografia de títulos institucionais e bordas de solidez.
                  </p>
                </div>
              </div>

              <div className="p-6 rounded-3xl bg-[#06121D] text-white space-y-4 border border-[#CC4840]/60 shadow-md">
                <div className="h-16 rounded-2xl bg-[#CC4840] flex items-center justify-center font-mono text-xs font-bold text-white shadow-inner">
                  HEX: #CC4840
                </div>
                <div>
                  <h4 className="font-bold text-base text-white">Vermelho Terracota</h4>
                  <p className="text-xs text-[#CC4840] font-semibold mb-1">Destaque & Conversão</p>
                  <p className="text-xs text-[#D9D9D9] font-light leading-relaxed">
                    Utilizado nos cards de valor do pacote de locação, botões de ação e ícones de diferenciais estratégicos.
                  </p>
                </div>
              </div>

              <div className="p-6 rounded-3xl bg-white dark:bg-[#181724] text-[#06121D] dark:text-white space-y-4 border border-[#06121D]/10 dark:border-white/10 shadow-sm">
                <div className="h-16 rounded-2xl bg-[#D9D9D9] flex items-center justify-center font-mono text-xs font-bold text-[#06121D]">
                  HEX: #D9D9D9
                </div>
                <div>
                  <h4 className="font-bold text-base text-[#06121D] dark:text-white">Cinza Técnico</h4>
                  <p className="text-xs text-gray-500 dark:text-gray-400 font-semibold mb-1">Geometria & Divisões</p>
                  <p className="text-xs text-gray-600 dark:text-gray-400 font-light leading-relaxed">
                    Utilizado em linhas divisórias sutis, contornos finos de separação de ambientes e grids de apoio.
                  </p>
                </div>
              </div>

              <div className="p-6 rounded-3xl bg-white dark:bg-[#181724] text-[#06121D] dark:text-white space-y-4 border border-[#06121D]/10 dark:border-white/10 shadow-sm">
                <div className="h-16 rounded-2xl bg-[#F0F0F0] border border-[#D9D9D9] flex items-center justify-center font-mono text-xs font-bold text-[#06121D]">
                  HEX: #F0F0F0
                </div>
                <div>
                  <h4 className="font-bold text-base text-[#06121D] dark:text-white">Branco Acinzentado</h4>
                  <p className="text-xs text-gray-500 dark:text-gray-400 font-semibold mb-1">Etiquetas & Respiro</p>
                  <p className="text-xs text-gray-600 dark:text-gray-400 font-light leading-relaxed">
                    A cor oficial das etiquetas aplicadas nas fotos dos cômodos, garantindo leitura limpa sem poluir as imagens.
                  </p>
                </div>
              </div>
            </div>

            {/* Typography Hierarchy Guide */}
            <div className="bg-white dark:bg-[#181724] rounded-3xl p-8 md:p-12 border border-[#06121D]/10 dark:border-white/10 shadow-sm">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 mb-8 border-b border-[#06121D]/10 dark:border-white/10">
                <div>
                  <span className="text-xs font-mono uppercase tracking-widest text-[#CC4840] font-bold">FAMÍLIA TIPOGRÁFICA</span>
                  <h3 className="text-2xl font-bold text-[#06121D] dark:text-white">Poppins • Clareza geométrica e contemporânea</h3>
                </div>
                <span className="px-4 py-1.5 rounded-full bg-[#CC4840]/10 text-[#CC4840] text-xs font-bold self-start md:self-auto">
                  100% Legível em Telas Mobile
                </span>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 text-xs">
                <div className="p-5 rounded-2xl bg-[#F8F7F4] dark:bg-[#100F1A] border border-[#06121D]/5 dark:border-white/5 space-y-2">
                  <span className="text-lg font-bold text-[#06121D] dark:text-white block">Poppins Bold</span>
                  <p className="text-[#CC4840] font-semibold text-[11px]">Títulos & Valores</p>
                  <p className="text-gray-600 dark:text-gray-400 font-light">Usado para valores de pacote total, tipologias e headlines de capa.</p>
                </div>

                <div className="p-5 rounded-2xl bg-[#F8F7F4] dark:bg-[#100F1A] border border-[#06121D]/5 dark:border-white/5 space-y-2">
                  <span className="text-lg font-semibold text-[#06121D] dark:text-white block">Poppins SemiBold</span>
                  <p className="text-[#CC4840] font-semibold text-[11px]">Bairros & Destaques</p>
                  <p className="text-gray-600 dark:text-gray-400 font-light">Usado para faixas de localização, benefícios do imóvel e chamadas curtas.</p>
                </div>

                <div className="p-5 rounded-2xl bg-[#F8F7F4] dark:bg-[#100F1A] border border-[#06121D]/5 dark:border-white/5 space-y-2">
                  <span className="text-lg font-medium text-[#06121D] dark:text-white block">Poppins Medium</span>
                  <p className="text-[#CC4840] font-semibold text-[11px]">Etiquetas de Fotos</p>
                  <p className="text-gray-600 dark:text-gray-400 font-light">Usado nas etiquetas de rodapé (#F0F0F0 com texto #06121D) nos cômodos.</p>
                </div>

                <div className="p-5 rounded-2xl bg-[#F8F7F4] dark:bg-[#100F1A] border border-[#06121D]/5 dark:border-white/5 space-y-2">
                  <span className="text-lg font-normal text-[#06121D] dark:text-white block">Poppins Regular</span>
                  <p className="text-[#CC4840] font-semibold text-[11px]">Legendas & Detalhes</p>
                  <p className="text-gray-600 dark:text-gray-400 font-light">Usado em especificações de condomínio, IPTU e garantias locatícias.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* 6. SISTEMA DE CONTEÚDO PARA IMÓVEIS                        */}
        {/* ========================================================= */}
        <section 
          id="sistema-de-conteudo" 
          className="py-20 md:py-28 bg-white dark:bg-[#100F1A] border-b border-black/5 dark:border-white/5"
        >
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-bold uppercase tracking-widest text-[#CC4840] block mb-3">
                05 • SISTEMA DE CONTEÚDO PARA IMÓVEIS
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-normal text-[#06121D] dark:text-white leading-tight mb-4">
                Estrutura visual completa para apresentação dos imóveis
              </h2>
              <p className="text-gray-600 dark:text-gray-300 text-base sm:text-lg font-light leading-relaxed">
                A Lunae não criou apenas peças soltas, mas um <strong>sistema replicável e escalável</strong> que permite apresentar qualquer imóvel com clareza, transparência e velocidade.
              </p>
            </div>

            {/* Interactive Tab Selector to inspect the system */}
            <div className="flex justify-center mb-12">
              <div className="inline-flex p-1.5 rounded-full bg-[#F8F7F4] dark:bg-[#181724] border border-[#06121D]/10 dark:border-white/10" role="tablist">
                <button
                  type="button"
                  onClick={() => setActiveVisualTab("capa")}
                  className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 min-h-[44px] ${
                    activeVisualTab === "capa"
                      ? "bg-[#CC4840] text-white shadow-md"
                      : "text-[#06121D] dark:text-white/80 hover:text-[#CC4840]"
                  }`}
                  role="tab"
                  aria-selected={activeVisualTab === "capa"}
                >
                  1. Capa de Imóvel (Slide 1)
                </button>
                <button
                  type="button"
                  onClick={() => setActiveVisualTab("etiquetas")}
                  className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 min-h-[44px] ${
                    activeVisualTab === "etiquetas"
                      ? "bg-[#CC4840] text-white shadow-md"
                      : "text-[#06121D] dark:text-white/80 hover:text-[#CC4840]"
                  }`}
                  role="tab"
                  aria-selected={activeVisualTab === "etiquetas"}
                >
                  2. Fotos Internas com Etiqueta
                </button>
                <button
                  type="button"
                  onClick={() => setActiveVisualTab("stories")}
                  className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 min-h-[44px] ${
                    activeVisualTab === "stories"
                      ? "bg-[#CC4840] text-white shadow-md"
                      : "text-[#06121D] dark:text-white/80 hover:text-[#CC4840]"
                  }`}
                  role="tab"
                  aria-selected={activeVisualTab === "stories"}
                >
                  3. Stories Diários & Visitas
                </button>
              </div>
            </div>

            {/* Tab Contents: Dynamic Visual Previews */}
            <div className="bg-[#F8F7F4] dark:bg-[#181724] rounded-3xl p-6 sm:p-10 border border-[#06121D]/10 dark:border-white/10 mb-16">
              {activeVisualTab === "capa" && (
                <div className="grid lg:grid-cols-12 gap-8 items-center">
                  {/* Left: Real published cover slide */}
                  <div className="lg:col-span-6 flex justify-center">
                    <div className="w-full max-w-sm rounded-3xl overflow-hidden shadow-2xl border-4 border-[#06121D]">
                      <img
                        src={lojaCapa}
                        alt="Capa real do carrossel: Loja para Locação, Centro, Santos/SP, R$ 5.000"
                        className="w-full h-auto"
                      />
                    </div>
                  </div>

                  {/* Right: Technical Explanation */}
                  <div className="lg:col-span-6 space-y-4">
                    <span className="text-xs font-mono font-bold uppercase text-[#CC4840]">SLIDE 01 REAL • PUBLICADO NO @ALUGAREMSANTOS</span>
                    <h3 className="text-2xl font-bold text-[#06121D] dark:text-white">
                      A Capa Institucional: Geração Imediata de Leads
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300 font-light leading-relaxed">
                      Projetada para que quem está navegando pelo feed do Instagram identifique em menos de 3 segundos o bairro em Santos, o tipo de imóvel, o valor real do pacote e os principais diferenciais.
                    </p>
                    <ul className="space-y-2.5 text-xs sm:text-sm text-gray-600 dark:text-gray-300 font-light">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 size={16} className="text-[#CC4840] shrink-0 mt-0.5" />
                        <span><strong>Faixa Superior:</strong> Localização clara (bairro de Santos) + tag "LOCAÇÃO".</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 size={16} className="text-[#CC4840] shrink-0 mt-0.5" />
                        <span><strong>Painel de Especificações:</strong> Metragem, banheiros e diferenciais lidos em bloco, sem precisar ler a legenda.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 size={16} className="text-[#CC4840] shrink-0 mt-0.5" />
                        <span><strong>Card de Pacote Fechado:</strong> Valor total em destaque, evitando frustração de taxas ocultas.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 size={16} className="text-[#CC4840] shrink-0 mt-0.5" />
                        <span><strong>Rodapé Institucional:</strong> Pilares da marca + WhatsApp + CRECI fixos em todo slide do carrossel, não só na capa.</span>
                      </li>
                    </ul>
                  </div>
                </div>
              )}

              {activeVisualTab === "etiquetas" && (
                <div className="grid lg:grid-cols-12 gap-8 items-center">
                  {/* Left: Real photos with #F0F0F0 / #06121D pill labels */}
                  <div className="lg:col-span-6 grid sm:grid-cols-2 gap-4">
                    <div className="rounded-2xl overflow-hidden shadow-lg border border-black/10">
                      <img
                        src={lojaBanheiro}
                        alt="Foto real com etiqueta: Banheiro"
                        className="w-full h-auto"
                      />
                    </div>

                    <div className="rounded-2xl overflow-hidden shadow-lg border border-black/10">
                      <img
                        src={lojaEsquina}
                        alt="Foto real com etiqueta: Esquina Movimentada"
                        className="w-full h-auto"
                      />
                    </div>
                  </div>

                  {/* Right: Technical Specifications of Labels */}
                  <div className="lg:col-span-6 space-y-4">
                    <span className="text-xs font-mono font-bold uppercase text-[#CC4840]">SLIDES REAIS • LOJA CENTRO SANTOS</span>
                    <h3 className="text-2xl font-bold text-[#06121D] dark:text-white">
                      Etiquetas Informativas Padronizadas
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300 font-light leading-relaxed">
                      Em vez de encher a foto de carimbos ou textos em fontes aleatórias, cada foto interna recebe <strong>uma única etiqueta de rodapé</strong>, alinhada à esquerda:
                    </p>
                    <div className="p-4 rounded-2xl bg-white dark:bg-[#100F1A] border border-[#06121D]/10 dark:border-white/10 space-y-2 text-xs">
                      <p>• <strong>Fundo da Etiqueta:</strong> `#F0F0F0` (Branco Acinzentado que se destaca em pisos claros e escuros).</p>
                      <p>• <strong>Texto da Etiqueta:</strong> `#06121D` (Azul Escuro institucional com alta legibilidade).</p>
                      <p>• <strong>Ícone:</strong> Discreto e alinhado ao diferencial (Tag, Sol, Vista, Suíte).</p>
                      <p>• <strong>Extensão:</strong> De 1 a 4 palavras objetivas, valorizando o ambiente.</p>
                    </div>
                  </div>
                </div>
              )}

              {activeVisualTab === "stories" && (
                <div className="grid lg:grid-cols-12 gap-8 items-center">
                  {/* Left: Real Stories template, recriado fielmente */}
                  <div className="lg:col-span-6 flex justify-center gap-4">
                    {/* Story Real 1: Capa de imóvel */}
                    <div className="w-44 rounded-3xl overflow-hidden shadow-2xl border-2 border-[#06121D] bg-[#06121D] text-white relative">
                      <div className="h-72 bg-neutral-800" />
                      <div className="absolute bottom-0 left-0 right-0 bg-[#06121D] rounded-t-3xl p-3 space-y-2 border-t border-white/10">
                        <p className="text-[9px] text-white/60 uppercase tracking-wider text-center">Valor do Aluguel</p>
                        <p className="text-lg font-bold text-white text-center">R$ 3.100</p>
                        <div className="flex items-center gap-1 text-[9px] text-white/80 justify-center">
                          <MapPin size={10} className="text-[#CC4840]" />
                          <span>Boqueirão, Santos - SP</span>
                        </div>
                        <div className="pt-1.5 border-t border-white/10 text-[8px] text-white/70 text-center leading-relaxed">
                          2 dormitórios · 1 banheiro · 58m²<br />Seguro fiança e caução
                        </div>
                      </div>
                    </div>

                    {/* Story Real 2: CTA final */}
                    <div className="w-44 rounded-3xl overflow-hidden shadow-2xl border-2 border-[#06121D] bg-[#06121D] text-white p-4 flex flex-col items-center justify-center text-center space-y-3 h-[21rem]">
                      <div className="w-9 h-9 rounded-full border-2 border-white flex items-center justify-center">
                        <Heart size={16} className="text-white" fill="white" />
                      </div>
                      <p className="font-bold text-xs leading-snug">Do anúncio às chaves, conte com a Mari.</p>
                      <p className="text-white/70 text-[9px]">Entre em contato e agende sua visita.</p>
                      <div className="px-3 py-1.5 rounded-full bg-[#CC4840] text-[9px] font-bold flex items-center gap-1">
                        <MessageCircle size={10} />
                        (13) 97816-8493
                      </div>
                    </div>
                  </div>

                  {/* Right: Technical Explanation */}
                  <div className="lg:col-span-6 space-y-4">
                    <span className="text-xs font-mono font-bold uppercase text-[#CC4840]">TEMPLATE REAL DE STORIES • FASE 2</span>
                    <h3 className="text-2xl font-bold text-[#06121D] dark:text-white">
                      A mesma identidade visual no dia a dia
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300 font-light leading-relaxed">
                      Novidade da fase atual: um template dedicado para Stories, para que a rotina de anúncios e contato direto mantenha a mesma elegância institucional do feed.
                    </p>
                    <ul className="space-y-2.5 text-xs sm:text-sm text-gray-600 dark:text-gray-300 font-light">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 size={16} className="text-[#CC4840] shrink-0 mt-0.5" />
                        <span><strong>Capa de imóvel para Stories:</strong> valor, localização e specs em um cartão compacto, pensado para leitura vertical rápida.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 size={16} className="text-[#CC4840] shrink-0 mt-0.5" />
                        <span><strong>Slide de encerramento:</strong> reforça o slogan "Do anúncio às chaves" e leva direto para o WhatsApp da Mari.</span>
                      </li>
                    </ul>
                  </div>
                </div>
              )}
            </div>

            {/* Real Carousel Strip — remaining slides of the same real post */}
            <div className="mb-16">
              <p className="text-xs font-mono uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-4 text-center">
                Carrossel completo, direto do Instagram — Loja para Locação, Centro/Santos
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto">
                <img src={lojaCapa} alt="Slide 1: capa institucional" className="w-full h-auto rounded-xl shadow-md border border-black/10" />
                <img src={lojaBanheiro} alt="Slide 2: banheiro" className="w-full h-auto rounded-xl shadow-md border border-black/10" />
                <img src={lojaEspaco} alt="Slide 3: espaço versátil" className="w-full h-auto rounded-xl shadow-md border border-black/10" />
                <img src={lojaPotencial} alt="Slide 5: potencial para o negócio" className="w-full h-auto rounded-xl shadow-md border border-black/10" />
              </div>
              <p className="text-center mt-4">
                <a
                  href="https://www.instagram.com/alugaremsantos/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#CC4840] hover:underline"
                >
                  <Instagram size={14} />
                  Ver o perfil real @alugaremsantos
                </a>
              </p>
            </div>

            {/* Strategy Callout Banner */}
            <div className="p-8 rounded-3xl bg-[#06121D] text-white border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="space-y-2 text-left">
                <span className="text-xs font-mono uppercase tracking-widest text-[#CC4840]">POR TRÁS DO DESIGN</span>
                <h4 className="text-xl sm:text-2xl font-bold text-white">
                  Chamadas estratégicas que vão além da descrição fria do imóvel
                </h4>
                <p className="text-xs sm:text-sm text-[#D9D9D9] font-light max-w-2xl">
                  Em vez de apenas listar "2 dormitórios", os textos da Lunae destacam o estilo de vida: proximidade do mar, tranquilidade para trabalhar em home office, sacada arejada e economia de condomínio.
                </p>
              </div>
              <a
                href={`https://wa.me/5513991598181?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 bg-[#CC4840] hover:bg-white hover:text-[#06121D] text-white text-xs sm:text-sm font-semibold rounded-full transition-all shrink-0 min-h-[44px] flex items-center justify-center"
              >
                Quero um Sistema Assim
              </a>
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* 7. ANTES X DEPOIS                                         */}
        {/* ========================================================= */}
        <section 
          id="antes-x-depois" 
          className="py-20 md:py-28 bg-[#F8F7F4] dark:bg-[#0C0B12] border-b border-black/5 dark:border-white/5"
        >
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-bold uppercase tracking-widest text-[#CC4840] block mb-3">
                06 • A EVOLUÇÃO DO SISTEMA VISUAL
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-normal text-[#06121D] dark:text-white leading-tight mb-4">
                Três fases, o mesmo perfil real
              </h2>
              <p className="text-gray-600 dark:text-gray-300 text-base sm:text-lg font-light leading-relaxed">
                O trabalho da Lunae com a Mari não parou em uma entrega única — é um sistema vivo. Do primeiro anúncio sem padrão até o modelo em uso hoje, com selo de localização e tags de destaque, tudo dentro do mesmo feed do <strong>@alugaremsantos</strong>.
              </p>
            </div>

            {/* 3-Stage Evolution Grid */}
            <div className="grid lg:grid-cols-3 gap-6 mb-6">
              {/* STAGE 0: SEM TEMPLATE */}
              <div className="p-7 rounded-3xl bg-white dark:bg-[#181724] border border-red-500/20 shadow-sm space-y-5 text-left flex flex-col">
                <div className="flex items-center justify-between pb-4 border-b border-red-500/10">
                  <span className="text-xs font-mono uppercase tracking-widest text-red-500 font-bold">FASE 0 • 1º DE JULHO</span>
                </div>
                <span className="px-3 py-1 bg-red-500/10 text-red-500 text-xs font-semibold rounded-full self-start">Sem template</span>

                <div className="p-4 rounded-2xl bg-[#F8F7F4] dark:bg-[#100F1A] border border-black/5 dark:border-white/5 space-y-1.5">
                  <p className="text-[11px] font-mono uppercase tracking-wider text-gray-400">Legenda publicada, na íntegra</p>
                  <p className="text-xs text-gray-700 dark:text-gray-300 font-medium leading-relaxed">
                    "CANAL 4 NA QUADRA DA PRAIA<br />1 dormitório · Prédio com elevador · Portaria 24h<br />Garantias: caução · Valor: 2600$ pacote"
                  </p>
                </div>

                <ul className="space-y-3 text-xs text-gray-600 dark:text-gray-400 font-light flex-1">
                  <li className="flex items-start gap-2.5">
                    <span className="w-4 h-4 rounded-full bg-red-500/10 text-red-500 flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">✕</span>
                    <span>Foto crua, sem capa, sem badge, sem tag de disponibilidade.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-4 h-4 rounded-full bg-red-500/10 text-red-500 flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">✕</span>
                    <span>Valor sem formatação ("2600$"), sem discriminar aluguel, condomínio e IPTU.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-4 h-4 rounded-full bg-red-500/10 text-red-500 flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">✕</span>
                    <span>Nenhum elemento de marca: sem rodapé, sem WhatsApp, sem CRECI.</span>
                  </li>
                </ul>
              </div>

              {/* STAGE 1: TEMPLATE 1 */}
              <div className="p-7 rounded-3xl bg-[#181724] text-white border border-white/10 shadow-md space-y-5 text-left flex flex-col">
                <div className="flex items-center justify-between pb-4 border-b border-white/10">
                  <span className="text-xs font-mono uppercase tracking-widest text-white/60 font-bold">FASE 1 • 14 DE JULHO</span>
                </div>
                <span className="px-3 py-1 bg-white/10 text-white text-xs font-semibold rounded-full self-start">Template 1 da Lunae</span>

                <div className="rounded-2xl overflow-hidden border border-white/10">
                  <img src={lojaCapa} alt="Exemplo real do Template 1: Loja para Locação" className="w-full h-auto" />
                </div>

                <ul className="space-y-3 text-xs text-[#D9D9D9] font-light flex-1">
                  <li className="flex items-start gap-2.5">
                    <span className="w-4 h-4 rounded-full bg-[#CC4840] text-white flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">✓</span>
                    <span>Capa com título, localização e painel de especificações organizado.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-4 h-4 rounded-full bg-[#CC4840] text-white flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">✓</span>
                    <span>Card de valor destacado e rodapé institucional fixo em todo slide.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-4 h-4 rounded-full bg-[#CC4840] text-white flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">✓</span>
                    <span>Primeiro padrão replicável — usado em dezenas de anúncios reais.</span>
                  </li>
                </ul>
              </div>

              {/* STAGE 2: TEMPLATE 2 + STORIES */}
              <div className="p-7 rounded-3xl bg-[#06121D] text-white border border-[#CC4840]/50 shadow-xl space-y-5 text-left flex flex-col">
                <div className="flex items-center justify-between pb-4 border-b border-white/10">
                  <span className="text-xs font-mono uppercase tracking-widest text-[#CC4840] font-bold">FASE 2 • PADRÃO ATUAL</span>
                </div>
                <span className="px-3 py-1 bg-[#CC4840] text-white text-xs font-semibold rounded-full self-start">Template 2 + Stories</span>

                <div className="grid grid-cols-2 gap-2">
                  <div className="rounded-xl overflow-hidden border border-white/10">
                    <img src={template2SeloLocal} alt="Novo selo de localização do Template 2" className="w-full h-auto" />
                  </div>
                  <div className="rounded-xl overflow-hidden border border-white/10">
                    <img src={template2Tags} alt="Novas tags de destaque do Template 2" className="w-full h-auto" />
                  </div>
                </div>

                <ul className="space-y-3 text-xs text-[#D9D9D9] font-light flex-1">
                  <li className="flex items-start gap-2.5">
                    <span className="w-4 h-4 rounded-full bg-[#CC4840] text-white flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">✓</span>
                    <span><strong>Selo de localização</strong> em destaque, substituindo o texto simples.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-4 h-4 rounded-full bg-[#CC4840] text-white flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">✓</span>
                    <span><strong>Tags coloridas de destaque</strong> (ex: "Espaço amplo para mesas e cadeiras") reforçando diferenciais.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-4 h-4 rounded-full bg-[#CC4840] text-white flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">✓</span>
                    <span><strong>Template de Stories dedicado</strong>, novidade que não existia nas fases anteriores.</span>
                  </li>
                </ul>
              </div>
            </div>

            <p className="text-center text-xs text-gray-500 dark:text-gray-400 italic mb-16">
              * Datas e legendas conferem com publicações reais do perfil @alugaremsantos. Nomes de terceiros que curtiram ou comentaram os posts foram omitidos.
            </p>

            {/* Real Results Callout */}
            <div className="grid md:grid-cols-3 gap-6">
              <div className="md:col-span-2 p-8 md:p-10 rounded-3xl bg-white dark:bg-[#181724] border border-[#06121D]/10 dark:border-white/10 shadow-sm space-y-4">
                <span className="text-xs font-mono uppercase tracking-widest text-[#CC4840] font-bold block">DEPOIMENTO REAL DA CLIENTE</span>
                <blockquote className="text-lg sm:text-xl text-[#06121D] dark:text-white font-serif font-medium leading-snug">
                  "Tá tendo bastante gente me chamando direto pelos Stories. Ontem mesmo um interessado me chamou e eu já visitei o imóvel com ele."
                </blockquote>
                <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 font-light">
                  — Mari, sobre o aumento de contatos diretos após a implementação do sistema visual. Em outra conversa, o feedback sobre o resultado do feed foi direto: <span className="italic">"o feed tá lindo"</span>.
                </p>
              </div>

              <div className="p-8 rounded-3xl bg-[#F8F7F4] dark:bg-[#100F1A] border border-[#06121D]/5 dark:border-white/5 space-y-3">
                <span className="text-xs font-mono uppercase tracking-widest text-[#CC4840] font-bold block">PESQUISA REAL DE PÚBLICO</span>
                <p className="text-xs text-gray-600 dark:text-gray-400 font-light leading-relaxed">
                  Enquetes no Instagram orientam o que é produzido a seguir:
                </p>
                <div className="space-y-2 text-xs">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600 dark:text-gray-400">2 dormitórios</span>
                    <span className="font-bold text-[#06121D] dark:text-white">50% dos votos</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Orçamento até R$ 3.000</span>
                    <span className="font-bold text-[#06121D] dark:text-white">69% dos votos</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* 8. O PROCESSO DA LUNAE                                    */}
        {/* ========================================================= */}
        <section 
          id="o-processo" 
          className="py-20 md:py-28 bg-white dark:bg-[#100F1A] border-b border-black/5 dark:border-white/5"
        >
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-bold uppercase tracking-widest text-[#CC4840] block mb-3">
                07 • METODOLOGIA LUNAE
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-normal text-[#06121D] dark:text-white leading-tight mb-4">
                Como construímos uma marca com direção
              </h2>
              <p className="text-gray-600 dark:text-gray-300 text-base sm:text-lg font-light leading-relaxed">
                Nosso processo de trabalho é desenhado para ser transparente, colaborativo e focado em resultados reais para o negócio.
              </p>
            </div>

            {/* 5 Process Steps */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {[
                {
                  step: "01",
                  title: "Entendimento",
                  desc: "Imersão profunda no negócio, público-alvo, particularidades de Santos e objetivos comerciais da marca."
                },
                {
                  step: "02",
                  title: "Estratégia",
                  desc: "Definição dos pilares de comunicação, tom de voz, persona e direção de arte personalizada."
                },
                {
                  step: "03",
                  title: "Criação",
                  desc: "Desenvolvimento dos layouts, paleta de cores, tipografia, chamadas e elementos gráficos do sistema."
                },
                {
                  step: "04",
                  title: "Aplicação",
                  desc: "Adaptação da identidade para capas de imóveis, etiquetas de fotos, Stories e materiais digitais."
                },
                {
                  step: "05",
                  title: "Consistência",
                  desc: "Construção de um manual e templates fáceis de operar para manter a marca reconhecível ao longo do tempo."
                }
              ].map((p, idx) => (
                <div 
                  key={idx} 
                  className="p-6 rounded-3xl bg-[#F8F7F4] dark:bg-[#181724] border border-[#06121D]/5 dark:border-white/5 flex flex-col justify-between space-y-4 hover:-translate-y-1 transition-all"
                >
                  <div>
                    <span className="text-2xl font-mono font-bold text-[#CC4840] block mb-2">{p.step}</span>
                    <h3 className="text-lg font-bold text-[#06121D] dark:text-white mb-2">{p.title}</h3>
                    <p className="text-xs text-gray-600 dark:text-gray-400 font-light leading-relaxed">{p.desc}</p>
                  </div>
                  <div className="w-6 h-1 bg-[#CC4840]/30 rounded-full" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* 9. O QUE ESTE PROJETO DEMONSTRA                           */}
        {/* ========================================================= */}
        <section 
          id="o-que-demonstra" 
          className="py-24 md:py-32 bg-[#06121D] text-white relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-96 h-96 bg-[#CC4840]/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-4xl mx-auto px-6 relative z-10 text-center space-y-8">
            <span className="text-xs font-bold uppercase tracking-widest text-[#CC4840] block">
              08 • NOSSA VISÃO
            </span>

            <h2 className="text-3xl sm:text-5xl md:text-6xl font-display font-normal text-white leading-tight">
              Mais do que posts, uma marca com direção.
            </h2>

            <div className="space-y-6 text-base sm:text-lg md:text-xl text-[#D9D9D9] font-light leading-relaxed max-w-3xl mx-auto text-left sm:text-center">
              <p>
                A presença digital de uma empresa não precisa ser apenas bonita. Ela precisa comunicar quem está por trás do negócio.
              </p>
              <p>
                No projeto da Mari Locações, a Lunae trabalhou para transformar características que já faziam parte da profissional — <strong className="text-white font-medium">conhecimento local, agilidade, transparência e proximidade</strong> — em uma comunicação visual e estratégica.
              </p>
              <p className="text-[#CC4840] font-medium text-lg sm:text-2xl pt-2">
                O resultado é uma marca mais preparada para ser reconhecida, lembrada e escolhida.
              </p>
            </div>

            <div className="pt-6">
              <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/10 border border-white/15 text-xs text-white/80">
                <Sparkles size={14} className="text-[#CC4840]" />
                <span>Lunae Estúdio Criativo • Santos / SP</span>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* 10. CTA PARA POTENCIAIS CLIENTES                          */}
        {/* ========================================================= */}
        <section 
          id="cta-lunae" 
          className="py-24 md:py-36 bg-[#FDFBF7] dark:bg-[#0C0B12] text-[#1E1E1E] dark:text-white"
        >
          <div className="max-w-4xl mx-auto px-6 text-center space-y-8">
            <span className="text-xs font-bold uppercase tracking-widest text-[#CC4840] block">
              PRÓXIMO PASSO
            </span>

            <h2 className="text-3xl sm:text-5xl md:text-6xl font-display font-normal text-[#06121D] dark:text-white leading-tight">
              Sua marca também precisa de direção?
            </h2>

            <p className="text-base sm:text-xl text-gray-600 dark:text-gray-300 font-light leading-relaxed max-w-2xl mx-auto">
              A Lunae cria identidades e estratégias de comunicação para negócios que querem deixar de apenas aparecer e começar a ser reconhecidos.
            </p>

            {/* Primary Action Button */}
            <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href={`https://wa.me/5513991598181?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-10 py-5 bg-[#CC4840] text-white font-bold rounded-full text-base sm:text-lg hover:bg-[#06121D] hover:text-white transition-all duration-300 shadow-xl group min-h-[52px]"
              >
                <span>QUERO FALAR COM A LUNAE</span>
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>

              <Link
                to="/contato"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-5 border border-[#06121D]/20 dark:border-white/20 text-[#06121D] dark:text-white font-semibold rounded-full text-base hover:bg-black/5 dark:hover:bg-white/10 transition-all min-h-[52px]"
              >
                <span>Solicitar Orçamento Online</span>
              </Link>
            </div>

            {/* Secondary Callout */}
            <div className="pt-10 border-t border-black/10 dark:border-white/10 max-w-md mx-auto">
              <p className="text-sm text-gray-500 dark:text-gray-400 font-light mb-3">
                Tem um projeto parecido? Vamos conversar.
              </p>
              <p className="text-xs text-gray-400 dark:text-gray-500">
                Atendemos negócios de Santos, Baixada Santista, São Paulo e todo o Brasil.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default MariLocacoesCaseStudy;
