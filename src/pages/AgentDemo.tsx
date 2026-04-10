import { ArrowLeft, Bot, User, Loader2 } from "lucide-react";
import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { useSEO } from "@/lib/seo";
import { PromptInputBox } from "@/components/ui/ai-prompt-box";
import { motion, AnimatePresence } from "framer-motion";
import OpenAI from "openai";

type Message = {
  id: string;
  role: "agent" | "user";
  content: string;
};

const openai = new OpenAI({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY || "",
  dangerouslyAllowBrowser: true, 
});

const SYSTEM_PROMPT = `
Eres un Arquitecto Principal de Ingeniería especializado en "Service Planning" e Infraestructuras de Inteligencia Artificial para empresas (B2B, SaaS, E-Commerce).
Tu rol es evaluar inmediatamente el requerimiento técnico o de automatización del cliente y esbozar un sistema o servicio robusto de alto impacto. No utilices saludos genéricos ni clisés de IA; entra directo al análisis, al valor y al diseño del flujo.
Pregunta por casos de uso específicos (volumen de leads, plataformas conectadas como Stripe, Hubspot o Meta, etc.), muestra proactividad y utiliza un lenguaje técnico pero elegante y minimalista.

Estás representando el servicio de consultoría de Creativv.
`.trim();

const AgentDemo = () => {
  useSEO({
    title: "Creativv | Planificador de Sistemas IA",
    description: "Workstation para planificar, esquematizar y desplegar tus agentes de IA.",
    path: "/agente",
  });

  const location = useLocation();
  const [messages, setMessages] = useState<Message[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [promptValue, setPromptValue] = useState("");
  
  const bottomRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  useEffect(() => {
    if (location.state?.initialMessage) {
      handleSendMessage(location.state.initialMessage);
      window.history.replaceState({}, document.title);
    }
  }, []);

  const handleSendMessage = async (message: string, files?: File[]) => {
    if (!message.trim() && (!files || files.length === 0)) return;
    
    // Validar apiKey
    if (!import.meta.env.VITE_OPENAI_API_KEY) {
      alert("Atención: Por favor agrega VITE_OPENAI_API_KEY a tu archivo .env");
      // Prevent blocking totally for demo purposes
    }

    const newMessageContent = message;
    
    setMessages(prev => [...prev, { id: Date.now().toString(), role: "user", content: newMessageContent }]);
    setPromptValue(""); // limpiamos la caja rápida
    setIsTyping(true);

    try {
      // Re-estructuramos el arreglo para enviarlo a OpenAI
      const contextMessages = messages.map(m => ({ 
        role: m.role === "agent" ? "assistant" : ("user" as const), 
        content: m.content 
      }));

      const completion = await openai.chat.completions.create({
        model: "gpt-4o-mini", // modelo ágil y asertivo
        messages: [
          { role: "system", content: SYSTEM_PROMPT },
          ...contextMessages,
          { role: "user", content: newMessageContent },
        ],
        temperature: 0.7,
        max_tokens: 400, // Respuestas ejecutivas, nada biblico
      });

      const aiReply = completion.choices[0]?.message?.content || "Hubo un fallo de inferencia en la red neuronal.";
      
      setMessages(prev => [...prev, { id: (Date.now() + 1).toString(), role: "agent", content: aiReply }]);
    } catch (e: any) {
      setMessages(prev => [...prev, { id: (Date.now() + 1).toString(), role: "agent", content: "Error procesando solicitud: " + (e?.message || "Falló la API.") }]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleSuggestionClick = (sug: string) => {
    handleSendMessage(sug);
  };

  return (
    <div className="flex w-full min-h-screen flex-col bg-[radial-gradient(125%_125%_at_50%_101%,rgba(245,87,2,0.15)_10.5%,rgba(245,120,2,0.1)_16%,transparent_100%)] bg-[#0a0a0c] relative">
      <div className="noise-overlay" />
      
      {/* Header Fijo */}
      <div className="sticky top-0 z-50 flex items-center justify-between px-6 py-4 bg-black/40 backdrop-blur-md border-b border-white/5">
        <Link
          to="/"
          className="flex items-center gap-2 text-white/70 hover:text-white transition-colors text-sm"
        >
          <ArrowLeft size={16} /> Volver
        </Link>
        <div className="flex items-center gap-3">
          <div className="w-2 h-2 rounded-full bg-brand-primary animate-pulse" />
          <span className="text-sm font-medium tracking-widest uppercase text-white/50">Simulador de Service Planning</span>
        </div>
      </div>
      
      {/* Zona de Chat / Historial (Crece para ocupar espacio vertical) */}
      <div className="flex-1 w-full max-w-4xl mx-auto px-4 py-8 overflow-y-auto z-10 scrollbar-thin scrollbar-thumb-[#444444] scrollbar-track-transparent">
        {messages.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-full mt-20 text-center text-white mb-8">
            <h1 className="text-4xl font-bold font-heading mb-4 text-white">¿Qué optimizaremos hoy?</h1>
            <p className="text-white/60 max-w-md mx-auto">Ingresa tu requerimiento central. Evaluaremos técnica y operativamente la mejor arquitectura IA para tu servicio.</p>
          </div>
        ) : (
          <div className="flex flex-col gap-6">
            <AnimatePresence>
              {messages.map((msg) => (
                <motion.div 
                  key={msg.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex gap-4 ${msg.role === "user" ? "flex-row-reverse" : "flex-row"}`}
                >
                  <div className={`w-10 h-10 flex-shrink-0 flex items-center justify-center rounded-xl border ${msg.role === "user" ? "bg-white/5 border-white/10" : "bg-brand-primary/10 border-brand-primary/20 text-brand-primary"} backdrop-blur-sm`}>
                    {msg.role === "user" ? <User size={18} className="text-white/80" /> : <Bot size={18} />}
                  </div>
                  <div className={`flex flex-col max-w-[80%] ${msg.role === "user" ? "items-end" : "items-start"}`}>
                    <div className={`px-5 py-3.5 rounded-2xl ${msg.role === "user" ? "bg-[#1F2023] border border-white/5 text-white shadow-lg" : "bg-transparent text-white/80 leading-relaxed text-[15px]"}`}>
                      {msg.content}
                    </div>
                  </div>
                </motion.div>
              ))}
              
              {isTyping && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="flex gap-4 flex-row"
                >
                  <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center rounded-xl bg-brand-primary/10 border border-brand-primary/20 text-brand-primary backdrop-blur-sm">
                    <Loader2 size={18} className="animate-spin" />
                  </div>
                  <div className="flex flex-col max-w-[80%] items-start justify-center">
                    <div className="flex gap-1.5 px-5 py-3.5 items-center justify-center h-full">
                      <motion.div animate={{ opacity: [0.4, 1, 0.4] }} transition={{ repeat: Infinity, duration: 1.5, delay: 0 }} className="w-1.5 h-1.5 bg-brand-primary rounded-full" />
                      <motion.div animate={{ opacity: [0.4, 1, 0.4] }} transition={{ repeat: Infinity, duration: 1.5, delay: 0.2 }} className="w-1.5 h-1.5 bg-brand-primary rounded-full" />
                      <motion.div animate={{ opacity: [0.4, 1, 0.4] }} transition={{ repeat: Infinity, duration: 1.5, delay: 0.4 }} className="w-1.5 h-1.5 bg-brand-primary rounded-full" />
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )}
        <div ref={bottomRef} className="h-4" />
      </div>

      {/* Zona Inferior: Input y Sugerencias */}
      <div className="w-full bg-gradient-to-t from-[#0a0a0c] via-[#0a0a0c] to-transparent pt-10 pb-6 z-20">
        <div className="max-w-4xl mx-auto px-4">
          <PromptInputBox 
            value={promptValue}
            onChange={setPromptValue}
            onSend={handleSendMessage} 
            placeholder="Escribe aquí tu cuello de botella a resolver..." 
            isLoading={isTyping}
          />
          
          {/* Ocultamos sugerencias si ya hay charla para dar enfoque minimalista al chat */}
          {messages.length === 0 && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="mt-8 flex flex-wrap items-center justify-center gap-4"
            >
              <span className="text-xs text-white/30 uppercase tracking-[0.1em] font-medium font-sans">SUGERENCIAS:</span>
              <button 
                onClick={() => handleSuggestionClick("Agente de ventas IG")}
                className="text-sm px-4 py-2 rounded-full border border-white/5 bg-white/[0.03] text-white/60 hover:bg-white/[0.08] hover:text-white transition-colors"
                disabled={isTyping}
              >
                Agente de ventas IG
              </button>
              <button 
                onClick={() => handleSuggestionClick("Automatizar facturación")}
                className="text-sm px-4 py-2 rounded-full border border-white/5 bg-white/[0.03] text-white/60 hover:bg-white/[0.08] hover:text-white transition-colors"
                disabled={isTyping}
              >
                Automatizar facturación
              </button>
              <button 
                onClick={() => handleSuggestionClick("Bot de soporte 24/7")}
                className="text-sm px-4 py-2 rounded-full border border-white/5 bg-white/[0.03] text-white/60 hover:bg-white/[0.08] hover:text-white transition-colors"
                disabled={isTyping}
              >
                Bot de soporte 24/7
              </button>
              <button 
                onClick={() => handleSuggestionClick("Calificación de leads (B2B)")}
                className="text-sm px-4 py-2 rounded-full border border-white/5 bg-white/[0.03] text-white/60 hover:bg-white/[0.08] hover:text-white transition-colors"
                disabled={isTyping}
              >
                Calificación de leads (B2B)
              </button>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AgentDemo;
