import React from "react";
import { Link } from "react-router-dom";
import { ChevronRight, Home, Sparkles, AlertCircle, CheckCircle2, ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { SectionHead, ItemCard, ItemGrid, NoteBox, CrossLink, ModularNote } from "@/components/ServiceBlocks";

const IdentidadeVisualPage = () => {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Identidade Visual | Lunae",
    "description": "Criação de marcas completas: estudo de cores e tipografia, logotipo autoral, elementos gráficos, manual da marca e templates para Instagram.",
    "brand": {
      "@type": "Brand",
      "name": "Lunae"
    }
  };

  return (
    <>
      <SEO 
        title="Identidade Visual | Lunae Estúdio Criativo" 
        description="Uma marca com a sua cara. Criamos cores, tipografia, logo, elementos gráficos, manual e templates pra você usar tudo com segurança."
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
                <span className="text-primary font-medium" aria-current="page">Identidade Visual</span>
              </nav>

              {/* Hero Section */}
              <section className="mb-20 max-w-4xl">
                <span className="font-body font-bold text-secondary tracking-widest uppercase text-xs block mb-3">
                  🎨 SOLUÇÃO INTEGRADA DE MARCA
                </span>
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-normal text-primary leading-tight mb-6">
                  Identidade Visual
                </h1>
                <p className="text-lg md:text-xl font-body text-muted-foreground leading-relaxed font-light">
                  Seu talento merece ser reconhecido à primeira vista. Criamos logotipo, cores e grafismos autorais para o mundo ver o seu valor real.
                </p>
              </section>

              {/* Problem Section */}
              <section className="grid md:grid-cols-2 gap-12 items-center mb-20 bg-white/40 backdrop-blur-sm p-8 md:p-12 rounded-3xl border border-red-500/10">
                <div className="space-y-4">
                  <span className="inline-flex items-center gap-2 text-red-500 font-body text-xs font-bold uppercase tracking-widest">
                    <AlertCircle size={14} /> O Problema
                  </span>
                  <h2 className="text-2xl md:text-3xl font-display font-normal text-primary leading-tight">
                    Sua marca representa o nível do seu trabalho?
                  </h2>
                  <p className="font-body text-sm md:text-base text-muted-foreground leading-relaxed font-light">
                    Uma marca amadora esconde um trabalho de altíssimo nível. Isso custa caro.
                  </p>
                </div>
                <div className="space-y-3 font-body text-sm text-muted-foreground font-light">
                  <p className="font-medium text-primary">Isso te soa familiar?</p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 mt-0.5">✕</span>
                      <span>Dificuldade em cobrar o preço justo.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 mt-0.5">✕</span>
                      <span>Feed e site sem nada em comum.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 mt-0.5">✕</span>
                      <span>Vergonha de divulgar seu próprio perfil.</span>
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
                  Reconhecimento e valorização profissional
                </h2>
                <p className="font-body text-base md:text-lg text-muted-foreground leading-relaxed font-light">
                  Uma identidade visual que faz sua marca ser lembrada e leva você a sério, antes mesmo de você falar uma palavra.
                </p>
              </section>

              {/* Entregas */}
              <section className="mb-20">
                <SectionHead
                  eyebrow="✦ O QUE VOCÊ PODE ESCOLHER"
                  title="Cinco itens, uma marca só"
                  text="Cada item pode ser contratado separadamente. Você leva o pacote completo ou só o que precisa agora."
                />
                <ItemGrid>
                  <ItemCard title="Estudo de cores e tipografia" text="Pesquisa visual e definição da paleta de cores e das fontes da marca." />
                  <ItemCard title="Criação de logotipo" text="Até 2 propostas de logo e refinamento da versão escolhida." />
                  <ItemCard title="Elementos gráficos de apoio" text="Ícones, padrões, formas e elementos que completam a identidade." />
                  <ItemCard title="Manual da marca" text="Guia editável com aplicações, cores, tipografia e exemplos de uso." />
                  <ItemCard title="Templates para Instagram" text="10 a 15 templates editáveis para feed e stories." />
                </ItemGrid>
              </section>

              {/* Extensões da marca */}
              <section className="mb-12">
                <SectionHead
                  eyebrow="✦ EXTENSÕES DA MARCA"
                  title="Já tem identidade e precisa de mais peças?"
                  text="Criamos novas peças dentro da identidade que você já tem."
                />
                <div className="grid md:grid-cols-2 gap-8 max-w-3xl">
                  <ItemCard badge="Novo" title="Logo para submarca" text="Logo derivado da marca principal, para linha de produto, unidade ou evento." />
                  <ItemCard badge="Novo" title="Templates adicionais" text="Pacote de 5 templates novos, dentro da identidade existente." />
                </div>
              </section>

              <NoteBox title="Revisões e pacote mensal">
                Até 2 rodadas de ajuste na identidade e 2 nos templates. Precisa de novos templates ou logos de submarca
                todo mês? O pacote mensal entrega o item que você escolher, com condição especial.
              </NoteBox>

              <CrossLink
                to="/servicos/complementos-ilustrados"
                title="Quer ilustrações na sua identidade?"
                text="Persona, personagem da marca e ícones personalizados combinam com a Identidade Visual."
                cta="Ver Complementos Ilustrados"
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
                  to="/faq#identidade-visual"
                  className="inline-flex items-center gap-2 font-body font-bold text-sm text-secondary hover:text-[#FA7C9C] transition-all py-2.5 px-6 rounded-full border border-secondary/20 hover:border-[#FA7C9C]/30 bg-white/80 shadow-sm min-h-[44px]"
                >
                  Ver perguntas sobre este serviço ✦
                </Link>
              </section>

              {/* Conversion CTA */}
              <section className="bg-[#443A94] rounded-3xl p-8 md:p-16 text-white text-center shadow-lg relative overflow-hidden">
                <h2 className="text-3xl md:text-5xl font-display font-normal mb-6">
                  Dignifique a história da sua marca
                </h2>
                <p className="font-body text-white/80 text-sm md:text-base max-w-2xl mx-auto mb-10 leading-relaxed font-light">
                  Vamos dar forma à história que sua marca já tem pra contar? Agende uma avaliação gratuita.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="https://wa.me/5513991598181?text=Olá! Gostaria de agendar uma consultoria rápida sobre Identidade Visual."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center font-body font-bold text-sm md:text-base bg-[#FA7C9C] text-white hover:bg-white hover:text-primary py-4 px-10 rounded-full transition-all duration-300 shadow-md"
                  >
                    Agendar Consultoria pelo WhatsApp ✦
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

export default IdentidadeVisualPage;
