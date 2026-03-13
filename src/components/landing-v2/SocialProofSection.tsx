import { trustedBy } from "@/data/landing";

export function SocialProofSection() {
  return (
    <section className="relative px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl rounded-[28px] border border-white/10 bg-white/[0.04] px-6 py-8 backdrop-blur-md md:px-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-white/42">Pensado para equipos que operan en WhatsApp</p>
            <p className="mt-2 max-w-2xl text-lg text-white/70">
              En lugar de vender muchos servicios distintos, la marca ahora se enfoca en una sola categoría con valor claro: automatización de WhatsApp con IA para negocios en LATAM.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
            {trustedBy.map((item) => (
              <div key={item} className="rounded-2xl border border-white/8 bg-[#0b1220]/90 px-4 py-3 text-center text-sm text-white/62">
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
