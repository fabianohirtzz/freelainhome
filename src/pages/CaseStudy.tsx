import { useParams, Link } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowLeft, ExternalLink, CheckCircle2 } from "lucide-react";

const caseData: Record<string, any> = {
  "barra-boat-floripa": {
    name: "Barra Boat Floripa",
    segment: "Turismo náutico",
    type: "Site Institucional + Sistema de Reservas",
    year: "2024",
    link: "https://barraboatfloripa.com.br",
    challenge: "A Barra Boat Floripa estava entre as principais operadoras de passeios náuticos em Florianópolis, mas tinha um problema clássico: a marca era forte offline, e invisível online. O site antigo não comunicava o nível de exclusividade do serviço e dificultava o processo de reserva.",
    solution: "Desenvolvemos um site institucional premium com foco em conversão direta para WhatsApp. Cada embarcação ganhou ficha técnica detalhada, com fotos, capacidade, itens inclusos e CTA de reserva imediata.",
    results: [
      "Arquitetura focada em rastreabilidade",
      "Catálogo dinâmico de mais de 20 embarcações",
      "Sistema de reserva integrado ao WhatsApp",
      "Performance 100/100 no GTmetrix",
      "Design exclusivo que comunica luxo náutico"
    ]
  },
  "oceano-passeios-de-lancha": {
     name: "Oceano Passeios",
     segment: "Turismo náutico",
     type: "Site Institucional",
     year: "2024",
     link: "https://oceanopasseiosdelancha.com.br",
     challenge: "O mercado de passeios náuticos em Florianópolis é altamente competitivo. A Oceano queria um site que se diferenciasse dos concorrentes pelo design, transmitindo sofisticação e segurança.",
     solution: "Construímos um site com identidade visual marítima refinada, fotografia em destaque e jornada do visitante pensada para conversão imediata.",
     results: [
       "Direção visual exclusiva",
       "SEO focado em buscas regionais",
       "Galerias otimizadas",
       "Mobile-first performance",
       "Integração estratégica de CTAs"
     ]
  },
  // Add other cases as needed...
};

export default function CaseStudy() {
  const { id } = useParams();
  const data = id ? caseData[id] : null;

  if (!data) {
    return (
      <div className="pt-40 text-center">
        <h2 className="text-2xl font-bold mb-4">Case não encontrado.</h2>
        <Link to="/portfolio" className="text-brand-cyan hover:underline">Voltar para o portfólio</Link>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-6">
        <Link to="/portfolio" className="inline-flex items-center gap-2 text-text-muted hover:text-white transition-colors mb-12">
          <ArrowLeft size={16} /> Voltar para o Portfólio
        </Link>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-20">
          <div className="lg:col-span-2 space-y-20">
            <div>
              <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8">
                {data.name}
              </h1>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-y border-border-subtle py-8">
                <div>
                  <h4 className="text-xs font-bold text-text-muted uppercase mb-2">Segmento</h4>
                  <p className="font-bold">{data.segment}</p>
                </div>
                <div>
                  <h4 className="text-xs font-bold text-text-muted uppercase mb-2">Tipo</h4>
                  <p className="font-bold">{data.type}</p>
                </div>
                <div>
                  <h4 className="text-xs font-bold text-text-muted uppercase mb-2">Ano</h4>
                  <p className="font-bold">{data.year}</p>
                </div>
                <div>
                  <h4 className="text-xs font-bold text-text-muted uppercase mb-2">Link</h4>
                  <a href={data.link} target="_blank" className="font-bold text-brand-cyan flex items-center gap-2">
                    Visitar <ExternalLink size={14} />
                  </a>
                </div>
              </div>
            </div>

            <section className="space-y-6">
              <h2 className="text-3xl font-bold">O Desafio</h2>
              <p className="text-text-secondary text-xl leading-relaxed">{data.challenge}</p>
            </section>

            <section className="space-y-6">
              <h2 className="text-3xl font-bold">A Solução</h2>
              <p className="text-text-secondary text-xl leading-relaxed">{data.solution}</p>
            </section>
          </div>

          <aside className="lg:col-span-1">
             <div className="bg-bg-secondary p-8 rounded-3xl border border-border-subtle sticky top-32">
                <h3 className="text-2xl font-bold mb-8">O Que Fizemos</h3>
                <ul className="space-y-6">
                  {data.results.map((result: string, i: number) => (
                    <li key={i} className="flex gap-4">
                      <CheckCircle2 size={24} className="text-brand-cyan shrink-0" />
                      <span className="text-text-secondary font-medium">{result}</span>
                    </li>
                  ))}
                </ul>
             </div>
          </aside>
        </div>

        {/* Mockup Placeholder */}
        <div className="mt-32 aspect-video bg-bg-secondary rounded-[40px] border border-border-subtle flex items-center justify-center">
            <span className="text-text-muted font-bold tracking-tighter text-6xl opacity-10 uppercase italic">Mockup {data.name}</span>
        </div>
      </div>
    </div>
  );
}
