import React from "react";
import { Link } from "react-router-dom";
import { ChevronRight, Home, Globe, AlertCircle, CheckCircle2, ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import paperTexture from "@/assets/paper-texture.jpg";

const PresencaDigitalPage = () => {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Presença Digital Completa | Lunae",
    "description": "Desenvolvimento de presença digital integrada por meio de estratégia, UX, sites institucionais, landing pages e otimização para mecanismos de busca.",
    "brand": {
      "@type": "Brand",
      "name": "Lunae"
    }
  };

  return (
    <>
      <SEO 
        title="Presença Digital Completa | Lunae Estúdio Criativo" 
        description="Construa sua residência digital definitiva. Desenvolvemos sites institucionais e estratégias de UX para sua marca transmitir confiança e crescer."
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
                <span className="text-primary font-medium" aria-current="page">Presença Digital</span>
              </nav>

              {/* Hero Section */}
              <section className="mb-20 max-w-4xl" id="presenca-digital-hero">
                <span className="font-body font-bold text-secondary tracking-widest uppercase text-xs block mb-3">
                  💻 SUA CASA PRÓPRIA NA INTERNET
                </span>
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-normal text-primary leading-tight mb-6">
                  Presença Digital Integrada
                </h1>
                <p className="text-lg md:text-xl font-body text-muted-foreground leading-relaxed font-light">
                  Pare de depender só do algoritmo. Um site seu transmite credibilidade e traz oportunidades todos os dias.
                </p>
              </section>

              {/* Problem Section */}
              <section className="grid md:grid-cols-2 gap-12 items-center mb-20 bg-white/40 backdrop-blur-sm p-8 md:p-12 rounded-3xl border border-red-500/10" id="presenca-digital-problems">
                <div className="space-y-4">
                  <span className="inline-flex items-center gap-2 text-red-500 font-body text-xs font-bold uppercase tracking-widest">
                    <AlertCircle size={14} /> O Cenário
                  </span>
                  <h2 className="text-2xl md:text-3xl font-display font-normal text-primary leading-tight">
                    Sem site, sua empresa é fácil de esquecer
                  </h2>
                  <p className="font-body text-sm md:text-base text-muted-foreground leading-relaxed font-light">
                    Quando alguém busca no Google e não te encontra, contrata seu concorrente.
                  </p>
                </div>
                <div className="space-y-3 font-body text-sm text-muted-foreground font-light">
                  <p className="font-medium text-primary">O que isso custa pra você:</p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 mt-0.5">✕</span>
                      <span>Parecer amadora ao passar só um link de rede social.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 mt-0.5">✕</span>
                      <span>Depender 100% das regras de terceiros.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 mt-0.5">✕</span>
                      <span>Dificuldade em explicar seus diferenciais.</span>
                    </li>
                  </ul>
                </div>
              </section>

              {/* Objective Section */}
              <section className="mb-20 p-8 md:p-12 rounded-3xl bg-[#443A94]/5 border border-[#443A94]/10" id="presenca-digital-objective">
                <span className="font-body font-bold text-secondary tracking-widest uppercase text-xs block mb-3">
                  🎯 OBJETIVO DO PACOTE
                </span>
                <h2 className="text-2xl md:text-3xl font-display font-normal text-primary mb-4">
                  Estabilidade e confiança, direto no Google
                </h2>
                <p className="font-body text-base md:text-lg text-muted-foreground leading-relaxed font-light">
                  Uma presença digital que te encontra sozinha e transmite autoridade sem esforço.
                </p>
              </section>

              {/* Clarification Box */}
              <div className="mb-12 p-6 bg-secondary/5 rounded-2xl border border-secondary/10 font-body text-sm text-muted-foreground max-w-4xl">
                <span className="font-bold text-primary block mb-1">✦ Nota de Posicionamento</span>
                UX/UI, site, SEO, domínio e hospedagem não são vendidos separados, fazem parte de um único pacote de <strong>Presença Digital</strong>, coerente do início ao fim.
              </div>

              {/* Deliverables Section */}
              <section className="mb-20" id="presenca-digital-deliverables">
                <span className="font-body font-bold text-[#443A94] tracking-widest uppercase text-xs block mb-3">
                  ✦ ENTREGAS DO PACOTE
                </span>
                <h2 className="text-3xl md:text-4xl font-display font-normal text-primary mb-6">
                  O que está incluso
                </h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  <div className="p-6 bg-white rounded-2xl border border-[#443A94]/5 shadow-sm space-y-3">
                    <CheckCircle2 className="w-6 h-6 text-secondary" />
                    <h3 className="text-lg font-display font-normal text-primary">Projeto UX/UI</h3>
                    <p className="font-body text-xs md:text-sm text-muted-foreground font-light leading-relaxed">
                      Navegação fluida e intuitiva, pensada pro seu cliente.
                    </p>
                  </div>

                  <div className="p-6 bg-white rounded-2xl border border-[#443A94]/5 shadow-sm space-y-3">
                    <CheckCircle2 className="w-6 h-6 text-secondary" />
                    <h3 className="text-lg font-display font-normal text-primary">Site ou landing page</h3>
                    <p className="font-body text-xs md:text-sm text-muted-foreground font-light leading-relaxed">
                      Rápido, seguro e responsivo em qualquer tela.
                    </p>
                  </div>

                  <div className="p-6 bg-white rounded-2xl border border-[#443A94]/5 shadow-sm space-y-3">
                    <CheckCircle2 className="w-6 h-6 text-secondary" />
                    <h3 className="text-lg font-display font-normal text-primary">SEO básico</h3>
                    <p className="font-body text-xs md:text-sm text-muted-foreground font-light leading-relaxed">
                      Pra você aparecer no Google pelas palavras certas.
                    </p>
                  </div>

                  <div className="p-6 bg-white rounded-2xl border border-[#443A94]/5 shadow-sm space-y-3">
                    <CheckCircle2 className="w-6 h-6 text-secondary" />
                    <h3 className="text-lg font-display font-normal text-primary">Domínio e hospedagem</h3>
                    <p className="font-body text-xs md:text-sm text-muted-foreground font-light leading-relaxed">
                      Registrados no seu nome (controle total é seu).
                    </p>
                  </div>

                  <div className="p-6 bg-white rounded-2xl border border-[#443A94]/5 shadow-sm space-y-3">
                    <CheckCircle2 className="w-6 h-6 text-secondary" />
                    <h3 className="text-lg font-display font-normal text-primary">Manutenção inicial</h3>
                    <p className="font-body text-xs md:text-sm text-muted-foreground font-light leading-relaxed">
                      Suporte e atualizações de segurança por 3 meses.
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
                  to="/faq#presenca-digital"
                  className="inline-flex items-center gap-2 font-body font-bold text-sm text-secondary hover:text-[#FA7C9C] transition-all py-2.5 px-6 rounded-full border border-secondary/20 hover:border-[#FA7C9C]/30 bg-white/80 shadow-sm min-h-[44px]"
                >
                  Ver perguntas sobre este serviço ✦
                </Link>
              </section>

              {/* Conversion CTA */}
              <section className="bg-[#443A94] rounded-3xl p-8 md:p-16 text-white text-center shadow-lg relative overflow-hidden" id="presenca-digital-cta">
                <h2 className="text-3xl md:text-5xl font-display font-normal mb-6">
                  Conquiste seu espaço definitivo na web
                </h2>
                <p className="font-body text-white/80 text-sm md:text-base max-w-2xl mx-auto mb-10 leading-relaxed font-light">
                  Vamos conversar pelo WhatsApp e planejar o site ideal pra sua empresa?
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="https://wa.me/5513991598181?text=Olá! Gostaria de planejar a Presença Digital da minha marca com a equipe da Lunae."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center font-body font-bold text-sm md:text-base bg-[#FA7C9C] text-white hover:bg-white hover:text-primary py-4 px-10 rounded-full transition-all duration-300 shadow-md"
                  >
                    Estruturar Minha Presença Digital ✦
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

export default PresencaDigitalPage;
