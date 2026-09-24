import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown, HelpCircle, Search, Home, ChevronRight, Hash, Sparkles, Send, RefreshCw, X } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import paperTexture from "@/assets/paper-texture.jpg";

interface FAQItem {
  id: string;
  category: "identidade-visual" | "instagram-estrategico" | "presenca-digital" | "gerais";
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
    answer: "Não. Entregamos o pacote completo:\n* Variações do logotipo\n* Paleta de cores e tipografia\n* Elementos gráficos de apoio\n* Manual de marca fácil de seguir"
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
    answer: "Um roteiro de **30 dias** com o que postar no feed e nos stories, organizado por objetivo: autoridade, conexão, venda e educação. Sem mais dúvida sobre o que publicar."
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
    answer: "A gente te orienta em cada passo. Domínio e hospedagem ficam registrados no seu nome (CPF/CNPJ, você mantém a propriedade), e cuidamos de toda a parte técnica pra colocar o site no ar."
  },
  {
    id: "contratar-apenas-site",
    category: "presenca-digital",
    question: "Já tenho identidade visual pronta. Posso contratar apenas o site?",
    answer: "Sim! Aplicamos suas cores e fontes já existentes, com foco total em usabilidade no novo site."
  },

  // Categoria: Perguntas Gerais
  {
    id: "como-funciona-orcamento",
    category: "gerais",
    question: "Como funciona o orçamento?",
    answer: "Personalizado e transparente. Avaliamos seu momento atual e mostramos onde investir primeiro, com valor detalhado por módulo, sem surpresa."
  },
  {
    id: "contratar-apenas-uma-entrega",
    category: "gerais",
    question: "Posso contratar apenas uma entrega (modelo modular)?",
    answer: "Sim, trabalhamos por módulo. Comece pelo que faz mais sentido agora (logo, Instagram ou site) e expanda quando quiser."
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
        const isCategory = ["identidade-visual", "instagram-estrategico", "presenca-digital", "gerais"].includes(hash);
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
        className="min-h-screen relative"
        style={{ 
          backgroundImage: `url(${paperTexture})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      >
        <div className="absolute inset-0 bg-background/80 pointer-events-none" />
        
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
              <section className="mt-16 bg-gradient-to-br from-[#443A94] to-[#FA7C9C] rounded-3xl p-8 md:p-12 text-white text-center shadow-lg relative overflow-hidden">
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
