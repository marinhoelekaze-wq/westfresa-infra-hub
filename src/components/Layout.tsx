import { Link, Outlet } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, Phone, Mail, MapPin } from "lucide-react";
import logo from "@/assets/logo.png.asset.json";
import logoFooter from "@/assets/logo-westfresa.png.asset.json";

const WHATSAPP = "5511940319914";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent("Olá! Gostaria de solicitar um orçamento.")}`;

const navItems = [
  { to: "/", label: "Home" },
  { to: "/fresagem-asfaltica", label: "Fresagem Asfáltica" },
  { to: "/locacao-de-maquinas", label: "Locação de Máquinas" },
  { to: "/contato", label: "Contato" },
] as const;

export function Layout() {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex min-h-screen flex-col">
      {/* Top bar */}
      <div className="hidden bg-brand-navy-dark text-white/80 text-xs md:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2"><Phone className="h-3 w-3 text-brand-orange" /> (11) 94031-9914</span>
            <span className="flex items-center gap-2"><Mail className="h-3 w-3 text-brand-orange" /> contato@westfresa.com.br</span>
          </div>
          <span className="flex items-center gap-2"><MapPin className="h-3 w-3 text-brand-orange" /> Atendimento em todo Brasil</span>
        </div>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-border bg-brand-navy text-white shadow-lg">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 md:px-6">
          <Link to="/" className="flex items-center gap-3 min-w-0">
            <img src={logo.url} alt="West Fresa" className="h-12 w-auto shrink-0" />
          </Link>
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="px-3 py-2 text-sm font-semibold uppercase tracking-wide text-white/80 hover:text-brand-orange transition-colors"
                activeProps={{ className: "px-3 py-2 text-sm font-semibold uppercase tracking-wide text-brand-orange" }}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener"
            className="hidden lg:inline-flex items-center gap-2 rounded-md bg-brand-orange px-4 py-2 text-sm font-bold uppercase tracking-wide text-white shadow-md hover:bg-brand-orange-dark transition-colors"
          >
            Orçamento
          </a>
          <button
            className="lg:hidden text-white p-2"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
        {open && (
          <div className="lg:hidden border-t border-white/10 bg-brand-navy-dark">
            <nav className="flex flex-col px-4 py-2">
              {navItems.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className="py-3 text-sm font-semibold uppercase tracking-wide text-white/90 border-b border-white/5"
                  activeProps={{ className: "py-3 text-sm font-semibold uppercase tracking-wide text-brand-orange border-b border-white/5" }}
                >
                  {item.label}
                </Link>
              ))}
              <a href={WHATSAPP_URL} target="_blank" rel="noopener" className="mt-3 mb-3 inline-flex items-center justify-center rounded-md bg-brand-orange px-4 py-3 text-sm font-bold uppercase text-white">
                Solicitar Orçamento
              </a>
            </nav>
          </div>
        )}
      </header>

      <main className="flex-1">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-brand-navy-dark text-white/80">
        <div className="mx-auto max-w-7xl px-6 py-12 grid gap-8 md:grid-cols-3">
          <div>
            <img src={logoFooter.url} alt="West Fresa" className="h-20 w-auto mb-4" />
            <p className="text-sm leading-relaxed">
              WEST FRESA — Fresagem Asfáltica e Locação de Máquinas e Equipamentos para Infraestrutura. Precisão e qualidade na infraestrutura.
            </p>
          </div>
          <div>
            <h4 className="text-white font-bold uppercase text-sm mb-4 tracking-wide">Navegação</h4>
            <ul className="space-y-2 text-sm">
              {navItems.map((i) => (
                <li key={i.to}><Link to={i.to} className="hover:text-brand-orange transition-colors">{i.label}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold uppercase text-sm mb-4 tracking-wide">Contato</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-brand-orange shrink-0" /> (11) 94031-9914</li>
              <li className="flex items-center gap-2"><Mail className="h-4 w-4 text-brand-orange shrink-0" /> contato@westfresa.com.br</li>
              <li className="flex items-center gap-2"><MapPin className="h-4 w-4 text-brand-orange shrink-0" /> Atendimento em todo Brasil</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10">
          <div className="mx-auto max-w-7xl px-6 py-4 text-xs text-white/50 flex flex-col md:flex-row justify-between gap-2">
            <span>© {new Date().getFullYear()} West Fresa. Todos os direitos reservados.</span>
            <span>Precisão e qualidade na infraestrutura.</span>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener"
        aria-label="WhatsApp"
        className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-2xl hover:scale-110 transition-transform"
      >
        <svg viewBox="0 0 24 24" className="h-7 w-7 fill-white" aria-hidden="true">
          <path d="M.057 24l1.687-6.163a11.867 11.867 0 0 1-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.82 11.82 0 0 1 8.413 3.488 11.82 11.82 0 0 1 3.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 0 1-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
        </svg>
      </a>
    </div>
  );
}
