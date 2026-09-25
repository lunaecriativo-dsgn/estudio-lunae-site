import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Paintbrush, Smartphone, Globe } from "lucide-react";

interface Solution {
  id: string;
  title: string;
  description: string;
  iconComponent: React.ReactNode;
}

const solutions: Solution[] = [
  {
    id: "identidade-visual",
    title: "🎨 Identidade Visual",
    description: "Construímos identidades visuais estratégicas que traduzem a essência da sua marca e fortalecem sua presença em todos os pontos de contato.",
    iconComponent: <Paintbrush className="w-5 h-5 text-secondary" />
  },
  {
    id: "instagram-estrategico",
    title: "📱 Instagram Estratégico",
    description: "Estruturamos seu posicionamento no Instagram para comunicar valor, gerar autoridade e atrair clientes alinhados ao seu negócio.",
    iconComponent: <Smartphone className="w-5 h-5 text-secondary" />
  },
  {
    id: "site-institucional",
    title: "💻 Presença Digital",
    description: "Desenvolvemos sites institucionais e organizamos sua presença digital para transmitir credibilidade e transformar visitantes em oportunidades.",
    iconComponent: <Globe className="w-5 h-5 text-secondary" />
  }
];

const ServicesSection = () => {
  return (
    <section id="servicos" className="py-24 md:py-40 scroll-mt-20 border-t border-[#443A94]/5">
      <div className="section-container max-w-6xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-24 text-left md:text-center md:mx-auto">
          <span className="font-body font-bold text-secondary tracking-widest uppercase text-xs md:text-sm block mb-4">
            ✦ NOSSOS TRÊS PILARES
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-normal text-primary leading-tight">
            Como ajudamos seu negócio a crescer
          </h2>
          <p className="font-body text-base md:text-lg text-muted-foreground mt-4 leading-relaxed font-light">
            Desenvolvemos ecossistemas completos para profissionalizar e valorizar sua imagem digital.
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
          {solutions.map((sol) => (
            <div
              key={sol.id}
              className="p-8 rounded-2xl bg-white border border-[#443A94]/10 hover:border-secondary/20 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 text-left flex flex-col gap-4"
            >
              {/* Icon wrapper */}
              <div className="w-10 h-10 rounded-xl bg-secondary/5 flex items-center justify-center w-fit">
                {sol.iconComponent}
              </div>

              <h3 className="text-xl font-display font-normal text-primary leading-tight">
                {sol.title}
              </h3>

              <p className="font-body text-sm text-muted-foreground leading-relaxed font-light">
                {sol.description}
              </p>
            </div>
          ))}
        </div>

        {/* Centered Single Strategic CTA */}
        <div className="text-center">
          <Link
            to="/servicos"
            className="inline-flex items-center justify-center font-body font-bold text-sm bg-primary text-white hover:bg-secondary py-4 px-10 rounded-full transition-all duration-300 shadow-md hover:-translate-y-0.5 min-h-[44px]"
          >
            Explorar todos os nossos serviços ✦
          </Link>
        </div>

      </div>
    </section>
  );
};

export default ServicesSection;
