import { useEffect, useRef } from "react";
import allokLogo from "@/assets/allok-logo.png";

const integrations = [
  { 
    name: "WhatsApp", 
    color: "#25D366",
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
      </svg>
    )
  },
  { 
    name: "Google Sheets", 
    color: "#34A853",
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
        <path d="M19.385 2H4.615A2.615 2.615 0 002 4.615v14.77A2.615 2.615 0 004.615 22h14.77A2.615 2.615 0 0022 19.385V4.615A2.615 2.615 0 0019.385 2zM8 18H5v-3h3v3zm0-5H5v-3h3v3zm0-5H5V5h3v3zm5 10h-3v-3h3v3zm0-5h-3v-3h3v3zm0-5h-3V5h3v3zm6 10h-4v-3h4v3zm0-5h-4v-3h4v3zm0-5h-4V5h4v3z"/>
      </svg>
    )
  },
  { 
    name: "Salesforce", 
    color: "#00A1E0",
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
        <path d="M10.006 5.415a4.195 4.195 0 013.045-1.306c1.56 0 2.954.9 3.69 2.205.63-.3 1.35-.45 2.1-.45 2.85 0 5.159 2.34 5.159 5.22s-2.31 5.22-5.16 5.22c-.39 0-.78-.045-1.155-.12-.63 1.38-2.01 2.34-3.615 2.34a3.93 3.93 0 01-1.875-.465 4.413 4.413 0 01-3.99 2.52c-2.01 0-3.72-1.335-4.275-3.18-.27.03-.54.06-.825.06-2.58 0-4.65-2.13-4.65-4.74a4.7 4.7 0 013.39-4.545 4.98 4.98 0 014.125-5.31 4.935 4.935 0 014.035 2.55z"/>
      </svg>
    )
  },
  { 
    name: "n8n", 
    color: "#EA4B71",
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
      </svg>
    )
  },
  { 
    name: "Slack", 
    color: "#4A154B",
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
        <path d="M5.042 15.165a2.528 2.528 0 01-2.52 2.523A2.528 2.528 0 010 15.165a2.527 2.527 0 012.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 012.521-2.52 2.527 2.527 0 012.521 2.52v6.313A2.528 2.528 0 018.834 24a2.528 2.528 0 01-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 01-2.521-2.52A2.528 2.528 0 018.834 0a2.528 2.528 0 012.521 2.522v2.52H8.834zM8.834 6.313a2.528 2.528 0 012.521 2.521 2.528 2.528 0 01-2.521 2.521H2.522A2.528 2.528 0 010 8.834a2.528 2.528 0 012.522-2.521h6.312zM18.956 8.834a2.528 2.528 0 012.522-2.521A2.528 2.528 0 0124 8.834a2.528 2.528 0 01-2.522 2.521h-2.522V8.834zM17.688 8.834a2.528 2.528 0 01-2.523 2.521 2.527 2.527 0 01-2.52-2.521V2.522A2.527 2.527 0 0115.165 0a2.528 2.528 0 012.523 2.522v6.312zM15.165 18.956a2.528 2.528 0 012.523 2.522A2.528 2.528 0 0115.165 24a2.527 2.527 0 01-2.52-2.522v-2.522h2.52zM15.165 17.688a2.527 2.527 0 01-2.52-2.523 2.526 2.526 0 012.52-2.52h6.313A2.527 2.527 0 0124 15.165a2.528 2.528 0 01-2.522 2.523h-6.313z"/>
      </svg>
    )
  },
  { 
    name: "HubSpot", 
    color: "#FF7A59",
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
        <path d="M18.164 7.93V5.084a2.198 2.198 0 001.267-1.984v-.066A2.2 2.2 0 0017.238.84h-.065a2.2 2.2 0 00-2.193 2.193v.065c0 .87.513 1.618 1.253 1.97v2.862a5.657 5.657 0 00-2.774 1.31L6.01 3.97a2.64 2.64 0 00.072-.588A2.6 2.6 0 003.49.792a2.6 2.6 0 00-.004 5.199c.564 0 1.081-.18 1.51-.484l7.355 5.17a5.698 5.698 0 00-.614 2.58c0 .947.236 1.838.645 2.625l-2.152 2.152a2.03 2.03 0 00-.588-.086 2.074 2.074 0 000 4.148 2.074 2.074 0 002.074-2.073c0-.206-.032-.404-.088-.59l2.108-2.108a5.696 5.696 0 109.418-4.07 5.694 5.694 0 00-5.99-5.326zm.05 8.896a3.472 3.472 0 01-3.468-3.468 3.472 3.472 0 013.468-3.469 3.472 3.472 0 013.469 3.469 3.472 3.472 0 01-3.469 3.468z"/>
      </svg>
    )
  },
];

export const Integrations = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width - 0.5) * 20;
      const y = ((e.clientY - rect.top) / rect.height - 0.5) * 20;
      container.style.setProperty('--mouse-x', `${x}deg`);
      container.style.setProperty('--mouse-y', `${y}deg`);
    };

    container.addEventListener('mousemove', handleMouseMove);
    return () => container.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section id="integraciones" className="relative py-32 md:py-40 overflow-hidden bg-neutral-950 scroll-mt-20">
      {/* Animated gradient background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gradient-to-r from-emerald-500/20 via-transparent to-blue-500/20 blur-3xl animate-pulse" />
      </div>

      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)`,
        backgroundSize: '60px 60px'
      }} />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 mb-6 opacity-0 animate-fade-up" style={{ animationFillMode: 'forwards' }}>
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-sm text-white/60">Ecosystem</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-5 text-white opacity-0 animate-fade-up" style={{ animationDelay: '100ms', animationFillMode: 'forwards' }}>
            Conectividad total.
          </h2>
          <p className="text-lg text-white/50 opacity-0 animate-fade-up" style={{ animationDelay: '200ms', animationFillMode: 'forwards' }}>
            Nos integramos con las herramientas que ya usas para crear flujos de trabajo sin fricción.
          </p>
        </div>

        {/* Integration Mesh */}
        <div 
          ref={containerRef}
          className="relative max-w-4xl mx-auto h-[500px] perspective-1000"
        >
          {/* Center Allok Hub */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30">
            {/* Outer glow rings */}
            <div className="absolute inset-0 -m-8 rounded-full border border-white/5 animate-ping" style={{ animationDuration: '3s' }} />
            <div className="absolute inset-0 -m-16 rounded-full border border-white/5 animate-ping" style={{ animationDuration: '4s', animationDelay: '0.5s' }} />
            <div className="absolute inset-0 -m-24 rounded-full border border-white/5 animate-ping" style={{ animationDuration: '5s', animationDelay: '1s' }} />
            
            {/* Main hub */}
            <div className="relative w-24 h-24 rounded-2xl bg-gradient-to-br from-neutral-800 to-neutral-900 border border-white/10 flex items-center justify-center shadow-2xl">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity" />
              <img src={allokLogo} alt="Allok Hub" className="w-12 h-12 invert" />
              {/* Glow effect */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-emerald-500/30 to-blue-500/30 blur-xl opacity-50" />
            </div>
          </div>

          {/* Animated connection lines with SVG */}
          <svg 
            className="absolute inset-0 w-full h-full pointer-events-none"
            viewBox="0 0 800 500"
            preserveAspectRatio="xMidYMid meet"
          >
            <defs>
              {integrations.map((integration, i) => (
                <linearGradient key={`grad-${i}`} id={`lineGrad-${i}`} x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor={integration.color} stopOpacity="0" />
                  <stop offset="50%" stopColor={integration.color} stopOpacity="0.6" />
                  <stop offset="100%" stopColor={integration.color} stopOpacity="0" />
                </linearGradient>
              ))}
            </defs>
            
            {/* Animated bezier curves */}
            {[
              "M 120 100 Q 280 180 400 250",
              "M 680 100 Q 520 180 400 250", 
              "M 60 250 Q 200 250 400 250",
              "M 740 250 Q 600 250 400 250",
              "M 120 400 Q 280 320 400 250",
              "M 680 400 Q 520 320 400 250",
            ].map((d, i) => (
              <g key={i}>
                <path 
                  d={d}
                  fill="none" 
                  stroke={`url(#lineGrad-${i})`}
                  strokeWidth="2"
                  className="opacity-0 animate-fade-up"
                  style={{ 
                    animationDelay: `${400 + i * 100}ms`,
                    animationFillMode: 'forwards'
                  }}
                />
                {/* Animated dot traveling along path */}
                <circle r="3" fill={integrations[i].color}>
                  <animateMotion
                    dur={`${3 + i * 0.5}s`}
                    repeatCount="indefinite"
                    path={d}
                  />
                </circle>
              </g>
            ))}
          </svg>

          {/* Integration Nodes */}
          {integrations.map((integration, i) => {
            const positions = [
              { top: '8%', left: '8%' },
              { top: '8%', left: '82%' },
              { top: '44%', left: '0%' },
              { top: '44%', left: '88%' },
              { top: '76%', left: '8%' },
              { top: '76%', left: '82%' },
            ];
            
            return (
              <div
                key={integration.name}
                className="absolute opacity-0 animate-scale-in"
                style={{ 
                  top: positions[i].top,
                  left: positions[i].left,
                  animationDelay: `${500 + i * 100}ms`,
                  animationFillMode: 'forwards'
                }}
              >
                <div className="group flex flex-col items-center gap-3 cursor-pointer">
                  {/* Glow background */}
                  <div 
                    className="absolute inset-0 rounded-2xl blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-500"
                    style={{ backgroundColor: integration.color }}
                  />
                  
                  {/* Icon container */}
                  <div 
                    className="relative w-16 h-16 rounded-2xl bg-neutral-900/80 border border-white/10 flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:border-white/20 backdrop-blur-sm"
                    style={{ 
                      boxShadow: `0 0 0 1px ${integration.color}15, 0 8px 32px -8px ${integration.color}30`
                    }}
                  >
                    <div style={{ color: integration.color }}>
                      {integration.icon}
                    </div>
                  </div>
                  
                  {/* Label */}
                  <span className="text-sm text-white/60 font-medium group-hover:text-white transition-colors">
                    {integration.name}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom stats */}
        <div className="flex flex-wrap items-center justify-center gap-8 mt-20 pt-12 border-t border-white/5">
          {[
            { value: '50+', label: 'Integraciones' },
            { value: '99.9%', label: 'Uptime' },
            { value: '<100ms', label: 'Latencia' },
          ].map((stat, i) => (
            <div 
              key={stat.label}
              className="text-center opacity-0 animate-fade-up"
              style={{ animationDelay: `${800 + i * 100}ms`, animationFillMode: 'forwards' }}
            >
              <div className="text-2xl md:text-3xl font-semibold text-white">{stat.value}</div>
              <div className="text-sm text-white/40 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
