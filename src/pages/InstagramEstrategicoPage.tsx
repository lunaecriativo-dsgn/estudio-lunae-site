import React from "react";
import { Link } from "react-router-dom";
import { ChevronRight, Home, Smartphone, AlertCircle, CheckCircle2, ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { SectionHead, ItemCard, ItemGrid, NoteBox, CrossLink, ModularNote } from "@/components/ServiceBlocks";

const InstagramEstrategicoPage = () => {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Instagram Estratégico | Lunae",
    "description": "Estruturação visual, editorial e de conteúdo de perfil do Instagram para atrair clientes qualificados e gerar autoridade imediata.",
    "brand": {
      "@type": "Brand",
      "name": "Lunae"
    }
  };

  return (
    <>
      <SEO 
        title="Instagram Estratégico | Lunae Estúdio Criativo" 
        description="Transforme seu feed em uma vitrine profissional de alta conversão. Estruturamos biografia, destaques e templates sob medida para redes sociais."
        schema={serviceSchema}
      />

      <div 
        className="min-h-screen relative paper-bg"
      >
        <div className="absolute inset-0 bg-background/[0.64] pointer-events-none" />
        
        <div className="relative z-10">
          <Header />
          
          <main id="main-content" className="pt-28 md:pt-36 pb-20 text-left">
            <div className="max-w-6xl mx-auto px-6">
              
              {/* Breadcrumbs */}
              <nav aria-label="Breadcrumb" className="mb-10 flex items-center gap-2 text-xs md:text-sm font-body text-muted-foreground">
                <Link to="/" className="hover:text-secondary flex items-center gap-1 transition-colors min-h-[44px] px-1 inline-flex items-center">
                  <Home size={14} />
                  Home
                </Link>
                <ChevronRight size={12} className="text-muted-foreground/50" />
                <Link to="/servicos" className="hover:text-secondary transition-colors px-1">
                  Serviços
                </Link>
                <ChevronRight size={12} className="text-muted-foreground/50" />
                <span className="text-primary font-medium" aria-current="page">Instagram Estratégico</span>
              </nav>

              {/* Hero Section */}
              <section className="mb-20 max-w-4xl">
                <span className="font-body font-bold text-secondary tracking-widest uppercase text-xs block mb-3">
                  📱 REDES SOCIAIS DE IMPACTO
                </span>
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-normal text-primary leading-tight mb-6">
                  Instagram Estratégico
                </h1>
                <p className="text-lg md:text-xl font-body text-muted-foreground leading-relaxed font-light">
                  Seu Instagram costuma ser o primeiro contato com um cliente. Faça essa primeira impressão valer.
                </p>
              </section>

              {/* Problem Section */}
              <section className="grid md:grid-cols-2 gap-12 items-center mb-20 bg-white/40 backdrop-blur-sm p-8 md:p-12 rounded-3xl border border-red-500/10">
                <div className="space-y-4">
                  <span className="inline-flex items-center gap-2 text-red-500 font-body text-xs font-bold uppercase tracking-widest">
                    <AlertCircle size={14} /> O Problema
                  </span>
                  <h2 className="text-2xl md:text-3xl font-display font-normal text-primary leading-tight">
                    Postar muito e não atrair cliente nenhum?
                  </h2>
                  <p className="font-body text-sm md:text-base text-muted-foreground leading-relaxed font-light">
                    Horas produzindo conteúdo que só gera curtida de conhecido, nunca um novo cliente.
                  </p>
                </div>
                <div className="space-y-3 font-body text-sm text-muted-foreground font-light">
                  <p className="font-medium text-primary">Reconhece algum desses?</p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 mt-0.5">✕</span>
                      <span>Bio confusa, ninguém entende o que você vende.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 mt-0.5">✕</span>
                      <span>Destaques bagunçados, sem foco.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 mt-0.5">✕</span>
                      <span>Templates genéricos que não parecem seus.</span>
                    </li>
                  </ul>
                </div>
              </section>

              {/* Objective Section */}
              <section className="mb-20 p-8 md:p-12 rounded-3xl bg-[#443A94]/5 border border-[#443A94]/10">
                <span className="font-body font-bold text-secondary tracking-widest uppercase text-xs block mb-3">
                  🎯 OBJETIVO DO SERVIÇO
                </span>
                <h2 className="text-2xl md:text-3xl font-display font-normal text-primary mb-4">
                  Presença marcante, rotina facilitada
                </h2>
                <p className="font-body text-base md:text-lg text-muted-foreground leading-relaxed font-light">
                  Um Instagram que transmite profissionalismo e torna sua produção de conteúdo simples de manter.
                </p>
              </section>

              {/* Entregas */}
              <section className="mb-20">
                <SectionHead
                  eyebrow="✦ O QUE VOCÊ PODE ESCOLHER"
                  title="Seis itens pro seu perfil funcionar"
                  text="Cada item pode ser contratado separadamente. Você leva o pacote completo ou só o que precisa agora."
                />
                <ItemGrid>
                  <ItemCard title="Diagnóstico do perfil" text="Avaliação do perfil atual e das oportunidades de melhoria." />
                  <ItemCard title="Bio estratégica" text="Biografia clara e posicionamento pra mostrar quem você é nos primeiros segundos." />
                  <ItemCard title="Capas para destaques" text="Capas alinhadas à identidade visual da sua marca." />
                  <ItemCard title="Organização dos destaques" text="Estrutura dos destaques e categorias, como “Sobre mim”, “Serviços” e “Depoimentos”." />
                  <ItemCard title="Calendário de conteúdo (30 dias)" text="12 conteúdos planejados no mês, com temas, legendas e chamadas para ação." />
                  <ItemCard title="Templates" text="10 a 15 templates editáveis pra produzir seus conteúdos." />
                </ItemGrid>
              </section>

              {/* Artes avulsas */}
              <section className="mb-12">
                <SectionHead
                  eyebrow="✦ ARTES AVULSAS"
                  title="Posta sozinha, mas quer as peças prontas?"
                  text="Criamos as artes dentro da sua identidade e você publica."
                />
                <div className="grid md:grid-cols-2 gap-8 max-w-3xl">
                  <ItemCard badge="Novo" title="Arte avulsa" text="1 post, story ou banner dentro da sua identidade." />
                  <ItemCard badge="Novo" title="Pacote de 10 artes" text="10 peças entre posts, stories e banners." />
                </div>
              </section>

              <NoteBox title="Precisa de identidade visual?">
                Se precisar de identidade visual e elementos gráficos, a gente soma esses itens de forma modular, cada
                serviço do pacote com o seu valor.
              </NoteBox>

              <NoteBox title="Identidade Visual e Instagram juntos">
                Contratando os dois, os templates entram uma vez só. Quer o mesmo serviço todo mês? O pacote mensal
                entrega um planejamento novo a cada mês, com condição especial.
              </NoteBox>

              <CrossLink
                to="/servicos/gestao-de-redes-sociais"
                title="Quer que a gente também publique?"
                text="Na Gestão de Redes Sociais, planejamos, criamos e publicamos seus conteúdos todo mês."
                cta="Ver Gestão de Redes Sociais"
              />

              <ModularNote />

              {/* Centralized FAQ Redirect Section */}
              <section className="mb-20 text-center max-w-2xl mx-auto px-6 py-8 rounded-3xl bg-[#443A94]/5 border border-[#443A94]/10">
                <h3 className="text-2xl font-display font-normal text-primary mb-3">
                  Ainda tem alguma dúvida?
                </h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed font-light mb-6">
                  Reunimos as perguntas mais comuns numa página só.
                </p>
                <Link
                  to="/faq#instagram-estrategico"
                  className="inline-flex items-center gap-2 font-body font-bold text-sm text-secondary hover:text-[#FA7C9C] transition-all py-2.5 px-6 rounded-full border border-secondary/20 hover:border-[#FA7C9C]/30 bg-white/80 shadow-sm min-h-[44px]"
                >
                  Ver perguntas sobre este serviço ✦
                </Link>
              </section>

              {/* Conversion CTA */}
              <section className="bg-[#443A94] rounded-3xl p-8 md:p-16 text-white text-center shadow-lg relative overflow-hidden">
                <h2 className="text-3xl md:text-5xl font-display font-normal mb-6">
                  Dê voz à sua marca no Instagram
                </h2>
                <p className="font-body text-white/80 text-sm md:text-base max-w-2xl mx-auto mb-10 leading-relaxed font-light">
                  Vamos marcar uma conversa rápida e planejar seu perfil?
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="https://wa.me/5513991598181?text=Olá! Gostaria de falar sobre a estruturação estratégica do meu Instagram com a Lunae."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center font-body font-bold text-sm md:text-base bg-[#FA7C9C] text-white hover:bg-white hover:text-primary py-4 px-10 rounded-full transition-all duration-300 shadow-md"
                  >
                    Estruturar Meu Instagram via WhatsApp ✦
                  </a>
                  <Link
                    to="/servicos"
                    className="inline-flex items-center justify-center font-body font-bold text-sm md:text-base border border-white/20 text-white hover:bg-white/10 py-4 px-10 rounded-full transition-all duration-300"
                  >
                    Ver Outros Serviços
                  </Link>
                </div>
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

export default InstagramEstrategicoPage;
