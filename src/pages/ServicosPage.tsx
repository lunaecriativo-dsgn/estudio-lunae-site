import React from "react";
import { Link } from "react-router-dom";
import { ChevronRight, Home, ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { frentes } from "@/data/servicos";

const etapas = [
  { nome: "Descobrir", texto: "Conversa, briefing e diagnóstico do seu negócio." },
  { nome: "Estruturar", texto: "Estratégia, posicionamento e organização do que será criado." },
  { nome: "Criar", texto: "Desenvolvimento das peças, da identidade, do perfil ou do site." },
  { nome: "Refinar", texto: "Apresentação e rodadas de ajuste com você." },
  { nome: "Publicar", texto: "Arquivos finais, publicação e orientações de uso." },
];

const foraDoEscopo = [
  "Lojas virtuais e sistemas",
  "Tráfego pago e anúncios",
  "Captação presencial de foto e vídeo",
  "Impressão gráfica",
  "Custos de domínio, hospedagem e ferramentas de terceiros",
];

const ServicosPage = () => {
  const servicosSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Nossos Serviços | Soluções Digitais Lunae",
    "description": "Marca, presença e gestão: Identidade Visual, Complementos Ilustrados, Materiais Gráficos, Instagram Estratégico, Presença Digital, Portfólio, Gestão de Redes Sociais e Gestão de Leads.",
    "publisher": {
      "@type": "Organization",
      "name": "Lunae Estúdio Criativo",
      "logo": "https://lunaestudio.com.br/assets/logo-lunae.png"
    }
  };

  return (
    <>
      <SEO
        title="Nossos Serviços | Lunae Estúdio Criativo"
        description="Serviços modulares de marca, presença e gestão: você leva só o que precisa. Identidade visual, Instagram, site, portfólio, ilustrações, materiais gráficos e gestão."
        schema={servicosSchema}
      />

      <div className="min-h-screen relative paper-bg">
        <div className="absolute inset-0 bg-background/[0.64] pointer-events-none" />

        <div className="relative z-10">
          <Header />

          <main id="main-content" className="pt-28 md:pt-36 pb-20">
            <div className="max-w-6xl mx-auto px-6">
              {/* Breadcrumbs */}
              <nav aria-label="Breadcrumb" className="mb-10 flex items-center gap-2 text-xs md:text-sm font-body text-muted-foreground">
                <Link to="/" className="hover:text-primary flex items-center gap-1 transition-colors min-h-[44px] px-1">
                  <Home size={14} aria-hidden="true" />
                  Home
                </Link>
                <ChevronRight size={12} aria-hidden="true" className="text-muted-foreground/50" />
                <span className="text-primary font-medium" aria-current="page">Serviços</span>
              </nav>

              {/* Título */}
              <div className="text-center max-w-4xl mx-auto mb-20">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-normal text-primary leading-tight mb-6">
                  Nossas Soluções
                </h1>
                <p className="text-lg md:text-xl font-body text-muted-foreground leading-relaxed">
                  Você escolhe só o que precisa. Tudo é modular.
                </p>
                <Link
                  to="#como-funciona"
                  className="inline-flex items-center min-h-[44px] mt-2 font-body font-bold text-sm text-primary underline underline-offset-4"
                >
                  Como funciona a contratação
                </Link>
              </div>

              {/* Frentes e serviços */}
              <div className="space-y-20 mb-24">
                {frentes.map((frente) => (
                  <section key={frente.id} aria-labelledby={`frente-${frente.id}`}>
                    <div className="text-center max-w-2xl mx-auto mb-10">
                      <h2 id={`frente-${frente.id}`} className="text-3xl md:text-4xl font-display font-normal text-primary mb-3">
                        {frente.title}
                      </h2>
                      <p className="font-body text-sm md:text-base text-muted-foreground font-light leading-relaxed">
                        {frente.description}
                      </p>
                    </div>

                    <ul className="flex flex-wrap justify-center gap-8 max-w-5xl mx-auto">
                      {frente.servicos.map((sol) => {
                        const Icon = sol.icon;
                        return (
                          <li
                            key={sol.id}
                            className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.34rem)] flex"
                          >
                            <article className="flex flex-col justify-between w-full p-8 rounded-3xl bg-white border border-[#443A94]/15 hover:border-[#443A94]/40 shadow-sm hover:shadow-md transition-all duration-300 motion-safe:hover:-translate-y-1 text-left">
                              <div className="space-y-5">
                                <div className="w-12 h-12 rounded-2xl bg-secondary/10 flex items-center justify-center">
                                  <Icon aria-hidden="true" className="w-6 h-6 text-[#443A94]" />
                                </div>
                                <h3 className="text-xl md:text-2xl font-display font-normal text-primary leading-tight">
                                  {sol.title}
                                </h3>
                                <p className="font-body text-sm text-muted-foreground leading-relaxed font-light">
                                  {sol.short}
                                </p>
                              </div>

                              <div className="pt-6">
                                <Link
                                  to={sol.url}
                                  className="inline-flex items-center gap-2 font-body font-bold text-sm text-primary hover:text-[#443A94] underline underline-offset-4 min-h-[44px]"
                                  aria-label={`Ver detalhes de ${sol.title}`}
                                >
                                  Ver detalhes <ArrowRight size={16} aria-hidden="true" />
                                </Link>
                              </div>
                            </article>
                          </li>
                        );
                      })}
                    </ul>
                  </section>
                ))}
              </div>

              {/* Como funciona: único lugar do site com contrato mensal, "não cobramos duas vezes" e processo */}
              <section id="como-funciona" className="scroll-mt-28 mb-24 max-w-5xl mx-auto" aria-labelledby="regras-titulo">
                <div className="text-center max-w-2xl mx-auto mb-12">
                  <h2 id="regras-titulo" className="text-3xl md:text-4xl font-display font-normal text-primary mb-3">
                    Como funciona a contratação
                  </h2>
                  <p className="font-body text-sm md:text-base text-muted-foreground font-light leading-relaxed">
                    Serviços modulares: você escolhe só o que precisa agora.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-10">
                  <div className="p-6 md:p-8 bg-white rounded-2xl border border-[#443A94]/15 shadow-sm text-left">
                    <h3 className="text-2xl font-display font-normal text-primary mb-2">Contrato mensal</h3>
                    <p className="font-body text-sm md:text-base text-muted-foreground font-light leading-relaxed">
                      Vale para os serviços mensais, como a Gestão de Redes Sociais e o acompanhamento da Gestão de Leads: contrato mínimo de 3 meses, com renovação automática.
                      Para encerrar, avise até 20 dias antes do fim do período.
                    </p>
                  </div>
                  <div className="p-6 md:p-8 bg-white rounded-2xl border border-[#443A94]/15 shadow-sm text-left">
                    <h3 className="text-2xl font-display font-normal text-primary mb-2">Não cobramos duas vezes</h3>
                    <p className="font-body text-sm md:text-base text-muted-foreground font-light leading-relaxed">
                      Se um serviço aparece em mais de um pacote e você já contratou, ele sai da conta.
                    </p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="p-6 md:p-8 bg-white rounded-2xl border border-[#443A94]/15 shadow-sm text-left">
                    <h3 className="text-2xl font-display font-normal text-primary mb-4">Nosso processo, em 5 etapas</h3>
                    <ol className="space-y-3">
                      {etapas.map((e, i) => (
                        <li key={e.nome} className="flex gap-3 font-body text-sm text-muted-foreground font-light leading-relaxed">
                          <span aria-hidden="true" className="font-display text-xl text-[#443A94] leading-none w-5 flex-shrink-0">
                            {i + 1}
                          </span>
                          <span>
                            <strong className="font-semibold text-primary">{e.nome}.</strong> {e.texto}
                          </span>
                        </li>
                      ))}
                    </ol>
                    <Link
                      to="/processo"
                      className="inline-flex items-center min-h-[44px] mt-3 font-body font-bold text-sm text-primary underline underline-offset-4"
                    >
                      Ver o método completo
                    </Link>
                  </div>
                  <div className="p-6 md:p-8 bg-white rounded-2xl border border-[#443A94]/15 shadow-sm text-left">
                    <h3 className="text-2xl font-display font-normal text-primary mb-4">O que fica de fora</h3>
                    <ul className="space-y-2 font-body text-sm text-muted-foreground font-light leading-relaxed list-disc pl-5">
                      {foraDoEscopo.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </section>

              {/* CTA */}
              <section className="bg-[#443A94] rounded-3xl p-8 md:p-16 text-white text-center shadow-lg relative overflow-hidden max-w-4xl mx-auto" aria-labelledby="servicos-cta">
                <h2 id="servicos-cta" className="text-2xl md:text-3xl font-display font-normal mb-4">
                  Pronta pra ocupar seu espaço de vez?
                </h2>
                <p className="font-body text-white/90 text-sm max-w-2xl mx-auto mb-8 leading-relaxed font-light">
                  Escolha só o que faz sentido agora e peça o seu orçamento.
                </p>
                <Link
                  to="/contato"
                  className="inline-flex items-center justify-center text-center min-h-[48px] font-body font-bold text-sm bg-white text-[#443A94] hover:bg-[#FA7C9C] hover:text-[#1B1B1B] py-3 px-8 rounded-full transition-colors duration-300"
                >
                  Quero um orçamento
                </Link>
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

export default ServicosPage;
