import { Button } from "@/components/ui/button";
import { ArrowRight, MessageSquareText } from "lucide-react";
import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { getWhatsAppUrl } from "@/config/contact";
import { Logo } from "@/components/ui/Logo";

export const Hero = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end start"] });
  const imageY = useTransform(scrollYProgress, [0, 1], [0, 56]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1.04, 1.12]);

  return (
    <section
      ref={sectionRef}
      className="relative isolate min-h-[100svh] overflow-hidden lg:h-[100svh]"
    >
      <motion.div
        className="absolute inset-0 bg-background overflow-hidden"
        style={{ y: imageY, scale: imageScale }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,var(--brand-primary)_0%,transparent_50%)] opacity-[0.06] dark:opacity-[0.12]" />

        <div className="absolute inset-x-0 h-[120vh] md:h-[150vh] -top-[10vh] md:-top-[25vh] will-change-transform mix-blend-normal dark:mix-blend-screen opacity-90 md:opacity-100">
          <motion.div
            className="absolute top-[10%] -right-[10%] h-[120vw] w-[120vw] md:h-[800px] md:w-[800px] md:right-[5%] md:top-[5%] rounded-full bg-brand-primary/10 blur-[100px] md:blur-[160px]"
            animate={{
              x: [0, 40, -20, 0],
              y: [0, -30, 20, 0],
              scale: [1, 1.1, 0.95, 1],
            }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute top-[30%] -left-[20%] h-[110vw] w-[110vw] md:h-[700px] md:w-[700px] md:left-auto md:right-[15%] md:top-[25%] rounded-full bg-brand-secondary/15 blur-[90px] md:blur-[140px]"
            animate={{
              x: [0, -30, 30, 0],
              y: [0, 30, -30, 0],
              scale: [1, 1.05, 0.9, 1],
            }}
            transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute bottom-[20%] right-[10%] h-[100vw] w-[100vw] md:h-[600px] md:w-[600px] md:right-[25%] md:bottom-[25%] rounded-full bg-accent-purple/15 blur-[90px] md:blur-[130px]"
            animate={{
              x: [0, 30, -30, 0],
              y: [0, -20, 30, 0],
              scale: [1, 0.95, 1.05, 1],
            }}
            transition={{ duration: 32, repeat: Infinity, ease: "linear" }}
          />
        </div>

        <div className="absolute inset-0 architectural-grid opacity-[0.25] dark:opacity-[0.12] [mask-image:radial-gradient(ellipse_120%_120%_at_50%_30%,#000_20%,transparent_70%)] md:[mask-image:radial-gradient(ellipse_100%_100%_at_70%_50%,#000_30%,transparent_100%)]" />

        <div className="absolute inset-0 md:left-[20%] lg:left-[30%] overflow-hidden pointer-events-none opacity-60 dark:opacity-40">
          <svg className="absolute w-[160%] h-[160%] -top-[30%] -left-[30%] md:w-[130%] md:h-[130%] md:-top-[15%] md:-left-[15%]" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
            <defs>
              <linearGradient id="line-gradient-1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="currentColor" className="text-brand-primary" stopOpacity="0" />
                <stop offset="50%" stopColor="currentColor" className="text-brand-primary" stopOpacity="0.6" />
                <stop offset="100%" stopColor="currentColor" className="text-brand-primary" stopOpacity="0" />
              </linearGradient>
              <linearGradient id="line-gradient-2" x1="100%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="currentColor" className="text-brand-secondary" stopOpacity="0" />
                <stop offset="50%" stopColor="currentColor" className="text-brand-secondary" stopOpacity="0.5" />
                <stop offset="100%" stopColor="currentColor" className="text-brand-secondary" stopOpacity="0" />
              </linearGradient>
            </defs>

            <motion.path
              d="M 15 90 Q 40 55 65 70 T 100 15"
              fill="none"
              stroke="url(#line-gradient-1)"
              strokeWidth="0.12"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={isInView ? { pathLength: 1, opacity: 1 } : {}}
              transition={{ duration: 2.8, ease: "easeInOut", delay: 0.2 }}
            />
            <motion.path
              d="M 0 45 Q 45 45 55 65 T 115 85"
              fill="none"
              stroke="url(#line-gradient-2)"
              strokeWidth="0.1"
              strokeDasharray="1 2.5"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={isInView ? { pathLength: 1, opacity: 1 } : {}}
              transition={{ duration: 3.2, ease: "easeInOut", delay: 0.5 }}
            />
            <motion.path
              d="M 25 0 C 45 45 65 25 85 115"
              fill="none"
              stroke="currentColor"
              className="text-brand-primary/30 dark:text-brand-primary/10"
              strokeWidth="0.08"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={isInView ? { pathLength: 1, opacity: 1 } : {}}
              transition={{ duration: 4.5, ease: "easeInOut", delay: 0.1 }}
            />

            <motion.circle
              cx="65"
              cy="70"
              r="0.6"
              className="fill-brand-primary"
              initial={{ scale: 0, opacity: 0 }}
              animate={isInView ? { scale: [0, 1.5, 1], opacity: [0, 1, 0.9] } : {}}
              transition={{ duration: 1.2, delay: 1.5 }}
            />
            <motion.circle
              cx="65"
              cy="70"
              r="2.5"
              className="fill-brand-primary/20"
              animate={{ scale: [1, 2.2, 1], opacity: [0.4, 0.1, 0.4] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
            />

            <motion.circle
              cx="55"
              cy="65"
              r="0.5"
              className="fill-brand-secondary"
              initial={{ scale: 0, opacity: 0 }}
              animate={isInView ? { scale: [0, 1.5, 1], opacity: [0, 1, 0.9] } : {}}
              transition={{ duration: 1.2, delay: 2 }}
            />
            <motion.circle
              cx="55"
              cy="65"
              r="2"
              className="fill-brand-secondary/15"
              animate={{ scale: [1, 1.8, 1], opacity: [0.3, 0.1, 0.3] }}
              transition={{ duration: 4.2, repeat: Infinity, delay: 1, ease: "easeInOut" }}
            />
          </svg>
        </div>

        <div
          className="absolute inset-0 mix-blend-overlay pointer-events-none opacity-[0.25] dark:opacity-[0.1]"
          style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")" }}
        />

        <motion.div
          className="absolute top-[40%] left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-brand-primary/20 to-transparent mix-blend-plus-lighter md:w-[60%] md:left-[40%]"
          animate={{ y: [0, 150, 0], opacity: [0, 0.6, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-[60%] left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-accent-purple/10 to-transparent mix-blend-plus-lighter md:w-[50%] md:left-[30%]"
          animate={{ y: [0, -100, 0], opacity: [0, 0.5, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        />
      </motion.div>

      <div className="absolute inset-x-0 bottom-0 h-40 md:h-56 bg-gradient-to-t from-background via-background/80 md:via-background/70 to-transparent z-10" />

      <div className="relative z-10 flex min-h-[100svh] items-center lg:h-[100svh]">
        <div className="w-full px-6 pb-10 pt-28 md:px-10 md:pb-12 md:pt-32 lg:pt-28 xl:pt-32">
          <div className="mx-auto max-w-6xl">
            <div className="max-w-[42rem]">
              <motion.div
                className="mt-0"
                initial={{ opacity: 0, y: 28, filter: "blur(8px)" }}
                animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
                transition={{ delay: 0.06, duration: 0.82, ease: [0.16, 1, 0.3, 1] }}
              >
                <Logo className="text-[clamp(2.8rem,7vw,5.8rem)] xl:text-[clamp(3.2rem,7.6vw,6.1rem)]" symbolClassName="translate-y-[12%]" />
              </motion.div>

              <motion.h1
                className="mt-2 max-w-[14ch] font-heading text-[clamp(2.1rem,4.8vw,4.35rem)] font-semibold leading-[0.95] tracking-[-0.055em] text-balance text-foreground/92 lg:max-w-[15ch] xl:max-w-[16ch]"
                initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
                animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
                transition={{ delay: 0.14, duration: 0.76, ease: [0.16, 1, 0.3, 1] }}
              >
                Diseño websites y web apps para negocios que necesitan verse mejor y funcionar mejor.
              </motion.h1>

              <motion.p
                className="mt-4 max-w-[40rem] text-[0.98rem] leading-7 text-foreground/76 md:text-base md:leading-7 lg:text-[1.02rem]"
                initial={{ opacity: 0, y: 18 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.24, duration: 0.64, ease: [0.16, 1, 0.3, 1] }}
              >
                Construyo sitios web, landing pages y aplicaciones web a medida con foco en claridad, conversion y operacion. La automatizacion y la IA pueden entrar despues, cuando la base digital ya tiene sentido.
              </motion.p>

              <motion.div
                className="mt-6 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center"
                initial={{ opacity: 0, y: 16 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.32, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              >
                <Button variant="hero" size="lg" asChild className="justify-center">
                  <a href="/brief?source=hero-call">
                    Solicitar proyecto
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </Button>
                <Button variant="hero-outline" size="lg" asChild className="justify-center">
                  <a
                    href={getWhatsAppUrl("Hola, quiero hablar sobre una web o web app para mi negocio.")}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Hablar por WhatsApp
                    <MessageSquareText className="h-4 w-4" />
                  </a>
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
