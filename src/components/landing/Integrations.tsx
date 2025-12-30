import { useEffect, useRef } from "react";

const integrations = [
  { name: "WhatsApp", icon: "💬" },
  { name: "Google Sheets", icon: "📊" },
  { name: "Salesforce", icon: "☁️" },
  { name: "n8n", icon: "⚡" },
  { name: "Slack", icon: "💜" },
  { name: "HubSpot", icon: "🧡" },
];

export const Integrations = () => {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;

    const paths = svg.querySelectorAll('.connection-line');
    paths.forEach((path, i) => {
      const pathElement = path as SVGPathElement;
      const length = pathElement.getTotalLength();
      pathElement.style.strokeDasharray = `${length}`;
      pathElement.style.strokeDashoffset = `${length}`;
      pathElement.style.animation = `draw-line 1.5s ease ${i * 0.2}s forwards`;
    });
  }, []);

  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 dotted-grid opacity-30" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4 opacity-0 animate-fade-up" style={{ animationFillMode: 'forwards' }}>
            Conectividad total.
          </h2>
          <p className="text-muted-foreground opacity-0 animate-fade-up" style={{ animationDelay: '100ms', animationFillMode: 'forwards' }}>
            Nos integramos con las herramientas que ya usas para crear flujos de trabajo sin fricción.
          </p>
        </div>

        {/* Integration Mesh */}
        <div className="relative max-w-3xl mx-auto">
          {/* Center Node */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
            <div className="w-20 h-20 rounded-2xl bg-primary flex items-center justify-center shadow-lg animate-float">
              <span className="text-2xl font-bold text-primary-foreground">A</span>
            </div>
          </div>

          {/* SVG Connections */}
          <svg 
            ref={svgRef}
            className="absolute inset-0 w-full h-full pointer-events-none"
            viewBox="0 0 600 400"
            preserveAspectRatio="xMidYMid meet"
          >
            <defs>
              <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="hsl(var(--foreground))" stopOpacity="0.05" />
                <stop offset="50%" stopColor="hsl(var(--foreground))" stopOpacity="0.15" />
                <stop offset="100%" stopColor="hsl(var(--foreground))" stopOpacity="0.05" />
              </linearGradient>
            </defs>
            
            {/* Bezier curves connecting to center */}
            <path 
              className="connection-line"
              d="M 100 80 Q 200 150 300 200" 
              fill="none" 
              stroke="url(#lineGradient)" 
              strokeWidth="1.5"
            />
            <path 
              className="connection-line"
              d="M 500 80 Q 400 150 300 200" 
              fill="none" 
              stroke="url(#lineGradient)" 
              strokeWidth="1.5"
            />
            <path 
              className="connection-line"
              d="M 50 200 Q 150 200 300 200" 
              fill="none" 
              stroke="url(#lineGradient)" 
              strokeWidth="1.5"
            />
            <path 
              className="connection-line"
              d="M 550 200 Q 450 200 300 200" 
              fill="none" 
              stroke="url(#lineGradient)" 
              strokeWidth="1.5"
            />
            <path 
              className="connection-line"
              d="M 100 320 Q 200 250 300 200" 
              fill="none" 
              stroke="url(#lineGradient)" 
              strokeWidth="1.5"
            />
            <path 
              className="connection-line"
              d="M 500 320 Q 400 250 300 200" 
              fill="none" 
              stroke="url(#lineGradient)" 
              strokeWidth="1.5"
            />
          </svg>

          {/* Integration Nodes */}
          <div className="relative h-[400px]">
            {integrations.map((integration, i) => {
              const positions = [
                { top: '0%', left: '10%' },
                { top: '0%', right: '10%', left: 'auto' },
                { top: '40%', left: '0%' },
                { top: '40%', right: '0%', left: 'auto' },
                { top: '80%', left: '10%' },
                { top: '80%', right: '10%', left: 'auto' },
              ];
              
              return (
                <div
                  key={integration.name}
                  className="absolute opacity-0 animate-scale-in"
                  style={{ 
                    ...positions[i], 
                    animationDelay: `${300 + i * 100}ms`,
                    animationFillMode: 'forwards'
                  }}
                >
                  <div className="group flex flex-col items-center gap-2">
                    <div className="w-14 h-14 rounded-xl bg-card border border-foreground/[0.08] flex items-center justify-center text-2xl transition-all duration-300 group-hover:border-foreground/20 group-hover:scale-110">
                      {integration.icon}
                    </div>
                    <span className="text-xs text-muted-foreground font-medium">
                      {integration.name}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
