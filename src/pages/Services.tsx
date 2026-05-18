import { motion } from "motion/react";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const serviceDetails = [
  {
    title: "Site Institucional",
    for: "Empresas que querem ser levadas a sério.",
    included: ["Design exclusivo", "Performance 100/100", "SEO técnico", "Blog/Notícias", "Painel administrativo"],
    deadline: "15-30 dias"
  },
  {
    title: "Landing Page",
    for: "Campanhas de tráfego pago e lançamentos.",
    included: ["Copy estratética", "Teste A/B", "Integração CRM", "Velocidade máxima", "Mobile first"],
    deadline: "7-15 dias"
  },
  {
    title: "E-commerce",
    for: "Lojas virtuais prontas para escalar.",
    included: ["Checkout otimizado", "Gestão de estoque", "Integração pagamentos", "SEO para produtos", "Cupons e promoções"],
    deadline: "30-60 dias"
  },
  {
    title: "Web App",
    for: "Software sob medida para o seu negócio.",
    included: ["Dashboard customizado", "Áreas de membros", "Automações via API", "Banco de dados", "Segurança avançada"],
    deadline: "45-90 dias"
  }
];

export default function Services() {
  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mb-24">
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-8">
            Quatro frentes. Um objetivo: <br />
            <span className="text-gradient">fazer seu site trabalhar pra você.</span>
          </h1>
          <p className="text-text-secondary text-xl">
            Cada tipo de projeto tem método, prazo e entrega próprios. Escolha o que faz sentido pro seu momento.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-20">
          {serviceDetails.map((service, i) => (
            <div key={i} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start border-b border-border-subtle pb-20 last:border-0 last:pb-0">
               <div>
                 <h2 className="text-3xl md:text-4xl font-bold mb-4">{service.title}</h2>
                 <p className="text-brand-cyan font-medium mb-8 text-lg">{service.for}</p>
                 <div className="flex flex-col gap-6 mb-12">
                   <span className="text-text-muted text-xs uppercase tracking-widest font-bold">O QUE ESTÁ INCLUÍDO:</span>
                   <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                     {service.included.map((item, idx) => (
                       <li key={idx} className="flex items-center gap-3 text-text-secondary">
                         <CheckCircle2 size={18} className="text-brand-cyan shrink-0" />
                         {item}
                       </li>
                     ))}
                   </ul>
                 </div>
                 <Link to="/contato" className="inline-flex items-center gap-3 bg-white text-black px-8 py-4 rounded-full font-bold hover:bg-brand-cyan hover:text-white transition-all">
                    Solicitar Proposta <ArrowRight size={20} />
                 </Link>
               </div>
               <div className="bg-bg-secondary p-12 rounded-3xl border border-border-subtle flex flex-col justify-center items-center text-center">
                  <span className="text-text-muted text-sm uppercase tracking-widest mb-4">PRAZO MÉDIO</span>
                  <span className="text-5xl md:text-6xl font-extrabold text-white">{service.deadline}</span>
                  <p className="text-text-secondary mt-6 max-w-xs">Nosso compromisso é com a transparência e o cumprimento rigoroso de cada etapa.</p>
               </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
