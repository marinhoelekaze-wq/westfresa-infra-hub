import { createFileRoute } from "@tanstack/react-router";
import { Wrench, Settings2, TrendingUp, DollarSign, Truck, ShieldCheck } from "lucide-react";
import { CTASection, PageHeader } from "@/components/CTA";

const machineCloseup = "/machine-closeup.jpg";
const millingAction = "/milling-action.jpg";
const transport = "/transport.jpg";

const WHATSAPP_URL = `https://wa.me/5511999999999?text=${encodeURIComponent("Olá! Gostaria de informações sobre locação de máquinas.")}`;

export const Route = createFileRoute("/locacao-de-maquinas")({
  head: () => ({
    meta: [
      { title: "Locação de Máquinas e Equipamentos | West Fresa" },
      { name: "description", content: "Locação de fresadoras e equipamentos para infraestrutura. Frota Wirtgen moderna." },
      { property: "og:title", content: "Locação de Máquinas | West Fresa" },
      { property: "og:image", content: machineCloseup },
    ],
    links: [{ rel: "canonical", href: "/locacao-de-maquinas" }],
  }),
  component: LocacaoPage,
});

const equipment = [
  { name: "Wirtgen W 100 Fi", spec: "Fresadora compacta", desc: "Ideal para vias urbanas, estacionamentos e obras de médio porte. Largura de corte 1,00 m.", img: machineCloseup },
  { name: "Wirtgen W 200 Fi", spec: "Fresadora de grande porte", desc: "Alta produtividade para rodovias e obras de grande extensão. Largura de corte 2,00 m.", img: millingAction },
  { name: "Suporte Logístico", spec: "Caminhões e pranchas", desc: "Transporte especializado para mobilização dos equipamentos até a obra.", img: transport },
];

const benefits = [
  { icon: DollarSign, title: "Redução de custos", desc: "Elimine investimentos em compra, depreciação e armazenamento de equipamentos." },
  { icon: Wrench, title: "Manutenção inclusa", desc: "Equipamentos sempre prontos, com manutenção preventiva rigorosa." },
  { icon: TrendingUp, title: "Alta produtividade", desc: "Frota moderna com tecnologia Wirtgen de última geração." },
  { icon: Settings2, title: "Flexibilidade", desc: "Locação sob medida — diária, semanal, mensal ou por obra." },
  { icon: Truck, title: "Logística completa", desc: "Cuidamos do transporte, mobilização e desmobilização do equipamento." },
  { icon: ShieldCheck, title: "Operadores certificados", desc: "Equipe técnica especializada acompanha a operação quando necessário." },
];

function LocacaoPage() {
  return (
    <>
      <PageHeader eyebrow="Equipamentos para infraestrutura" title="Locação de Máquinas e Equipamentos" description="Frota Wirtgen moderna com manutenção preventiva, operadores certificados e suporte técnico completo." />
      <section className="py-20 bg-background">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-12">
            <p className="text-brand-orange font-bold uppercase tracking-widest text-xs mb-3">Equipamentos disponíveis</p>
            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-brand-navy">Nossa Frota</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {equipment.map((e) => (
              <div key={e.name} className="group bg-white rounded-2xl overflow-hidden shadow-md border border-border hover:shadow-2xl hover:-translate-y-1 transition-all">
                <div className="aspect-[4/3] overflow-hidden bg-brand-navy">
                  <img src={e.img} alt={e.name} className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6">
                  <p className="text-xs uppercase font-bold tracking-widest text-brand-orange">{e.spec}</p>
                  <h3 className="mt-1 text-xl font-black text-brand-navy uppercase">{e.name}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{e.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20 bg-secondary">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-12">
            <p className="text-brand-orange font-bold uppercase tracking-widest text-xs mb-3">Por que locar</p>
            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-brand-navy">Benefícios para Construtoras e Empreiteiras</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {benefits.map((b) => (
              <div key={b.title} className="bg-white rounded-xl p-6 shadow-sm border border-border hover:shadow-lg transition">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-brand-orange/10 text-brand-orange mb-4">
                  <b.icon className="h-6 w-6" />
                </div>
                <h3 className="font-bold uppercase text-brand-navy">{b.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{b.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener" className="inline-flex items-center justify-center rounded-md bg-brand-orange px-8 py-4 font-bold uppercase tracking-wide text-white shadow-lg hover:bg-brand-orange-dark transition">
              Falar no WhatsApp
            </a>
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}
