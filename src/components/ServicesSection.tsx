import React from "react";
import { Link } from "react-router-dom";
import { frentes } from "@/data/servicos";

const ServicesSection = () => {
  return (
    <section id="servicos" className="py-24 md:py-40 scroll-mt-20 border-t border-[#443A94]/5">
      <div className="section-container max-w-6xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-24 text-left md:text-center md:mx-auto">
          <span className="font-body font-bold text-secondary tracking-widest uppercase text-xs md:text-sm block mb-4">
            ✦ NOSSAS TRÊS FRENTES
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-normal text-primary leading-tight">
            Como ajudamos seu negócio a crescer
          </h2>
          <p className="font-body text-base md:text-lg text-muted-foreground mt-4 leading-relaxed font-light">
            Marca, presença e gestão. Você escolhe por onde começar.
          </p>
        </div>

        {/* Frentes */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
          {frentes.map((frente) => {
            const Icon = frente.icon;
            return (
              <div
                key={frente.id}
                className="p-8 rounded-2xl bg-white border border-[#443A94]/10 hover:border-secondary/20 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 text-left flex flex-col gap-4"
              >
                <div className="w-10 h-10 rounded-xl bg-secondary/5 flex items-center justify-center w-fit">
                  <Icon className="w-5 h-5 text-secondary" />
                </div>

                <h3 className="text-xl font-display font-normal text-primary leading-tight">
                  {frente.title}
                </h3>

                <p className="font-body text-sm text-muted-foreground leading-relaxed font-light">
                  {frente.description}
                </p>

                <ul className="mt-auto pt-2 space-y-1 border-t border-[#443A94]/10">
                  {frente.servicos.map((s) => (
                    <li key={s.id}>
                      <Link
                        to={s.url}
                        className="inline-flex items-center min-h-[36px] font-body text-sm font-medium text-primary hover:text-secondary transition-colors"
                      >
                        {s.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
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
