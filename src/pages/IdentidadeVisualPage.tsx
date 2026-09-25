import React from "react";
import { Link } from "react-router-dom";
import { ChevronRight, Home, Sparkles, AlertCircle, CheckCircle2, ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const IdentidadeVisualPage = () => {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Identidade Visual Premium | Lunae",
    "description": "Criação de marcas completas, logotipos autorais, paletas de cores sofisticadas, tipografias, manual de identidade e templates estratégicos no Canva.",
    "brand": {
      "@type": "Brand",
      "name": "Lunae"
    }
  };

  return (
    <>
      <SEO 
        title="Identidade Visual Premium | Lunae Estúdio Criativo" 
        description="Seja reconhecida como referência máxima no seu nicho. Criamos logotipos, grafismos e manuais de marcas autênticos e memoráveis."
        schema={serviceSchema}
      />

      <div 
        className="min-h-screen relative paper-bg"
      >
        <div className="absolute inset-0 bg-background/[0.64] pointer-events-none" />
        
        <div className="relative z-10">
          <Header />
          
          <main id="main-content" className="pt-28 md:pt-36 pb-20 text-left">
            <div className="max-w-6xl mx-auto px-6">
              
              {/* Breadcrumbs */}
              <nav aria-label="Breadcrumb" className="mb-10 flex items-center gap-2 text-xs md:text-sm font-body text-muted-foreground">
                <Link to="/" className="hover:text-secondary flex items-center gap-1 transition-colors min-h-[44px] px-1 inline-flex items-center">
                  <Home size={14} />
                  Home
                </Link>
                <ChevronRight size={12} className="text-muted-foreground/50" />
                <Link to="/servicos" className="hover:text-secondary transition-colors px-1">
                  Serviços
                </Link>
                <ChevronRight size={12} className="text-muted-foreground/50" />
                <span className="text-primary font-medium" aria-current="page">Identidade Visual</span>
              </nav>

              {/* Hero Section */}
              <section className="mb-20 max-w-4xl">
                <span className="font-body font-bold text-secondary tracking-widest uppercase text-xs block mb-3">
                  🎨 SOLUÇÃO INTEGRADA DE MARCA
                </span>
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-normal text-primary leading-tight mb-6">
                  Identidade Visual Premium
                </h1>
                <p className="text-lg md:text-xl font-body text-muted-foreground leading-relaxed font-light">
                  Seu talento merece ser reconhecido à primeira vista. Criamos logotipo, cores e grafismos autorais para o mundo ver o seu valor real.
                </p>
              </section>

              {/* Problem Section */}
              <section className="grid md:grid-cols-2 gap-12 items-center mb-20 bg-white/40 backdrop-blur-sm p-8 md:p-12 rounded-3xl border border-red-500/10">
                <div className="space-y-4">
                  <span className="inline-flex items-center gap-2 text-red-500 font-body text-xs font-bold uppercase tracking-widest">
                    <AlertCircle size={14} /> O Problema
                  </span>
                  <h2 className="text-2xl md:text-3xl font-display font-normal text-primary leading-tight">
                    Sua marca representa o nível do seu trabalho?
                  </h2>
                  <p className="font-body text-sm md:text-base text-muted-foreground leading-relaxed font-light">
                    Uma marca amadora esconde um trabalho de altíssimo nível. Isso custa caro.
                  </p>
                </div>
                <div className="space-y-3 font-body text-sm text-muted-foreground font-light">
                  <p className="font-medium text-primary">Isso te soa familiar?</p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 mt-0.5">✕</span>
                      <span>Dificuldade em cobrar o preço justo.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 mt-0.5">✕</span>
                      <span>Feed e site sem nada em comum.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 mt-0.5">✕</span>
                      <span>Vergonha de divulgar seu próprio perfil.</span>
                    </li>
                  </ul>
                </div>
              </section>

              {/* Objective Section */}
              <section className="mb-20 p-8 md:p-12 rounded-3xl bg-[#443A94]/5 border border-[#443A94]/10">
                <span className="font-body font-bold text-secondary tracking-widest uppercase text-xs block mb-3">
                  🎯 OBJETIVO DO PACOTE
                </span>
                <h2 className="text-2xl md:text-3xl font-display font-normal text-primary mb-4">
                  Reconhecimento e valorização profissional
                </h2>
                <p className="font-body text-base md:text-lg text-muted-foreground leading-relaxed font-light">
                  Uma identidade visual que faz sua marca ser lembrada e leva você a sério, antes mesmo de você falar uma palavra.
                </p>
              </section>

              {/* How Lunae Solves */}
              <section className="mb-20">
                <span className="font-body font-bold text-[#443A94] tracking-widest uppercase text-xs block mb-3">
                  ✦ ENTREGAS DO PACOTE
                </span>
                <h2 className="text-3xl md:text-4xl font-display font-normal text-primary mb-6">
                  O que está incluso
                </h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  <div className="p-6 bg-white rounded-2xl border border-[#443A94]/5 shadow-sm space-y-3">
                    <CheckCircle2 className="w-6 h-6 text-secondary" />
                    <h3 className="text-lg font-display font-normal text-primary">Cores e tipografia</h3>
                    <p className="font-body text-xs md:text-sm text-muted-foreground font-light leading-relaxed">
                      Uma paleta e fontes que transmitem exatamente o profissionalismo que você tem.
                    </p>
                  </div>

                  <div className="p-6 bg-white rounded-2xl border border-[#443A94]/5 shadow-sm space-y-3">
                    <CheckCircle2 className="w-6 h-6 text-secondary" />
                    <h3 className="text-lg font-display font-normal text-primary">Logotipo autoral</h3>
                    <p className="font-body text-xs md:text-sm text-muted-foreground font-light leading-relaxed">
                      Sob medida, com variações prontas para perfil, impressos e assinatura.
                    </p>
                  </div>

                  <div className="p-6 bg-white rounded-2xl border border-[#443A94]/5 shadow-sm space-y-3">
                    <CheckCircle2 className="w-6 h-6 text-secondary" />
                    <h3 className="text-lg font-display font-normal text-primary">Elementos gráficos</h3>
                    <p className="font-body text-xs md:text-sm text-muted-foreground font-light leading-relaxed">
                      Ícones, texturas e grafismos que dão ritmo e identidade às suas peças.
                    </p>
                  </div>

                  <div className="p-6 bg-white rounded-2xl border border-[#443A94]/5 shadow-sm space-y-3">
                    <CheckCircle2 className="w-6 h-6 text-secondary" />
                    <h3 className="text-lg font-display font-normal text-primary">Manual da marca</h3>
                    <p className="font-body text-xs md:text-sm text-muted-foreground font-light leading-relaxed">
                      Guia simples para você usar tudo sozinha, sem errar.
                    </p>
                  </div>

                  <div className="p-6 bg-white rounded-2xl border border-[#443A94]/5 shadow-sm space-y-3">
                    <CheckCircle2 className="w-6 h-6 text-secondary" />
                    <h3 className="text-lg font-display font-normal text-primary">Templates para Instagram</h3>
                    <p className="font-body text-xs md:text-sm text-muted-foreground font-light leading-relaxed">
                      Layouts prontos e editáveis, alinhados à sua nova marca.
                    </p>
                  </div>
                </div>
              </section>

              {/* Centralized FAQ Redirect Section */}
              <section className="mb-20 text-center max-w-2xl mx-auto px-6 py-8 rounded-3xl bg-[#443A94]/5 border border-[#443A94]/10">
                <h3 className="text-2xl font-display font-normal text-primary mb-3">
                  Ainda tem alguma dúvida?
                </h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed font-light mb-6">
                  Reunimos as perguntas mais comuns numa página só.
                </p>
                <Link
                  to="/faq#identidade-visual"
                  className="inline-flex items-center gap-2 font-body font-bold text-sm text-secondary hover:text-[#FA7C9C] transition-all py-2.5 px-6 rounded-full border border-secondary/20 hover:border-[#FA7C9C]/30 bg-white/80 shadow-sm min-h-[44px]"
                >
                  Ver perguntas sobre este serviço ✦
                </Link>
              </section>

              {/* Conversion CTA */}
              <section className="bg-[#443A94] rounded-3xl p-8 md:p-16 text-white text-center shadow-lg relative overflow-hidden">
                <h2 className="text-3xl md:text-5xl font-display font-normal mb-6">
                  Dignifique a história da sua marca
                </h2>
                <p className="font-body text-white/80 text-sm md:text-base max-w-2xl mx-auto mb-10 leading-relaxed font-light">
                  Vamos dar forma à história que sua marca já tem pra contar? Agende uma avaliação gratuita.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="https://wa.me/5513991598181?text=Olá! Gostaria de agendar uma consultoria rápida sobre Identidade Visual."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center font-body font-bold text-sm md:text-base bg-[#FA7C9C] text-white hover:bg-white hover:text-primary py-4 px-10 rounded-full transition-all duration-300 shadow-md"
                  >
                    Agendar Consultoria pelo WhatsApp ✦
                  </a>
                  <Link
                    to="/servicos"
                    className="inline-flex items-center justify-center font-body font-bold text-sm md:text-base border border-white/20 text-white hover:bg-white/10 py-4 px-10 rounded-full transition-all duration-300"
                  >
                    Ver Outros Serviços
                  </Link>
                </div>
                <p className="block w-fit mx-auto font-display font-normal text-3xl md:text-5xl tracking-wide text-white/90 mt-10 origin-center cursor-default transition-transform duration-300 motion-safe:hover:scale-120 motion-reduce:transition-none">Conta com a gente!</p>
              </section>

            </div>
          </main>
          
          <Footer />
        </div>
      </div>
    </>
  );
};

export default IdentidadeVisualPage;
