import {
  Paintbrush,
  Smartphone,
  Globe,
  FolderOpen,
  Sparkles,
  Printer,
  CalendarCheck,
  Users,
  Palette,
  MonitorSmartphone,
  Handshake,
  type LucideIcon,
} from "lucide-react";

// Fonte única dos serviços do site (menu, página de Serviços, home e formulário de contato).
// Baseada no Catálogo Central de Serviços da Lunae (12/11/2026). Sem valores, de propósito.

export interface Servico {
  id: string;
  title: string;
  short: string;
  url: string;
  icon: LucideIcon;
}

export interface Frente {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  servicos: Servico[];
}

export const identidadeVisual: Servico = {
  id: "identidade-visual",
  title: "Identidade Visual",
  short: "Logo, cores, tipografia, manual e templates que traduzem sua essência.",
  url: "/servicos/identidade-visual",
  icon: Paintbrush,
};

export const complementosIlustrados: Servico = {
  id: "complementos-ilustrados",
  title: "Complementos Ilustrados",
  short: "Personas, infográficos, carrosséis e ícones feitos só pra sua marca.",
  url: "/servicos/complementos-ilustrados",
  icon: Sparkles,
};

export const materiaisGraficos: Servico = {
  id: "materiais-graficos",
  title: "Materiais Gráficos",
  short: "Cartão, folder, cardápio e outros impressos com a identidade da sua marca.",
  url: "/servicos/materiais-graficos",
  icon: Printer,
};

export const instagramEstrategico: Servico = {
  id: "instagram-estrategico",
  title: "Instagram Estratégico",
  short: "Perfil organizado, calendário de conteúdo e templates pra facilitar sua rotina.",
  url: "/servicos/instagram-estrategico",
  icon: Smartphone,
};

export const presencaDigital: Servico = {
  id: "presenca-digital",
  title: "Presença Digital",
  short: "Site rápido e estratégico que passa credibilidade e atrai as pessoas certas.",
  url: "/servicos/presenca-digital",
  icon: Globe,
};

export const portfolio: Servico = {
  id: "portfolio",
  title: "Portfólio",
  short: "Seus melhores projetos reunidos em um portfólio claro, em documento ou em site.",
  url: "/servicos/portfolio",
  icon: FolderOpen,
};

export const gestaoRedes: Servico = {
  id: "gestao-de-redes-sociais",
  title: "Gestão de Redes Sociais",
  short: "A gente planeja, cria e publica seus conteúdos todo mês.",
  url: "/servicos/gestao-de-redes-sociais",
  icon: CalendarCheck,
};

export const gestaoLeads: Servico = {
  id: "gestao-de-leads",
  title: "Gestão de Leads",
  short: "Funil, atendimento e acompanhamento pra nenhum contato se perder.",
  url: "/servicos/gestao-de-leads",
  icon: Users,
};

export const frentes: Frente[] = [
  {
    id: "marca",
    title: "Marca",
    description: "Cores, logo e peças que dão a cara da sua marca, no digital e fora dele.",
    icon: Palette,
    servicos: [identidadeVisual, complementosIlustrados, materiaisGraficos],
  },
  {
    id: "presenca",
    title: "Presença",
    description: "Instagram, site e portfólio que mostram o valor do seu trabalho.",
    icon: MonitorSmartphone,
    servicos: [instagramEstrategico, presencaDigital, portfolio],
  },
  {
    id: "gestao",
    title: "Gestão",
    description:
      "Você cuida do seu negócio. A gente mantém sua marca presente e organiza quem chega até você.",
    icon: Handshake,
    servicos: [gestaoRedes, gestaoLeads],
  },
];

export const todosServicos: Servico[] = frentes.flatMap((f) => f.servicos);

// Opções do formulário de contato
export const opcoesFormulario: string[] = [
  ...todosServicos.map((s) => s.title),
  "Mais de um serviço",
  "Ainda não sei, quero ajuda pra escolher",
];
