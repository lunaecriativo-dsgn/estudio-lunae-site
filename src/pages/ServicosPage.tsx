import React from "react";
import { Link } from "react-router-dom";
import { ChevronRight, Home, ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { frentes } from "@/data/servicos";

const passos = [
  { n: "1", title: "Conversa", text: "A gente escuta você e entende o seu negócio." },
  { n: "2", title: "Seleção", text: "Escolhemos juntas os serviços que fazem sentido agora." },
  { n: "3", title: "Proposta", text: "Somamos os itens e você escolhe como pagar." },
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

      <div
        className="min-h-screen relative paper-bg"
      >
        <div className="absolute inset-0 bg-background/[0.64] pointer-events-none" />

        <div className="relative z-10">
          <Header />

          <main id="main-content" className="pt-28 md:pt-36 pb-20">
            <div className="max-w-6xl mx-auto px-6">

              {/* Breadcrumbs */}
              <nav aria-label="Breadcrumb" className="mb-10 flex items-center gap-2 text-xs md:text-sm font-body text-muted-foreground">
                <Link to="/" className="hover:text-secondary flex items-center gap-1 transition-colors min-h-[44px] px-1 inline-flex items-center">
                  <Home size={14} />
                  Home
                </Link>
                <ChevronRight size={12} className="text-muted-foreground/50" />
                <span className="text-primary font-medium" aria-current="page">Serviços</span>
              </nav>

              {/* Title Section */}
              <div className="text-center max-w-4xl mx-auto mb-20">
                <span className="font-body font-bold text-secondary tracking-widest uppercase text-xs md:text-sm block mb-3">
                  ✦ SOLUÇÕES ESTRATÉGICAS
                </span>
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-normal text-primary leading-tight mb-6">
                  Nossas Soluções
                </h1>
                <p className="text-lg md:text-xl font-body text-muted-foreground leading-relaxed">
                  Tudo é modular: você leva só o que o seu negócio precisa agora.
                </p>
              </div>

              {/* Orçamento modular (destaque) */}
              <section className="max-w-4xl mx-auto mb-20 grid md:grid-cols-2 gap-6" aria-label="Como o orçamento funciona">
                <div className="p-6 md:p-8 rounded-2xl bg-white border border-[#443A94]/10 shadow-sm text-left">
                  <span className="font-body font-bold text-secondary tracking-widest uppercase text-xs block mb-3">
                    ✦ ORÇAMENTO MODULAR
                  </span>
                  <p className="font-body text-sm md:text-base text-primary font-medium leading-relaxed">
                    Cada item tem preço próprio. Você recebe uma proposta com a soma só dos itens que escolher.
                  </p>
                </div>
                <div className="p-6 md:p-8 rounded-2xl bg-white border border-[#443A94]/10 shadow-sm text-left">
                  <span className="font-body font-bold text-secondary tracking-widest uppercase text-xs block mb-3">
                    ✦ SEM COBRANÇA EM DOBRO
                  </span>
                  <p className="font-body text-sm md:text-base text-primary font-medium leading-relaxed">
                    Se um mesmo serviço aparece em mais de um pacote, ele é cobrado uma vez só.
                  </p>
                </div>
              </section>

              {/* Frentes e serviços */}
              <div className="space-y-20 mb-20">
                {frentes.map((frente) => (
                  <section key={frente.id} aria-labelledby={`frente-${frente.id}`}>
                    <div className="text-center max-w-2xl mx-auto mb-10">
                      <span className="font-body font-bold text-[#443A94] tracking-widest uppercase text-xs block mb-3">
                        ✦ {frente.title}
                      </span>
                      <h2 id={`frente-${frente.id}`} className="text-3xl md:text-4xl font-display font-normal text-primary mb-3">
                        {frente.title}
                      </h2>
                      <p className="font-body text-sm md:text-base text-muted-foreground font-light leading-relaxed">
                        {frente.description}
                      </p>
                    </div>

                    <div className="flex flex-wrap justify-center gap-8 max-w-5xl mx-auto">
                      {frente.servicos.map((sol) => {
                        const Icon = sol.icon;
                        return (
                          <article
                            key={sol.id}
                            className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.34rem)] flex flex-col justify-between p-8 rounded-3xl bg-white border border-[#443A94]/10 hover:border-secondary/30 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 text-left"
                          >
                            <div className="space-y-6">
                              <div className="w-12 h-12 rounded-2xl bg-secondary/5 flex items-center justify-center">
                                <Icon className="w-6 h-6 text-secondary" />
                              </div>

                              <h3 className="text-xl md:text-2xl font-display font-normal text-primary leading-tight">
                                {sol.title}
                              </h3>

                              <p className="font-body text-sm text-muted-foreground leading-relaxed font-light">
                                {sol.short}
                              </p>
                            </div>

                            <div className="pt-8">
                              <Link
                                to={sol.url}
                                className="inline-flex items-center gap-2 font-body font-bold text-sm text-primary hover:text-secondary transition-colors min-h-[44px]"
                                aria-label={`Ver mais detalhes sobre ${sol.title}`}
                              >
                                Ver detalhes do serviço <ArrowRight size={16} />
                              </Link>
                            </div>
                          </article>
                        );
                      })}
                    </div>
                  </section>
                ))}
              </div>

              {/* Como funciona */}
              <section className="max-w-5xl mx-auto mb-20" aria-labelledby="como-funciona">
                <div className="text-center mb-10">
                  <span className="font-body font-bold text-[#443A94] tracking-widest uppercase text-xs block mb-3">
                    ✦ COMO FUNCIONA
                  </span>
                  <h2 id="como-funciona" className="text-3xl md:text-4xl font-display font-normal text-primary">
                    Três passos, sem complicação
                  </h2>
                </div>
                <div className="grid md:grid-cols-3 gap-6">
                  {passos.map((p) => (
                    <div key={p.n} className="p-6 rounded-2xl bg-white/70 border border-[#443A94]/10 text-left">
                      <span className="font-display text-4xl text-secondary leading-none">{p.n}</span>
                      <h3 className="text-xl font-display font-normal text-primary mt-2 mb-1">{p.title}</h3>
                      <p className="font-body text-sm text-muted-foreground font-light leading-relaxed">{p.text}</p>
                    </div>
                  ))}
                </div>
                <p className="font-body text-sm text-muted-foreground font-light text-center max-w-2xl mx-auto mt-8 leading-relaxed">
                  Precisa do mesmo serviço com frequência? O pacote mensal entrega o item que você escolher todo mês,
                  com condição especial.
                </p>
              </section>

              {/* Closing CTA */}
              <section className="bg-[#443A94] rounded-3xl p-8 md:p-16 text-white text-center shadow-lg relative overflow-hidden max-w-4xl mx-auto">
                <div className="absolute top-0 right-0 w-48 h-48 bg-white/5 rounded-full blur-3xl pointer-events-none" />
                <h2 className="text-2xl md:text-3xl font-display font-normal mb-4">
                  Pronta pra ocupar seu espaço de vez?
                </h2>
                <p className="font-body text-white/80 text-sm max-w-2xl mx-auto mb-8 leading-relaxed font-light">
                  Escolha só o que faz sentido agora e monte o seu pacote com a gente.
                </p>
                <a
                  href="https://wa.me/5513991598181?text=Olá! Gostaria de montar um pacote de serviços com a Lunae."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center text-center font-body font-bold text-sm bg-white text-[#443A94] hover:bg-[#FA7C9C] hover:text-white py-4 px-8 rounded-full transition-all duration-300"
                >
                  Montar meu pacote pelo WhatsApp ✦
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

export default ServicosPage;
