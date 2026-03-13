import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Bot,
  CalendarDays,
  Check,
  ChevronDown,
  Clock3,
  Database,
  Hospital,
  MessageCircleMore,
  PhoneCall,
  Salad,
  ShieldCheck,
  ShoppingCart,
  Star,
  Store,
  Building2,
  Users,
  Sparkles,
  Workflow,
  Handshake,
  BarChart3,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { CONTACT_INFO, getWhatsAppUrl } from "@/config/contact";
import { cn } from "@/lib/utils";

const primaryCta = getWhatsAppUrl("Hola, quiero una demo del agente de WhatsApp con IA.");
const secondaryCta = "/brief";

const navItems = [
  { label: "Cómo funciona", href: "#como-funciona" },
  { label: "Funciones", href: "#funciones" },
  { label: "Casos de uso", href: "#industrias" },
  { label: "Precios", href: "#precios" },
  { label: "Preguntas", href: "#faqs" },
];

const trustedBy = ["Clínicas", "Restaurantes", "Inmobiliarias", "Academias", "Ecommerce", "Servicios locales"];

const problemCards = [
  {
    title: "Se pierden ventas por responder tarde",
    body: "Cuando el negocio tarda en contestar, el cliente escribe a otro lado. El problema no es la demanda: es el tiempo de respuesta.",
  },
  {
    title: "El equipo repite lo mismo todo el día",
    body: "Horarios, precios, ubicación, disponibilidad, métodos de pago, políticas. Las mismas preguntas consumen horas que no escalan.",
  },
  {
    title: "No hay filtro ni orden en los chats",
    body: "Todos los contactos parecen iguales. Nadie sabe quién está listo para comprar, quién quiere agendar y quién solo está pidiendo información.",
  },
  {
    title: "La atención depende demasiado de una persona",
    body: "Si alguien falta, se satura o sale del horario, el WhatsApp del negocio se frena. Eso afecta ventas, atención y seguimiento.",
  },
];

const benefits = [
  "Responde en segundos aunque tu equipo no esté disponible",
  "Captura datos clave antes de pasar la conversación a un humano",
  "Califica leads y separa consultas útiles de chats poco relevantes",
  "Agenda citas y solicitudes sin ir y venir en la conversación",
  "Mantiene un tono consistente con la información real de tu negocio",
  "Reduce carga operativa sin volver más fría la atención",
];

const howItWorks = [
  {
    step: "01",
    title: "Conectamos tu canal",
    body: "Configuramos el agente para trabajar con tu operación de WhatsApp Business y definimos los objetivos del flujo: vender, atender, agendar o filtrar.",
  },
  {
    step: "02",
    title: "Entrenamos con tu información",
    body: "Cargamos preguntas frecuentes, servicios, horarios, zonas, precios orientativos, políticas, catálogos o procesos para que responda con contexto real.",
  },
  {
    step: "03",
    title: "Automatizamos conversaciones útiles",
    body: "Diseñamos respuestas, captura de datos, pasos de calificación, handoff a humano y acciones concretas según el tipo de consulta.",
  },
  {
    step: "04",
    title: "Sales con un flujo listo para operar",
    body: "Tu negocio empieza a responder mejor desde el primer día y luego iteramos sobre conversaciones reales para mejorar conversión y precisión.",
  },
];

const features = [
  {
    icon: MessageCircleMore,
    title: "Respuestas automáticas con contexto",
    body: "Contesta preguntas frecuentes, explica servicios y mantiene conversaciones útiles sin sonar como un bot genérico.",
  },
  {
    icon: Users,
    title: "Calificación de leads",
    body: "Hace preguntas clave para detectar intención, presupuesto, urgencia, ubicación o tipo de servicio antes de pasar el contacto.",
  },
  {
    icon: CalendarDays,
    title: "Agenda y preagenda",
    body: "Guía al cliente para reservar, solicitar cita o dejar una solicitud completa con datos listos para confirmar.",
  },
  {
    icon: Handshake,
    title: "Escalado a humano",
    body: "Cuando la conversación necesita intervención real, deriva con contexto para que el equipo continúe sin empezar desde cero.",
  },
  {
    icon: Database,
    title: "Captura de datos útil",
    body: "Recolecta nombre, teléfono, servicio de interés, sede, fecha preferida u otros datos necesarios para seguimiento.",
  },
  {
    icon: Workflow,
    title: "Flujos por tipo de negocio",
    body: "No es una automatización genérica. Se ajusta a procesos concretos de atención, ventas y operación por industria.",
  },
];

const industries = [
  {
    icon: Hospital,
    title: "Clínicas",
    problem: "Reciben consultas de especialidades, horarios, sedes, costos aproximados y disponibilidad; el equipo pierde tiempo antes de confirmar una cita.",
    solution: "El agente responde preguntas frecuentes, solicita datos del paciente, identifica especialidad y deja la solicitud lista para agendar.",
    benefit: "Menos carga administrativa y más citas confirmadas con menos fricción.",
  },
  {
    icon: Salad,
    title: "Restaurantes",
    problem: "Se acumulan mensajes por menú, pedidos, reservas, ubicación y horarios, especialmente en horas pico.",
    solution: "El agente atiende preguntas repetitivas, guía pedidos o reservas y filtra consultas antes de pasar al equipo.",
    benefit: "Respuestas rápidas incluso en momentos de alta demanda y menos interrupciones operativas.",
  },
  {
    icon: Building2,
    title: "Inmobiliarias",
    problem: "Entran muchos leads fríos preguntando por disponibilidad, precio o ubicación, pero pocos llegan bien calificados al asesor.",
    solution: "El agente identifica intención, presupuesto, zona de interés y tipo de inmueble para priorizar oportunidades reales.",
    benefit: "Más orden comercial y mejor uso del tiempo del equipo de ventas.",
  },
  {
    icon: ShoppingCart,
    title: "Ecommerce",
    problem: "Llegan preguntas constantes sobre stock, envíos, métodos de pago, cambios y seguimiento de compra.",
    solution: "El agente resuelve dudas frecuentes, orienta al cliente y reduce el volumen manual de soporte previo y posterior a la compra.",
    benefit: "Menos carga de soporte y más velocidad para cerrar ventas por WhatsApp.",
  },
  {
    icon: Store,
    title: "Servicios locales",
    problem: "Negocios de instalación, salud, educación o mantenimiento pierden leads porque no responden rápido ni filtran bien la necesidad.",
    solution: "El agente entiende el tipo de solicitud, captura datos y deriva al responsable con información clara para continuar.",
    benefit: "Mejor primera respuesta y menos oportunidades perdidas por desorden.",
  },
];

const differentiators = [
  "Implementación enfocada en resultados de ventas y atención, no en una automatización decorativa",
  "Entrenamiento con información real del negocio para responder con criterio y no con plantillas vacías",
  "Escalado a humano con contexto para no romper la conversación ni repetir preguntas",
  "Diseño pensado para negocios de LATAM que ya venden por WhatsApp y necesitan ordenar la operación",
  "Flujos útiles para captar datos, calificar y agendar, no solo responder preguntas básicas",
  "Puesta en marcha rápida para empezar a operar y luego mejorar con conversaciones reales",
];

const integrations = [
  "WhatsApp Business",
  "Catálogos, menús o documentos del negocio",
  "Formularios y briefs de implementación",
  "Flujos de atención y ventas existentes",
  "Escalado manual al equipo cuando hace falta",
];

const plans = [
  {
    name: "Inicio",
    price: "USD 97",
    audience: "Para negocios que quieren responder mejor y ordenar preguntas frecuentes.",
    description: "Un punto de entrada simple para empezar a automatizar el canal sin complejidad innecesaria.",
    features: [
      "1 flujo principal de atención o ventas",
      "Entrenamiento inicial con preguntas frecuentes",
      "Captura básica de datos",
      "Handoff a humano",
      "Soporte de puesta en marcha",
    ],
    cta: "Iniciar implementación",
  },
  {
    name: "Crecimiento",
    price: "USD 197",
    audience: "Para negocios con volumen constante que necesitan filtrar mejor y convertir más.",
    description: "La opción recomendada para combinar atención automática, calificación y solicitudes listas para vender.",
    features: [
      "Hasta 3 flujos por intención",
      "Calificación de leads por reglas del negocio",
      "Captura de datos avanzada",
      "Agendado o preagendado",
      "Ajustes durante el primer mes",
    ],
    cta: "Solicitar demo",
    featured: true,
  },
  {
    name: "Escala",
    price: "USD 397",
    audience: "Para operaciones con varias líneas, sedes o procesos más complejos.",
    description: "Pensado para equipos que quieren un agente más robusto y flujos más específicos por servicio o unidad.",
    features: [
      "Flujos múltiples por sede, servicio o tipo de lead",
      "Lógica de atención más personalizada",
      "Priorización y derivación avanzada",
      "Acompañamiento de optimización",
      "Implementación guiada para equipos con más volumen",
    ],
    cta: "Conectar WhatsApp",
  },
];

const faqs = [
  {
    q: "¿Funciona con WhatsApp Business?",
    a: "Sí. El enfoque está pensado para negocios que ya usan WhatsApp como canal principal de atención o ventas. La implementación se define según la operación actual del negocio y el nivel de automatización requerido.",
  },
  {
    q: "¿Cuánto tarda la implementación?",
    a: "Depende del nivel de complejidad, pero un flujo inicial puede quedar operativo en pocos días si el negocio ya tiene clara su información base: servicios, preguntas frecuentes, horarios, políticas y objetivos.",
  },
  {
    q: "¿Se puede personalizar para mi negocio?",
    a: "Sí. El agente se entrena con la información, tono y procesos del negocio. No se entrega como una plantilla cerrada; se ajusta a la realidad operativa de cada caso.",
  },
  {
    q: "¿Qué pasa si el agente no sabe responder?",
    a: "Puede redirigir la conversación a una persona o pedir más contexto según las reglas definidas. La idea no es fingir que sabe todo, sino resolver lo repetitivo y escalar bien lo sensible.",
  },
  {
    q: "¿Puede pasar la conversación a un humano?",
    a: "Sí. Ese punto es clave. El agente puede derivar cuando detecta intención alta, una excepción, una duda delicada o una solicitud que requiere intervención del equipo.",
  },
  {
    q: "¿Necesito saber programar?",
    a: "No. El proceso está planteado para que el negocio aporte su información y objetivos. La parte técnica de implementación se resuelve dentro del servicio.",
  },
  {
    q: "¿Cómo se entrena el agente?",
    a: "Con información real del negocio: preguntas frecuentes, servicios, precios orientativos, cobertura, horarios, sedes, menús, catálogos, políticas y ejemplos de conversación. Luego se mejora con casos reales.",
  },
  {
    q: "¿Sirve para mi tipo de negocio?",
    a: "Si recibes consultas repetitivas por WhatsApp, necesitas responder rápido y quieres ordenar mejor ventas o atención, probablemente sí. La demo sirve justamente para validar encaje antes de implementar.",
  },
];

function SectionEyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs font-medium text-white/70">
      <Sparkles className="h-3.5 w-3.5 text-emerald-300" />
      <span>{children}</span>
    </div>
  );
}

function SectionHeading({ title, subtitle, center = false }: { title: string; subtitle: string; center?: boolean }) {
  return (
    <div className={cn("max-w-3xl", center && "mx-auto text-center")}>
      <h2 className="text-balance text-3xl font-semibold tracking-tight text-white md:text-5xl">{title}</h2>
      <p className="mt-5 text-pretty text-base leading-7 text-white/64 md:text-lg">{subtitle}</p>
    </div>
  );
}

function HeroChatMockup() {
  return (
    <div className="relative mx-auto w-full max-w-[560px]">
      <div className="absolute -left-10 top-10 hidden h-28 w-28 rounded-full bg-emerald-400/20 blur-3xl lg:block" />
      <div className="absolute -right-8 bottom-8 hidden h-32 w-32 rounded-full bg-violet-500/20 blur-3xl lg:block" />

      <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-[#0d1117]/90 shadow-[0_30px_120px_rgba(0,0,0,0.45)] backdrop-blur-xl">
        <div className="border-b border-white/10 bg-white/[0.03] px-5 py-4">
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-400 to-emerald-600 text-[#032415]">
                <Bot className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-medium text-white">Agente de WhatsApp con IA</p>
                <p className="text-xs text-emerald-300">Activo 24/7 · Respuesta en segundos</p>
              </div>
            </div>
            <div className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-2.5 py-1 text-[11px] font-medium text-emerald-200">
              En vivo
            </div>
          </div>
        </div>

        <div className="space-y-4 bg-[radial-gradient(circle_at_top,_rgba(34,197,94,0.12),_transparent_35%),linear-gradient(180deg,rgba(255,255,255,0.02),rgba(255,255,255,0.01))] p-5">
          <ChatBubble side="left" time="09:14">
            Hola. Quiero saber si tienen citas esta semana para limpieza dental.
          </ChatBubble>
          <ChatBubble side="right" time="09:14" accent>
            Sí, puedo ayudarte. ¿Prefieres sede centro o sede norte?
          </ChatBubble>
          <ChatBubble side="left" time="09:15">Sede centro. Y quisiera saber el precio.</ChatBubble>
          <ChatBubble side="right" time="09:15" accent>
            La limpieza dental tiene un valor referencial desde USD 25. Para dejarte la cita lista necesito tu nombre y horario preferido.
          </ChatBubble>
          <div className="grid gap-2 sm:grid-cols-2">
            <ReplyPill>Hoy después de las 3 pm</ReplyPill>
            <ReplyPill>Mañana en la mañana</ReplyPill>
          </div>
          <div className="rounded-2xl border border-emerald-400/20 bg-emerald-400/8 p-4">
            <div className="flex items-start gap-3">
              <div className="mt-1 rounded-full bg-emerald-400/15 p-2 text-emerald-200">
                <Check className="h-4 w-4" />
              </div>
              <div>
                <p className="text-sm font-medium text-white">Lead calificado y listo para agendar</p>
                <p className="mt-1 text-sm leading-6 text-white/62">
                  El agente ya obtuvo sede, intención, precio consultado y ventana horaria. El equipo entra solo cuando hace falta confirmar.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ChatBubble({ children, side, time, accent = false }: { children: React.ReactNode; side: "left" | "right"; time: string; accent?: boolean }) {
  return (
    <div className={cn("flex", side === "right" ? "justify-end" : "justify-start")}>
      <div
        className={cn(
          "max-w-[85%] rounded-3xl px-4 py-3 text-sm leading-6 shadow-lg",
          side === "right"
            ? accent
              ? "rounded-br-md bg-gradient-to-br from-emerald-400 to-emerald-500 text-[#032415]"
              : "rounded-br-md bg-white/10 text-white"
            : "rounded-bl-md border border-white/10 bg-white/[0.05] text-white/88"
        )}
      >
        <div>{children}</div>
        <div className={cn("mt-1 text-[11px]", side === "right" && accent ? "text-[#032415]/65" : "text-white/45")}>{time}</div>
      </div>
    </div>
  );
}

function ReplyPill({ children }: { children: React.ReactNode }) {
  return <div className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-center text-sm text-white/72">{children}</div>;
}

function StatCard({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 backdrop-blur-sm">
      <div className="text-2xl font-semibold tracking-tight text-white md:text-3xl">{value}</div>
      <div className="mt-1 text-sm text-white/58">{label}</div>
    </div>
  );
}

function NavBar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 px-4 pt-4 sm:px-6 lg:px-8">
      <div
        className={cn(
          "mx-auto flex max-w-7xl items-center justify-between rounded-2xl border px-4 py-3 transition-all duration-300 md:px-5",
          scrolled ? "border-white/10 bg-[#090d13]/80 shadow-2xl backdrop-blur-xl" : "border-white/8 bg-white/[0.03] backdrop-blur-md"
        )}
      >
        <Link to="/" className="flex items-center gap-3 text-white">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-400 via-emerald-500 to-violet-500 text-[#04120c] shadow-lg shadow-emerald-500/10">
            <MessageCircleMore className="h-5 w-5" />
          </div>
          <div>
            <div className="text-sm font-semibold tracking-tight">servicioscreativos.online</div>
            <div className="text-xs text-white/45">Agente de WhatsApp con IA</div>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {navItems.map((item) => (
            <a key={item.label} href={item.href} className="text-sm text-white/65 transition hover:text-white">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 sm:flex">
          <a href={secondaryCta}>
            <Button variant="outline" size="sm" className="border-white/10 bg-white/[0.03] text-white hover:bg-white/[0.06]">
              Solicitar implementación
            </Button>
          </a>
          <a href={primaryCta} target="_blank" rel="noreferrer">
            <Button size="sm" className="rounded-xl bg-emerald-400 text-[#032415] hover:bg-emerald-300">
              Agendar demo
            </Button>
          </a>
        </div>
      </div>
    </header>
  );
}

export function AppLanding() {
  return (
    <div className="relative overflow-x-hidden bg-[#050816] text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(16,185,129,0.16),transparent_28%),radial-gradient(circle_at_top_right,rgba(139,92,246,0.16),transparent_32%),linear-gradient(180deg,#060816_0%,#07101d_38%,#050816_100%)]" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.18] [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:72px_72px] [mask-image:radial-gradient(circle_at_top,black,transparent_85%)]" />
      <div className="noise-overlay" />

      <NavBar />

      <main>
        <section className="relative px-4 pb-20 pt-10 sm:px-6 lg:px-8 lg:pb-28 lg:pt-12">
          <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <SectionEyebrow>Producto enfocado para negocios que venden y atienden por WhatsApp</SectionEyebrow>
              <h1 className="max-w-3xl text-balance text-4xl font-semibold tracking-tight text-white sm:text-5xl md:text-6xl xl:text-7xl">
                Automatiza tu WhatsApp con IA para responder, filtrar y agendar sin fricción
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/66 md:text-xl">
                Un agente entrenado con la información de tu negocio para contestar al instante, capturar datos, calificar oportunidades y escalar a tu equipo cuando realmente hace falta.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href={primaryCta} target="_blank" rel="noreferrer">
                  <Button size="xl" className="w-full rounded-2xl bg-emerald-400 px-7 text-[#032415] shadow-[0_18px_60px_rgba(16,185,129,0.28)] hover:bg-emerald-300 sm:w-auto">
                    Agendar demo
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </a>
                <a href={secondaryCta}>
                  <Button variant="outline" size="xl" className="w-full rounded-2xl border-white/10 bg-white/[0.04] px-7 text-white hover:bg-white/[0.07] sm:w-auto">
                    Solicitar implementación
                  </Button>
                </a>
              </div>

              <div className="mt-4 flex flex-wrap items-center gap-3 text-sm text-white/48">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5">
                  <Clock3 className="h-4 w-4 text-emerald-300" />
                  Respuesta inmediata
                </div>
                <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5">
                  <ShieldCheck className="h-4 w-4 text-violet-300" />
                  Implementación guiada
                </div>
                <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5">
                  <PhoneCall className="h-4 w-4 text-sky-300" />
                  Escalado a humano
                </div>
              </div>

              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                <StatCard value="24/7" label="Atención continua sin depender del horario del equipo" />
                <StatCard value="< 1 min" label="Tiempo de primera respuesta cuando antes todo era manual" />
                <StatCard value="1 canal" label="WhatsApp como punto central de ventas y atención" />
              </div>
            </div>

            <HeroChatMockup />
          </div>
        </section>

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

        <section id="problema" className="px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              title="El problema no es WhatsApp. El problema es atenderlo de forma manual cuando el negocio ya tiene volumen."
              subtitle="La mayoría de negocios no pierde oportunidades porque falten clientes; las pierde porque responde tarde, depende de una persona y no convierte cada chat en un proceso claro."
            />
            <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {problemCards.map((card) => (
                <div key={card.title} className="group rounded-[24px] border border-white/10 bg-white/[0.035] p-6 backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-white/16 hover:bg-white/[0.05]">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500/30 to-emerald-400/20 text-white">
                    <Zap className="h-5 w-5" />
                  </div>
                  <h3 className="text-xl font-medium text-white">{card.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-white/62">{card.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="solucion" className="px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="rounded-[28px] border border-emerald-400/18 bg-gradient-to-b from-emerald-400/10 to-transparent p-8">
              <SectionEyebrow>La solución</SectionEyebrow>
              <h2 className="text-balance text-3xl font-semibold tracking-tight text-white md:text-5xl">
                Un agente que responde como parte de tu operación, no como un widget desconectado del negocio
              </h2>
              <p className="mt-5 text-base leading-7 text-white/66 md:text-lg">
                El producto combina automatización, criterio comercial y estructura conversacional para que cada chat sirva para avanzar: informar, filtrar, captar datos, agendar o escalar al equipo.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {benefits.map((item) => (
                <div key={item} className="rounded-[24px] border border-white/10 bg-white/[0.035] p-5">
                  <div className="flex items-start gap-3">
                    <div className="mt-1 rounded-full bg-emerald-400/15 p-2 text-emerald-200">
                      <Check className="h-4 w-4" />
                    </div>
                    <p className="text-sm leading-7 text-white/72">{item}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="como-funciona" className="px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              title="Cómo funciona"
              subtitle="El objetivo es simple: que el agente entre a operar rápido, con información real y con flujos pensados para generar menos ruido y más conversaciones útiles."
              center
            />
            <div className="mt-12 grid gap-5 lg:grid-cols-4">
              {howItWorks.map((item) => (
                <div key={item.step} className="rounded-[28px] border border-white/10 bg-white/[0.035] p-6">
                  <div className="text-sm font-medium text-emerald-300">{item.step}</div>
                  <h3 className="mt-4 text-xl font-medium text-white">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-white/62">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="funciones" className="px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              title="Funciones que realmente ayudan a vender y atender mejor"
              subtitle="No hace falta una lista gigante de promesas. Lo que importa es que el agente resuelva bien lo repetitivo, ordene la intención del cliente y deje el trabajo humano para donde aporta más valor."
            />
            <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {features.map((feature) => {
                const Icon = feature.icon;
                return (
                  <div key={feature.title} className="rounded-[26px] border border-white/10 bg-[#09101b]/90 p-6 shadow-2xl shadow-black/10 transition duration-300 hover:-translate-y-1 hover:border-white/16">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500/30 via-violet-500/20 to-emerald-400/20 text-white">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-5 text-xl font-medium text-white">{feature.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-white/62">{feature.body}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section id="demo" className="px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.82fr_1.18fr]">
            <div>
              <SectionEyebrow>Demo conversacional</SectionEyebrow>
              <h2 className="text-balance text-3xl font-semibold tracking-tight text-white md:text-5xl">
                Así se ve un chat que avanza en lugar de quedarse en preguntas sueltas
              </h2>
              <p className="mt-5 text-base leading-7 text-white/66 md:text-lg">
                La diferencia no está en responder por responder. Está en llevar la conversación hacia una acción útil: identificar necesidad, dar contexto, pedir datos y dejar el siguiente paso claro.
              </p>
              <div className="mt-8 space-y-4">
                {[
                  "Responde en segundos con información útil del negocio",
                  "Hace preguntas para entender intención y prioridad",
                  "Pide solo los datos necesarios para avanzar",
                  "Puede derivar al equipo con contexto para cerrar la conversación",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                    <div className="rounded-full bg-emerald-400/15 p-2 text-emerald-200">
                      <Check className="h-4 w-4" />
                    </div>
                    <p className="text-sm leading-7 text-white/70">{item}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-[30px] border border-white/10 bg-white/[0.04] p-4 md:p-6">
              <div className="rounded-[26px] border border-white/10 bg-[#0b1017] p-4 md:p-6">
                <div className="mb-4 flex items-center gap-3 border-b border-white/10 pb-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-400 to-violet-500 text-[#051109]">
                    <Bot className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-white">Escena de venta por WhatsApp</p>
                    <p className="text-xs text-white/45">Ejemplo para inmobiliaria</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <ChatBubble side="left" time="11:02">Hola. Vi un apartamento en alquiler en La Castellana. ¿Sigue disponible?</ChatBubble>
                  <ChatBubble side="right" time="11:02" accent>Hola. Sí, todavía hay disponibilidad en esa zona. ¿Buscas alquiler residencial o uso comercial?</ChatBubble>
                  <ChatBubble side="left" time="11:03">Residencial. Sería para dos personas.</ChatBubble>
                  <ChatBubble side="right" time="11:03" accent>Perfecto. Para mostrarte opciones útiles, ¿en qué rango de presupuesto te gustaría buscar?</ChatBubble>
                  <ChatBubble side="left" time="11:04">Entre 500 y 700 al mes.</ChatBubble>
                  <ChatBubble side="right" time="11:04" accent>Tengo opciones dentro de ese rango. ¿Quieres que deje tu solicitud lista para que un asesor te envíe disponibilidad hoy mismo?</ChatBubble>
                  <ChatBubble side="left" time="11:05">Sí.</ChatBubble>
                  <ChatBubble side="right" time="11:05" accent>
                    Listo. Compárteme tu nombre y un horario en el que te puedan contactar. Así el asesor retoma con propiedades filtradas según presupuesto y zona.
                  </ChatBubble>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="industrias" className="px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              title="Casos de uso por industria"
              subtitle="El mismo canal sirve a negocios distintos, pero la lógica de atención no puede ser igual para todos. Por eso el producto se adapta a procesos concretos por vertical."
              center
            />
            <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {industries.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="rounded-[28px] border border-white/10 bg-white/[0.035] p-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/[0.06] text-emerald-300">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-5 text-xl font-medium text-white">{item.title}</h3>
                    <div className="mt-4 space-y-4 text-sm leading-7">
                      <p><span className="font-medium text-white">Problema típico:</span> <span className="text-white/62">{item.problem}</span></p>
                      <p><span className="font-medium text-white">Cómo ayuda:</span> <span className="text-white/62">{item.solution}</span></p>
                      <p><span className="font-medium text-white">Beneficio esperado:</span> <span className="text-white/62">{item.benefit}</span></p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section id="compatibilidad" className="px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.92fr_1.08fr]">
            <div>
              <SectionEyebrow>Compatibilidad e implementación</SectionEyebrow>
              <h2 className="text-balance text-3xl font-semibold tracking-tight text-white md:text-5xl">
                Se adapta a cómo ya opera tu negocio
              </h2>
              <p className="mt-5 text-base leading-7 text-white/66 md:text-lg">
                No necesitas rehacer toda tu operación para empezar. El objetivo es montar un primer flujo útil sobre lo que ya atiendes por WhatsApp y mejorar desde ahí.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {integrations.map((item) => (
                <div key={item} className="rounded-[24px] border border-white/10 bg-white/[0.035] p-5">
                  <div className="flex items-start gap-3">
                    <div className="rounded-full bg-violet-400/15 p-2 text-violet-200">
                      <Check className="h-4 w-4" />
                    </div>
                    <p className="text-sm leading-7 text-white/70">{item}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="diferenciadores" className="px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <div className="mx-auto max-w-7xl rounded-[32px] border border-white/10 bg-gradient-to-br from-white/[0.05] to-white/[0.02] p-8 md:p-10">
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
        </section>

        <section id="precios" className="px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              title="Planes simples para empezar sin confusión"
              subtitle="La estructura de precios ayuda a comprar rápido: una entrada clara, un plan recomendado y una opción para operaciones más complejas."
              center
            />
            <div className="mt-12 grid gap-5 lg:grid-cols-3">
              {plans.map((plan) => (
                <div
                  key={plan.name}
                  className={cn(
                    "relative rounded-[30px] border p-7",
                    plan.featured
                      ? "border-emerald-400/40 bg-gradient-to-b from-emerald-400/12 to-white/[0.04] shadow-[0_24px_80px_rgba(16,185,129,0.16)]"
                      : "border-white/10 bg-white/[0.035]"
                  )}
                >
                  {plan.featured && (
                    <div className="absolute right-5 top-5 rounded-full border border-emerald-400/30 bg-emerald-400/12 px-3 py-1 text-xs font-medium text-emerald-200">
                      Recomendado
                    </div>
                  )}
                  <div className="text-sm font-medium text-white/48">{plan.name}</div>
                  <div className="mt-4 text-4xl font-semibold tracking-tight text-white">{plan.price}<span className="ml-1 text-base font-normal text-white/45">/ mes</span></div>
                  <p className="mt-4 text-sm leading-7 text-white/68">{plan.audience}</p>
                  <p className="mt-3 text-sm leading-7 text-white/52">{plan.description}</p>
                  <div className="my-6 h-px bg-white/10" />
                  <ul className="space-y-3">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3 text-sm text-white/70">
                        <div className="mt-0.5 rounded-full bg-white/8 p-1 text-emerald-200">
                          <Check className="h-3.5 w-3.5" />
                        </div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <a href={primaryCta} target="_blank" rel="noreferrer" className="mt-8 block">
                    <Button
                      size="lg"
                      className={cn(
                        "w-full rounded-2xl",
                        plan.featured ? "bg-emerald-400 text-[#032415] hover:bg-emerald-300" : "bg-white text-[#08111a] hover:bg-white/90"
                      )}
                    >
                      {plan.cta}
                    </Button>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="faqs" className="px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.8fr_1.2fr]">
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
        </section>

        <section className="px-4 pb-24 pt-8 sm:px-6 lg:px-8 lg:pb-32">
          <div className="mx-auto max-w-7xl rounded-[34px] border border-white/10 bg-[linear-gradient(135deg,rgba(16,185,129,0.16),rgba(139,92,246,0.16))] p-[1px] shadow-[0_20px_120px_rgba(16,185,129,0.12)]">
            <div className="rounded-[33px] bg-[#07101b]/95 px-8 py-12 md:px-12 md:py-14">
              <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
                <div>
                  <SectionEyebrow>CTA final</SectionEyebrow>
                  <h2 className="text-balance text-3xl font-semibold tracking-tight text-white md:text-5xl">
                    Si tu negocio ya usa WhatsApp para vender o atender, esta es la forma más clara de ordenarlo y escalarlo
                  </h2>
                  <p className="mt-5 max-w-2xl text-base leading-7 text-white/66 md:text-lg">
                    Empieza con una demo o deja tu implementación solicitada. El objetivo no es venderte una plataforma abstracta, sino dejar un flujo útil que responda, filtre y mueva conversaciones hacia una acción real.
                  </p>
                </div>
                <div className="space-y-4 rounded-[28px] border border-white/10 bg-white/[0.04] p-6">
                  <div className="flex items-start gap-3 text-sm text-white/72">
                    <BarChart3 className="mt-1 h-4 w-4 text-emerald-300" />
                    Ver si tu operación actual encaja para atención, ventas, agendado o filtrado.
                  </div>
                  <div className="flex items-start gap-3 text-sm text-white/72">
                    <Workflow className="mt-1 h-4 w-4 text-violet-300" />
                    Definir el primer flujo útil para salir rápido y mejorar luego con conversaciones reales.
                  </div>
                  <div className="flex items-start gap-3 text-sm text-white/72">
                    <Bot className="mt-1 h-4 w-4 text-sky-300" />
                    Entrenar el agente con información real del negocio para que responda con contexto.
                  </div>
                  <div className="flex flex-col gap-3 pt-4 sm:flex-row">
                    <a href={primaryCta} target="_blank" rel="noreferrer" className="flex-1">
                      <Button size="lg" className="w-full rounded-2xl bg-emerald-400 text-[#032415] hover:bg-emerald-300">
                        Agendar demo
                      </Button>
                    </a>
                    <a href={secondaryCta} className="flex-1">
                      <Button variant="outline" size="lg" className="w-full rounded-2xl border-white/10 bg-white/[0.03] text-white hover:bg-white/[0.06]">
                        Solicitar implementación
                      </Button>
                    </a>
                  </div>
                  <p className="text-xs text-white/42">También puedes escribir directo a WhatsApp: {CONTACT_INFO.phoneNumber}</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

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
    </div>
  );
}
