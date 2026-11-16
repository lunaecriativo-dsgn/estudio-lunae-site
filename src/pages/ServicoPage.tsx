import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import ItemTable, { type Celula } from "@/components/ItemTable";
import Disclosure from "@/components/Disclosure";
import FaqList from "@/components/FaqList";
import { ConteudoGestaoRedes, ConteudoGestaoLeads } from "@/components/GestaoConteudo";
import { servicoPorId } from "@/data/servicos";
import { catalogo, type Tabela } from "@/data/catalogo";
import { faqsDoServico } from "@/data/faq";
import NotFound from "@/pages/NotFound";

const COLUNAS = ["Serviço", "Entregas"];

// Converte uma tabela do catálogo nas linhas da ItemTable
const montarTabela = (t: Tabela) => {
  const linhas: Celula[][] = t.linhas.map((l) => [
    l.item,
    { texto: l.entregas, sub: l.combina ? `Combina com ${l.combina}` : undefined },
  ]);
  return { linhas, rodape: [] as Celula[][] };
};

const ServicoPage = () => {
  const { slug } = useParams();
  const [openIds, setOpenIds] = useState<Record<string, boolean>>({});

  const servico = slug ? servicoPorId(slug) : undefined;
  const detalhe = slug ? catalogo[slug] : undefined;
  if (!servico || !detalhe) return <NotFound />;

  const faqs = faqsDoServico(servico.faqKey);
  const ehGestaoRedes = servico.id === "gestao-de-redes-sociais";
  const ehGestaoLeads = servico.id === "gestao-de-leads";

  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `${servico.title} | Lunae`,
    description: detalhe.seoDescription,
    provider: { "@type": "Organization", name: "Lunae Estúdio Criativo" },
  };

  const toggleFaq = (id: string) => setOpenIds((prev) => ({ ...prev, [id]: !prev[id] }));

  return (
    <>
      <SEO title={detalhe.seoTitle} description={detalhe.seoDescription} schema={schema} />

      <div className="min-h-screen relative paper-bg">
        <div className="absolute inset-0 bg-background/[0.64] pointer-events-none" />

        <div className="relative z-10">
          <Header />

          <main id="main-content" className="pt-28 md:pt-36 pb-20 text-left">
            <div className="max-w-6xl mx-auto px-6">
              {/* Breadcrumbs */}
              <nav aria-label="Breadcrumb" className="mb-10 flex items-center gap-2 text-xs md:text-sm font-body text-muted-foreground">
                <Link to="/" className="hover:text-primary flex items-center gap-1 transition-colors min-h-[44px] px-1">
                  <Home size={14} aria-hidden="true" />
                  Home
                </Link>
                <ChevronRight size={12} aria-hidden="true" className="text-muted-foreground/50" />
                <Link to="/servicos" className="hover:text-primary transition-colors px-1 min-h-[44px] inline-flex items-center">
                  Serviços
                </Link>
                <ChevronRight size={12} aria-hidden="true" className="text-muted-foreground/50" />
                <span className="text-primary font-medium" aria-current="page">{servico.title}</span>
              </nav>

              {/* 1. Título e benefício */}
              <section className="mb-16 max-w-4xl">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-normal text-primary leading-tight mb-6">
                  {servico.title}
                </h1>
                <p className="text-lg md:text-xl font-body text-muted-foreground leading-relaxed font-light">
                  {servico.short}
                </p>
              </section>

              {/* 2. Para quem é */}
              <section className="mb-16" aria-labelledby="para-quem">
                <h2 id="para-quem" className="text-3xl md:text-4xl font-display font-normal text-primary mb-6">
                  Para quem é
                </h2>
                <ul className="grid md:grid-cols-3 gap-6">
                  {detalhe.paraQuem.map((situacao) => (
                    <li
                      key={situacao}
                      className="p-6 bg-white rounded-2xl border border-[#443A94]/10 shadow-sm font-body text-sm md:text-base text-primary font-medium leading-relaxed"
                    >
                      {situacao}
                    </li>
                  ))}
                </ul>
              </section>

              {/* 3. O que está incluso */}
              <section className="mb-16" aria-labelledby="incluso">
                <h2 id="incluso" className="text-3xl md:text-4xl font-display font-normal text-primary mb-6">
                  O que está incluso
                </h2>
                <div className="space-y-8">
                  {ehGestaoRedes && <ConteudoGestaoRedes />}
                  {ehGestaoLeads && <ConteudoGestaoLeads />}
                  {detalhe.tabelas.map((t) => {
                    const { linhas, rodape } = montarTabela(t);
                    return t.secundaria ? (
                      <Disclosure key={t.legenda} titulo={t.legenda}>
                        <ItemTable ocultarLegenda legenda={t.legenda} colunas={COLUNAS} linhas={linhas} rodape={rodape} />
                      </Disclosure>
                    ) : (
                      <ItemTable key={t.legenda} legenda={t.legenda} colunas={COLUNAS} linhas={linhas} rodape={rodape} />
                    );
                  })}
                </div>
              </section>

              {/* 4. Observações */}
              <section className="mb-8" aria-labelledby="observacoes">
                <h2 id="observacoes" className="text-2xl md:text-3xl font-display font-normal text-primary mb-4">
                  Boas de saber
                </h2>
                <ul className="space-y-2 font-body text-sm md:text-base text-muted-foreground font-light leading-relaxed list-disc pl-5 max-w-3xl">
                  {detalhe.observacoes.map((o) => (
                    <li key={o.texto}>
                      {o.texto}
                      {o.link && (
                        <>
                          {" "}
                          <Link to={o.link.to} className="font-bold text-primary underline underline-offset-4">
                            {o.link.rotulo}
                          </Link>
                        </>
                      )}
                    </li>
                  ))}
                </ul>
              </section>

              {/* 5. Link para "Como funciona" (sem repetir as regras) */}
              <p className="mb-16 font-body text-sm md:text-base">
                <Link
                  to="/servicos#como-funciona"
                  className="inline-flex items-center min-h-[44px] font-bold text-primary underline underline-offset-4"
                >
                  Como funciona a contratação
                </Link>
              </p>

              {/* 6. CTA */}
              <section className="mb-16 bg-[#443A94] rounded-3xl p-8 md:p-14 text-white text-center shadow-lg" aria-labelledby="cta-orcamento">
                <h2 id="cta-orcamento" className="text-3xl md:text-5xl font-display font-normal mb-4">
                  Vamos dar forma ao seu projeto?
                </h2>
                <p className="font-body text-white/90 text-sm md:text-base max-w-2xl mx-auto mb-8 leading-relaxed font-light">
                  Escolha os itens que fazem sentido agora e peça o seu orçamento.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    to={`/contato?servico=${servico.id}`}
                    className="inline-flex items-center justify-center text-center min-h-[48px] font-body font-bold text-sm md:text-base bg-white text-[#443A94] hover:bg-[#FA7C9C] hover:text-[#1B1B1B] py-3 px-10 rounded-full transition-colors duration-300"
                  >
                    Quero um orçamento
                  </Link>
                  <Link
                    to="/servicos"
                    className="inline-flex items-center justify-center text-center min-h-[48px] font-body font-bold text-sm md:text-base border-2 border-white text-white hover:bg-white/10 py-3 px-10 rounded-full transition-colors duration-300"
                  >
                    Ver outros serviços
                  </Link>
                </div>
                <p className="block w-fit mx-auto font-display font-normal text-3xl md:text-5xl tracking-wide text-white/90 mt-10 origin-center cursor-default transition-transform duration-300 motion-safe:hover:scale-120 motion-reduce:transition-none">Conta com a gente!</p>
              </section>

              {/* 7. Dúvidas do serviço */}
              {faqs.length > 0 && (
                <section aria-labelledby="duvidas-servico" className="max-w-4xl">
                  <h2 id="duvidas-servico" className="text-3xl md:text-4xl font-display font-normal text-primary mb-6">
                    Dúvidas sobre {servico.title}
                  </h2>
                  <FaqList items={faqs} idPrefix={`servico-${servico.id}`} openIds={openIds} onToggle={toggleFaq} />
                  <Link
                    to={`/faq?servico=${servico.faqKey}`}
                    className="inline-flex items-center min-h-[44px] mt-4 font-body font-bold text-sm text-primary underline underline-offset-4"
                  >
                    Ver todas as dúvidas deste tema
                  </Link>
                </section>
              )}
            </div>
          </main>

          <Footer />
        </div>
      </div>
    </>
  );
};

export default ServicoPage;
