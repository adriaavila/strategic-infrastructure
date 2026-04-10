import { ArrowRight, ArrowUpRight, Check, MessageSquareText } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/ui/Logo";
import { getWhatsAppUrl } from "@/config/contact";
import { featuredProjects } from "@/data/projects";

const serviceCards = [
  {
    index: "01",
    title: "Landing pages",
    description: "Para vender una oferta puntual con una pagina corta, elegante y hecha para generar conversaciones.",
  },
  {
    index: "02",
    title: "Websites de marca",
    description: "Para negocios que ya hacen buen trabajo, pero todavia se ven mas pequenos o mas confusos de lo que son.",
  },
  {
    index: "03",
    title: "Sistemas web",
    description: "Para equipos que necesitan ordenar procesos y dejar de operar entre mensajes, notas y pasos manuales.",
  },
];

const manifesto = [
  "Tu cliente decide rapido.",
  "Si no entiende, se va.",
  "Si no confia, no escribe.",
  "Si todo se ve igual, no te recuerda.",
];

const method = [
  {
    label: "Claridad",
    title: "Definimos el mensaje antes del layout.",
    description: "La homepage no arranca con decoracion. Arranca con posicionamiento, prioridad y accion principal.",
  },
  {
    label: "Direccion",
    title: "Disenamos algo que se sienta tuyo.",
    description: "Construimos una presencia mas fina, mas actual y mas memorable. No una web correcta. Una web con criterio.",
  },
  {
    label: "Conversion",
    title: "Todo apunta a una siguiente accion.",
    description: "Cada bloque existe para ayudar a entender, confiar o escribir. Si no hace una de esas tres, sale.",
  },
];

const featuredCases = featuredProjects.slice(0, 3);

export const HomeSimple = () => {
  const heroCase = featuredCases[0];
  const sideCases = featuredCases.slice(1);

  return (
    <>
      <section className="relative overflow-hidden px-6 pb-16 pt-28 md:px-10 md:pb-24 md:pt-36">
        <div className="absolute inset-0 gradient-mesh opacity-95" aria-hidden="true" />
        <div
          className="absolute inset-0 architectural-grid opacity-[0.16] [mask-image:radial-gradient(circle_at_45%_34%,#000_24%,transparent_76%)]"
          aria-hidden="true"
        />
        <div className="absolute left-[4%] top-24 h-48 w-48 rounded-full bg-brand-primary/12 blur-3xl" aria-hidden="true" />
        <div className="absolute bottom-10 right-[6%] h-64 w-64 rounded-full bg-brand-secondary/12 blur-3xl" aria-hidden="true" />
        <div className="absolute left-1/2 top-[14%] hidden h-px w-[72%] -translate-x-1/2 bg-gradient-to-r from-transparent via-foreground/10 to-transparent lg:block" aria-hidden="true" />

        <div className="relative mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[1.12fr_0.88fr] lg:items-end">
            <div className="max-w-[48rem]">
              <div className="hero-entry" style={{ animationDelay: "60ms" }}>
                <span className="eyebrow">Web design for brands that want to look expensive</span>
              </div>

              <div className="hero-entry mt-6" style={{ animationDelay: "120ms" }}>
                <Logo className="text-[clamp(3rem,7vw,6rem)]" symbolClassName="translate-y-[12%]" />
              </div>

              <h1
                className="hero-entry mt-6 max-w-[9ch] font-heading text-[clamp(3.6rem,9vw,8rem)] font-semibold leading-[0.88] tracking-[-0.08em] text-balance text-foreground"
                style={{ animationDelay: "180ms" }}
              >
                La claridad se ve. Y tambien se vende.
              </h1>

              <p
                className="hero-entry mt-6 max-w-[34rem] text-base leading-8 text-foreground/72 md:text-[1.08rem]"
                style={{ animationDelay: "260ms" }}
              >
                Disenamos websites, landing pages y sistemas web con una direccion visual mas fuerte y una idea clara:
                que tu negocio se entienda rapido, se vea mejor y haga que mas personas quieran escribirte.
              </p>

              <div
                className="hero-entry mt-8 flex flex-col gap-3 sm:flex-row"
                style={{ animationDelay: "340ms" }}
              >
                <Button variant="hero" size="lg" asChild className="justify-center">
                  <a href="/brief?source=home-hero">
                    Solicitar diagnostico
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </Button>
                <Button variant="hero-outline" size="lg" asChild className="justify-center">
                  <a
                    href={getWhatsAppUrl("Hola, quiero una homepage con mejor diseno y mejor conversion para mi negocio.")}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Hablar por WhatsApp
                    <MessageSquareText className="h-4 w-4" />
                  </a>
                </Button>
              </div>

              <div
                className="hero-entry mt-10 grid max-w-2xl gap-3 sm:grid-cols-3"
                style={{ animationDelay: "420ms" }}
              >
                {[
                  ["Mas presencia", "Una web que se siente al nivel de tu negocio."],
                  ["Mas claridad", "Tu cliente entiende rapido que haces."],
                  ["Mas respuestas", "Mas confianza para pasar a la conversacion."],
                ].map(([title, text]) => (
                  <div
                    key={title}
                    className="rounded-[1.6rem] border border-white/80 bg-white/72 p-4 shadow-[0_14px_28px_rgba(17,19,27,0.05)] backdrop-blur"
                  >
                    <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">{title}</p>
                    <p className="mt-3 text-sm leading-6 text-foreground/74">{text}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="hero-entry lg:pb-4" style={{ animationDelay: "240ms" }}>
              <div className="relative">
                <div className="section-shell p-4 md:p-5">
                  <div className="relative z-10 overflow-hidden rounded-[2rem] bg-[#12131A] p-4 text-white md:p-5">
                    <div className="absolute inset-0 opacity-30" aria-hidden="true">
                      <div className="absolute left-[-10%] top-[-10%] h-44 w-44 rounded-full bg-white/10 blur-3xl" />
                      <div className="absolute bottom-[-18%] right-[-8%] h-56 w-56 rounded-full bg-brand-primary/25 blur-3xl" />
                      <div className="absolute inset-0 architectural-grid opacity-[0.1]" />
                    </div>

                    <div className="relative z-10">
                      <div className="flex items-center justify-between gap-4">
                        <div>
                          <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-white/48">Selected frame</p>
                          <h2 className="mt-3 max-w-[9ch] text-3xl font-semibold leading-[0.96] text-white">
                            Una homepage que se siente mas estudio que plantilla.
                          </h2>
                        </div>
                        <div className="hidden rounded-full border border-white/12 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.22em] text-white/56 md:block">
                          Awwwards mood
                        </div>
                      </div>

                      {heroCase ? (
                        <div className="mt-8 overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.03]">
                          <img
                            src={heroCase.image}
                            alt={heroCase.title}
                            className="h-[20rem] w-full object-cover md:h-[24rem]"
                            loading="lazy"
                          />
                          <div className="grid gap-4 border-t border-white/10 px-4 py-4 md:grid-cols-[1fr_auto] md:items-end">
                            <div>
                              <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-white/45">Case</p>
                              <h3 className="mt-2 text-2xl font-semibold text-white">{heroCase.title}</h3>
                              <p className="mt-3 max-w-[24rem] text-sm leading-7 text-white/68">
                                {heroCase.shortDescription}
                              </p>
                            </div>
                            <Link
                              to={`/proyectos/${heroCase.slug}`}
                              className="inline-flex items-center gap-2 text-sm font-medium text-white transition hover:text-white/80"
                            >
                              Ver proyecto
                              <ArrowUpRight className="h-4 w-4" />
                            </Link>
                          </div>
                        </div>
                      ) : null}
                    </div>
                  </div>
                </div>

                <div className="absolute -left-5 bottom-10 hidden w-36 rounded-[1.4rem] border border-border bg-white/84 p-4 shadow-[0_18px_36px_rgba(17,19,27,0.08)] backdrop-blur lg:block">
                  <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-muted-foreground">Feels like</p>
                  <p className="mt-3 text-sm leading-6 text-foreground/80">Arte, criterio y una salida clara para escribir.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-4 md:px-10 md:py-8">
        <div className="mx-auto max-w-7xl">
          <div className="overflow-hidden rounded-[2rem] bg-[#12131A] px-6 py-7 text-white md:px-10 md:py-10">
            <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.26em] text-white/45">Brand reality</p>
                <h2 className="mt-4 max-w-[12ch] text-[clamp(2rem,4vw,4rem)] font-semibold leading-[0.94] tracking-[-0.05em] text-white">
                  Lo aburrido se olvida. Lo confuso no vende.
                </h2>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                {manifesto.map((item) => (
                  <div
                    key={item}
                    className="rounded-[1.6rem] border border-white/10 bg-white/[0.04] px-4 py-5 text-base leading-7 text-white/78"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="soluciones" className="px-6 py-10 md:px-10 md:py-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-[42rem]">
              <span className="eyebrow">Servicios</span>
              <h2 className="mt-4 text-[clamp(2.2rem,4.5vw,4.2rem)] font-semibold leading-[0.94] tracking-[-0.055em] text-foreground">
                No hacemos mas secciones. Hacemos paginas que se sienten inevitables.
              </h2>
            </div>
            <p className="max-w-[24rem] text-sm leading-7 text-foreground/66">
              Elegimos el formato segun la venta que necesitas mover, no segun una estructura fija.
            </p>
          </div>

          <div className="grid gap-5 lg:grid-cols-[1.05fr_0.95fr_0.95fr]">
            {serviceCards.map((item, index) => (
              <article
                key={item.title}
                className={`section-shell p-6 md:p-8 ${index === 0 ? "lg:min-h-[34rem]" : "lg:min-h-[27rem] lg:translate-y-8"}`}
              >
                <div className="relative z-10 flex h-full flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between gap-4">
                      <span className="font-mono text-xs uppercase tracking-[0.24em] text-brand-primary">{item.index}</span>
                      <span className="h-px flex-1 bg-gradient-to-r from-border to-transparent" />
                    </div>

                    <h3 className="mt-8 max-w-[10ch] text-[clamp(2rem,3vw,3.3rem)] font-semibold leading-[0.95] tracking-[-0.05em] text-foreground">
                      {item.title}
                    </h3>

                    <p className="mt-6 max-w-[24rem] text-base leading-8 text-foreground/74">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-12 flex items-center gap-2 text-sm font-medium text-brand-primary">
                    Diseno a medida
                    <ArrowUpRight className="h-4 w-4" />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="casos" className="px-6 py-10 md:px-10 md:py-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-[42rem]">
              <span className="eyebrow">Selected work</span>
              <h2 className="mt-4 text-[clamp(2.2rem,4.4vw,4rem)] font-semibold leading-[0.95] tracking-[-0.055em] text-foreground">
                Casos donde la direccion visual y el mensaje empujan en la misma direccion.
              </h2>
            </div>
            <Button variant="outline" asChild className="w-fit">
              <Link to="/proyectos">
                Ver proyectos
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
            {heroCase ? (
              <article className="group section-shell p-4 md:p-5">
                <div className="relative z-10 overflow-hidden rounded-[2rem]">
                  <img
                    src={heroCase.image}
                    alt={heroCase.title}
                    className="h-[22rem] w-full object-cover transition duration-700 ease-out group-hover:scale-[1.035] md:h-[30rem]"
                    loading="lazy"
                  />
                </div>

                <div className="relative z-10 grid gap-5 px-2 pb-2 pt-6 md:grid-cols-[auto_1fr_auto] md:items-end">
                  <div className="font-mono text-[11px] uppercase tracking-[0.24em] text-muted-foreground">01</div>
                  <div>
                    <h3 className="text-[clamp(2rem,3.4vw,3.3rem)] font-semibold leading-[0.95] tracking-[-0.045em] text-foreground">
                      {heroCase.title}
                    </h3>
                    <p className="mt-3 max-w-[34rem] text-base leading-8 text-foreground/72">
                      {heroCase.shortDescription}
                    </p>
                    {heroCase.outcomes[0] ? (
                      <p className="mt-4 inline-flex items-center gap-2 text-sm text-foreground/62">
                        <Check className="h-4 w-4 text-brand-primary" />
                        {heroCase.outcomes[0]}
                      </p>
                    ) : null}
                  </div>
                  <Link
                    to={`/proyectos/${heroCase.slug}`}
                    className="inline-flex items-center gap-2 text-sm font-medium text-brand-primary transition hover:text-brand-primary/80"
                  >
                    Ver caso
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </div>
              </article>
            ) : null}

            <div className="grid gap-5">
              {sideCases.map((project, index) => (
                <article key={project.slug} className="group section-shell p-4">
                  <div className="relative z-10 grid gap-5 md:grid-cols-[1fr_1.1fr] md:items-center">
                    <div className="overflow-hidden rounded-[1.6rem]">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="h-52 w-full object-cover transition duration-700 ease-out group-hover:scale-[1.04]"
                        loading="lazy"
                      />
                    </div>

                    <div className="px-1 py-1">
                      <div className="font-mono text-[11px] uppercase tracking-[0.24em] text-muted-foreground">
                        0{index + 2}
                      </div>
                      <h3 className="mt-3 text-3xl font-semibold leading-[0.96] tracking-[-0.04em] text-foreground">
                        {project.title}
                      </h3>
                      <p className="mt-3 text-sm leading-7 text-foreground/72">{project.shortDescription}</p>
                      <Link
                        to={`/proyectos/${project.slug}`}
                        className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-brand-primary transition hover:text-brand-primary/80"
                      >
                        Abrir proyecto
                        <ArrowUpRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="metodo" className="px-6 py-10 md:px-10 md:py-16">
        <div className="mx-auto max-w-7xl">
          <div className="section-shell px-6 py-8 md:px-10 md:py-12">
            <div className="relative z-10 grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
              <div>
                <span className="eyebrow">Metodo</span>
                <h2 className="mt-4 max-w-[10ch] text-[clamp(2.2rem,4vw,4rem)] font-semibold leading-[0.95] tracking-[-0.055em] text-foreground">
                  Menos pasos. Mas criterio.
                </h2>
                <p className="mt-5 max-w-[24rem] text-base leading-8 text-foreground/70">
                  El proceso es corto porque la homepage tiene un trabajo simple: posicionarte bien y mover a la accion.
                </p>
              </div>

              <div className="grid gap-4">
                {method.map((item) => (
                  <article
                    key={item.label}
                    className="rounded-[1.8rem] border border-white/80 bg-white/72 px-5 py-6 shadow-[0_18px_36px_rgba(17,19,27,0.05)] md:px-6"
                  >
                    <div className="grid gap-4 md:grid-cols-[140px_1fr] md:items-start">
                      <div className="font-mono text-[11px] uppercase tracking-[0.24em] text-brand-primary">{item.label}</div>
                      <div>
                        <h3 className="text-xl font-semibold leading-8 text-foreground">{item.title}</h3>
                        <p className="mt-2 text-sm leading-7 text-foreground/70">{item.description}</p>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 pb-14 pt-10 md:px-10 md:pb-20 md:pt-16">
        <div className="mx-auto max-w-7xl">
          <div className="overflow-hidden rounded-[2.2rem] bg-[#12131A] px-6 py-10 text-white md:px-12 md:py-14">
            <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
              <div className="max-w-[44rem]">
                <p className="font-mono text-[11px] uppercase tracking-[0.26em] text-white/45">Final CTA</p>
                <h2 className="mt-4 text-[clamp(2.3rem,4.6vw,4.5rem)] font-semibold leading-[0.93] tracking-[-0.06em] text-white">
                  Si tu homepage se ve correcta pero no se siente inolvidable, todavia no esta lista.
                </h2>
                <p className="mt-5 max-w-[34rem] text-base leading-8 text-white/68">
                  Podemos convertirla en una pagina mas clara, mas elegante y mucho mas dificil de ignorar.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                <Button variant="hero" size="lg" asChild className="justify-center">
                  <a href="/brief?source=home-final">
                    Solicitar diagnostico
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </Button>
                <Button
                  variant="hero-outline"
                  size="lg"
                  asChild
                  className="justify-center border-white/12 bg-white/8 text-white shadow-none hover:border-white/18 hover:bg-white/12 hover:text-white"
                >
                  <a
                    href={getWhatsAppUrl("Hola, quiero una homepage mas memorable, mas clara y con mejor conversion.")}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    WhatsApp
                    <MessageSquareText className="h-4 w-4" />
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
