import { useState } from "react";
import { Navbar } from "@/components/landing/Navbar";
import { Footer } from "@/components/landing/Footer";
import { motion } from "framer-motion";
import {
    ArrowRight,
    Bot,
    BrainCircuit,
    CheckCircle2,
    Database,
    Activity,
    Clock,
    ShieldCheck,
    Zap
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";

// 1. Onboarding de Cristal (Simulador n8n)
const N8nSimulator = () => {
    return (
        <section className="py-24 relative border-b border-white/5">
            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
                        El "Onboarding" de <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-violet-400">Cristal</span>
                    </h2>
                    <p className="text-brand-slate text-lg">
                        Tu proyecto no entra en una lista de espera humana. Nuestro stack de automatización procesa, clasifica y asigna tu requerimiento en segundos.
                    </p>
                </div>

                {/* Flujo animado */}
                <div className="relative max-w-4xl mx-auto bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 md:gap-4">

                    {/* Nodo 1 */}
                    <div className="flex flex-col items-center gap-3 relative z-10 w-full md:w-1/3">
                        <div className="w-16 h-16 rounded-2xl bg-brand-dark border border-white/20 flex items-center justify-center shadow-[0_0_30px_rgba(255,255,255,0.05)]">
                            <Database className="w-8 h-8 text-brand-slate" />
                        </div>
                        <div className="text-center">
                            <div className="font-semibold text-sm">Recepción</div>
                            <div className="text-xs text-brand-slate">Webhook Trigger</div>
                        </div>
                    </div>

                    {/* Línea conectora 1 */}
                    <div className="hidden md:block absolute top-16 left-1/6 right-1/2 h-0.5 bg-white/10 -z-10 translate-x-10" />

                    {/* Data Packet Animado 1 */}
                    <motion.div
                        className="absolute hidden md:block w-3 h-3 bg-brand-primary rounded-full blur-[2px] z-0 top-[62px]"
                        animate={{
                            left: ["20%", "48%"],
                            opacity: [0, 1, 0]
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "linear",
                        }}
                    />

                    {/* Nodo 2 */}
                    <div className="flex flex-col items-center gap-3 relative z-10 w-full md:w-1/3">
                        <div className="w-16 h-16 rounded-2xl bg-brand-primary/20 border border-brand-primary/50 flex items-center justify-center shadow-[0_0_30px_rgba(99,102,241,0.2)]">
                            <BrainCircuit className="w-8 h-8 text-brand-primary" />
                        </div>
                        <div className="text-center">
                            <div className="font-semibold text-sm">Análisis IA</div>
                            <div className="text-xs text-brand-slate">Clasificación de Industria</div>
                        </div>
                    </div>

                    {/* Línea conectora 2 */}
                    <div className="hidden md:block absolute top-16 left-1/2 right-1/6 h-0.5 bg-white/10 -z-10 translate-x-10" />

                    {/* Data Packet Animado 2 */}
                    <motion.div
                        className="absolute hidden md:block w-3 h-3 bg-violet-400 rounded-full blur-[2px] z-0 top-[62px]"
                        animate={{
                            left: ["50%", "80%"],
                            opacity: [0, 1, 0]
                        }}
                        transition={{
                            duration: 2,
                            delay: 1, // Desfasado para que empiece después de que el primer paquete llegue
                            repeat: Infinity,
                            ease: "linear",
                        }}
                    />

                    {/* Nodo 3 */}
                    <div className="flex flex-col items-center gap-3 relative z-10 w-full md:w-1/3">
                        <div className="w-16 h-16 rounded-2xl bg-emerald-500/20 border border-emerald-500/50 flex items-center justify-center shadow-[0_0_30px_rgba(16,185,129,0.2)]">
                            <CheckCircle2 className="w-8 h-8 text-emerald-400" />
                        </div>
                        <div className="text-center">
                            <div className="font-semibold text-sm">Asignación</div>
                            <div className="text-xs text-brand-slate">Ingeniero Notificado</div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

// 2. Dashboard de Salud del Proyecto (BI Simulator)
const BiDashboard = () => {
    return (
        <section className="py-24 relative bg-black/20 border-b border-white/5">
            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
                        Inteligencia de Negocios <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-violet-400">Interna</span>
                    </h2>
                    <p className="text-brand-slate text-lg">
                        Aplicamos a nuestra agencia el mismo rigor analítico que desarrollamos para ti. Transparencia total basada en datos.
                    </p>
                </div>

                {/* Bento Grid Simulación */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                    {/* Tarjeta 1 */}
                    <Card className="bg-white/5 border-white/10 backdrop-blur-md text-white md:col-span-2">
                        <CardHeader className="pb-2">
                            <div className="flex items-center gap-2 text-brand-slate mb-1">
                                <Clock className="w-4 h-4" />
                                <span className="text-sm font-medium">Velocidad de Despliegue</span>
                            </div>
                            <CardTitle className="text-3xl font-bold">4.2 Días</CardTitle>
                            <CardDescription className="text-emerald-400 flex items-center gap-1 mt-1">
                                <ArrowRight className="w-3 h-3 rotate-45" /> Promedio desde solicitud a producción
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="h-4 w-full bg-white/5 rounded-full overflow-hidden mt-4">
                                <motion.div
                                    className="h-full bg-gradient-to-r from-brand-primary to-violet-500 rounded-full"
                                    initial={{ width: 0 }}
                                    whileInView={{ width: "85%" }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 1.5, delay: 0.2 }}
                                />
                            </div>
                            <div className="flex justify-between text-xs text-brand-slate mt-2">
                                <span>Día 1: Setup</span>
                                <span>Día 3: Testing</span>
                                <span>Día 5: Deploy</span>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Tarjeta 2 */}
                    <Card className="bg-white/5 border-white/10 backdrop-blur-md text-white">
                        <CardHeader className="pb-2">
                            <div className="flex items-center gap-2 text-brand-slate mb-1">
                                <ShieldCheck className="w-4 h-4" />
                                <span className="text-sm font-medium">Uptime Infraestructura</span>
                            </div>
                            <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">
                                99.99%
                            </div>
                        </CardHeader>
                        <CardContent>
                            <div className="w-full flex items-center gap-1 mt-4">
                                {[...Array(24)].map((_, i) => (
                                    <div key={i} className="flex-1 h-8 rounded-sm bg-emerald-500/80" title={`Hora ${i}`} />
                                ))}
                            </div>
                            <div className="text-xs text-brand-slate mt-2">Últimas 24 horas</div>
                        </CardContent>
                    </Card>

                    {/* Tarjeta 3 */}
                    <Card className="bg-white/5 border-white/10 backdrop-blur-md text-white flex flex-col justify-center">
                        <CardHeader className="pb-2">
                            <div className="flex items-center gap-2 text-brand-slate mb-1">
                                <Bot className="w-4 h-4" />
                                <span className="text-sm font-medium">Automatización Interna</span>
                            </div>
                            <CardTitle className="text-4xl font-bold">87%</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-brand-slate">
                                De los tickets de soporte nivel 1 resueltos sin intervención humana este mes.
                            </p>
                        </CardContent>
                    </Card>

                    {/* Tarjeta 4 */}
                    <Card className="bg-gradient-to-br from-brand-primary/20 to-violet-600/20 border-brand-primary/30 backdrop-blur-md text-white md:col-span-2 flex items-center p-6">
                        <div className="flex items-center gap-6">
                            <div className="w-16 h-16 rounded-full bg-brand-primary/30 flex items-center justify-center flex-shrink-0 relative">
                                <Activity className="w-8 h-8 text-brand-primary z-10" />
                                <motion.div
                                    className="absolute inset-0 bg-brand-primary rounded-full z-0"
                                    animate={{ scale: [1, 1.5], opacity: [0.5, 0] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-1">Monitoreo Activo</h3>
                                <p className="text-sm text-brand-slate">
                                    Nuestros sistemas realizan +500 comprobaciones de estado por minuto a través de la infraestructura de nuestros clientes.
                                </p>
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
        </section>
    );
};

// 3. La Calculadora de Fricción (Generador de Leads Interactivo)
const FrictionCalculator = () => {
    const [hours, setHours] = useState(20);
    const [teamSize, setTeamSize] = useState(5);

    // Estimación simple: (Horas * Tamaño) * Valor Hora Promedio (~$25) * 52 semanas / 2 (factor de mitigación)
    const estimatedCost = Math.round((hours * teamSize * 25 * 52) / 2);

    return (
        <section className="py-24 relative overflow-hidden">
            {/* Luces de acento de fondo */}
            <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-violet-600/10 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-12 items-center">

                    {/* Controles de la Calculadora */}
                    <div className="w-full md:w-1/2 flex flex-col gap-8">
                        <div>
                            <h2 className="text-3xl font-bold tracking-tight mb-4">
                                Calculadora de Fricción
                            </h2>
                            <p className="text-brand-slate">
                                Descubre cuánto le está costando la falta de infraestructura automatizada a tu equipo este año.
                            </p>
                        </div>

                        <div className="space-y-8">
                            <div className="space-y-4">
                                <div className="flex justify-between items-end">
                                    <label className="text-sm font-medium text-white">Horas semanales en tareas manuales</label>
                                    <span className="text-brand-primary font-bold">{hours} hrs</span>
                                </div>
                                <Slider
                                    defaultValue={[20]}
                                    max={100}
                                    step={5}
                                    value={[hours]}
                                    onValueChange={(val) => setHours(val[0])}
                                    className="[&_[role=slider]]:bg-brand-primary [&_[role=slider]]:border-brand-primary"
                                />
                            </div>

                            <div className="space-y-4">
                                <div className="flex justify-between items-end">
                                    <label className="text-sm font-medium text-white">Tamaño del equipo involucrado</label>
                                    <span className="text-brand-primary font-bold">{teamSize} personas</span>
                                </div>
                                <Slider
                                    defaultValue={[5]}
                                    max={50}
                                    step={1}
                                    value={[teamSize]}
                                    onValueChange={(val) => setTeamSize(val[0])}
                                    className="[&_[role=slider]]:bg-brand-primary [&_[role=slider]]:border-brand-primary"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Panel de Resultados */}
                    <div className="w-full md:w-1/2">
                        <div className="bg-gradient-to-b from-white/10 to-transparent border border-white/20 p-8 rounded-3xl backdrop-blur-xl text-center relative overflow-hidden shadow-2xl">
                            <div className="absolute top-0 right-0 p-4 opacity-10">
                                <Zap className="w-32 h-32" />
                            </div>

                            <div className="relative z-10">
                                <div className="text-brand-slate text-sm font-medium uppercase tracking-wider mb-2">
                                    Dinero Perdido Anualmente (Est.)
                                </div>
                                <div className="text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-orange-400 mb-6 font-mono">
                                    ${estimatedCost.toLocaleString()}
                                </div>
                                <p className="text-sm text-brand-slate/80 mb-8 max-w-xs mx-auto">
                                    Este es el capital humano gastado en procesos repetitivos que un sistema inteligente resolvería.
                                </p>

                                <a href="/#contacto" className="w-full inline-block">
                                    <Button size="lg" className="w-full bg-white text-black hover:bg-white/90 font-bold rounded-xl h-14 text-base shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] transition-all">
                                        Auditar mi infraestructura ahora
                                    </Button>
                                </a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

const Proceso = () => {
    return (
        <div className="min-h-screen bg-brand-dark text-white selection:bg-brand-primary/30">
            <Navbar />

            {/* Hero simple para la página de proceso */}
            <header className="pt-32 pb-12 relative">
                <div className="container mx-auto px-6 text-center max-w-4xl relative z-10">
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
                        Nuestra <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-violet-400">Infraestructura</span>
                    </h1>
                    <p className="text-brand-slate text-xl md:text-2xl leading-relaxed">
                        No te explicamos cómo trabajamos. Te lo demostramos con nuestro propio stack técnico operando en vivo.
                    </p>
                </div>
            </header>

            <main>
                <N8nSimulator />
                <BiDashboard />
                <FrictionCalculator />
            </main>

            <Footer />
        </div>
    );
};

export default Proceso;
