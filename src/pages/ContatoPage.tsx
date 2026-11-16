import React, { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { ChevronRight, Home, Send, MessageCircle, Mail, MapPin, CheckCircle2 } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { frentes, servicoPorId } from "@/data/servicos";

type Tipo = "orcamento" | "indecisa" | "sugestao";
type Erros = Partial<Record<"servicos" | "identidade" | "nome" | "email" | "mensagem", string>>;

const WEB3FORMS_ACCESS_KEY = "3442021e-af3f-4741-ad1a-4dc00a833ffd";
const GESTAO_REDES = "gestao-de-redes-sociais";

const TIPOS: { id: Tipo; label: string; tag: string }[] = [
  { id: "orcamento", label: "Quero um orçamento", tag: "[Orçamento]" },
  { id: "indecisa", label: "Ainda não sei qual serviço escolher", tag: "[Indecisa]" },
  { id: "sugestao", label: "Quero dar uma sugestão", tag: "[Sugestão]" },
];

const IDENTIDADE_OPCOES = [
  { id: "sim", label: "Sim" },
  { id: "nao", label: "Não" },
  { id: "nao-sei", label: "Não sei" },
];

const EMAIL_VALIDO = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

const inputClasse = (erro?: string) =>
  `w-full font-body text-sm px-4 py-3 min-h-[48px] bg-white border rounded-xl text-primary placeholder:text-muted-foreground ${
    erro ? "border-red-700" : "border-[#443A94]/40"
  }`;

const MensagemErro = ({ id, texto }: { id: string; texto?: string }) =>
  texto ? (
    <p id={id} className="font-body text-sm text-red-700 mt-1">
      {texto}
    </p>
  ) : null;

const ContatoPage = () => {
  const [searchParams] = useSearchParams();

  // Pré-seleciona o serviço que vier da URL (?servico=identidade-visual)
  const [servicos, setServicos] = useState<string[]>(() =>
    (searchParams.get("servico") ?? "")
      .split(",")
      .map((s) => s.trim())
      .filter((s) => !!servicoPorId(s))
  );
  const [tipo, setTipo] = useState<Tipo>("orcamento");
  const [identidade, setIdentidade] = useState("");
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [erros, setErros] = useState<Erros>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [anuncio, setAnuncio] = useState("");
  const confirmacaoRef = React.useRef<HTMLDivElement>(null);

  const mostraServicos = tipo === "orcamento";
  const mostraIdentidade = mostraServicos && servicos.includes(GESTAO_REDES);
  const sugestao = tipo === "sugestao";

  // Valida só os campos que estão visíveis no tipo de contato atual
  const validar = (v = { servicos, identidade, nome, email, mensagem }): Erros => {
    const e: Erros = {};
    if (tipo === "orcamento" && v.servicos.length === 0) e.servicos = "Marque pelo menos um serviço.";
    if (tipo === "orcamento" && v.servicos.includes(GESTAO_REDES) && !v.identidade)
      e.identidade = "Escolha uma opção: sim, não ou não sei.";
    if (!sugestao && !v.nome.trim()) e.nome = "Informe seu nome.";
    if (!sugestao && !v.email.trim()) e.email = "Informe um e-mail válido, como nome@email.com.";
    else if (v.email.trim() && !EMAIL_VALIDO.test(v.email.trim()))
      e.email = "Informe um e-mail válido, como nome@email.com.";
    if (!v.mensagem.trim())
      e.mensagem = sugestao
        ? "Escreva a sua sugestão."
        : tipo === "indecisa"
        ? "Conte um pouco sobre o seu negócio e o que você precisa agora."
        : "Conte um pouco sobre a sua marca e o que você precisa.";
    return e;
  };

  const validarCampo = (campo: keyof Erros) => {
    const todos = validar();
    setErros((prev) => ({ ...prev, [campo]: todos[campo] }));
  };

  const trocarTipo = (novo: Tipo) => {
    setTipo(novo);
    setErros({});
    setErrorMessage("");
    setAnuncio(
      novo === "orcamento"
        ? "Lista de serviços exibida."
        : novo === "indecisa"
        ? "Lista de serviços ocultada. Conte um pouco sobre o seu negócio."
        : "Campos de serviços ocultados. Escreva a sua sugestão."
    );
  };

  const alternarServico = (id: string) => {
    const proximos = servicos.includes(id) ? servicos.filter((s) => s !== id) : [...servicos, id];
    setServicos(proximos);
    if (id === GESTAO_REDES) {
      setAnuncio(
        proximos.includes(id) ? "Nova pergunta exibida: você já tem identidade visual?" : "Pergunta sobre identidade visual ocultada."
      );
      if (!proximos.includes(id)) setIdentidade("");
    }
    if (erros.servicos && proximos.length > 0) setErros((prev) => ({ ...prev, servicos: undefined }));
  };

  const focarPrimeiroErro = (e: Erros) => {
    const ordem: [keyof Erros, string][] = [
      ["servicos", "servico-primeiro"],
      ["identidade", "identidade-sim"],
      ["nome", "name-input"],
      ["email", "email-input"],
      ["mensagem", "message-input"],
    ];
    const primeiro = ordem.find(([campo]) => e[campo]);
    if (primeiro) document.getElementById(primeiro[1])?.focus();
  };

  const handleSubmit = async (ev: React.FormEvent) => {
    ev.preventDefault();
    setErrorMessage("");

    const e = validar();
    setErros(e);
    if (Object.keys(e).length > 0) {
      focarPrimeiroErro(e);
      return;
    }

    setIsSubmitting(true);
    const tag = TIPOS.find((t) => t.id === tipo)!.tag;
    const titulos = mostraServicos ? servicos.map((id) => servicoPorId(id)?.title).filter(Boolean) : [];

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: `${tag} Novo contato pelo site: ${nome.trim() || "sem nome"}${titulos.length ? " | " + titulos.join(", ") : ""}`,
          from_name: nome.trim() || "Visitante do site",
          name: nome.trim(),
          ...(email.trim() ? { email: email.trim() } : {}),
          whatsapp: sugestao ? "" : whatsapp,
          tipo_de_contato: tag,
          servicos_de_interesse: titulos.length ? titulos.join(", ") : "Não se aplica",
          ...(mostraIdentidade
            ? { tem_identidade_visual: IDENTIDADE_OPCOES.find((o) => o.id === identidade)?.label ?? "" }
            : {}),
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
        setServicos([]);
        setIdentidade("");
        setTimeout(() => confirmacaoRef.current?.focus(), 50);
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

  const rotuloNome = sugestao ? "Seu nome (opcional)" : "Seu nome (obrigatório)";
  const rotuloEmail = sugestao ? "E-mail (opcional)" : "E-mail (obrigatório)";
  const rotuloMensagem = sugestao
    ? "Sua sugestão (obrigatório)"
    : tipo === "indecisa"
    ? "Conte um pouco sobre o seu negócio e o que você precisa agora (obrigatório)"
    : "Mensagem (obrigatório)";

  return (
    <>
      <SEO
        title="Fale Conosco | Contato Lunae"
        description="Fale com a Luiza e a Nayla sobre a sua marca. Peça um orçamento, tire dúvidas ou envie uma sugestão."
        schema={contatoSchema}
      />

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
                <span className="text-primary font-medium" aria-current="page">Contato</span>
              </nav>

              {/* Título */}
              <div className="max-w-3xl mb-16">
                <span className="font-body font-bold text-[#443A94] tracking-widest uppercase text-xs block mb-3">
                  ✦ VAMOS DAR O PRÓXIMO PASSO?
                </span>
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-normal text-primary leading-tight mb-6">
                  Fale Conosco
                </h1>
                <p className="text-lg md:text-xl font-body text-muted-foreground leading-relaxed font-light">
                  Preencha o formulário ou fale direto com a gente pelas redes.
                </p>
              </div>

              <div className="grid lg:grid-cols-12 gap-12 items-start max-w-5xl mx-auto mb-20">
                {/* Formulário */}
                <section className="lg:col-span-7 bg-white/80 backdrop-blur-sm p-6 sm:p-8 md:p-10 rounded-3xl border border-[#443A94]/15 shadow-sm" aria-labelledby="form-titulo">
                  <h2 id="form-titulo" className="text-2xl font-display font-normal text-primary mb-6">Envie uma mensagem</h2>

                  {isSuccess ? (
                    <div
                      ref={confirmacaoRef}
                      tabIndex={-1}
                      role="status"
                      className="p-6 bg-[#443A94]/5 border border-[#443A94]/15 rounded-2xl space-y-4 text-center"
                    >
                      <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center mx-auto">
                        <CheckCircle2 aria-hidden="true" className="w-6 h-6 text-[#443A94]" />
                      </div>
                      <h3 className="text-xl font-display font-normal text-primary">Recebemos sua mensagem!</h3>
                      <p className="font-body text-sm text-muted-foreground leading-relaxed">
                        Respondemos em até 24 horas úteis. A gente lê tudo com atenção e responde pelo e-mail ou
                        WhatsApp que você informou.
                      </p>
                      <button
                        type="button"
                        onClick={() => setIsSuccess(false)}
                        className="font-body font-bold text-sm text-primary underline underline-offset-4 min-h-[44px]"
                      >
                        Enviar outra mensagem
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} noValidate className="space-y-8">
                      {/* Anuncia mudanças nos campos para leitores de tela */}
                      <p className="sr-only" aria-live="polite">{anuncio}</p>

                      {errorMessage && (
                        <div role="alert" className="p-4 bg-red-50 border border-red-300 text-red-800 text-sm rounded-xl font-body">
                          {errorMessage}
                        </div>
                      )}

                      {/* Primeira pergunta */}
                      <fieldset>
                        <legend className="font-display font-normal text-xl text-primary mb-3">Como podemos ajudar?</legend>
                        <div className="space-y-1">
                          {TIPOS.map((t) => (
                            <label key={t.id} className="flex items-center gap-3 min-h-[44px] cursor-pointer font-body text-sm text-primary">
                              <input
                                type="radio"
                                name="tipo"
                                value={t.id}
                                checked={tipo === t.id}
                                onChange={() => trocarTipo(t.id)}
                                className="h-5 w-5 accent-[#443A94]"
                              />
                              {t.label}
                            </label>
                          ))}
                        </div>
                      </fieldset>

                      {/* Serviços (só em orçamento) */}
                      {mostraServicos && (
                        <fieldset aria-describedby={erros.servicos ? "erro-servicos" : undefined}>
                          <legend className="font-display font-normal text-xl text-primary mb-1">
                            Quais serviços te interessam?
                          </legend>
                          <p className="font-body text-sm text-muted-foreground mb-4">
                            Obrigatório. Pode marcar mais de um.
                          </p>
                          <div className="space-y-5">
                            {frentes.map((frente, fi) => (
                              <fieldset key={frente.id}>
                                <legend className="font-body text-xs font-bold uppercase tracking-widest text-[#443A94] mb-1">
                                  {frente.title}
                                </legend>
                                <div className="grid sm:grid-cols-2 gap-x-4">
                                  {frente.servicos.map((s, si) => (
                                    <label key={s.id} className="flex items-center gap-3 min-h-[44px] cursor-pointer font-body text-sm text-primary">
                                      <input
                                        id={fi === 0 && si === 0 ? "servico-primeiro" : undefined}
                                        type="checkbox"
                                        name="servicos"
                                        value={s.id}
                                        checked={servicos.includes(s.id)}
                                        onChange={() => alternarServico(s.id)}
                                        className="h-5 w-5 accent-[#443A94]"
                                      />
                                      {s.title}
                                    </label>
                                  ))}
                                </div>
                              </fieldset>
                            ))}
                          </div>
                          <MensagemErro id="erro-servicos" texto={erros.servicos} />
                        </fieldset>
                      )}

                      {/* Identidade visual (só se marcar Gestão de Redes Sociais) */}
                      {mostraIdentidade && (
                        <fieldset aria-describedby={erros.identidade ? "erro-identidade" : undefined}>
                          <legend className="font-display font-normal text-xl text-primary mb-2">
                            Você já tem identidade visual? <span className="font-body text-sm font-light text-muted-foreground">(obrigatório)</span>
                          </legend>
                          <div className="flex flex-wrap gap-x-6">
                            {IDENTIDADE_OPCOES.map((o) => (
                              <label key={o.id} className="flex items-center gap-3 min-h-[44px] cursor-pointer font-body text-sm text-primary">
                                <input
                                  id={`identidade-${o.id}`}
                                  type="radio"
                                  name="identidade"
                                  value={o.id}
                                  checked={identidade === o.id}
                                  onChange={() => {
                                    setIdentidade(o.id);
                                    setErros((prev) => ({ ...prev, identidade: undefined }));
                                  }}
                                  className="h-5 w-5 accent-[#443A94]"
                                />
                                {o.label}
                              </label>
                            ))}
                          </div>
                          <MensagemErro id="erro-identidade" texto={erros.identidade} />
                        </fieldset>
                      )}

                      {/* Campos comuns */}
                      <div className="space-y-6">
                        <div className="space-y-1.5">
                          <label htmlFor="name-input" className="font-body text-sm font-semibold text-primary block">
                            {rotuloNome}
                          </label>
                          <input
                            id="name-input"
                            type="text"
                            autoComplete="name"
                            value={nome}
                            onChange={(e) => setNome(e.target.value)}
                            onBlur={() => validarCampo("nome")}
                            aria-invalid={!!erros.nome}
                            aria-describedby={erros.nome ? "erro-nome" : undefined}
                            placeholder="Como gostaria de ser chamada?"
                            className={inputClasse(erros.nome)}
                          />
                          <MensagemErro id="erro-nome" texto={erros.nome} />
                        </div>

                        <div className={sugestao ? "" : "grid md:grid-cols-2 gap-6"}>
                          <div className="space-y-1.5">
                            <label htmlFor="email-input" className="font-body text-sm font-semibold text-primary block">
                              {rotuloEmail}
                            </label>
                            <input
                              id="email-input"
                              type="email"
                              autoComplete="email"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                              onBlur={() => validarCampo("email")}
                              aria-invalid={!!erros.email}
                              aria-describedby={erros.email ? "erro-email" : undefined}
                              placeholder="nome@email.com"
                              className={inputClasse(erros.email)}
                            />
                            <MensagemErro id="erro-email" texto={erros.email} />
                          </div>

                          {!sugestao && (
                            <div className="space-y-1.5">
                              <label htmlFor="phone-input" className="font-body text-sm font-semibold text-primary block">
                                WhatsApp (opcional)
                              </label>
                              <input
                                id="phone-input"
                                type="tel"
                                autoComplete="tel"
                                value={whatsapp}
                                onChange={(e) => setWhatsapp(e.target.value)}
                                placeholder="(00) 00000-0000"
                                className={inputClasse()}
                              />
                            </div>
                          )}
                        </div>

                        <div className="space-y-1.5">
                          <label htmlFor="message-input" className="font-body text-sm font-semibold text-primary block">
                            {rotuloMensagem}
                          </label>
                          {sugestao && (
                            <p id="ajuda-sugestao" className="font-body text-sm text-muted-foreground">
                              Pode ser sobre nossos serviços, o site ou algo que você gostaria de ver por aqui.
                            </p>
                          )}
                          <textarea
                            id="message-input"
                            rows={5}
                            value={mensagem}
                            onChange={(e) => setMensagem(e.target.value)}
                            onBlur={() => validarCampo("mensagem")}
                            aria-invalid={!!erros.mensagem}
                            aria-describedby={[sugestao ? "ajuda-sugestao" : "", erros.mensagem ? "erro-mensagem" : ""].filter(Boolean).join(" ") || undefined}
                            className={`${inputClasse(erros.mensagem)} resize-y`}
                          />
                          <MensagemErro id="erro-mensagem" texto={erros.mensagem} />
                        </div>
                      </div>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        aria-busy={isSubmitting}
                        className="w-full inline-flex items-center justify-center gap-2 font-body font-bold text-sm bg-[#443A94] text-white hover:bg-[#2F2770] disabled:opacity-70 min-h-[52px] py-4 px-8 rounded-full transition-colors duration-300"
                      >
                        {isSubmitting ? "Enviando..." : "Enviar mensagem"} <Send aria-hidden="true" size={14} />
                      </button>
                    </form>
                  )}
                </section>

                {/* Informações */}
                <aside className="lg:col-span-5 space-y-8" aria-label="Outras formas de contato">
                  <div className="p-8 bg-[#443A94] text-white rounded-3xl shadow-md text-left space-y-4">
                    <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                      <MessageCircle aria-hidden="true" className="w-6 h-6 text-[#FBE929]" />
                    </div>
                    <h2 className="text-xl font-display font-normal">Atendimento Imediato</h2>
                    <p className="font-body text-sm text-white/90 leading-relaxed font-light">
                      Prefere falar direto com a gente? Agende um bate-papo de 15 minutos.
                    </p>
                    <a
                      href="https://wa.me/5513991598181?text=Olá! Visitei seu site de contato e gostaria de iniciar uma conversa."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center min-h-[48px] font-body font-bold text-sm bg-white text-[#443A94] hover:bg-[#FA7C9C] hover:text-[#1B1B1B] py-3 px-6 rounded-full transition-colors duration-300"
                    >
                      Conversar no WhatsApp ✦
                      <span className="sr-only"> (abre em nova aba)</span>
                    </a>
                  </div>

                  <div className="p-8 bg-white/80 backdrop-blur-sm rounded-3xl border border-[#443A94]/15 space-y-6">
                    <h2 className="text-lg font-display font-normal text-primary">Informações de Contato</h2>

                    <div className="space-y-4 font-body text-sm text-muted-foreground font-light">
                      <div className="flex items-start gap-3">
                        <Mail aria-hidden="true" className="w-5 h-5 text-[#443A94] flex-shrink-0" />
                        <div>
                          <p className="font-semibold text-primary text-xs uppercase tracking-wider">E-mail</p>
                          <a href="mailto:comercial@lunaecriativo.com.br" className="inline-flex items-center min-h-[44px] underline underline-offset-4 hover:text-primary transition-colors">
                            comercial@lunaecriativo.com.br
                          </a>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <MapPin aria-hidden="true" className="w-5 h-5 text-[#443A94] flex-shrink-0" />
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
