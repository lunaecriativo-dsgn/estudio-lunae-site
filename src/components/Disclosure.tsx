import React, { useId, useState } from "react";
import { ChevronDown } from "lucide-react";

interface DisclosureProps {
  titulo: string;
  rotulo?: string; // texto pequeno acima do título
  children: React.ReactNode;
}

// Bloco recolhível "Ver o que está incluso" (botão com aria-expanded e aria-controls)
export const Disclosure: React.FC<DisclosureProps> = ({ titulo, rotulo = "Ver o que está incluso", children }) => {
  const [aberto, setAberto] = useState(false);
  const id = useId();
  return (
    <div className="rounded-2xl border border-[#443A94]/15 bg-white/70">
      <h3 className="font-display font-normal text-primary">
        <button
          type="button"
          aria-expanded={aberto}
          aria-controls={`${id}-painel`}
          onClick={() => setAberto((v) => !v)}
          className="w-full flex items-center justify-between gap-4 text-left p-5 md:p-6 min-h-[56px]"
        >
          <span>
            <span className="block font-body text-xs font-bold uppercase tracking-widest text-[#443A94] mb-1">
              {rotulo}
            </span>
            <span className="text-xl">{titulo}</span>
          </span>
          <ChevronDown
            aria-hidden="true"
            className={`w-5 h-5 flex-shrink-0 text-[#443A94] transition-transform duration-300 motion-reduce:transition-none ${
              aberto ? "rotate-180" : ""
            }`}
          />
        </button>
      </h3>
      <div id={`${id}-painel`} role="region" aria-label={titulo} hidden={!aberto} className="px-4 md:px-6 pb-6">
        {children}
      </div>
    </div>
  );
};

export default Disclosure;
