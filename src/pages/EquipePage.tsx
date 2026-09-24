import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronRight, Home, Shield, Code, Layout, Heart, Sparkles, User, ExternalLink } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import paperTexture from "@/assets/paper-texture.jpg";
import charLuiza from "@/assets/char-luiza.png";
import fotoLuiza from "@/assets/foto-luiza.png";
import charNayla from "@/assets/char-nayla.png";
import fotoNayla from "@/assets/foto-nayla.png";
import personagensCores from "@/assets/personagens-cores.png";

interface Founder {
  id: string;
  name: string;
  role: string;
  description: string;
  longBio: string;
  illustration: string;
  photo: string;
  portfolioUrl: string;
}

const founders: Founder[] = [
  {
    id: "luiza",
    name: "Luiza Menezes",
    role: "Product Designer & Estrategista",
    description: "Design bonito chama atenção. Design bem pensado faz sentido.",
    longBio: "“Na Lunae, uno estratégia, pesquisa e criatividade para transformar ideias em experiências digitais intuitivas, consistentes e feitas para conectar marcas e pessoas.”",
    illustration: charLuiza,
    photo: fotoLuiza,
    portfolioUrl: "https://luizamenezesg.github.io/portfolio-luizam-ux/",
  },
  {
    id: "nayla",
    name: "Nayla Prilla",
    role: "Ilustradora & Designer Visual",
    description: "Toda marca tem uma história. O visual é o que faz ela ganhar forma.",
    longBio: "“Na Lunae, transformo ideias em identidades visuais únicas, unindo ilustração, cores e grafismos autorais para criar marcas com personalidade, intenção e presença.”",
    illustration: charNayla,
    photo: fotoNayla,
    portfolioUrl: "#",
  },
];

const EquipePage = () => {
  const [hoveredMember, setHoveredMember] = useState<string | null>(null);

  const teamSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Quem Faz a Lunae | Equipe",
    "description": "Conheça Luiza Menezes e Nayla Prilla, as fundadoras da Lunae. Duas profissionais que unem estratégia de Product Design e ilustração autoral premium.",
    "publisher": {
      "@type": "Organization",
      "name": "Lunae Estúdio Criativo",
      "logo": "https://lunaestudio.com.br/assets/logo-lunae.png"
    }
  };

  return (
    <>
      <SEO 
        title="Quem Somos | Equipe Lunae" 
        description="Conheça as mentes criativas da Lunae. Luiza Menezes e Nayla Prilla unem a exatidão metodológica do Product Design com a sensibilidade artística da ilustração autoral."
        schema={teamSchema}
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
                <span className="text-primary font-medium" aria-current="page">Equipe</span>
              </nav>

              {/* Title Section */}
              <div className="text-center max-w-4xl mx-auto mb-20">
                <span className="font-body font-bold text-secondary tracking-widest uppercase text-xs md:text-sm block mb-3">
                  ✦ QUEM FAZ A LUNAE
                </span>
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-normal text-primary leading-tight mb-6">
                  Nossa Equipe
                </h1>
                <p className="text-lg md:text-xl font-body text-muted-foreground leading-relaxed">
                  Duas mentes, um propósito: elevar sua marca com beleza e estratégia.
                </p>
              </div>

              {/* Founders Interactive Cards */}
              <div className="space-y-32 mb-24">
                {founders.map((founder, index) => {
                  const isEven = index % 2 === 0;
                  return (
                    <article 
                      key={founder.id}
                      className={`grid lg:grid-cols-12 gap-12 items-center ${
                        isEven ? "" : "lg:flex-row-reverse"
                      }`}
                    >
                      {/* Polaroid Image Box */}
                      <div className={`lg:col-span-5 flex flex-col items-center ${isEven ? "" : "lg:order-2"}`}>
                        <div
                          className="relative w-64 h-80 cursor-pointer select-none"
                          onMouseEnter={() => setHoveredMember(founder.id)}
                          onMouseLeave={() => setHoveredMember(null)}
                          onFocus={() => setHoveredMember(founder.id)}
                          onBlur={() => setHoveredMember(null)}
                          tabIndex={0}
                          role="img"
                          aria-label={`Foto interativa de ${founder.name}`}
                        >
                          <div className="absolute inset-0 bg-white rounded-2xl shadow-xl p-3 pb-10 transition-transform duration-500 ease-out hover:rotate-0 rotate-[-1.5deg]">
                            <div className="relative w-full h-full overflow-hidden rounded-lg bg-[#443A94]/5">
                              {/* Illustration */}
                              <img
                                src={founder.illustration}
                                alt={`Ilustração de ${founder.name}`}
                                className={`absolute inset-0 w-full h-full object-cover object-top transition-opacity duration-500 ${
                                  hoveredMember === founder.id ? "opacity-0" : "opacity-100"
                                }`}
                              />
                              {/* Photo */}
                              <img
                                src={founder.photo}
                                alt={`Foto real de ${founder.name}`}
                                className={`absolute inset-0 w-full h-full object-cover object-top transition-opacity duration-500 ${
                                  hoveredMember === founder.id ? "opacity-100" : "opacity-0"
                                }`}
                              />
                            </div>
                          </div>
                        </div>
                        <span className="text-xs font-body text-muted-foreground/80 mt-2 italic">
                          Passe o mouse (ou toque) para ver a foto real
                        </span>
                      </div>

                      {/* Bio & Details */}
                      <div className={`lg:col-span-7 text-left space-y-6 ${isEven ? "" : "lg:order-1"}`}>
                        <div>
                          <span className="font-body text-xs font-bold text-secondary tracking-widest uppercase block mb-1">
                            {founder.role}
                          </span>
                          <h2 className="text-3xl md:text-4xl font-display font-normal text-primary">
                            {founder.name}
                          </h2>
                        </div>

                        <p className="font-body text-base md:text-lg text-[#443A94] font-medium leading-relaxed">
                          {founder.description}
                        </p>

                        <p className="font-body text-sm md:text-base text-muted-foreground leading-relaxed font-light">
                          {founder.longBio}
                        </p>

                        {/* Portfolio Link */}
                        {founder.portfolioUrl !== "#" && (
                          <div className="pt-2">
                            <a
                              href={founder.portfolioUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 font-body font-bold text-sm text-secondary hover:text-primary transition-colors underline underline-offset-4"
                            >
                              Ver portfólio individual <ExternalLink size={14} />
                            </a>
                          </div>
                        )}
                      </div>
                    </article>
                  );
                })}
              </div>

              {/* Our Collaboration Philosophy */}
              <section className="bg-white border-2 border-secondary/30 shadow-lg rounded-3xl p-8 md:p-14 mb-24 text-center max-w-3xl mx-auto origin-center cursor-default transition-transform duration-300 motion-safe:hover:scale-120 hover:z-10 relative motion-reduce:transition-none">
                <div className="space-y-6">
                  <h3 className="text-3xl md:text-4xl font-display font-normal text-primary">Nossa Filosofia de Colaboração</h3>
                  <p className="font-body text-lg md:text-xl text-[#443A94] font-medium leading-relaxed">
                    Acreditamos em co-criação. Você conhece seu negócio; nós, as técnicas. Juntas, criamos soluções autênticas que aumentam sua visibilidade.
                  </p>
                </div>
              </section>

              {/* Decorative visual divider */}
              <div className="w-full overflow-hidden select-none pointer-events-none max-w-5xl mx-auto px-6 mb-16">
                <img
                  src={personagensCores}
                  alt="Ilustração lúdica de figuras femininas unidas"
                  className="w-full h-auto opacity-80"
                  loading="lazy"
                />
              </div>

              {/* Strategic CTA */}
              <section className="bg-[#443A94] rounded-3xl p-8 md:p-16 text-white text-center shadow-lg relative overflow-hidden">
                <h2 className="text-3xl md:text-5xl font-display font-normal mb-6">
                  Fale diretamente conosco
                </h2>
                <p className="font-body text-white/80 text-sm md:text-base max-w-2xl mx-auto mb-10">
                  Agende 15 minutos com a Luiza e a Nayla e descubra o melhor caminho pra sua marca.
                </p>
                <a
                  href="https://wa.me/5513991598181?text=Olá! Gostaria de conversar com a Luiza e a Nayla sobre as soluções de marca para meu negócio."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center font-body font-bold text-sm md:text-base bg-[#FA7C9C] text-white hover:bg-white hover:text-primary py-4 px-10 rounded-full transition-all duration-300 shadow-md"
                >
                  Agendar conversa agora ✦
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

export default EquipePage;
