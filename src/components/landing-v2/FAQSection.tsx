import { ChevronDown } from "lucide-react";
import { faqs } from "@/data/landing";
import { SectionEyebrow, SectionShell } from "./shared";

export function FAQSection() {
  return (
    <SectionShell id="faqs">
      <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <SectionEyebrow>Preguntas frecuentes</SectionEyebrow>
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-white md:text-5xl">
            Objeciones comunes antes de conectar tu WhatsApp
          </h2>
          <p className="mt-5 text-base leading-7 text-white/66 md:text-lg">
            Esta sección está pensada para bajar fricción de compra, responder dudas reales y dejar claro que el producto puede empezar simple y crecer con el negocio.
          </p>
        </div>
        <div className="space-y-4">
          {faqs.map((item) => (
            <details key={item.q} className="group rounded-[24px] border border-white/10 bg-white/[0.035] p-5 open:bg-white/[0.05]">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left text-base font-medium text-white">
                {item.q}
                <ChevronDown className="h-4 w-4 text-white/50 transition group-open:rotate-180" />
              </summary>
              <p className="mt-4 pr-8 text-sm leading-7 text-white/64">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
