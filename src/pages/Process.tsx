import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { CheckCircle2, Rocket } from "lucide-react";

const steps = [
  {
    title: "Diagnóstico",
    time: "3-5 dias",
    desc: "Antes de propor solução, a gente entende o problema. Reunião de briefing aprofundada para entender seu negócio, público e objetivos."
  },
  {
    title: "Estratégia & Arquitetura",
    time: "5-7 dias",
    desc: "O esqueleto antes da pele. Definimos arquitetura de informação, hierarquia de páginas, jornada do usuário e CTAs."
  },
  {
    title: "Design",
    time: "7-15 dias",
    desc: "Direção visual que comunica e converte. Criamos a identidade visual do site com prototipagem em alta fidelidade."
  },
  {
    title: "Desenvolvimento",
    time: "15-45 dias",
    desc: "Código limpo, performance máxima. Construção com checkpoints semanais e acompanhamento em real-time."
  },
  {
    title: "Lançamento & Otimização",
    time: "Contínuo",
    desc: "Entrega não é fim. É começo. Site no ar, métricas configuradas e monitoramento dos primeiros 30 dias."
  },
];

export default function Process() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const rocketY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mb-24">
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-8">
            Transparência <br />
            <span className="text-gradient">do briefing à entrega.</span>
          </h1>
          <p className="text-text-secondary text-xl">
            Não acreditamos em "vai dar certo". Acreditamos em método. Conheça as cinco etapas que garantem o sucesso do seu projeto.
          </p>
        </div>

        <div ref={containerRef} className="relative max-w-4xl mx-auto pl-12 md:pl-0">
          {/* Vertical Progress Line */}
          <div className="absolute left-[0px] md:left-1/2 top-0 bottom-0 w-[2px] bg-border-subtle overflow-hidden">
            <motion.div 
               style={{ scaleY: scrollYProgress, transformOrigin: 'top' }}
               className="absolute top-0 left-0 right-0 h-full bg-brand-cyan" 
            />
          </div>

          {/* Animated Rocket along the path */}
          <motion.div 
            style={{ y: rocketY, top: -20 }}
            className="absolute left-[-15px] md:left-[calc(50%-15px)] z-20 text-brand-cyan bg-black p-1 rounded-full border border-brand-cyan hidden md:block"
          >
            <Rocket size={28} />
          </motion.div>

          {/* Steps */}
          <div className="flex flex-col gap-24">
            {steps.map((step, i) => (
              <div key={i} className={`flex flex-col md:flex-row items-center gap-12 ${i % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                <div className="w-full md:w-1/2 flex flex-col gap-4">
                  <div className={`flex items-center gap-4 ${i % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                     <span className="text-6xl font-black text-white/10">{`0${i + 1}`}</span>
                     <span className="bg-brand-cyan/20 text-brand-cyan px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">{step.time}</span>
                  </div>
                  <h3 className="text-3xl font-bold">{step.title}</h3>
                  <p className="text-text-secondary leading-relaxed text-lg">{step.desc}</p>
                </div>
                <div className="hidden md:flex w-1/2 justify-center relative">
                   <div className="w-4 h-4 bg-brand-cyan rounded-full shadow-[0_0_20px_rgba(0,191,255,1)] z-10" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <div className="mt-40 text-center">
           <button className="bg-gradient px-12 py-5 rounded-full font-bold text-xl hover:glow-cyan transition-all">
              Agendar Diagnóstico Gratuito
           </button>
        </div>
      </div>
    </div>
  );
}
