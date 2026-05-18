import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, ArrowRight } from "lucide-react";
import { cn } from "@/src/lib/utils";

const navLinks = [
  { name: "Início", path: "/" },
  { name: "Serviços", path: "/servicos" },
  { name: "Portfólio", path: "/portfolio" },
  { name: "Processo", path: "/processo" },
  { name: "Sobre", path: "/sobre" },
  { name: "Contato", path: "/contato" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
        scrolled
          ? "bg-black/80 backdrop-blur-md border-white/10 py-4"
          : "bg-transparent border-transparent py-6"
      )}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="flex items-center font-extrabold text-2xl tracking-tighter">
            <span className="text-white">FREELA</span>
            <span className="mx-1 px-1.5 py-0.5 border-2 border-brand-cyan text-brand-cyan rounded">IN</span>
            <span className="text-white">HOME</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                "text-sm font-medium transition-colors hover:text-brand-cyan",
                location.pathname === link.path ? "text-brand-cyan" : "text-text-secondary"
              )}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/contato"
            className="bg-gradient px-6 py-2.5 rounded-full text-sm font-bold flex items-center gap-2 hover:glow-cyan transition-all"
          >
            Orçamento <ArrowRight size={16} />
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 top-[73px] bg-black z-40 lg:hidden flex flex-col p-6 gap-6"
          >
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "text-2xl font-bold tracking-tight",
                  location.pathname === link.path ? "text-brand-cyan" : "text-white"
                )}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contato"
              onClick={() => setIsOpen(false)}
              className="bg-gradient mt-auto px-6 py-4 rounded-xl text-center font-bold flex items-center justify-center gap-2"
            >
              Solicitar Orçamento <ArrowRight size={20} />
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
