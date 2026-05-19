import { useRef, useEffect, useState, useCallback } from "react";
import { motion } from "motion/react";
import { Zap, Target, Eye, Headphones, MessageCircle } from "lucide-react";

/* ── Ease token (matches Services page) ──────────────── */
const ease = [0.16, 1, 0.3, 1] as const;

/* ── Reduced‑motion check ─────────────────────────────── */
const prefersReducedMotion =
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/* ── Client logos (all 36 files from /public/clients/) ── */
const clientLogos = [
  "EreHost branco para fundos escuros.png",
  "Logo-Branco-sg.png",
  "Logo-Branco.png",
  "Logo-Horizontal-2.png",
  "Logo-Horizontal-Branco-cl.png",
  "Logo-Horizontal-mc.png",
  "Logo-branco-horizontal-nox.png",
  "Logo-branco-vt.png",
  "Logo-horizontal-versão-1.png",
  "ROBRACON---BRANCO.png",
  "ello-forte-RP---branco.png",
  "ello-forte-SC---branco.png",
  "logo-branco-horizontal-gct.png",
  "logo-branco-horizontal.png",
  "logo-branco-po.png",
  "logo-branco.jpg",
  "logo-colorido-horizontal.png",
  "logo-horizontal-app.png",
  "logo-horizontal-branco-sz.png",
  "logo-horizontal-branco.png",
  "logo-horizontal-colorido-letra-branca.png",
  "logo-jacical---branco.png",
  "logo-jocely.png",
  "logo-lar-melhor.png",
  "logo-oficial-4-transparente.png",
  "logo-site-branco.png",
  "logo-tricologista-horizontal-branco.png",
  "logo-versao2.png",
  "logo.png",
  "logo1.png",
  "logonovo6.png",
  "logosite2.png",
  "versao-2-fundo-transparente.png",
  "versao2.png",
  "versão-horizontal2-branco---fundo-transparente.png",
  "vocical---branco.png",
];

const logosRow1 = clientLogos.slice(0, 18);
const logosRow2 = clientLogos.slice(18, 36);

/* ── Timeline data ───────────────────────────────────── */
const timelineItems = [
  {
    year: "2013",
    title: "Primeiros projetos.",
    desc: "Os primeiros sites para empresas locais. Naquele tempo, \"ter site\" já era diferencial.",
  },
  {
    year: "2018",
    title: "Foco em performance e SEO.",
    desc: "Decidimos que \"site bonito\" não é mais o suficiente — todo projeto sai com nota 100/100 no GTmetrix.",
  },
  {
    year: "2022",
    title: "Primeiro cliente internacional.",
    desc: "A operação cruza fronteiras. Hoje atendemos clientes em 3 países.",
  },
  {
    year: "2024",
    title: "Sistemas e web apps customizados.",
    desc: "Vamos além do site institucional: SaaS, automações, integrações via API.",
  },
  {
    year: "2026 · HOJE",
    title: "150+ projetos. Continuamos.",
    desc: "Mesmo padrão. Mesmo compromisso. Mais experiência por trás de cada projeto.",
    highlight: true,
  },
];

/* ── Values data ─────────────────────────────────────── */
const values = [
  {
    icon: Zap,
    title: "Performance obsessiva",
    desc: "Site lento é site morto. Otimização não é diferencial. É obrigação.",
  },
  {
    icon: Target,
    title: "Estratégia antes de estética",
    desc: "Design serve à conversão. Se for bonito mas não vender, não está pronto.",
  },
  {
    icon: Eye,
    title: "Transparência radical",
    desc: "Você acompanha cada etapa. Sem caixa preta, sem surpresa, sem prazo elástico.",
  },
  {
    icon: Headphones,
    title: "Suporte que existe",
    desc: "Pós-entrega real. Estamos do seu lado depois do site ir ao ar — não só antes.",
  },
];

/* ── Stats data ──────────────────────────────────────── */
const stats = [
  { value: 150, suffix: "+", label: "PROJETOS" },
  { value: 13, suffix: "", label: "ANOS" },
  { value: 12, suffix: "+", label: "SEGMENTOS" },
  { value: 3, suffix: "", label: "PAÍSES" },
];

/* ── Helper: infer company name from filename ────────── */
function inferAlt(filename: string): string {
  return filename
    .replace(/\.(png|jpg|svg|webp)$/i, "")
    .replace(/[-_]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

/* ═══════════════════════════════════════════════════════
   COUNT‑UP HOOK
   ═══════════════════════════════════════════════════════ */
function useCountUp(
  target: number,
  duration = 1500,
  start = false
): number {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start || prefersReducedMotion) {
      if (start) setCount(target);
      return;
    }

    let raf: number;
    const t0 = performance.now();

    function tick(now: number) {
      const elapsed = now - t0;
      const progress = Math.min(elapsed / duration, 1);
      // easeOutExpo
      const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setCount(Math.round(eased * target));
      if (progress < 1) raf = requestAnimationFrame(tick);
    }

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, duration, start]);

  return count;
}

/* ═══════════════════════════════════════════════════════
   STAT CARD — individual count‑up with IntersectionObserver
   ═══════════════════════════════════════════════════════ */
function StatCard({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const count = useCountUp(value, 1500, visible);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.4 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref} className="about-stat-card">
      <div className="about-stat-value">
        {count}{suffix}
      </div>
      <div className="about-stat-label">{label}</div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════
   MARQUEE ROW — infinite horizontal scroll
   ═══════════════════════════════════════════════════════ */
function MarqueeRow({
  logos,
  direction,
  durationDesktop,
  durationMobile,
}: {
  logos: string[];
  direction: "left" | "right";
  durationDesktop: number;
  durationMobile: number;
}) {
  const [dur, setDur] = useState(durationDesktop);

  useEffect(() => {
    const mql = window.matchMedia("(max-width: 639px)");
    const update = () => setDur(mql.matches ? durationMobile : durationDesktop);
    update();
    mql.addEventListener("change", update);
    return () => mql.removeEventListener("change", update);
  }, [durationDesktop, durationMobile]);

  const doubled = [...logos, ...logos];

  return (
    <div className="about-marquee-mask">
      <div
        className={`about-marquee-track ${
          prefersReducedMotion ? "about-marquee-static" : ""
        }`}
        style={
          prefersReducedMotion
            ? { display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 12 }
            : {
                animationDuration: `${dur}s`,
                animationDirection: direction === "right" ? "reverse" : "normal",
              }
        }
      >
        {(prefersReducedMotion ? logos : doubled).map((file, i) => (
          <div key={`${file}-${i}`} className="about-logo-card">
            <img
              src={`/clients/${file}`}
              alt={`Logo ${inferAlt(file)}`}
              loading="lazy"
              className="about-logo-img"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════
   MAIN PAGE COMPONENT
   ═══════════════════════════════════════════════════════ */
export default function About() {
  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-6 flex flex-col gap-20">

        {/* ══════════════════════════════════════════════
            SECTION 1 & 2 — HERO & MANIFESTO
            ══════════════════════════════════════════════ */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease }}
          viewport={{ once: true, margin: "-100px" }}
          className="about-manifesto-grid"
        >
          {/* Left Column: Hero Text + Manifesto Card */}
          <div className="flex flex-col gap-12">
            {/* Hero text */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-[2px] bg-brand-cyan" />
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-cyan">
                  QUEM SOMOS
                </span>
              </div>
              <h1 className="text-[36px] sm:text-5xl md:text-6xl font-extrabold leading-[1.05] tracking-tight mb-6">
                13 anos. 150 projetos.
                <br />
                <span className="text-gradient">Um único compromisso.</span>
              </h1>
              <p
                style={{ color: "#a1a1aa", fontSize: 16, lineHeight: 1.65, maxWidth: 560 }}
              >
                Construir sites que funcionam tão bem quanto parecem. Que comunicam
                o valor real do negócio e trazem retorno mensurável.
              </p>
            </div>

            {/* Manifesto card */}
            <div className="about-manifesto-card">
              <span className="about-manifesto-quote" aria-hidden="true">"</span>
              <div style={{ paddingLeft: 40 }}>
                <span className="about-eyebrow">NOSSO MANIFESTO</span>
                <p style={{ color: "#d4d4d8", fontSize: 16, lineHeight: 1.7, marginBottom: 16 }}>
                  Começamos em 2013 com uma ideia simples:{" "}
                  <strong style={{ color: "#fff" }}>
                    a maioria das empresas merece um site melhor do que aquele que tem.
                  </strong>
                </p>
                <p style={{ color: "#a1a1aa", fontSize: 15, lineHeight: 1.7, marginBottom: 16 }}>
                  Naquele tempo, ter um site era "estar online". Hoje, é estar
                  competindo. Em 13 anos, entregamos 150+ projetos para empresas em
                  diferentes segmentos — de varejistas e indústrias a profissionais
                  liberais e startups. No Brasil e em outros 2 países.
                </p>
                <p style={{ color: "#fff", fontSize: 16, fontWeight: 600, lineHeight: 1.6 }}>
                  Aprendemos uma coisa nesse caminho: um bom site não é o mais bonito.{" "}
                  <span style={{ color: "#00BFFF" }}>É o que dá resultado.</span>
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Photo */}
          <div className="about-manifesto-photo-wrapper">
            <div className="about-manifesto-photo-glow" aria-hidden="true" />
            <img
              src="/images/fabiano-hirtz.jpg"
              alt="Fabiano Hirtz, fundador da Freela In Home"
              className="about-manifesto-photo"
            />
            <div className="about-manifesto-photo-badge">
              <span className="about-manifesto-photo-name">FABIANO HIRTZ</span>
              <span className="about-manifesto-photo-role">FUNDADOR</span>
            </div>
          </div>
        </motion.section>

        {/* ══════════════════════════════════════════════
            SECTION 3 — NUMBERS (count‑up)
            ══════════════════════════════════════════════ */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="about-stats-grid">
            {stats.map((s) => (
              <StatCard key={s.label} {...s} />
            ))}
          </div>
        </motion.section>

        {/* ══════════════════════════════════════════════
            SECTION 4 — TIMELINE
            ══════════════════════════════════════════════ */}
        <section>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease }}
            viewport={{ once: true, margin: "-100px" }}
            className="mb-10"
          >
            <span className="about-eyebrow">NOSSA JORNADA</span>
            <h2 style={{ color: "#fff", fontSize: 24, fontWeight: 700 }}>
              De um freelancer a uma operação reconhecida.
            </h2>
          </motion.div>

          <div className="about-timeline">
            {/* Vertical line */}
            <div className="about-timeline-line" aria-hidden="true" />

            {timelineItems.map((item, i) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.5,
                  delay: prefersReducedMotion ? 0 : i * 0.15,
                  ease: "easeOut",
                }}
                viewport={{ once: true, margin: "-60px" }}
                className="about-timeline-item"
              >
                <div
                  className={`about-timeline-bullet ${item.highlight ? "about-timeline-bullet-highlight" : ""}`}
                  aria-hidden="true"
                />
                <div
                  className="about-timeline-year"
                  style={item.highlight ? { fontWeight: 800 } : undefined}
                >
                  {item.year}
                </div>
                <div className="about-timeline-title">{item.title}</div>
                <div className="about-timeline-desc">{item.desc}</div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ══════════════════════════════════════════════
            SECTION 5 — VALUES
            ══════════════════════════════════════════════ */}
        <section>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease }}
            viewport={{ once: true, margin: "-100px" }}
            className="mb-10"
          >
            <span className="about-eyebrow">COMO TRABALHAMOS</span>
            <h2 style={{ color: "#fff", fontSize: 22, fontWeight: 700 }}>
              Quatro princípios que guiam cada projeto.
            </h2>
          </motion.div>

          <div className="about-values-grid">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <motion.div
                  key={v.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: prefersReducedMotion ? 0 : i * 0.1,
                    ease,
                  }}
                  viewport={{ once: true, margin: "-60px" }}
                  className="about-value-card"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="about-value-icon-box">
                      <Icon size={16} className="text-brand-cyan" aria-hidden="true" />
                    </div>
                    <h3 style={{ color: "#fff", fontSize: 16, fontWeight: 700, margin: 0 }}>
                      {v.title}
                    </h3>
                  </div>
                  <p style={{ color: "#a1a1aa", fontSize: 13, lineHeight: 1.5, margin: 0 }}>
                    {v.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* ══════════════════════════════════════════════
            SECTION 6 — LOGO CAROUSEL
            ══════════════════════════════════════════════ */}
        <section>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease }}
            viewport={{ once: true, margin: "-100px" }}
            className="mb-8"
          >
            <span className="about-eyebrow">
              MARCAS QUE JÁ CONFIARAM NA FREELA IN HOME
            </span>
            <h2 style={{ color: "#fff", fontSize: 20, fontWeight: 700, marginBottom: 6 }}>
              Mais de 150 projetos. Algumas das empresas que passaram por aqui:
            </h2>
            <p style={{ color: "#a1a1aa", fontSize: 14, margin: 0 }}>
              Sites, branding, marketing e mais. Quem nos contratou uma vez, contratou de novo.
            </p>
          </motion.div>

          <div className="flex flex-col gap-4">
            <MarqueeRow logos={logosRow1} direction="left" durationDesktop={40} durationMobile={25} />
            <MarqueeRow logos={logosRow2} direction="right" durationDesktop={45} durationMobile={30} />
          </div>
        </section>

        {/* ══════════════════════════════════════════════
            SECTION 7 — CTA FINAL
            ══════════════════════════════════════════════ */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease }}
          viewport={{ once: true, margin: "-100px" }}
          className="about-cta-section"
        >
          <div className="about-cta-light" style={{ top: "15%", left: "10%" }} />
          <div className="about-cta-light" style={{ top: "60%", right: "8%" }} />
          <div className="about-cta-light" style={{ bottom: "20%", left: "15%" }} />
          <div className="about-cta-light" style={{ top: "25%", right: "20%" }} />

          <div className="about-cta-content">
            <span className="about-eyebrow" style={{ marginBottom: 16, display: "block" }}>
              PRONTO PARA COMEÇAR?
            </span>
            <h2 className="about-cta-headline">
              Vamos construir o próximo
              <br />
              <span className="text-gradient">case de sucesso juntos?</span>
            </h2>
            <p className="about-cta-subhead">
              Conta o que você precisa. Em 24h você recebe uma análise estratégica
              gratuita do seu projeto.
            </p>
            <a
              href="https://api.whatsapp.com/send?phone=5548991227776"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Falar com a Freela In Home no WhatsApp"
              className="about-cta-btn"
            >
              <MessageCircle size={18} aria-hidden="true" />
              Vamos Conversar?
            </a>
          </div>
        </motion.section>

      </div>
    </div>
  );
}
