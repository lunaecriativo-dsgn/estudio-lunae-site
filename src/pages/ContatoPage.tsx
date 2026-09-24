import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronRight, Home, Send, MessageCircle, Mail, MapPin, Sparkles, CheckCircle2 } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import paperTexture from "@/assets/paper-texture.jpg";

const ContatoPage = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [servico, setServico] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const WEB3FORMS_ACCESS_KEY = "3442021e-af3f-4741-ad1a-4dc00a833ffd";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    if (!nome || !email || !mensagem) {
      setErrorMessage("Por favor, preencha todos os campos obrigatórios (*).");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: `Novo contato pelo site: ${nome}`,
          from_name: nome,
          name: nome,
          email,
          whatsapp,
          servico_de_interesse: servico || "Não informado",
          mensagem,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setIsSuccess(true);
        setNome("");
        setEmail("");
        setWhatsapp("");
        setMensagem("");
        setServico("");
      } else {
        setErrorMessage("Não foi possível enviar sua mensagem. Tente novamente ou fale pelo WhatsApp.");
      }
    } catch {
      setErrorMessage("Não foi possível enviar sua mensagem. Verifique sua conexão e tente novamente.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const contatoSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Fale Conosco | Contato Lunae",
    "description": "Entre em contato com o Estúdio Lunae. Envie uma mensagem pelo formulário, e-mail ou inicie um atendimento imediato no WhatsApp.",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+55-13-99159-8181",
      "contactType": "customer service",
      "areaServed": "BR",
      "availableLanguage": "Portuguese"
    }
  };

  return (
    <>
      <SEO 
        title="Fale Conosco | Contato Lunae" 
        description="Fale com a Luiza e a Nayla sobre a sua marca. Agende um bate-papo sem compromisso ou envie sua mensagem no formulário."
        schema={contatoSchema}
      />

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
          
          <main id="main-content" className="pt-28 md:pt-36 pb-20 text-left">
            <div className="max-w-6xl mx-auto px-6">
              
              {/* Breadcrumbs */}
              <nav aria-label="Breadcrumb" className="mb-10 flex items-center gap-2 text-xs md:text-sm font-body text-muted-foreground">
                <Link to="/" className="hover:text-secondary flex items-center gap-1 transition-colors min-h-[44px] px-1 inline-flex items-center">
                  <Home size={14} />
                  Home
                </Link>
                <ChevronRight size={12} className="text-muted-foreground/50" />
                <span className="text-primary font-medium" aria-current="page">Contato</span>
              </nav>

              {/* Title Section */}
              <div className="max-w-3xl mb-16">
                <span className="font-body font-bold text-secondary tracking-widest uppercase text-xs block mb-3">
                  ✦ VAMOS DAR O PRÓXIMO PASSO?
                </span>
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-normal text-primary leading-tight mb-6">
                  Fale Conosco
                </h1>
                <p className="text-lg md:text-xl font-body text-muted-foreground leading-relaxed font-light">
                  Preencha o formulário ou fale direto com a gente pelas redes.
                </p>
              </div>

              {/* Form & Info Grid */}
              <div className="grid lg:grid-cols-12 gap-12 items-start max-w-5xl mx-auto mb-20">
                
                {/* Form wrapper */}
                <section className="lg:col-span-7 bg-white/70 backdrop-blur-sm p-8 md:p-10 rounded-3xl border border-[#443A94]/10 shadow-sm">
                  <h2 className="text-2xl font-display font-normal text-primary mb-6">Envie uma mensagem</h2>
                  
                  {isSuccess ? (
                    <div className="p-6 bg-[#443A94]/5 border border-[#443A94]/10 rounded-2xl space-y-4 text-center">
                      <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center mx-auto">
                        <CheckCircle2 className="w-6 h-6 text-secondary" />
                      </div>
                      <h3 className="text-xl font-display font-normal text-primary">Sua mensagem foi entregue!</h3>
                      <p className="font-body text-sm text-muted-foreground leading-relaxed font-light">
                        Obrigada pelo contato! Respondemos em até 24h úteis.
                      </p>
                      <button
                        onClick={() => setIsSuccess(false)}
                        className="font-body font-semibold text-xs text-secondary hover:underline"
                      >
                        Enviar outro formulário
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      {errorMessage && (
                        <div className="p-4 bg-red-50 border border-red-200 text-red-600 text-sm rounded-xl font-body">
                          {errorMessage}
                        </div>
                      )}
                      <div className="space-y-1.5">
                        <label htmlFor="name-input" className="font-body text-xs font-semibold text-primary block">
                          Seu Nome Completo *
                        </label>
                        <input
                          id="name-input"
                          type="text"
                          required
                          value={nome}
                          onChange={(e) => setNome(e.target.value)}
                          placeholder="Como gostaria de ser chamada?"
                          className="w-full font-body text-sm px-4 py-3 bg-white border border-[#443A94]/15 rounded-xl focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary"
                        />
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-1.5">
                          <label htmlFor="email-input" className="font-body text-xs font-semibold text-primary block">
                            E-mail Profissional *
                          </label>
                          <input
                            id="email-input"
                            type="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="seu@email.com"
                            className="w-full font-body text-sm px-4 py-3 bg-white border border-[#443A94]/15 rounded-xl focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary"
                          />
                        </div>

                        <div className="space-y-1.5">
                          <label htmlFor="phone-input" className="font-body text-xs font-semibold text-primary block">
                            WhatsApp / Celular
                          </label>
                          <input
                            id="phone-input"
                            type="tel"
                            value={whatsapp}
                            onChange={(e) => setWhatsapp(e.target.value)}
                            placeholder="(00) 00000-0000"
                            className="w-full font-body text-sm px-4 py-3 bg-white border border-[#443A94]/15 rounded-xl focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary"
                          />
                        </div>
                      </div>

                      <div className="space-y-1.5">
                        <label htmlFor="service-select" className="font-body text-xs font-semibold text-primary block">
                          Serviço de Maior Interesse
                        </label>
                        <select
                          id="service-select"
                          value={servico}
                          onChange={(e) => setServico(e.target.value)}
                          className="w-full font-body text-sm px-4 py-3 bg-white border border-[#443A94]/15 rounded-xl focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary"
                        >
                          <option value="">Selecione um serviço...</option>
                          <option value="Identidade Visual">Identidade Visual Premium</option>
                          <option value="Instagram Estratégico">Instagram Estratégico</option>
                          <option value="Sites Institucionais">Sites Institucionais</option>
                          <option value="Landing Pages">Landing Pages de Conversão</option>
                          <option value="UX/UI Design">UX/UI Design e Figma</option>
                          <option value="Combo Completo">Combo Completo Lunae</option>
                        </select>
                      </div>

                      <div className="space-y-1.5">
                        <label htmlFor="message-input" className="font-body text-xs font-semibold text-primary block">
                          Conte um pouco sobre sua marca *
                        </label>
                        <textarea
                          id="message-input"
                          required
                          rows={4}
                          value={mensagem}
                          onChange={(e) => setMensagem(e.target.value)}
                          placeholder="Conte sobre seu negócio e o que você busca..."
                          className="w-full font-body text-sm px-4 py-3 bg-white border border-[#443A94]/15 rounded-xl focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary"
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full inline-flex items-center justify-center gap-2 font-body font-bold text-sm bg-primary text-white hover:bg-secondary py-4 px-8 rounded-full transition-all duration-300 disabled:opacity-55 shadow-md"
                      >
                        {isSubmitting ? "Enviando..." : "Enviar Mensagem"} <Send size={14} />
                      </button>
                    </form>
                  )}
                </section>

                {/* Sidebar Info */}
                <aside className="lg:col-span-5 space-y-8">
                  {/* WhatsApp Box */}
                  <div className="p-8 bg-[#443A94] text-white rounded-3xl shadow-md text-left space-y-4">
                    <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                      <MessageCircle className="w-6 h-6 text-[#FBE929]" />
                    </div>
                    <h3 className="text-xl font-display font-normal">Atendimento Imediato</h3>
                    <p className="font-body text-xs md:text-sm text-white/80 leading-relaxed font-light">
                      Prefere falar direto com a gente? Agende um bate-papo de 15 minutos.
                    </p>
                    <a
                      href="https://wa.me/5513991598181?text=Olá! Visitei seu site de contato e gostaria de iniciar uma conversa."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center font-body font-bold text-xs bg-[#FA7C9C] text-white hover:bg-white hover:text-primary py-3.5 px-6 rounded-full transition-all duration-300"
                    >
                      Conversar no WhatsApp ✦
                    </a>
                  </div>

                  {/* Institutional contacts */}
                  <div className="p-8 bg-white/70 backdrop-blur-sm rounded-3xl border border-[#443A94]/10 space-y-6">
                    <h3 className="text-lg font-display font-normal text-primary">Informações de Contato</h3>
                    
                    <div className="space-y-4 font-body text-sm text-muted-foreground font-light">
                      <div className="flex items-start gap-3">
                        <Mail className="w-5 h-5 text-secondary flex-shrink-0" />
                        <div>
                          <p className="font-semibold text-primary text-xs uppercase tracking-wider">E-mail</p>
                          <a href="mailto:comercial@lunaecriativo.com.br" className="hover:text-secondary hover:underline transition-colors">
                            comercial@lunaecriativo.com.br
                          </a>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <MapPin className="w-5 h-5 text-secondary flex-shrink-0" />
                        <div>
                          <p className="font-semibold text-primary text-xs uppercase tracking-wider">Localização</p>
                          <p>Santos-SP</p>
                          <p>Atendimento Remoto</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </aside>

              </div>

            </div>
          </main>
          
          <Footer />
        </div>
      </div>
    </>
  );
};

export default ContatoPage;
