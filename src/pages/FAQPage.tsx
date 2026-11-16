import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown, HelpCircle, Search, Home, ChevronRight, Hash, Sparkles, Send, RefreshCw, X } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

interface FAQItem {
  id: string;
  category: "identidade-visual" | "instagram-estrategico" | "presenca-digital" | "portfolio" | "complementos-ilustrados" | "materiais-graficos" | "gestao-de-redes-sociais" | "gestao-de-leads" | "gerais";
  question: string;
  answer: string;
}

const allFaqs: FAQItem[] = [
  // Categoria: Identidade Visual
  {
    id: "ajuda-desde-comeco",
    category: "identidade-visual",
    question: "Ainda não tenho uma marca. A Lunae pode me ajudar desde o começo?",
    answer: "Sim, esse é o nosso ponto de partida mais comum. Você não precisa chegar com nada pronto: a gente entende sua essência e constrói a identidade e a presença digital com você, passo a passo."
  },
  {
    id: "cria-apenas-logotipo",
    category: "identidade-visual",
    question: "Vocês criam apenas o logotipo?",
    answer: "Não precisa. Você escolhe: só o logo ou o pacote completo.\n* Estudo de cores e tipografia\n* Logotipo (até 2 propostas)\n* Elementos gráficos de apoio\n* Manual da marca\n* Templates para Instagram"
  },
  {
    id: "ja-tenho-identidade-pecas-novas",
    category: "identidade-visual",
    question: "Já tenho identidade. Vocês fazem só peças novas?",
    answer: "Sim. Em Extensões da marca, criamos o logo de uma submarca (linha de produto, unidade ou evento) e pacotes de 5 templates novos, sempre dentro da identidade que você já tem."
  },
  {
    id: "tempo-identidade-visual",
    category: "identidade-visual",
    question: "Quanto tempo leva o projeto de Identidade Visual?",
    answer: "Em média, **3 a 4 semanas** (tempo suficiente pra fazer com cuidado, sem pressa e sem enrolação)."
  },
  {
    id: "processo-identidade-visual",
    category: "identidade-visual",
    question: "Como funciona o processo de criação?",
    answer: "5 passos simples:\n* **Briefing** (entendemos sua essência)\n* **Moodboard** (direção de cores e estilo, pra você aprovar antes do design)\n* **Design autoral** (sua identidade sob medida)\n* **Apresentação** (em videochamada, com explicação de cada escolha)\n* **Ajustes e entrega** (Site, Identidade Visual, Templates ou o serviço modular que você contratar)"
  },

  // Categoria: Instagram Estratégico
  {
    id: "produzem-conteudos-instagram",
    category: "instagram-estrategico",
    question: "Vocês produzem os conteúdos ou postam no meu perfil?",
    answer: "Podemos fazer essa gestão também. Mas caso você decida fazer a postagem, a gente entrega a estrutura pra isso ser fácil: diagnóstico, calendário de ideias e templates prontos."
  },
  {
    id: "contratar-apenas-templates",
    category: "instagram-estrategico",
    question: "Posso contratar apenas os templates?",
    answer: "Sim, mas funcionam melhor com sua identidade visual já pronta. É o que garante consistência e resultado de verdade."
  },
  {
    id: "como-funciona-calendario",
    category: "instagram-estrategico",
    question: "Como funciona o calendário de conteúdo?",
    answer: "Um planejamento de **30 dias** com **12 conteúdos** (cerca de 3 por semana). Cada um vem com tema, legenda-base e chamada para ação (CTA), organizados por objetivo: autoridade, conexão, venda e educação."
  },
  {
    id: "artes-avulsas-instagram",
    category: "instagram-estrategico",
    question: "Vocês criam só as artes dos posts?",
    answer: "Sim. Nas artes avulsas, criamos 1 post, story ou banner, ou um pacote de 10 artes, sempre dentro da sua identidade. Você mesma publica."
  },
  {
    id: "instagram-sem-identidade",
    category: "instagram-estrategico",
    question: "Ainda não tenho identidade visual. Posso contratar o Instagram Estratégico?",
    answer: "Pode. Se precisar de identidade visual e elementos gráficos, a gente soma esses itens de forma modular, cada serviço do pacote com o seu valor."
  },

  // Categoria: Presença Digital
  {
    id: "site-celular",
    category: "presenca-digital",
    question: "O site funciona perfeitamente no celular (Design Responsivo)?",
    answer: "Sim, 100% responsivo: carregamento rápido, leitura fácil e o botão de WhatsApp sempre à mão, em qualquer tela."
  },
  {
    id: "desenvolvem-sistemas-complexos",
    category: "presenca-digital",
    question: "Vocês desenvolvem sistemas complexos ou lojas virtuais?",
    answer: "Não. Nosso foco é site institucional, landing page e portfólio, rápidos e bem posicionados no Google. Não fazemos apps ou e-commerce."
  },
  {
    id: "como-funciona-hospedagem",
    category: "presenca-digital",
    question: "Como funciona a contratação de hospedagem e domínio?",
    answer: "A gente orienta e faz a configuração inicial. Domínio e hospedagem ficam registrados no seu nome (você mantém a propriedade) e os custos são pagos por você, direto ao serviço."
  },
  {
    id: "contratar-apenas-site",
    category: "presenca-digital",
    question: "Já tenho identidade visual pronta. Posso contratar apenas o site?",
    answer: "Sim! Aplicamos suas cores e fontes já existentes, com foco total em usabilidade no novo site."
  },
  {
    id: "suporte-depois-do-site",
    category: "presenca-digital",
    question: "O site tem suporte depois de pronto?",
    answer: "Sim. Você conta com até **3 meses** de suporte e pequenos ajustes depois da entrega."
  },
  {
    id: "site-sem-identidade",
    category: "presenca-digital",
    question: "Não tenho identidade visual. Posso contratar o site?",
    answer: "Pode. Se precisar de identidade visual e elementos gráficos, a gente soma esses itens de forma modular, cada serviço do pacote com o seu valor."
  },

  // Categoria: Portfólio
  {
    id: "portfolio-documento-ou-site",
    category: "portfolio",
    question: "Qual a diferença entre portfólio em documento e em site?",
    answer: "O documento é um PDF pronto pra enviar por e-mail ou WhatsApp. O site é um endereço seu, que qualquer pessoa acessa e que aparece no Google. Você escolhe um ou os dois."
  },
  {
    id: "portfolio-quantos-projetos",
    category: "portfolio",
    question: "Quantos projetos entram no portfólio?",
    answer: "De 5 a 8 projetos. A gente escolhe juntas os que melhor mostram o seu trabalho."
  },
  {
    id: "portfolio-textos-prontos",
    category: "portfolio",
    question: "Preciso ter os textos prontos?",
    answer: "Não. A gente escreve a bio, o “sobre mim” e a descrição de cada projeto, com base na nossa conversa. Só precisamos entender seu tom de voz e qual ideia você quer passar."
  },
  {
    id: "portfolio-os-dois-formatos",
    category: "portfolio",
    question: "Posso contratar o portfólio em documento e em site?",
    answer: "Sim. Nos dois formatos, a curadoria e os textos entram uma vez só."
  },
  {
    id: "portfolio-atualizar-todo-mes",
    category: "portfolio",
    question: "Posso atualizar o portfólio todo mês?",
    answer: "Pode. No pacote mensal, o portfólio ganha novos projetos a cada mês."
  },
  {
    id: "portfolio-sem-identidade",
    category: "portfolio",
    question: "Não tenho identidade visual. Posso fazer o portfólio?",
    answer: "Pode. Se precisar de identidade visual e elementos gráficos, a gente soma esses itens de forma modular, cada serviço do pacote com o seu valor."
  },

  // Categoria: Complementos Ilustrados
  {
    id: "complementos-o-que-sao",
    category: "complementos-ilustrados",
    question: "O que são os complementos ilustrados?",
    answer: "Ilustrações feitas só pra sua marca, como persona, infográfico, carrossel, ícones e personagem. Servem pra explicar, encantar e diferenciar."
  },
  {
    id: "complementos-contratar-sozinho",
    category: "complementos-ilustrados",
    question: "Posso contratar só um complemento?",
    answer: "Sim. Cada um pode ser contratado sozinho ou junto de qualquer outro serviço. Em cada item, mostramos com o que ele combina melhor."
  },
  {
    id: "complementos-formato-entrega",
    category: "complementos-ilustrados",
    question: "Em que formato recebo as ilustrações?",
    answer: "Prontas, em PNG ou SVG. Os textos e layouts que acompanham as peças ficam editáveis."
  },
  {
    id: "complementos-editar-depois",
    category: "complementos-ilustrados",
    question: "Vou conseguir editar meu conteúdo depois?",
    answer: "Os textos e layouts que acompanham as peças ficam editáveis. As ilustrações vêm prontas, em PNG ou SVG, e não são editáveis. Se quiser mudar uma ilustração, a gente refaz com você."
  },
  {
    id: "complementos-carrossel",
    category: "complementos-ilustrados",
    question: "Quantas lâminas tem um carrossel?",
    answer: "Até 8 lâminas ilustradas, com roteiro e textos editáveis. Também temos o pacote com 3 carrosséis na mesma linguagem visual."
  },

  // Categoria: Materiais Gráficos
  {
    id: "materiais-impressao-inclusa",
    category: "materiais-graficos",
    question: "A impressão está inclusa?",
    answer: "Não. A impressão é paga direto à gráfica. A gente indica gráficas e confere a prova antes de imprimir."
  },
  {
    id: "materiais-formato-arquivos",
    category: "materiais-graficos",
    question: "Em que formato recebo os arquivos?",
    answer: "PDF em alta resolução, pronto pra gráfica, e PNG pra usar no digital. Cardápio e flyer podem vir em versão editável, pra você trocar preços e itens quando precisar."
  },
  {
    id: "materiais-cardapio",
    category: "materiais-graficos",
    question: "Vocês fazem cardápio pra qualquer negócio?",
    answer: "Fazemos cardápios de até 4 páginas ou painéis, pra restaurantes, cafés, confeitarias e similares. Cada página a mais é um item extra."
  },
  {
    id: "materiais-ilustracao-exclusiva",
    category: "materiais-graficos",
    question: "Posso ter ilustrações exclusivas na peça?",
    answer: "Pode. As ilustrações exclusivas são contratadas à parte, nos Complementos Ilustrados."
  },
  {
    id: "materiais-sem-identidade",
    category: "materiais-graficos",
    question: "Preciso ter identidade visual pra pedir os materiais?",
    answer: "Se precisar de identidade visual e elementos gráficos, a gente soma esses itens de forma modular, cada serviço do pacote com o seu valor."
  },
  {
    id: "materiais-todo-mes",
    category: "materiais-graficos",
    question: "Posso receber peças todo mês?",
    answer: "Pode, no pacote mensal. Ele é ideal pra quem troca o cardápio por estação, faz eventos ou distribui material com frequência."
  },

  // Categoria: Gestão de Redes Sociais
  {
    id: "gestao-voces-postam-por-mim",
    category: "gestao-de-redes-sociais",
    question: "Vocês postam por mim?",
    answer: "Sim. Na Gestão de Redes Sociais, a gente planeja, cria e publica seus conteúdos todo mês, conforme o plano que você escolher."
  },
  {
    id: "gestao-diferenca-planos",
    category: "gestao-de-redes-sociais",
    question: "Qual a diferença entre os planos?",
    answer: "* **Constante:** 8 posts no mês, com legendas, agendamento e relatório mensal simples\n* **Presença:** 12 posts (com até 4 reels), stories 3 vezes por semana e relatório mensal\n* **Presença+:** 16 posts (com até 6 reels), stories 5 vezes por semana, respostas a comentários e direct em horário comercial e reunião mensal de resultados"
  },
  {
    id: "gestao-implantacao",
    category: "gestao-de-redes-sociais",
    question: "O que é a implantação?",
    answer: "É o que fazemos antes do primeiro mês, em duas partes. A **base** vale pra todo mundo: diagnóstico do perfil, bio, pilares de conteúdo e tom de voz e capas dos destaques. Depois você escolhe a versão: com identidade visual, adaptamos os seus templates; sem identidade visual, criamos as cores, as fontes e os templates do zero."
  },
  {
    id: "gestao-implantacao-sem-cobrar-duas-vezes",
    category: "gestao-de-redes-sociais",
    question: "Se eu já contratei algum item, pago de novo na implantação?",
    answer: "Não. Se você já contratou algum item em outro serviço, ele sai da conta. Se precisar de logo, é só somar a criação de logotipo da Identidade Visual."
  },
  {
    id: "gestao-quanto-tempo",
    category: "gestao-de-redes-sociais",
    question: "Preciso ficar quanto tempo?",
    answer: "O contrato mínimo é de **3 meses**, com renovação automática. Pra encerrar, é só avisar até 20 dias antes do fim do período."
  },
  {
    id: "gestao-fotos-videos",
    category: "gestao-de-redes-sociais",
    question: "Quem envia as fotos e os vídeos?",
    answer: "Você. A gente edita e publica a partir do seu material. A captação presencial de fotos e vídeos não está inclusa."
  },
  {
    id: "gestao-trafego-pago",
    category: "gestao-de-redes-sociais",
    question: "Vocês fazem tráfego pago?",
    answer: "Não. Tráfego pago, captação presencial e influenciadores não estão inclusos."
  },
  {
    id: "gestao-garantia-resultado",
    category: "gestao-de-redes-sociais",
    question: "Vocês garantem seguidores ou vendas?",
    answer: "Não. Nosso compromisso é com constância e qualidade. Número de seguidores e vendas dependem de muitos fatores."
  },
  {
    id: "gestao-pecas-extras",
    category: "gestao-de-redes-sociais",
    question: "Posso pedir peças além do plano?",
    answer: "Pode. Posts avulsos, carrosséis, pacotes de posts e edição de reels entram como extras, cobrados junto com a mensalidade do mês em que forem feitos."
  },

  // Categoria: Gestão de Leads
  {
    id: "leads-o-que-e",
    category: "gestao-de-leads",
    question: "O que é a Gestão de Leads?",
    answer: "É a organização de quem chega até você pelo Instagram, site ou WhatsApp. Assim, nenhum contato se perde e você sabe quem atender, quando e em que etapa cada pessoa está."
  },
  {
    id: "leads-precisa-de-crm",
    category: "gestao-de-leads",
    question: "Preciso de um sistema ou CRM pago?",
    answer: "Não. Usamos ferramentas que já existem: planilha, Trello, WhatsApp Business ou um CRM. Se você escolher uma assinatura paga, o custo é seu."
  },
  {
    id: "leads-fecham-vendas",
    category: "gestao-de-leads",
    question: "Vocês fecham as vendas por mim?",
    answer: "Não. A negociação e o fechamento continuam com você. A gente organiza e encaminha."
  },
  {
    id: "leads-implantacao",
    category: "gestao-de-leads",
    question: "O que vem na implantação?",
    answer: "Um projeto único, com:\n* Mapeamento da jornada dos contatos\n* Estrutura do funil (quadro ou CRM, etiquetas no WhatsApp Business e link na bio)\n* Roteiros de atendimento\n* Treinamento da equipe (1 encontro online de até 1h30 e guia em PDF)"
  },
  {
    id: "leads-organizacao-ou-primeiro-atendimento",
    category: "gestao-de-leads",
    question: "Qual a diferença entre Organização e Primeiro atendimento?",
    answer: "Na **Organização**, sua equipe responde os contatos e a gente revisa o funil toda semana, aponta contatos parados e envia um relatório mensal. No **Primeiro atendimento**, a gente faz a primeira resposta em horário comercial, qualifica e encaminha pra pessoa certa da sua equipe (até 150 contatos por mês)."
  },
  {
    id: "leads-prazo-e-junto-redes",
    category: "gestao-de-leads",
    question: "O acompanhamento mensal tem prazo? Dá pra contratar junto com a gestão de redes?",
    answer: "O acompanhamento mensal tem contrato mínimo de 3 meses, com renovação automática. Pra encerrar, avise até 20 dias antes do fim do período. Contratando junto com a Gestão de Redes Sociais, as mensalidades têm condição especial."
  },

  // Categoria: Perguntas Gerais
  {
    id: "como-funciona-orcamento",
    category: "gerais",
    question: "Como funciona o orçamento?",
    answer: "Nosso orçamento é modular: cada item tem preço próprio. A gente conversa, escolhe junto com você os serviços que fazem sentido agora e envia uma proposta com a soma só dos itens escolhidos. Você escolhe como pagar."
  },
  {
    id: "contratar-apenas-uma-entrega",
    category: "gerais",
    question: "Posso contratar apenas uma entrega (modelo modular)?",
    answer: "Sim, todos os nossos serviços são modulares. Você leva só o que precisa, um item ou vários, e paga só por eles. Se um item aparece em mais de um serviço, ele é cobrado uma vez só."
  },
  {
    id: "servico-repetido-em-pacotes",
    category: "gerais",
    question: "Se um serviço aparece em mais de um pacote, pago duas vezes?",
    answer: "Não. Ele é cobrado uma vez só. Por exemplo, os templates fazem parte da Identidade Visual e do Instagram Estratégico: contratando os dois, entram uma vez só. O mesmo vale pra diagnóstico do perfil, bio e capas dos destaques (Instagram Estratégico e implantação da Gestão de Redes) e pra curadoria e textos do Portfólio."
  },
  {
    id: "servico-precisa-de-outro-pacote",
    category: "gerais",
    question: "E se meu serviço precisar de itens de outro serviço?",
    answer: "Esses itens entram de forma modular, pelo valor do serviço de origem. Por exemplo: se você quer o Instagram, o site ou o portfólio, mas ainda não tem identidade visual, o estudo de cores e tipografia e os elementos gráficos são cobrados da Identidade Visual. Por isso o valor final pode variar conforme o que você precisar."
  },
  {
    id: "o-que-e-pacote-mensal",
    category: "gerais",
    question: "O que é o pacote mensal?",
    answer: "É pra quem precisa do mesmo serviço com frequência. Você recebe o item escolhido todo mês, como novos templates, logos de submarcas ou artes de rotina, com condição especial. O contrato mínimo é de 3 meses, com renovação automática. Pra encerrar, avise até 20 dias antes do fim do período."
  },
  {
    id: "rodadas-de-ajuste",
    category: "gerais",
    question: "Quantas rodadas de ajuste eu tenho?",
    answer: "Até 2 rodadas na identidade, no protótipo do site, nos templates, nas ilustrações e nos materiais gráficos. Na Gestão de Redes Sociais, 1 rodada por post."
  },
  {
    id: "custos-nao-inclusos",
    category: "gerais",
    question: "Quais custos não estão inclusos?",
    answer: "Domínio, hospedagem, ferramentas pagas de terceiros e impressão gráfica. Esses custos são seus e pagos direto a cada serviço."
  },
  {
    id: "nunca-trabalhei-com-designer",
    category: "gerais",
    question: "Nunca trabalhei com uma designer. Vou saber o que preciso fazer?",
    answer: "Sem problema! Explicamos tudo em linguagem simples, sem jargão, e te guiamos em cada etapa."
  },
  {
    id: "atende-apenas-mulheres",
    category: "gerais",
    question: "A Lunae atende apenas mulheres?",
    answer: "Nascemos pra apoiar o empreendedorismo feminino, mas atendemos qualquer profissional que valorize processo humano e resultado estratégico."
  },
  {
    id: "como-sei-qual-area-ideal",
    category: "gerais",
    question: "Como sei qual área é ideal para o meu momento?",
    answer: "A gente te ajuda a decidir. Numa conversa rápida (WhatsApp ou Meet), identificamos sua maior dificuldade hoje e indicamos por onde começar."
  }
];

// Helper to render markdown-like lists and bold texts beautifully inside FAQ items
const renderFormattedAnswer = (text: string) => {
  const lines = text.split("\n");
  const elements: React.ReactNode[] = [];
  let currentList: React.ReactNode[] = [];
  let inList = false;

  const parseInlineStyles = (content: string) => {
    // Basic split for bold: **text** -> <strong>text</strong>
    const parts = content.split(/(\*\*.*?\*\*)/g);
    return parts.map((part, index) => {
      if (part.startsWith("**") && part.endsWith("**")) {
        return <strong key={index} className="font-semibold text-primary">{part.slice(2, -2)}</strong>;
      }
      return part;
    });
  };

  lines.forEach((line, index) => {
    const trimmed = line.trim();
    if (trimmed.startsWith("* ") || trimmed.startsWith("- ") || trimmed.startsWith("• ")) {
      // It's a list item
      inList = true;
      const content = trimmed.substring(2);
      currentList.push(
        <li key={`li-${index}`} className="list-disc ml-5 pl-1 mb-1 font-body text-sm md:text-base text-muted-foreground leading-relaxed">
          {parseInlineStyles(content)}
        </li>
      );
    } else {
      if (inList && currentList.length > 0) {
        elements.push(
          <ul key={`ul-${index}`} className="my-3 space-y-1 list-none">
            {currentList}
          </ul>
        );
        currentList = [];
        inList = false;
      }
      
      if (trimmed === "") {
        return;
      }

      // Normal paragraph
      elements.push(
        <p key={`p-${index}`} className="mb-3 last:mb-0 text-sm md:text-base font-body text-muted-foreground leading-relaxed">
          {parseInlineStyles(trimmed)}
        </p>
      );
    }
  });

  if (inList && currentList.length > 0) {
    elements.push(
      <ul key="ul-final" className="my-3 space-y-1 list-none">
        {currentList}
      </ul>
    );
  }

  return <div className="space-y-1">{elements}</div>;
};

const categories = [
  { id: "all", label: "Todas as Perguntas" },
  { id: "identidade-visual", label: "Identidade Visual" },
  { id: "instagram-estrategico", label: "Instagram Estratégico" },
  { id: "presenca-digital", label: "Presença Digital" },
  { id: "portfolio", label: "Portfólio" },
  { id: "complementos-ilustrados", label: "Complementos Ilustrados" },
  { id: "materiais-graficos", label: "Materiais Gráficos" },
  { id: "gestao-de-redes-sociais", label: "Gestão de Redes Sociais" },
  { id: "gestao-de-leads", label: "Gestão de Leads" },
  { id: "gerais", label: "Perguntas Gerais" }
];

const FAQPage = () => {
  const [activeTab, setActiveTab] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [openFaqIds, setOpenFaqIds] = useState<Record<string, boolean>>({});
  const [highlightedId, setHighlightedId] = useState<string | null>(null);

  // Share anchor links feedback state
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const toggleFaq = (id: string) => {
    setOpenFaqIds(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const handleCopyLink = (id: string, e: React.MouseEvent) => {
    e.stopPropagation(); // Avoid triggering the accordion toggle
    const currentUrl = window.location.origin + window.location.pathname + "#" + id;
    navigator.clipboard.writeText(currentUrl).then(() => {
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 2000);
    });
  };

  // Filter FAQs based on tab selection and search query
  const filteredFaqs = useMemo(() => {
    return allFaqs.filter(faq => {
      const matchesTab = activeTab === "all" || faq.category === activeTab;
      const cleanQuery = searchQuery.toLowerCase().trim();
      const matchesSearch = 
        cleanQuery === "" || 
        faq.question.toLowerCase().includes(cleanQuery) || 
        faq.answer.toLowerCase().includes(cleanQuery);
      return matchesTab && matchesSearch;
    });
  }, [activeTab, searchQuery]);

  // Handle URL hash anchor on load
  React.useEffect(() => {
    const handleHashCheck = () => {
      const hash = window.location.hash.replace("#", "");
      if (hash) {
        // If it's a category
        const isCategory = categories.some(cat => cat.id !== "all" && cat.id === hash);
        if (isCategory) {
          setActiveTab(hash);
          // Find first FAQ in that category
          const firstInCat = allFaqs.find(faq => faq.category === hash);
          if (firstInCat) {
            setOpenFaqIds(prev => ({ ...prev, [firstInCat.id]: true }));
            setHighlightedId(firstInCat.id);
            setTimeout(() => {
              const element = document.getElementById(firstInCat.id);
              if (element) {
                element.scrollIntoView({ behavior: "smooth", block: "center" });
              }
            }, 300);
            setTimeout(() => {
              setHighlightedId(null);
            }, 3000);
          }
        } else {
          // It's a specific FAQ ID
          const faq = allFaqs.find(f => f.id === hash);
          if (faq) {
            setActiveTab(faq.category);
            setOpenFaqIds(prev => ({ ...prev, [hash]: true }));
            setHighlightedId(hash);
            setTimeout(() => {
              const element = document.getElementById(hash);
              if (element) {
                element.scrollIntoView({ behavior: "smooth", block: "center" });
              }
            }, 300);
            setTimeout(() => {
              setHighlightedId(null);
            }, 3000);
          }
        }
      }
    };

    handleHashCheck();
    window.addEventListener("hashchange", handleHashCheck);
    return () => {
      window.removeEventListener("hashchange", handleHashCheck);
    };
  }, []);



  // FAQ Schema JSON-LD Data
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": allFaqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <>
      <SEO 
        title="Dúvidas Frequentes" 
        description="Respostas transparentes e sem jargões complicados. Tire suas dúvidas sobre os valores, prazos, entregáveis e formas de pagamento da Lunae."
        schema={faqSchema}
      />

      {/* Skip Link */}
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-secondary text-white px-4 py-2 rounded-lg font-bold z-50">
        Pular para o conteúdo principal
      </a>

      <div 
        className="min-h-screen relative paper-bg"
      >
        <div className="absolute inset-0 bg-background/[0.64] pointer-events-none" />
        
        <div className="relative z-10">
          <Header />
          
          <main id="main-content" className="pt-28 md:pt-36 pb-20">
            <div className="max-w-4xl mx-auto px-6">
              
              {/* Breadcrumbs */}
              <nav aria-label="Breadcrumb" className="mb-10 flex items-center gap-2 text-xs md:text-sm font-body text-muted-foreground">
                <Link to="/" className="hover:text-secondary flex items-center gap-1 transition-colors min-h-[44px] px-1 inline-flex items-center">
                  <Home size={14} />
                  Home
                </Link>
                <ChevronRight size={12} className="text-muted-foreground/50" />
                <span className="text-primary font-medium" aria-current="page">FAQ</span>
              </nav>

              {/* Title Section */}
              <div className="text-center max-w-2xl mx-auto mb-12">
                <span className="font-body font-bold text-secondary tracking-widest uppercase text-xs md:text-sm block mb-3">
                  ✦ CENTRAL DE RESPOSTAS
                </span>
                <h1 className="text-4xl sm:text-5xl font-display font-normal text-primary leading-tight mb-4">
                  Dúvidas Frequentes
                </h1>
                <p className="text-sm md:text-base font-body text-muted-foreground leading-relaxed">
                  Sem mistérios, sem jargões e sem complicações comerciais. Preparamos esclarecimentos diretos sobre escopo, formas de contratação, processos e garantias.
                </p>
              </div>

              {/* Interactive Search Bar */}
              <div className="relative mb-10 max-w-xl mx-auto shadow-sm rounded-full">
                <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-[#443A94]/40" />
                </div>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Pesquise por palavra-chave (ex: preço, prazo, vetor)..."
                  className="block w-full pl-12 pr-12 py-4 border border-[#443A94]/15 bg-white/90 backdrop-blur-sm rounded-full font-body text-sm text-primary focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all placeholder:text-[#443A94]/40"
                  aria-label="Barra de pesquisa rápida por dúvidas"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute inset-y-0 right-0 pr-5 flex items-center text-xs text-muted-foreground hover:text-primary min-w-[44px] justify-center"
                    aria-label="Limpar pesquisa"
                  >
                    <X size={16} />
                  </button>
                )}
              </div>

              {/* Category Filter Tabs */}
              <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-12" role="tablist" aria-label="Abas de categorias do FAQ">
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setActiveTab(cat.id)}
                    role="tab"
                    aria-selected={activeTab === cat.id}
                    className={`px-5 py-2.5 rounded-full font-body font-semibold text-xs md:text-sm transition-all min-h-[44px] ${
                      activeTab === cat.id
                        ? "bg-[#443A94] text-white shadow-md shadow-[#443A94]/10"
                        : "bg-white/60 text-[#443A94] border border-[#443A94]/10 hover:bg-white hover:border-secondary/40"
                    }`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>

              {/* FAQs Listing Block */}
              <div className="space-y-4" role="tablist" aria-label="Perguntas do FAQ">
                <AnimatePresence mode="popLayout">
                  {filteredFaqs.length > 0 ? (
                    filteredFaqs.map((faq) => {
                      const isOpen = !!openFaqIds[faq.id];
                      return (
                        <motion.div
                          layout
                          key={faq.id}
                          id={faq.id}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.2 }}
                          className="scroll-mt-24 rounded-2xl border border-[#443A94]/10 bg-white shadow-sm overflow-hidden transition-all duration-300 hover:border-secondary/30"
                        >
                          {/* FAQ Button Trigger */}
                          <div className="flex items-center justify-between p-5 md:p-6 text-left font-display font-normal text-primary text-base md:text-lg focus-within:bg-[#443A94]/5 transition-colors group min-h-[44px]">
                            <button
                              onClick={() => toggleFaq(faq.id)}
                              className="flex-grow flex items-center gap-3 pr-4 text-left font-display font-normal text-primary text-base md:text-lg focus:outline-none min-h-[44px]"
                              aria-expanded={isOpen}
                              aria-controls={`faq-answer-${faq.id}`}
                              id={`faq-trigger-${faq.id}`}
                            >
                              <HelpCircle className="w-5 h-5 text-secondary flex-shrink-0 group-hover:scale-110 transition-transform" />
                              <h3 className="inline font-display font-normal text-base md:text-lg text-primary">{faq.question}</h3>
                            </button>

                            {/* Share Anchor + Expand Indicator Block */}
                            <div className="flex items-center gap-2">
                              <button
                                onClick={(e) => handleCopyLink(faq.id, e)}
                                className="p-2 text-muted-foreground hover:text-secondary rounded-lg transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center relative"
                                aria-label="Copiar link direto para esta pergunta"
                                title="Copiar link direto"
                              >
                                {copiedId === faq.id ? (
                                  <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-secondary text-white text-[10px] px-2 py-1 rounded shadow">Copiado!</span>
                                ) : null}
                                <Hash className="w-4 h-4" />
                              </button>
                              <button
                                onClick={() => toggleFaq(faq.id)}
                                className="p-2 text-secondary min-w-[44px] min-h-[44px] flex items-center justify-center"
                                aria-label="Alternar resposta"
                              >
                                <ChevronDown
                                  className={`w-5 h-5 transition-transform duration-300 ${
                                    isOpen ? "rotate-180" : ""
                                  }`}
                                />
                              </button>
                            </div>
                          </div>

                          {/* Accordion Content */}
                          <AnimatePresence initial={false}>
                            {isOpen && (
                              <motion.div
                                id={`faq-answer-${faq.id}`}
                                role="region"
                                aria-labelledby={`faq-trigger-${faq.id}`}
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.25, ease: "easeInOut" }}
                              >
                                <div className="p-6 pt-0 border-t border-[#443A94]/5 text-sm md:text-base font-body text-muted-foreground leading-relaxed">
                                  {renderFormattedAnswer(faq.answer)}
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </motion.div>
                      );
                    })
                  ) : (
                    <motion.div
                      layout
                      className="text-center py-12 bg-white/40 border border-[#443A94]/10 rounded-2xl p-6"
                    >
                      <RefreshCw className="w-8 h-8 text-secondary animate-spin mx-auto mb-4" />
                      <p className="font-display font-normal text-primary mb-1">Nenhuma dúvida encontrada</p>
                      <p className="text-sm font-body text-muted-foreground">Tente pesquisar por outros termos ou limpe o filtro de categorias.</p>
                      <button
                        onClick={() => { setSearchQuery(""); setActiveTab("all"); }}
                        className="mt-4 text-xs font-body font-bold text-secondary hover:underline underline-offset-4 min-h-[44px]"
                      >
                        Limpar todos os filtros e pesquisa
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* WhatsApp Conversion Section */}
              <section className="mt-16 bg-[#443A94] rounded-3xl p-8 md:p-12 text-white text-center shadow-lg relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl pointer-events-none" />
                <h2 className="text-xl md:text-2xl font-display font-normal mb-4">
                  Ainda tem alguma dúvida particular?
                </h2>
                <p className="font-body text-white/80 text-sm max-w-xl mx-auto mb-8">
                  Cada projeto é único e compreendemos isso. Fale diretamente com nossa equipe via WhatsApp e receba um atendimento atencioso de mulher para mulher.
                </p>
                <a
                  href="https://wa.me/5513991598181?text=Ol%C3%A1!%20Li%20o%20FAQ%20no%20site%20da%20Lunae%20mas%20fiquei%20com%20uma%20d%C3%BAvida%20e%20gostaria%20de%20conversar."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center font-body font-bold text-sm bg-white text-[#443A94] hover:bg-[#FA7C9C] hover:text-white py-3.5 px-8 rounded-full transition-all duration-300 shadow-md hover:-translate-y-0.5"
                >
                  Fale direto via WhatsApp ✦
                </a>
                <p className="block w-fit mx-auto font-display font-normal text-3xl md:text-5xl tracking-wide text-white/90 mt-10 origin-center cursor-default transition-transform duration-300 motion-safe:hover:scale-120 motion-reduce:transition-none">Conta com a gente!</p>
              </section>

            </div>
          </main>

          <Footer />
        </div>
      </div>
    </>
  );
};

export default FAQPage;
