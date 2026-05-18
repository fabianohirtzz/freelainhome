import { motion } from "motion/react";
import { Send, MapPin, Clock, MessageCircle, Instagram, Linkedin, Youtube, Facebook } from "lucide-react";

export default function Contact() {
  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mb-16">
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-8">
            Conte sobre <br />
            <span className="text-gradient">seu projeto.</span>
          </h1>
          <p className="text-text-secondary text-xl">
            Preencha o formulário abaixo e em até 24 horas você recebe uma análise estratégica gratuita, com cronograma e proposta personalizada.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Form */}
          <div className="bg-bg-secondary p-8 md:p-12 rounded-[40px] border border-border-subtle">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-text-muted">Nome completo</label>
                  <input type="text" className="w-full bg-black border border-border-subtle rounded-xl px-4 py-3 outline-hidden focus:border-brand-cyan transition-colors" placeholder="Seu nome" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-text-muted">E-mail</label>
                  <input type="email" className="w-full bg-black border border-border-subtle rounded-xl px-4 py-3 outline-hidden focus:border-brand-cyan transition-colors" placeholder="seu@email.com" />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-text-muted">WhatsApp</label>
                  <input type="text" className="w-full bg-black border border-border-subtle rounded-xl px-4 py-3 outline-hidden focus:border-brand-cyan transition-colors" placeholder="(00) 00000-0000" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-text-muted">Empresa</label>
                  <input type="text" className="w-full bg-black border border-border-subtle rounded-xl px-4 py-3 outline-hidden focus:border-brand-cyan transition-colors" placeholder="Nome da empresa" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-text-muted">Tipo de projeto</label>
                <select className="w-full bg-black border border-border-subtle rounded-xl px-4 py-3 outline-hidden focus:border-brand-cyan transition-colors appearance-none">
                  <option>Institucional</option>
                  <option>Landing Page</option>
                  <option>E-commerce</option>
                  <option>Web App</option>
                  <option>Outro</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-text-muted">Conte sobre o projeto</label>
                <textarea rows={4} className="w-full bg-black border border-border-subtle rounded-xl px-4 py-3 outline-hidden focus:border-brand-cyan transition-colors" placeholder="Descreva seus objetivos..."></textarea>
              </div>
              <button className="w-full bg-gradient py-5 rounded-2xl font-bold text-lg flex items-center justify-center gap-3 hover:glow-cyan transition-all">
                Enviar Mensagem <Send size={20} />
              </button>
            </form>
          </div>

          {/* Info */}
          <div className="flex flex-col gap-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
               <div className="space-y-4">
                  <div className="flex items-center gap-3 text-brand-cyan font-bold uppercase tracking-widest text-xs">
                    <MapPin size={16} /> Localização
                  </div>
                  <p className="text-text-secondary leading-relaxed">Pedras Grandes - SC<br />Atendimento Brasil e Internacional</p>
               </div>
               <div className="space-y-4">
                  <div className="flex items-center gap-3 text-brand-cyan font-bold uppercase tracking-widest text-xs">
                    <Clock size={16} /> Horário
                  </div>
                  <p className="text-text-secondary leading-relaxed">Segunda a sexta<br />07h às 19h</p>
               </div>
               <div className="space-y-4">
                  <div className="flex items-center gap-3 text-brand-cyan font-bold uppercase tracking-widest text-xs">
                    <MessageCircle size={16} /> Contato direto
                  </div>
                  <p className="text-text-secondary leading-relaxed">
                    (48) 99122-7776<br /> 
                    contato@freelainhome.com.br
                  </p>
               </div>
               <div className="space-y-4">
                  <div className="flex items-center gap-3 text-brand-cyan font-bold uppercase tracking-widest text-xs">
                    Redes Sociais
                  </div>
                  <div className="flex gap-4">
                    <Instagram size={20} className="text-text-secondary hover:text-white cursor-pointer" />
                    <Linkedin size={20} className="text-text-secondary hover:text-white cursor-pointer" />
                    <Youtube size={20} className="text-text-secondary hover:text-white cursor-pointer" />
                    <Facebook size={20} className="text-text-secondary hover:text-white cursor-pointer" />
                  </div>
               </div>
            </div>

            {/* Map Placeholder */}
            <div className="flex-1 min-h-[300px] bg-bg-tertiary rounded-[40px] border border-border-subtle relative overflow-hidden">
               <div className="absolute inset-0 flex items-center justify-center text-text-muted font-bold uppercase tracking-widest text-sm opacity-50">
                  Google Maps (Pedras Grandes, SC)
               </div>
               {/* In a real scenario, use an iframe here */}
               <div className="w-full h-full bg-[url('https://maps.googleapis.com/maps/api/staticmap?center=-28.4371,-49.1916&zoom=13&size=600x400&maptype=roadmap&style=feature:all|element:all|saturation:-100|lightness:-50&key=YOUR_KEY')] bg-cover bg-center grayscale opacity-30" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
