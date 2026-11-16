// Fonte única das Dúvidas: usada pela página /faq e pelas páginas de serviço.
// Respostas de até 3 frases, no tom Lunae. O site não mostra valores, descontos nem parcelamento.

export interface FaqAba {
  id: string;
  label: string;
}

export const faqAbas: FaqAba[] = [
  { id: "geral", label: "Geral" },
  { id: "contrato", label: "Contrato e escopo" },
  { id: "identidade-visual", label: "Identidade Visual" },
  { id: "instagram-estrategico", label: "Instagram Estratégico" },
  { id: "site", label: "Site" },
  { id: "portfolio", label: "Portfólio" },
  { id: "complementos-ilustrados", label: "Complementos Ilustrados" },
  { id: "materiais-graficos", label: "Materiais Gráficos" },
  { id: "gestao-de-redes", label: "Gestão de Redes Sociais" },
  { id: "gestao-de-leads", label: "Gestão de Leads" },
];

export const ABA_PADRAO = "geral";

// Endereços antigos (/faq#categoria) continuam funcionando
export const abaAntiga: Record<string, string> = {
  gerais: "geral",
  pagamento: "contrato",
  "presenca-digital": "site",
  "gestao-de-redes-sociais": "gestao-de-redes",
};

export interface Faq {
  id: string;
  servico: string; // id da aba
  pergunta: string;
  resposta: string;
  link?: { to: string; rotulo: string };
}

export const faqs: Faq[] = [
  // ---------- Geral
  {
    id: "ajuda-desde-comeco",
    servico: "geral",
    pergunta: "Ainda não tenho marca, vocês ajudam desde o começo?",
    resposta:
      "Sim, esse é um dos nossos pontos de partida mais comuns. Você não precisa chegar com nada pronto: a gente entende a sua essência e constrói a identidade e a presença digital com você, passo a passo.",
    link: { to: "/servicos/identidade-visual", rotulo: "Ver Identidade Visual" },
  },
  {
    id: "contratar-tudo-de-uma-vez",
    servico: "geral",
    pergunta: "Preciso contratar tudo de uma vez?",
    resposta:
      "Não. Todos os serviços são modulares: você escolhe só o que precisa agora. Dá pra começar por um e somar outros quando fizer sentido.",
    link: { to: "/servicos", rotulo: "Ver todos os serviços" },
  },
  {
    id: "qual-servico-ideal",
    servico: "geral",
    pergunta: "Como sei qual serviço é ideal para mim?",
    resposta:
      "No formulário, escolha “Ainda não sei qual serviço escolher” e conte um pouco sobre o seu negócio. A gente conversa com você e indica por onde começar.",
    link: { to: "/contato", rotulo: "Ir para o formulário" },
  },
  {
    id: "atende-apenas-mulheres",
    servico: "geral",
    pergunta: "A Lunae atende só mulheres?",
    resposta:
      "Nascemos pra apoiar o empreendedorismo feminino, mas atendemos qualquer profissional que valorize processo humano e resultado estratégico.",
  },
  {
    id: "nunca-trabalhei-com-designer",
    servico: "geral",
    pergunta: "Nunca trabalhei com designer, vou saber o que fazer?",
    resposta: "Sem problema! Explicamos tudo em linguagem simples, sem jargão, e te guiamos em cada etapa.",
  },

  // ---------- Contrato e escopo
  {
    id: "como-cancelar-mensal",
    servico: "contrato",
    pergunta: "Como cancelo um serviço mensal?",
    resposta:
      "Avise até 20 dias antes do fim do período contratado. Sem aviso, o contrato renova automaticamente. O período mínimo é de 3 meses.",
  },
  {
    id: "servico-repetido-em-pacotes",
    servico: "contrato",
    pergunta: "Se eu já contratei um serviço, pago de novo em outro pacote?",
    resposta:
      "Não. Se um serviço aparece em mais de um pacote e você já contratou, ele sai da conta. Por exemplo, os templates para Instagram aparecem na Identidade Visual e no Instagram Estratégico, e entram uma vez só.",
  },
  {
    id: "custos-nao-inclusos",
    servico: "contrato",
    pergunta: "O que não está incluso?",
    resposta:
      "Lojas virtuais e sistemas, tráfego pago e anúncios, captação presencial de foto e vídeo, impressão gráfica e custos de domínio, hospedagem e ferramentas de terceiros. Os custos de terceiros e a impressão ficam com você, pagos direto a cada fornecedor.",
  },
  {
    id: "rodadas-de-ajuste",
    servico: "contrato",
    pergunta: "Quantas rodadas de ajuste eu tenho?",
    resposta:
      "Até 2 rodadas na identidade, no protótipo do site, nos templates, nas ilustrações e nos materiais gráficos. Na Gestão de Redes Sociais, 1 rodada por post.",
  },

  // ---------- Identidade Visual
  {
    id: "cria-apenas-logotipo",
    servico: "identidade-visual",
    pergunta: "Vocês criam só o logotipo?",
    resposta:
      "Você escolhe: só o logo ou o pacote que fizer sentido. O pacote completo reúne estudo de cores e tipografia, logotipo, elementos gráficos, manual da marca e templates.",
    link: { to: "/servicos/identidade-visual", rotulo: "Ver Identidade Visual" },
  },
  {
    id: "editar-materiais",
    servico: "identidade-visual",
    pergunta: "Vou conseguir editar os materiais?",
    resposta:
      "Sim. O manual da marca e os templates chegam em arquivos editáveis, pra você usar tudo sozinha. O logotipo vem pronto, com as variações para perfil, impressos e assinatura.",
  },
  {
    id: "nao-gostei-da-proposta",
    servico: "identidade-visual",
    pergunta: "E se eu não gostar da primeira proposta?",
    resposta:
      "Por isso criamos até 2 propostas de logo e refinamos a versão que você escolher. Você também tem até 2 rodadas de ajuste na identidade.",
  },
  {
    id: "submarca",
    servico: "identidade-visual",
    pergunta: "Já tenho marca e preciso de uma submarca, vocês fazem?",
    resposta:
      "Fazemos. Em Extensões da marca, criamos um logo derivado da marca principal, para linha de produto, unidade ou evento, e pacotes de 5 templates novos dentro da identidade que você já tem.",
    link: { to: "/servicos/identidade-visual", rotulo: "Ver Identidade Visual" },
  },

  // ---------- Instagram Estratégico
  {
    id: "voces-postam-por-mim",
    servico: "instagram-estrategico",
    pergunta: "Vocês postam por mim?",
    resposta:
      "Não nesse serviço: aqui a gente organiza o perfil e entrega as ferramentas, e você publica. Se quiser que a Lunae planeje, crie e publique, veja a Gestão de Redes Sociais.",
    link: { to: "/servicos/gestao-de-redes-sociais", rotulo: "Ver Gestão de Redes Sociais" },
  },
  {
    id: "como-funciona-calendario",
    servico: "instagram-estrategico",
    pergunta: "O que vem no calendário de conteúdo?",
    resposta:
      "São 12 conteúdos planejados no mês, cerca de 3 por semana. Cada um vem com tema, legenda-base e chamada para ação (CTA), e a gente indica o template que combina com cada post.",
  },
  {
    id: "contratar-apenas-templates",
    servico: "instagram-estrategico",
    pergunta: "Posso contratar apenas os templates?",
    resposta:
      "Sim, mas eles funcionam melhor com a sua identidade visual já pronta. É o que garante consistência nos seus posts.",
  },

  // ---------- Site
  {
    id: "site-celular",
    servico: "site",
    pergunta: "O site funciona no celular?",
    resposta:
      "Sim. Todo site é responsivo: funciona no computador e no celular, com leitura fácil e botão de WhatsApp sempre à mão.",
  },
  {
    id: "desenvolvem-sistemas-complexos",
    servico: "site",
    pergunta: "Vocês fazem loja virtual ou sistema?",
    resposta: "Não. Fazemos sites institucionais e landing pages. Lojas virtuais e sistemas ficam fora do nosso escopo.",
  },
  {
    id: "dominio-e-hospedagem",
    servico: "site",
    pergunta: "Domínio e hospedagem estão inclusos?",
    resposta:
      "A gente orienta e faz a configuração inicial, e tudo fica registrado no seu nome. Os custos de domínio, hospedagem e ferramentas de terceiros não estão inclusos e são pagos por você, direto ao serviço.",
  },
  {
    id: "contratar-apenas-site",
    servico: "site",
    pergunta: "Já tenho identidade visual, posso contratar só o site?",
    resposta:
      "Pode. A gente aplica as suas cores e fontes, e você contrata só os itens do site. Se precisar de identidade visual e elementos gráficos, eles entram de forma modular.",
  },
  {
    id: "suporte-depois-do-site",
    servico: "site",
    pergunta: "O site tem suporte depois de pronto?",
    resposta: "Sim. Você conta com 3 meses de suporte e pequenos ajustes depois da entrega.",
  },

  // ---------- Portfólio
  {
    id: "portfolio-documento-ou-site",
    servico: "portfolio",
    pergunta: "Qual a diferença entre portfólio em documento e em site?",
    resposta:
      "O documento é um PDF pronto pra enviar por e-mail ou WhatsApp. O site é um endereço seu, que qualquer pessoa acessa e que aparece no Google. Você escolhe um ou os dois.",
  },
  {
    id: "portfolio-textos-prontos",
    servico: "portfolio",
    pergunta: "Preciso ter os textos prontos?",
    resposta:
      "Não. A gente escreve a bio, o “sobre mim” e a descrição de cada projeto, com base na nossa conversa. Só precisamos entender seu tom de voz e qual ideia você quer passar.",
  },
  {
    id: "portfolio-os-dois-formatos",
    servico: "portfolio",
    pergunta: "Posso contratar os dois formatos?",
    resposta:
      "Sim. Nos dois formatos, a curadoria e os textos entram uma vez só.",
  },

  // ---------- Complementos Ilustrados
  {
    id: "complementos-editar-ilustracoes",
    servico: "complementos-ilustrados",
    pergunta: "Posso editar as ilustrações?",
    resposta:
      "As ilustrações são entregues prontas, em PNG ou SVG, e não são editáveis. Os textos e layouts que acompanham as peças ficam editáveis, e você tem até 2 rodadas de ajuste por peça.",
  },
  {
    id: "complementos-contratar-sozinho",
    servico: "complementos-ilustrados",
    pergunta: "Posso contratar só uma peça?",
    resposta:
      "Pode. Cada ilustração pode ser contratada sozinha ou junto de qualquer outro serviço, e em cada item mostramos com o que ele combina melhor.",
  },
  {
    id: "complementos-carrossel",
    servico: "complementos-ilustrados",
    pergunta: "Quantas lâminas tem um carrossel?",
    resposta:
      "Até 8 lâminas ilustradas, com roteiro e textos editáveis. Também temos o pacote com 3 carrosséis na mesma linguagem visual.",
  },

  // ---------- Materiais Gráficos
  {
    id: "materiais-impressao-inclusa",
    servico: "materiais-graficos",
    pergunta: "A impressão está inclusa?",
    resposta:
      "Não. A impressão é paga direto à gráfica. A gente pode indicar gráficas e conferir a prova antes de imprimir.",
  },
  {
    id: "materiais-formato-arquivos",
    servico: "materiais-graficos",
    pergunta: "Em que formato recebo os arquivos?",
    resposta: "Em PDF de alta resolução, pronto para a gráfica, e em PNG para usar no digital.",
  },
  {
    id: "materiais-trocar-precos",
    servico: "materiais-graficos",
    pergunta: "Consigo trocar os preços do cardápio sozinha?",
    resposta: "Consegue. Cardápio e flyer podem vir em versão editável, pra você trocar preços e itens quando precisar.",
  },

  // ---------- Gestão de Redes Sociais
  {
    id: "gestao-implantacao",
    servico: "gestao-de-redes",
    pergunta: "O que é a implantação e por que ela vem antes?",
    resposta:
      "É o que deixa o seu perfil e o seu visual prontos antes do primeiro mês: diagnóstico, bio, capas dos destaques e templates. Assim, os posts já nascem com identidade e direção. É um projeto único, e tudo fica com você, mesmo sem a gestão.",
  },
  {
    id: "gestao-ja-tenho-identidade",
    servico: "gestao-de-redes",
    pergunta: "Já tenho identidade visual, o que muda?",
    resposta:
      "Você faz a implantação com identidade: adaptamos os seus templates, e a implantação não inclui estudo de cores e tipografia nem elementos gráficos de apoio. Ela fica mais enxuta.",
  },
  {
    id: "gestao-mes-piloto",
    servico: "gestao-de-redes",
    pergunta: "Como funciona o mês piloto?",
    resposta:
      "É um teste opcional de 30 dias, com materiais enxutos e uma reunião de resultados no dia 30. Você vê o trabalho acontecendo antes de decidir pela gestão mensal.",
  },
  {
    id: "gestao-videos",
    servico: "gestao-de-redes",
    pergunta: "Quem grava os vídeos?",
    resposta:
      "Você. Os Reels são feitos com vídeos que você envia já editados, e a captação presencial de foto e vídeo não está inclusa.",
  },
  {
    id: "gestao-trafego-pago",
    servico: "gestao-de-redes",
    pergunta: "Vocês fazem tráfego pago?",
    resposta: "Não. Tráfego pago e anúncios ficam fora do nosso escopo.",
  },
  {
    id: "gestao-quanto-tempo",
    servico: "gestao-de-redes",
    pergunta: "Por quanto tempo preciso ficar?",
    resposta:
      "O contrato mínimo é de 3 meses, com renovação automática. Para encerrar, avise até 20 dias antes do fim do período.",
    link: { to: "/servicos#como-funciona", rotulo: "Como funciona a contratação" },
  },
  {
    id: "gestao-garantia-resultado",
    servico: "gestao-de-redes",
    pergunta: "Vocês garantem seguidores ou vendas?",
    resposta:
      "Não. Nosso compromisso é com constância e qualidade. Número de seguidores e vendas dependem de muitos fatores.",
  },

  // ---------- Gestão de Leads
  {
    id: "leads-vendem-por-mim",
    servico: "gestao-de-leads",
    pergunta: "Vocês vendem por mim?",
    resposta: "Não. A negociação e o fechamento continuam com você. A gente organiza e encaminha os contatos.",
  },
  {
    id: "leads-ferramentas",
    servico: "gestao-de-leads",
    pergunta: "Que ferramentas usam?",
    resposta:
      "Usamos ferramentas que já existem, como planilha, Trello, WhatsApp Business ou um CRM. Se você escolher uma assinatura paga, o custo é seu.",
  },
  {
    id: "leads-fins-de-semana",
    servico: "gestao-de-leads",
    pergunta: "E nos fins de semana?",
    resposta:
      "O primeiro atendimento funciona de segunda a sexta, das 9h às 18h. O plantão aos sábados é opcional.",
  },
  {
    id: "leads-dados-dos-contatos",
    servico: "gestao-de-leads",
    pergunta: "De quem são os dados dos contatos?",
    resposta:
      "São seus. A planilha de contatos é sempre da cliente, e a gente usa os dados só para o serviço contratado.",
  },
];

export const faqsDoServico = (faqKey: string, limite = 5): Faq[] =>
  faqs.filter((f) => f.servico === faqKey).slice(0, limite);
