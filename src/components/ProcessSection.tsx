import React from "react";
import { Link } from "react-router-dom";
import { Compass, Target, PenTool, Edit3, CheckCircle } from "lucide-react";

interface Step {
  num: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const steps: Step[] = [
  {
    num: "01",
    title: "Descobrir",
    description: "Mapeamos sua essência, público ideal e diferenciais estratégicos.",
    icon: <Compass className="w-5 h-5 text-secondary" />,
  },
  {
    num: "02",
    title: "Estruturar",
    description: "Planejamos a arquitetura de conteúdo e funis de conversão.",
    icon: <Target className="w-5 h-5 text-secondary" />,
  },
  {
    num: "03",
    title: "Criar",
    description: "Desenvolvemos o design autoral premium com acabamento de luxo.",
    icon: <PenTool className="w-5 h-5 text-secondary" />,
  },
  {
    num: "04",
    title: "Refinar",
    description: "Lapidamos cada detalhe visual de forma segura e colaborativa.",
    icon: <Edit3 className="w-5 h-5 text-secondary" />,
  },
  {
    num: "05",
    title: "Entregar",
    description: "Colocamos seu site no ar e enviamos materiais com total autonomia.",
    icon: <CheckCircle className="w-5 h-5 text-secondary" />,
  },
];

const ProcessSection = () => {
  return (
    <section id="processo" className="py-24 md:py-40 bg-background scroll-mt-20 border-t border-[#443A94]/5">
      <div className="section-container max-w-6xl mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="mb-20 text-left md:text-center md:max-w-3xl md:mx-auto">
          <span className="font-body font-bold text-secondary tracking-widest uppercase text-xs md:text-sm block mb-4">
            ✦ PROCESSO CRIATIVO
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-normal text-primary leading-tight">
            Metodologia sem complicações
          </h2>
          <p className="font-body text-base md:text-lg text-muted-foreground mt-4 leading-relaxed font-light">
            Trabalhamos de forma organizada e transparente para que você se sinta parte do projeto sem nenhum jargão técnico.
          </p>
        </div>

        {/* Simplified 5-Step Flow */}
        <div className="grid sm:grid-cols-2 md:grid-cols-5 gap-6 md:gap-4 lg:gap-8 items-stretch mb-16">
          {steps.map((step) => (
            <article
              key={step.num}
              className="relative p-6 rounded-2xl bg-white border border-[#443A94]/10 hover:border-secondary/25 transition-all duration-300 flex flex-col justify-between text-left shadow-sm"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold text-secondary/40">
                    {step.num}
                  </span>
                  <div className="w-9 h-9 rounded-lg bg-secondary/5 flex items-center justify-center flex-shrink-0">
                    {step.icon}
                  </div>
                </div>
                <h3 className="text-lg font-display font-normal text-primary">
                  {step.title}
                </h3>
                <p className="font-body text-xs md:text-sm text-muted-foreground leading-relaxed font-light">
                  {step.description}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <Link
            to="/processo"
            className="inline-flex items-center justify-center font-body font-bold text-sm bg-primary text-white hover:bg-secondary py-4 px-10 rounded-full transition-all duration-300 shadow-md hover:-translate-y-0.5 min-h-[44px]"
          >
            Conheça nosso processo ✦
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
