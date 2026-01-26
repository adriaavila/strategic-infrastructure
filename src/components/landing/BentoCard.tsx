import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring, useInView, useScroll, useTransform } from "framer-motion";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

export interface BentoCardProps {
  title: string;
  subtitle?: string;
  description: string | React.ReactNode;
  icon: React.ReactNode;
  className?: string;
  visual: React.ReactNode;
  delay?: number;
  index?: number;
}

export const BentoCard = ({ title, subtitle, description, icon, className, visual, delay = 0, index = 0 }: BentoCardProps) => {
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
      className={`group relative bg-card border border-foreground/[0.08] rounded-2xl p-6 overflow-hidden shadow-architectural ${className}`}
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
        borderColor: "hsl(var(--foreground) / 0.15)",
        boxShadow: "var(--shadow-lg)",
        transition: { duration: 0.3, type: "spring", stiffness: 300, damping: 30 }
      }}
    >
      {/* Subtle gradient background */}
      <div className="absolute inset-0 gradient-mesh-subtle opacity-30" />
      
      {/* Animated background gradient that follows mouse */}
      <motion.div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: "radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), hsl(var(--accent-emerald) / 0.08), transparent 40%)"
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
        className="text-lg font-medium mb-2"
        initial={{ opacity: 0, x: -20 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
        transition={{ delay: index * 0.1 + 0.3, duration: 0.4 }}
      >
        {title}
      </motion.h3>
      {subtitle && (
        <motion.p 
          className="text-sm font-medium text-foreground mb-3"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: index * 0.1 + 0.35, duration: 0.4 }}
        >
          {subtitle}
        </motion.p>
      )}
      <motion.div 
        className="text-sm text-muted-foreground leading-relaxed"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ delay: index * 0.1 + 0.4, duration: 0.4 }}
      >
        {typeof description === 'string' ? <p>{description}</p> : description}
      </motion.div>

      {/* Visual */}
      <motion.div 
        className="mt-6 -mx-6 -mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ delay: index * 0.1 + 0.5, duration: 0.5 }}
      >
        {visual}
      </motion.div>
    </motion.div>
  );
};
