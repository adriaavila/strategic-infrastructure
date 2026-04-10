import { useMemo, useRef, useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  BrainCircuit,
  Check,
  ChevronRight,
  Clock3,
  Gauge,
  Layers3,
  Mail,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  WalletCards,
  Workflow,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { siteConfig } from "@/data/site";
import { getWhatsAppUrl } from "@/config/contact";
import {
  buildDemoScenario,
  buildProposal,
  classifyPrompt,
  examplePrompts,
  getAnswerLabel,
  getClarificationQuestions,
  serviceTemplates,
  serviceTypeLabels,
  type BuilderClassification,
  type BuilderProposal,
  type BuilderQuestion,
} from "@/lib/service-builder";

type BuilderStage = "input" | "clarifying" | "proposal" | "complete";
type LeadAction = "call" | "email" | "deposit" | "save";

const sourceLabels: Record<string, string> = {
  "home-hero": "Builder desde hero",
  "home-final": "Builder desde CTA final",
  navbar: "Builder desde navegacion",
  "navbar-mobile": "Builder desde navegacion movil",
  footer: "Builder desde footer",
  contact: "Builder desde contacto",
  "contact-page": "Builder desde pagina de contacto",
  home: "Builder desde home",
};

const actionCopy: Record<LeadAction, { title: string; description: string }> = {
  call: {
    title: "Reserva una llamada corta",
    description: "Te pedimos tus datos para enviarte esta propuesta y cerrar supuestos antes de la llamada.",
  },
  email: {
    title: "Recibe la propuesta por email",
    description: "Guardamos tus datos para enviarte el resumen y dejar la propuesta lista para seguimiento.",
  },
  deposit: {
    title: "Pasa a anticipo",
    description: "Primero validamos datos y alcance base para que el inicio tenga un marco claro.",
  },
  save: {
    title: "Guarda esta propuesta",
    description: "Deja tus datos para recuperarla luego y retomar la conversacion sin perder contexto.",
  },
};

const proofCards = [
  {
    label: "Menos friccion",
    text: "Tu cliente entra con una idea vaga y sale con una direccion clara, no con mas dudas.",
  },
  {
    label: "Mejor brief",
    text: "Las preguntas priorizan lo que mueve alcance, tiempo y precio. No lo accesorio.",
  },
  {
    label: "Mas comprable",
    text: "La propuesta explica que incluye, que no incluye y cual es el siguiente paso comercial.",
  },
];

const guardrails = [
  "La IA no inventa precio. El pricing sale de catalogo y reglas visibles.",
  "Si el caso se va a XL, se propone llamada estrategica en vez de precision falsa.",
  "Siempre hay exclusiones, para que la propuesta se sienta honesta y comprable.",
  "El builder soporta solo 4 categorias para mantener claridad y consistencia.",
];

const flowSteps = [
  {
    step: "01",
    title: "Input libre",
    text: "El usuario describe lo que necesita como lo diria en una llamada o por WhatsApp.",
  },
  {
    step: "02",
    title: "Clasificacion",
    text: "La app detecta categoria, complejidad inicial y modulos probables.",
  },
  {
    step: "03",
    title: "Preguntas clave",
    text: "Se hacen solo las preguntas que mueven alcance, precio o timeline.",
  },
  {
    step: "04",
    title: "Propuesta comprable",
    text: "Se muestra solucion, alcance, exclusiones, tiempo estimado y siguiente paso.",
  },
];

const cxWins = [
  {
    icon: BrainCircuit,
    title: "Piensa en voz visible",
    text: "La persona ve que el sistema entendio la necesidad y la esta aterrizando en una oferta concreta.",
  },
  {
    icon: WalletCards,
    title: "Precio con contexto",
    text: "No soltamos un numero aislado. El rango siempre aparece explicado por servicio, modulos y complejidad.",
  },
  {
    icon: Workflow,
    title: "Un solo foco por pantalla",
    text: "Cada parte del flujo mueve a la siguiente accion: responder, revisar, guardar o agendar.",
  },
];

const inputClassName =
  "h-12 rounded-[1.15rem] border border-white/10 bg-white/5 px-4 text-sm text-foreground shadow-[0_14px_30px_rgba(17,19,27,0.06)] placeholder:text-foreground/45 focus-visible:ring-2 focus-visible:ring-[#D97C47]/25 focus-visible:ring-offset-0";

const textareaClassName =
  "rounded-[1.4rem] border border-white/10 bg-white/5 px-4 py-4 text-sm text-foreground shadow-[0_14px_30px_rgba(17,19,27,0.06)] placeholder:text-foreground/45 focus-visible:ring-2 focus-visible:ring-[#D97C47]/25 focus-visible:ring-offset-0";

const leadInitialState = {
  name: "",
  email: "",
  business: "",
  whatsapp: "",
};

export const ServiceBuilderHome = () => {
  const builderRef = useRef<HTMLElement | null>(null);
  const leadRef = useRef<HTMLDivElement | null>(null);
  const demoScenario = useMemo(() => buildDemoScenario(), []);
  const [prompt, setPrompt] = useState("");
  const [stage, setStage] = useState<BuilderStage>("input");
  const [classification, setClassification] = useState<BuilderClassification | null>(null);
  const [questions, setQuestions] = useState<BuilderQuestion[]>([]);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [shortAnswer, setShortAnswer] = useState("");
  const [proposal, setProposal] = useState<BuilderProposal | null>(null);
  const [selectedAction, setSelectedAction] = useState<LeadAction>("call");
  const [lead, setLead] = useState(leadInitialState);
  const [error, setError] = useState("");
  const [leadError, setLeadError] = useState("");

  const currentQuestion = questions[currentQuestionIndex] || null;
  const answeredCount = Object.values(answers).filter(Boolean).length;
  const progressValue =
    stage === "input"
      ? 6
      : stage === "clarifying"
        ? 20 + ((currentQuestionIndex + 1) / Math.max(questions.length, 1)) * 42
        : stage === "proposal"
          ? 80
          : 100;

  const sourceLabel = sourceLabels.home || "Builder desde home";

  const builderMessage = useMemo(() => {
    if (!proposal) {
      return "";
    }

    const answerLines = Object.entries(answers)
      .filter(([, value]) => value)
      .map(([questionId, value]) => `- ${getAnswerLabel(classification, questionId, value)}`);

    const leadLines = [
      `Nombre: ${lead.name || "No indicado"}`,
      `Email: ${lead.email || "No indicado"}`,
      `Negocio: ${lead.business || "No indicado"}`,
      `WhatsApp cliente: ${lead.whatsapp || "No indicado"}`,
    ];

    return [
      `Nuevo lead desde ${siteConfig.name} - ${sourceLabel}`,
      "",
      `Prompt original: ${prompt}`,
      `Servicio recomendado: ${proposal.serviceLabel}`,
      `Complejidad: ${proposal.complexityLevel}`,
      `Precio estimado: ${proposal.priceText}`,
      `Timeline: ${proposal.timelineText}`,
      "",
      "Respuestas clave:",
      ...(answerLines.length ? answerLines : ["- Propuesta preliminar sin todas las respuestas"]),
      "",
      "Datos del lead:",
      ...leadLines,
    ].join("\n");
  }, [answers, classification, lead.business, lead.email, lead.name, lead.whatsapp, prompt, proposal, sourceLabel]);

  const whatsappHref = builderMessage ? getWhatsAppUrl(builderMessage) : getWhatsAppUrl();
  const emailHref = builderMessage
    ? `mailto:${siteConfig.email}?subject=${encodeURIComponent(`Nuevo lead Service Builder - ${siteConfig.name}`)}&body=${encodeURIComponent(builderMessage)}`
    : `mailto:${siteConfig.email}`;

  const scrollToBuilder = () => {
    window.setTimeout(() => {
      builderRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 80);
  };

  const scrollToLeadCapture = () => {
    window.setTimeout(() => {
      leadRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 80);
  };

  const startBuilder = (nextPrompt?: string) => {
    const draft = (nextPrompt ?? prompt).trim();

    if (draft.length < 18) {
      setError("Escribe un poco mas de contexto para poder aterrizar la propuesta.");
      scrollToBuilder();
      return;
    }

    const nextClassification = classifyPrompt(draft);
    const nextQuestions = getClarificationQuestions(nextClassification);

    setPrompt(draft);
    setClassification(nextClassification);
    setQuestions(nextQuestions);
    setAnswers({});
    setCurrentQuestionIndex(0);
    setShortAnswer("");
    setProposal(null);
    setLead(leadInitialState);
    setLeadError("");
    setError("");
    setStage("clarifying");
    scrollToBuilder();
  };

  const finishBuilder = (draftAnswers: Record<string, string>) => {
    if (!classification) {
      return;
    }

    const nextProposal = buildProposal(prompt, classification, draftAnswers);
    setProposal(nextProposal);
    setAnswers(draftAnswers);
    setStage("proposal");
    setError("");
    scrollToBuilder();
  };

  const handleOptionSelect = (value: string) => {
    if (!currentQuestion) {
      return;
    }

    const nextAnswers = { ...answers, [currentQuestion.id]: value };

    if (currentQuestionIndex === questions.length - 1) {
      finishBuilder(nextAnswers);
      return;
    }

    setAnswers(nextAnswers);
    setCurrentQuestionIndex((index) => index + 1);
    setShortAnswer("");
  };

  const handleShortAnswerSubmit = () => {
    if (!currentQuestion) {
      return;
    }

    const draft = shortAnswer.trim();
    if (draft.length < 2) {
      setError("Necesito una respuesta corta para entender el nucleo del MVP.");
      return;
    }

    const nextAnswers = { ...answers, [currentQuestion.id]: draft };

    if (currentQuestionIndex === questions.length - 1) {
      finishBuilder(nextAnswers);
      return;
    }

    setAnswers(nextAnswers);
    setCurrentQuestionIndex((index) => index + 1);
    setShortAnswer("");
    setError("");
  };

  const handlePromptKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      startBuilder();
    }
  };

  const handleLeadSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!lead.name.trim() || !lead.email.trim() || !lead.business.trim()) {
      setLeadError("Nombre, email y negocio son obligatorios para guardar o enviar la propuesta.");
      return;
    }

    setLeadError("");
    setStage("complete");
    scrollToLeadCapture();
  };

  const openLeadAction = (action: LeadAction) => {
    setSelectedAction(action);
    scrollToLeadCapture();
  };

  return (
    <>
      <section className="relative overflow-hidden px-6 pb-16 pt-28 md:px-10 md:pb-24 md:pt-36">
        <div
          className="absolute inset-0"
          aria-hidden="true"
          style={{
            background:
              "radial-gradient(circle at 12% 16%, rgba(217,124,71,0.18), transparent 28%), radial-gradient(circle at 82% 18%, rgba(74,94,84,0.16), transparent 24%), linear-gradient(180deg, rgba(10,10,12,0.95) 0%, rgba(16,16,18,0.78) 100%)",
          }}
        />
        <div className="absolute inset-0 architectural-grid opacity-[0.14]" aria-hidden="true" />
        <div className="absolute left-[6%] top-24 h-48 w-48 rounded-full bg-[#D97C47]/15 blur-3xl" aria-hidden="true" />
        <div className="absolute bottom-10 right-[6%] h-56 w-56 rounded-full bg-[#526A5A]/14 blur-3xl" aria-hidden="true" />

        <div className="relative mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[1.06fr_0.94fr] lg:items-end">
            <div className="max-w-[46rem]">
              <div className="hero-entry" style={{ animationDelay: "60ms" }}>
                <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 font-mono text-[11px] uppercase tracking-[0.24em] text-foreground/70 backdrop-blur">
                  <Sparkles className="h-3.5 w-3.5 text-[#D97C47]" />
                  Service Builder MVP
                </span>
              </div>

              <h1
                className="hero-entry mt-6 max-w-[10ch] font-heading text-[clamp(3.4rem,8vw,7rem)] font-semibold leading-[0.88] tracking-[-0.08em] text-white"
                style={{ animationDelay: "140ms" }}
              >
                Describe lo que necesitas y recibe una propuesta clara en minutos.
              </h1>

              <p
                className="hero-entry mt-6 max-w-[38rem] text-base leading-8 text-foreground/72 md:text-[1.06rem]"
                style={{ animationDelay: "220ms" }}
              >
                Landing pages, automatizaciones, sistemas de captacion y apps simples. Sin briefs eternos,
                sin cotizaciones vacias y sin hacer que el cliente tenga que saber pedir perfecto.
              </p>

              <div
                className="hero-entry mt-8 rounded-[2rem] border border-white/10 bg-white/5 p-4 shadow-[0_24px_60px_rgba(17,19,27,0.08)] backdrop-blur md:p-5"
                style={{ animationDelay: "300ms" }}
              >
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-foreground/48">Prompt inicial</p>
                    <p className="mt-2 text-sm text-foreground/62">Escribe como lo dirias por voz o por WhatsApp.</p>
                  </div>
                  <div className="hidden rounded-full border border-white/10 bg-[#161618] px-3 py-1 font-mono text-[11px] uppercase tracking-[0.22em] text-white lg:block">
                    idea - propuesta
                  </div>
                </div>

                <Textarea
                  value={prompt}
                  onChange={(event) => setPrompt(event.target.value)}
                  onKeyDown={handlePromptKeyDown}
                  placeholder="Ej. Quiero una landing para captar leads y que me escriban por WhatsApp."
                  className={`${textareaClassName} mt-4 min-h-[132px] bg-[#111116]`}
                />

                {error ? <p className="mt-3 text-sm text-[#B45A2A]">{error}</p> : null}

                <div className="mt-4 flex flex-col gap-3 md:flex-row">
                  <Button
                    size="lg"
                    onClick={() => startBuilder()}
                    className="justify-center rounded-full border border-[#161618] bg-[#161618] px-7 text-white shadow-none hover:bg-black"
                  >
                    Generar propuesta
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    asChild
                    className="justify-center rounded-full border-white/10 bg-white/5 text-foreground hover:bg-white/5"
                  >
                    <a href="#catalogo">
                      Ver categorias soportadas
                      <ArrowUpRight className="h-4 w-4" />
                    </a>
                  </Button>
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  {examplePrompts.map((example) => (
                    <button
                      key={example}
                      type="button"
                      onClick={() => startBuilder(example)}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-left text-xs leading-5 text-foreground/72 transition hover:border-[#D97C47]/30 hover:bg-white/5"
                    >
                      {example}
                    </button>
                  ))}
                </div>
              </div>

              <div
                className="hero-entry mt-8 grid gap-3 sm:grid-cols-3"
                style={{ animationDelay: "380ms" }}
              >
                {proofCards.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-[1.4rem] border border-white/5 bg-white/5 p-4 shadow-[0_14px_28px_rgba(17,19,27,0.05)] backdrop-blur"
                  >
                    <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-[#B45A2A]">{item.label}</p>
                    <p className="mt-3 text-sm leading-6 text-foreground/72">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="hero-entry lg:pb-4" style={{ animationDelay: "240ms" }}>
              <div className="section-shell overflow-hidden border-white/10 bg-[#161618] p-5 text-white shadow-[0_30px_80px_rgba(17,19,27,0.18)]">
                <div className="relative z-10">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-white/45">Preview live</p>
                      <h2 className="mt-3 max-w-[10ch] text-[clamp(2rem,3vw,3rem)] font-semibold leading-[0.92] text-white">
                        Asi se ve una propuesta que ya se siente comprable.
                      </h2>
                    </div>
                    <div className="rounded-full border border-white/12 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.22em] text-white/56">
                      Demo
                    </div>
                  </div>

                  <div className="mt-6 rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-4">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="rounded-full border border-white/10 bg-white/[0.06] px-3 py-1 font-mono text-[11px] uppercase tracking-[0.22em] text-white/70">
                        {demoScenario.proposal.serviceLabel}
                      </span>
                      <span className="rounded-full border border-[#D97C47]/30 bg-[#D97C47]/12 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.22em] text-[#FFD8C4]">
                        Complejidad {demoScenario.proposal.complexityLevel}
                      </span>
                    </div>

                    <h3 className="mt-5 text-2xl font-semibold leading-tight text-white">{demoScenario.proposal.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-white/68">{demoScenario.proposal.summary}</p>

                    <div className="mt-5 grid gap-3 md:grid-cols-2">
                      <div className="rounded-[1.35rem] border border-white/10 bg-white/[0.04] p-4">
                        <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-white/42">Tiempo</p>
                        <p className="mt-3 text-sm leading-6 text-white/80">{demoScenario.proposal.timelineText}</p>
                      </div>
                      <div className="rounded-[1.35rem] border border-white/10 bg-white/[0.04] p-4">
                        <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-white/42">Precio</p>
                        <p className="mt-3 text-sm leading-6 text-white/80">{demoScenario.proposal.priceText}</p>
                      </div>
                    </div>

                    <div className="mt-5 space-y-3">
                      {demoScenario.proposal.scope.slice(0, 3).map((item) => (
                        <div key={item} className="flex items-start gap-3 text-sm text-white/80">
                          <Check className="mt-0.5 h-4 w-4 text-[#D97C47]" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-4 rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-4">
                    <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-white/45">Thinking visible</p>
                    <div className="mt-3 grid gap-3 sm:grid-cols-3">
                      {[
                        ["Clasifica", "Categoria, modulos y complejidad inicial."],
                        ["Pregunta", "Solo lo que impacta alcance y pricing."],
                        ["Propone", "Resumen, exclusiones y siguiente paso."],
                      ].map(([title, text]) => (
                        <div key={title} className="rounded-[1.1rem] border border-white/10 bg-white/[0.03] p-3">
                          <p className="text-sm font-medium text-white">{title}</p>
                          <p className="mt-2 text-xs leading-5 text-white/58">{text}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="builder" ref={builderRef} className="px-6 py-10 md:px-10 md:py-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-[48rem]">
              <span className="eyebrow">Builder live</span>
              <h2 className="mt-4 text-[clamp(2.2rem,4.2vw,4.1rem)] font-semibold leading-[0.93] tracking-[-0.06em] text-white">
                Una sola sesion para pasar de idea vaga a propuesta estructurada.
              </h2>
            </div>
            <p className="max-w-[28rem] text-sm leading-7 text-foreground/66">
              El sistema no reemplaza criterio humano. Lo usa para reducir friccion, ordenar el brief y subir la calidad del lead.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-[1.08fr_0.92fr]">
            <div className="section-shell overflow-hidden border-white/10 bg-[#111116] p-6 md:p-8">
              <div className="relative z-10">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-foreground/45">Estado actual</p>
                    <h3 className="mt-2 text-2xl font-semibold tracking-[-0.04em] text-white">
                      {stage === "input"
                        ? "Esperando necesidad inicial"
                        : stage === "clarifying"
                          ? "Resolviendo ambiguedades clave"
                          : stage === "proposal"
                            ? "Propuesta generada"
                            : "Lead capturado y siguiente paso listo"}
                    </h3>
                  </div>

                  <div className="rounded-full border border-white/10 bg-white/5 px-4 py-2 font-mono text-[11px] uppercase tracking-[0.22em] text-foreground/56">
                    {classification ? serviceTypeLabels[classification.primaryServiceType] : "Session idle"}
                  </div>
                </div>

                <div className="mt-6">
                  <Progress value={progressValue} className="h-2.5 rounded-full bg-black/6 [&_[data-state]]:bg-[#D97C47]" />
                  <div className="mt-3 flex items-center justify-between text-xs uppercase tracking-[0.18em] text-foreground/42">
                    <span>Idea</span>
                    <span>Preguntas</span>
                    <span>Propuesta</span>
                    <span>Lead</span>
                  </div>
                </div>

                {stage === "input" ? (
                  <div className="mt-8 rounded-[1.7rem] border border-dashed border-white/10 bg-white/5 p-5 md:p-6">
                    <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-[#B45A2A]">Primera entrada</p>
                    <h4 className="mt-3 text-2xl font-semibold leading-tight text-white">
                      Empieza con una necesidad real, no con el nombre del servicio.
                    </h4>
                    <p className="mt-4 max-w-[38rem] text-sm leading-7 text-foreground/68">
                      El builder esta pensado para founders, pequenos equipos y negocios que saben el problema, pero no siempre saben pedir la solucion.
                    </p>

                    <div className="mt-6 grid gap-3 md:grid-cols-2">
                      {flowSteps.slice(0, 2).map((step) => (
                        <div key={step.step} className="rounded-[1.3rem] border border-white/5 bg-white/5 p-4">
                          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-[#B45A2A]">
                            {step.step} · {step.title}
                          </p>
                          <p className="mt-3 text-sm leading-6 text-foreground/72">{step.text}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : null}

                {stage === "clarifying" && classification && currentQuestion ? (
                  <div className="mt-8">
                    <div className="rounded-[1.55rem] border border-white/10 bg-white/5 p-4">
                      <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-[#B45A2A]">Lo que entendimos</p>
                      <p className="mt-3 text-sm leading-7 text-foreground/72">{classification.intent}</p>
                    </div>

                    <div className="mt-6 rounded-[1.9rem] border border-white/10 bg-white/5 p-5 shadow-[0_20px_40px_rgba(17,19,27,0.05)] md:p-6">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-foreground/45">
                            Pregunta {currentQuestionIndex + 1} de {questions.length}
                          </p>
                          <h4 className="mt-3 text-[clamp(1.55rem,3vw,2.3rem)] font-semibold leading-tight tracking-[-0.04em] text-white">
                            {currentQuestion.question}
                          </h4>
                        </div>
                        <div className="hidden rounded-full border border-white/10 bg-[#161618] px-3 py-1 font-mono text-[11px] uppercase tracking-[0.22em] text-white md:block">
                          {classification.complexityLevel}
                        </div>
                      </div>

                      <p className="mt-4 max-w-[42rem] text-sm leading-7 text-foreground/64">{currentQuestion.reason}</p>

                      {currentQuestion.answerType === "single" ? (
                        <div className="mt-6 grid gap-3">
                          {currentQuestion.options?.map((option) => (
                            <button
                              key={option.value}
                              type="button"
                              onClick={() => handleOptionSelect(option.value)}
                              className="group rounded-[1.45rem] border border-white/10 bg-white/5 px-4 py-4 text-left transition hover:border-[#D97C47]/35 hover:bg-[#FFF9F2]"
                            >
                              <div className="flex items-start justify-between gap-4">
                                <div>
                                  <p className="text-sm font-medium text-white">{option.label}</p>
                                  {option.hint ? (
                                    <p className="mt-2 text-sm leading-6 text-foreground/60">{option.hint}</p>
                                  ) : null}
                                </div>
                                <ChevronRight className="mt-1 h-4 w-4 text-foreground/40 transition group-hover:translate-x-0.5 group-hover:text-[#D97C47]" />
                              </div>
                            </button>
                          ))}
                        </div>
                      ) : (
                        <div className="mt-6">
                          <Input
                            value={shortAnswer}
                            onChange={(event) => setShortAnswer(event.target.value)}
                            placeholder={currentQuestion.placeholder}
                            className={inputClassName}
                          />
                          <div className="mt-4 flex flex-col gap-3 sm:flex-row">
                            <Button
                              onClick={handleShortAnswerSubmit}
                              className="rounded-full border border-[#161618] bg-[#161618] px-6 text-white shadow-none hover:bg-black"
                            >
                              Continuar
                              <ArrowRight className="h-4 w-4" />
                            </Button>
                            <Button
                              variant="outline"
                              onClick={() => finishBuilder({ ...answers, [currentQuestion.id]: shortAnswer.trim() })}
                              className="rounded-full border-white/10 bg-white/5 text-foreground hover:bg-white/5"
                            >
                              Generar con esto por ahora
                            </Button>
                          </div>
                        </div>
                      )}

                      <div className="mt-6 border-t border-white/5 pt-4">
                        <button
                          type="button"
                          onClick={() => finishBuilder(answers)}
                          className="text-sm font-medium text-foreground/62 transition hover:text-[#B45A2A]"
                        >
                          No quiero responder mas. Genera una propuesta preliminar.
                        </button>
                      </div>
                    </div>
                  </div>
                ) : null}

                {(stage === "proposal" || stage === "complete") && proposal ? (
                  <div className="mt-8 space-y-5">
                    <div className="rounded-[2rem] border border-white/10 bg-[#161618] p-5 text-white md:p-6">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="rounded-full border border-white/12 bg-white/10 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.22em] text-white/72">
                          {proposal.serviceLabel}
                        </span>
                        <span className="rounded-full border border-[#D97C47]/30 bg-[#D97C47]/14 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.22em] text-[#FFD8C4]">
                          Complejidad {proposal.complexityLevel}
                        </span>
                        <span className="rounded-full border border-white/10 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.22em] text-white/56">
                          {Math.round(proposal.confidenceScore * 100)}% confidence
                        </span>
                      </div>

                      <h4 className="mt-5 text-[clamp(1.9rem,4vw,3rem)] font-semibold leading-[0.94] tracking-[-0.05em] text-white">
                        {proposal.title}
                      </h4>
                      <p className="mt-4 max-w-[46rem] text-sm leading-7 text-white/68">{proposal.summary}</p>

                      <div className="mt-6 grid gap-4 md:grid-cols-2">
                        <div className="rounded-[1.45rem] border border-white/10 bg-white/[0.04] p-4">
                          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-white/42">Objetivo</p>
                          <p className="mt-3 text-sm leading-7 text-white/78">{proposal.objective}</p>
                        </div>
                        <div className="rounded-[1.45rem] border border-white/10 bg-white/[0.04] p-4">
                          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-white/42">Precio estimado</p>
                          <p className="mt-3 text-sm leading-7 text-white/78">{proposal.priceText}</p>
                        </div>
                      </div>
                    </div>

                    <div className="grid gap-5 lg:grid-cols-[1.04fr_0.96fr]">
                      <div className="space-y-5">
                        <div className="rounded-[1.8rem] border border-white/10 bg-white/5 p-5 shadow-[0_18px_36px_rgba(17,19,27,0.05)]">
                          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-foreground/45">Que incluye</p>
                          <div className="mt-4 space-y-3">
                            {proposal.scope.map((item) => (
                              <div key={item} className="flex items-start gap-3 text-sm text-foreground/74">
                                <Check className="mt-0.5 h-4 w-4 text-[#B45A2A]" />
                                <span>{item}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="rounded-[1.8rem] border border-white/10 bg-white/5 p-5 shadow-[0_18px_36px_rgba(17,19,27,0.05)]">
                          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-foreground/45">Que no incluye</p>
                          <div className="mt-4 space-y-3">
                            {proposal.exclusions.map((item) => (
                              <div key={item} className="flex items-start gap-3 text-sm text-foreground/74">
                                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-foreground/35" />
                                <span>{item}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div className="space-y-5">
                        <div className="rounded-[1.8rem] border border-white/10 bg-white/5 p-5">
                          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-[#B45A2A]">Timeline</p>
                          <p className="mt-3 text-sm leading-7 text-foreground/74">{proposal.timelineText}</p>
                        </div>

                        <div className="rounded-[1.8rem] border border-white/10 bg-white/5 p-5 shadow-[0_18px_36px_rgba(17,19,27,0.05)]">
                          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-foreground/45">Pricing breakdown</p>
                          <div className="mt-4 space-y-3">
                            {proposal.pricingLines.map((line) => (
                              <div key={`${line.label}-${line.amount}`} className="flex items-center justify-between gap-4 text-sm">
                                <span className="text-foreground/68">{line.label}</span>
                                <span className="font-medium text-white">{line.amount}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="rounded-[1.8rem] border border-white/10 bg-white/5 p-5 shadow-[0_18px_36px_rgba(17,19,27,0.05)]">
                          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-foreground/45">Opcionales</p>
                          <div className="mt-4 space-y-3">
                            {proposal.optionals.map((item) => (
                              <div key={item} className="flex items-start gap-3 text-sm text-foreground/72">
                                <ArrowUpRight className="mt-0.5 h-4 w-4 text-[#526A5A]" />
                                <span>{item}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="rounded-[1.8rem] border border-white/10 bg-white/5 p-5 shadow-[0_18px_36px_rgba(17,19,27,0.05)]">
                      <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
                        <div className="max-w-[38rem]">
                          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-foreground/45">Siguiente paso</p>
                          <p className="mt-3 text-sm leading-7 text-foreground/68">
                            Elige como quieres seguir. Antes de enviar o guardar la propuesta, capturamos tus datos para no perder contexto.
                          </p>
                        </div>
                        <div className="flex flex-wrap gap-3">
                          <Button
                            size="lg"
                            onClick={() => openLeadAction("call")}
                            className="rounded-full border border-[#161618] bg-[#161618] px-6 text-white shadow-none hover:bg-black"
                          >
                            Agendar llamada
                          </Button>
                          <Button
                            size="lg"
                            variant="outline"
                            onClick={() => openLeadAction("email")}
                            className="rounded-full border-white/10 bg-white/5 text-foreground hover:bg-white/5"
                          >
                            Recibir por email
                          </Button>
                          <Button
                            size="lg"
                            variant="outline"
                            onClick={() => openLeadAction("deposit")}
                            className="rounded-full border-white/10 bg-white/5 text-foreground hover:bg-white/5"
                          >
                            Iniciar con anticipo
                          </Button>
                          <Button
                            size="lg"
                            variant="outline"
                            onClick={() => openLeadAction("save")}
                            className="rounded-full border-white/10 bg-white/5 text-foreground hover:bg-white/5"
                          >
                            Guardar propuesta
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : null}
              </div>
            </div>

            <div className="space-y-5 lg:sticky lg:top-28 lg:h-fit">
              <div className="section-shell overflow-hidden border-white/10 bg-[#161618] p-5 text-white">
                <div className="relative z-10">
                  <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-white/45">Motor visible</p>
                  <h3 className="mt-3 text-[1.75rem] font-semibold leading-[0.96] text-white">
                    El sistema no solo pregunta. Explica lo que esta construyendo.
                  </h3>

                  <div className="mt-5 space-y-3">
                    {[
                      {
                        label: "Categoria",
                        value: classification ? serviceTypeLabels[classification.primaryServiceType] : "Por detectar",
                        icon: Layers3,
                      },
                      {
                        label: "Complejidad",
                        value: classification ? classification.complexityLevel : "Pendiente",
                        icon: Gauge,
                      },
                      {
                        label: "Confianza",
                        value: classification ? `${Math.round(classification.confidenceScore * 100)}%` : "N/A",
                        icon: BadgeCheck,
                      },
                    ].map((item) => (
                      <div
                        key={item.label}
                        className="flex items-center justify-between gap-4 rounded-[1.25rem] border border-white/10 bg-white/[0.04] px-4 py-3"
                      >
                        <div className="flex items-center gap-3">
                          <item.icon className="h-4 w-4 text-[#D97C47]" />
                          <span className="text-sm text-white/66">{item.label}</span>
                        </div>
                        <span className="text-sm font-medium text-white">{item.value}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-5 rounded-[1.35rem] border border-white/10 bg-white/[0.04] p-4">
                    <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-white/42">Brief quality</p>
                    <p className="mt-3 text-sm leading-7 text-white/70">
                      {classification
                        ? classification.businessContext
                        : "Todavia no hay clasificacion. En cuanto dejes una necesidad, empezamos a reducir ambiguedad."}
                    </p>
                  </div>

                  <div className="mt-5 rounded-[1.35rem] border border-white/10 bg-white/[0.04] p-4">
                    <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-white/42">Faltaria definir</p>
                    <div className="mt-3 space-y-2">
                      {(classification?.missingInfo || ["objetivo comercial", "alcance base", "plazo", "modulos"])
                        .slice(0, 4)
                        .map((item) => (
                          <div key={item} className="flex items-start gap-3 text-sm text-white/68">
                            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#D97C47]" />
                            <span>{item}</span>
                          </div>
                        ))}
                    </div>
                  </div>

                  <div className="mt-5 rounded-[1.35rem] border border-white/10 bg-white/[0.04] p-4">
                    <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-white/42">Respuestas guardadas</p>
                    <div className="mt-3 space-y-3">
                      {answeredCount ? (
                        Object.entries(answers).map(([questionId, value]) => (
                          <div key={questionId} className="rounded-[1rem] border border-white/8 bg-white/[0.03] p-3 text-sm text-white/72">
                            {getAnswerLabel(classification, questionId, value)}
                          </div>
                        ))
                      ) : (
                        <p className="text-sm leading-7 text-white/58">
                          Aun no hay respuestas. En esta columna se va formando el brief util para ventas.
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              <div ref={leadRef} className="section-shell overflow-hidden border-white/10 bg-[#111116] p-5">
                <div className="relative z-10">
                  <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-foreground/45">Lead capture</p>
                  <h3 className="mt-3 text-[1.75rem] font-semibold leading-[0.98] tracking-[-0.04em] text-white">
                    {actionCopy[selectedAction].title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-foreground/66">{actionCopy[selectedAction].description}</p>

                  {stage === "complete" ? (
                    <div className="mt-6 rounded-[1.55rem] border border-white/10 bg-white/5 p-5">
                      <div className="flex items-start gap-3">
                        <ShieldCheck className="mt-0.5 h-5 w-5 text-[#B45A2A]" />
                        <div>
                          <p className="text-sm font-medium text-white">Propuesta lista para seguir.</p>
                          <p className="mt-2 text-sm leading-7 text-foreground/68">
                            Ya tienes un brief mas util que un formulario comun. Ahora puedes seguir por llamada, email o WhatsApp.
                          </p>
                        </div>
                      </div>

                      <div className="mt-5 grid gap-3">
                        <Button
                          size="lg"
                          asChild
                          className="justify-center rounded-full border border-[#161618] bg-[#161618] text-white shadow-none hover:bg-black"
                        >
                          <a href={whatsappHref} target="_blank" rel="noopener noreferrer">
                            <MessageCircle className="h-4 w-4" />
                            Seguir por WhatsApp
                          </a>
                        </Button>
                        <Button
                          size="lg"
                          variant="outline"
                          asChild
                          className="justify-center rounded-full border-white/10 bg-white/5 text-foreground hover:bg-white/5"
                        >
                          <a href={emailHref}>
                            <Mail className="h-4 w-4" />
                            Enviar por email
                          </a>
                        </Button>
                      </div>
                    </div>
                  ) : (
                    <form className="mt-6 space-y-4" onSubmit={handleLeadSubmit}>
                      <Input
                        value={lead.name}
                        onChange={(event) => setLead((current) => ({ ...current, name: event.target.value }))}
                        placeholder="Nombre"
                        className={inputClassName}
                      />
                      <Input
                        value={lead.email}
                        type="email"
                        onChange={(event) => setLead((current) => ({ ...current, email: event.target.value }))}
                        placeholder="Email"
                        className={inputClassName}
                      />
                      <Input
                        value={lead.business}
                        onChange={(event) => setLead((current) => ({ ...current, business: event.target.value }))}
                        placeholder="Negocio o marca"
                        className={inputClassName}
                      />
                      <Input
                        value={lead.whatsapp}
                        onChange={(event) => setLead((current) => ({ ...current, whatsapp: event.target.value }))}
                        placeholder="WhatsApp opcional"
                        className={inputClassName}
                      />

                      {leadError ? <p className="text-sm text-[#B45A2A]">{leadError}</p> : null}

                      <Button
                        type="submit"
                        size="lg"
                        className="w-full justify-center rounded-full border border-[#161618] bg-[#161618] text-white shadow-none hover:bg-black"
                      >
                        Guardar y continuar
                        <ArrowRight className="h-4 w-4" />
                      </Button>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="como-funciona" className="px-6 py-10 md:px-10 md:py-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-[42rem]">
              <span className="eyebrow">Como funciona</span>
              <h2 className="mt-4 text-[clamp(2.1rem,4vw,3.8rem)] font-semibold leading-[0.95] tracking-[-0.055em] text-white">
                No es un formulario largo. Es una experiencia de venta guiada.
              </h2>
            </div>
            <p className="max-w-[28rem] text-sm leading-7 text-foreground/66">
              La idea es que la web se sienta mas producto que agencia tradicional: mas clara, mas rapida y mas comprable.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {flowSteps.map((step) => (
              <article key={step.step} className="section-shell border-white/10 bg-white/5 p-5 md:p-6">
                <div className="relative z-10">
                  <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-[#B45A2A]">{step.step}</p>
                  <h3 className="mt-4 text-2xl font-semibold leading-tight text-white">{step.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-foreground/70">{step.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="catalogo" className="px-6 py-10 md:px-10 md:py-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-[44rem]">
              <span className="eyebrow">Catalogo MVP</span>
              <h2 className="mt-4 text-[clamp(2.1rem,4vw,3.8rem)] font-semibold leading-[0.95] tracking-[-0.055em] text-white">
                Cuatro categorias cerradas para que el precio se sienta consistente y honesto.
              </h2>
            </div>
            <p className="max-w-[28rem] text-sm leading-7 text-foreground/66">
              El MVP no intenta soportar todo. Cierra el catalogo para subir claridad, calidad del brief y velocidad comercial.
            </p>
          </div>

          <div className="grid gap-5 lg:grid-cols-2">
            {serviceTemplates.map((template) => (
              <article key={template.serviceType} className="section-shell border-white/10 bg-white/5 p-6 md:p-7">
                <div className="relative z-10">
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <div>
                      <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-[#B45A2A]">{template.shortLabel}</p>
                      <h3 className="mt-3 text-[2rem] font-semibold leading-[0.95] tracking-[-0.045em] text-white">
                        {template.label}
                      </h3>
                    </div>
                    <div className="rounded-[1.25rem] border border-white/10 bg-white/5 px-4 py-3 text-right">
                      <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-foreground/45">Desde</p>
                      <p className="mt-1 text-sm font-medium text-white">
                        {template.basePrice[0].toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 })}
                      </p>
                    </div>
                  </div>

                  <p className="mt-4 text-sm leading-7 text-foreground/70">{template.description}</p>

                  <div className="mt-5 grid gap-4 md:grid-cols-2">
                    <div className="rounded-[1.35rem] border border-white/5 bg-[#111116] p-4">
                      <div className="flex items-center gap-2 text-sm font-medium text-white">
                        <Clock3 className="h-4 w-4 text-[#B45A2A]" />
                        Tiempo base
                      </div>
                      <p className="mt-3 text-sm leading-6 text-foreground/70">
                        {template.baseTimelineWeeks[0]}-{template.baseTimelineWeeks[1]} semanas
                      </p>
                    </div>

                    <div className="rounded-[1.35rem] border border-white/5 bg-[#111116] p-4">
                      <div className="flex items-center gap-2 text-sm font-medium text-white">
                        <WalletCards className="h-4 w-4 text-[#526A5A]" />
                        Rango base
                      </div>
                      <p className="mt-3 text-sm leading-6 text-foreground/70">
                        {template.basePrice[0].toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 })} -{" "}
                        {template.basePrice[1].toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 })}
                      </p>
                    </div>
                  </div>

                  <div className="mt-5 space-y-3">
                    {template.deliverables.slice(0, 3).map((item) => (
                      <div key={item} className="flex items-start gap-3 text-sm text-foreground/72">
                        <Check className="mt-0.5 h-4 w-4 text-[#B45A2A]" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="mvp" className="px-6 py-10 md:px-10 md:py-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-5 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="section-shell border-white/10 bg-[#161618] p-6 text-white md:p-8">
              <div className="relative z-10">
                <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-white/45">Guardrails</p>
                <h2 className="mt-4 max-w-[12ch] text-[clamp(2rem,3.8vw,3.5rem)] font-semibold leading-[0.94] tracking-[-0.05em] text-white">
                  Para que la propuesta no prometa de mas.
                </h2>
                <div className="mt-6 space-y-3">
                  {guardrails.map((item) => (
                    <div
                      key={item}
                      className="rounded-[1.4rem] border border-white/10 bg-white/[0.04] px-4 py-4 text-sm leading-7 text-white/72"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid gap-5">
              <div className="section-shell border-white/10 bg-white/5 p-6 md:p-7">
                <div className="relative z-10">
                  <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-[#B45A2A]">UX principles</p>
                  <div className="mt-5 grid gap-4">
                    {cxWins.map((item) => (
                      <article key={item.title} className="rounded-[1.45rem] border border-white/5 bg-[#111116] p-4">
                        <div className="flex items-start gap-3">
                          <item.icon className="mt-1 h-5 w-5 text-[#B45A2A]" />
                          <div>
                            <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                            <p className="mt-2 text-sm leading-7 text-foreground/70">{item.text}</p>
                          </div>
                        </div>
                      </article>
                    ))}
                  </div>
                </div>
              </div>

              <div className="section-shell border-white/10 bg-white/5 p-6 md:p-7">
                <div className="relative z-10">
                  <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-[#B45A2A]">Objetivo del MVP</p>
                  <h3 className="mt-3 text-[2rem] font-semibold leading-[0.96] tracking-[-0.045em] text-white">
                    Pasar de idea a propuesta y luego al siguiente paso comercial en la misma sesion.
                  </h3>
                  <p className="mt-4 max-w-[42rem] text-sm leading-7 text-foreground/72">
                    Menos tiempo perdido en discovery, mejores briefs para el equipo y una experiencia que se siente mas software que agencia artesanal.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 pb-14 pt-10 md:px-10 md:pb-20 md:pt-16">
        <div className="mx-auto max-w-7xl">
          <div className="overflow-hidden rounded-[2.4rem] bg-[#161618] px-6 py-10 text-white md:px-12 md:py-14">
            <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
              <div className="max-w-[44rem]">
                <p className="font-mono text-[11px] uppercase tracking-[0.26em] text-white/45">Final CTA</p>
                <h2 className="mt-4 text-[clamp(2.3rem,4.4vw,4.3rem)] font-semibold leading-[0.93] tracking-[-0.06em] text-white">
                  Si la preventa hoy depende demasiado de llamadas y mensajes, ya hay una forma mas clara de vender.
                </h2>
                <p className="mt-5 max-w-[34rem] text-base leading-8 text-white/68">
                  Arranca con el builder, deja que la propuesta tome forma y usa la llamada para cerrar, no para entender desde cero.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                <Button
                  size="lg"
                  asChild
                  className="justify-center rounded-full border border-white/12 bg-[#D97C47] px-8 text-white shadow-none hover:bg-[#C86F3D]"
                >
                  <a href="#builder">
                    Abrir builder
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  asChild
                  className="justify-center rounded-full border-white/14 bg-white/8 text-white shadow-none hover:bg-white/12 hover:text-white"
                >
                  <a href={getWhatsAppUrl("Hola, quiero usar Service Builder para estructurar una propuesta.")} target="_blank" rel="noopener noreferrer">
                    WhatsApp
                    <MessageCircle className="h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
