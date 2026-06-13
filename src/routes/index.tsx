import { createFileRoute, Link } from "@tanstack/react-router";
import { Users, Wrench, Zap, ShieldCheck, Clock, Headphones, ArrowRight } from "lucide-react";
import { CTASection } from "@/components/CTA";
import milling from "@/assets/milling.jpg.asset.json";
import millingAction from "@/assets/milling-action.jpg.asset.json";
import machineCloseup from "@/assets/machine-closeup.jpg.asset.json";
import heroVideo from "@/assets/hero.mp4.asset.json";

const WHATSAPP_URL = `https://wa.me/5511999999999?text=${encodeURIComponent("Olá! Gostaria de solicitar um orçamento.")}`;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "West Fresa | Fresagem Asfáltica e Locação de Máquinas para Infraestrutura" },
      { name: "description", content: "Soluções eficientes em fresagem asfáltica e locação de equipamentos para infraestrutura. Equipe especializada, máquinas modernas e compromisso com prazos." },
      { property: "og:title", content: "West Fresa | Fresagem Asfáltica e Locação de Máquinas" },
      { property: "og:description", content: "Soluções eficientes, equipamentos modernos e equipe especializada para obras de todos os portes." },
      { property: "og:image", content: millingAction.url },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

const differentials = [
  { icon: Users, title: "Equipe Especializada", desc: "Operadores certificados com vasta experiência em fresagem e operação de equipamentos." },
  { icon: Wrench, title: "Equipamentos Modernos", desc: "Frota Wirtgen de última geração com manutenção preventiva rigorosa." },
  { icon: Zap, title: "Atendimento Ágil", desc: "Resposta rápida ao orçamento e mobilização eficiente para sua obra." },
  { icon: ShieldCheck, title: "Segurança Operacional", desc: "Protocolos NR rigorosos e equipe treinada em segurança do trabalho." },
  { icon: Clock, title: "Compromisso com Prazo", desc: "Planejamento detalhado e entregas dentro do cronograma acordado." },
  { icon: Headphones, title: "Suporte Técnico", desc: "Acompanhamento técnico durante toda a execução do serviço." },
];

function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-brand-navy-dark text-white">
        <div className="absolute inset-0">
          <img src={millingAction.url} alt="Fresadora em operação" className="h-full w-full object-cover opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-navy-dark via-brand-navy-dark/85 to-brand-navy-dark/40" />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 py-24 md:py-32">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-brand-orange/40 bg-brand-orange/10 px-4 py-1 text-xs font-bold uppercase tracking-widest text-brand-orange mb-6">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-orange" />
              Precisão e qualidade na infraestrutura
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight leading-[1.05]">
              Fresagem Asfáltica e <span className="text-brand-orange">Locação de Máquinas</span> para Infraestrutura
            </h1>
            <p className="mt-6 text-lg text-white/85 max-w-2xl">
              Soluções eficientes, equipamentos modernos e equipe especializada para atender obras de todos os portes.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Link to="/contato" className="inline-flex items-center justify-center gap-2 rounded-md bg-brand-orange px-7 py-4 font-bold uppercase tracking-wide text-white shadow-xl hover:bg-brand-orange-dark transition-all hover:translate-y-[-2px]">
                Solicitar Orçamento <ArrowRight className="h-4 w-4" />
              </Link>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener" className="inline-flex items-center justify-center gap-2 rounded-md bg-white/10 backdrop-blur border-2 border-white/30 px-7 py-4 font-bold uppercase tracking-wide text-white hover:bg-white/20 transition-all">
                Falar no WhatsApp
              </a>
            </div>
          </div>
        </div>
        {/* Stats strip */}
        <div className="relative border-t border-white/10 bg-brand-navy-dark/80 backdrop-blur">
          <div className="mx-auto max-w-7xl grid grid-cols-2 md:grid-cols-4 px-6 py-6 gap-4">
            {[
              { v: "+10", l: "Anos de mercado" },
              { v: "+500", l: "Obras realizadas" },
              { v: "24h", l: "Resposta a orçamentos" },
              { v: "100%", l: "Equipe certificada" },
            ].map((s) => (
              <div key={s.l} className="text-center md:text-left">
                <div className="text-2xl md:text-3xl font-black text-brand-orange">{s.v}</div>
                <div className="text-xs uppercase tracking-wider text-white/60">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sobre */}
      <section className="py-20 bg-background">
        <div className="mx-auto max-w-7xl px-6 grid gap-12 lg:grid-cols-2 items-center">
          <div>
            <p className="text-brand-orange font-bold uppercase tracking-widest text-xs mb-3">Sobre nós</p>
            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-brand-navy">Sobre a West Fresa</h2>
            <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
              <p>
                A <strong className="text-brand-navy">West Fresa</strong> é especializada em fresagem asfáltica e locação de máquinas e equipamentos para infraestrutura. Atendemos construtoras, empreiteiras e empresas de infraestrutura em todo o território nacional.
              </p>
              <p>
                Combinamos uma frota de equipamentos Wirtgen de última geração com uma equipe técnica altamente qualificada, garantindo precisão milimétrica, alta produtividade e segurança operacional em cada projeto.
              </p>
              <p>
                Nosso compromisso vai além da entrega: priorizamos qualidade, prazo e relacionamento de longo prazo com nossos clientes — características que nos consolidaram como referência no setor.
              </p>
            </div>
            <div className="mt-8 grid grid-cols-3 gap-4">
              {[
                { v: "Qualidade", d: "Padrão técnico elevado" },
                { v: "Segurança", d: "NR e ISO compliance" },
                { v: "Produtividade", d: "Alta performance" },
              ].map((b) => (
                <div key={b.v} className="border-l-4 border-brand-orange pl-3">
                  <div className="font-black text-brand-navy text-sm uppercase">{b.v}</div>
                  <div className="text-xs text-muted-foreground">{b.d}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-brand-orange/10 rounded-2xl -rotate-2" />
            <img src={machineCloseup.url} alt="Fresadora West Fresa W 100 Fi" className="relative rounded-2xl shadow-2xl object-cover aspect-[4/3] w-full" />
          </div>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="py-20 bg-secondary">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-12">
            <p className="text-brand-orange font-bold uppercase tracking-widest text-xs mb-3">Por que escolher</p>
            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-brand-navy">Nossos Diferenciais</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {differentials.map((d) => (
              <div key={d.title} className="group relative bg-white rounded-xl p-7 shadow-sm border border-border hover:shadow-xl hover:-translate-y-1 transition-all">
                <div className="absolute top-0 left-0 h-1 w-12 bg-brand-orange rounded-tr rounded-br group-hover:w-full transition-all duration-500" />
                <div className="inline-flex items-center justify-center h-12 w-12 rounded-lg bg-brand-navy text-brand-orange mb-4">
                  <d.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold text-brand-navy uppercase">{d.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{d.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services preview */}
      <section className="py-20 bg-background">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-12">
            <p className="text-brand-orange font-bold uppercase tracking-widest text-xs mb-3">Nossos serviços</p>
            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-brand-navy">O que oferecemos</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {[
              { img: milling.url, title: "Fresagem Asfáltica", desc: "Remoção controlada e precisa do pavimento asfáltico para recapeamentos e correções.", to: "/fresagem-asfaltica" as const },
              { img: machineCloseup.url, title: "Locação de Máquinas", desc: "Equipamentos modernos com manutenção preventiva para sua obra.", to: "/locacao-de-maquinas" as const },
            ].map((s) => (
              <Link key={s.title} to={s.to} className="group relative overflow-hidden rounded-2xl bg-brand-navy text-white shadow-lg hover:shadow-2xl transition-all">
                <div className="aspect-[16/10] overflow-hidden">
                  <img src={s.img} alt={s.title} className="h-full w-full object-cover opacity-70 group-hover:scale-105 group-hover:opacity-80 transition-all duration-500" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy-dark via-brand-navy-dark/50 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-7">
                  <h3 className="text-2xl font-black uppercase">{s.title}</h3>
                  <p className="mt-1 text-white/80 text-sm">{s.desc}</p>
                  <div className="mt-4 inline-flex items-center gap-2 text-brand-orange font-bold uppercase text-sm">
                    Saiba mais <ArrowRight className="h-4 w-4" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
