import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import type { ReactNode } from "react";
import { ThemeProvider } from "./context/ThemeContext";
import ThemeToggle from "./components/ThemeToggle";
import Index from "./pages/Index";
import SobrePage from "./pages/SobrePage";
import ManifestoPage from "./pages/ManifestoPage";
import EquipePage from "./pages/EquipePage";
import ServicosPage from "./pages/ServicosPage";
import ServicoPage from "./pages/ServicoPage";
import CaseStudyPage from "./pages/CaseStudyPage";
import ProcessoPage from "./pages/ProcessoPage";
import FAQPage from "./pages/FAQPage";
import ContatoPage from "./pages/ContatoPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

/** Rotas e provedores. O roteador vem de fora: BrowserRouter no navegador, StaticRouter na pré-renderização. */
export const AppShell = ({ children }: { children?: ReactNode }) => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/sobre" element={<SobrePage />} />
          <Route path="/sobre/manifesto" element={<ManifestoPage />} />
          <Route path="/sobre/equipe" element={<EquipePage />} />
          <Route path="/servicos" element={<ServicosPage />} />
          <Route path="/servicos/:slug" element={<ServicoPage />} />
          <Route path="/projetos/:slug" element={<CaseStudyPage />} />
          <Route path="/processo" element={<ProcessoPage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/contato" element={<ContatoPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <ThemeToggle variant="floating" />
        {children}
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

const App = () => (
  <BrowserRouter>
    <AppShell />
  </BrowserRouter>
);

export default App;
