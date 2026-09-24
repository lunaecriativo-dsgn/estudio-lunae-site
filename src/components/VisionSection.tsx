import React from "react";
import { Link } from "react-router-dom";

const VisionSection = () => {
  return (
    <section id="manifesto" className="py-24 md:py-40 bg-background relative overflow-hidden border-t border-[#443A94]/5">
      <div className="section-container max-w-5xl mx-auto px-6 md:px-12 text-left">
        <div className="grid lg:grid-cols-12 gap-12 md:gap-24 items-start">
          
          {/* Section Header Left */}
          <div className="lg:col-span-4">
            <span className="font-body font-bold text-secondary tracking-widest uppercase text-xs md:text-sm block mb-4">
              ✦ NOSSO MANIFESTO
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-normal text-[#1E1E1E] leading-tight">
              O propósito por trás de cada criação
            </h2>
          </div>

          {/* Vision Content Right */}
          <div className="lg:col-span-8 space-y-8">
            <p className="font-serif text-2xl md:text-3xl text-[#443A94] font-medium leading-relaxed">
              Acreditamos que a independência de uma mulher se constrói ocupando espaços com força, inteligência e voz própria.
            </p>
            <p className="font-body text-base text-muted-foreground leading-relaxed max-w-2xl font-light">
              Nascemos da união entre a precisão estratégica do design de experiência e a sensibilidade da arte autoral. Não entregamos apenas layouts; moldamos pontes seguras para que o seu trabalho seja visto e valorizado pelo que realmente é.
            </p>
            <p className="font-body text-base text-muted-foreground leading-relaxed max-w-2xl font-light">
              Seu negócio merece o respeito de uma marca impecável. Estamos aqui para ajudar você a conquistar sua autonomia e se orgulhar de cada detalhe da sua casa digital.
            </p>
            
            <div className="pt-4">
              <Link
                to="/sobre"
                className="inline-flex items-center justify-center font-body font-bold text-sm bg-primary text-white hover:bg-secondary py-4 px-8 rounded-full transition-all duration-300 shadow-md hover:-translate-y-0.5 min-h-[44px]"
              >
                Conheça nossa história ✦
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default VisionSection;
