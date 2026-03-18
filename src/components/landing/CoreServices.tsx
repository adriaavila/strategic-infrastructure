import { Code2, BarChart3, Workflow, ArrowRight, Bot, Check, LayoutTemplate, Layers, MousePointer2, MessageSquare } from "lucide-react";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import { BentoCard } from "./BentoCard";
import { Button } from "@/components/ui/button";
import { ParticleBackground } from "@/components/particles/ParticleBackground";

const PresenciaDigitalVisual = () => (
  <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/[0.02] to-transparent p-4 md:p-8 flex flex-col items-center justify-center overflow-hidden">
    {/* Dynamic Background Light */}
    <motion.div 
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[radial-gradient(circle_at_center,rgba(45,212,191,0.08)_0%,transparent_50%)] dark:bg-[radial-gradient(circle_at_center,rgba(45,212,191,0.15)_0%,transparent_50%)] pointer-events-none"
      animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.8, 0.5] }}
      transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
    />
    
    <div className="relative w-full h-full max-w-[320px] md:max-w-[640px] lg:max-w-[760px] xl:max-w-[840px] mx-auto perspectives">
      
      {/* Desktop Dashboard / Web Mockup */}
      <motion.div 
        className="absolute top-2 md:top-12 lg:top-16 right-[-20px] md:right-auto md:left-0 lg:left-[5%] w-[280px] md:w-[420px] lg:w-[480px] xl:w-[580px] h-[170px] md:h-[240px] lg:h-[280px] xl:h-[340px] bg-white/60 dark:bg-[#0f172a]/80 backdrop-blur-2xl rounded-[20px] lg:rounded-[24px] border border-white dark:border-white/10 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] p-1.5 lg:p-2 flex flex-col z-0 transition-transform"
        animate={{ y: [0, -8, 0], rotateX: [2, -2, 2], rotateY: [-5, -2, -5] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Browser Chrome */}
        <div className="w-full bg-slate-100/50 dark:bg-slate-800/50 rounded-[14px] lg:rounded-[18px] p-2 lg:p-3 mb-2 flex items-center gap-3">
          <div className="flex gap-1.5 px-1">
            <div className="w-2.5 h-2.5 lg:w-3 lg:h-3 rounded-full bg-[#ff5f56] shadow-sm" />
            <div className="w-2.5 h-2.5 lg:w-3 lg:h-3 rounded-full bg-[#ffbd2e] shadow-sm" />
            <div className="w-2.5 h-2.5 lg:w-3 lg:h-3 rounded-full bg-[#27c93f] shadow-sm" />
          </div>
          <div className="flex-1 mx-2 lg:mx-8 h-4 lg:h-6 bg-white dark:bg-[#1e293b] border border-slate-200 dark:border-slate-700/50 rounded-md flex items-center justify-center shadow-inner">
            <div className="w-1/3 h-1 lg:h-1.5 bg-slate-200 dark:bg-slate-600 rounded-full opacity-50" />
          </div>
        </div>
        
        {/* Wireframe Body */}
        <div className="flex-1 w-full bg-white dark:bg-[#0b1120] rounded-[14px] lg:rounded-[16px] border border-slate-100 dark:border-slate-800/80 p-4 lg:p-6 overflow-hidden relative shadow-inner">
           {/* Decorative Grid */}
           <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

           {/* Hero Wireframe */}
           <div className="relative z-10 flex flex-col items-center justify-center h-[50%] lg:h-[60%] border-b border-slate-100 dark:border-slate-800">
             <div className="w-16 lg:w-20 h-3 lg:h-4 bg-brand-primary/10 rounded-full mb-3 md:mb-4 lg:mb-5" />
             <div className="w-3/4 h-5 lg:h-8 bg-gradient-to-r from-slate-200 to-slate-200/50 dark:from-slate-700 dark:to-slate-600 rounded-md lg:rounded-lg mb-2" />
             <div className="w-1/2 h-5 lg:h-8 bg-gradient-to-r from-slate-200 to-slate-200/50 dark:from-slate-700 dark:to-slate-600 rounded-md lg:rounded-lg mb-4" />
             
             <div className="flex gap-2 lg:gap-3">
               <div className="w-20 lg:w-28 h-6 lg:h-10 bg-brand-dark dark:bg-brand-primary rounded-md lg:rounded-lg shadow-md" />
               <div className="w-24 lg:w-32 h-6 lg:h-10 border border-slate-200 dark:border-slate-700 rounded-md lg:rounded-lg" />
             </div>
           </div>

           {/* Features Grid Wireframe */}
           <div className="relative z-10 grid grid-cols-3 gap-3 md:gap-4 mt-4 lg:mt-6">
             {[1, 2, 3].map((i) => (
               <div key={i} className="h-16 lg:h-24 bg-slate-50 dark:bg-slate-800/30 rounded-xl border border-slate-100 dark:border-slate-700/30 p-2 lg:p-3 flex flex-col gap-1.5 lg:gap-2 relative overflow-hidden">
                 {/* Shimmer effect */}
                 <motion.div 
                   className="absolute top-0 bottom-0 w-10 bg-gradient-to-r from-transparent via-white/50 dark:via-white/5 to-transparent skew-x-12"
                   animate={{ left: ["-100%", "200%"] }}
                   transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
                 />
                 <div className="w-5 h-5 lg:w-8 lg:h-8 rounded-[4px] lg:rounded-md bg-brand-secondary/20 mb-1" />
                 <div className="w-full h-1.5 lg:h-2 bg-slate-200 dark:bg-slate-700 rounded-full" />
                 <div className="w-2/3 h-1.5 lg:h-2 bg-slate-200 dark:bg-slate-700 rounded-full" />
               </div>
             ))}
           </div>
        </div>
      </motion.div>

      {/* Front floating window (Mobile mockup) */}
      <motion.div 
        className="absolute bottom-2 md:bottom-auto md:top-24 lg:top-32 left-[-15px] md:left-auto md:right-4 lg:right-[5%] w-[160px] md:w-[200px] lg:w-[240px] xl:w-[280px] h-[240px] md:h-[300px] lg:h-[380px] xl:h-[440px] bg-slate-50 dark:bg-[#0b1120] rounded-[28px] lg:rounded-[40px] border-[6px] lg:border-[10px] xl:border-[12px] border-white dark:border-[#1e293b] shadow-[0_40px_80px_-20px_rgba(0,0,0,0.25)] flex flex-col overflow-hidden z-10 ring-1 ring-slate-200 dark:ring-slate-800 transition-transform"
        animate={{ y: [0, 8, 0], rotateX: [-2, 2, -2], rotateY: [5, 2, 5] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Dynamic Island / Notch */}
        <div className="absolute top-2 left-1/2 -translate-x-1/2 w-16 lg:w-20 h-4 md:h-5 lg:h-6 bg-black dark:bg-[#0f172a] rounded-full flex items-center justify-between px-1.5 z-20">
          <div className="w-1.5 lg:w-2 h-1.5 lg:h-2 rounded-full bg-[#111]" />
          <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_5px_rgba(16,185,129,0.8)]" />
        </div>
        
        {/* Mobile Scroller Content */}
        <div className="flex-1 w-full bg-white dark:bg-brand-dark p-3 md:p-4 lg:p-5 flex flex-col gap-3 lg:gap-4 relative pt-10 lg:pt-14">
           {/* Header block */}
           <div className="w-full flex justify-between items-center mb-1 lg:mb-2">
             <div className="w-8 h-8 lg:w-10 lg:h-10 bg-brand-primary/10 rounded-full" />
             <div className="flex gap-1.5">
               <div className="w-4 lg:w-6 h-1 lg:h-1.5 bg-slate-200 dark:bg-slate-700 rounded-full" />
               <div className="w-4 lg:w-6 h-1 lg:h-1.5 bg-slate-200 dark:bg-slate-700 rounded-full" />
             </div>
           </div>

           {/* Mobile Hero */}
           <div className="w-full h-24 lg:h-32 bg-slate-50 dark:bg-slate-800/50 rounded-xl lg:rounded-2xl border border-slate-100 dark:border-slate-700/30 flex items-center justify-center relative overflow-hidden shadow-inner">
             
             {/* Interaction logic simulator */}
             <div className="w-12 h-12 lg:w-16 lg:h-16 relative">
                 <motion.div 
                   className="absolute inset-0 bg-brand-secondary text-brand-dark rounded-full flex items-center justify-center shadow-lg cursor-pointer"
                   whileHover={{ scale: 1.1 }}
                   animate={{ scale: [1, 1.05, 1] }}
                   transition={{ duration: 2, repeat: Infinity }}
                 >
                   <Code2 className="w-5 h-5 lg:w-7 lg:h-7" />
                 </motion.div>
                 <motion.div 
                   className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full border-2 border-brand-secondary/40 rounded-full"
                   animate={{ scale: [1, 2], opacity: [1, 0] }}
                   transition={{ duration: 2, repeat: Infinity }}
                 />
             </div>
           </div>

           {/* Cards Simulation */}
           <div className="space-y-2 lg:space-y-3 flex-1 mt-1 lg:mt-2">
             <div className="h-10 lg:h-14 w-full bg-slate-50 dark:bg-slate-800/30 rounded-lg lg:rounded-xl border border-slate-100 dark:border-slate-700/30 flex items-center px-3 gap-3">
               <div className="w-6 h-6 lg:w-8 lg:h-8 rounded-md bg-slate-200 dark:bg-slate-700" />
               <div className="flex-1 space-y-1.5">
                 <div className="h-1.5 lg:h-2 w-3/4 bg-slate-200 dark:bg-slate-700 rounded-full" />
                 <div className="h-1.5 lg:h-2 w-1/2 bg-slate-200 dark:bg-slate-700 rounded-full" />
               </div>
             </div>
             <div className="h-10 lg:h-14 w-full bg-slate-50 dark:bg-slate-800/30 rounded-lg lg:rounded-xl border border-slate-100 dark:border-slate-700/30 flex items-center px-3 gap-3">
               <div className="w-6 h-6 lg:w-8 lg:h-8 rounded-md bg-slate-200 dark:bg-slate-700" />
               <div className="flex-1 space-y-1.5">
                 <div className="h-1.5 lg:h-2 w-4/5 bg-slate-200 dark:bg-slate-700 rounded-full" />
               </div>
             </div>
           </div>

           {/* Sticky Bottom Bar */}
           <div className="mt-auto pt-2 w-full relative z-20">
             <div className="h-10 lg:h-12 w-full bg-brand-dark dark:bg-brand-primary text-white rounded-xl flex items-center justify-center shadow-lg relative overflow-hidden">
               <motion.div 
                   className="absolute top-0 bottom-0 w-20 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"
                   animate={{ left: ["-100%", "200%"] }}
                   transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
               />
               <span className="text-[9px] lg:text-xs font-bold tracking-wider relative z-10">AGENDA UNA CITA</span>
             </div>
           </div>

        </div>
      </motion.div>

      {/* Floating Cursor interaction */}
      <motion.div
        className="absolute z-30 top-[40%] left-[30%] w-6 h-6 drop-shadow-xl pointer-events-none hidden md:block"
        animate={{ 
          x: [0, 180, 150, 0], 
          y: [0, -120, -100, 0],
          scale: [1, 0.9, 0.9, 1] 
        }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      >
        <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8 lg:w-10 lg:h-10 text-white drop-shadow-md">
           <path d="M5.5 3.21V20.8c0 .45.54.67.85.35l4.86-4.86a.5.5 0 01.35-.15h6.42c.45 0 .67-.54.35-.85L6.35 2.86a.5.5 0 00-.85.35z" fill="currentColor"/>
           <path d="M5.5 3.21V20.8c0 .45.54.67.85.35l4.86-4.86a.5.5 0 01.35-.15h6.42c.45 0 .67-.54.35-.85L6.35 2.86a.5.5 0 00-.85.35z" stroke="rgba(0,0,0,0.8)" strokeWidth="1.5"/>
        </svg>
      </motion.div>

    </div>
  </div>
);

const AutomatizacionVisual = () => (
  <div className="absolute inset-0 bg-gradient-to-br from-brand-secondary/[0.04] to-transparent p-6 flex flex-col items-center justify-center overflow-hidden">
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 md:w-96 md:h-96 lg:w-[500px] lg:h-[500px] bg-brand-secondary/10 dark:bg-brand-secondary/15 rounded-full blur-[4rem] md:blur-[6rem] pointer-events-none" />
    
    {/* Holographic 3D Container */}
    <div className="relative w-full h-full max-w-[340px] md:max-w-[600px] lg:max-w-[400px] xl:max-w-[500px] flex items-center justify-center z-10 perspectives" style={{ perspective: "1200px" }}>
       
       <motion.div 
         className="w-full h-full absolute inset-0 flex items-center justify-between"
         animate={{ rotateX: [8, -4, 8], rotateY: [-8, 8, -8] }}
         transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
         style={{ transformStyle: "preserve-3d" }}
       >
         
         {/* Background Futuristic Rings */}
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-56 h-56 md:w-[360px] md:h-[360px] lg:w-[280px] lg:h-[280px] xl:w-[380px] xl:h-[380px] border-[1.5px] border-brand-secondary/10 dark:border-brand-secondary/20 rounded-full [transform:rotateX(65deg)]" />
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 md:w-[280px] md:h-[280px] lg:w-[200px] lg:h-[200px] xl:w-[280px] xl:h-[280px] border border-brand-secondary/15 dark:border-brand-secondary/30 rounded-full [transform:rotateX(65deg)_rotateY(10deg)]" />

         {/* Responsive Glowing Data Path */}
         <div className="absolute top-1/2 left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-red-500/0 via-brand-secondary/40 to-blue-500/0 -translate-y-1/2" style={{ transform: "translateZ(-10px)" }}>
            <motion.div 
               className="absolute top-1/2 w-10 md:w-20 h-[2px] bg-white blur-[1px] shadow-[0_0_12px_#fff] -translate-y-1/2 rounded-full"
               animate={{ left: ["0%", "100%"], opacity: [0, 1, 0] }}
               transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div 
               className="absolute top-1/2 w-3 h-3 md:w-4 md:h-4 bg-brand-secondary rounded-full blur-[2px] shadow-[0_0_20px_rgba(45,212,191,1)] -translate-y-1/2"
               animate={{ left: ["0%", "100%"], opacity: [0, 1, 0] }}
               transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.15 }}
            />
         </div>

         {/* Node 1: WhatsApp (Chat Mockup) */}
         <div className="relative z-20 flex flex-col items-center gap-2 md:gap-3" style={{ transform: "translateZ(30px)" }}>
            <motion.div 
               className="w-[72px] md:w-28 lg:w-24 xl:w-32 h-28 md:h-40 lg:h-36 xl:h-44 bg-white/95 dark:bg-[#0f172a]/95 backdrop-blur-xl rounded-[16px] md:rounded-[20px] border border-white/80 dark:border-slate-700/60 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] p-2 md:p-3 flex flex-col gap-1.5 md:gap-2 relative overflow-hidden"
               whileHover={{ scale: 1.05, y: -5 }}
            >
               {/* Header */}
               <div className="flex items-center gap-1.5 md:gap-2 pb-1.5 md:pb-2 border-b border-black/5 dark:border-white/10">
                 <div className="w-4 h-4 md:w-6 md:h-6 rounded-full bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center"><MessageSquare className="w-2 h-2 md:w-3 md:h-3" /></div>
                 <div className="w-6 md:w-10 h-1.5 md:h-2 lg:h-1.5 xl:h-2.5 bg-slate-200 dark:bg-slate-700 rounded-full" />
               </div>
               
               {/* Chat Bubbles */}
               <motion.div className="w-[85%] h-3 md:h-5 lg:h-4 xl:h-5 bg-slate-100 dark:bg-slate-800 rounded-md xl:rounded-lg rounded-bl-none self-start" animate={{ opacity: [0.6, 1, 0.6] }} transition={{ duration: 2.5, repeat: Infinity }} />
               <div className="w-[65%] h-3 md:h-5 lg:h-4 xl:h-5 bg-emerald-500/10 dark:bg-emerald-500/20 rounded-md xl:rounded-lg rounded-br-none self-end" />
               <motion.div className="w-[75%] h-4 md:h-8 lg:h-6 xl:h-8 bg-slate-100 dark:bg-slate-800 rounded-md xl:rounded-lg rounded-bl-none self-start mt-0.5 md:mt-1 xl:mt-2" animate={{ opacity: [0.6, 1, 0.6] }} transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }} />

               {/* Badge */}
               <motion.div 
                  className="absolute -top-1.5 -right-1.5 md:-top-2 md:-right-2 w-5 h-5 md:w-7 md:h-7 bg-rose-500 rounded-full border-2 border-white dark:border-[#0f172a] flex items-center justify-center text-[8px] md:text-xs text-white font-bold shadow-lg"
                  animate={{ scale: [1, 1.15, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
               >
                 +
               </motion.div>
            </motion.div>
            <span className="text-[9px] md:text-xs font-bold text-slate-500 dark:text-slate-400 tracking-widest bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm px-2 py-0.5 md:px-3 md:py-1 lg:px-2 lg:py-0.5 xl:px-3 xl:py-1 rounded shadow-sm">ENTRADA</span>
         </div>

         {/* Node 2: AI Core */}
         <div className="relative z-30 flex flex-col items-center gap-2 md:gap-3" style={{ transform: "translateZ(60px)" }}>
            <motion.div 
               className="w-[84px] h-[84px] md:w-36 md:h-36 lg:w-28 lg:h-28 xl:w-36 xl:h-36 bg-gradient-to-b from-[#0f172a] to-[#1e293b] rounded-2xl md:rounded-3xl border border-brand-secondary/40 shadow-[0_15px_50px_-10px_rgba(45,212,191,0.4)] flex items-center justify-center relative overflow-hidden group"
               animate={{ y: [0, -10, 0] }}
               transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
               {/* Core gloss */}
               <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white/10 to-transparent rounded-t-2xl pointer-events-none" />
               
               {/* Pulsing Aura */}
               <motion.div 
                 className="absolute inset-[15%] bg-brand-secondary/30 rounded-full blur-md md:blur-xl"
                 animate={{ scale: [0.8, 1.3, 0.8], opacity: [0.4, 0.8, 0.4] }}
                 transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
               />

               {/* Grid texture inside core */}
               <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:8px_8px] md:bg-[size:14px_14px] lg:bg-[size:10px_10px] xl:bg-[size:14px_14px] opacity-50" />

               {/* Scanning laser */}
               <motion.div 
                 className="absolute inset-x-0 h-0.5 md:h-1 bg-brand-secondary/80 blur-[1px] md:blur-[2px] shadow-[0_0_10px_rgba(45,212,191,1)]"
                 animate={{ top: ["0%", "100%", "0%"] }}
                 transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
               />

               <Bot className="w-8 h-8 md:w-14 md:h-14 lg:w-10 lg:h-10 xl:w-14 xl:h-14 text-brand-secondary drop-shadow-[0_0_12px_rgba(45,212,191,0.8)] relative z-10" />
            </motion.div>
         </div>

         {/* Node 3: CRM Dashboard */}
         <div className="relative z-20 flex flex-col items-center gap-2 md:gap-3" style={{ transform: "translateZ(30px)" }}>
            <motion.div 
               className="w-[72px] md:w-28 lg:w-24 xl:w-32 h-28 md:h-40 lg:h-36 xl:h-44 bg-white/95 dark:bg-[#0f172a]/95 backdrop-blur-xl rounded-[16px] md:rounded-[20px] border border-white/80 dark:border-slate-700/60 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] p-2 md:p-3 xl:p-4 flex flex-col gap-1 md:gap-1.5 relative overflow-hidden"
               whileHover={{ scale: 1.05, y: -5 }}
            >
               {/* Header */}
               <div className="flex items-center justify-between pb-1 md:pb-1.5 border-b border-black/5 dark:border-white/10">
                 <div className="w-7 md:w-12 h-3 md:h-4 lg:w-10 lg:h-3.5 xl:w-14 xl:h-5 bg-blue-500/10 rounded flex items-center justify-center text-[6px] md:text-[9px] lg:text-[8px] xl:text-[10px] text-blue-600 dark:text-blue-400 font-bold tracking-wider">CRM</div>
                 <div className="w-2 h-2 md:w-3 md:h-3 lg:w-2.5 lg:h-2.5 xl:w-3 xl:h-3 rounded-[3px] md:rounded-md lg:rounded-[4px] bg-slate-100 dark:bg-slate-800" />
               </div>
               
               {/* Metrics rows */}
               {[1, 2, 3, 4, 5, 6].map((i) => (
                 <div key={i} className="w-full flex items-center justify-between gap-1 mt-0.5 md:mt-1">
                   <div className="w-2 h-2 md:w-3 md:h-3 lg:w-2 lg:h-2 xl:w-3.5 xl:h-3.5 rounded-full bg-slate-100 dark:bg-slate-800 flex-shrink-0" />
                   <div className="w-full h-1 md:h-1.5 lg:h-1 xl:h-2 bg-slate-100 dark:bg-slate-800 rounded-full" />
                   
                   {/* Sync blips */}
                   <motion.div 
                     className="w-1 h-1 md:w-1.5 md:h-1.5 lg:w-1 lg:h-1 xl:w-2 xl:h-2 rounded-full bg-brand-secondary flex-shrink-0 shadow-[0_0_5px_rgba(45,212,191,0.5)]" 
                     animate={{ opacity: [0.2, 1, 0.2] }}
                     transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2 }}
                   />
                 </div>
               ))}

               {/* Done Badge */}
               <motion.div 
                  className="absolute -bottom-2 -left-2 md:-bottom-3 md:-left-3 lg:-bottom-2 lg:-left-2 xl:-bottom-3 xl:-left-3 w-8 h-8 md:w-12 md:h-12 lg:w-10 lg:h-10 xl:w-12 xl:h-12 bg-emerald-400 dark:bg-brand-secondary rounded-full border-[3px] md:border-[4px] border-white dark:border-[#0f172a] flex items-center justify-center text-white dark:text-brand-dark shadow-xl"
                  initial={{ scale: 0 }}
                  animate={{ scale: [0, 1.1, 1, 0] }}
                  transition={{ duration: 3.5, repeat: Infinity, delay: 0.5 }}
               >
                 <Check className="w-4 h-4 md:w-6 md:h-6 lg:w-5 lg:h-5 xl:w-6 xl:h-6 stroke-[3]" />
               </motion.div>
            </motion.div>
            <span className="text-[9px] md:text-xs font-bold text-slate-500 dark:text-slate-400 tracking-widest bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm px-2 py-0.5 md:px-3 md:py-1 lg:px-2 lg:py-0.5 xl:px-3 xl:py-1 rounded shadow-sm">ACCIÓN</span>
         </div>
         
       </motion.div>
    </div>
  </div>
);

const InteligenciaVisual = () => (
  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/[0.03] to-transparent p-6 md:p-8 xl:p-12 flex flex-col justify-end overflow-hidden">
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 md:w-[32rem] md:h-[32rem] bg-purple-500/10 rounded-full blur-[4rem] md:blur-[8rem]" />
     
    <div className="relative z-10 w-full max-w-lg mx-auto xl:max-w-2xl transform md:scale-110 lg:scale-[1.25] xl:scale-[1.3] origin-bottom transition-all duration-700">
      {/* Floating Metrics Cards */}
      <div className="flex gap-4 mb-6 relative z-10 lg:px-4">
        {[
          { label: "Ventas M.", value: "$12.4K", change: "+14%", color: "text-emerald-500", bg: "bg-emerald-500/10" },
          { label: "Leads", value: "842", change: "+5%", color: "text-brand-secondary", bg: "bg-brand-secondary/10" },
          { label: "Conversión", value: "3.2%", change: "+1.1%", color: "text-purple-500", bg: "bg-purple-500/10", hidden: "hidden sm:block" }
        ].map((stat, i) => (
          <motion.div 
            key={i} 
            className={`flex-1 bg-white/90 dark:bg-card/90 backdrop-blur-xl rounded-2xl border border-white/80 dark:border-white/10 p-3 lg:p-4 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.05)] ${stat.hidden || ''}`}
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: i * 0.15 + 0.2, type: "spring" }}
            viewport={{ once: true }}
          >
            <div className="text-[9px] text-brand-slate uppercase font-bold tracking-wider mb-1.5">{stat.label}</div>
            <div className="flex items-end justify-between">
              <div className="text-lg font-bold text-brand-dark dark:text-white leading-none">{stat.value}</div>
              <div className={`text-[9px] font-bold ${stat.color} ${stat.bg} px-1.5 py-0.5 rounded`}>{stat.change}</div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Live Chart Area */}
      <div className="h-28 md:h-36 lg:h-44 w-full bg-white/60 dark:bg-card/40 backdrop-blur-md rounded-2xl border border-white/60 dark:border-white/5 p-4 flex items-end gap-1.5 z-10 relative overflow-hidden">
        {/* Ghost chart in background */}
        <div className="absolute bottom-0 left-0 w-full h-[60%] bg-gradient-to-t from-purple-500/10 to-transparent" />
        
        {/* Animated bars */}
        {[35, 45, 30, 60, 45, 75, 55, 90, 80, 65, 85].map((height, i) => (
           <motion.div 
             key={i}
             className="flex-1 rounded-t-[4px] bg-gradient-to-t from-purple-500/80 to-purple-400 relative group origin-bottom"
             initial={{ scaleY: 0 }}
             whileInView={{ scaleY: 1 }}
             transition={{ duration: 1, delay: i * 0.05 + 0.3, type: "spring", stiffness: 50 }}
             style={{ height: `${height}%` }}
             viewport={{ once: true }}
           >
             <motion.div 
               className="absolute -top-7 lg:-top-8 left-1/2 -translate-x-1/2 bg-brand-dark dark:bg-white text-white dark:text-brand-dark text-[9px] font-bold px-2 py-1 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-20 pointer-events-none"
             >
               {height * 12}
             </motion.div>
           </motion.div>
        ))}
      </div>
    </div>
  </div>
);

const pillarServices = [
  {
    title: "Presencia digital",
    subtitle: "Webs y ecommerce diseñados para convertir",
    description: (
      <>
        <p className="mb-4 text-brand-slate/90 dark:text-foreground/80">
          Rápidas, responsivas y hechas para que el visitante tomé acción: agendar, comprar o escribirte.
        </p>
        <p className="font-semibold text-brand-dark/80 dark:text-foreground pt-3 border-t border-black/5 dark:border-foreground/10 text-[13px] flex gap-2 flex-wrap items-center">
          <LayoutTemplate className="w-4 h-4 text-brand-primary" />
          Webs corporativas · Ecommerce · Landing pages
        </p>
      </>
    ),
    icon: <Code2 className="w-5 h-5 text-brand-primary" />,
    visual: <PresenciaDigitalVisual />,
    className: "col-span-1 lg:col-span-2",
    delay: 200,
    accent: "blue" as const,
  },
  {
    title: "Automatización con IA",
    subtitle: "Procesos que eliminan trabajo manual",
    description: (
      <>
        <p className="mb-4 text-brand-slate/90 dark:text-foreground/80">
          Responden clientes por WhatsApp, organizan pedidos y conectan tus herramientas. Sin intervención manual.
        </p>
        <p className="font-semibold text-brand-dark/80 dark:text-foreground pt-3 border-t border-black/5 dark:border-foreground/10 text-[13px] flex gap-2 flex-wrap items-center">
          <Layers className="w-4 h-4 text-brand-secondary" />
          Flujos con IA · Integraciones
        </p>
      </>
    ),
    icon: <Workflow className="w-5 h-5 text-brand-secondary" />,
    visual: <AutomatizacionVisual />,
    className: "col-span-1",
    delay: 300,
    accent: "emerald" as const,
  },
  {
    title: "Inteligencia del negocio",
    subtitle: "Dashboards y análisis para decidir mejor",
    description: (
      <>
        <p className="mb-4 text-brand-slate/90 dark:text-foreground/80">
          Tableros con los números que importan: ventas, costos, leads y tiempos de entrega. Sin Excel, actualizado en tiempo real.
        </p>
        <p className="font-semibold text-brand-dark/80 dark:text-foreground pt-3 border-t border-black/5 dark:border-foreground/10 text-[13px] flex gap-2 flex-wrap items-center">
          <BarChart3 className="w-4 h-4 text-purple-500" />
          Dashboards · KPIs · Reporting
        </p>
      </>
    ),
    icon: <BarChart3 className="w-5 h-5 text-purple-500" />,
    visual: <InteligenciaVisual />,
    className: "col-span-1 lg:col-span-3",
    delay: 400,
    accent: "purple" as const,
  },
];

export const CoreServices = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const heroInView = useInView(heroRef, { once: true, margin: "-100px" });
  const isInView = useInView(containerRef, { once: true, margin: "-50px" });

  return (
    <>
      <section id="servicios" className="relative min-h-[50vh] flex items-center justify-center overflow-hidden bg-hero-gradient">
        <div className="absolute inset-0 architectural-grid opacity-30" />
        <div className="absolute inset-0 gradient-mesh" />
        <ParticleBackground />

        <div className="relative z-10 container mx-auto px-6 pt-32 pb-24" ref={heroRef}>
          <div className="max-w-5xl mx-auto text-center">
            <motion.h2
              className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.05] mb-4 text-balance font-heading"
              initial={{ opacity: 0, y: 30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ delay: 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              Servicios
            </motion.h2>
            <motion.p
              className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.2, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              Soluciones que funcionan solas o conectadas entre sí.
            </motion.p>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background via-background/80 to-transparent hidden dark:block" />
      </section>

      <section className="relative pb-32 scroll-mt-20 gradient-mesh-subtle" ref={containerRef}>
        <div className="container mx-auto px-6">
          <motion.div className="grid grid-cols-1 lg:grid-cols-3 gap-5 md:gap-6" initial="hidden" animate={isInView ? "show" : "hidden"}>
            {pillarServices.map((service, index) => (
              <BentoCard key={service.title} title={service.title} subtitle={service.subtitle} description={service.description} icon={service.icon} visual={service.visual} className={service.className} delay={service.delay} index={index} accent={service.accent} />
            ))}
          </motion.div>
          <motion.div className="mt-16 text-center" initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }} transition={{ delay: 0.6, duration: 0.5 }}>
            <Link to="/servicios">
              <Button variant="hero" size="lg" className="rounded-2xl px-8 group">
                Ver más servicios
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
