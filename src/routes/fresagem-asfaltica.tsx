import { createFileRoute, Link } from "@tanstack/react-router";
import { CheckCircle2 } from "lucide-react";
import { CTASection, PageHeader } from "@/components/CTA";
import milling from "@/assets/fresagem-westfresa.jpg.asset.json";
import millingAction from "@/assets/milling-action.jpg.asset.json";
import millingOriginal from "@/assets/milling.jpg.asset.json";
import machineCloseup from "@/assets/machine-closeup.jpg.asset.json";
import transport from "@/assets/transport.jpg.asset.json";
import loading from "@/assets/loading.jpg.asset.json";

export const Route = createFileRoute("/fresagem-asfaltica")({
  head: () => ({
    meta: [
      { title: "Fresagem Asfáltica | West Fresa" },
      { name: "description", content: "Serviço de fresagem asfáltica com precisão milimétrica. Remoção controlada do pavimento para recapeamentos, correções e obras de infraestrutura." },
      { property: "og:title", content: "Fresagem Asfáltica | West Fresa" },
      { property: "og:description", content: "Remoção controlada do pavimento asfáltico com precisão milimétrica e alta produtividade." },
      { property: "og:image", content: milling.url },
    ],
    links: [{ rel: "canonical", href: "/fresagem-asfaltica" }],
  }),
  component: FresagemPage,
});

const advantages = [
  "Remoção controlada e precisa do pavimento",
  "Alta produtividade com mínima interferência no tráfego",
  "Recuperação do material fresado (RAP) para reaproveitamento",
  "Acabamento uniforme pronto para nova camada",
  "Corte vertical preciso em juntas e bordas",
  "Profundidade ajustável conforme o projeto",
  "Redução de resíduos e impacto ambiental",
  "Equipamentos Wirtgen W 100 Fi e W 200 Fi",
];

function FresagemPage() {
  return (
    <>
      <PageHeader
        eyebrow="Serviço especializado"
        title="Fresagem Asfáltica"
        description="Remoção controlada do pavimento asfáltico com equipamentos de última geração e equipe técnica especializada."
      />

      <section className="py-20 bg-background">
        <div className="mx-auto max-w-7xl px-6 grid gap-12 lg:grid-cols-2 items-center">
          <div>
            <h2 className="text-3xl font-black uppercase tracking-tight text-brand-navy">O que é a fresagem asfáltica?</h2>
            <div className="mt-5 space-y-4 text-muted-foreground leading-relaxed">
              <p>
                A fresagem asfáltica é o processo de remoção controlada e precisa de camadas do pavimento existente, utilizando fresadoras especializadas equipadas com tambores rotativos dotados de bits de tungstênio.
              </p>
              <p>
                É a etapa fundamental antes de qualquer recapeamento ou reabilitação de pavimentos, garantindo perfeita aderência da nova camada e nivelamento adequado da pista.
              </p>
              <p>
                Na West Fresa, executamos fresagem em rodovias, vias urbanas, estacionamentos, pátios industriais e obras de grande porte, com controle milimétrico de profundidade e largura.
              </p>
            </div>
          </div>
          <div className="relative">
            <img src={milling.url} alt="Fresagem asfáltica em operação" className="rounded-2xl shadow-2xl object-cover aspect-[4/3] w-full" />
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-12">
            <p className="text-brand-orange font-bold uppercase tracking-widest text-xs mb-3">Benefícios</p>
            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-brand-navy">Vantagens da Fresagem</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2 max-w-4xl mx-auto">
            {advantages.map((a) => (
              <div key={a} className="flex items-start gap-3 bg-white rounded-lg p-5 shadow-sm border border-border">
                <CheckCircle2 className="h-6 w-6 text-brand-orange shrink-0 mt-0.5" />
                <span className="text-foreground font-medium">{a}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-12">
            <p className="text-brand-orange font-bold uppercase tracking-widest text-xs mb-3">Galeria</p>
            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-brand-navy">Veja Nossa Operação</h2>
          </div>
          <div className="grid gap-4 grid-cols-2 lg:grid-cols-3">
            {[millingAction, machineCloseup, transport, loading, milling].map((img, i) => (
              <div key={i} className={`overflow-hidden rounded-xl shadow-md ${i === 0 ? "col-span-2 row-span-2" : ""}`}>
                <img src={img.url} alt={`Operação ${i + 1}`} className="h-full w-full object-cover aspect-[4/3] hover:scale-105 transition-transform duration-500" />
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/contato" className="inline-flex items-center justify-center rounded-md bg-brand-orange px-7 py-4 font-bold uppercase tracking-wide text-white shadow-lg hover:bg-brand-orange-dark transition">
              Solicitar Orçamento de Fresagem
            </Link>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
