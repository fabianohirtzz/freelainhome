import { Helmet } from "react-helmet-async";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { 
  MessageCircle, 
  Briefcase, 
  Rocket, 
  FileText, 
  Star, 
  ArrowRight, 
  Instagram 
} from "lucide-react";

export default function BioLink() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.5,
      }
    }
  };

  // Background stars
  const stars = Array.from({ length: 15 }).map((_, i) => ({
    id: i,
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    animationDelay: `${Math.random() * 6}s`,
    animationDuration: `${4 + Math.random() * 2}s`
  }));

  return (
    <>
      <Helmet>
        <title>Freela In Home — Links</title>
        <meta name="description" content="Sites que impressionam e convertem. 13 anos, 150+ projetos." />
        <meta name="robots" content="noindex, nofollow" />
        <link rel="canonical" href="https://freelainhome.com.br/link" />
      </Helmet>

      {/* Background with stars effect */}
      <style>
        {`
          @keyframes star-pulse {
            0%, 100% { opacity: 0.1; }
            50% { opacity: 0.3; }
          }
        `}
      </style>
      
      <div className="fixed inset-0 z-0 bg-black pointer-events-none">
        {stars.map((star) => (
          <div
            key={star.id}
            className="absolute bg-white rounded-full"
            style={{
              width: Math.random() > 0.5 ? '2px' : '1px',
              height: Math.random() > 0.5 ? '2px' : '1px',
              top: star.top,
              left: star.left,
              animation: `star-pulse ${star.animationDuration} infinite ${star.animationDelay}`,
            }}
          />
        ))}
      </div>

      <div className="min-h-screen bg-black flex flex-col items-center relative z-10 w-full font-sans">
        {/* Container Principal */}
        <div className="w-full max-w-[480px] px-6 md:px-12 pt-10 pb-8 flex flex-col items-center">
          
          {/* Logo Freela In Home */}
          <motion.img 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            src="/images/logo-horizontal.png" 
            alt="Freela In Home" 
            className="w-[180px] md:w-[200px] mb-8"
          />

          {/* Foto do Fabiano */}
          <motion.img 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            src="/images/fabiano-hirtz.jpg" 
            alt="Fabiano Hirtz" 
            className="w-24 h-24 rounded-full border-2 border-[#00BFFF] shadow-[0_0_24px_rgba(0,191,255,0.4)] object-cover mb-4"
          />

          {/* Nome e Cargo */}
          <div className="text-center mb-6">
            <h1 className="text-white font-bold text-[18px] mb-1">Fabiano Hirtz</h1>
            <p className="text-[#a1a1aa] font-normal text-[13px]">Fundador · Freela In Home</p>
          </div>

          {/* Selo do Google */}
          <motion.a 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            href="https://g.page/r/CQBhVD9tp10bEAE/review"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-[10px] px-4 py-2 bg-[#0a0a0a] border border-[#00BFFF] rounded-full shadow-[0_0_16px_rgba(0,191,255,0.25)] hover:shadow-[0_0_24px_rgba(0,191,255,0.4)] hover:scale-[1.02] transition-all duration-300 mb-7"
            aria-label="Selo de avaliação Google: 5 estrelas"
          >
            <div className="font-bold text-[14px] flex items-center" style={{ fontFamily: "'Product Sans', 'Arial', sans-serif" }}>
              <span className="text-[#4285F4]">G</span>
              <span className="text-[#EA4335]">o</span>
              <span className="text-[#FBBC05]">o</span>
              <span className="text-[#4285F4]">g</span>
              <span className="text-[#34A853]">l</span>
              <span className="text-[#EA4335]">e</span>
            </div>
            
            <div className="w-[1px] h-[14px] bg-[#1f1f1f]"></div>
            
            <div className="text-[#FBBC05] text-[13px] tracking-[-1px]">★★★★★</div>
            
            <div className="text-white font-semibold text-[13px]">5,0</div>
          </motion.a>

          {/* Headline Principal */}
          <div className="text-center mb-2.5">
            <h2 className="text-white font-extrabold text-[26px] md:text-[28px] leading-[1.2] tracking-[-0.02em]">
              Sites que impressionam.
            </h2>
            <h2 className="text-[#00BFFF] font-extrabold text-[26px] md:text-[28px] leading-[1.2] tracking-[-0.02em]">
              E convertem.
            </h2>
          </div>

          {/* Prova Social Condensada */}
          <div className="text-[#a1a1aa] font-medium text-[12px] text-center mb-9">
            13 anos · 150+ projetos entregues
          </div>

          {/* Botões */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="w-full flex flex-col gap-3 max-w-[420px]"
          >
            {/* Botão 1 - Diagnóstico */}
            <ButtonAnchor 
              href="https://api.whatsapp.com/send?phone=5548991227776"
              icon={MessageCircle}
              title="Diagnóstico gratuito"
              subtitle="Em 24h você recebe análise do seu projeto"
              dataLinkId="whatsapp-diagnostico"
              ariaLabel="Solicitar diagnóstico gratuito via WhatsApp"
              isHighlight={true}
            />

            {/* Botão 2 - Portfólio */}
            <ButtonLink 
              to="/portfolio"
              icon={Briefcase}
              title="Ver portfólio"
              subtitle="22 projetos selecionados de 150+ entregues"
              dataLinkId="portfolio"
              ariaLabel="Ver portfólio de projetos"
            />

            {/* Botão 3 - Sobre */}
            <ButtonLink 
              to="/sobre"
              icon={Rocket}
              title="Conhecer a Freela In Home"
              subtitle="Quem somos, manifesto e processo"
              dataLinkId="sobre"
              ariaLabel="Conhecer a Freela In Home"
            />

            {/* Botão 4 - Orçamento */}
            <ButtonLink 
              to="/contato"
              icon={FileText}
              title="Solicitar orçamento"
              subtitle="Formulário com análise estratégica gratuita"
              dataLinkId="contato"
              ariaLabel="Solicitar orçamento de projeto"
            />

            {/* Botão 5 - Google Reviews */}
            <ButtonAnchor 
              href="https://g.page/r/CQBhVD9tp10bEAE/review"
              icon={Star}
              title="Ver avaliações no Google"
              subtitle="5,0 estrelas no Google"
              dataLinkId="google-reviews"
              ariaLabel="Ver avaliações da Freela In Home no Google"
            />
          </motion.div>

          {/* Rodapé da Página */}
          <div className="mt-12 flex flex-col items-center">
            <span className="font-medium text-[11px] uppercase tracking-[0.15em] text-[#6b7280] mb-4 text-center">
              SIGA NA REDE
            </span>
            
            <a 
              href="https://www.instagram.com/freelainhome"
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 rounded-full border border-[#1f1f1f] bg-transparent flex items-center justify-center text-[#a1a1aa] hover:border-[#00BFFF] hover:text-[#00BFFF] hover:scale-110 hover:shadow-[0_0_16px_rgba(0,191,255,0.3)] transition-all duration-300"
              aria-label="Instagram da Freela In Home"
            >
              <Instagram size={22} />
            </a>

            <div className="h-10"></div>
            
            <span className="font-normal text-[11px] text-[#6b7280] text-center">
              © 2026 Freela In Home
            </span>
          </div>

        </div>
      </div>
    </>
  );
}

// Helper components for buttons
function ButtonLink({ to, icon: Icon, title, subtitle, dataLinkId, ariaLabel }: any) {
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <motion.div variants={itemVariants} className="w-full">
      <Link
        to={to}
        data-link-id={dataLinkId}
        aria-label={ariaLabel}
        className="group w-full p-4 md:px-[18px] md:py-4 bg-[#0a0a0a] border border-[#1f1f1f] rounded-xl flex items-center gap-[14px] cursor-pointer no-underline transition-all duration-300 hover:border-[#00BFFF] hover:bg-[#111111] hover:shadow-[0_0_24px_rgba(0,191,255,0.15)]"
      >
        <Icon size={24} className="text-[#00BFFF] shrink-0 transition-transform duration-300 group-hover:scale-110" />
        <div className="flex flex-col flex-1">
          <span className="text-white font-semibold text-[15px] leading-[1.3]">{title}</span>
          <span className="text-[#6b7280] font-normal text-[12px] mt-[2px]">{subtitle}</span>
        </div>
        <ArrowRight size={18} className="text-[#6b7280] shrink-0 transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#00BFFF]" />
      </Link>
    </motion.div>
  );
}

function ButtonAnchor({ href, icon: Icon, title, subtitle, dataLinkId, ariaLabel, isHighlight }: any) {
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] }
    }
  };

  if (isHighlight) {
    return (
      <motion.div variants={itemVariants} className="w-full">
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          data-link-id={dataLinkId}
          aria-label={ariaLabel}
          className="w-full p-4 md:px-[18px] md:py-4 rounded-xl flex items-center gap-[14px] cursor-pointer no-underline transition-all duration-300"
          style={{
            background: "linear-gradient(135deg, #00BFFF 0%, #0066FF 100%)",
            boxShadow: "0 0 24px rgba(0,191,255,0.4)",
            border: "none",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.boxShadow = "0 0 32px rgba(0,191,255,0.6)";
            e.currentTarget.style.transform = "scale(1.01)";
            e.currentTarget.style.filter = "brightness(110%)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.boxShadow = "0 0 24px rgba(0,191,255,0.4)";
            e.currentTarget.style.transform = "scale(1)";
            e.currentTarget.style.filter = "brightness(100%)";
          }}
        >
          <Icon size={24} color="#ffffff" className="shrink-0" />
          <div className="flex flex-col flex-1">
            <span className="text-white font-semibold text-[15px] leading-[1.3]">{title}</span>
            <span className="text-white/85 font-normal text-[12px] mt-[2px]">{subtitle}</span>
          </div>
          <ArrowRight size={18} color="#ffffff" className="shrink-0" />
        </a>
      </motion.div>
    );
  }

  return (
    <motion.div variants={itemVariants} className="w-full">
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        data-link-id={dataLinkId}
        aria-label={ariaLabel}
        className="group w-full p-4 md:px-[18px] md:py-4 bg-[#0a0a0a] border border-[#1f1f1f] rounded-xl flex items-center gap-[14px] cursor-pointer no-underline transition-all duration-300 hover:border-[#00BFFF] hover:bg-[#111111] hover:shadow-[0_0_24px_rgba(0,191,255,0.15)]"
      >
        <Icon size={24} className="text-[#00BFFF] shrink-0 transition-transform duration-300 group-hover:scale-110" />
        <div className="flex flex-col flex-1">
          <span className="text-white font-semibold text-[15px] leading-[1.3]">{title}</span>
          <span className="text-[#6b7280] font-normal text-[12px] mt-[2px]">{subtitle}</span>
        </div>
        <ArrowRight size={18} className="text-[#6b7280] shrink-0 transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#00BFFF]" />
      </a>
    </motion.div>
  );
}
