import React from "react";
import ServicePageShell from "@/components/ServicePageShell";
import { ObjectiveBox, SectionHead, ItemCard, PlanCard, NoteBox, CrossLink } from "@/components/ServiceBlocks";

const planos = [
  {
    name: "Constante",
    intro: "Pra manter o perfil sempre ativo.",
    items: ["8 posts no mês (feed ou carrossel)", "Legendas e agendamento", "Relatório mensal simples"],
  },
  {
    name: "Presença",
    intro: "Pra quem quer vídeo e stories na rotina.",
    items: [
      "12 posts, com até 4 reels editados a partir do seu material",
      "Stories 3 vezes por semana",
      "Legendas, agendamento e relatório mensal",
    ],
  },
  {
    name: "Presença+",
    intro: "Pra quem quer a marca acompanhada de perto.",
    items: [
      "16 posts, com até 6 reels editados",
      "Stories 5 vezes por semana",
      "Respostas a comentários e direct em horário comercial",
      "Reunião mensal de resultados",
    ],
  },
];

const base = {
  name: "Base da implantação",
  intro: "Vale para as duas versões.",
  items: [
    "Diagnóstico do perfil",
    "Bio estratégica",
    "Pilares e tom de voz (4 a 5 pilares de conteúdo e um guia de como a marca fala)",
    "Capas para destaques, alinhadas ao visual do perfil",
  ],
};

const versoes = [
  {
    name: "Com identidade visual",
    intro: "Adaptamos o visual que você já tem.",
    items: ["Adaptação de templates (10 a 15 templates a partir da sua identidade)"],
  },
  {
    name: "Sem identidade visual",
    intro: "Criamos um visual novo pro seu Instagram.",
    items: [
      "Estudo de cores e tipografia",
      "Templates para Instagram (10 a 15 templates criados do zero)",
    ],
  },
];

const extras = [
  { title: "Post avulso", text: "1 post de feed ou story, criado e publicado." },
  { title: "Carrossel avulso", text: "Até 8 lâminas, criado e publicado." },
  { title: "Pacote de 5 posts", text: "5 posts extras no mês." },
  { title: "Pacote de 4 carrosséis", text: "4 carrosséis extras no mês." },
  { title: "Edição de reels avulso", text: "1 vídeo de até 60 s, editado com legendas, a partir do seu material." },
  { title: "Carrossel ilustrado", text: "Qualquer item dos Complementos Ilustrados." },
];

const GestaoRedesPage = () => (
  <ServicePageShell
    seoTitle="Gestão de Redes Sociais | Lunae Estúdio Criativo"
    seoDescription="Você cuida do seu negócio, a gente mantém sua marca presente. Planejamos, criamos e publicamos seus conteúdos todo mês."
    schemaName="Gestão de Redes Sociais | Lunae"
    breadcrumb="Gestão de Redes Sociais"
    eyebrow="✦ NOVIDADE"
    title="Gestão de Redes Sociais"
    intro="Você cuida do seu negócio, a gente mantém sua marca presente. Planejamos, criamos e publicamos seus conteúdos todo mês."
    faqCategory="gestao-de-redes-sociais"
    ctaTitle="Vamos cuidar do seu perfil juntas?"
    ctaText="Conte pelo WhatsApp como é a sua rotina e a gente indica o plano que combina."
    ctaButton="Quero a gestão do meu perfil ✦"
    whatsappMessage="Olá! Gostaria de saber mais sobre a Gestão de Redes Sociais da Lunae."
  >
    <ObjectiveBox
      title="Constância sem parar o seu dia"
      text="Seu perfil sempre ativo, com conteúdo planejado e na sua identidade."
    />

    {/* Planos */}
    <section className="mb-20">
      <SectionHead
        eyebrow="✦ PLANOS MENSAIS"
        title="Escolha o ritmo da sua marca"
        text="A gestão é sempre mensal. Cada plano diz o que entregamos por mês."
      />
      <div className="grid md:grid-cols-3 gap-8">
        {planos.map((p) => (
          <PlanCard key={p.name} {...p} />
        ))}
      </div>
    </section>

    {/* Implantação */}
    <section className="mb-12">
      <SectionHead
        eyebrow="✦ ANTES DO PRIMEIRO MÊS"
        title="Implantação"
        text="Toda gestão começa deixando o perfil e o visual prontos. É um projeto único: a base, mais os itens da versão que combina com a sua marca."
      />
      <div className="max-w-xl mb-10">
        <PlanCard {...base} />
      </div>
      <h3 className="text-2xl font-display font-normal text-primary mb-1">Escolha a sua versão</h3>
      <p className="font-body text-sm text-muted-foreground font-light mb-6">
        Base + itens da versão = implantação completa.
      </p>
      <div className="grid md:grid-cols-2 gap-8">
        {versoes.map((p) => (
          <PlanCard key={p.name} {...p} />
        ))}
      </div>
    </section>

    <NoteBox title="Não cobramos duas vezes">
      Se você já contratou algum desses itens em outro serviço, ele sai da conta. Precisa de logo? É só somar a
      criação de logotipo da Identidade Visual.
    </NoteBox>

    <div className="mb-20" />

    {/* Extras */}
    <section className="mb-12">
      <SectionHead
        eyebrow="✦ EXTRAS NO MÊS"
        title="Precisa de mais peças?"
        text="Peças além do plano, cobradas junto com a mensalidade do mês em que forem feitas."
      />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {extras.map((item) => (
          <ItemCard key={item.title} {...item} />
        ))}
      </div>
    </section>

    <NoteBox title="Como funciona o contrato">
      Pagamento mensal, adiantado. Contrato mínimo de 3 meses, com renovação automática. Pra encerrar, é só avisar
      até 20 dias antes do fim do período.
    </NoteBox>

    <NoteBox title="O que fica de fora">
      Fotos e vídeos são enviados por você. Captação presencial, tráfego pago e influenciadores não estão inclusos.
      Nosso compromisso é com constância e qualidade, não com número de seguidores ou vendas.
    </NoteBox>

    <CrossLink
      to="/servicos/gestao-de-leads"
      title="Quem chega pelo perfil também precisa de cuidado"
      text="Contratando as duas gestões, as mensalidades têm condição especial."
      cta="Ver Gestão de Leads"
    />
  </ServicePageShell>
);

export default GestaoRedesPage;
