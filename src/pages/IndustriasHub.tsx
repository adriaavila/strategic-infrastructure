import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Stethoscope, Building2, ShoppingBag, Briefcase, GraduationCap, ArrowRight } from "lucide-react";
import { Navbar } from "@/components/landing/Navbar";
import { Footer } from "@/components/landing/Footer";
import { useSEO } from "@/lib/seo";

const clusters = [
  {
    title: "Salud y Bienestar",
    icon: <Stethoscope className="w-6 h-6 text-emerald-400" />,
    description: "Automatización de citas e IA para clínicas, centros odontológicos y veterinarias.",
    links: [
      { name: "Clínicas", url: "/whatsapp-automation-clinics" },
      { name: "Odontología", url: "/ai-agent-dental" },
      { name: "Veterinarias", url: "/appointment-booking-veterinary" },
      { name: "Gimnasios", url: "/lead-generation-gyms" }
    ],
    colSpan: "md:col-span-2",
    bgGradient: "from-emerald-950/40 to-black light:from-emerald-50 light:to-white"
  },
  {
    title: "B2B y Servicios",
    icon: <Briefcase className="w-6 h-6 text-blue-400" />,
    description: "Agentes autónomos para agencias, consultoras y bufetes legales.",
    links: [
      { name: "Agencias", url: "/ai-agent-agencies" },
      { name: "Consultorías", url: "/crm-integration-consulting" },
      { name: "Abogados", url: "/whatsapp-automation-law-firms" }
    ],
    colSpan: "md:col-span-1",
    bgGradient: "from-blue-950/40 to-black light:from-blue-50 light:to-white"
  },
  {
    title: "Comercio y Retail",
    icon: <ShoppingBag className="w-6 h-6 text-amber-400" />,
    description: "Soporte 24/7 y automatización de ventas para ecommerce y tiendas físicas.",
    links: [
      { name: "Ecommerce", url: "/sales-automation-ecommerce" },
      { name: "Restaurantes", url: "/chatbot-restaurants" },
      { name: "Retail", url: "/ai-agent-retail" },
      { name: "Hoteles", url: "/appointment-booking-hotels" }
    ],
    colSpan: "md:col-span-1",
    bgGradient: "from-amber-950/40 to-black light:from-amber-50 light:to-white"
  },
  {
    title: "Inmobiliario y Ccs",
    icon: <Building2 className="w-6 h-6 text-violet-400" />,
    description: "Pre-calificación de leads inmobiliarios y seguimiento inteligente.",
    links: [
      { name: "Bienes Raíces", url: "/ai-agent-real-estate" },
      { name: "Construcción", url: "/whatsapp-automation-construction" }
    ],
    colSpan: "md:col-span-2",
    bgGradient: "from-violet-950/40 to-black light:from-violet-50 light:to-white"
  },
  {
    title: "Educación y Finanzas",
    icon: <GraduationCap className="w-6 h-6 text-rose-400" />,
    description: "Plataformas conversacionales integradas para asegurar leads financieros y matrículas.",
    links: [
      { name: "Educación", url: "/customer-support-education" },
      { name: "Escuelas", url: "/lead-generation-schools" },
      { name: "Finanzas", url: "/ai-agent-finance" },
      { name: "Seguros", url: "/sales-automation-insurance" }
    ],
    colSpan: "md:col-span-3",
    bgGradient: "from-rose-950/40 to-black light:from-rose-50 light:to-white"
  }
];

export default function IndustriasHub() {
  useSEO({
    title: "Soluciones por Industria",
    description: "Descubre cómo nuestros agentes de IA y automatizaciones de WhatsApp se adaptan perfectamente a tu industria clínica, B2B, inmobiliaria o retail.",
    path: "/industrias",
  });

  return (
    <div className="min-h-screen bg-[#0a0a0a] light:bg-slate-50 flex flex-col font-sans">
      <Navbar />

      <main className="flex-grow pt-32 pb-24 px-6 md:px-12 w-full">
        <div className="max-w-6xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-neutral-500 light:from-slate-900 light:to-slate-600 bg-clip-text text-transparent tracking-tight">
              Soluciones por Industria
            </h1>
            <p className="text-lg md:text-xl text-neutral-400 light:text-slate-600 max-w-2xl leading-relaxed">
              Sistemas de IA y arquitecturas de automatización quirúrgicamente diseñados para las necesidades únicas de tu sector operativo.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {clusters.map((cluster, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ scale: 1.01, transition: { duration: 0.2 } }}
                className={`p-8 rounded-3xl border border-white/5 light:border-slate-200 bg-gradient-to-br ${cluster.bgGradient} relative overflow-hidden group ${cluster.colSpan}`}
              >
                <div className="flex items-center space-x-4 mb-5">
                  <div className="p-3 bg-white/5 light:bg-white rounded-2xl border border-white/10 light:border-slate-200 group-hover:border-white/20 light:group-hover:border-slate-300 transition-colors shadow-xl light:shadow-sm">
                    {cluster.icon}
                  </div>
                  <h2 className="text-2xl font-semibold text-white light:text-slate-900 tracking-tight">{cluster.title}</h2>
                </div>
                <p className="text-neutral-400 light:text-slate-600 mb-8 leading-relaxed text-sm md:text-base">{cluster.description}</p>
                <div className="flex flex-wrap gap-3">
                  {cluster.links.map((link, j) => (
                    <Link 
                      key={j} 
                      to={link.url}
                      className="px-4 py-2 rounded-full bg-black/40 light:bg-white hover:bg-white/10 light:hover:bg-slate-50 border border-white/5 light:border-slate-200 text-sm text-neutral-300 light:text-slate-600 transition-all hover:text-white light:hover:text-slate-900 flex items-center group/link"
                    >
                      {link.name}
                      <ArrowRight className="w-3 h-3 ml-2 opacity-50 group-hover/link:opacity-100 group-hover/link:translate-x-0.5 transition-all text-white light:text-slate-900" />
                    </Link>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
