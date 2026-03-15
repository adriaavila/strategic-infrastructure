export const getTagColor = (tag: string) => {
  const t = tag.toLowerCase();
  
  // Categorias específicas
  if (t === "turismo") return "bg-emerald-500/15 text-emerald-500 border-emerald-500/20";
  if (t === "gastronomía" || t === "gastronomia") return "bg-orange-500/15 text-orange-500 border-orange-500/20";
  if (t === "ux" || t === "ui" || t === "diseño") return "bg-violet-500/15 text-violet-500 border-violet-500/20";
  if (t === "institucional" || t === "consultoría" || t === "consultoria") return "bg-slate-500/15 text-slate-500 border-slate-500/20";
  if (t === "impacto social") return "bg-pink-500/15 text-pink-500 border-pink-500/20";
  if (t === "accesibilidad") return "bg-lime-500/15 text-lime-600 dark:text-lime-500 border-lime-500/20";
  if (t === "landing") return "bg-amber-500/15 text-amber-600 dark:text-amber-500 border-amber-500/20";
  if (t === "scrollytelling") return "bg-cyan-500/15 text-cyan-500 border-cyan-500/20";
  if (t === "storytelling" || t === "arte") return "bg-rose-500/15 text-rose-500 border-rose-500/20";
  
  // Categorias generales
  if (t.includes("software") || t.includes("saas") || t.includes("app") || t.includes("plataforma")) 
    return "bg-blue-500/15 text-blue-500 border-blue-500/20";
  if (t.includes("ecommerce") || t.includes("venta") || t.includes("b2b")) 
    return "bg-indigo-500/15 text-indigo-500 border-indigo-500/20";
  if (t.includes("branding") || t.includes("marketing"))
    return "bg-rose-500/15 text-rose-500 border-rose-500/20";
  if (t.includes("mantenimiento") || t.includes("operaciones") || t.includes("dashboard"))
    return "bg-cyan-500/15 text-cyan-500 border-cyan-500/20";
    
  return "bg-foreground/5 text-muted-foreground border-foreground/10";
};
