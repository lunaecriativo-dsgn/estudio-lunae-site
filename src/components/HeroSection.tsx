import React from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import heroIllustration from "@/assets/hero-illustration-new.webp";

const HeroSection = () => {
  const handleWhatsApp = () => {
    const message = encodeURIComponent(
      "Olá! Sinto que minha marca não comunica meu verdadeiro valor e gostaria de conversar sobre as soluções da Lunae."
    );
    window.open(`https://wa.me/5513991598181?text=${message}`, "_blank");
  };

  return (
    <section className="relative flex flex-col justify-center pt-32 pb-24 md:pt-48 md:pb-36 overflow-hidden bg-background">
      {/* Subtle brand touch */}
      <div className="absolute top-32 left-10 text-secondary/40 animate-pulse text-2xl pointer-events-none hidden md:block">✦</div>
      <div className="absolute bottom-32 right-10 text-secondary/30 animate-pulse text-2xl pointer-events-none hidden md:block">🌙</div>

      <div className="section-container relative z-10 w-full max-w-6xl mx-auto px-6 md:px-12">
        <div className="flex flex-col items-center text-center space-y-12">
          
          {/* Tagline */}
          <motion.span 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-body font-bold text-secondary tracking-widest uppercase text-xs md:text-sm"
          >
            ✦ ESTÚDIO CRIATIVO LUNAE
          </motion.span>

          {/* Strong Headline - Extra Large */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-display font-normal text-[#443A94] leading-tight tracking-wide max-w-5xl"
          >
            Sua marca comunica o <span className="text-[#FA7C9C] relative inline-block">verdadeiro valor</span> do seu trabalho?
          </motion.h1>

          {/* Short Subheadline */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-2xl font-body text-muted-foreground leading-relaxed max-w-3xl font-light"
          >
            Traduzimos sua essência em identidade visual, posicionamento e um site, pra sua marca ocupar o espaço que é dela.
          </motion.p>

          {/* Dual Strategic CTAs */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="pt-4 flex flex-col sm:flex-row items-center gap-4 justify-center"
          >
            <Link
              to="/servicos"
              className="px-8 py-4.5 bg-[#443A94] text-white hover:bg-[#FA7C9C] transition-all duration-300 rounded-full font-body font-semibold text-base shadow-lg shadow-[#443A94]/15 hover:shadow-[#FA7C9C]/30 hover:-translate-y-0.5 min-h-[44px] flex items-center justify-center text-center w-full sm:w-auto"
            >
              Conheça nossos serviços
            </Link>
            <button
              onClick={handleWhatsApp}
              className="px-8 py-4.5 border border-[#443A94]/25 text-primary hover:border-secondary hover:text-secondary transition-all duration-300 rounded-full font-body font-semibold text-base hover:-translate-y-0.5 min-h-[44px] flex items-center justify-center text-center w-full sm:w-auto bg-white/50 backdrop-blur-sm cursor-pointer"
            >
              Falar com a Lunae ✦
            </button>
          </motion.div>

          {/* Protagonist Large Visual Asset */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="w-full max-w-4xl pt-12 md:pt-16"
          >
            <div className="relative rounded-3xl overflow-hidden bg-gradient-to-b from-[#443A94]/5 to-transparent p-4 md:p-8">
              <img
                src={heroIllustration}
                alt="Ilustração autoral representativa do Estúdio Lunae"
                className="w-full h-auto max-h-[500px] object-contain mx-auto select-none pointer-events-none drop-shadow-2xl"
                loading="eager"
              />
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
