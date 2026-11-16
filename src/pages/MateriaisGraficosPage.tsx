import React from "react";
import ServicePageShell from "@/components/ServicePageShell";
import { ObjectiveBox, SectionHead, ItemCard, ItemGrid, NoteBox, CrossLink } from "@/components/ServiceBlocks";

const itens = [
  { title: "Cartão de visita", text: "Frente e verso, arquivo pronto pra gráfica." },
  { title: "Flyer ou panfleto", text: "A5 ou A4, frente e verso." },
  { title: "Folder", text: "Até 2 dobras (6 painéis), com textos organizados junto com você." },
  { title: "Cardápio", text: "Até 4 páginas ou painéis, pra restaurantes, cafés, confeitarias e similares." },
  { title: "Página extra de cardápio", text: "Cada página ou painel além das 4 incluídas." },
  { title: "Papelaria institucional", text: "Papel timbrado e assinatura de e-mail." },
  { title: "Banner, faixa ou adesivo", text: "Uma peça em formato de grande impressão." },
  { title: "Rótulo ou etiqueta", text: "Rótulo de produto ou tag, um modelo." },
];

const MateriaisGraficosPage = () => (
  <ServicePageShell
    seoTitle="Materiais Gráficos | Lunae Estúdio Criativo"
    seoDescription="Sua marca também fora das telas. Criamos cartão de visita, folder, cardápio, papelaria e outros impressos com a identidade do seu digital."
    schemaName="Materiais Gráficos | Lunae"
    breadcrumb="Materiais Gráficos"
    eyebrow="✦ NOVIDADE"
    title="Materiais Gráficos"
    intro="Sua marca também fora das telas. Criamos cartões, folders, cardápios e outras peças impressas com a mesma identidade do seu digital."
    faqCategory="materiais-graficos"
    ctaTitle="Vamos levar sua marca pro papel?"
    ctaText="Conte pelo WhatsApp quais peças você precisa e a gente organiza o resto."
    ctaButton="Quero meus materiais ✦"
    whatsappMessage="Olá! Gostaria de saber mais sobre os Materiais Gráficos da Lunae."
  >
    <ObjectiveBox
      title="A mesma marca, no digital e no papel"
      text="Peças impressas com a sua identidade passam profissionalismo em cada contato presencial."
    />

    <section className="mb-12">
      <SectionHead
        eyebrow="✦ O QUE VOCÊ PODE ESCOLHER"
        title="Oito peças, uma identidade só"
        text="Contrate sozinhas, junto de qualquer outro serviço ou no pacote mensal."
      />
      <ItemGrid>
        {itens.map((item) => (
          <ItemCard key={item.title} {...item} />
        ))}
      </ItemGrid>
    </section>

    <NoteBox title="Precisa de identidade visual?">
      Se precisar de identidade visual e elementos gráficos, a gente soma esses itens de forma modular, cada serviço do
      pacote com o seu valor.
    </NoteBox>

    <NoteBox title="Como você recebe">
      PDF em alta resolução, pronto pra gráfica, e PNG pra usar no digital. Cardápio e flyer podem vir em versão
      editável, pra você trocar preços e itens quando precisar. Até 2 rodadas de ajuste por peça.
    </NoteBox>

    <NoteBox title="Sobre a impressão">
      A impressão não está inclusa: ela é paga direto à gráfica. A gente indica gráficas e confere a prova antes de
      imprimir.
    </NoteBox>

    <NoteBox title="Troca cardápio ou faz eventos com frequência?">
      O pacote mensal entrega as peças que você precisa todo mês, com condição especial.
    </NoteBox>

    <CrossLink
      to="/servicos/complementos-ilustrados"
      title="Quer ilustrações exclusivas na peça?"
      text="Elas entram à parte, nos Complementos Ilustrados."
      cta="Ver Complementos Ilustrados"
    />
  </ServicePageShell>
);

export default MateriaisGraficosPage;
