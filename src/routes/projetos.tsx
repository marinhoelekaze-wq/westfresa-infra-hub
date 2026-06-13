import { createFileRoute } from "@tanstack/react-router";
import { Quote, MapPin, Calendar } from "lucide-react";
import { CTASection, PageHeader } from "@/components/CTA";
import milling from "@/assets/milling.jpg.asset.json";
import millingAction from "@/assets/milling-action.jpg.asset.json";
import machineCloseup from "@/assets/machine-closeup.jpg.asset.json";
import transport from "@/assets/transport.jpg.asset.json";
import loading from "@/assets/loading.jpg.asset.json";

export const Route = createFileRoute("/projetos")({
  head: () => ({
    meta: [
      { title: "Projetos Executados | West Fresa" },
      { name: "description", content: "Conheça os projetos de fresagem asfáltica e locação de equipamentos executados pela West Fresa em todo o Brasil." },
      { property: "og:title", content: "Projetos Executados | West Fresa" },
      { property: "og:description", content: "Galeria de obras realizadas pela West Fresa." },
      { property: "og:image", content: millingAction.url },
    ],
    links: [{ rel: "canonical", href: "/projetos" }],
  }),
  component: ProjetosPage,
});

const projects = [
  { img: millingAction.url, title: "Recapeamento de Rodovia", location: "Interior de SP", year: "2025", scope: "Fresagem de 12 km de rodovia estadual" },
  { img: milling.url, title: "Pista Aeroportuária", location: "Centro-Oeste", year: "2024", scope: "Fresagem de precisão em pista de pouso" },
  { img: machineCloseup.url, title: "Via Urbana", location: "Capital", year: "2024", scope: "Fresagem e preparação para recapeamento" },
  { img: transport.url, title: "Obra Industrial", location: "Sul do país", year: "2024", scope: "Pátio logístico — 18.000 m²" },
  { img: loading.url, title: "Avenida Principal", location: "Zona urbana", year: "2023", scope: "Fresagem noturna com baixo impacto no tráfego" },
  { img: millingAction.url, title: "Corredor Logístico", location: "Rodovia BR", year: "2023", scope: "Recuperação de 25 km de via" },
];

const testimonials = [
  { name: "Carlos Mendonça", role: "Engenheiro de Obras • Construtora Nacional", text: "Equipe técnica de altíssimo nível. Cumpriram o prazo rigorosamente e a qualidade do serviço foi excepcional. Recomendo sem ressalvas." },
  { name: "Ana Paula Silva", role: "Gerente de Projetos • Empreiteira Regional", text: "A West Fresa nos atende há mais de 3 anos. Equipamentos modernos, segurança operacional impecável e atendimento ágil. Parceria fundamental." },
  { name: "Roberto Almeida", role: "Diretor Técnico • Infraestrutura Sul", text: "A locação com a West Fresa simplificou nossas operações. Manutenção em dia, operadores capacitados e suporte técnico sempre presente." },
];

function ProjetosPage() {
  return (
    <>
      <PageHeader
        eyebrow="Nosso portfólio"
        title="Projetos Executados"
        description="Conheça algumas obras realizadas pela West Fresa em rodovias, vias urbanas e instalações industriais em todo o Brasil."
      />

      <section className="py-20 bg-background">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((p) => (
              <article key={p.title} className="group bg-white rounded-2xl overflow-hidden shadow-md border border-border hover:shadow-2xl hover:-translate-y-1 transition-all">
                <div className="aspect-[4/3] overflow-hidden bg-brand-navy">
                  <img src={p.img} alt={p.title} className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-black text-brand-navy uppercase">{p.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{p.scope}</p>
                  <div className="mt-4 flex items-center gap-4 text-xs text-muted-foreground font-semibold uppercase tracking-wider">
                    <span className="flex items-center gap-1"><MapPin className="h-3.5 w-3.5 text-brand-orange" /> {p.location}</span>
                    <span className="flex items-center gap-1"><Calendar className="h-3.5 w-3.5 text-brand-orange" /> {p.year}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-12">
            <p className="text-brand-orange font-bold uppercase tracking-widest text-xs mb-3">Depoimentos</p>
            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-brand-navy">O Que Dizem Nossos Clientes</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-white rounded-2xl p-7 shadow-sm border border-border relative">
                <Quote className="h-8 w-8 text-brand-orange/30 absolute top-5 right-5" />
                <p className="text-foreground leading-relaxed italic">"{t.text}"</p>
                <div className="mt-6 pt-5 border-t border-border">
                  <div className="font-bold text-brand-navy">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
