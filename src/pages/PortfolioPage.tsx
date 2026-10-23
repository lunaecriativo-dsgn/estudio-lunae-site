import React from "react";
import { CheckCircle2, FileText, Globe } from "lucide-react";
import ServicePageShell from "@/components/ServicePageShell";

interface Item {
  title: string;
  text: string;
}

const documentItems: Item[] = [
  { title: "Curadoria de projetos", text: "Conversa de diagnóstico e seleção de 5 a 8 projetos." },
  { title: "Textos de apresentação", text: "Bio, “sobre mim” e descrição de cada projeto." },
  { title: "Diagramação", text: "Capa, projetos e contato, em PDF e arquivo editável." },
];

const siteItems: Item[] = [
  { title: "Curadoria e textos", text: "Seleção dos projetos, bio e descrição de cada case." },
  { title: "Projeto UX/UI", text: "Estrutura, wireframe e protótipo no Figma." },
  { title: "Desenvolvimento", text: "Site responsivo, pra computador e celular." },
  { title: "SEO básico e domínio", text: "Títulos, descrições e configuração inicial." },
  { title: "Suporte inicial", text: "1 mês de pequenos ajustes." },
];

const ItemCard: React.FC<Item> = ({ title, text }) => (
  <div className="p-6 bg-white rounded-2xl border border-[#443A94]/5 shadow-sm space-y-3">
    <CheckCircle2 className="w-6 h-6 text-secondary" />
    <h4 className="text-lg font-display font-normal text-primary">{title}</h4>
    <p className="font-body text-xs md:text-sm text-muted-foreground font-light leading-relaxed">{text}</p>
  </div>
);

const PortfolioPage = () => (
  <ServicePageShell
    seoTitle="Portfólio | Lunae Estúdio Criativo"
    seoDescription="Seu trabalho, bem apresentado. Criamos seu portfólio em documento ou em site, com curadoria de projetos, textos e design."
    schemaName="Portfólio | Lunae"
    breadcrumb="Portfólio"
    eyebrow="✦ NOVIDADE"
    title="Portfólio"
    intro="Seu trabalho, bem apresentado. Reunimos seus melhores projetos em um portfólio claro e bonito, em documento ou em site."
    faqCategory="portfolio"
    ctaTitle="Vamos montar o seu portfólio?"
    ctaText="Conte pelo WhatsApp quais projetos você quer mostrar e a gente organiza o resto."
    ctaButton="Quero meu portfólio ✦"
    whatsappMessage="Olá! Gostaria de montar o portfólio do meu trabalho com a equipe da Lunae."
  >
    {/* Objective */}
    <section className="mb-20 p-8 md:p-12 rounded-3xl bg-[#443A94]/5 border border-[#443A94]/10">
      <span className="font-body font-bold text-secondary tracking-widest uppercase text-xs block mb-3">
        🎯 OBJETIVO DO SERVIÇO
      </span>
      <h2 className="text-2xl md:text-3xl font-display font-normal text-primary mb-4">
        Mostre seu trabalho do jeito que ele merece
      </h2>
      <p className="font-body text-base md:text-lg text-muted-foreground leading-relaxed font-light">
        Um portfólio organizado ajuda quem chega a entender rápido o que você faz e a confiar no seu trabalho.
      </p>
    </section>

    {/* Formats */}
    <section className="mb-12">
      <span className="font-body font-bold text-[#443A94] tracking-widest uppercase text-xs block mb-3">
        ✦ DOIS FORMATOS
      </span>
      <h2 className="text-3xl md:text-4xl font-display font-normal text-primary mb-10">
        Escolha o que faz sentido agora
      </h2>

      <div className="space-y-14">
        <div>
          <h3 className="flex items-center gap-3 text-2xl font-display font-normal text-primary mb-2">
            <FileText className="w-6 h-6 text-secondary" /> Portfólio em documento
          </h3>
          <p className="font-body text-sm text-muted-foreground font-light mb-6">
            Um PDF pronto pra enviar por e-mail ou WhatsApp.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {documentItems.map((item) => <ItemCard key={item.title} {...item} />)}
          </div>
        </div>

        <div>
          <h3 className="flex items-center gap-3 text-2xl font-display font-normal text-primary mb-2">
            <Globe className="w-6 h-6 text-secondary" /> Portfólio em site
          </h3>
          <p className="font-body text-sm text-muted-foreground font-light mb-6">
            Um endereço seu, que qualquer pessoa acessa e que aparece no Google.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {siteItems.map((item) => <ItemCard key={item.title} {...item} />)}
          </div>
        </div>
      </div>
    </section>

    {/* Note */}
    <div className="mb-20 p-6 bg-secondary/5 rounded-2xl border border-secondary/10 font-body text-sm text-muted-foreground max-w-4xl">
      <span className="font-bold text-primary block mb-1">✦ Quer os dois?</span>
      Escolhendo documento e site, a curadoria e os textos entram uma vez só.
    </div>
  </ServicePageShell>
);

export default PortfolioPage;
