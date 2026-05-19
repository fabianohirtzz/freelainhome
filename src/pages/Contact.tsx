import { useState } from "react";
import { motion } from "motion/react";
import { Send, MapPin, Clock, MessageCircle, Instagram, CheckCircle, Loader2 } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    whatsapp: "",
    company: "",
    project: "Institucional",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (formData.name.trim().length < 2) newErrors.name = "Nome deve ter pelo menos 2 caracteres.";
    if (!/^\S+@\S+\.\S+$/.test(formData.email)) newErrors.email = "Insira um e-mail válido.";
    const digitsOnly = formData.whatsapp.replace(/\D/g, "");
    if (digitsOnly.length < 10) newErrors.whatsapp = "Insira um WhatsApp válido (mín. 10 dígitos).";
    if (!formData.project) newErrors.project = "Selecione o tipo de projeto.";
    if (formData.message.trim().length < 10) newErrors.message = "Mensagem deve ter pelo menos 10 caracteres.";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    
    setIsSubmitting(true);
    try {
      const response = await fetch("https://formsubmit.co/ajax/contato@freelainhome.com.br", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify({
          _subject: "Novo contato - Freela In Home",
          _template: "table",
          Nome: formData.name,
          Email: formData.email,
          WhatsApp: formData.whatsapp,
          Empresa: formData.company || "Não informado",
          Projeto: formData.project,
          Mensagem: formData.message,
        }),
      });

      if (response.ok) {
        setIsSuccess(true);
      } else {
        alert("Ocorreu um erro ao enviar. Tente novamente mais tarde.");
      }
    } catch (error) {
      alert("Erro de conexão. Verifique sua internet e tente novamente.");
    } finally {
      setIsSubmitting(false);
    }
  };

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
          {/* Form Area */}
          <div className="bg-bg-secondary p-8 md:p-12 rounded-[40px] border border-border-subtle">
            {isSuccess ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-10">
                <CheckCircle size={48} className="text-brand-cyan mb-6" />
                <h3 className="text-2xl font-bold text-white mb-4">Mensagem enviada com sucesso!</h3>
                <p className="text-text-secondary mb-8 leading-relaxed max-w-sm">
                  Em até 24 horas você receberá uma análise estratégica gratuita do seu projeto no e-mail informado.
                </p>
                <button 
                  onClick={() => {
                    setIsSuccess(false);
                    setFormData({ ...formData, message: "" });
                  }}
                  className="bg-transparent border border-border-subtle px-6 py-3 rounded-full text-white font-medium hover:border-brand-cyan transition-colors"
                >
                  Enviar outra mensagem
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-text-muted">Nome completo</label>
                    <input 
                      type="text" 
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className={`w-full bg-black border ${errors.name ? 'border-[#FF3B3B]' : 'border-border-subtle'} rounded-xl px-4 py-3 outline-hidden focus:border-brand-cyan transition-colors`} 
                      placeholder="Seu nome" 
                    />
                    {errors.name && <p className="text-[#FF3B3B] text-xs mt-1">{errors.name}</p>}
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-text-muted">E-mail</label>
                    <input 
                      type="email" 
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className={`w-full bg-black border ${errors.email ? 'border-[#FF3B3B]' : 'border-border-subtle'} rounded-xl px-4 py-3 outline-hidden focus:border-brand-cyan transition-colors`} 
                      placeholder="seu@email.com" 
                    />
                    {errors.email && <p className="text-[#FF3B3B] text-xs mt-1">{errors.email}</p>}
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-text-muted">WhatsApp</label>
                    <input 
                      type="text" 
                      value={formData.whatsapp}
                      onChange={(e) => setFormData({...formData, whatsapp: e.target.value})}
                      className={`w-full bg-black border ${errors.whatsapp ? 'border-[#FF3B3B]' : 'border-border-subtle'} rounded-xl px-4 py-3 outline-hidden focus:border-brand-cyan transition-colors`} 
                      placeholder="(00) 00000-0000" 
                    />
                    {errors.whatsapp && <p className="text-[#FF3B3B] text-xs mt-1">{errors.whatsapp}</p>}
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-text-muted">Empresa (opcional)</label>
                    <input 
                      type="text" 
                      value={formData.company}
                      onChange={(e) => setFormData({...formData, company: e.target.value})}
                      className="w-full bg-black border border-border-subtle rounded-xl px-4 py-3 outline-hidden focus:border-brand-cyan transition-colors" 
                      placeholder="Nome da empresa" 
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-text-muted">Tipo de projeto</label>
                  <select 
                    value={formData.project}
                    onChange={(e) => setFormData({...formData, project: e.target.value})}
                    className={`w-full bg-black border ${errors.project ? 'border-[#FF3B3B]' : 'border-border-subtle'} rounded-xl px-4 py-3 outline-hidden focus:border-brand-cyan transition-colors appearance-none`}
                  >
                    <option value="Institucional">Institucional</option>
                    <option value="Landing Page">Landing Page</option>
                    <option value="E-commerce">E-commerce</option>
                    <option value="Web App">Web App</option>
                    <option value="Outro">Outro</option>
                  </select>
                  {errors.project && <p className="text-[#FF3B3B] text-xs mt-1">{errors.project}</p>}
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-text-muted">Conte sobre o projeto</label>
                  <textarea 
                    rows={4} 
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className={`w-full bg-black border ${errors.message ? 'border-[#FF3B3B]' : 'border-border-subtle'} rounded-xl px-4 py-3 outline-hidden focus:border-brand-cyan transition-colors`} 
                    placeholder="Descreva seus objetivos..."
                  ></textarea>
                  {errors.message && <p className="text-[#FF3B3B] text-xs mt-1">{errors.message}</p>}
                </div>
                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient py-5 rounded-2xl font-bold text-lg flex items-center justify-center gap-3 hover:glow-cyan transition-all disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>Enviando... <Loader2 size={20} className="animate-spin" /></>
                  ) : (
                    <>Enviar Mensagem <Send size={20} /></>
                  )}
                </button>
              </form>
            )}
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
                    Instagram
                  </div>
                  <div className="flex gap-4">
                    <a href="https://www.instagram.com/freelainhome" target="_blank" rel="noopener noreferrer" aria-label="Siga a Freela In Home no Instagram">
                      <Instagram size={20} className="text-text-secondary hover:text-brand-cyan transition-colors cursor-pointer" />
                    </a>
                  </div>
               </div>
            </div>

            {/* Map */}
            <div className="flex-1 min-h-[300px] md:min-h-[400px] border border-[#1f1f1f] rounded-2xl relative overflow-hidden group">
               <style>{`
                 .google-maps-iframe {
                   filter: invert(0.9) hue-rotate(180deg) brightness(0.95) contrast(0.9);
                   transition: filter 0.4s ease;
                 }
                 .google-maps-iframe:hover {
                   filter: invert(0) hue-rotate(0deg) brightness(1) contrast(1);
                 }
               `}</style>
               <iframe
                 src="https://www.google.com/maps?q=-28.44495311649932,-49.19242232660007&hl=pt-BR&z=15&output=embed"
                 width="100%"
                 height="100%"
                 style={{ border: 0 }}
                 loading="lazy"
                 referrerPolicy="no-referrer-when-downgrade"
                 title="Localização Freela In Home - Pedras Grandes, SC"
                 className="google-maps-iframe absolute inset-0 w-full h-full"
               ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
