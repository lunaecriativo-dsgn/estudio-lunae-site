import React from "react";
import { Link } from "react-router-dom";
import { CheckCircle2, ArrowRight } from "lucide-react";

// Blocos reutilizados nas páginas de detalhe dos serviços.

export const SectionHead = ({
  eyebrow,
  title,
  text,
}: {
  eyebrow: string;
  title: string;
  text?: string;
}) => (
  <div className="mb-8">
    <span className="font-body font-bold text-[#443A94] tracking-widest uppercase text-xs block mb-3">
      {eyebrow}
    </span>
    <h2 className="text-3xl md:text-4xl font-display font-normal text-primary mb-3">{title}</h2>
    {text && (
      <p className="font-body text-sm md:text-base text-muted-foreground font-light leading-relaxed max-w-3xl">
        {text}
      </p>
    )}
  </div>
);

export const ObjectiveBox = ({ title, text }: { title: string; text: string }) => (
  <section className="mb-20 p-8 md:p-12 rounded-3xl bg-[#443A94]/5 border border-[#443A94]/10">
    <span className="font-body font-bold text-secondary tracking-widest uppercase text-xs block mb-3">
      🎯 OBJETIVO DO SERVIÇO
    </span>
    <h2 className="text-2xl md:text-3xl font-display font-normal text-primary mb-4">{title}</h2>
    <p className="font-body text-base md:text-lg text-muted-foreground leading-relaxed font-light">
      {text}
    </p>
  </section>
);

export const ItemCard: React.FC<{ title: string; text: string; badge?: string }> = ({
  title,
  text,
  badge,
}) => (
  <div className="p-6 bg-white rounded-2xl border border-[#443A94]/5 shadow-sm space-y-3">
    <div className="flex items-center justify-between">
      <CheckCircle2 className="w-6 h-6 text-secondary" />
      {badge && (
        <span className="font-body text-[10px] font-bold uppercase tracking-widest text-secondary bg-secondary/10 px-2.5 py-1 rounded-full">
          {badge}
        </span>
      )}
    </div>
    <h3 className="text-lg font-display font-normal text-primary">{title}</h3>
    <p className="font-body text-xs md:text-sm text-muted-foreground font-light leading-relaxed">
      {text}
    </p>
  </div>
);

export const ItemGrid = ({ children }: { children: React.ReactNode }) => (
  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">{children}</div>
);

export const PlanCard: React.FC<{ name: string; intro?: string; items: string[] }> = ({
  name,
  intro,
  items,
}) => (
  <div className="p-8 bg-white rounded-3xl border border-[#443A94]/10 shadow-sm flex flex-col gap-4">
    <h3 className="text-2xl font-display font-normal text-primary">{name}</h3>
    {intro && (
      <p className="font-body text-sm text-muted-foreground font-light leading-relaxed">{intro}</p>
    )}
    <ul className="space-y-2.5">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-2 font-body text-sm text-muted-foreground font-light">
          <CheckCircle2 className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  </div>
);

export const NoteBox = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => (
  <div className="mb-12 p-6 bg-secondary/5 rounded-2xl border border-secondary/10 font-body text-sm text-muted-foreground max-w-4xl">
    <span className="font-bold text-primary block mb-1">✦ {title}</span>
    {children}
  </div>
);

// Explica quando um serviço depende de itens de outro pacote (cobrados de forma modular)
export const DependenciaBox = ({
  title,
  intro,
  itens,
}: {
  title: string;
  intro?: string;
  itens: { titulo: string; texto: string }[];
}) => (
  <section className="mb-12 p-6 md:p-8 rounded-2xl bg-white/80 border border-[#443A94]/10 max-w-4xl">
    <span className="font-body font-bold text-secondary tracking-widest uppercase text-xs block mb-3">
      ✦ {title}
    </span>
    {intro && (
      <p className="font-body text-sm md:text-base text-muted-foreground font-light leading-relaxed mb-4">{intro}</p>
    )}
    <ul className="space-y-4">
      {itens.map((item) => (
        <li key={item.titulo} className="font-body text-sm md:text-base text-muted-foreground font-light leading-relaxed">
          <strong className="font-semibold text-primary block">{item.titulo}</strong>
          {item.texto}
        </li>
      ))}
    </ul>
  </section>
);

// Aviso padrão de orçamento modular, repetido em todas as páginas de serviço
export const ModularNote = () => (
  <section className="mb-12 p-6 md:p-8 rounded-2xl bg-[#443A94]/5 border border-[#443A94]/10 max-w-4xl">
    <span className="font-body font-bold text-secondary tracking-widest uppercase text-xs block mb-2">
      ✦ ORÇAMENTO MODULAR
    </span>
    <p className="font-body text-sm md:text-base text-primary font-medium leading-relaxed">
      Você paga só pelos itens que escolher. Se um mesmo serviço aparece em mais de um pacote, ele não é cobrado de novo.
      Quando um serviço precisa de itens de outro, esses itens entram de forma modular, pelo valor do serviço de origem.
    </p>
  </section>
);

export const CrossLink = ({
  to,
  title,
  text,
  cta,
}: {
  to: string;
  title: string;
  text: string;
  cta: string;
}) => (
  <section className="mb-20 p-8 rounded-3xl bg-white/70 border border-[#443A94]/10 flex flex-col md:flex-row md:items-center md:justify-between gap-5">
    <div>
      <h3 className="text-2xl font-display font-normal text-primary mb-1">{title}</h3>
      <p className="font-body text-sm text-muted-foreground font-light">{text}</p>
    </div>
    <Link
      to={to}
      className="inline-flex items-center justify-center gap-2 font-body font-bold text-sm text-primary hover:text-secondary transition-colors min-h-[44px] whitespace-nowrap"
    >
      {cta} <ArrowRight size={16} />
    </Link>
  </section>
);
