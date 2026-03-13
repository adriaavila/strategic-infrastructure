import { Link } from "react-router-dom";

export function FooterSection() {
  return (
    <footer className="border-t border-white/10 px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <div className="text-sm font-semibold text-white">servicioscreativos.online</div>
          <div className="mt-1 text-sm text-white/46">Enfocado en un solo producto: agente de WhatsApp con IA para negocios.</div>
        </div>
        <div className="flex flex-wrap items-center gap-4 text-sm text-white/50">
          <a href="#funciones" className="transition hover:text-white">Funciones</a>
          <a href="#industrias" className="transition hover:text-white">Industrias</a>
          <a href="#precios" className="transition hover:text-white">Precios</a>
          <Link to="/privacidad" className="transition hover:text-white">Privacidad</Link>
          <Link to="/terminos" className="transition hover:text-white">Términos</Link>
        </div>
      </div>
    </footer>
  );
}
