import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import charLuiza from "@/assets/char-luiza.png";
import fotoLuiza from "@/assets/foto-luiza.png";
import charNayla from "@/assets/char-nayla.png";
import fotoNayla from "@/assets/foto-nayla.png";
import personagensCores from "@/assets/personagens-cores.png";

interface TeamMember {
  id: string;
  name: string;
  role: string;
  description: string;
  illustration: string;
  photo: string;
}

const team: TeamMember[] = [
  {
    id: "luiza",
    name: "Luiza Menezes",
    role: "Product Designer & Estrategista",
    description: "Une olhar analítico e design centrado na usuária para criar experiências digitais de altíssimo impacto.",
    illustration: charLuiza,
    photo: fotoLuiza,
  },
  {
    id: "nayla",
    name: "Nayla Prilla",
    role: "Ilustradora & Designer Visual",
    description: "Traduz conceitos profundos em formas, cores e grafismos autorais de nível estritamente premium.",
    illustration: charNayla,
    photo: fotoNayla,
  },
];

const AboutSection = () => {
  const [hoveredMember, setHoveredMember] = useState<string | null>(null);

  return (
    <section id="sobre" className="py-24 md:py-40 bg-[#443A94]/5 border-y border-[#443A94]/10 scroll-mt-20">
      <div className="section-container max-w-6xl mx-auto px-6 md:px-12">
        
        {/* Intro Grid */}
        <div className="grid lg:grid-cols-12 gap-12 md:gap-24 items-start mb-24">
          <div className="lg:col-span-5 text-left">
            <span className="font-body font-bold text-secondary tracking-widest uppercase text-xs md:text-sm block mb-4">
              ✦ QUEM SOMOS
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-normal text-primary leading-tight">
              Duas mentes, um propósito
            </h2>
          </div>
          <div className="lg:col-span-7 text-left space-y-6">
            <p className="font-body text-base md:text-lg text-muted-foreground leading-relaxed font-light">
              A Lunae nasce de um encontro de propósitos: transformar a autonomia feminina em algo tangível, visual e estratégico. Somos duas mulheres que entenderam que o trabalho é o veículo para a liberdade.
            </p>
          </div>
        </div>

        {/* Interactive Founders Grid */}
        <div className="grid md:grid-cols-2 gap-16 max-w-4xl mx-auto mb-16">
          {team.map((member) => (
            <article key={member.id} className="text-center group flex flex-col items-center">
              
              {/* Polaroid with hover interaction */}
              <div
                className="relative w-64 h-80 mb-6 cursor-pointer select-none"
                onMouseEnter={() => setHoveredMember(member.id)}
                onMouseLeave={() => setHoveredMember(null)}
                onFocus={() => setHoveredMember(member.id)}
                onBlur={() => setHoveredMember(null)}
                tabIndex={0}
                role="img"
                aria-label={`Foto interativa de ${member.name}`}
              >
                <div className="absolute inset-0 bg-white rounded-2xl shadow-xl p-3 pb-10 transition-transform duration-500 ease-out group-hover:rotate-0 rotate-[-1.5deg]">
                  <div className="relative w-full h-full overflow-hidden rounded-lg bg-[#443A94]/5">
                    
                    {/* Illustration (default) */}
                    <img
                      src={member.illustration}
                      alt={`Ilustração de ${member.name}`}
                      className={`absolute inset-0 w-full h-full object-cover object-top transition-opacity duration-500 ${
                        hoveredMember === member.id ? "opacity-0" : "opacity-100"
                      }`}
                    />

                    {/* Real Photo (on hover) */}
                    <img
                      src={member.photo}
                      alt={`Foto real de ${member.name}`}
                      className={`absolute inset-0 w-full h-full object-cover object-top transition-opacity duration-500 ${
                        hoveredMember === member.id ? "opacity-100" : "opacity-0"
                      }`}
                    />

                  </div>
                </div>
              </div>

              {/* Founder Info */}
              <h3 className="text-2xl font-display font-normal text-primary mt-4">
                {member.name}
              </h3>
              <p className="font-body text-xs font-semibold text-secondary tracking-wider uppercase mt-1">
                {member.role}
              </p>
              <p className="font-body text-sm text-muted-foreground leading-relaxed mt-3 max-w-sm font-light">
                {member.description}
              </p>
            </article>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <Link
            to="/sobre"
            className="inline-flex items-center justify-center font-body font-bold text-sm bg-primary text-white hover:bg-secondary py-4 px-10 rounded-full transition-all duration-300 shadow-md hover:-translate-y-0.5 min-h-[44px]"
          >
            Conheça a Lunae ✦
          </Link>
        </div>

      </div>

      {/* Elegant, subtle visual divider */}
      <div className="mt-20 w-full overflow-hidden pointer-events-none select-none max-w-5xl mx-auto px-6">
        <img
          src={personagensCores}
          alt="Ilustração lúdica de figuras femininas unidas"
          className="w-full h-auto opacity-80"
          loading="lazy"
        />
      </div>
    </section>
  );
};

export default AboutSection;
