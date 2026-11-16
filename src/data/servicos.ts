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

// Lista dos serviços do site: menu, cards da página de Serviços, home e formulário.
// Os detalhes de cada serviço (tabelas, observações) ficam em catalogo.ts.
// Fonte: Catálogo de Serviços 2026 e prompt de atualização do site.

export interface Servico {
  id: string; // também é o slug da página: /servicos/:id
  title: string;
  short: string; // frase de benefício
  url: string;
  icon: LucideIcon;
  faqKey: string; // aba do FAQ deste serviço
}

export interface Frente {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  servicos: Servico[];
}

const servico = (s: Omit<Servico, "url">): Servico => ({ ...s, url: `/servicos/${s.id}` });

export const identidadeVisual = servico({
  id: "identidade-visual",
  title: "Identidade Visual",
  short: "Uma marca com a sua cara, pra você usar tudo com segurança.",
  icon: Paintbrush,
  faqKey: "identidade-visual",
});

export const complementosIlustrados = servico({
  id: "complementos-ilustrados",
  title: "Complementos Ilustrados",
  short: "Ilustrações feitas só pra sua marca, pra explicar, encantar e diferenciar.",
  icon: Sparkles,
  faqKey: "complementos-ilustrados",
});

export const materiaisGraficos = servico({
  id: "materiais-graficos",
  title: "Materiais Gráficos",
  short: "Sua marca também fora das telas, com a mesma identidade do seu digital.",
  icon: Printer,
  faqKey: "materiais-graficos",
});

export const instagramEstrategico = servico({
  id: "instagram-estrategico",
  title: "Instagram Estratégico",
  short: "Seu perfil mostrando melhor o valor do seu trabalho.",
  icon: Smartphone,
  faqKey: "instagram-estrategico",
});

export const presencaDigital = servico({
  id: "presenca-digital",
  title: "Presença Digital",
  short: "Um endereço seu no digital, pra as pessoas entenderem rápido quem você é.",
  icon: Globe,
  faqKey: "site",
});

export const portfolio = servico({
  id: "portfolio",
  title: "Portfólio",
  short: "Seu trabalho, bem apresentado, em documento ou em site.",
  icon: FolderOpen,
  faqKey: "portfolio",
});

export const gestaoRedes = servico({
  id: "gestao-de-redes-sociais",
  title: "Gestão de Redes Sociais",
  short: "Você cuida do seu negócio. A gente mantém sua marca presente.",
  icon: CalendarCheck,
  faqKey: "gestao-de-redes",
});

export const gestaoLeads = servico({
  id: "gestao-de-leads",
  title: "Gestão de Leads",
  short: "Nenhum contato perdido: você sabe quem atender e quando.",
  icon: Users,
  faqKey: "gestao-de-leads",
});

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

export const servicoPorId = (id: string): Servico | undefined => todosServicos.find((s) => s.id === id);
