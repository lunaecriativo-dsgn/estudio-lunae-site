import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import ThemeToggle from "./components/ThemeToggle";
import Index from "./pages/Index";
import SobrePage from "./pages/SobrePage";
import ManifestoPage from "./pages/ManifestoPage";
import EquipePage from "./pages/EquipePage";
import ServicosPage from "./pages/ServicosPage";
import IdentidadeVisualPage from "./pages/IdentidadeVisualPage";
import InstagramEstrategicoPage from "./pages/InstagramEstrategicoPage";
import PresencaDigitalPage from "./pages/PresencaDigitalPage";
import CaseStudyPage from "./pages/CaseStudyPage";
import ProcessoPage from "./pages/ProcessoPage";
import FAQPage from "./pages/FAQPage";
import ContatoPage from "./pages/ContatoPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/sobre" element={<SobrePage />} />
            <Route path="/sobre/manifesto" element={<ManifestoPage />} />
            <Route path="/sobre/equipe" element={<EquipePage />} />
            <Route path="/servicos" element={<ServicosPage />} />
            <Route path="/servicos/identidade-visual" element={<IdentidadeVisualPage />} />
            <Route path="/servicos/instagram-estrategico" element={<InstagramEstrategicoPage />} />
            <Route path="/servicos/presenca-digital" element={<PresencaDigitalPage />} />
            <Route path="/projetos/:slug" element={<CaseStudyPage />} />
            <Route path="/processo" element={<ProcessoPage />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/contato" element={<ContatoPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <ThemeToggle variant="floating" />
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
