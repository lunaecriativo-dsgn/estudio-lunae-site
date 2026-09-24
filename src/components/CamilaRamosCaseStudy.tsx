import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { 
  ChevronLeft, 
  ChevronDown, 
  Check, 
  Sparkles, 
  ArrowRight, 
  X, 
  Search, 
  Target, 
  Layers, 
  Palette, 
  Heart,
  ShieldCheck,
  Instagram,
  CheckCircle2
} from "lucide-react";
import Header from "./Header";
import Footer from "./Footer";

interface ModalData {
  title: string;
  category: string;
  description: string;
  content: React.ReactNode;
}

const CamilaRamosCaseStudy: React.FC = () => {
  const [activeAccordion, setActiveAccordion] = useState<string | null>("logo");
  const [activeModal, setActiveModal] = useState<ModalData | null>(null);

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
    <div className="min-h-screen bg-[#FAF9F6] text-[#4A3B4E] font-body selection:bg-[#8B5CF6] selection:text-white">
      <Header />

      <main className="pt-20">
        {/* ========================================================= */}
        {/* 1. HERO SECTION                                           */}
        {/* ========================================================= */}
        <section className="relative py-16 md:py-28 bg-gradient-to-b from-[#F3E8FF] to-[#FAF9F6] overflow-hidden">
          <div className="section-container relative z-10">
            <Link 
              to="/#projetos" 
              className="inline-flex items-center gap-2 text-[#8B5CF6] hover:text-[#2D1B33] transition-colors mb-8 font-medium text-sm group"
            >
              <ChevronLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
              <span>Voltar para Projetos</span>
            </Link>

            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#8B5CF6]/15 border border-[#8B5CF6]/30 text-[#6D28D9] text-xs font-semibold uppercase tracking-wider mb-4">
                <Sparkles size={13} className="text-[#8B5CF6]" />
                <span>Psicologia Infantil &amp; Saúde</span>
              </div>

              <h1 className="text-4xl md:text-6xl font-display font-normal text-[#2D1B33] tracking-wide leading-tight mb-6">
                Camila Ramos
              </h1>

              <p className="text-lg md:text-xl text-[#6B5B71] leading-relaxed mb-8 font-light">
                Identidade visual acolhedora e presença digital desenvolvidas para comunicar autoridade clínica, empatia e confiança.
              </p>

              <button
                onClick={() => scrollToSection("desafio")}
                className="inline-flex items-center gap-3 px-7 py-4 bg-[#2D1B33] text-white font-medium rounded-full text-base hover:bg-[#8B5CF6] transition-all shadow-lg shadow-black/5 group"
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
              className="mt-14 rounded-3xl overflow-hidden border border-[#D4C1EC]/30 bg-white shadow-2xl relative"
            >
              <div className="p-8 md:p-14 text-center relative overflow-hidden flex flex-col items-center justify-center min-h-[320px] md:min-h-[380px] bg-gradient-to-br from-[#F3E8FF] via-white to-[#FAF9F6]">
                <div className="relative z-10 flex flex-col items-center">
                  <div className="w-20 h-20 rounded-full bg-[#8B5CF6]/10 border-2 border-[#8B5CF6]/30 flex items-center justify-center mb-4 text-[#8B5CF6]">
                    <Heart size={38} />
                  </div>
                  <span className="font-serif text-3xl md:text-5xl font-bold tracking-tight text-[#2D1B33]">
                    Camila Ramos
                  </span>
                  <span className="text-xs tracking-[0.3em] text-[#8B5CF6] uppercase mt-2 font-mono font-semibold">
                    PSICOLOGIA INFANTIL &bull; ACOLHIMENTO &amp; CIÊNCIA
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* 2. O DESAFIO                                              */}
        {/* ========================================================= */}
        <section id="desafio" className="py-20 md:py-28 bg-[#FAF9F6]">
          <div className="section-container max-w-4xl">
            <div className="bg-white rounded-3xl p-8 md:p-14 border border-[#D4C1EC]/30 shadow-sm">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#8B5CF6] block mb-3">
                Contexto do Projeto
              </span>
              
              <h2 className="text-3xl md:text-4xl font-display font-normal text-[#2D1B33] mb-6">
                O ponto de partida
              </h2>

              <div className="space-y-4 text-base md:text-lg text-[#6B5B71] leading-relaxed font-light">
                <p>
                  A psicóloga Camila Ramos entrega um atendimento humanizado excepcional em ludoterapia e psicologia infantil, mas seu posicionamento digital ainda não transmitia a mesma segurança que os pais sentem no consultório.
                </p>
                <p>
                  Queríamos construir uma presença digital acolhedora que reduzisse a ansiedade do primeiro contato e facilitasse o agendamento de consultas.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* 3. NOSSA ESTRATÉGIA                                       */}
        {/* ========================================================= */}
        <section className="py-20 md:py-28 bg-[#F3E8FF]">
          <div className="section-container">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#8B5CF6] block mb-2">
                Metodologia
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-normal text-[#2D1B33]">
                Nossa estratégia
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl p-8 border border-[#D4C1EC]/30 shadow-sm hover:border-[#8B5CF6]/40 transition-all group">
                <div className="w-12 h-12 rounded-xl bg-[#8B5CF6]/10 text-[#8B5CF6] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Search size={22} />
                </div>
                <h3 className="text-xl font-display font-normal text-[#2D1B33] mb-3">
                  Pesquisa
                </h3>
                <p className="text-[#6B5B71] text-sm leading-relaxed">
                  Entendemos as dúvidas, receios e necessidades dos pais ao buscar orientação psicológica para os filhos.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 border border-[#D4C1EC]/30 shadow-sm hover:border-[#8B5CF6]/40 transition-all group">
                <div className="w-12 h-12 rounded-xl bg-[#8B5CF6]/10 text-[#8B5CF6] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Target size={22} />
                </div>
                <h3 className="text-xl font-display font-normal text-[#2D1B33] mb-3">
                  Posicionamento
                </h3>
                <p className="text-[#6B5B71] text-sm leading-relaxed">
                  Definimos a linguagem de afeto com respaldo científico, paleta em tons de lavanda e off-white.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 border border-[#D4C1EC]/30 shadow-sm hover:border-[#8B5CF6]/40 transition-all group">
                <div className="w-12 h-12 rounded-xl bg-[#8B5CF6]/10 text-[#8B5CF6] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Layers size={22} />
                </div>
                <h3 className="text-xl font-display font-normal text-[#2D1B33] mb-3">
                  Execução
                </h3>
                <p className="text-[#6B5B71] text-sm leading-relaxed">
                  Transformamos o acolhimento em marca visual, bio estratégica e site intuitivo de agendamento.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* 4. ENTREGAS DO PROJETO                                   */}
        {/* ========================================================= */}
        <section className="py-20 md:py-28 bg-[#FAF9F6]">
          <div className="section-container">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#8B5CF6] block mb-2">
                Escopo Contratado
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-normal text-[#2D1B33] mb-4">
                Entregas do projeto
              </h2>
              <p className="text-[#6B5B71] text-sm">
                Clique em cada item para explorar as soluções desenvolvidas.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              
              {/* CATEGORIA 1: Identidade Visual */}
              <div className="bg-white rounded-3xl p-8 border border-[#D4C1EC]/30 shadow-sm">
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-100">
                  <div className="w-10 h-10 rounded-xl bg-[#8B5CF6]/15 text-[#8B5CF6] flex items-center justify-center">
                    <Palette size={20} />
                  </div>
                  <h3 className="text-2xl font-display font-normal text-[#2D1B33]">
                    🎨 Identidade Visual
                  </h3>
                </div>

                <div className="space-y-3">
                  <div className="border border-gray-100 rounded-2xl overflow-hidden">
                    <button
                      onClick={() => toggleAccordion("cores")}
                      className="w-full flex items-center justify-between p-4 text-left hover:bg-[#FAF9F6] transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-6 h-6 rounded-full bg-[#2D1B33] text-white flex items-center justify-center text-xs">
                          <Check size={14} />
                        </div>
                        <span className="font-medium text-[#2D1B33]">Estudo de cores e tipografia</span>
                      </div>
                      <ChevronDown size={18} className={`text-gray-400 transition-transform ${activeAccordion === "cores" ? "rotate-180 text-[#8B5CF6]" : ""}`} />
                    </button>

                    <AnimatePresence>
                      {activeAccordion === "cores" && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="px-4 pb-5 pt-1 bg-[#FAF9F6]"
                        >
                          <p className="text-xs text-[#6B5B71] mb-3">
                            Paleta suave equilibrando tons de roxo, lavanda e creme para transmitir calma e serenidade.
                          </p>
                          <div className="grid grid-cols-3 gap-2">
                            <div className="bg-[#8B5CF6] text-white p-2 rounded-lg text-center text-[10px]">Roxo Suave</div>
                            <div className="bg-[#D4C1EC] text-[#2D1B33] p-2 rounded-lg text-center text-[10px]">Lavanda</div>
                            <div className="bg-[#FAF9F6] text-[#2D1B33] p-2 border border-black/10 rounded-lg text-center text-[10px]">Off-white</div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  <div className="border border-gray-100 rounded-2xl overflow-hidden">
                    <button
                      onClick={() => toggleAccordion("logo")}
                      className="w-full flex items-center justify-between p-4 text-left hover:bg-[#FAF9F6] transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-6 h-6 rounded-full bg-[#2D1B33] text-white flex items-center justify-center text-xs">
                          <Check size={14} />
                        </div>
                        <span className="font-medium text-[#2D1B33]">Criação do logotipo</span>
                      </div>
                      <ChevronDown size={18} className={`text-gray-400 transition-transform ${activeAccordion === "logo" ? "rotate-180 text-[#8B5CF6]" : ""}`} />
                    </button>

                    <AnimatePresence>
                      {activeAccordion === "logo" && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="px-4 pb-5 pt-1 bg-[#FAF9F6]"
                        >
                          <p className="text-xs text-[#6B5B71]">
                            Símbolo em curvas fluidas combinando as iniciais C e R com a figura de um abraço acolhedor.
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </div>

              {/* CATEGORIA 2: Instagram & Conversão */}
              <div className="bg-white rounded-3xl p-8 border border-[#D4C1EC]/30 shadow-sm">
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-100">
                  <div className="w-10 h-10 rounded-xl bg-[#8B5CF6]/15 text-[#8B5CF6] flex items-center justify-center">
                    <Instagram size={20} />
                  </div>
                  <h3 className="text-2xl font-display font-normal text-[#2D1B33]">
                    📱 Presença Digital &amp; Agendamento
                  </h3>
                </div>

                <div className="space-y-3">
                  <div className="border border-gray-100 rounded-2xl overflow-hidden">
                    <button
                      onClick={() => toggleAccordion("bio")}
                      className="w-full flex items-center justify-between p-4 text-left hover:bg-[#FAF9F6] transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-6 h-6 rounded-full bg-[#2D1B33] text-white flex items-center justify-center text-xs">
                          <Check size={14} />
                        </div>
                        <span className="font-medium text-[#2D1B33]">Bio estratégica e destaques</span>
                      </div>
                      <ChevronDown size={18} className={`text-gray-400 transition-transform ${activeAccordion === "bio" ? "rotate-180 text-[#8B5CF6]" : ""}`} />
                    </button>

                    <AnimatePresence>
                      {activeAccordion === "bio" && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="px-4 pb-5 pt-1 bg-[#FAF9F6]"
                        >
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                            <div className="p-2 bg-red-50 text-red-700 rounded-lg"><strong>Antes:</strong> "Psicóloga de crianças e adolescentes. Atendimento presencial."</div>
                            <div className="p-2 bg-purple-50 text-purple-800 rounded-lg"><strong>Depois:</strong> "Camila Ramos | Psicologia Infantil 💜 Acolhimento emocional para crianças e orientação parental. Agende um acolhimento."</div>
                          </div>
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
        <section className="py-20 md:py-28 bg-[#F3E8FF]">
          <div className="section-container">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
              <div>
                <span className="text-xs font-semibold uppercase tracking-widest text-[#8B5CF6] block mb-2">
                  Construção
                </span>
                <h2 className="text-3xl md:text-4xl font-display font-normal text-[#2D1B33]">
                  Bastidores do processo
                </h2>
              </div>
            </div>

            <div className="flex gap-6 overflow-x-auto pb-6 scrollbar-thin scrollbar-thumb-[#8B5CF6]/30 snap-x snap-mandatory">
              <div className="min-w-[280px] sm:min-w-[320px] snap-start bg-white rounded-2xl p-5 border border-[#D4C1EC]/30 shadow-sm">
                <div className="h-44 bg-[#FAF9F6] rounded-xl mb-4 p-4 flex items-center justify-center text-center">
                  <Heart className="w-12 h-12 text-[#8B5CF6]" />
                </div>
                <h3 className="font-display font-normal text-base text-[#2D1B33] mb-1">Moodboard de Afeto</h3>
                <p className="text-xs text-[#6B5B71]">Texturas e cores que acalmam os sentidos.</p>
              </div>

              <div className="min-w-[280px] sm:min-w-[320px] snap-start bg-white rounded-2xl p-5 border border-[#D4C1EC]/30 shadow-sm">
                <div className="h-44 bg-[#F3E8FF] rounded-xl mb-4 p-4 flex items-center justify-center text-center">
                  <ShieldCheck className="w-12 h-12 text-[#8B5CF6]" />
                </div>
                <h3 className="font-display font-normal text-base text-[#2D1B33] mb-1">Tipografia Clínica</h3>
                <p className="text-xs text-[#6B5B71]">Combinação de serifa sofisticada e sans-serif acessível.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* 6. RESULTADO FINAL                                        */}
        {/* ========================================================= */}
        <section className="py-20 md:py-28 bg-[#FAF9F6]">
          <div className="section-container">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#8B5CF6] block mb-2">
                Apresentação Visual
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-normal text-[#2D1B33] mb-4">
                Resultado final
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-3xl border border-[#D4C1EC]/30 shadow-sm flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-mono text-[#8B5CF6] uppercase tracking-widest block mb-2">MARCA PRINCIPAL</span>
                  <div className="p-8 bg-[#F3E8FF] rounded-2xl text-center my-4">
                    <Heart className="w-12 h-12 text-[#8B5CF6] mx-auto mb-2" />
                    <h3 className="font-display text-2xl font-bold text-[#2D1B33]">Camila Ramos</h3>
                  </div>
                </div>
              </div>

              <div className="bg-[#2D1B33] text-white p-8 rounded-3xl shadow-sm flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-mono text-[#8B5CF6] uppercase tracking-widest block mb-2">ACOLHIMENTO DIGITAL</span>
                  <p className="text-sm text-gray-300 mt-2">Canal direto de conversão para tirar dúvidas com sensibilidade.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* 7. O QUE FOI ENTREGUE (RESUMO)                            */}
        {/* ========================================================= */}
        <section className="py-20 md:py-28 bg-[#F3E8FF]">
          <div className="section-container max-w-4xl">
            <div className="bg-white rounded-3xl p-8 md:p-12 border border-[#D4C1EC]/30 shadow-sm">
              <div className="text-center mb-8">
                <span className="text-xs font-semibold uppercase tracking-widest text-[#8B5CF6] block mb-2">
                  Resumo Executivo
                </span>
                <h2 className="text-2xl md:text-3xl font-display font-normal text-[#2D1B33]">
                  O que foi entregue
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4 border-t border-gray-100">
                <div className="space-y-3">
                  <h3 className="font-display font-normal text-lg text-[#2D1B33] flex items-center gap-2">
                    <Palette size={18} className="text-[#8B5CF6]" />
                    <span>Identidade Visual</span>
                  </h3>
                  <ul className="space-y-2 text-sm text-[#6B5B71]">
                    <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-[#8B5CF6]" /> Logotipo autoral e ícone</li>
                    <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-[#8B5CF6]" /> Paleta de cores lavanda</li>
                    <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-[#8B5CF6]" /> Manual simplificado</li>
                  </ul>
                </div>

                <div className="space-y-3">
                  <h3 className="font-display font-normal text-lg text-[#2D1B33] flex items-center gap-2">
                    <Instagram size={18} className="text-[#8B5CF6]" />
                    <span>Presença Digital</span>
                  </h3>
                  <ul className="space-y-2 text-sm text-[#6B5B71]">
                    <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-[#8B5CF6]" /> Bio e destaques organizados</li>
                    <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-[#8B5CF6]" /> Link e formulário direto no WhatsApp</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* 8. CTA                                                    */}
        {/* ========================================================= */}
        <section className="py-24 md:py-32 bg-[#2D1B33] text-white relative overflow-hidden">
          <div className="section-container relative z-10 text-center max-w-3xl mx-auto">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#8B5CF6] block mb-3">
              Construa sua Presença Digital
            </span>

            <h2 className="text-3xl md:text-5xl font-display font-normal mb-6 text-white leading-tight">
              Gostou deste projeto?
            </h2>

            <p className="text-lg md:text-xl text-gray-300 font-light leading-relaxed mb-10">
              Cada marca nasce de uma história diferente. Podemos construir uma solução estratégica para o seu negócio também.
            </p>

            <a
              href="https://wa.me/5513991598181?text=Ol%C3%A1!%20Gostei%20muito%20do%20projeto%20da%20Camila%20Ramos%20e%20gostaria%20de%20conversar%20sobre%20o%20meu."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-9 py-5 bg-[#8B5CF6] text-white font-semibold rounded-full text-lg hover:bg-[#7c4dff] transition-all shadow-xl group"
            >
              <span>Conversar sobre meu projeto</span>
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default CamilaRamosCaseStudy;
