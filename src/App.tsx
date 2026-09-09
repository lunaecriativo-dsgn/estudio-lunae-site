/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { motion } from "motion/react";
import { Laptop, Book, Globe, Instagram, Linkedin, Mail } from "lucide-react";

export default function App() {
  return (
    <div className="min-h-screen paper-texture flex flex-col items-center justify-between p-10 overflow-hidden relative">
      {/* Background Moon Glow Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full moon-glow -z-10 opacity-50" />

      {/* Header Section */}
      <header className="text-center max-w-3xl mt-8 z-10 animate-fade-in-up">
        <div className="relative inline-block mb-6">
          <h1 className="section-title">
            Estamos Criando Algo Incrível!
          </h1>
        </div>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-lg md:text-xl text-muted-foreground font-body leading-relaxed max-w-xl mx-auto text-balance"
        >
          O Estúdio Lunae está em fase de transformação. Em breve, a sua identidade visual ganhará mais luz e cor.
        </motion.p>
      </header>

      {/* Central Illustration Section */}
      <main className="flex-1 flex items-center justify-center relative w-full max-w-5xl min-h-[500px] z-10">
        <div className="relative animate-float">
          {/* Character Illustration */}
          <div className="relative z-20">
            <div className="w-full max-w-2xl flex items-center justify-center">
              <img 
                src="/assets/about-illustration.png" 
                alt="Sobre Nós - Estúdio Lunae" 
                className="w-full h-auto max-h-[550px] object-contain drop-shadow-2xl"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </main>

      {/* CTA Button */}
      <div className="z-10 mb-10 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
        <a
          href="https://wa.me/5513991598181"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary inline-block"
        >
          Fale Conosco no WhatsApp
        </a>
      </div>

      {/* Footer Section */}
      <footer className="w-full max-w-6xl flex items-center justify-between py-8 border-t border-border relative">
        <div className="w-32" /> {/* Left spacer for symmetry */}
        
        <div className="absolute left-1/2 -translate-x-1/2">
          <span className="font-display font-bold text-2xl text-primary tracking-widest">lunae.</span>
        </div>
        
        <div className="flex gap-4 z-10">
          <SocialDot 
            icon={Instagram} 
            href="https://www.instagram.com/lunae.estudiocriativo/" 
          />
        </div>
      </footer>
    </div>
  );
}

function SocialDot({ icon: Icon, href }: { icon: any, href: string }) {
  return (
    <a 
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="w-10 h-10 border border-primary/20 rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300 shadow-soft"
    >
      <Icon size={20} />
    </a>
  );
}

function OrbitingIcon({ children, delay = 0, radius = 150 }: { children: React.ReactNode, delay?: number, radius?: number }) {
  return (
    <motion.div
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      animate={{
        rotate: 360,
      }}
      transition={{
        duration: 10,
        repeat: Infinity,
        ease: "linear",
        delay: -delay,
      }}
      style={{ width: radius * 2, height: radius * 2 }}
    >
      <motion.div
        className="absolute top-0 left-1/2 -translate-x-1/2"
        animate={{
          rotate: -360,
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear",
          delay: -delay,
        }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}
