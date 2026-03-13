export function ParticleBackground() {
  return (
    <div className="absolute inset-0 z-0 w-full h-full pointer-events-none overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(139,92,246,0.10),transparent_42%),radial-gradient(circle_at_80%_20%,rgba(45,212,191,0.08),transparent_32%)]" />
      <div className="absolute inset-0 opacity-[0.16] [background-image:linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:56px_56px] [mask-image:radial-gradient(circle_at_center,black,transparent_85%)]" />
      <div className="absolute left-1/2 top-1/4 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-brand-primary/[0.06] blur-[120px]" />
    </div>
  );
}
