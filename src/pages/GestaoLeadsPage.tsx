import React from "react";
import ServicePageShell from "@/components/ServicePageShell";
import { ObjectiveBox, SectionHead, ItemCard, ItemGrid, PlanCard, NoteBox, CrossLink } from "@/components/ServiceBlocks";

const implantacao = [
  {
    title: "Mapeamento da jornada",
    text: "De onde vêm os contatos, etapas do funil e critérios de qualificação.",
  },
  {
    title: "Estrutura do funil",
    text: "Quadro ou CRM configurado, etiquetas no WhatsApp Business e link na bio.",
  },
  {
    title: "Roteiros de atendimento",
    text: "Boas-vindas, respostas rápidas, perguntas de qualificação e follow-up.",
  },
  {
    title: "Treinamento da equipe",
    text: "1 encontro online de até 1h30 e guia de uso em PDF.",
  },
];

const acompanhamento = [
  {
    name: "Organização",
    intro: "Sua equipe responde os contatos.",
    items: [
      "Revisamos o funil toda semana",
      "Apontamos contatos parados",
      "Relatório mensal de origem e conversão",
    ],
  },
  {
    name: "Primeiro atendimento",
    intro: "A gente faz a primeira resposta.",
    items: [
      "Primeira resposta em horário comercial",
      "Qualificamos e encaminhamos pra pessoa certa da sua equipe",
      "Até 150 contatos por mês, com relatório",
    ],
  },
];

const GestaoLeadsPage = () => (
  <ServicePageShell
    seoTitle="Gestão de Leads | Lunae Estúdio Criativo"
    seoDescription="Nenhum contato perdido. Organizamos quem chega pelo Instagram, site ou WhatsApp pra você saber quem atender e quando."
    schemaName="Gestão de Leads | Lunae"
    breadcrumb="Gestão de Leads"
    eyebrow="✦ NOVIDADE"
    title="Gestão de Leads"
    intro="Nenhum contato perdido. Organizamos quem chega pelo Instagram, site ou WhatsApp, pra você e sua equipe saberem quem atender e quando."
    faqCategory="gestao-de-leads"
    ctaTitle="Vamos organizar quem chega até você?"
    ctaText="Conte pelo WhatsApp como os contatos chegam hoje e a gente desenha o caminho."
    ctaButton="Quero organizar meus contatos ✦"
    whatsappMessage="Olá! Gostaria de saber mais sobre a Gestão de Leads da Lunae."
  >
    <ObjectiveBox
      title="Saber quem atender, quando e em que etapa"
      text="Cada pessoa que chega pelo Instagram, site ou WhatsApp tem lugar no funil, e nenhuma fica esquecida."
    />

    {/* Implantação */}
    <section className="mb-20">
      <SectionHead
        eyebrow="✦ IMPLANTAÇÃO"
        title="O que montamos com você"
        text="Um projeto único, que deixa o caminho dos contatos organizado."
      />
      <ItemGrid>
        {implantacao.map((item) => (
          <ItemCard key={item.title} {...item} />
        ))}
      </ItemGrid>
    </section>

    {/* Acompanhamento */}
    <section className="mb-12">
      <SectionHead
        eyebrow="✦ ACOMPANHAMENTO MENSAL (OPCIONAL)"
        title="Quem cuida do dia a dia?"
        text="Depois da implantação, você escolhe se quer a gente por perto."
      />
      <div className="grid md:grid-cols-2 gap-8">
        {acompanhamento.map((p) => (
          <PlanCard key={p.name} {...p} />
        ))}
      </div>
    </section>

    <NoteBox title="Ferramentas">
      Usamos o que já existe: planilha, Trello, WhatsApp Business ou CRM. Assinaturas pagas são custo seu.
    </NoteBox>

    <NoteBox title="O que continua com você">
      A negociação e o fechamento. A gente organiza e encaminha, não vende pela sua marca.
    </NoteBox>

    <NoteBox title="Contrato do acompanhamento">
      Mínimo de 3 meses, com renovação automática. Pra encerrar, avise até 20 dias antes do fim do período.
    </NoteBox>

    <CrossLink
      to="/servicos/gestao-de-redes-sociais"
      title="Quer cuidar do perfil também?"
      text="Contratando as duas gestões, as mensalidades têm condição especial."
      cta="Ver Gestão de Redes Sociais"
    />
  </ServicePageShell>
);

export default GestaoLeadsPage;
