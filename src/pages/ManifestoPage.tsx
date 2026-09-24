import React from "react";
import { Link } from "react-router-dom";
import { ChevronRight, Home, Shield, Heart, Flame } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import paperTexture from "@/assets/paper-texture.jpg";
import aboutIllustration from "@/assets/about-illustration.png";

const ManifestoPage = () => {
  const manifestoSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Nosso Manifesto | Lunae Estúdio Criativo",
    "description": "Descubra o propósito, a visão e o compromisso estratégico do Estúdio Lunae em dignificar o empreendedorismo feminino através do design e tecnologia premium.",
    "publisher": {
      "@type": "Organization",
      "name": "Lunae Estúdio Criativo",
      "logo": "https://lunaestudio.com.br/assets/logo-lunae.png"
    }
  };

  return (
    <>
      <SEO 
        title="Nosso Manifesto | Lunae" 
        description="O propósito, a visão e os pilares estratégicos do Estúdio Lunae. Fortalecemos o empreendedorismo feminino através da autenticidade e do design premium."
        schema={manifestoSchema}
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
          
          <main id="main-content" className="pt-28 md:pt-36 pb-20">
            <div className="max-w-7xl mx-auto px-6">
              
              {/* Breadcrumbs */}
              <nav aria-label="Breadcrumb" className="mb-10 flex items-center gap-2 text-xs md:text-sm font-body text-muted-foreground">
                <Link to="/" className="hover:text-secondary flex items-center gap-1 transition-colors min-h-[44px] px-1 inline-flex items-center">
                  <Home size={14} />
                  Home
                </Link>
                <ChevronRight size={12} className="text-muted-foreground/50" />
                <Link to="/sobre" className="hover:text-secondary transition-colors px-1">
                  Sobre
                </Link>
                <ChevronRight size={12} className="text-muted-foreground/50" />
                <span className="text-primary font-medium" aria-current="page">Manifesto</span>
              </nav>

              {/* Title Section */}
              <div className="text-center max-w-4xl mx-auto mb-16">
                <span className="font-body font-bold text-secondary tracking-widest uppercase text-xs md:text-sm block mb-3">
                  ✦ MANIFESTO DE MARCA
                </span>
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-normal text-primary leading-tight mb-6">
                  Nosso Manifesto
                </h1>
                <p className="text-lg md:text-xl font-body text-muted-foreground leading-relaxed">
                  Acreditamos que a independência de uma mulher se consolida ao ocupar espaços com inteligência e autenticidade. O nosso propósito é criar uma presença real para sua marca.
                </p>
              </div>

              {/* Core Manifesto Section */}
              <section className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-24">
                <div className="space-y-6 text-left">
                  <h2 className="text-2xl md:text-3xl font-display font-normal text-primary">Por que fazemos o que fazemos?</h2>
                  <p className="font-body text-lg text-[#443A94] font-medium leading-relaxed">
                    Queremos ajudar empreendedoras e empreendedores a terem seu espaço no digital e mostrarem seu valor para seus clientes.
                  </p>

                  <p className="font-body text-base md:text-lg text-muted-foreground font-light leading-relaxed">
                    Conversamos, pesquisamos e damos vida à sua essência com criatividade.
                  </p>
                </div>

                <div className="flex items-center justify-center relative">
                  <div className="absolute inset-0 bg-[#FA7C9C]/10 rounded-full blur-3xl -z-10" />
                  <img
                    src={aboutIllustration}
                    alt="Ilustração representativa do manifesto sob o luar"
                    className="w-full max-w-sm md:max-w-md select-none pointer-events-none drop-shadow-xl"
                  />
                </div>
              </section>

              {/* Pilares Estratégicos */}
              <section className="mb-24">
                <div className="text-center mb-16">
                  <span className="font-body font-bold text-secondary tracking-widest uppercase text-xs block mb-3">
                    ✦ PRINCÍPIOS FUNDAMENTAIS
                  </span>
                  <h2 className="text-3xl md:text-4xl font-display font-normal text-primary">
                    Nossos Três Pilares
                  </h2>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                  <div className="p-8 md:p-10 bg-white/70 backdrop-blur-sm rounded-2xl border border-[#443A94]/10 hover:border-secondary/30 shadow-sm transition-all text-left space-y-4">
                    <div className="w-12 h-12 rounded-xl bg-secondary/5 flex items-center justify-center">
                      <Shield className="w-6 h-6 text-secondary" />
                    </div>
                    <h3 className="text-xl font-display font-normal text-primary">
                      1. Presença Autêntica
                    </h3>
                    <p className="font-body text-sm text-muted-foreground leading-relaxed font-light">
                      Nada de genérico. Sua marca nasce da sua essência e mostra quem você é de verdade.
                    </p>
                  </div>

                  <div className="p-8 md:p-10 bg-white/70 backdrop-blur-sm rounded-2xl border border-[#443A94]/10 hover:border-secondary/30 shadow-sm transition-all text-left space-y-4">
                    <div className="w-12 h-12 rounded-xl bg-secondary/5 flex items-center justify-center">
                      <Heart className="w-6 h-6 text-secondary" />
                    </div>
                    <h3 className="text-xl font-display font-normal text-primary">
                      2. Processo Colaborativo
                    </h3>
                    <p className="font-body text-sm text-muted-foreground leading-relaxed font-light">
                      Você participa de cada etapa, do briefing à publicação, em linguagem simples e sem jargão.
                    </p>
                  </div>

                  <div className="p-8 md:p-10 bg-white/70 backdrop-blur-sm rounded-2xl border border-[#443A94]/10 hover:border-secondary/30 shadow-sm transition-all text-left space-y-4">
                    <div className="w-12 h-12 rounded-xl bg-secondary/5 flex items-center justify-center">
                      <Flame className="w-6 h-6 text-secondary" />
                    </div>
                    <h3 className="text-xl font-display font-normal text-primary">
                      3. Entrega Real
                    </h3>
                    <p className="font-body text-sm text-muted-foreground leading-relaxed font-light">
                      Do papel ao ar: site, logo e posts prontos para você e seus clientes verem e usarem.
                    </p>
                  </div>
                </div>
              </section>

              {/* Conversion CTA */}
              <section className="bg-[#443A94] rounded-3xl p-8 md:p-16 text-white text-center shadow-lg relative overflow-hidden">
                <div className="absolute inset-0 bg-radial-gradient from-secondary/15 via-transparent to-transparent pointer-events-none" />
                <h2 className="text-3xl md:text-5xl font-display font-normal mb-6">
                  Pronta para ocupar seu espaço?
                </h2>
                <p className="font-body text-white/80 text-sm md:text-base max-w-2xl mx-auto mb-10">
                  Agende um bate-papo de 15 minutos pelo WhatsApp e converse diretamente com as fundadoras sobre seus objetivos.
                </p>
                <a
                  href="https://wa.me/5513991598181?text=Olá! Li o manifesto da Lunae e gostaria de agendar uma conversa sobre o meu negócio."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center font-body font-bold text-sm md:text-base bg-[#FA7C9C] text-white hover:bg-white hover:text-primary py-4 px-10 rounded-full transition-all duration-300 shadow-md"
                >
                  Fale conosco no WhatsApp ✦
                </a>
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

export default ManifestoPage;
