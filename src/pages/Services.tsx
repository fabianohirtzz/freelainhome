import { useRef, useCallback } from "react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Building2,
  Target,
  ShoppingBag,
  Code2,
  Zap,
  Search,
  Smartphone,
  Headphones,
  Clock,
  ShieldCheck,
  MessageCircle,
} from "lucide-react";

/* ── Data ────────────────────────────────────────────── */

const services = [
  {
    num: "01",
    icon: Building2,
    title: "Site Institucional",
    tagline: "Autoridade. Confiança. Conversão.",
    desc: "Site que comunica o tamanho real da sua empresa. Design exclusivo, arquitetura pensada pra capturar lead, performance que o Google ama.",
    metrics: [
      { label: "PRAZO", value: "15-30 dias" },
      { label: "PÁGINAS", value: "Até 7" },
    ],
    targeting: "Sua empresa precisa transmitir credibilidade antes mesmo do primeiro contato.",
    cta: "Quero meu site institucional",
    link: "/contato?servico=institucional",
  },
  {
    num: "02",
    icon: Target,
    title: "Landing Page",
    tagline: "Uma página. Um objetivo. Resultado.",
    desc: "Cada elemento desenhado pra empurrar o visitante até o CTA. Pra tráfego pago que precisa converter o clique em cliente.",
    metrics: [
      { label: "PRAZO", value: "7-15 dias" },
      { label: "CARREGAMENTO", value: "<2 segundos" },
    ],
    targeting: "Você investe em tráfego pago e cada lead que escapa é dinheiro perdido.",
    cta: "Quero uma landing que converte",
    link: "/contato?servico=landing-page",
  },
  {
    num: "03",
    icon: ShoppingBag,
    title: "E-commerce",
    tagline: "Loja própria. Sem comer taxa.",
    desc: "Checkout otimizado, integração de pagamento e estrutura pronta pra escalar. Você no controle, não no marketplace.",
    metrics: [
      { label: "PRAZO", value: "30-60 dias" },
      { label: "PAGAMENTOS", value: "Múltiplos" },
    ],
    targeting: "Você quer vender online sem depender de marketplaces e perder margem em taxas.",
    cta: "Quero minha loja no ar",
    link: "/contato?servico=ecommerce",
  },
  {
    num: "04",
    icon: Code2,
    title: "Web App",
    tagline: "Quando template não resolve.",
    desc: "Sistema web sob medida. Dashboards, áreas de membros, automações via API. Resolvemos o que ninguém mais resolve.",
    metrics: [
      { label: "PRAZO", value: "45-90 dias" },
      { label: "ESCOPO", value: "Custom" },
    ],
    targeting: "Seu processo é único e você precisa de ferramenta digital que se adapte a ele.",
    cta: "Quero meu sistema sob medida",
    link: "/contato?servico=webapp",
  },
];

const guarantees = [
  { icon: Zap, title: "Performance 100/100", desc: "GTmetrix verde em todos os projetos. Sem exceção." },
  { icon: Search, title: "SEO técnico embutido", desc: "Schema, Core Web Vitals, arquitetura semântica." },
  { icon: Smartphone, title: "100% responsivo", desc: "Funciona impecável do iPhone ao ultra-wide." },
  { icon: Headphones, title: "Suporte pós-lançamento", desc: "30 a 90 dias de acompanhamento depois do go-live." },
  { icon: Clock, title: "Entrega no prazo", desc: "Cronograma transparente, marcos semanais." },
  { icon: ShieldCheck, title: "Análise estratégica gratuita", desc: "Antes de fechar projeto, você recebe um diagnóstico." },
];

/* ── Ease token ──────────────────────────────────────── */
const ease = [0.16, 1, 0.3, 1] as const;

/* ── Check prefers-reduced-motion ────────────────────── */
const prefersReducedMotion =
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/* ── Page Component ──────────────────────────────────── */

export default function Services() {
  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-6 flex flex-col gap-20">

        {/* ── HERO ───────────────────────────────────── */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease }}
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-3xl relative"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-[2px] bg-brand-cyan" />
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-cyan">
              SERVIÇOS
            </span>
          </div>
          <h1 className="text-[40px] sm:text-5xl md:text-6xl lg:text-[72px] font-extrabold leading-[1] tracking-tight mb-8">
            Não fazemos sites.{" "}
            <br className="hidden sm:block" />
            <span className="text-gradient">Fazemos máquinas de aquisição.</span>
          </h1>
          <p className="text-text-secondary text-base md:text-lg max-w-[620px] leading-relaxed">
            Quatro especialidades. Um padrão de qualidade. Cada projeto começa com estratégia e termina com um site que gera resultado mensurável.
          </p>

          {/* Dot grid background */}
          <div
            className="absolute inset-0 -z-10 opacity-40 pointer-events-none"
            aria-hidden="true"
            style={{
              backgroundImage: "radial-gradient(#1a1a1a 1px, transparent 1px)",
              backgroundSize: "24px 24px",
            }}
          />
        </motion.section>

        {/* ── SERVICE CARDS 2×2 ──────────────────────── */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((s, i) => (
            <ServiceCard key={s.num} service={s} index={i} />
          ))}
        </section>

        {/* ── GUARANTEES BLOCK ───────────────────────── */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease }}
          viewport={{ once: true, margin: "-100px" }}
          className="rounded-xl p-7 sm:p-8"
          style={{
            background: "linear-gradient(135deg, rgba(0,191,255,0.05), rgba(0,102,255,0.02))",
            border: "1px solid rgba(0,191,255,0.15)",
          }}
        >
          <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-brand-cyan block mb-2">
            O QUE TODO PROJETO TEM
          </span>
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight mb-8">
            O padrão Freela In Home é o mesmo em qualquer projeto.
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {guarantees.map((g, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: prefersReducedMotion ? 0 : i * 0.08, ease }}
                viewport={{ once: true }}
                className="flex flex-col gap-1"
              >
                <div className="flex items-center gap-2 mb-1">
                  <g.icon size={18} className="text-brand-cyan shrink-0" aria-hidden="true" />
                  <span className="text-sm font-semibold text-white">{g.title}</span>
                </div>
                <p className="text-xs text-text-secondary leading-relaxed">{g.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* ── EREHOST PARTNER CARD ───────────────────── */}
        <motion.a
          href="https://erehost.com.br/ref?id=6"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Conheça nossa parceira Erehost com 20% de desconto (abre em nova aba)"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease }}
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col sm:flex-row items-center gap-4 sm:gap-5 rounded-xl p-5 no-underline text-inherit group"
          style={{
            background: "#0a0a0a",
            border: "1px solid #1f1f1f",
            transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
          }}
          whileHover={prefersReducedMotion ? {} : {
            y: -2,
            borderColor: "rgba(0,191,255,0.5)",
            boxShadow: "0 8px 24px rgba(0,191,255,0.1)",
          }}
        >
          {/* Logo */}
          <div
            className="w-14 h-14 shrink-0 rounded-lg flex items-center justify-center p-2"
            style={{
              background: "rgba(0,191,255,0.05)",
              border: "1px solid rgba(0,191,255,0.2)",
            }}
          >
            <img
              src="/partners/erehost-logo-white.png"
              alt="Erehost - Hospedagem premium recomendada"
              className="max-w-full h-auto object-contain"
            />
          </div>

          {/* Text */}
          <div className="flex-1 text-center sm:text-left">
            <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-brand-cyan block mb-0.5">
              HOSPEDAGEM RECOMENDADA
            </span>
            <h3 className="text-base font-bold text-white mb-1">
              Erehost — nosso parceiro há 5 anos
            </h3>
            <p className="text-xs text-text-secondary leading-relaxed">
              Performance comprovada nos 150+ projetos que entregamos. Suporte dedicado e infraestrutura premium.
            </p>
          </div>

          {/* Badge */}
          <span className="shrink-0 bg-brand-cyan text-black text-xs font-bold px-3 py-1.5 rounded-md">
            20% OFF
          </span>
        </motion.a>

        {/* ── FINAL CTA ─────────────────────────────── */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease }}
          viewport={{ once: true, margin: "-100px" }}
          className="rounded-xl py-10 px-6 text-center flex flex-col items-center"
          style={{
            background: "radial-gradient(ellipse at center top, rgba(0,191,255,0.06), transparent 70%)",
            border: "1px solid #1f1f1f",
          }}
        >
          <span className="text-[11px] font-bold uppercase tracking-[0.15em] text-brand-cyan mb-4 block">
            NÃO SABE QUAL TIPO É O SEU?
          </span>
          <h2 className="text-2xl sm:text-[28px] md:text-[32px] font-bold tracking-tight mb-4">
            A gente descobre junto. <span className="text-brand-cyan">Em 24 horas.</span>
          </h2>
          <p className="text-[15px] text-text-secondary max-w-[480px] mb-8 leading-relaxed">
            Conta o que você precisa. Devolvemos uma análise estratégica gratuita com o caminho mais curto até o resultado.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-3">
            <Link
              to="/contato"
              className="bg-gradient px-6 py-3 rounded-full text-sm font-semibold text-white flex items-center gap-2 hover:glow-cyan hover:scale-[1.03] transition-all"
              aria-label="Solicitar análise estratégica gratuita"
            >
              Solicitar Análise Gratuita <ArrowRight size={16} aria-hidden="true" />
            </Link>

            <span className="text-text-secondary text-[13px]">ou</span>

            <a
              href="https://api.whatsapp.com/send?phone=5548991227776"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Falar no WhatsApp direto (abre em nova aba)"
              className="border border-border-subtle px-6 py-3 rounded-full text-sm font-semibold text-white flex items-center gap-2 hover:border-brand-cyan/50 hover:scale-[1.02] transition-all"
            >
              <MessageCircle size={16} className="text-[#25D366]" aria-hidden="true" />
              WhatsApp Direto
            </a>
          </div>
        </motion.section>

      </div>
    </div>
  );
}

/* ─── Service Card Component ────────────────────────── */

function ServiceCard({
  service,
  index,
}: {
  service: (typeof services)[number];
  index: number;
}) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (prefersReducedMotion) return;
      const el = cardRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const cx = rect.width / 2;
      const cy = rect.height / 2;
      const rx = ((y - cy) / cy) * -3;
      const ry = ((x - cx) / cx) * 3;
      el.style.transform = `translateY(-4px) perspective(1000px) rotateX(${rx}deg) rotateY(${ry}deg)`;
    },
    []
  );

  const handleMouseLeave = useCallback(() => {
    const el = cardRef.current;
    if (el) el.style.transform = "";
  }, []);

  const Icon = service.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.8,
        delay: prefersReducedMotion ? 0 : index * 0.12,
        ease,
      }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="service-card group relative overflow-hidden rounded-xl p-6 cursor-pointer"
        style={{
          background: "#0a0a0a",
          border: "1px solid #1f1f1f",
          transition: "border-color 0.4s ease, box-shadow 0.4s ease, transform 0.25s ease",
        }}
      >
        {/* Light beam on hover */}
        <div className="service-beam" aria-hidden="true" />

        {/* Watermark number */}
        <span
          className="absolute top-4 right-4 text-[64px] lg:text-[72px] font-extrabold leading-none select-none pointer-events-none"
          style={{ color: "#1a1a1a" }}
          aria-hidden="true"
        >
          {service.num}
        </span>

        {/* Icon box */}
        <div className="service-icon-box mb-5">
          <Icon size={22} className="text-brand-cyan" aria-hidden="true" />
        </div>

        {/* Title */}
        <h3 className="text-[22px] font-bold text-white mb-1">{service.title}</h3>

        {/* Tagline */}
        <p className="text-[13px] font-medium text-brand-cyan mb-3">{service.tagline}</p>

        {/* Description */}
        <p className="text-sm text-text-secondary leading-relaxed mb-5">{service.desc}</p>

        {/* Metrics */}
        <div className="grid grid-cols-2 gap-4 py-3 mb-4" style={{ borderTop: "1px solid #1f1f1f", borderBottom: "1px solid #1f1f1f" }}>
          {service.metrics.map((m) => (
            <div key={m.label}>
              <span className="text-[10px] uppercase tracking-[0.1em] text-text-muted font-bold block mb-0.5">
                {m.label}
              </span>
              <span className="text-sm font-semibold text-white">{m.value}</span>
            </div>
          ))}
        </div>

        {/* Targeting */}
        <span className="text-[11px] uppercase tracking-[0.1em] text-text-muted font-bold block mb-1.5">
          IDEAL PRA VOCÊ SE:
        </span>
        <p className="text-[13px] text-[#d4d4d8] leading-relaxed mb-5">{service.targeting}</p>

        {/* CTA */}
        <Link
          to={service.link}
          className="service-cta text-[13px] font-semibold text-brand-cyan inline-flex items-center gap-1 group-hover:gap-2.5 transition-all"
          aria-label={`${service.cta} — ir para contato`}
        >
          {service.cta} <ArrowRight size={15} aria-hidden="true" />
        </Link>
      </div>
    </motion.div>
  );
}
