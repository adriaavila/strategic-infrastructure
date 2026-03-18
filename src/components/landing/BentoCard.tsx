import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring, useInView, useScroll, useTransform } from "framer-motion";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

export type BentoCardAccent = "emerald" | "blue" | "purple" | "mint" | "amber";

export interface BentoCardProps {
  title: string;
  subtitle?: string;
  description: string | React.ReactNode;
  icon: React.ReactNode;
  className?: string;
  visual: React.ReactNode;
  delay?: number;
  index?: number;
  accent?: BentoCardAccent;
}

const accentBorderClass: Record<BentoCardAccent, string> = {
  emerald: "border-b-brand-secondary/80",
  mint: "border-b-brand-secondary/80",
  blue: "border-b-brand-primary/80",
  purple: "border-b-brand-primary/80",
  amber: "border-b-amber-500/80",
};

export const BentoCard = ({ title, subtitle, description, icon, className, visual, delay = 0, index = 0, accent }: BentoCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: true, margin: "-100px" });
  const shouldReduceMotion = useReducedMotion();

  // Enhanced 3D tilt with spring physics
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 30, stiffness: 300 };
  const rotateX = useSpring(mouseY, springConfig);
  const rotateY = useSpring(mouseX, springConfig);

  // Parallax effect
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], shouldReduceMotion ? [0, 0] : [0, -30]);

  useEffect(() => {
    const card = cardRef.current;
    if (!card || shouldReduceMotion) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect();
      const cardCenterX = rect.left + rect.width / 2;
      const cardCenterY = rect.top + rect.height / 2;

      const distanceX = e.clientX - cardCenterX;
      const distanceY = e.clientY - cardCenterY;

      // Calculate rotation (-10deg to +10deg)
      const rotateXValue = (distanceY / rect.height) * 10;
      const rotateYValue = (distanceX / rect.width) * 10;

      mouseX.set(rotateYValue);
      mouseY.set(-rotateXValue);

      // Set CSS custom properties for mouse-following spotlight
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const yPos = ((e.clientY - rect.top) / rect.height) * 100;
      card.style.setProperty("--mouse-x", `${x}%`);
      card.style.setProperty("--mouse-y", `${yPos}%`);
    };

    const handleMouseLeave = () => {
      mouseX.set(0);
      mouseY.set(0);
    };

    card.addEventListener('mousemove', handleMouseMove);
    card.addEventListener('mouseleave', handleMouseLeave);
    return () => {
      card.removeEventListener('mousemove', handleMouseMove);
      card.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [mouseX, mouseY, shouldReduceMotion]);

  return (
    <motion.div
      ref={cardRef}
      className={`group relative bg-white/70 dark:bg-card/60 backdrop-blur-2xl border border-white/60 dark:border-foreground/[0.08] rounded-[32px] p-8 md:p-10 overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04),_inset_0_1px_0_rgba(255,255,255,0.8)] dark:shadow-architectural transition-all duration-700 ${accent ? `border-b-[3px] ${accentBorderClass[accent]}` : ""} ${className}`}
      style={{
        y,
        rotateX: shouldReduceMotion ? 0 : rotateX,
        rotateY: shouldReduceMotion ? 0 : rotateY,
        transformStyle: "preserve-3d",
        perspective: "1000px"
      }}
      initial={{ opacity: 0, y: 60, scale: 0.9 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 60, scale: 0.9 }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.16, 1, 0.3, 1]
      }}
      whileHover={{
        scale: 1.02,
        borderColor: "hsl(var(--brand-secondary) / 0.3)",
        boxShadow: "0 0 60px rgba(45, 212, 191, 0.12), 0 20px 50px rgba(0, 0, 0, 0.25)",
        transition: { duration: 0.3, type: "spring", stiffness: 300, damping: 30 }
      }}
    >
      {/* Glossy Overlay for tactile feel */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/60 via-transparent to-white/10 dark:from-white/[0.04] pointer-events-none" />
      {/* Subtle grain/mesh background */}
      <div className="absolute inset-0 noise-overlay opacity-[0.03] dark:opacity-30 mix-blend-overlay pointer-events-none" />

      {/* Mouse-following spotlight gradient */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: "radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), hsl(var(--brand-secondary) / 0.1), transparent 40%)"
        }}
      />

      {/* Icon with enhanced hover animation */}
      <motion.div
        className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-foreground/5 mb-4 group-hover:bg-foreground/10 transition-colors"
        initial={{ scale: 0, rotate: -180 }}
        animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
        transition={{ delay: index * 0.1 + 0.2, duration: 0.5, type: "spring", stiffness: 200 }}
        whileHover={{
          scale: 1.1,
          rotate: 5,
          transition: { duration: 0.2 }
        }}
      >
        {icon}
      </motion.div>

      {/* Content */}
      <motion.h3
        className="text-2xl font-semibold mb-2 font-heading tracking-tight text-brand-dark dark:text-white"
        initial={{ opacity: 0, x: -20 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
        transition={{ delay: index * 0.1 + 0.3, duration: 0.4 }}
      >
        {title}
      </motion.h3>
      {subtitle && (
        <motion.p
          className="text-[11px] font-bold uppercase tracking-widest text-brand-secondary mb-4"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: index * 0.1 + 0.35, duration: 0.4 }}
        >
          {subtitle}
        </motion.p>
      )}
      <motion.div
        className="text-base text-brand-slate/80 dark:text-muted-foreground leading-relaxed"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ delay: index * 0.1 + 0.4, duration: 0.4 }}
      >
        {typeof description === 'string' ? <p>{description}</p> : description}
      </motion.div>

      {/* Visual */}
      <motion.div
        className="mt-8 -mx-10 -mb-10 h-64 md:h-80 lg:h-[22rem] xl:h-[26rem] overflow-hidden relative"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ delay: index * 0.1 + 0.5, duration: 0.5 }}
      >
        {visual}
      </motion.div>
    </motion.div>
  );
};
