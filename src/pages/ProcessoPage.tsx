import React from "react";
import { Link } from "react-router-dom";
import { ChevronRight, Home, Compass, Target, PenTool, Edit3, CheckCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

interface ProcessStep {
  number: string;
  title: string;
  icon: React.ReactNode;
  subtitle: string;
  description: string;
}

const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Descobrir",
    icon: <Compass className="w-6 h-6 text-secondary" />,
    subtitle: "Briefing & Diagnóstico",
    description: "Uma conversa honesta pra entender quem você é, o que quer alcançar e quem é seu cliente ideal."
  },
  {
    number: "02",
    title: "Estruturar",
    icon: <Target className="w-6 h-6 text-secondary" />,
    subtitle: "Direção de Cores & Estilo",
    description: "Definimos a direção visual do projeto (cores, estilo e, se for site, como as páginas vão se conectar)."
  },
  {
    number: "03",
    title: "Criar",
    icon: <PenTool className="w-6 h-6 text-secondary" />,
    subtitle: "Design Autoral",
    description: "Desenhamos tudo do zero (logotipo, telas ou peças), sem templates prontos de internet."
  },
  {
    number: "04",
    title: "Refinar",
    icon: <Edit3 className="w-6 h-6 text-secondary" />,
    subtitle: "Ajustes Colaborativos",
    description: "Apresentamos tudo explicado e ajustamos juntas até ficar exatamente como deve ser."
  },
  {
    number: "05",
    title: "Publicar",
    icon: <CheckCircle className="w-6 h-6 text-secondary" />,
    subtitle: "Apresentação",
    description: "Publicamos o projeto final (site, logo, posts estratégicos) para você e seus clientes visualizarem o resultado."
  }
];

const ProcessoPage = () => {
  const processSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Processo Criativo | Como Trabalhamos",
    "description": "Conheça o método estratégico de co-criação da Lunae: Descobrir, Estruturar, Criar, Refinar e Publicar. Transparência técnica e humana.",
    "publisher": {
      "@type": "Organization",
      "name": "Lunae Estúdio Criativo",
      "logo": "https://lunaestudio.com.br/assets/logo-lunae.png"
    }
  };

  return (
    <>
      <SEO 
        title="Nosso Processo Criativo | Lunae Estúdio" 
        description="Conheça as 5 etapas exclusivas da Lunae para transformar a presença digital da sua marca com segurança, empatia e transparência."
        schema={processSchema}
      />

      <div 
        className="min-h-screen relative paper-bg"
      >
        <div className="absolute inset-0 bg-background/[0.64] pointer-events-none" />
        
        <div className="relative z-10">
          <Header />
          
          <main id="main-content" className="pt-28 md:pt-36 pb-20">
            <div className="max-w-6xl mx-auto px-6">
              
              {/* Breadcrumbs */}
              <nav aria-label="Breadcrumb" className="mb-10 flex items-center gap-2 text-xs md:text-sm font-body text-muted-foreground">
                <Link to="/" className="hover:text-secondary flex items-center gap-1 transition-colors min-h-[44px] px-1 inline-flex items-center">
                  <Home size={14} />
                  Home
                </Link>
                <ChevronRight size={12} className="text-muted-foreground/50" />
                <span className="text-primary font-medium" aria-current="page">Processo Criativo</span>
              </nav>

              {/* Title Section */}
              <div className="text-center max-w-4xl mx-auto mb-20">
                <span className="font-body font-bold text-secondary tracking-widest uppercase text-xs md:text-sm block mb-3">
                  ✦ METODOLOGIA PROJETUAL LUNAE
                </span>
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-normal text-primary leading-tight mb-6">
                  Nosso Método
                </h1>
                <p className="text-lg md:text-xl font-body text-muted-foreground leading-relaxed">
                  Transparente, estruturado e colaborativo, para você ser parte do projeto do início ao fim.
                </p>
              </div>

              {/* Steps timeline display */}
              <div className="max-w-4xl mx-auto space-y-12 mb-20">
                {processSteps.map((step) => (
                  <article 
                    key={step.number}
                    className="flex flex-col md:flex-row gap-6 md:gap-10 p-8 rounded-3xl bg-white/70 backdrop-blur-sm border border-[#443A94]/10 text-left items-start shadow-sm"
                  >
                    {/* Step badge */}
                    <div className="flex items-center gap-4 flex-shrink-0">
                      <span className="font-display font-normal text-4xl text-[#FA7C9C]/30 md:text-5xl">
                        {step.number}
                      </span>
                      <div className="w-12 h-12 rounded-2xl bg-secondary/5 flex items-center justify-center">
                        {step.icon}
                      </div>
                    </div>

                    {/* Step details */}
                    <div className="space-y-3">
                      <span className="font-body text-xs font-bold text-secondary tracking-wider block uppercase">
                        {step.subtitle}
                      </span>
                      <h2 className="text-2xl font-display font-normal text-primary leading-tight">
                        {step.title}
                      </h2>
                      <p className="font-body text-sm md:text-base text-muted-foreground leading-relaxed font-light">
                        {step.description}
                      </p>
                    </div>
                  </article>
                ))}
              </div>

              {/* Conversion CTA */}
              <section className="bg-[#443A94] rounded-3xl p-8 md:p-16 text-white text-center shadow-lg relative overflow-hidden">
                <h2 className="text-3xl md:text-5xl font-display font-normal mb-6">
                  Comece sua jornada estratégica
                </h2>
                <p className="font-body text-white/80 text-sm md:text-base max-w-2xl mx-auto mb-10 leading-relaxed font-light">
                  Somos parceiras de jornada do início ao fim. Fala com a gente.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="https://wa.me/5513991598181?text=Olá! Estudei o processo estratégico da Lunae e gostaria de iniciar um projeto."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center font-body font-bold text-sm md:text-base bg-[#FA7C9C] text-white hover:bg-white hover:text-primary py-4 px-10 rounded-full transition-all duration-300 shadow-md"
                  >
                    Iniciar Meu Projeto ✦
                  </a>
                  <Link
                    to="/servicos"
                    className="inline-flex items-center justify-center font-body font-bold text-sm md:text-base border border-white/20 text-white hover:bg-white/10 py-4 px-10 rounded-full transition-all duration-300"
                  >
                    Ver Serviços
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

export default ProcessoPage;
