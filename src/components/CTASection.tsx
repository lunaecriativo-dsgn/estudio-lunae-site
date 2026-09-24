import React from "react";

const CTASection = () => {
  const handleWhatsApp = () => {
    const message = encodeURIComponent(
      "Olá! Minha marca já existe, mas sinto que ela precisa ocupar mais espaço. Gostaria de conversar com a equipe da Lunae sobre as soluções."
    );
    window.open(`https://wa.me/5513991598181?text=${message}`, "_blank");
  };

  return (
    <section id="cta" className="py-32 md:py-48 bg-background relative overflow-hidden border-t border-[#443A94]/5">
      {/* Soft background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#FA7C9C]/5 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="section-container max-w-4xl mx-auto px-6 md:px-12 text-center">
        <div className="space-y-12">
          
          {/* Main Brand-Defining Heading */}
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-display font-normal text-[#1E1E1E] leading-tight tracking-wide max-w-3xl mx-auto">
            Sua marca já existe. <br />
            <span className="text-[#443A94]">Agora ela precisa ocupar espaço.</span>
          </h2>

          {/* Supporting paragraph */}
          <p className="text-base md:text-xl font-body text-muted-foreground leading-relaxed max-w-2xl mx-auto font-light">
            Somos parceiras de jornada: vamos ouvir seu desafio e dar forma à marca que sua essência já pede.
          </p>

          {/* Single strategic CTA button */}
          <div className="pt-4 flex justify-center">
            <button
              onClick={handleWhatsApp}
              className="px-10 py-5 bg-[#443A94] text-white hover:bg-[#FA7C9C] hover:text-white transition-all duration-300 rounded-full font-body font-semibold text-base md:text-lg shadow-lg shadow-[#443A94]/15 hover:shadow-[#FA7C9C]/30 hover:-translate-y-1 cursor-pointer"
            >
              Fale direto conosco ✦
            </button>
          </div>
          <p className="block w-fit mx-auto font-display font-normal text-3xl md:text-5xl tracking-wide text-primary mt-4 origin-center cursor-default transition-transform duration-300 motion-safe:hover:scale-120 motion-reduce:transition-none">Conta com a gente!</p>

          {/* Subtle signature curve decoration */}
          <div className="pt-12">
            <svg viewBox="0 0 500 30" className="w-full max-w-sm mx-auto h-6 opacity-30" aria-hidden="true">
              <path
                d="M0,15 Q125,5 250,15 T500,15"
                fill="none"
                stroke="hsl(var(--primary))"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <circle cx="250" cy="15" r="3" fill="hsl(var(--primary))" />
            </svg>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CTASection;
