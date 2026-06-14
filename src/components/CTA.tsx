import { Link } from "@tanstack/react-router";

const WHATSAPP = "5511940319914";

export function CTASection() {
  const url = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent("Olá! Gostaria de solicitar um orçamento.")}`;
  return (
    <section className="relative overflow-hidden bg-brand-navy text-white">
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top_right,var(--brand-orange),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-6 py-16 text-center">
        <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight">Pronto para sua próxima obra?</h2>
        <p className="mt-3 text-white/80 max-w-2xl mx-auto">
          Solicite um orçamento sem compromisso. Nossa equipe técnica responde em poucas horas.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
          <Link to="/contato" className="inline-flex items-center justify-center rounded-md bg-brand-orange px-6 py-3 font-bold uppercase tracking-wide text-white hover:bg-brand-orange-dark transition-colors">
            Solicitar Orçamento
          </Link>
          <a href={url} target="_blank" rel="noopener" className="inline-flex items-center justify-center rounded-md border-2 border-white/30 px-6 py-3 font-bold uppercase tracking-wide text-white hover:bg-white/10 transition-colors">
            Falar no WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

export function PageHeader({ eyebrow, title, description }: { eyebrow?: string; title: string; description?: string }) {
  return (
    <section className="bg-brand-navy text-white">
      <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">
        {eyebrow && <p className="text-brand-orange font-bold uppercase tracking-widest text-xs mb-3">{eyebrow}</p>}
        <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tight">{title}</h1>
        {description && <p className="mt-4 max-w-3xl text-white/80 text-lg">{description}</p>}
      </div>
    </section>
  );
}
