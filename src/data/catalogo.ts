// Detalhes das páginas de serviço: situações, itens e observações. O site não mostra valores.
// Fonte: Catálogo de Serviços 2026 e prompt de atualização do site (nov/2026).

export interface Linha {
  item: string;
  entregas: string;
  combina?: string; // "Combina com ..."
}

export interface Tabela {
  legenda: string;
  linhas: Linha[];
  // Tabelas secundárias ficam recolhidas em "Ver o que está incluso"
  secundaria?: boolean;
}

export interface Observacao {
  texto: string;
  link?: { to: string; rotulo: string };
}

export interface DetalheServico {
  seoTitle: string;
  seoDescription: string;
  paraQuem: string[];
  tabelas: Tabela[];
  observacoes: Observacao[];
}

const NOTA_IDENTIDADE: Observacao = {
  texto:
    "Se precisar de identidade visual e elementos gráficos, a gente soma esses itens de forma modular, de acordo com cada serviço do pacote.",
};

export const catalogo: Record<string, DetalheServico> = {
  "identidade-visual": {
    seoTitle: "Identidade Visual | Lunae Estúdio Criativo",
    seoDescription:
      "Uma marca com a sua cara. Criamos cores, tipografia, logo, elementos gráficos, manual e templates pra você usar tudo com segurança.",
    paraQuem: [
      "Você está começando e ainda não tem uma marca.",
      "Sua marca existe, mas cada peça parece de um lugar diferente.",
      "Você quer se apresentar com mais segurança e consistência.",
    ],
    tabelas: [
      {
        legenda: "Itens da Identidade Visual",
        linhas: [
          { item: "Estudo de cores e tipografia", entregas: "Pesquisa visual, paleta e tipografias da marca" },
          { item: "Criação de logotipo", entregas: "Até 2 propostas e refinamento da escolhida" },
          { item: "Elementos gráficos de apoio", entregas: "Ícones, padrões e formas da identidade" },
          { item: "Manual da marca", entregas: "Guia editável com aplicações e exemplos" },
          { item: "Templates para Instagram", entregas: "10 a 15 templates editáveis, feed e stories" },
        ],
      },
      {
        legenda: "Extensões da marca, para quem já tem identidade",
        secundaria: true,
        linhas: [
          { item: "Logo para submarca", entregas: "Logo derivado da marca principal, para linha de produto, unidade ou evento" },
          { item: "Templates adicionais", entregas: "Pacote de 5 templates novos, dentro da identidade existente" },
        ],
      },
    ],
    observacoes: [
      { texto: "Até 2 rodadas de ajuste na identidade e 2 nos templates." },
      { texto: "O manual e os templates chegam em arquivos editáveis." },
    ],
  },

  "complementos-ilustrados": {
    seoTitle: "Complementos Ilustrados | Lunae Estúdio Criativo",
    seoDescription:
      "Ilustrações feitas só pra sua marca: persona, infográfico, carrossel, ícones e personagem. Contrate sozinhas ou junto de outros serviços.",
    paraQuem: [
      "Você quer explicar um processo ou uma ideia de um jeito mais visual.",
      "Sua marca precisa de uma personagem, um mascote ou ícones só dela.",
      "Você quer conteúdos e site com ilustrações que ninguém mais tem.",
    ],
    tabelas: [
      {
        legenda: "Itens dos Complementos Ilustrados",
        linhas: [
          { item: "Persona ilustrada", entregas: "Briefing, texto da persona, ilustração da personagem e diagramação", combina: "Identidade Visual e Portfólio" },
          { item: "Infográfico ilustrado", entregas: "Processo, passo a passo ou dados em uma peça ilustrada", combina: "Instagram, Site e Portfólio" },
          { item: "Carrossel informativo ilustrado", entregas: "Roteiro e até 8 lâminas ilustradas", combina: "Instagram" },
          { item: "Pacote de 3 carrosséis", entregas: "3 carrosséis com a mesma linguagem visual", combina: "Instagram" },
          { item: "Ilustrações para site", entregas: "3 a 5 ilustrações para seções como “como funciona” e “sobre”", combina: "Site e Portfólio em site" },
          { item: "Ícones personalizados", entregas: "Conjunto de 8 ícones ilustrados", combina: "Identidade Visual e Site" },
          { item: "Personagem da marca", entregas: "Mascote ou personagem com 3 poses ou expressões", combina: "Identidade Visual" },
        ],
      },
    ],
    observacoes: [
      { texto: "Até 2 rodadas de ajuste por peça. Mudar o conceito depois do esboço aprovado conta como nova peça." },
      { texto: "A ilustração é entregue pronta (PNG ou SVG). Os textos que a acompanham ficam editáveis." },
    ],
  },

  "materiais-graficos": {
    seoTitle: "Materiais Gráficos | Lunae Estúdio Criativo",
    seoDescription:
      "Sua marca também fora das telas. Criamos cartão de visita, folder, cardápio, papelaria e outros impressos com a identidade do seu digital.",
    paraQuem: [
      "Você entrega cartão, folder ou cardápio e quer que combinem com o seu digital.",
      "Seu negócio troca de cardápio por estação ou participa de eventos.",
      "Você precisa de rótulos, etiquetas ou banners com a sua identidade.",
    ],
    tabelas: [
      {
        legenda: "Peças dos Materiais Gráficos",
        linhas: [
          { item: "Cartão de visita", entregas: "Frente e verso, arquivo pronto para a gráfica" },
          { item: "Flyer ou panfleto", entregas: "A5 ou A4, frente e verso" },
          { item: "Folder", entregas: "Até 2 dobras (6 painéis), com textos organizados junto com você" },
          { item: "Cardápio", entregas: "Até 4 páginas ou painéis, para restaurantes, cafés, confeitarias e similares" },
          { item: "Página extra de cardápio", entregas: "Cada página ou painel além das 4 incluídas" },
          { item: "Papelaria institucional", entregas: "Papel timbrado e assinatura de e-mail" },
          { item: "Banner, faixa ou adesivo", entregas: "Uma peça em formato de grande impressão" },
          { item: "Rótulo ou etiqueta", entregas: "Rótulo de produto ou tag, um modelo" },
        ],
      },
    ],
    observacoes: [
      { texto: "A impressão não está inclusa: é paga direto à gráfica. Entregamos PDF pronto para a gráfica e PNG para o digital. Cardápio e flyer podem ter versão editável." },
      {
        texto: "Até 2 rodadas de ajuste por peça. Ilustrações exclusivas entram à parte, nos Complementos Ilustrados.",
        link: { to: "/servicos/complementos-ilustrados", rotulo: "Ver Complementos Ilustrados" },
      },
      NOTA_IDENTIDADE,
    ],
  },

  "instagram-estrategico": {
    seoTitle: "Instagram Estratégico | Lunae Estúdio Criativo",
    seoDescription:
      "Seu perfil pode mostrar melhor o valor do seu trabalho. Organizamos o perfil e criamos posts com a sua identidade.",
    paraQuem: [
      "Você posta, mas sente que o perfil não explica o que você faz.",
      "Falta rotina: você nunca sabe o que publicar.",
      "Você já tem identidade e quer usá-la em posts e stories.",
    ],
    tabelas: [
      {
        legenda: "Itens do Instagram Estratégico",
        linhas: [
          { item: "Diagnóstico do perfil", entregas: "Perfil atual e oportunidades de melhoria" },
          { item: "Bio estratégica", entregas: "O que você faz e como falar com você" },
          { item: "Capas para destaques", entregas: "Alinhadas à identidade visual" },
          { item: "Organização dos destaques", entregas: "Estrutura e categorias" },
          { item: "Calendário de conteúdo (30 dias)", entregas: "12 conteúdos com temas, legendas e CTAs" },
          { item: "Templates", entregas: "10 a 15 templates editáveis" },
        ],
      },
      {
        legenda: "Artes avulsas",
        secundaria: true,
        linhas: [
          { item: "Arte avulsa", entregas: "1 post, story ou banner dentro da sua identidade" },
          { item: "Pacote de 10 artes", entregas: "10 peças entre posts, stories e banners" },
        ],
      },
    ],
    observacoes: [
      {
        texto: "Entrega única: a gente organiza o perfil e entrega as ferramentas, e você publica. Quer que a Lunae também publique?",
        link: { to: "/servicos/gestao-de-redes-sociais", rotulo: "Ver Gestão de Redes Sociais" },
      },
      { texto: "Contratando Identidade Visual e Instagram juntos, os templates entram uma vez só." },
      NOTA_IDENTIDADE,
    ],
  },

  "presenca-digital": {
    seoTitle: "Presença Digital | Lunae Estúdio Criativo",
    seoDescription:
      "Um endereço seu no digital. Criamos sites institucionais e landing pages pra que as pessoas entendam rápido quem você é e como falar com você.",
    paraQuem: [
      "Você só passa o link de uma rede social e quer um endereço seu.",
      "Você quer ser encontrada no Google.",
      "Vai lançar algo novo e precisa de uma página bem estruturada.",
    ],
    tabelas: [
      {
        legenda: "Itens da Presença Digital",
        linhas: [
          { item: "Projeto UX/UI", entregas: "Briefing, pesquisa, estrutura, wireframe e protótipo para computador e celular" },
          { item: "Desenvolvimento", entregas: "Site responsivo" },
          { item: "SEO básico", entregas: "Estrutura inicial para o Google" },
          { item: "Domínio e hospedagem", entregas: "Orientação e configuração inicial" },
          { item: "Manutenção inicial", entregas: "3 meses de suporte e pequenos ajustes" },
        ],
      },
    ],
    observacoes: [
      { texto: "Fazemos site institucional ou landing page, sem loja virtual nem sistemas." },
      { texto: "Custos de domínio, hospedagem e ferramentas de terceiros não estão inclusos." },
      NOTA_IDENTIDADE,
    ],
  },

  portfolio: {
    seoTitle: "Portfólio | Lunae Estúdio Criativo",
    seoDescription:
      "Seu trabalho, bem apresentado. Criamos seu portfólio em documento ou em site, com curadoria de projetos, textos e design.",
    paraQuem: [
      "Você tem bons projetos, mas eles estão espalhados.",
      "Precisa enviar um material claro para um cliente ou uma vaga.",
      "Quer um endereço só seu para mostrar o que já fez.",
    ],
    tabelas: [
      {
        legenda: "Portfólio em documento",
        linhas: [
          { item: "Curadoria de projetos", entregas: "Conversa de diagnóstico e seleção de 5 a 8 projetos" },
          { item: "Textos de apresentação", entregas: "Bio, “sobre mim” e descrição de cada projeto" },
          { item: "Diagramação", entregas: "Capa, projetos e contato; PDF e arquivo editável" },
        ],
      },
      {
        legenda: "Portfólio em site",
        linhas: [
          { item: "Curadoria e textos", entregas: "Seleção dos projetos, bio e descrição de cada case" },
          { item: "Projeto UX/UI", entregas: "Estrutura, wireframe e protótipo no Figma" },
          { item: "Desenvolvimento", entregas: "Site responsivo, para computador e celular" },
          { item: "SEO básico e domínio", entregas: "Títulos, descrições e configuração inicial" },
          { item: "Suporte inicial", entregas: "1 mês de pequenos ajustes" },
        ],
      },
    ],
    observacoes: [
      { texto: "Nos dois formatos, a curadoria e os textos entram uma vez só." },
      NOTA_IDENTIDADE,
    ],
  },

  // Gestão de Redes Sociais e Gestão de Leads têm conteúdo próprio (ver GestaoConteudo.tsx)
  "gestao-de-redes-sociais": {
    seoTitle: "Gestão de Redes Sociais | Lunae Estúdio Criativo",
    seoDescription:
      "Você cuida do seu negócio, a gente mantém sua marca presente. Planejamos, criamos e publicamos seus conteúdos todo mês.",
    paraQuem: [
      "Você não tem tempo de planejar e postar toda semana.",
      "Quer manter o perfil ativo, com a sua identidade.",
      "Precisa de vídeos e stories na rotina da marca.",
    ],
    tabelas: [],
    observacoes: [
      { texto: "Fotos e vídeos são enviados por você. Captação presencial, tráfego pago e influenciadores não estão inclusos." },
      { texto: "O volume de cada plano é revisto com você após o 1º mês, e nada muda sem a sua aprovação." },
    ],
  },

  "gestao-de-leads": {
    seoTitle: "Gestão de Leads | Lunae Estúdio Criativo",
    seoDescription:
      "Nenhum contato perdido. Organizamos quem chega pelo Instagram, site ou WhatsApp pra você saber quem atender e quando.",
    paraQuem: [
      "Os contatos chegam pelo Instagram, site e WhatsApp, e você perde o controle.",
      "Sua equipe não sabe quem atender primeiro.",
      "Você quer saber de onde vêm os seus clientes.",
    ],
    tabelas: [
      {
        legenda: "Implantação avulsa, para quem vai operar sozinha",
        linhas: [
          { item: "Mapeamento da jornada", entregas: "De onde vêm os contatos, etapas do funil e critérios de qualificação" },
          { item: "Estrutura do funil", entregas: "Quadro ou CRM configurado, etiquetas no WhatsApp Business e link na bio" },
          { item: "Roteiros de atendimento", entregas: "Boas-vindas, respostas rápidas, perguntas de qualificação e follow-up" },
          { item: "Treinamento da equipe", entregas: "1 encontro online de até 1h30 e guia de uso em PDF" },
        ],
      },
    ],
    observacoes: [
      { texto: "A negociação e o fechamento continuam com você, e a planilha de contatos é sempre sua." },
      { texto: "Usamos ferramentas que já existem (planilha, Trello, WhatsApp Business ou CRM). Assinaturas pagas são custo seu." },
    ],
  },
};
