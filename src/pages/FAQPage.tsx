import React, { useEffect, useMemo, useRef, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { Search, Home, ChevronRight, X } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import FaqList from "@/components/FaqList";
import { faqs, faqAbas, ABA_PADRAO, abaAntiga } from "@/data/faq";

const abaValida = (id: string | null | undefined) => (id && faqAbas.some((a) => a.id === id) ? id : null);

const FAQPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState("");
  const [openIds, setOpenIds] = useState<Record<string, boolean>>({});
  const [highlightedId, setHighlightedId] = useState<string | null>(null);
  const tabRefs = useRef<Record<string, HTMLButtonElement | null>>({});

  // A aba vem de ?servico= (padrão: Geral). Endereços antigos (#categoria) também funcionam.
  const hash = typeof window !== "undefined" ? window.location.hash.replace("#", "") : "";
  const abaDoHash = abaValida(abaAntiga[hash] ?? hash);
  const paramServico = searchParams.get("servico");
  const abaAtiva = abaValida(abaAntiga[paramServico ?? ""] ?? paramServico) ?? abaDoHash ?? ABA_PADRAO;

  const trocarAba = (id: string) => {
    const proximos = new URLSearchParams(searchParams);
    if (id === ABA_PADRAO) proximos.delete("servico");
    else proximos.set("servico", id);
    setSearchParams(proximos, { replace: true });
  };

  const toggleFaq = (id: string) => setOpenIds((prev) => ({ ...prev, [id]: !prev[id] }));

  // Link direto para uma pergunta: /faq#id-da-pergunta
  useEffect(() => {
    const faq = faqs.find((f) => f.id === hash);
    if (!faq) return;
    if (abaAtiva !== faq.servico) trocarAba(faq.servico);
    setOpenIds((prev) => ({ ...prev, [faq.id]: true }));
    setHighlightedId(faq.id);
    const t1 = setTimeout(() => document.getElementById(faq.id)?.scrollIntoView({ behavior: "smooth", block: "center" }), 300);
    const t2 = setTimeout(() => setHighlightedId(null), 3000);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hash]);

  const consulta = searchQuery.toLowerCase().trim();
  const buscando = consulta !== "";

  const exibidas = useMemo(() => {
    if (buscando) {
      return faqs.filter(
        (f) => f.pergunta.toLowerCase().includes(consulta) || f.resposta.toLowerCase().includes(consulta)
      );
    }
    return faqs.filter((f) => f.servico === abaAtiva);
  }, [buscando, consulta, abaAtiva]);

  // Setas do teclado nas abas (padrão ARIA)
  const onTabKeyDown = (e: React.KeyboardEvent, indice: number) => {
    let novo = -1;
    if (e.key === "ArrowRight") novo = (indice + 1) % faqAbas.length;
    if (e.key === "ArrowLeft") novo = (indice - 1 + faqAbas.length) % faqAbas.length;
    if (e.key === "Home") novo = 0;
    if (e.key === "End") novo = faqAbas.length - 1;
    if (novo < 0) return;
    e.preventDefault();
    const alvo = faqAbas[novo].id;
    trocarAba(alvo);
    tabRefs.current[alvo]?.focus();
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.pergunta,
      acceptedAnswer: { "@type": "Answer", text: faq.resposta },
    })),
  };

  const abaAtual = faqAbas.find((a) => a.id === abaAtiva)!;
  const paginaDoTema: Record<string, string> = {
    "identidade-visual": "/servicos/identidade-visual",
    "instagram-estrategico": "/servicos/instagram-estrategico",
    site: "/servicos/presenca-digital",
    portfolio: "/servicos/portfolio",
    "complementos-ilustrados": "/servicos/complementos-ilustrados",
    "materiais-graficos": "/servicos/materiais-graficos",
    "gestao-de-redes": "/servicos/gestao-de-redes-sociais",
    "gestao-de-leads": "/servicos/gestao-de-leads",
  };

  return (
    <>
      <SEO
        title="Dúvidas Frequentes"
        description="Respostas diretas e sem jargão sobre serviços, pagamento, prazos e entregas da Lunae."
        schema={faqSchema}
      />

      <div className="min-h-screen relative paper-bg">
        <div className="absolute inset-0 bg-background/[0.64] pointer-events-none" />

        <div className="relative z-10">
          <Header />

          <main id="main-content" className="pt-28 md:pt-36 pb-20">
            <div className="max-w-4xl mx-auto px-6">
              {/* Breadcrumbs */}
              <nav aria-label="Breadcrumb" className="mb-10 flex items-center gap-2 text-xs md:text-sm font-body text-muted-foreground">
                <Link to="/" className="hover:text-primary flex items-center gap-1 transition-colors min-h-[44px] px-1">
                  <Home size={14} aria-hidden="true" />
                  Home
                </Link>
                <ChevronRight size={12} aria-hidden="true" className="text-muted-foreground/50" />
                <span className="text-primary font-medium" aria-current="page">Dúvidas</span>
              </nav>

              {/* Título */}
              <div className="text-center max-w-2xl mx-auto mb-12">
                <h1 className="text-4xl sm:text-5xl font-display font-normal text-primary leading-tight mb-4">
                  Dúvidas Frequentes
                </h1>
                <p className="text-sm md:text-base font-body text-muted-foreground leading-relaxed">
                  Respostas diretas e sem jargão. Escolha o tema ou pesquise por uma palavra.
                </p>
              </div>

              {/* Busca */}
              <div className="relative mb-10 max-w-xl mx-auto shadow-sm rounded-full">
                <label htmlFor="busca-faq" className="sr-only">
                  Pesquisar nas dúvidas
                </label>
                <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
                  <Search aria-hidden="true" className="h-5 w-5 text-[#443A94]" />
                </div>
                <input
                  id="busca-faq"
                  type="search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Pesquise por palavra-chave (ex.: prazo, pagamento, logo)"
                  className="block w-full pl-12 pr-12 py-4 border border-[#443A94]/30 bg-white rounded-full font-body text-sm text-primary placeholder:text-muted-foreground"
                />
                {searchQuery && (
                  <button
                    type="button"
                    onClick={() => setSearchQuery("")}
                    className="absolute inset-y-0 right-0 pr-5 flex items-center text-muted-foreground hover:text-primary min-w-[44px] justify-center"
                    aria-label="Limpar pesquisa"
                  >
                    <X aria-hidden="true" size={16} />
                  </button>
                )}
              </div>

              {/* Abas por tipo de serviço */}
              <div
                role="tablist"
                aria-label="Temas das dúvidas"
                className={`flex flex-wrap justify-center gap-2 md:gap-3 mb-10 ${buscando ? "opacity-50" : ""}`}
              >
                {faqAbas.map((aba, i) => {
                  const ativa = aba.id === abaAtiva;
                  return (
                    <button
                      key={aba.id}
                      ref={(el) => {
                        tabRefs.current[aba.id] = el;
                      }}
                      type="button"
                      role="tab"
                      id={`aba-${aba.id}`}
                      aria-selected={ativa}
                      aria-controls="painel-faq"
                      tabIndex={ativa ? 0 : -1}
                      onClick={() => trocarAba(aba.id)}
                      onKeyDown={(e) => onTabKeyDown(e, i)}
                      className={`px-5 py-2.5 rounded-full font-body font-semibold text-xs md:text-sm transition-colors min-h-[44px] ${
                        ativa
                          ? "bg-[#443A94] text-white shadow-md"
                          : "bg-white text-[#443A94] border border-[#443A94]/30 hover:bg-[#443A94]/10"
                      }`}
                    >
                      {aba.label}
                    </button>
                  );
                })}
              </div>

              {/* Resultado da busca anunciado para leitores de tela */}
              <p className="sr-only" role="status" aria-live="polite">
                {buscando ? `${exibidas.length} resultado(s) para a busca.` : ""}
              </p>

              {/* Painel */}
              <div
                id="painel-faq"
                role="tabpanel"
                aria-labelledby={buscando ? undefined : `aba-${abaAtiva}`}
                aria-label={buscando ? "Resultados da busca" : undefined}
                tabIndex={0}
              >
                {buscando && (
                  <p className="font-body text-sm text-muted-foreground mb-4">
                    Mostrando resultados de todos os temas.
                  </p>
                )}
                {exibidas.length > 0 ? (
                  <FaqList
                    items={exibidas}
                    idPrefix="faq"
                    openIds={openIds}
                    onToggle={toggleFaq}
                    highlightedId={highlightedId}
                    showCopyLink
                  />
                ) : (
                  <div className="text-center py-12 bg-white/70 border border-[#443A94]/15 rounded-2xl p-6">
                    <p className="font-display font-normal text-xl text-primary mb-1">Nenhuma dúvida encontrada</p>
                    <p className="text-sm font-body text-muted-foreground">Tente outras palavras ou escolha um tema acima.</p>
                    <button
                      type="button"
                      onClick={() => setSearchQuery("")}
                      className="mt-4 text-sm font-body font-bold text-primary underline underline-offset-4 min-h-[44px]"
                    >
                      Limpar a pesquisa
                    </button>
                  </div>
                )}
              </div>

              {/* Link para a página do serviço do tema */}
              {!buscando && paginaDoTema[abaAtual.id] && (
                <p className="mt-6 text-center font-body text-sm">
                  <Link
                    to={paginaDoTema[abaAtual.id]}
                    className="inline-flex items-center min-h-[44px] font-bold text-primary underline underline-offset-4"
                  >
                    Ver a página de {abaAtual.label}
                  </Link>
                </p>
              )}

              {/* WhatsApp */}
              <section className="mt-16 bg-[#443A94] rounded-3xl p-8 md:p-12 text-white text-center shadow-lg" aria-labelledby="faq-whatsapp">
                <h2 id="faq-whatsapp" className="text-xl md:text-2xl font-display font-normal mb-4">
                  Ainda tem alguma dúvida particular?
                </h2>
                <p className="font-body text-white/90 text-sm max-w-xl mx-auto mb-8">
                  Cada projeto é único e compreendemos isso. Fale diretamente com nossa equipe via WhatsApp.
                </p>
                <a
                  href="https://wa.me/5513991598181?text=Ol%C3%A1!%20Li%20o%20FAQ%20no%20site%20da%20Lunae%20mas%20fiquei%20com%20uma%20d%C3%BAvida%20e%20gostaria%20de%20conversar."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center min-h-[48px] font-body font-bold text-sm bg-white text-[#443A94] hover:bg-[#FA7C9C] hover:text-[#1B1B1B] py-3 px-8 rounded-full transition-colors duration-300 shadow-md"
                >
                  Fale direto via WhatsApp ✦
                  <span className="sr-only"> (abre em nova aba)</span>
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
