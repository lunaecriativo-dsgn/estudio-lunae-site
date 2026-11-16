import React from "react";
import { FileText, Globe } from "lucide-react";
import ServicePageShell from "@/components/ServicePageShell";
import { ObjectiveBox, SectionHead, ItemCard, ItemGrid, NoteBox, CrossLink } from "@/components/ServiceBlocks";

const documentItems = [
  { title: "Curadoria de projetos", text: "Conversa de diagnóstico e seleção de 5 a 8 projetos." },
  { title: "Textos de apresentação", text: "Bio, “sobre mim” e descrição de cada projeto." },
  { title: "Diagramação", text: "Capa, projetos e contato, em PDF e arquivo editável." },
];

const siteItems = [
  { title: "Curadoria e textos", text: "Seleção dos projetos, bio e descrição de cada case." },
  { title: "Projeto UX/UI", text: "Estrutura, wireframe e protótipo no Figma." },
  { title: "Desenvolvimento", text: "Site responsivo, pra computador e celular." },
  { title: "SEO básico e domínio", text: "Títulos, descrições e configuração inicial." },
  { title: "Suporte inicial", text: "1 mês de pequenos ajustes." },
];

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
    <ObjectiveBox
      title="Mostre seu trabalho do jeito que ele merece"
      text="Um portfólio organizado ajuda quem chega a entender rápido o que você faz e a confiar no seu trabalho."
    />

    <section className="mb-12">
      <SectionHead eyebrow="✦ DOIS FORMATOS" title="Escolha o que faz sentido agora" />

      <div className="space-y-14">
        <div>
          <h3 className="flex items-center gap-3 text-2xl font-display font-normal text-primary mb-2">
            <FileText className="w-6 h-6 text-secondary" /> Portfólio em documento
          </h3>
          <p className="font-body text-sm text-muted-foreground font-light mb-6">
            Um PDF pronto pra enviar por e-mail ou WhatsApp.
          </p>
          <ItemGrid>
            {documentItems.map((item) => (
              <ItemCard key={item.title} {...item} />
            ))}
          </ItemGrid>
        </div>

        <div>
          <h3 className="flex items-center gap-3 text-2xl font-display font-normal text-primary mb-2">
            <Globe className="w-6 h-6 text-secondary" /> Portfólio em site
          </h3>
          <p className="font-body text-sm text-muted-foreground font-light mb-6">
            Um endereço seu, que qualquer pessoa acessa e que aparece no Google.
          </p>
          <ItemGrid>
            {siteItems.map((item) => (
              <ItemCard key={item.title} {...item} />
            ))}
          </ItemGrid>
        </div>
      </div>
    </section>

    <NoteBox title="Precisa de identidade visual?">
      Se precisar de identidade visual e elementos gráficos, a gente soma esses itens de forma modular, cada serviço do
      pacote com o seu valor.
    </NoteBox>

    <NoteBox title="Quer os dois?">
      Escolhendo documento e site, a curadoria e os textos entram uma vez só.
    </NoteBox>

    <NoteBox title="Atualiza com frequência?">
      No pacote mensal, o portfólio ganha novos projetos a cada mês.
    </NoteBox>

    <CrossLink
      to="/servicos/complementos-ilustrados"
      title="Quer uma persona ou ilustrações no portfólio?"
      text="Persona ilustrada e ilustrações para site combinam com o portfólio."
      cta="Ver Complementos Ilustrados"
    />
  </ServicePageShell>
);

export default PortfolioPage;
