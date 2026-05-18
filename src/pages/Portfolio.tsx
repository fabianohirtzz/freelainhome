import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Link } from "react-router-dom";
import { ExternalLink, ArrowRight } from "lucide-react";

const categories = ["Todos", "Institucional", "Landing Page", "E-commerce", "Web App"];

const projects = [
  { id: "barra-boat-floripa", name: "Barra Boat Floripa", category: "Institucional", link: "https://barraboatfloripa.com.br" },
  { id: "oceano-passeios-de-lancha", name: "Oceano Passeios", category: "Institucional", link: "https://oceanopasseiosdelancha.com.br" },
  { id: "complexo-tea", name: "Complexo TEA", category: "Institucional", link: "https://complexotea.com.br" },
  { id: "farmia", name: "Farmia", category: "Web App", link: "https://farmia.app" },
  { id: "proarmy", name: "PROARMY", category: "Web App", link: "https://proarmy.com.br" },
  { id: "synczap", name: "SyncZap", category: "Web App", link: "https://synczap.com.br" },
  { id: "chavelli-longhi", name: "Chavelli Longhi", category: "Institucional", link: "https://chavellilonghi.com.br" },
  { id: "baurea", name: "Baurea", category: "Institucional", link: "https://baurea.com.br" },
  { id: "hd360", name: "HD360", category: "Web App", link: "https://hd360.com.br" },
  { id: "residencial-libertad", name: "Residencial Libertad", category: "Landing Page", link: "https://residenciallibertad.com.br" },
];

export default function Portfolio() {
  const [filter, setFilter] = useState("Todos");

  const filteredProjects = filter === "Todos" 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mb-16">
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-8">
            Cada projeto, uma estratégia. <br />
            <span className="text-gradient">Cada cliente, um resultado.</span>
          </h1>
          <p className="text-text-secondary text-xl">
            Uma seleção de 150+ projetos entregues nos últimos 12 anos em diferentes países e segmentos.
          </p>
        </div>

        <div className="flex flex-wrap gap-3 mb-16">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all ${
                filter === cat 
                  ? "bg-brand-cyan text-black" 
                  : "bg-bg-secondary text-text-secondary border border-border-subtle hover:border-brand-cyan/50"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="group bg-bg-secondary rounded-2xl border border-border-subtle overflow-hidden hover:border-brand-cyan transition-all"
              >
                <div className="aspect-video bg-bg-tertiary relative overflow-hidden">
                   <div className="absolute inset-0 bg-brand-cyan/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                     <ArrowRight size={40} className="text-white transform -rotate-45 group-hover:rotate-0 transition-transform duration-500" />
                   </div>
                   {/* Placeholder for project mockups */}
                   <div className="flex items-center justify-center h-full text-text-muted font-bold tracking-tighter text-4xl opacity-10 uppercase italic">
                      {project.name.split(' ')[0]}
                   </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold text-brand-cyan uppercase tracking-widest">{project.category}</span>
                    <a href={project.link} target="_blank" className="text-text-muted hover:text-brand-cyan transition-colors">
                      <ExternalLink size={16} />
                    </a>
                  </div>
                  <h3 className="text-xl font-bold mb-4">{project.name}</h3>
                  <Link 
                    to={`/portfolio/${project.id}`} 
                    className="text-sm font-bold flex items-center gap-2 group-hover:gap-3 transition-all"
                  >
                    Ver Case Completo <ArrowRight size={16} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
