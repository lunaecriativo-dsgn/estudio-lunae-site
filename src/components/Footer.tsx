import React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { ArrowUp, Instagram, Linkedin, MessageCircle } from "lucide-react";
import logoLunae from "@/assets/logos/logo-ver-bege-2026.png";
import ThemeToggle from "@/components/ThemeToggle";

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    // If we have a hash link
    if (href.includes("#")) {
      const [path, hash] = href.split("#");
      // If we are already on that page, smooth scroll directly
      if (location.pathname === path || (path === "/" && location.pathname === "")) {
        e.preventDefault();
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
          navigate(href, { replace: true });
        }
      }
    } else {
      if (location.pathname === href) {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }
  };

  return (
    <footer className="bg-[#443A94] dark:bg-primary text-primary-foreground py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-10 items-start mb-12 text-left">
          {/* Logo */}
          <div className="space-y-2">
            <Link
              to="/" 
              onClick={(e) => handleNavClick(e, "/")}
              className="inline-block focus:outline-none focus:ring-2 focus:ring-accent rounded-lg"
              aria-label="Lunae Estúdio Criativo - Ir para a Home"
            >
              <img
                src={logoLunae}
                alt="Lunae Studio logo"
                className="block h-10 w-auto"
              />
            </Link>
            <p className="w-fit font-display font-normal text-2xl tracking-wide text-primary-foreground origin-left cursor-default transition-transform duration-300 motion-safe:hover:scale-110 motion-reduce:transition-none">
              Estúdio Criativo
            </p>
          </div>

          {/* Quick Links */}
          <nav aria-label="Links rápidos">
            <h3 className="font-display font-normal text-lg md:text-xl mb-4 text-white">Links Rápidos</h3>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-3 max-w-xs">
              <li>
                <Link
                  to="/sobre"
                  onClick={(e) => handleNavClick(e, "/sobre")}
                  className="font-body text-primary-foreground/80 hover:text-secondary transition-colors focus:outline-none focus:ring-2 focus:ring-accent rounded px-1 py-1"
                >
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link
                  to="/servicos"
                  onClick={(e) => handleNavClick(e, "/servicos")}
                  className="font-body text-primary-foreground/80 hover:text-secondary transition-colors focus:outline-none focus:ring-2 focus:ring-accent rounded px-1 py-1"
                >
                  Serviços
                </Link>
              </li>
              <li>
                <Link
                  to="/processo"
                  onClick={(e) => handleNavClick(e, "/processo")}
                  className="font-body text-primary-foreground/80 hover:text-secondary transition-colors focus:outline-none focus:ring-2 focus:ring-accent rounded px-1 py-1"
                >
                  Método
                </Link>
              </li>
              <li>
                <Link
                  to="/faq"
                  onClick={(e) => handleNavClick(e, "/faq")}
                  className="font-body text-primary-foreground/80 hover:text-secondary transition-colors focus:outline-none focus:ring-2 focus:ring-accent rounded px-1 py-1"
                >
                  Dúvidas
                </Link>
              </li>
              <li>
                <Link
                  to="/contato"
                  onClick={(e) => handleNavClick(e, "/contato")}
                  className="font-body text-primary-foreground/80 hover:text-secondary transition-colors focus:outline-none focus:ring-2 focus:ring-accent rounded px-1 py-1"
                >
                  Contato
                </Link>
              </li>
            </ul>
          </nav>

          {/* Social & Contact */}
          <div>
            <h3 className="font-display font-normal text-lg md:text-xl mb-4 text-white">Redes Sociais</h3>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/lunae.estudiocriativo/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-secondary hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-accent"
                aria-label="Visitar nosso Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://www.linkedin.com/company/lunae-estudiocriativo/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-secondary hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-accent"
                aria-label="Visitar nosso LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://wa.me/5513991598181"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-secondary hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-accent"
                aria-label="Falar conosco no WhatsApp"
              >
                <MessageCircle size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-primary-foreground/20 pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="font-body text-sm text-primary-foreground/60 text-center md:text-left order-3 md:order-1">
            © {new Date().getFullYear()} Lunae Estúdio Criativo. Todos os direitos reservados.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-6 order-1 md:order-2">
            <ThemeToggle variant="footer" />

            {/* Back to Top */}
            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 font-body text-sm text-primary-foreground/80 hover:text-secondary transition-colors focus:outline-none focus:ring-2 focus:ring-accent rounded-lg px-3 py-2 min-h-[44px]"
              aria-label="Voltar ao topo da página"
            >
              <ArrowUp size={16} />
              Voltar ao topo
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
