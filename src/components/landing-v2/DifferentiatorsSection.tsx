import { Star } from "lucide-react";
import { differentiators } from "@/data/landing";
import { SectionHeading, SectionShell } from "./shared";

export function DifferentiatorsSection() {
  return (
    <SectionShell id="diferenciadores">
      <div className="rounded-[32px] border border-white/10 bg-gradient-to-br from-white/[0.05] to-white/[0.02] p-8 md:p-10">
        <SectionHeading
          title="Lo que hace distinta esta propuesta"
          subtitle="La ventaja no está en prometer inteligencia artificial por todos lados. Está en que la implementación sea útil, clara y comprable para negocios que ya venden por WhatsApp."
        />
        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {differentiators.map((item) => (
            <div key={item} className="rounded-[24px] border border-white/10 bg-[#0b1220]/70 p-5 text-sm leading-7 text-white/70">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-2xl bg-emerald-400/12 text-emerald-200">
                <Star className="h-4 w-4" />
              </div>
              {item}
            </div>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
