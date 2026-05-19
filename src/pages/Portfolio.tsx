import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ExternalLink } from "lucide-react";
import { projects, typeFilters, categoryFilters } from "@/src/data/projects";

export default function Portfolio() {
  const [typeFilter, setTypeFilter] = useState<string>("Todos");
  const [categoryFilter, setCategoryFilter] = useState<string>("Todas categorias");

  const filteredProjects = projects.filter((p) => {
    const matchesType = typeFilter === "Todos" || p.type === typeFilter;
    const matchesCategory = categoryFilter === "Todas categorias" || p.category === categoryFilter;
    return matchesType && matchesCategory;
  });

  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-6">
        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-16"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-[2px] bg-brand-cyan" />
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-cyan">
              PORTFÓLIO
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-8">
            Cada projeto, uma estratégia. <br />
            <span className="text-gradient">Cada cliente, um resultado.</span>
          </h1>
          <p className="text-text-secondary text-xl">
            22 projetos selecionados de mais de 150 entregues em 12 anos. De startups tech a clínicas médicas, do Brasil ao exterior.
          </p>
        </motion.div>

        {/* Filters */}
        <div className="space-y-4 mb-16">
          {/* Type Filter */}
          <div className="flex flex-wrap gap-3">
            {typeFilters.map((t) => (
              <button
                key={t}
                onClick={() => setTypeFilter(t)}
                className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all ${
                  typeFilter === t
                    ? "bg-brand-cyan text-black"
                    : "bg-bg-secondary text-text-secondary border border-border-subtle hover:border-brand-cyan/50"
                }`}
              >
                {t}
              </button>
            ))}
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2">
            {categoryFilters.map((c) => (
              <button
                key={c}
                onClick={() => setCategoryFilter(c)}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
                  categoryFilter === c
                    ? "bg-white/10 text-white border border-white/20"
                    : "text-text-muted border border-transparent hover:text-text-secondary hover:border-border-subtle"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </AnimatePresence>
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-20 text-text-muted">
            <p className="text-lg">Nenhum projeto encontrado com esses filtros.</p>
          </div>
        )}
      </div>
    </div>
  );
}

/* ─── Project Card ──────────────────────────────────────── */

function ProjectCard({ project }: { project: (typeof projects)[number] }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  // Intersection Observer for lazy loading
  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(el);
        }
      },
      { rootMargin: "200px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <motion.div
      ref={cardRef}
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.3 }}
    >
      <a
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        className="project-card group block"
      >
        {/* Browser Mockup */}
        <div className="browser-mockup">
          <div className="browser-bar">
            <span className="dot dot-red" />
            <span className="dot dot-yellow" />
            <span className="dot dot-green" />
          </div>

          <div
            className="browser-content"
            style={{
              backgroundImage: isVisible ? `url(${project.image})` : undefined,
            }}
          />

          {/* External link badge */}
          <div className="absolute top-10 right-3 z-10 w-7 h-7 rounded-full bg-black/60 backdrop-blur-sm flex items-center justify-center text-text-muted group-hover:text-brand-cyan transition-colors">
            <ExternalLink size={13} />
          </div>
        </div>

        {/* Project Info */}
        <div className="p-5">
          <span className="text-[10px] font-bold text-brand-cyan uppercase tracking-widest">
            {project.type}
          </span>
          <h3 className="text-lg font-bold mt-1 mb-0.5 text-white group-hover:text-brand-cyan transition-colors">
            {project.name}
          </h3>
          <span className="text-sm text-text-muted">{project.segment}</span>

          <div className="mt-4 flex items-center gap-2 text-sm font-bold text-text-secondary group-hover:text-white transition-colors">
            Acessar Site <ExternalLink size={14} />
          </div>
        </div>
      </a>
    </motion.div>
  );
}
