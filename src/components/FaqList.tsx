import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, Hash } from "lucide-react";
import type { Faq } from "@/data/faq";

interface FaqListProps {
  items: Faq[];
  idPrefix: string;
  openIds: Record<string, boolean>;
  onToggle: (id: string) => void;
  highlightedId?: string | null;
  showCopyLink?: boolean;
}

// Accordion acessível: botão dentro do título, aria-expanded e aria-controls.
// Usado pela página de Dúvidas e pelas páginas de serviço.
export const FaqList = ({ items, idPrefix, openIds, onToggle, highlightedId, showCopyLink }: FaqListProps) => {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const copyLink = (id: string) => {
    const url = window.location.origin + "/faq#" + id;
    navigator.clipboard
      .writeText(url)
      .then(() => {
        setCopiedId(id);
        setTimeout(() => setCopiedId(null), 2000);
      })
      .catch(() => undefined);
  };

  return (
    <ul className="space-y-4">
      {items.map((faq) => {
        const isOpen = !!openIds[faq.id];
        const panelId = `${idPrefix}-resposta-${faq.id}`;
        const triggerId = `${idPrefix}-pergunta-${faq.id}`;
        return (
          <li
            key={faq.id}
            id={faq.id}
            className={`scroll-mt-28 rounded-2xl border bg-white shadow-sm overflow-hidden transition-colors ${
              highlightedId === faq.id ? "border-[#443A94]" : "border-[#443A94]/15"
            }`}
          >
            <h3 className="flex items-stretch font-display font-normal text-primary text-base md:text-lg">
              <button
                type="button"
                id={triggerId}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => onToggle(faq.id)}
                className="flex-grow flex items-center justify-between gap-4 text-left p-5 md:p-6 min-h-[56px] font-display font-normal text-primary text-base md:text-lg"
              >
                <span>{faq.pergunta}</span>
                <ChevronDown
                  aria-hidden="true"
                  className={`w-5 h-5 flex-shrink-0 text-[#443A94] transition-transform duration-300 motion-reduce:transition-none ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              {showCopyLink && (
                <button
                  type="button"
                  onClick={() => copyLink(faq.id)}
                  className="relative px-3 min-w-[44px] min-h-[44px] flex items-center justify-center text-muted-foreground hover:text-primary"
                  aria-label={`Copiar link direto para a pergunta: ${faq.pergunta}`}
                >
                  <Hash aria-hidden="true" className="w-4 h-4" />
                  {copiedId === faq.id && (
                    <span role="status" className="absolute -top-2 right-2 bg-[#443A94] text-white text-[11px] px-2 py-1 rounded">
                      Copiado!
                    </span>
                  )}
                </button>
              )}
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={triggerId}
              hidden={!isOpen}
              className="px-5 md:px-6 pb-6 border-t border-[#443A94]/10"
            >
              <p className="pt-4 font-body text-sm md:text-base text-muted-foreground leading-relaxed">{faq.resposta}</p>
              {faq.link && (
                <Link
                  to={faq.link.to}
                  className="inline-flex items-center min-h-[44px] mt-2 font-body font-bold text-sm text-primary underline underline-offset-4 hover:text-[#443A94]"
                >
                  {faq.link.rotulo}
                </Link>
              )}
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default FaqList;
