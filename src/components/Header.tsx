import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import logoLunae from "@/assets/logos/logo-ver-bege-2026.png";
import ThemeToggle from "@/components/ThemeToggle";

interface SubItem {
  label: string;
  href: string;
}

interface NavItem {
  label: string;
  href: string;
  subItems?: SubItem[];
}

const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { 
    label: "Sobre", 
    href: "/sobre",
    subItems: [
      { label: "Manifesto", href: "/sobre/manifesto" },
      { label: "Equipe", href: "/sobre/equipe" }
    ]
  },
  { 
    label: "Serviços", 
    href: "/servicos",
    subItems: [
      { label: "Identidade Visual", href: "/servicos/identidade-visual" },
      { label: "Instagram Estratégico", href: "/servicos/instagram-estrategico" },
      { label: "Presença Digital", href: "/servicos/presenca-digital" }
    ]
  },
  { label: "Processo", href: "/processo" },
  { label: "FAQ", href: "/faq" },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<Record<string, boolean>>({});
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll logic on route change
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        const timer = setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 120);
        return () => clearTimeout(timer);
      }
    } else {
      const timer = setTimeout(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }, 50);
      return () => clearTimeout(timer);
    }
  }, [location.pathname, location.hash]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    setIsMobileMenuOpen(false);
    
    if (href.includes("#")) {
      const [path, hash] = href.split("#");
      
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

  const toggleMobileExpand = (label: string) => {
    setMobileExpanded(prev => ({
      ...prev,
      [label]: !prev[label]
    }));
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        isScrolled
          ? "bg-primary/95 backdrop-blur-md border-primary-foreground/10 shadow-sm py-2"
          : "bg-primary/90 backdrop-blur-sm border-primary-foreground/5 py-3"
      }`}
    >
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-secondary text-white px-4 py-2 rounded-lg font-bold z-50"
      >
        Pular para o conteúdo
      </a>

      <div className="max-w-7xl mx-auto px-6">
        <nav className="flex items-center justify-between" aria-label="Navegação principal">
          <Link
            to="/"
            onClick={(e) => handleNavClick(e, "/")}
            className="focus:outline-none focus:ring-2 focus:ring-accent rounded-lg flex-shrink-0 min-h-[44px] flex items-center"
            aria-label="Lunae Estúdio Criativo - Ir para a Home"
          >
            <img
              src={logoLunae}
              alt="Lunae Studio logo"
              className="h-8 md:h-10 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-4 lg:gap-6">
            {navItems.map((item) => {
              const hasSub = !!item.subItems;
              const isActive = 
                location.pathname === item.href || 
                (item.href !== "/" && location.pathname.startsWith(item.href) && !item.href.includes("#"));

              return (
                <li 
                  key={item.label}
                  className="relative group py-2"
                  onMouseEnter={() => hasSub && setActiveDropdown(item.label)}
                  onMouseLeave={() => hasSub && setActiveDropdown(null)}
                >
                  <Link
                    to={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={`font-body font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-accent rounded-lg px-3 py-2 min-h-[44px] inline-flex items-center gap-1 text-[15px] ${
                      isActive 
                        ? "text-[#FBE929] font-semibold underline underline-offset-4" 
                        : "text-primary-foreground/90 hover:text-[#FA7C9C]"
                    }`}
                    aria-current={isActive ? "page" : undefined}
                    aria-haspopup={hasSub ? "true" : undefined}
                    aria-expanded={hasSub && activeDropdown === item.label ? "true" : "false"}
                  >
                    {item.label}
                    {hasSub && <ChevronDown size={14} className="opacity-70 group-hover:rotate-180 transition-transform duration-200" />}
                  </Link>

                  {/* Dropdown Box */}
                  {hasSub && item.subItems && (
                    <div 
                      className={`absolute top-full left-0 mt-1 w-56 bg-white dark:bg-[#181724] rounded-xl shadow-lg border border-[#443A94]/10 dark:border-white/10 py-2 transition-all duration-300 origin-top-left ${
                        activeDropdown === item.label 
                          ? "opacity-100 scale-100 translate-y-0 visible" 
                          : "opacity-0 scale-95 -translate-y-2 invisible"
                      }`}
                    >
                      <ul className="flex flex-col">
                        {item.subItems.map((sub) => (
                          <li key={sub.label}>
                            <Link
                              to={sub.href}
                              onClick={(e) => {
                                handleNavClick(e, sub.href);
                                setActiveDropdown(null);
                              }}
                              className="block px-4 py-2.5 font-body text-sm text-[#1E1E1E] dark:text-white/90 hover:text-secondary dark:hover:text-secondary hover:bg-[#FA7C9C]/5 dark:hover:bg-white/5 transition-colors text-left"
                            >
                              {sub.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </li>
              );
            })}
            
            {/* Theme Toggle (Desktop) */}
            <li>
              <ThemeToggle variant="header" />
            </li>

            <li>
              <Link
                to="/contato"
                className="bg-secondary text-white font-body font-semibold px-6 py-3 rounded-full transition-all duration-300 ease-out hover:scale-105 text-[15px] focus:outline-none focus:ring-2 focus:ring-accent min-h-[44px] inline-flex items-center justify-center text-center hover:bg-white hover:text-primary"
              >
                Vamos criar juntas
              </Link>
            </li>
          </ul>

          {/* Mobile Right Controls */}
          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle variant="header" />

            {/* Mobile Menu Button */}
            <button
              className="p-2 text-primary-foreground hover:text-accent focus:outline-none focus:ring-2 focus:ring-accent rounded-lg min-w-[44px] min-h-[44px] inline-flex items-center justify-center"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </nav>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 animate-fade-in-up border-t border-primary-foreground/15 pt-4 text-left" aria-label="Menu mobile">
            {/* Mobile Theme Selection Panel */}
            <ThemeToggle variant="mobile" />

            <ul className="flex flex-col gap-2">
              {navItems.map((item) => {
                const hasSub = !!item.subItems;
                const isExpanded = !!mobileExpanded[item.label];
                const isActive = location.pathname === item.href;

                return (
                  <li key={item.label} className="border-b border-primary-foreground/5 pb-1">
                    {hasSub ? (
                      <div>
                        <button
                          onClick={() => toggleMobileExpand(item.label)}
                          className="w-full flex items-center justify-between font-body font-medium transition-colors duration-200 py-3 px-2 min-h-[44px] text-primary-foreground hover:text-secondary focus:outline-none focus:ring-2 focus:ring-accent rounded-lg"
                        >
                          <span className={isActive ? "text-[#FBE929] font-bold" : ""}>{item.label}</span>
                          <ChevronDown size={18} className={`transition-transform duration-200 ${isExpanded ? "rotate-180 text-secondary" : ""}`} />
                        </button>
                        
                        {isExpanded && item.subItems && (
                          <ul className="pl-6 bg-black/10 rounded-lg py-1 mt-1 flex flex-col gap-1">
                            {/* Link to index page too */}
                            <li>
                              <Link
                                to={item.href}
                                onClick={(e) => handleNavClick(e, item.href)}
                                className="block font-body text-xs text-primary-foreground/80 hover:text-secondary py-2.5 px-2 min-h-[44px]"
                              >
                                Ver todos em {item.label} ✦
                              </Link>
                            </li>
                            {item.subItems.map((sub) => (
                              <li key={sub.label}>
                                <Link
                                  to={sub.href}
                                  onClick={(e) => handleNavClick(e, sub.href)}
                                  className="block font-body text-xs text-primary-foreground/85 hover:text-secondary py-2.5 px-2 min-h-[44px]"
                                >
                                  {sub.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    ) : (
                      <Link
                        to={item.href}
                        onClick={(e) => handleNavClick(e, item.href)}
                        className={`block font-body font-medium transition-colors duration-200 py-3 px-2 min-h-[44px] focus:outline-none focus:ring-2 focus:ring-accent rounded-lg ${
                          isActive 
                            ? "text-[#FBE929] font-bold bg-primary-foreground/5" 
                            : "text-primary-foreground/85 hover:text-secondary"
                        }`}
                        aria-current={isActive ? "page" : undefined}
                      >
                        {item.label}
                      </Link>
                    )}
                  </li>
                );
              })}
              <li>
                <Link
                  to="/contato"
                  onClick={(e) => handleNavClick(e, "/contato")}
                  className="bg-secondary text-white font-body font-semibold px-6 py-3 rounded-full transition-all duration-300 ease-out hover:scale-105 text-sm inline-flex items-center mt-4 focus:outline-none focus:ring-2 focus:ring-accent min-h-[44px] w-full justify-center text-center"
                >
                  Vamos criar juntas
                </Link>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
