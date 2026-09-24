import React from "react";
import { Link } from "react-router-dom";
import { ChevronRight, Home, Smartphone, AlertCircle, CheckCircle2, ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import paperTexture from "@/assets/paper-texture.jpg";

const InstagramEstrategicoPage = () => {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Instagram Estratégico | Lunae",
    "description": "Estruturação visual, editorial e de conteúdo de perfil do Instagram para atrair clientes qualificados e gerar autoridade imediata.",
    "brand": {
      "@type": "Brand",
      "name": "Lunae"
    }
  };

  return (
    <>
      <SEO 
        title="Instagram Estratégico | Lunae Estúdio Criativo" 
        description="Transforme seu feed em uma vitrine profissional de alta conversão. Estruturamos biografia, destaques e templates sob medida para redes sociais."
        schema={serviceSchema}
      />

      <div 
        className="min-h-screen relative"
        style={{ 
          backgroundImage: `url(${paperTexture})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      >
        <div className="absolute inset-0 bg-background/80 pointer-events-none" />
        
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
                <span className="text-primary font-medium" aria-current="page">Instagram Estratégico</span>
              </nav>

              {/* Hero Section */}
              <section className="mb-20 max-w-4xl">
                <span className="font-body font-bold text-secondary tracking-widest uppercase text-xs block mb-3">
                  📱 REDES SOCIAIS DE IMPACTO
                </span>
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-normal text-primary leading-tight mb-6">
                  Instagram Estratégico
                </h1>
                <p className="text-lg md:text-xl font-body text-muted-foreground leading-relaxed font-light">
                  Seu Instagram costuma ser o primeiro contato com um cliente. Faça essa primeira impressão valer.
                </p>
              </section>

              {/* Problem Section */}
              <section className="grid md:grid-cols-2 gap-12 items-center mb-20 bg-white/40 backdrop-blur-sm p-8 md:p-12 rounded-3xl border border-red-500/10">
                <div className="space-y-4">
                  <span className="inline-flex items-center gap-2 text-red-500 font-body text-xs font-bold uppercase tracking-widest">
                    <AlertCircle size={14} /> O Problema
                  </span>
                  <h2 className="text-2xl md:text-3xl font-display font-normal text-primary leading-tight">
                    Postar muito e não atrair cliente nenhum?
                  </h2>
                  <p className="font-body text-sm md:text-base text-muted-foreground leading-relaxed font-light">
                    Horas produzindo conteúdo que só gera curtida de conhecido, nunca um novo cliente.
                  </p>
                </div>
                <div className="space-y-3 font-body text-sm text-muted-foreground font-light">
                  <p className="font-medium text-primary">Reconhece algum desses?</p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 mt-0.5">✕</span>
                      <span>Bio confusa, ninguém entende o que você vende.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 mt-0.5">✕</span>
                      <span>Destaques bagunçados, sem foco.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 mt-0.5">✕</span>
                      <span>Templates genéricos que não parecem seus.</span>
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
                  Presença marcante, rotina facilitada
                </h2>
                <p className="font-body text-base md:text-lg text-muted-foreground leading-relaxed font-light">
                  Um Instagram que transmite profissionalismo e torna sua produção de conteúdo simples de manter.
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
                    <h3 className="text-lg font-display font-normal text-primary">Diagnóstico do perfil</h3>
                    <p className="font-body text-xs md:text-sm text-muted-foreground font-light leading-relaxed">
                      Identificamos o que travar seu perfil hoje e onde estão as oportunidades.
                    </p>
                  </div>

                  <div className="p-6 bg-white rounded-2xl border border-[#443A94]/5 shadow-sm space-y-3">
                    <CheckCircle2 className="w-6 h-6 text-secondary" />
                    <h3 className="text-lg font-display font-normal text-primary">Bio estratégica</h3>
                    <p className="font-body text-xs md:text-sm text-muted-foreground font-light leading-relaxed">
                      Seu posicionamento claro nos primeiros segundos de visita.
                    </p>
                  </div>

                  <div className="p-6 bg-white rounded-2xl border border-[#443A94]/5 shadow-sm space-y-3">
                    <CheckCircle2 className="w-6 h-6 text-secondary" />
                    <h3 className="text-lg font-display font-normal text-primary">Capas para destaques</h3>
                    <p className="font-body text-xs md:text-sm text-muted-foreground font-light leading-relaxed">
                      Design padronizado, no tom e cor da sua marca.
                    </p>
                  </div>

                  <div className="p-6 bg-white rounded-2xl border border-[#443A94]/5 shadow-sm space-y-3">
                    <CheckCircle2 className="w-6 h-6 text-secondary" />
                    <h3 className="text-lg font-display font-normal text-primary">Organização dos destaques</h3>
                    <p className="font-body text-xs md:text-sm text-muted-foreground font-light leading-relaxed">
                      Roteiro pronto para "Sobre mim", "Serviços" e "Depoimentos".
                    </p>
                  </div>

                  <div className="p-6 bg-white rounded-2xl border border-[#443A94]/5 shadow-sm space-y-3">
                    <CheckCircle2 className="w-6 h-6 text-secondary" />
                    <h3 className="text-lg font-display font-normal text-primary">Calendário de 30 dias</h3>
                    <p className="font-body text-xs md:text-sm text-muted-foreground font-light leading-relaxed">
                      Ideias prontas pras suas primeiras 4 semanas de posts.
                    </p>
                  </div>

                  <div className="p-6 bg-white rounded-2xl border border-[#443A94]/5 shadow-sm space-y-3">
                    <CheckCircle2 className="w-6 h-6 text-secondary" />
                    <h3 className="text-lg font-display font-normal text-primary">Templates Padrão</h3>
                    <p className="font-body text-xs md:text-sm text-muted-foreground font-light leading-relaxed">
                      Modelos feitos sob medida pro seu nicho.
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
                  to="/faq#instagram-estrategico"
                  className="inline-flex items-center gap-2 font-body font-bold text-sm text-secondary hover:text-[#FA7C9C] transition-all py-2.5 px-6 rounded-full border border-secondary/20 hover:border-[#FA7C9C]/30 bg-white/80 shadow-sm min-h-[44px]"
                >
                  Ver perguntas sobre este serviço ✦
                </Link>
              </section>

              {/* Conversion CTA */}
              <section className="bg-[#443A94] rounded-3xl p-8 md:p-16 text-white text-center shadow-lg relative overflow-hidden">
                <h2 className="text-3xl md:text-5xl font-display font-normal mb-6">
                  Dê voz à sua marca no Instagram
                </h2>
                <p className="font-body text-white/80 text-sm md:text-base max-w-2xl mx-auto mb-10 leading-relaxed font-light">
                  Vamos marcar uma conversa rápida e planejar seu perfil?
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="https://wa.me/5513991598181?text=Olá! Gostaria de falar sobre a estruturação estratégica do meu Instagram com a Lunae."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center font-body font-bold text-sm md:text-base bg-[#FA7C9C] text-white hover:bg-white hover:text-primary py-4 px-10 rounded-full transition-all duration-300 shadow-md"
                  >
                    Estruturar Meu Instagram via WhatsApp ✦
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

export default InstagramEstrategicoPage;
