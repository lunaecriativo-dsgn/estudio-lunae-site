import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown, HelpCircle, ArrowRight } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "Quanto custa para fazer uma Identidade Visual com a Lunae?",
    answer: "Nossa Identidade Visual tem o valor de R$ 3.200. Esse valor engloba o estudo estratégico de cores, tipografia, criação do logotipo (com até 2 caminhos criativos), elementos gráficos de apoio, manual da marca editável no Canva e de 10 a 15 templates prontos para uso no seu Instagram."
  },
  {
    question: "Qual é o valor do Site Institucional e o que está incluso?",
    answer: "O Site Institucional tem o valor de R$ 3.900. Está incluso todo o projeto de UX/UI com wireframes e protótipo no Figma, desenvolvimento limpo e rápido (React/Tailwind), otimização SEO para você aparecer no Google, suporte na compra do domínio e contratação de hospedagem, e suporte gratuito de pequenos ajustes por 3 meses pós-lançamento."
  },
  {
    question: "Qual é o prazo médio de entrega dos projetos?",
    answer: "A Identidade Visual é entregue em média de 3 a 4 semanas. O desenvolvimento de um Site Institucional leva de 4 a 5 semanas. Para projetos integrados completos, o prazo costuma variar de 6 a 8 semanas, dependendo da velocidade de aprovação das etapas."
  },
  {
    question: "Eu terei autonomia para atualizar meu site depois de pronto?",
    answer: "Sim, total autonomia! Ao final do projeto, gravamos tutoriais didáticos e curtos em vídeo ensinando como alterar textos, atualizar fotos, adicionar novos depoimentos ou gerenciar posts. Você terá liberdade para atualizar seu negócio sem depender de nós no dia a dia."
  },
  {
    question: "Como posso agendar uma conversa com vocês?",
    answer: "Basta clicar em qualquer um de nossos botões de WhatsApp espalhados pelo site! Você falará diretamente conosco, e agendamos uma chamada de vídeo curta e descontraída de 15 minutos (sem compromisso) para nos conhecermos e alinharmos sua ideia."
  }
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 md:py-40 bg-background scroll-mt-20 border-t border-[#443A94]/5">
      <div className="section-container max-w-3xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="mb-20 text-center">
          <span className="font-body font-bold text-secondary tracking-widest uppercase text-xs md:text-sm block mb-4">
            ✦ PERGUNTAS FREQUENTES
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-normal text-primary leading-tight">
            Respostas diretas e transparentes
          </h2>
          <p className="font-body text-base md:text-lg text-muted-foreground mt-4 leading-relaxed font-light">
            Tire suas principais dúvidas comerciais sobre investimentos, escopo de trabalho e prazos sem rodeios.
          </p>
        </div>

        {/* Compact FAQs List */}
        <div className="space-y-4" role="tablist" aria-label="Acordeão de dúvidas frequentes">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? "border-secondary/30 bg-white shadow-sm"
                    : "border-[#443A94]/10 bg-white/40 hover:border-secondary/20 hover:bg-white"
                }`}
              >
                {/* Accordion Trigger */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-6 text-left font-display font-normal text-primary text-base md:text-lg focus:outline-none transition-colors group min-h-[44px] cursor-pointer"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                  id={`faq-trigger-${index}`}
                >
                  <span className="flex items-center gap-3 pr-4 font-display font-normal text-primary text-sm md:text-base">
                    <HelpCircle className="w-5 h-5 text-secondary flex-shrink-0" />
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-secondary flex-shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* Accordion Content */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`faq-answer-${index}`}
                      role="region"
                      aria-labelledby={`faq-trigger-${index}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                    >
                      <div className="p-6 pt-0 border-t border-[#443A94]/5 text-sm md:text-base font-body text-muted-foreground leading-relaxed font-light">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Link to Full FAQ subpage */}
        <div className="mt-12 text-center">
          <Link
            to="/faq"
            className="inline-flex items-center justify-center font-body font-bold text-sm bg-primary text-white hover:bg-secondary py-4 px-10 rounded-full transition-all duration-300 shadow-md hover:-translate-y-0.5 min-h-[44px]"
          >
            Ver todas as perguntas ✦
          </Link>
        </div>

      </div>
    </section>
  );
};

export default FAQSection;
