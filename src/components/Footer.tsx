import { Link } from "react-router-dom";
import { Instagram, Linkedin, Youtube, Facebook } from "lucide-react";

const footerLinks = [
  {
    title: "Serviços",
    links: [
      { name: "Institucional", path: "/servicos" },
      { name: "Landing Page", path: "/servicos" },
      { name: "E-commerce", path: "/servicos" },
      { name: "Web App", path: "/servicos" },
    ],
  },
  {
    title: "Empresa",
    links: [
      { name: "Sobre", path: "/sobre" },
      { name: "Processo", path: "/processo" },
      { name: "Portfólio", path: "/portfolio" },
    ],
  },
  {
    title: "Contato",
    links: [
      { name: "WhatsApp", path: "https://wa.me/5548991227776" },
      { name: "E-mail", path: "mailto:contato@freelainhome.com.br" },
      { name: "Localização", path: "/contato" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-bg-secondary border-t border-border-subtle pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center font-extrabold text-2xl tracking-tighter mb-6">
              <span className="text-white">FREELA</span>
              <span className="mx-1 px-1.5 py-0.5 border-2 border-brand-cyan text-brand-cyan rounded">IN</span>
              <span className="text-white">HOME</span>
            </Link>
            <p className="text-text-secondary max-w-sm mb-8 leading-relaxed">
              Desenvolvimento web premium para empresas que querem resultado. Sites que não só impressionam, convertem.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-border-subtle flex items-center justify-center text-text-secondary hover:border-brand-cyan hover:text-brand-cyan transition-all">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-border-subtle flex items-center justify-center text-text-secondary hover:border-brand-cyan hover:text-brand-cyan transition-all">
                <Linkedin size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-border-subtle flex items-center justify-center text-text-secondary hover:border-brand-cyan hover:text-brand-cyan transition-all">
                <Youtube size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-border-subtle flex items-center justify-center text-text-secondary hover:border-brand-cyan hover:text-brand-cyan transition-all">
                <Facebook size={18} />
              </a>
            </div>
          </div>

          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="font-bold mb-6 text-white text-sm uppercase tracking-widest">{section.title}</h4>
              <ul className="space-y-4">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.path}
                      className="text-text-secondary hover:text-brand-cyan transition-colors text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-border-subtle flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-text-muted text-xs">
            © {new Date().getFullYear()} Freela In Home · Desenvolvimento Web Premium
          </p>
          <div className="flex gap-6 text-text-muted text-xs">
            <a href="#" className="hover:text-white transition-colors">Política de Privacidade</a>
            <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
