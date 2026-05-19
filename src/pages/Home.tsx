import { motion } from "motion/react";
import { 
  ArrowRight, 
  Zap, 
  TrendingDown, 
  EyeOff, 
  Building2, 
  Target, 
  ShoppingBag, 
  Code2,
  CheckCircle2,
  Star
} from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/src/lib/utils";

const stats = [
  { value: "150+", label: "Projetos" },
  { value: "12 anos", label: "De mercado" },
  { value: "100/100", label: "GTmetrix" },
  { value: "Brasil + INT", label: "Alcance" },
];

const problems = [
  {
    icon: Zap,
    title: "Carregamento lento",
    desc: "Cada segundo a mais de carregamento derruba até 20% das suas conversões."
  },
  {
    icon: TrendingDown,
    title: "Sem conversão",
    desc: "Tráfego sem direcionamento é dinheiro jogado fora. Site bonito sem CTA é decoração."
  },
  {
    icon: EyeOff,
    title: "Invisível no Google",
    desc: "Sites mal otimizados não rankeiam. E o que não rankeia, não vende."
  }
];

const services = [
  {
    icon: Building2,
    title: "Site Institucional",
    desc: "Sites institucionais premium para empresas que querem ser levadas a sério. Design exclusivo e navegação intuitiva."
  },
  {
    icon: Target,
    title: "Landing Page",
    desc: "Páginas de alta conversão para campanhas de tráfego pago. Cada elemento testado e estratégico."
  },
  {
    icon: ShoppingBag,
    title: "E-commerce",
    desc: "Lojas virtuais robustas com checkout otimizado e arquitetura preparada para tráfego alto."
  },
  {
    icon: Code2,
    title: "Web App",
    desc: "Sistemas web personalizados, dashboards e automações. Resolvemos o que template não resolve."
  }
];

const testimonials = [
  {
    name: "Barra Boat Floripa",
    role: "Aluguel de Lanchas",
    initial: "B",
    rating: 5,
    text: "Freela In Home! Fabiano, só agradecer esses anos todos de parceria. Você aguentando minhas indecisões na hora de finalizar os projetos, mas sempre me mostrando o melhor caminho tomar. Nossos projetos ficaram alegres e claros para o meu cliente. Sem contar a sua humildade e carinho conosco. Valeu... Daria 1000 estrelas se pudesse.",
  },
  {
    name: "Lais Marqueze Dal Grande",
    role: "Pereira Oliveira Turismo",
    initial: "L",
    rating: 5,
    text: "Super recomendo o trabalho do Fabiano. Fez o site da nossa agência, bem como outros materiais. Amei o trabalho dele. Fácil comunicação e disponibilidade. Obrigada mais uma vez Fabiano!",
  },
  {
    name: "Mauricio Perucci",
    role: "Cliente",
    initial: "M",
    rating: 5,
    text: "A competência e a qualidade dos serviços preparados pela Freela In Home, são impecáveis! Trabalho de qualidade, no tempo certo e com muita competência! Recomendo o Fabiano! Falem com ele e ele resolverá tudo o que vocês precisam!",
  },
  {
    name: "Hérico Camargo",
    role: "Cliente",
    initial: "H",
    rating: 5,
    text: "O Fabiano é um baita profissional, construiu o site da minha empresa do zero, entregou um ótimo resultado por um preço justo! Recomendo.",
  },
  {
    name: "Tiago Silveira Campezato",
    role: "Cliente",
    initial: "T",
    rating: 5,
    text: "Profissional de alto nível, com um conhecimento na área incrível. Superou todas minhas expectativas e tirou todas minhas dúvidas antes de fecharmos o contrato. Parabéns pelo profissionalismo e dedicação em nossa parceria.",
  },
  {
    name: "Filipe Goulart",
    role: "Cliente",
    initial: "F",
    rating: 5,
    text: "Atendimento e qualidade acima do esperado! Sempre superando as expectativas nas entregas dos trabalhos! Parabéns a toda equipe!",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section
        className="min-h-screen pt-20 flex items-center relative overflow-hidden"
      >
        {/* Background Video — z-0 */}
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center",
            zIndex: 0,
          }}
        >
          <source src="/videos/home_inicio.mp4" type="video/mp4" />
        </video>

        {/* Dark Gradient Overlay — z-1 */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 1,
            pointerEvents: "none",
            background: [
              "linear-gradient(to right, rgba(0,0,0,0.92), rgba(0,0,0,0.25))",
              "linear-gradient(to bottom, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.15) 40%, rgba(0,0,0,0.15) 60%, rgba(0,0,0,0.7) 100%)",
            ].join(", "),
          }}
        />

        {/* Content — z-2 */}
        <div className="container mx-auto px-6 relative" style={{ zIndex: 2 }}>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-[2px] bg-brand-cyan" />
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-cyan">
                DESENVOLVIMENTO WEB PREMIUM
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-[80px] font-extrabold leading-[0.9] tracking-tight mb-8">
              Sites que não só impressionam. <br />
              <span className="text-gradient">Convertem.</span>
            </h1>
            <p className="text-text-secondary text-lg md:text-xl mb-10 max-w-xl leading-relaxed">
              Criamos experiências digitais de alta performance para empresas que cansaram de ter um site bonito e parado. Aqui, design, tecnologia e estratégia trabalham juntos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-16">
              <Link
                to="/contato"
                className="bg-gradient px-8 py-4 rounded-full font-bold flex items-center justify-center gap-2 hover:glow-cyan transition-all"
              >
                Solicitar Orçamento <ArrowRight size={20} />
              </Link>
              <Link
                to="/portfolio"
                className="border border-brand-cyan/50 hover:bg-brand-cyan/10 px-8 py-4 rounded-full font-bold flex items-center justify-center transition-all"
              >
                Ver Portfólio
              </Link>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, i) => (
                <div key={i} className="flex flex-col">
                  <span className="text-2xl font-bold text-white">{stat.value}</span>
                  <span className="text-xs text-text-muted uppercase tracking-wider">{stat.label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-24 bg-bg-secondary relative">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mb-16">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-cyan mb-4 block">
              POR QUE A MAIORIA DOS SITES NÃO FUNCIONA
            </span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">
              Seu site deveria ser seu melhor vendedor. <br />
              <span className="text-text-secondary">Não seu cartão de visitas digital.</span>
            </h2>
            <p className="text-text-secondary text-lg leading-relaxed">
              9 em cada 10 sites pequenos no Brasil são lentos e mal otimizados. Você não precisa de mais um site. Você precisa de uma máquina de aquisição.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {problems.map((prob, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="p-8 pb-12 rounded-2xl bg-bg-tertiary border border-border-subtle hover:border-brand-cyan/30 transition-all"
              >
                <div className="w-12 h-12 bg-brand-cyan/10 rounded-xl flex items-center justify-center text-brand-cyan mb-6">
                  <prob.icon size={24} />
                </div>
                <h3 className="text-xl font-bold mb-4">{prob.title}</h3>
                <p className="text-text-secondary leading-relaxed">{prob.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-20 md:mb-24">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-cyan mb-4 block">
              O QUE FAZEMOS
            </span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Sites desenvolvidos para o que importa: <span className="text-gradient">resultado.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group p-8 md:p-10 rounded-2xl bg-bg-secondary border border-border-subtle hover:border-brand-cyan/50 transition-all relative overflow-hidden"
              >
                <div className="relative z-10">
                  <div className="w-14 h-14 bg-brand-cyan/5 rounded-xl flex items-center justify-center text-brand-cyan mb-8 group-hover:bg-brand-cyan group-hover:text-black transition-colors">
                    <service.icon size={28} />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                  <p className="text-text-secondary leading-relaxed mb-8">{service.desc}</p>
                  <Link to="/servicos" className="text-brand-cyan font-bold flex items-center gap-2 group-hover:gap-4 transition-all">
                    Saiba mais <ArrowRight size={18} />
                  </Link>
                </div>
                <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity">
                   <service.icon size={120} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof (Google Reviews) */}
      <section className="py-24 bg-bg-secondary">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12 mb-20">
            <div className="max-w-xl">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-cyan mb-4 block">
                O QUE NOSSOS CLIENTES DIZEM
              </span>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
                <span className="text-gradient">5,0 estrelas</span> no Google.
              </h2>
              <p className="text-text-secondary text-lg">Não somos nós que dizemos. São os resultados dos nossos parceiros.</p>
            </div>
            <div className="bg-bg-tertiary p-8 rounded-2xl border border-border-subtle flex flex-col items-center gap-2">
              <div className="flex items-center gap-2 mb-2 text-white font-bold text-2xl">
                 <img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png" alt="Google" className="h-6" />
              </div>
              <div className="flex gap-1 text-yellow-400" aria-label="5 estrelas de 5">
                {[...Array(5)].map((_, i) => <Star key={i} size={20} fill="currentColor" />)}
              </div>
              <span className="text-white font-bold">5,0 baseado em 20 avaliações</span>
              <a
                href="https://g.page/r/CQBhVD9tp10bEAE/review"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Ver todas as avaliações no Google (abre em nova aba)"
                className="text-brand-cyan text-sm underline mt-2"
              >
                Ver no Google →
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div key={i} className="p-8 rounded-2xl bg-bg-tertiary border border-border-subtle hover:border-brand-cyan/30 transition-all flex flex-col gap-4 relative">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-brand-cyan/20 flex items-center justify-center font-bold text-brand-cyan">
                      {t.initial}
                    </div>
                    <div>
                      <h4 className="font-bold text-sm">{t.name}</h4>
                      <p className="text-[10px] text-text-muted uppercase tracking-wider">{t.role}</p>
                    </div>
                  </div>
                  <div className="flex gap-0.5 text-yellow-400" aria-label="5 estrelas de 5">
                    {[...Array(t.rating)].map((_, j) => <Star key={j} size={12} fill="currentColor" />)}
                  </div>
                </div>
                <p className="text-text-secondary text-sm leading-relaxed">&ldquo;{t.text}&rdquo;</p>
                <div className="absolute top-4 right-4 opacity-30">
                   <img src="https://www.gstatic.com/images/branding/product/2x/googleg_48dp.png" alt="G" className="w-4" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-black relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="bg-linear-to-r from-brand-cyan/20 to-brand-blue/20 p-12 md:p-20 rounded-[40px] border border-white/5 text-center">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-cyan mb-6 block">
              VAMOS COMEÇAR?
            </span>
            <h2 className="text-5xl md:text-7xl font-bold tracking-tight mb-8">
              Seu próximo site pode ser seu <br />
              <span className="text-gradient">melhor investimento do ano.</span>
            </h2>
            <p className="text-text-secondary text-xl max-w-2xl mx-auto mb-12">
              Conte sobre seu projeto. Em até 24 horas, você recebe uma análise estratégica gratuita e uma proposta personalizada.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link to="/contato" className="bg-gradient px-10 py-5 rounded-full font-bold text-lg hover:glow-cyan transition-all w-full sm:w-auto">
                Solicitar Orçamento →
              </Link>
              <a href="https://api.whatsapp.com/send?phone=5548991227776" target="_blank" rel="noopener noreferrer" aria-label="Falar no WhatsApp (abre em nova aba)" className="border border-white/20 hover:bg-white/5 px-10 py-5 rounded-full font-bold text-lg transition-all w-full sm:w-auto">
                Falar no WhatsApp
              </a>
            </div>
          </div>
        </div>
        
        {/* Animated Background Elements */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              x: [0, 50, 0],
              y: [0, 30, 0],
              opacity: [0.1, 0.2, 0.1]
            }}
            transition={{
              duration: 10 + i * 2,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute rounded-full blur-[100px] pointer-events-none"
            style={{
              width: `${200 + i * 50}px`,
              height: `${200 + i * 50}px`,
              background: i % 2 === 0 ? 'var(--color-brand-cyan)' : 'var(--color-brand-blue)',
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </section>
    </div>
  );
}
