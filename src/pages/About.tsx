import { motion } from "motion/react";

const valueCards = [
  {
    title: "Performance obsessiva",
    desc: "Site lento é site morto. Otimização não é diferencial. É obrigação."
  },
  {
    title: "Estratégia antes de estética",
    desc: "Design serve à conversão. Se for bonito mas não vender, não está pronto."
  },
  {
    title: "Transparência radical",
    desc: "Você acompanha cada etapa. Sem caixa preta, sem surpresa, sem prazo elástico."
  },
  {
    title: "Suporte que existe",
    desc: "Pós-entrega real. Estamos do seu lado depois do site ir ao ar — não só antes."
  },
];

export default function About() {
  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mb-24">
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-8">
            Uma década construindo sites <br />
            <span className="text-gradient">que fazem a diferença.</span>
          </h1>
          <p className="text-text-secondary text-xl leading-relaxed">
            Começamos em 2014 com uma ideia simples: a maioria das empresas merece um site melhor do que aquele que tem. Naquele tempo, ter um site era "estar online". Hoje, é estar competindo.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-40">
           <div className="space-y-8">
              <h2 className="text-3xl font-bold">Nosso Manifesto</h2>
              <p className="text-text-secondary text-lg leading-relaxed">
                Em 12 anos, entregamos mais de 150 projetos para clientes em diferentes segmentos — de varejistas e indústrias a profissionais liberais e startups. No Brasil e fora dele. 
                <br /><br />
                Aprendemos uma coisa nesse caminho: <span className="text-white font-bold">um bom site não é o mais bonito. É o que dá resultado.</span>
              </p>
              <p className="text-text-secondary text-lg leading-relaxed">
                Sede em Pedras Grandes - SC, atendendo todo o Brasil e clientes internacionais. Trabalhamos 100% remoto, com reuniões via Google Meet e gestão de projetos em tempo real.
              </p>
           </div>
           <div className="grid grid-cols-2 gap-6">
              {[
                { label: "Projetos", val: "150+" },
                { label: "Anos", val: "12" },
                { label: "Segmentos", val: "12+" },
                { label: "Países", val: "5" }
              ].map((stat, i) => (
                <div key={i} className="bg-bg-secondary p-8 rounded-3xl border border-border-subtle text-center">
                   <div className="text-4xl font-extrabold text-brand-cyan mb-2">{stat.val}</div>
                   <div className="text-text-muted text-xs uppercase tracking-widest font-bold">{stat.label}</div>
                </div>
              ))}
           </div>
        </div>

        <div className="mb-40">
          <h2 className="text-3xl font-bold mb-12 text-center">Nossos valores</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {valueCards.map((card, i) => (
              <div key={i} className="p-10 rounded-3xl bg-bg-secondary border border-border-subtle transition-all hover:border-brand-cyan/30">
                 <h3 className="text-2xl font-bold mb-4">{card.title}</h3>
                 <p className="text-text-secondary text-lg">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient p-20 rounded-[40px] text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-10 text-white">Vamos construir o próximo <br /> case de sucesso juntos?</h2>
            <button className="bg-white text-black px-12 py-5 rounded-full font-bold text-xl hover:scale-105 transition-all">
              Bora conversar
            </button>
        </div>
      </div>
    </div>
  );
}
