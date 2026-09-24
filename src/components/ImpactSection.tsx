import React from "react";
import { Link } from "react-router-dom";
import { Sparkles, Eye, Award, Globe } from "lucide-react";

interface ImpactItem {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const impacts: ImpactItem[] = [
  {
    icon: <Sparkles className="w-6 h-6 text-secondary" />,
    title: "Clareza",
    description: "Sua essência traduzida em uma mensagem simples, forte e marcante."
  },
  {
    icon: <Eye className="w-6 h-6 text-secondary" />,
    title: "Posicionamento",
    description: "Atraia clientes que valorizam de forma instintiva sua entrega."
  },
  {
    icon: <Award className="w-6 h-6 text-secondary" />,
    title: "Autoridade Visual",
    description: "Visual que transmite sua identidade e credibilidade em qualquer lugar."
  },
  {
    icon: <Globe className="w-6 h-6 text-secondary" />,
    title: "Presença Digital",
    description: "Sua marca estabelecida com um site otimizado para o Google."
  }
];

const ImpactSection = () => {
  return (
    <section id="impacto" className="py-24 md:py-40 bg-[#443A94]/5 border-y border-[#443A94]/10 relative overflow-hidden">
      <div className="absolute inset-0 bg-radial-gradient from-[#FA7C9C]/5 via-transparent to-transparent pointer-events-none" />

      <div className="section-container max-w-6xl mx-auto px-6 md:px-12">
        <div className="max-w-3xl mb-20 text-left">
          <span className="font-body font-bold text-secondary tracking-widest uppercase text-xs md:text-sm block mb-4">
            ✦ O IMPACTO QUE CRIAMOS
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-normal text-primary leading-tight">
            Elevando o patamar da sua presença profissional
          </h2>
          <p className="font-body text-base md:text-lg text-muted-foreground mt-4 leading-relaxed font-light">
            Transformamos negócios em marcas mais claras, profissionais e reconhecíveis.
          </p>
        </div>

        {/* Minimal Grid of Benefits */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 items-start mb-16">
          {impacts.map((item, index) => (
            <article
              key={index}
              className="flex flex-col space-y-4 text-left p-6 bg-white/70 backdrop-blur-sm rounded-2xl border border-[#443A94]/5 hover:border-secondary/25 transition-all duration-300 hover:-translate-y-1 h-full shadow-sm"
            >
              <div className="w-12 h-12 rounded-xl bg-[#443A94]/5 flex items-center justify-center">
                {item.icon}
              </div>
              <h3 className="text-lg font-display font-normal text-primary">
                {item.title}
              </h3>
              <p className="font-body text-xs md:text-sm text-muted-foreground leading-relaxed font-light">
                {item.description}
              </p>
            </article>
          ))}
        </div>

        {/* Action Button */}
        <div className="text-center">
          <Link
            to="/processo"
            className="inline-flex items-center justify-center font-body font-bold text-sm bg-primary text-white hover:bg-secondary py-4 px-10 rounded-full transition-all duration-300 shadow-md hover:-translate-y-0.5 min-h-[44px]"
          >
            Ver nossa metodologia ✦
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
