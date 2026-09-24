import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

interface Project {
  id: string;
  slug: string;
  name: string;
  category: string;
  image: string;
  description: string;
}

const projects: Project[] = [
  {
    id: "onyxpersonal",
    slug: "onyx-personal-trainer",
    name: "Onyx Personal Trainer",
    category: "Branding & Presença Digital",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=600&fit=crop",
    description: "Criação de identidade visual clara, estruturação estratégica de Instagram e desenvolvimento de site para personal trainer."
  },
  {
    id: "camilaramos",
    slug: "camila-ramos",
    name: "Camila Ramos",
    category: "Identidade Visual & Redes Sociais",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&h=600&fit=crop",
    description: "Reposicionamento de marca humana e acolhedora com ativos estratégicos para clínica de psicologia infantil."
  },
  {
    id: "marilocacoes",
    slug: "mari-locacoes",
    name: "Mari Locações",
    category: "Social Media & Identidade Visual",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop",
    description: "Gestão completa de marketing, design, copywriting e social media para especialista em locação de imóveis em Santos/SP."
  }
];

const ProjectsSection = () => {
  return (
    <section id="projetos" className="py-24 md:py-40 bg-background scroll-mt-20 border-t border-[#443A94]/5">
      <div className="section-container max-w-6xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="mb-20 text-left md:text-center md:max-w-3xl md:mx-auto">
          <span className="font-body font-bold text-secondary tracking-widest uppercase text-xs md:text-sm block mb-4">
            ✦ CASOS DE DESTAQUE
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-normal text-primary leading-tight">
            Nossos cases de sucesso
          </h2>
          <p className="font-body text-base md:text-lg text-muted-foreground mt-4 leading-relaxed font-light">
            Marcas femininas que uniram design premium e usabilidade para se tornarem irresistíveis.
          </p>
        </div>

        {/* 3-Card Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 max-w-5xl mx-auto">
          {projects.map((project) => (
            <article 
              key={project.id}
              className="group bg-white rounded-2xl border border-[#443A94]/10 overflow-hidden hover:border-secondary/25 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between text-left"
            >
              <div>
                <div className="relative overflow-hidden aspect-[4/3] bg-[#443A94]/5">
                  <img 
                    src={project.image} 
                    alt={`Capa do projeto ${project.name}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="p-6 space-y-3">
                  <span className="font-body text-[11px] font-bold text-secondary tracking-wider block uppercase">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-display font-normal text-primary leading-tight group-hover:text-secondary transition-colors">
                    {project.name}
                  </h3>
                  <p className="font-body text-xs md:text-sm text-muted-foreground leading-relaxed font-light">
                    {project.description}
                  </p>
                </div>
              </div>

              <div className="px-6 pb-6 pt-2">
                <Link
                  to={`/projetos/${project.slug}`}
                  className="inline-flex items-center gap-2 font-body font-bold text-xs text-primary group-hover:text-secondary transition-colors min-h-[44px]"
                >
                  Explorar Case completo <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <Link
            to="/projetos"
            className="inline-flex items-center justify-center font-body font-bold text-sm bg-primary text-white hover:bg-secondary py-4 px-10 rounded-full transition-all duration-300 shadow-md hover:-translate-y-0.5 min-h-[44px]"
          >
            Ver todos os projetos ✦
          </Link>
        </div>

      </div>
    </section>
  );
};

export default ProjectsSection;
