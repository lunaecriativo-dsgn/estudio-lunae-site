import React from "react";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";

interface ThemeToggleProps {
  variant?: "header" | "mobile" | "footer" | "floating";
  className?: string;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({ variant = "header", className = "" }) => {
  const { theme, setTheme, toggleTheme, isDark } = useTheme();

  if (variant === "header") {
    return (
      <div 
        className={`inline-flex items-center p-1 bg-black/20 dark:bg-white/10 rounded-full border border-white/20 backdrop-blur-sm transition-all duration-300 ${className}`}
        role="group"
        aria-label="Opções de tema: claro ou escuro"
      >
        <button
          type="button"
          onClick={() => setTheme("light")}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-body font-semibold transition-all duration-200 min-h-[36px] ${
            !isDark
              ? "bg-[#FBE929] text-[#1E1E1E] shadow-sm scale-100"
              : "text-white/80 hover:text-white hover:bg-white/10"
          }`}
          aria-pressed={!isDark}
          aria-label="Ativar Modo Claro"
          title="Mudar para Modo Claro"
        >
          <Sun size={14} className={!isDark ? "text-[#1E1E1E]" : "text-white/80"} />
          <span className="hidden lg:inline">Claro</span>
        </button>

        <button
          type="button"
          onClick={() => setTheme("dark")}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-body font-semibold transition-all duration-200 min-h-[36px] ${
            isDark
              ? "bg-[#FA7C9C] text-white shadow-sm scale-100"
              : "text-white/80 hover:text-white hover:bg-white/10"
          }`}
          aria-pressed={isDark}
          aria-label="Ativar Modo Escuro"
          title="Mudar para Modo Escuro"
        >
          <Moon size={14} className={isDark ? "text-white" : "text-white/80"} />
          <span className="hidden lg:inline">Escuro</span>
        </button>
      </div>
    );
  }

  if (variant === "mobile") {
    return (
      <div className={`p-4 rounded-2xl bg-black/15 dark:bg-white/5 border border-white/10 my-2 ${className}`}>
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs font-body font-semibold uppercase tracking-wider text-white/90">
            Aparência do Site
          </span>
          <span className="text-[11px] font-body text-[#FBE929] font-medium">
            {isDark ? "🌙 Modo Escuro Ativo" : "☀️ Modo Claro Ativo"}
          </span>
        </div>

        <div className="grid grid-cols-2 gap-2">
          <button
            type="button"
            onClick={() => setTheme("light")}
            className={`flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-body font-semibold text-xs transition-all min-h-[44px] ${
              !isDark
                ? "bg-[#FBE929] text-[#1E1E1E] shadow-md font-bold"
                : "bg-white/10 text-white/80 hover:bg-white/20"
            }`}
            aria-pressed={!isDark}
            aria-label="Escolher Modo Claro"
          >
            <Sun size={16} />
            <span>Modo Claro</span>
          </button>

          <button
            type="button"
            onClick={() => setTheme("dark")}
            className={`flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-body font-semibold text-xs transition-all min-h-[44px] ${
              isDark
                ? "bg-[#FA7C9C] text-white shadow-md font-bold"
                : "bg-white/10 text-white/80 hover:bg-white/20"
            }`}
            aria-pressed={isDark}
            aria-label="Escolher Modo Escuro"
          >
            <Moon size={16} />
            <span>Modo Escuro</span>
          </button>
        </div>
      </div>
    );
  }

  if (variant === "footer") {
    return (
      <div className={`flex flex-col sm:flex-row sm:items-center gap-3 ${className}`}>
        <span className="text-xs font-body text-primary-foreground/70">
          Tema:
        </span>
        <div 
          className="inline-flex items-center p-1 bg-black/20 dark:bg-white/10 rounded-full border border-white/15"
          role="group"
          aria-label="Escolher tema claro ou escuro"
        >
          <button
            type="button"
            onClick={() => setTheme("light")}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-body font-semibold transition-all min-h-[36px] ${
              !isDark
                ? "bg-[#FBE929] text-[#1E1E1E] shadow-sm"
                : "text-white/80 hover:text-white"
            }`}
            aria-pressed={!isDark}
            aria-label="Ativar tema claro"
          >
            <Sun size={13} />
            <span>Claro</span>
          </button>

          <button
            type="button"
            onClick={() => setTheme("dark")}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-body font-semibold transition-all min-h-[36px] ${
              isDark
                ? "bg-[#FA7C9C] text-white shadow-sm"
                : "text-white/80 hover:text-white"
            }`}
            aria-pressed={isDark}
            aria-label="Ativar tema escuro"
          >
            <Moon size={13} />
            <span>Escuro</span>
          </button>
        </div>
      </div>
    );
  }

  // Floating variant
  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={`fixed bottom-6 left-6 z-40 flex items-center gap-2 px-3.5 py-2.5 rounded-full shadow-xl transition-all duration-300 font-body text-xs font-bold border backdrop-blur-md hover:scale-105 min-h-[44px] ${
        isDark
          ? "bg-[#181724]/90 text-white border-white/20 hover:bg-[#201F2F]"
          : "bg-white/95 text-[#1E1E1E] border-[#443A94]/20 hover:bg-white shadow-[#443A94]/15"
      } ${className}`}
      aria-label={isDark ? "Mudar para Modo Claro" : "Mudar para Modo Escuro"}
      title={isDark ? "Alternar para Modo Claro" : "Alternar para Modo Escuro"}
    >
      <div className={`w-6 h-6 rounded-full flex items-center justify-center ${isDark ? "bg-[#FA7C9C] text-white" : "bg-[#FBE929] text-[#1E1E1E]"}`}>
        {isDark ? <Moon size={13} /> : <Sun size={13} />}
      </div>
      <span className="pr-1">{isDark ? "Modo Escuro" : "Modo Claro"}</span>
    </button>
  );
};

export default ThemeToggle;
