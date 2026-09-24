import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { 
  ChevronLeft, 
  ChevronRight, 
  ChevronDown, 
  Check, 
  Sparkles, 
  ArrowRight, 
  X, 
  Search, 
  Target, 
  Layers, 
  Instagram, 
  Palette, 
  FileText, 
  Smartphone, 
  CheckCircle2,
  Maximize2
} from "lucide-react";
import Header from "./Header";
import Footer from "./Footer";

// --- Types ---
interface ModalData {
  title: string;
  category: string;
  description: string;
  content: React.ReactNode;
}

const OnyxCaseStudy: React.FC = () => {
  // State for progressive disclosure (accordions & modals)
  const [activeAccordion, setActiveAccordion] = useState<string | null>("logo");
  const [activeModal, setActiveModal] = useState<ModalData | null>(null);
  const [lightboxImage, setLightboxImage] = useState<{ url: string; title: string } | null>(null);

  // Scroll smoothly to section
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const toggleAccordion = (id: string) => {
    setActiveAccordion(prev => (prev === id ? null : id));
  };

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-[#1A1A1A] font-body selection:bg-[#C5A059] selection:text-white">
      <Header />

      <main className="pt-20">
        {/* ========================================================= */}
        {/* 1. HERO SECTION                                           */}
        {/* ========================================================= */}
        <section className="relative py-16 md:py-28 bg-gradient-to-b from-[#F5F2EC] to-[#FDFBF7] overflow-hidden">
          <div className="section-container relative z-10">
            {/* Back Button */}
            <Link 
              to="/#projetos" 
              className="inline-flex items-center gap-2 text-[#8C7A6B] hover:text-[#1A1A1A] transition-colors mb-8 font-medium text-sm group"
            >
              <ChevronLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
              <span>Voltar para Projetos</span>
            </Link>

            <div className="max-w-3xl">
              {/* Segment Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C5A059]/15 border border-[#C5A059]/30 text-[#8C6D2D] text-xs font-semibold uppercase tracking-wider mb-4">
                <Sparkles size={13} className="text-[#C5A059]" />
                <span>Saúde &amp; Personal Training</span>
              </div>

              {/* H1 - Single H1 per page for SEO */}
              <h1 className="text-4xl md:text-6xl font-display font-bold text-[#1A1A1A] tracking-tight leading-tight mb-6">
                Onyx Personal Trainer
              </h1>

              {/* Breve descrição (2 linhas) */}
              <p className="text-lg md:text-xl text-[#5A524C] leading-relaxed mb-8 font-light">
                Uma identidade visual e presença digital desenvolvidas para comunicar profissionalismo, confiança e proximidade.
              </p>

              {/* Botão Conhecer o Processo */}
              <button
                onClick={() => scrollToSection("desafio")}
                className="inline-flex items-center gap-3 px-7 py-4 bg-[#1A1A1A] text-white font-medium rounded-full text-base hover:bg-[#C5A059] transition-all shadow-lg shadow-black/5 group"
              >
                <span>Conhecer o processo</span>
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Hero Visual Banner */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-14 rounded-3xl overflow-hidden border border-[#E5E0D8] bg-[#1A1A1A] shadow-2xl relative"
            >
              <div className="p-8 md:p-14 text-center relative overflow-hidden flex flex-col items-center justify-center min-h-[320px] md:min-h-[400px]">
                {/* Subtle Background Glow */}
                <div className="absolute inset-0 bg-gradient-to-tr from-[#1A1A1A] via-[#2A2A2A] to-[#1A1A1A]" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#C5A059]/10 rounded-full blur-3xl pointer-events-none" />

                <div className="relative z-10 flex flex-col items-center">
                  <svg className="w-24 h-24 md:w-32 md:h-32 mb-4" viewBox="0 0 100 100" fill="none">
                    <circle cx="50" cy="50" r="38" stroke="#C5A059" strokeWidth="4" />
                    <path d="M35 35 L65 65 M65 35 L35 65" stroke="#B83A14" strokeWidth="4" strokeLinecap="round" />
                  </svg>
                  <span className="font-serif text-2xl md:text-4xl font-bold tracking-[0.3em] text-[#C5A059] uppercase">
                    ONYX
                  </span>
                  <span className="text-[10px] md:text-xs tracking-[0.4em] text-gray-400 uppercase mt-2 font-mono">
                    PERSONAL TRAINER &bull; FORÇA &amp; DISCIPLINA
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* 2. O DESAFIO                                              */}
        {/* ========================================================= */}
        <section id="desafio" className="py-20 md:py-28 bg-[#FDFBF7]">
          <div className="section-container max-w-4xl">
            <div className="bg-white rounded-3xl p-8 md:p-14 border border-[#E5E0D8] shadow-sm">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#C5A059] block mb-3">
                Contexto do Projeto
              </span>
              
              <h2 className="text-3xl md:text-4xl font-display font-bold text-[#1A1A1A] mb-6">
                O ponto de partida
              </h2>

              <div className="space-y-4 text-base md:text-lg text-[#4A423D] leading-relaxed font-light">
                <p>
                  A Onyx já entregava um excelente trabalho como personal trainer, mas sua comunicação ainda não transmitia a mesma credibilidade que seus serviços ofereciam.
                </p>
                <p>
                  Queríamos construir uma marca que refletisse sua personalidade e fortalecesse sua presença digital.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* 3. NOSSA ESTRATÉGIA                                       */}
        {/* ========================================================= */}
        <section className="py-20 md:py-28 bg-[#F7F4EE]">
          <div className="section-container">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#C5A059] block mb-2">
                Metodologia
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-[#1A1A1A]">
                Nossa estratégia
              </h2>
            </div>

            {/* Exatamente três cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Card 1: Pesquisa */}
              <div className="bg-white rounded-2xl p-8 border border-[#E5E0D8] shadow-sm hover:border-[#C5A059]/40 transition-all group">
                <div className="w-12 h-12 rounded-xl bg-[#C5A059]/10 text-[#C5A059] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Search size={22} />
                </div>
                <h3 className="text-xl font-display font-bold text-[#1A1A1A] mb-3">
                  Pesquisa
                </h3>
                <p className="text-[#5A524C] text-sm leading-relaxed">
                  Entendemos o negócio, o público e os diferenciais da marca.
                </p>
              </div>

              {/* Card 2: Posicionamento */}
              <div className="bg-white rounded-2xl p-8 border border-[#E5E0D8] shadow-sm hover:border-[#C5A059]/40 transition-all group">
                <div className="w-12 h-12 rounded-xl bg-[#C5A059]/10 text-[#C5A059] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Target size={22} />
                </div>
                <h3 className="text-xl font-display font-bold text-[#1A1A1A] mb-3">
                  Posicionamento
                </h3>
                <p className="text-[#5A524C] text-sm leading-relaxed">
                  Definimos linguagem visual, personalidade e direcionamento estratégico.
                </p>
              </div>

              {/* Card 3: Execução */}
              <div className="bg-white rounded-2xl p-8 border border-[#E5E0D8] shadow-sm hover:border-[#C5A059]/40 transition-all group">
                <div className="w-12 h-12 rounded-xl bg-[#C5A059]/10 text-[#C5A059] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Layers size={22} />
                </div>
                <h3 className="text-xl font-display font-bold text-[#1A1A1A] mb-3">
                  Execução
                </h3>
                <p className="text-[#5A524C] text-sm leading-relaxed">
                  Transformamos a estratégia em identidade visual e materiais digitais consistentes.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* 4. ENTREGAS DO PROJETO                                   */}
        {/* ========================================================= */}
        <section className="py-20 md:py-28 bg-[#FDFBF7]">
          <div className="section-container">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#C5A059] block mb-2">
                Escopo Contratado
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-[#1A1A1A] mb-4">
                Entregas do projeto
              </h2>
              <p className="text-[#6A625C] text-sm">
                Clique em cada item para explorar a solução e as decisões de design.
              </p>
            </div>

            {/* As 2 categorias contratadas */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              
              {/* CATEGORIA 1: Identidade Visual */}
              <div className="bg-white rounded-3xl p-8 border border-[#E5E0D8] shadow-sm">
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-[#F0ECE4]">
                  <div className="w-10 h-10 rounded-xl bg-[#C5A059]/15 text-[#8C6D2D] flex items-center justify-center">
                    <Palette size={20} />
                  </div>
                  <h3 className="text-2xl font-display font-bold text-[#1A1A1A]">
                    🎨 Identidade Visual
                  </h3>
                </div>

                <div className="space-y-3">
                  {/* Item 1: Estudo de cores e tipografia */}
                  <div className="border border-[#F0ECE4] rounded-2xl overflow-hidden">
                    <button
                      onClick={() => toggleAccordion("cores")}
                      aria-expanded={activeAccordion === "cores"}
                      className="w-full flex items-center justify-between p-4 text-left hover:bg-[#FDFBF7] transition-colors focus:outline-none"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-6 h-6 rounded-full bg-[#1A1A1A] text-white flex items-center justify-center flex-shrink-0 text-xs">
                          <Check size={14} />
                        </div>
                        <span className="font-medium text-[#1A1A1A]">Estudo de cores e tipografia</span>
                      </div>
                      <ChevronDown size={18} className={`text-gray-400 transition-transform ${activeAccordion === "cores" ? "rotate-180 text-[#C5A059]" : ""}`} />
                    </button>

                    <AnimatePresence>
                      {activeAccordion === "cores" && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="px-4 pb-5 pt-1 bg-[#FDFBF7] border-t border-[#F0ECE4]"
                        >
                          <p className="text-xs text-[#6A625C] mb-4">
                            Paleta mineral refinada combinando força (Carvão e Ouro Matte) com acolhimento (Areia e Terracota).
                          </p>
                          {/* Color Swatches */}
                          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-4">
                            <div className="bg-[#1A1A1A] text-white p-3 rounded-xl text-center">
                              <span className="block text-xs font-bold">Carvão</span>
                              <span className="text-[10px] opacity-70 font-mono">#1A1A1A</span>
                            </div>
                            <div className="bg-[#E8E5DF] text-[#1A1A1A] p-3 rounded-xl text-center border border-black/5">
                              <span className="block text-xs font-bold">Areia</span>
                              <span className="text-[10px] opacity-70 font-mono">#E8E5DF</span>
                            </div>
                            <div className="bg-[#C5A059] text-white p-3 rounded-xl text-center">
                              <span className="block text-xs font-bold">Ouro Matte</span>
                              <span className="text-[10px] opacity-90 font-mono">#C5A059</span>
                            </div>
                            <div className="bg-[#B83A14] text-white p-3 rounded-xl text-center">
                              <span className="block text-xs font-bold">Terracota</span>
                              <span className="text-[10px] opacity-90 font-mono">#B83A14</span>
                            </div>
                          </div>
                          <button
                            onClick={() => setActiveModal({
                              title: "Estudo de Cores & Tipografia",
                              category: "Identidade Visual",
                              description: "A combinação entre o peso visual do tom carvão e o refinamento do ouro matte garante autoridade imediata sem perder a acessibilidade.",
                              content: (
                                <div className="space-y-4">
                                  <div className="bg-[#1A1A1A] p-6 rounded-2xl text-center text-white">
                                    <h4 className="font-serif text-2xl tracking-[0.2em] text-[#C5A059] mb-2">ONYX</h4>
                                    <p className="text-xs text-gray-300 font-sans tracking-widest uppercase">Tipografia Display com Serifa Geométrica</p>
                                  </div>
                                  <div className="p-4 bg-gray-50 rounded-xl text-xs text-gray-600 space-y-2">
                                    <p><strong>Hierarquia Primária:</strong> Fontes Serifadas para Títulos Elegantes</p>
                                    <p><strong>Hierarquia Secundária:</strong> Sans-Serif Neutra para Leitura Confortável</p>
                                  </div>
                                </div>
                              )
                            })}
                            className="text-xs font-semibold text-[#C5A059] hover:underline flex items-center gap-1"
                          >
                            <span>Ver aplicação detalhada</span>
                            <Maximize2 size={12} />
                          </button>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Item 2: Criação do logotipo */}
                  <div className="border border-[#F0ECE4] rounded-2xl overflow-hidden">
                    <button
                      onClick={() => toggleAccordion("logo")}
                      aria-expanded={activeAccordion === "logo"}
                      className="w-full flex items-center justify-between p-4 text-left hover:bg-[#FDFBF7] transition-colors focus:outline-none"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-6 h-6 rounded-full bg-[#1A1A1A] text-white flex items-center justify-center flex-shrink-0 text-xs">
                          <Check size={14} />
                        </div>
                        <span className="font-medium text-[#1A1A1A]">Criação do logotipo</span>
                      </div>
                      <ChevronDown size={18} className={`text-gray-400 transition-transform ${activeAccordion === "logo" ? "rotate-180 text-[#C5A059]" : ""}`} />
                    </button>

                    <AnimatePresence>
                      {activeAccordion === "logo" && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="px-4 pb-5 pt-1 bg-[#FDFBF7] border-t border-[#F0ECE4]"
                        >
                          <p className="text-xs text-[#6A625C] mb-4">
                            Símbolo circular autoral que representa disciplina, constância e a pedra Ônix em sua forma mineral.
                          </p>
                          <div className="grid grid-cols-2 gap-3 mb-4">
                            <div className="bg-[#1A1A1A] p-4 rounded-xl flex flex-col items-center justify-center">
                              <svg className="w-12 h-12 mb-2" viewBox="0 0 100 100" fill="none">
                                <circle cx="50" cy="50" r="38" stroke="#C5A059" strokeWidth="4" />
                                <path d="M35 35 L65 65 M65 35 L35 65" stroke="#B83A14" strokeWidth="4" strokeLinecap="round" />
                              </svg>
                              <span className="text-[10px] text-gray-400 font-mono uppercase tracking-widest">Fundo Escuro</span>
                            </div>
                            <div className="bg-white p-4 rounded-xl border border-black/5 flex flex-col items-center justify-center">
                              <svg className="w-12 h-12 mb-2" viewBox="0 0 100 100" fill="none">
                                <circle cx="50" cy="50" r="38" stroke="#1A1A1A" strokeWidth="4" />
                                <path d="M35 35 L65 65 M65 35 L35 65" stroke="#B83A14" strokeWidth="4" strokeLinecap="round" />
                              </svg>
                              <span className="text-[10px] text-gray-500 font-mono uppercase tracking-widest">Fundo Claro</span>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Item 3: Elementos gráficos */}
                  <div className="border border-[#F0ECE4] rounded-2xl overflow-hidden">
                    <button
                      onClick={() => toggleAccordion("elementos")}
                      aria-expanded={activeAccordion === "elementos"}
                      className="w-full flex items-center justify-between p-4 text-left hover:bg-[#FDFBF7] transition-colors focus:outline-none"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-6 h-6 rounded-full bg-[#1A1A1A] text-white flex items-center justify-center flex-shrink-0 text-xs">
                          <Check size={14} />
                        </div>
                        <span className="font-medium text-[#1A1A1A]">Elementos gráficos</span>
                      </div>
                      <ChevronDown size={18} className={`text-gray-400 transition-transform ${activeAccordion === "elementos" ? "rotate-180 text-[#C5A059]" : ""}`} />
                    </button>

                    <AnimatePresence>
                      {activeAccordion === "elementos" && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="px-4 pb-5 pt-1 bg-[#FDFBF7] border-t border-[#F0ECE4]"
                        >
                          <p className="text-xs text-[#6A625C]">
                            Padronagens de linhas finas, selos de garantia e texturas minerais que emolduram conteúdos do feed e stories.
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Item 4: Manual da marca */}
                  <div className="border border-[#F0ECE4] rounded-2xl overflow-hidden">
                    <button
                      onClick={() => toggleAccordion("manual")}
                      aria-expanded={activeAccordion === "manual"}
                      className="w-full flex items-center justify-between p-4 text-left hover:bg-[#FDFBF7] transition-colors focus:outline-none"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-6 h-6 rounded-full bg-[#1A1A1A] text-white flex items-center justify-center flex-shrink-0 text-xs">
                          <Check size={14} />
                        </div>
                        <span className="font-medium text-[#1A1A1A]">Manual da marca</span>
                      </div>
                      <ChevronDown size={18} className={`text-gray-400 transition-transform ${activeAccordion === "manual" ? "rotate-180 text-[#C5A059]" : ""}`} />
                    </button>

                    <AnimatePresence>
                      {activeAccordion === "manual" && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="px-4 pb-5 pt-1 bg-[#FDFBF7] border-t border-[#F0ECE4]"
                        >
                          <p className="text-xs text-[#6A625C]">
                            Documento orientador contendo regras de aplicação de logotipo, margens de segurança, proibições de uso e códigos de cor.
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Item 5: Templates para Instagram */}
                  <div className="border border-[#F0ECE4] rounded-2xl overflow-hidden">
                    <button
                      onClick={() => toggleAccordion("templates_id")}
                      aria-expanded={activeAccordion === "templates_id"}
                      className="w-full flex items-center justify-between p-4 text-left hover:bg-[#FDFBF7] transition-colors focus:outline-none"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-6 h-6 rounded-full bg-[#1A1A1A] text-white flex items-center justify-center flex-shrink-0 text-xs">
                          <Check size={14} />
                        </div>
                        <span className="font-medium text-[#1A1A1A]">Templates para Instagram</span>
                      </div>
                      <ChevronDown size={18} className={`text-gray-400 transition-transform ${activeAccordion === "templates_id" ? "rotate-180 text-[#C5A059]" : ""}`} />
                    </button>

                    <AnimatePresence>
                      {activeAccordion === "templates_id" && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="px-4 pb-5 pt-1 bg-[#FDFBF7] border-t border-[#F0ECE4]"
                        >
                          <p className="text-xs text-[#6A625C]">
                            Padrões visuais prontos para capas de carrossel, frases motivacionais e divulgação de treinos com identidade integrada.
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </div>

              {/* CATEGORIA 2: Instagram Estratégico */}
              <div className="bg-white rounded-3xl p-8 border border-[#E5E0D8] shadow-sm">
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-[#F0ECE4]">
                  <div className="w-10 h-10 rounded-xl bg-[#C5A059]/15 text-[#8C6D2D] flex items-center justify-center">
                    <Instagram size={20} />
                  </div>
                  <h3 className="text-2xl font-display font-bold text-[#1A1A1A]">
                    📱 Instagram Estratégico
                  </h3>
                </div>

                <div className="space-y-3">
                  {/* Item 1: Diagnóstico do perfil */}
                  <div className="border border-[#F0ECE4] rounded-2xl overflow-hidden">
                    <button
                      onClick={() => toggleAccordion("diagnostico")}
                      aria-expanded={activeAccordion === "diagnostico"}
                      className="w-full flex items-center justify-between p-4 text-left hover:bg-[#FDFBF7] transition-colors focus:outline-none"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-6 h-6 rounded-full bg-[#1A1A1A] text-white flex items-center justify-center flex-shrink-0 text-xs">
                          <Check size={14} />
                        </div>
                        <span className="font-medium text-[#1A1A1A]">Diagnóstico do perfil</span>
                      </div>
                      <ChevronDown size={18} className={`text-gray-400 transition-transform ${activeAccordion === "diagnostico" ? "rotate-180 text-[#C5A059]" : ""}`} />
                    </button>

                    <AnimatePresence>
                      {activeAccordion === "diagnostico" && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="px-4 pb-5 pt-1 bg-[#FDFBF7] border-t border-[#F0ECE4]"
                        >
                          <p className="text-xs text-[#6A625C]">
                            Mapeamento dos pontos cego de contato, clareza na proposta de valor e eliminação de distrações que travavam novas consultorias.
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Item 2: Bio estratégica (Com demonstração Antes/Depois!) */}
                  <div className="border border-[#F0ECE4] rounded-2xl overflow-hidden">
                    <button
                      onClick={() => toggleAccordion("bio")}
                      aria-expanded={activeAccordion === "bio"}
                      className="w-full flex items-center justify-between p-4 text-left hover:bg-[#FDFBF7] transition-colors focus:outline-none"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-6 h-6 rounded-full bg-[#1A1A1A] text-white flex items-center justify-center flex-shrink-0 text-xs">
                          <Check size={14} />
                        </div>
                        <span className="font-medium text-[#1A1A1A]">Bio estratégica</span>
                      </div>
                      <ChevronDown size={18} className={`text-gray-400 transition-transform ${activeAccordion === "bio" ? "rotate-180 text-[#C5A059]" : ""}`} />
                    </button>

                    <AnimatePresence>
                      {activeAccordion === "bio" && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="px-4 pb-5 pt-1 bg-[#FDFBF7] border-t border-[#F0ECE4]"
                        >
                          <p className="text-xs text-[#6A625C] mb-4">
                            Reformulação completa do texto de apresentação focado em conversão e autoridade:
                          </p>

                          {/* Demonstração ANTES vs DEPOIS */}
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
                            <div className="p-3 bg-red-50 border border-red-100 rounded-xl">
                              <span className="text-[10px] font-bold text-red-600 uppercase tracking-widest block mb-1">
                                Antes
                              </span>
                              <p className="text-xs text-gray-700 italic">
                                "Personal trainer 🏋️‍♂️ Treinos presenciais e consultoria online. Chama no direct!"
                              </p>
                            </div>
                            <div className="p-3 bg-emerald-50 border border-emerald-100 rounded-xl">
                              <span className="text-[10px] font-bold text-emerald-700 uppercase tracking-widest block mb-1">
                                Depois
                              </span>
                              <p className="text-xs text-gray-800 font-medium leading-tight">
                                Onyx | Personal Trainer<br />
                                ✦ Treinamento de Força &amp; Performance<br />
                                ✦ Protocolos Individuais de Saúde<br />
                                👇 Agende sua consultoria exclusiva
                              </p>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Item 3: Capas para destaques */}
                  <div className="border border-[#F0ECE4] rounded-2xl overflow-hidden">
                    <button
                      onClick={() => toggleAccordion("capas")}
                      aria-expanded={activeAccordion === "capas"}
                      className="w-full flex items-center justify-between p-4 text-left hover:bg-[#FDFBF7] transition-colors focus:outline-none"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-6 h-6 rounded-full bg-[#1A1A1A] text-white flex items-center justify-center flex-shrink-0 text-xs">
                          <Check size={14} />
                        </div>
                        <span className="font-medium text-[#1A1A1A]">Capas para destaques</span>
                      </div>
                      <ChevronDown size={18} className={`text-gray-400 transition-transform ${activeAccordion === "capas" ? "rotate-180 text-[#C5A059]" : ""}`} />
                    </button>

                    <AnimatePresence>
                      {activeAccordion === "capas" && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="px-4 pb-5 pt-1 bg-[#FDFBF7] border-t border-[#F0ECE4]"
                        >
                          <p className="text-xs text-[#6A625C]">
                            Símbolos minimalistas em dourado sobre fundo carvão organizados em: Comece Aqui, Resultados, Metodologia e Dúvidas.
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Item 4: Organização dos destaques */}
                  <div className="border border-[#F0ECE4] rounded-2xl overflow-hidden">
                    <button
                      onClick={() => toggleAccordion("org_destaques")}
                      aria-expanded={activeAccordion === "org_destaques"}
                      className="w-full flex items-center justify-between p-4 text-left hover:bg-[#FDFBF7] transition-colors focus:outline-none"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-6 h-6 rounded-full bg-[#1A1A1A] text-white flex items-center justify-center flex-shrink-0 text-xs">
                          <Check size={14} />
                        </div>
                        <span className="font-medium text-[#1A1A1A]">Organização dos destaques</span>
                      </div>
                      <ChevronDown size={18} className={`text-gray-400 transition-transform ${activeAccordion === "org_destaques" ? "rotate-180 text-[#C5A059]" : ""}`} />
                    </button>

                    <AnimatePresence>
                      {activeAccordion === "org_destaques" && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="px-4 pb-5 pt-1 bg-[#FDFBF7] border-t border-[#F0ECE4]"
                        >
                          <p className="text-xs text-[#6A625C]">
                            Roteiro de fixação para que novos visitantes entendam o método nos primeiros 30 segundos.
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Item 5: Calendário de conteúdo */}
                  <div className="border border-[#F0ECE4] rounded-2xl overflow-hidden">
                    <button
                      onClick={() => toggleAccordion("calendario")}
                      aria-expanded={activeAccordion === "calendario"}
                      className="w-full flex items-center justify-between p-4 text-left hover:bg-[#FDFBF7] transition-colors focus:outline-none"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-6 h-6 rounded-full bg-[#1A1A1A] text-white flex items-center justify-center flex-shrink-0 text-xs">
                          <Check size={14} />
                        </div>
                        <span className="font-medium text-[#1A1A1A]">Calendário de conteúdo</span>
                      </div>
                      <ChevronDown size={18} className={`text-gray-400 transition-transform ${activeAccordion === "calendario" ? "rotate-180 text-[#C5A059]" : ""}`} />
                    </button>

                    <AnimatePresence>
                      {activeAccordion === "calendario" && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="px-4 pb-5 pt-1 bg-[#FDFBF7] border-t border-[#F0ECE4]"
                        >
                          <p className="text-xs text-[#6A625C]">
                            Cronograma de publicações cobrindo os pilares de Educação, Demonstração Técnica, Bastidores e Prova Social.
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Item 6: Templates Canva */}
                  <div className="border border-[#F0ECE4] rounded-2xl overflow-hidden">
                    <button
                      onClick={() => toggleAccordion("canva")}
                      aria-expanded={activeAccordion === "canva"}
                      className="w-full flex items-center justify-between p-4 text-left hover:bg-[#FDFBF7] transition-colors focus:outline-none"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-6 h-6 rounded-full bg-[#1A1A1A] text-white flex items-center justify-center flex-shrink-0 text-xs">
                          <Check size={14} />
                        </div>
                        <span className="font-medium text-[#1A1A1A]">Templates Canva</span>
                      </div>
                      <ChevronDown size={18} className={`text-gray-400 transition-transform ${activeAccordion === "canva" ? "rotate-180 text-[#C5A059]" : ""}`} />
                    </button>

                    <AnimatePresence>
                      {activeAccordion === "canva" && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="px-4 pb-5 pt-1 bg-[#FDFBF7] border-t border-[#F0ECE4]"
                        >
                          <p className="text-xs text-[#6A625C]">
                            Biblioteca editável no Canva organizada por pastas para fácil atualização autônoma pela própria cliente.
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* 5. BASTIDORES DO PROCESSO                                 */}
        {/* ========================================================= */}
        <section className="py-20 md:py-28 bg-[#F7F4EE]">
          <div className="section-container">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
              <div>
                <span className="text-xs font-semibold uppercase tracking-widest text-[#C5A059] block mb-2">
                  Construção Autoral
                </span>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-[#1A1A1A]">
                  Bastidores do processo
                </h2>
              </div>
              <p className="text-xs text-[#8C7A6B] mt-2 md:mt-0 font-medium">
                Deslize horizontalmente para visualizar os rascunhos e estudos
              </p>
            </div>

            {/* Galeria Horizontal */}
            <div className="flex gap-6 overflow-x-auto pb-6 scrollbar-thin scrollbar-thumb-[#C5A059]/30 snap-x snap-mandatory">
              {/* Item 1: Moodboard */}
              <div className="min-w-[280px] sm:min-w-[340px] snap-start bg-white rounded-2xl p-5 border border-[#E5E0D8] shadow-sm flex flex-col justify-between">
                <div>
                  <div className="h-48 bg-[#1A1A1A] rounded-xl mb-4 p-4 flex flex-col justify-between relative overflow-hidden">
                    <span className="text-[10px] font-mono uppercase text-[#C5A059] tracking-widest">Estudo #01</span>
                    <div className="flex justify-around items-center">
                      <div className="w-12 h-12 rounded-full border border-[#C5A059]" />
                      <div className="w-10 h-10 bg-[#C5A059]/20 rounded" />
                      <div className="w-8 h-8 bg-[#B83A14]/30 rounded-full" />
                    </div>
                    <span className="text-[10px] text-gray-400 font-sans">Moodboard Mineral &amp; Arquitetura</span>
                  </div>
                  <h3 className="font-display font-bold text-base text-[#1A1A1A] mb-1">Moodboard &amp; Conceito</h3>
                  <p className="text-xs text-[#6A625C]">
                    Inspirações visuais unindo arquitetura minimalista, força e tons minerais.
                  </p>
                </div>
              </div>

              {/* Item 2: Estudos de Cores */}
              <div className="min-w-[280px] sm:min-w-[340px] snap-start bg-white rounded-2xl p-5 border border-[#E5E0D8] shadow-sm flex flex-col justify-between">
                <div>
                  <div className="h-48 bg-[#E8E5DF] rounded-xl mb-4 p-4 flex flex-col justify-between relative">
                    <span className="text-[10px] font-mono uppercase text-[#1A1A1A] tracking-widest">Estudo #02</span>
                    <div className="grid grid-cols-2 gap-2 my-auto">
                      <div className="h-10 bg-[#1A1A1A] rounded flex items-center justify-center text-white text-[10px] font-mono">#1A1A1A</div>
                      <div className="h-10 bg-[#C5A059] rounded flex items-center justify-center text-white text-[10px] font-mono">#C5A059</div>
                      <div className="h-10 bg-[#B83A14] rounded flex items-center justify-center text-white text-[10px] font-mono">#B83A14</div>
                      <div className="h-10 bg-[#E8E5DF] border border-black/10 rounded flex items-center justify-center text-[#1A1A1A] text-[10px] font-mono">#E8E5DF</div>
                    </div>
                    <span className="text-[10px] text-[#1A1A1A]/70 font-sans">Paleta de Contraste</span>
                  </div>
                  <h3 className="font-display font-bold text-base text-[#1A1A1A] mb-1">Estudos de Cores</h3>
                  <p className="text-xs text-[#6A625C]">
                    Busca pelo equilíbrio entre a solidez do carvão e o acolhimento do areia.
                  </p>
                </div>
              </div>

              {/* Item 3: Testes de Tipografia */}
              <div className="min-w-[280px] sm:min-w-[340px] snap-start bg-white rounded-2xl p-5 border border-[#E5E0D8] shadow-sm flex flex-col justify-between">
                <div>
                  <div className="h-48 bg-[#1A1A1A] rounded-xl mb-4 p-4 flex flex-col justify-center items-center text-center text-white">
                    <span className="font-serif text-2xl text-[#C5A059] tracking-widest mb-1">ONYX</span>
                    <span className="text-[10px] font-mono tracking-widest uppercase text-gray-400">Aa Bb Cc Dd Ee Ff</span>
                    <span className="text-[9px] text-[#B83A14] uppercase tracking-[0.3em] mt-3">Personal Training</span>
                  </div>
                  <h3 className="font-display font-bold text-base text-[#1A1A1A] mb-1">Testes de Tipografia</h3>
                  <p className="text-xs text-[#6A625C]">
                    Experimentos com serifa refinada e sans-serif geométrica para garantir autoridade.
                  </p>
                </div>
              </div>

              {/* Item 4: Wireframes & Rascunhos */}
              <div className="min-w-[280px] sm:min-w-[340px] snap-start bg-white rounded-2xl p-5 border border-[#E5E0D8] shadow-sm flex flex-col justify-between">
                <div>
                  <div className="h-48 bg-[#F9F7F3] border border-[#E5E0D8] rounded-xl mb-4 p-4 flex flex-col justify-between">
                    <span className="text-[10px] font-mono uppercase text-[#8C6D2D]">Wireframe &amp; Layout</span>
                    <div className="space-y-2 my-auto">
                      <div className="h-2 bg-[#1A1A1A]/20 rounded w-3/4" />
                      <div className="h-2 bg-[#1A1A1A]/10 rounded w-1/2" />
                      <div className="h-8 bg-[#C5A059]/20 rounded w-full border border-[#C5A059]/40" />
                    </div>
                    <span className="text-[10px] text-gray-500 font-sans">Jornada do Visitante</span>
                  </div>
                  <h3 className="font-display font-bold text-base text-[#1A1A1A] mb-1">Wireframes &amp; Rascunhos</h3>
                  <p className="text-xs text-[#6A625C]">
                    Estruturação da jornada visual para o perfil e canais de agendamento rápido.
                  </p>
                </div>
              </div>

              {/* Item 5: Organização do Feed */}
              <div className="min-w-[280px] sm:min-w-[340px] snap-start bg-white rounded-2xl p-5 border border-[#E5E0D8] shadow-sm flex flex-col justify-between">
                <div>
                  <div className="h-48 bg-[#1A1A1A] rounded-xl mb-4 p-3 flex flex-col justify-center items-center">
                    <div className="grid grid-cols-3 gap-1.5 w-full max-w-[200px]">
                      {[1, 2, 3, 4, 5, 6].map((i) => (
                        <div key={i} className={`h-10 rounded ${i % 2 === 0 ? "bg-[#C5A059]/20 border border-[#C5A059]/40" : "bg-white/10"}`} />
                      ))}
                    </div>
                  </div>
                  <h3 className="font-display font-bold text-base text-[#1A1A1A] mb-1">Organização do Feed</h3>
                  <p className="text-xs text-[#6A625C]">
                    Montagem do grid no Canva para garantir autonomia diária na criação de conteúdo.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* 6. RESULTADO FINAL                                        */}
        {/* ========================================================= */}
        <section className="py-20 md:py-28 bg-[#FDFBF7]">
          <div className="section-container">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#C5A059] block mb-2">
                Apresentação Visual
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-[#1A1A1A] mb-4">
                Resultado final
              </h2>
              <p className="text-[#6A625C] text-sm">
                Confira como os elementos ganham vida na comunicação oficial da marca.
              </p>
            </div>

            {/* Grande Galeria de Mockups */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              
              {/* Display 1: Logotipo Principal em Destaque */}
              <div 
                onClick={() => setLightboxImage({
                  url: "",
                  title: "Logotipo Oficial ONYX em Fundo Mineral Escuro"
                })}
                className="lg:col-span-2 bg-[#1A1A1A] rounded-3xl p-8 md:p-12 text-white relative overflow-hidden group cursor-pointer border border-black/10 min-h-[320px] flex flex-col justify-between"
              >
                <div className="absolute top-4 right-4 bg-white/10 px-3 py-1 rounded-full text-[10px] font-mono tracking-widest text-[#C5A059]">
                  MARCA PRINCIPAL
                </div>

                <div className="my-auto text-center flex flex-col items-center">
                  <svg className="w-20 h-20 mb-4 text-[#C5A059] group-hover:scale-105 transition-transform" viewBox="0 0 100 100" fill="none">
                    <circle cx="50" cy="50" r="38" stroke="currentColor" strokeWidth="4" />
                    <path d="M35 35 L65 65 M65 35 L35 65" stroke="#B83A14" strokeWidth="4" strokeLinecap="round" />
                  </svg>
                  <h3 className="font-serif text-3xl md:text-4xl font-bold tracking-[0.25em] text-[#C5A059]">
                    ONYX
                  </h3>
                  <span className="text-[10px] md:text-xs tracking-[0.35em] text-gray-400 uppercase mt-2 font-mono">
                    PERSONAL TRAINER
                  </span>
                </div>

                <div className="flex justify-between items-end text-xs text-gray-400 pt-4 border-t border-white/10">
                  <span>Identidade Visual Autoral</span>
                  <span className="text-[#C5A059] font-medium flex items-center gap-1 group-hover:underline">
                    Ampliar visualização <Maximize2 size={12} />
                  </span>
                </div>
              </div>

              {/* Display 2: Cartão de Visita Digital / Físico */}
              <div className="bg-[#E8E5DF] rounded-3xl p-8 text-[#1A1A1A] flex flex-col justify-between border border-[#E5E0D8]">
                <span className="text-[10px] font-mono uppercase text-[#8C6D2D] tracking-widest block mb-4">
                  Cartão &amp; Assinatura
                </span>

                <div className="bg-white p-6 rounded-2xl shadow-md border border-black/5 text-center my-auto">
                  <svg className="w-10 h-10 mx-auto mb-2" viewBox="0 0 100 100" fill="none">
                    <circle cx="50" cy="50" r="38" stroke="#1A1A1A" strokeWidth="4" />
                    <path d="M35 35 L65 65 M65 35 L35 65" stroke="#B83A14" strokeWidth="4" strokeLinecap="round" />
                  </svg>
                  <h4 className="font-serif text-lg font-bold tracking-widest text-[#1A1A1A]">ONYX</h4>
                  <span className="text-[9px] text-[#B83A14] font-mono tracking-widest block mt-0.5">PERSONAL TRAINER</span>
                  <div className="mt-4 pt-3 border-t border-gray-100 text-[10px] text-gray-500 font-mono">
                    consultoria@onyxpersonal.com.br
                  </div>
                </div>

                <p className="text-xs text-[#5A524C] mt-4">
                  Papelaria refinada e assinatura digital para e-mails e contatos corporativos.
                </p>
              </div>

              {/* Display 3: Capas de Destaques Instagram */}
              <div className="bg-white rounded-3xl p-8 border border-[#E5E0D8] shadow-sm flex flex-col justify-between">
                <span className="text-[10px] font-mono uppercase text-[#C5A059] tracking-widest block mb-4">
                  Destaques Instagram
                </span>

                <div className="flex justify-around items-center my-auto py-4">
                  {["COMECE AQUI", "TREINOS", "RESULTADOS", "MÉTODO"].map((item, idx) => (
                    <div key={idx} className="flex flex-col items-center">
                      <div className="w-12 h-12 rounded-full bg-[#1A1A1A] border-2 border-[#C5A059] flex items-center justify-center text-[#C5A059] text-xs font-bold mb-1">
                        ✦
                      </div>
                      <span className="text-[8px] font-mono text-gray-500 uppercase">{item.split(" ")[0]}</span>
                    </div>
                  ))}
                </div>

                <p className="text-xs text-[#5A524C]">
                  Capas padronizadas que trazem organização imediata ao visitar o perfil.
                </p>
              </div>

              {/* Display 4: Layout de Carrossel Instagram */}
              <div className="lg:col-span-2 bg-[#1A1A1A] rounded-3xl p-8 text-white border border-black/10 flex flex-col justify-between">
                <span className="text-[10px] font-mono uppercase text-[#C5A059] tracking-widest block mb-4">
                  Templates de Conteúdo Canva
                </span>

                <div className="grid grid-cols-3 gap-3 my-auto py-2">
                  <div className="bg-[#2A2A2A] p-4 rounded-xl text-center border border-white/5">
                    <span className="text-[#C5A059] text-xs font-display font-bold block mb-1">Capa Educativa</span>
                    <p className="text-[10px] text-gray-400">3 erros comuns ao buscar hipertrofia</p>
                  </div>
                  <div className="bg-[#2A2A2A] p-4 rounded-xl text-center border border-white/5">
                    <span className="text-[#B83A14] text-xs font-display font-bold block mb-1">Frase &amp; Valor</span>
                    <p className="text-[10px] text-gray-400">Constância supera intensidade</p>
                  </div>
                  <div className="bg-[#2A2A2A] p-4 rounded-xl text-center border border-white/5">
                    <span className="text-white text-xs font-display font-bold block mb-1">Prova Social</span>
                    <p className="text-[10px] text-gray-400">Evolução de 12 semanas</p>
                  </div>
                </div>

                <p className="text-xs text-gray-400 mt-4">
                  Padrões visuais versáteis que mantêm a elegância em qualquer formato de post.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* 7. O QUE FOI ENTREGUE (RESUMO)                            */}
        {/* ========================================================= */}
        <section className="py-20 md:py-28 bg-[#F7F4EE]">
          <div className="section-container max-w-4xl">
            <div className="bg-white rounded-3xl p-8 md:p-12 border border-[#E5E0D8] shadow-sm">
              <div className="text-center mb-8">
                <span className="text-xs font-semibold uppercase tracking-widest text-[#C5A059] block mb-2">
                  Resumo Executivo
                </span>
                <h2 className="text-2xl md:text-3xl font-display font-bold text-[#1A1A1A]">
                  O que foi entregue
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4 border-t border-[#F0ECE4]">
                {/* Entregas: Identidade Visual */}
                <div className="space-y-3">
                  <h3 className="font-display font-bold text-lg text-[#1A1A1A] flex items-center gap-2">
                    <Palette size={18} className="text-[#C5A059]" />
                    <span>Identidade Visual</span>
                  </h3>
                  <ul className="space-y-2 text-sm text-[#5A524C]">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={16} className="text-[#C5A059] flex-shrink-0" />
                      <span>Logotipo autoral e variações</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={16} className="text-[#C5A059] flex-shrink-0" />
                      <span>Paleta de cores mineral técnica</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={16} className="text-[#C5A059] flex-shrink-0" />
                      <span>Tipografia de autoridade</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={16} className="text-[#C5A059] flex-shrink-0" />
                      <span>Manual simplificado da marca</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={16} className="text-[#C5A059] flex-shrink-0" />
                      <span>Templates gráficos institucionais</span>
                    </li>
                  </ul>
                </div>

                {/* Entregas: Instagram Estratégico */}
                <div className="space-y-3">
                  <h3 className="font-display font-bold text-lg text-[#1A1A1A] flex items-center gap-2">
                    <Instagram size={18} className="text-[#C5A059]" />
                    <span>Instagram Estratégico</span>
                  </h3>
                  <ul className="space-y-2 text-sm text-[#5A524C]">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={16} className="text-[#C5A059] flex-shrink-0" />
                      <span>Bio estratégica focada em conversão</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={16} className="text-[#C5A059] flex-shrink-0" />
                      <span>Destaques organizados por narrativa</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={16} className="text-[#C5A059] flex-shrink-0" />
                      <span>Calendário inicial de conteúdo</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={16} className="text-[#C5A059] flex-shrink-0" />
                      <span>Templates editáveis no Canva</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* 8. CTA (CHAMADA PARA AÇÃO)                                 */}
        {/* ========================================================= */}
        <section className="py-24 md:py-32 bg-[#1A1A1A] text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#C5A059]/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="section-container relative z-10 text-center max-w-3xl mx-auto">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#C5A059] block mb-3">
              Construa sua Presença Digital
            </span>

            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6 text-white leading-tight">
              Gostou deste projeto?
            </h2>

            <p className="text-lg md:text-xl text-gray-300 font-light leading-relaxed mb-10">
              Cada marca nasce de uma história diferente. Podemos construir uma solução estratégica para o seu negócio também.
            </p>

            <a
              href="https://wa.me/5513991598181?text=Ol%C3%A1!%20Gostei%20muito%20do%20projeto%20da%20Onyx%20Personal%20Trainer%20e%20gostaria%20de%20conversar%20sobre%20o%20meu."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-9 py-5 bg-[#C5A059] text-white font-semibold rounded-full text-lg hover:bg-[#b08b46] transition-all shadow-xl shadow-[#C5A059]/20 group"
            >
              <span>Conversar sobre meu projeto</span>
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </section>
      </main>

      {/* ========================================================= */}
      {/* MODAL DE DETALHES                                         */}
      {/* ========================================================= */}
      <AnimatePresence>
        {activeModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white rounded-3xl p-8 max-w-lg w-full shadow-2xl relative border border-[#E5E0D8]"
            >
              <button
                onClick={() => setActiveModal(null)}
                className="absolute top-4 right-4 p-2 text-gray-400 hover:text-[#1A1A1A] rounded-full hover:bg-gray-100 transition-colors"
                aria-label="Fechar modal"
              >
                <X size={20} />
              </button>

              <span className="text-[10px] font-mono uppercase tracking-widest text-[#C5A059] block mb-1">
                {activeModal.category}
              </span>
              <h3 className="text-2xl font-display font-bold text-[#1A1A1A] mb-3">
                {activeModal.title}
              </h3>
              <p className="text-sm text-[#5A524C] mb-6 leading-relaxed">
                {activeModal.description}
              </p>

              <div className="mb-6">
                {activeModal.content}
              </div>

              <button
                onClick={() => setActiveModal(null)}
                className="w-full py-3 bg-[#1A1A1A] text-white font-medium rounded-xl hover:bg-[#C5A059] transition-colors text-sm"
              >
                Fechar janela
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* LIGHTBOX FOR IMAGES */}
      <AnimatePresence>
        {lightboxImage && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="relative max-w-3xl w-full text-center text-white"
            >
              <button
                onClick={() => setLightboxImage(null)}
                className="absolute -top-12 right-0 p-2 text-white hover:text-[#C5A059] transition-colors"
                aria-label="Fechar ampliação"
              >
                <X size={24} />
              </button>

              <div className="bg-[#1A1A1A] p-12 rounded-3xl border border-white/10 flex flex-col items-center justify-center min-h-[350px]">
                <svg className="w-28 h-28 mb-4 text-[#C5A059]" viewBox="0 0 100 100" fill="none">
                  <circle cx="50" cy="50" r="38" stroke="currentColor" strokeWidth="4" />
                  <path d="M35 35 L65 65 M65 35 L35 65" stroke="#B83A14" strokeWidth="4" strokeLinecap="round" />
                </svg>
                <h4 className="font-serif text-3xl font-bold tracking-[0.25em] text-[#C5A059] mb-2">ONYX</h4>
                <p className="text-sm text-gray-300 font-mono tracking-widest">{lightboxImage.title}</p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
};

export default OnyxCaseStudy;
