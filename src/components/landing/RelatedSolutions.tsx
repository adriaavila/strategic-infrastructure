import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { pseoData } from "@/data/pseo";

export function RelatedSolutions({ currentSlug }: { currentSlug: string }) {
  const segments = currentSlug.split("-");
  const familyPrefix = segments.slice(0, 2).join("-");
  const primaryPrefix = segments[0];

  const sameFamily = pseoData.filter(
    (page) => page.slug !== currentSlug && page.slug.startsWith(familyPrefix)
  );
  const samePrimary = pseoData.filter(
    (page) =>
      page.slug !== currentSlug &&
      !page.slug.startsWith(familyPrefix) &&
      page.slug.startsWith(primaryPrefix)
  );
  const fallback = pseoData.filter(
    (page) =>
      page.slug !== currentSlug &&
      !page.slug.startsWith(familyPrefix) &&
      !page.slug.startsWith(primaryPrefix)
  );

  const related = [...sameFamily, ...samePrimary, ...fallback].slice(0, 3);

  return (
    <section className="border-t border-white/5 light:border-slate-200 py-24 mt-20 relative overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-brand-primary/5 blur-[120px] light:opacity-50 rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <h3 className="text-3xl font-bold text-white light:text-slate-900 mb-10 tracking-tight">Otras soluciones de la industria</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {related.map((link, i) => (
            <Link key={i} to={`/${link.slug}`}>
              <motion.div 
                whileHover={{ y: -5 }}
                className="group p-8 rounded-2xl bg-neutral-900/30 light:bg-white border border-neutral-800 light:border-slate-200 hover:border-neutral-600 light:hover:border-slate-300 hover:bg-neutral-800/40 light:hover:bg-slate-50 transition-all flex flex-col h-full justify-between backdrop-blur-sm"
              >
                <div>
                  <h4 className="text-xl font-medium text-white light:text-slate-900 mb-3 tracking-tight">{link.title}</h4>
                  <p className="text-sm text-neutral-400 light:text-slate-600 line-clamp-3 mb-6">
                    {link.description}
                  </p>
                </div>
                <div className="text-sm text-brand-primary font-medium flex items-center">
                  Explorar solución 
                  <ArrowRight className="w-4 h-4 ml-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
