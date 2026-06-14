import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Phone, Mail, MapPin, MessageCircle, Send, CheckCircle2 } from "lucide-react";
import { PageHeader } from "@/components/CTA";
import { z } from "zod";

const WHATSAPP = "5511940319914";

export const Route = createFileRoute("/contato")({
  head: () => ({
    meta: [
      { title: "Contato | West Fresa" },
      { name: "description", content: "Solicite seu orçamento de fresagem asfáltica ou locação de máquinas. Atendimento ágil e equipe técnica especializada." },
      { property: "og:title", content: "Contato | West Fresa" },
      { property: "og:description", content: "Fale com a equipe West Fresa e solicite seu orçamento." },
    ],
    links: [{ rel: "canonical", href: "/contato" }],
  }),
  component: ContatoPage,
});

const schema = z.object({
  nome: z.string().trim().min(2, "Informe seu nome").max(100),
  empresa: z.string().trim().min(1, "Informe a empresa").max(120),
  cidade: z.string().trim().min(2, "Informe a cidade").max(80),
  telefone: z.string().trim().min(8, "Informe um telefone válido").max(20),
  email: z.string().trim().email("E-mail inválido").max(150),
  mensagem: z.string().trim().min(10, "Conte um pouco sobre sua demanda").max(1000),
});

function ContatoPage() {
  const [form, setForm] = useState({ nome: "", empresa: "", cidade: "", telefone: "", email: "", mensagem: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const r = schema.safeParse(form);
    if (!r.success) {
      const errs: Record<string, string> = {};
      r.error.issues.forEach((i) => { errs[i.path[0] as string] = i.message; });
      setErrors(errs);
      return;
    }
    setErrors({});
    // Send to WhatsApp
    const text = `Solicitação de Orçamento - West Fresa%0A%0A*Nome:* ${r.data.nome}%0A*Empresa:* ${r.data.empresa}%0A*Cidade:* ${r.data.cidade}%0A*Telefone:* ${r.data.telefone}%0A*E-mail:* ${r.data.email}%0A%0A*Mensagem:*%0A${encodeURIComponent(r.data.mensagem)}`;
    window.open(`https://wa.me/${WHATSAPP}?text=${text}`, "_blank");
    setSent(true);
    setForm({ nome: "", empresa: "", cidade: "", telefone: "", email: "", mensagem: "" });
  };

  const field = (name: keyof typeof form, label: string, type = "text") => (
    <div>
      <label className="block text-sm font-bold uppercase tracking-wide text-brand-navy mb-1.5">{label}</label>
      <input
        type={type}
        value={form[name]}
        onChange={(e) => setForm({ ...form, [name]: e.target.value })}
        className="w-full rounded-md border border-input bg-white px-4 py-3 text-sm focus:border-brand-orange focus:outline-none focus:ring-2 focus:ring-brand-orange/30 transition"
      />
      {errors[name] && <p className="mt-1 text-xs text-destructive">{errors[name]}</p>}
    </div>
  );

  return (
    <>
      <PageHeader
        eyebrow="Fale conosco"
        title="Solicite seu Orçamento"
        description="Preencha o formulário ou entre em contato pelos nossos canais. Respondemos em até 24h úteis."
      />

      <section className="py-20 bg-background">
        <div className="mx-auto max-w-7xl px-6 grid gap-10 lg:grid-cols-[1fr_1.5fr]">
          {/* Contact info */}
          <aside className="space-y-6">
            <div className="bg-brand-navy text-white rounded-2xl p-7 shadow-lg">
              <h3 className="text-xl font-black uppercase mb-5">Canais de Atendimento</h3>
              <ul className="space-y-5">
                <li className="flex items-start gap-3">
                  <div className="h-10 w-10 rounded-lg bg-brand-orange/20 text-brand-orange flex items-center justify-center shrink-0"><Phone className="h-5 w-5" /></div>
                  <div>
                    <div className="text-xs uppercase text-white/60 tracking-wider">Telefone</div>
                    <div className="font-bold">(11) 94031-9914</div>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="h-10 w-10 rounded-lg bg-brand-orange/20 text-brand-orange flex items-center justify-center shrink-0"><MessageCircle className="h-5 w-5" /></div>
                  <div>
                    <div className="text-xs uppercase text-white/60 tracking-wider">WhatsApp</div>
                    <a href={`https://wa.me/${WHATSAPP}`} target="_blank" rel="noopener" className="font-bold hover:text-brand-orange">(11) 94031-9914</a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="h-10 w-10 rounded-lg bg-brand-orange/20 text-brand-orange flex items-center justify-center shrink-0"><Mail className="h-5 w-5" /></div>
                  <div>
                    <div className="text-xs uppercase text-white/60 tracking-wider">E-mail</div>
                    <div className="font-bold break-all">contato@westfresa.com.br</div>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="h-10 w-10 rounded-lg bg-brand-orange/20 text-brand-orange flex items-center justify-center shrink-0"><MapPin className="h-5 w-5" /></div>
                  <div>
                    <div className="text-xs uppercase text-white/60 tracking-wider">Atendimento</div>
                    <div className="font-bold">Todo o Brasil</div>
                  </div>
                </li>
              </ul>
            </div>
            <div className="bg-brand-orange text-white rounded-2xl p-7 shadow-lg">
              <h3 className="text-lg font-black uppercase mb-2">Atendimento Comercial</h3>
              <p className="text-white/90 text-sm">Segunda a Sexta: 8h às 18h<br />Sábado: 8h às 12h</p>
            </div>
          </aside>

          {/* Form */}
          <div className="bg-white rounded-2xl p-6 md:p-10 shadow-xl border border-border">
            {sent ? (
              <div className="text-center py-16">
                <CheckCircle2 className="h-16 w-16 text-brand-orange mx-auto mb-4" />
                <h3 className="text-2xl font-black uppercase text-brand-navy">Mensagem enviada!</h3>
                <p className="mt-3 text-muted-foreground">Abrimos o WhatsApp para finalizar o envio. Em breve entraremos em contato.</p>
                <button onClick={() => setSent(false)} className="mt-6 inline-flex rounded-md bg-brand-navy px-5 py-3 text-sm font-bold uppercase text-white">Enviar outra mensagem</button>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="space-y-5">
                <h2 className="text-2xl font-black uppercase text-brand-navy">Formulário de Orçamento</h2>
                <div className="grid gap-5 md:grid-cols-2">
                  {field("nome", "Nome completo")}
                  {field("empresa", "Empresa")}
                  {field("cidade", "Cidade")}
                  {field("telefone", "Telefone", "tel")}
                </div>
                {field("email", "E-mail", "email")}
                <div>
                  <label className="block text-sm font-bold uppercase tracking-wide text-brand-navy mb-1.5">Mensagem</label>
                  <textarea
                    rows={5}
                    value={form.mensagem}
                    onChange={(e) => setForm({ ...form, mensagem: e.target.value })}
                    className="w-full rounded-md border border-input bg-white px-4 py-3 text-sm focus:border-brand-orange focus:outline-none focus:ring-2 focus:ring-brand-orange/30 transition resize-none"
                    placeholder="Descreva sua demanda, local da obra, metragem aproximada e prazo desejado."
                  />
                  {errors.mensagem && <p className="mt-1 text-xs text-destructive">{errors.mensagem}</p>}
                </div>
                <button type="submit" className="w-full inline-flex items-center justify-center gap-2 rounded-md bg-brand-orange px-7 py-4 font-bold uppercase tracking-wide text-white shadow-lg hover:bg-brand-orange-dark transition">
                  <Send className="h-4 w-4" /> Enviar Solicitação
                </button>
                <p className="text-xs text-muted-foreground text-center">Ao enviar, você concorda em ser contatado pela equipe West Fresa.</p>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
