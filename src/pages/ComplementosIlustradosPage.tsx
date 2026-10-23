import React from "react";
import { Sparkles } from "lucide-react";
import ServicePageShell from "@/components/ServicePageShell";

interface Complemento {
  title: string;
  text: string;
  combina: string;
}

const complementos: Complemento[] = [
  {
    title: "Persona ilustrada",
    text: "Briefing, texto da persona, ilustração da personagem e diagramação.",
    combina: "Identidade Visual e Portfólio",
  },
  {
    title: "Infográfico ilustrado",
    text: "Processo, passo a passo ou dados em uma peça ilustrada.",
    combina: "Instagram, Site e Portfólio",
  },
  {
    title: "Carrossel informativo ilustrado",
    text: "Roteiro e até 8 lâminas ilustradas, com textos editáveis.",
    combina: "Instagram",
  },
  {
    title: "Pacote de 3 carrosséis",
    text: "3 carrosséis com a mesma linguagem visual.",
    combina: "Instagram",
  },
  {
    title: "Ilustrações para site",
    text: "3 a 5 ilustrações para seções como “como funciona” e “sobre”.",
    combina: "Site e Portfólio em site",
  },
  {
    title: "Ícones personalizados",
    text: "Conjunto de 8 ícones ilustrados.",
    combina: "Identidade Visual e Site",
  },
  {
    title: "Personagem da marca",
    text: "Mascote ou personagem com 3 poses ou expressões.",
    combina: "Identidade Visual",
  },
];

const ComplementosIlustradosPage = () => (
  <ServicePageShell
    seoTitle="Complementos Ilustrados | Lunae Estúdio Criativo"
    seoDescription="Ilustrações feitas só para a sua marca: persona, infográfico, carrossel, ícones e personagem. Contrate sozinhas ou junto de outros serviços."
    schemaName="Complementos Ilustrados | Lunae"
    breadcrumb="Complementos Ilustrados"
    eyebrow="✦ NOVIDADE"
    title="Complementos Ilustrados"
    intro="Ilustrações feitas só pra sua marca, pra explicar, encantar e diferenciar. Contrate sozinhas ou junto de qualquer outro serviço."
    faqCategory="complementos-ilustrados"
    ctaTitle="Qual ilustração a sua marca precisa?"
    ctaText="Conte pelo WhatsApp o que você quer explicar ou mostrar e a gente desenha com você."
    ctaButton="Quero ilustrações pra minha marca ✦"
    whatsappMessage="Olá! Gostaria de saber mais sobre os Complementos Ilustrados da Lunae."
  >
    {/* Objective */}
    <section className="mb-20 p-8 md:p-12 rounded-3xl bg-[#443A94]/5 border border-[#443A94]/10">
      <span className="font-body font-bold text-secondary tracking-widest uppercase text-xs block mb-3">
        🎯 OBJETIVO DO SERVIÇO
      </span>
      <h2 className="text-2xl md:text-3xl font-display font-normal text-primary mb-4">
        Uma marca com personalidade em cada detalhe
      </h2>
      <p className="font-body text-base md:text-lg text-muted-foreground leading-relaxed font-light">
        Ilustrações autorais deixam sua comunicação mais clara, mais bonita e impossível de confundir com a de outra marca.
      </p>
    </section>

    {/* Items */}
    <section className="mb-12">
      <span className="font-body font-bold text-[#443A94] tracking-widest uppercase text-xs block mb-3">
        ✦ O QUE VOCÊ PODE ESCOLHER
      </span>
      <h2 className="text-3xl md:text-4xl font-display font-normal text-primary mb-6">
        Sete complementos, um estilo só
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {complementos.map((item) => (
          <div key={item.title} className="flex flex-col justify-between p-6 bg-white rounded-2xl border border-[#443A94]/5 shadow-sm">
            <div className="space-y-3">
              <Sparkles className="w-6 h-6 text-secondary" />
              <h3 className="text-lg font-display font-normal text-primary">{item.title}</h3>
              <p className="font-body text-xs md:text-sm text-muted-foreground font-light leading-relaxed">{item.text}</p>
            </div>
            <p className="mt-5 inline-flex flex-wrap items-center gap-2 font-body text-xs text-muted-foreground">
              <span className="font-bold text-[#443A94] uppercase tracking-widest text-[10px]">Combina com</span>
              <span className="px-3 py-1 rounded-full bg-[#443A94]/5 border border-[#443A94]/10 text-primary">{item.combina}</span>
            </p>
          </div>
        ))}
      </div>
    </section>

    {/* Note */}
    <div className="mb-20 p-6 bg-secondary/5 rounded-2xl border border-secondary/10 font-body text-sm text-muted-foreground max-w-4xl">
      <span className="font-bold text-primary block mb-1">✦ Como você recebe</span>
      As ilustrações chegam prontas, em PNG ou SVG. Os textos e layouts que acompanham as peças ficam editáveis.
    </div>
  </ServicePageShell>
);

export default ComplementosIlustradosPage;
