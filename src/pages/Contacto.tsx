import { Navbar } from "@/components/landing/Navbar";
import { Footer } from "@/components/landing/Footer";
import { Button } from "@/components/ui/button";
import { Calendar, Mail, MessageSquare, ArrowRight } from "lucide-react";

const Contacto = () => {
    return (
        <div className="min-h-screen bg-brand-dark flex flex-col font-sans selection:bg-brand-primary/30 selection:text-white">
            <Navbar />

            <main className="flex-1 pt-32 pb-24 relative">
                <div className="container mx-auto px-6 relative z-10 max-w-3xl">
                    <div className="mb-16 animate-fade-in">
                        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
                            Contacto
                        </h1>
                        <p className="text-lg text-brand-slate max-w-xl">
                            Estamos disponibles para discutir cómo podemos transformar la infraestructura de tu empresa con automatizaciones y análisis de datos.
                        </p>
                    </div>

                    <div className="flex flex-col gap-4 animate-fade-in" style={{ animationDelay: "100ms" }}>
                        <a
                            href="https://calendar.google.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex flex-col sm:flex-row items-start sm:items-center justify-between p-6 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition-colors"
                        >
                            <div className="flex items-center gap-4 mb-4 sm:mb-0">
                                <div className="w-12 h-12 rounded-lg bg-brand-primary/20 text-brand-primary flex items-center justify-center shrink-0">
                                    <Calendar className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-white font-medium mb-1">Agendar Reunión</h3>
                                    <p className="text-sm text-brand-slate">Teleconferencia de 30 minutos con un ingeniero.</p>
                                </div>
                            </div>
                            <Button variant="ghost" className="group-hover:text-brand-primary px-0 hover:bg-transparent">
                                Reservar espacio <ArrowRight className="w-4 h-4 ml-2" />
                            </Button>
                        </a>

                        <a
                            href="mailto:contacto@servicioscreativos.online"
                            className="group flex flex-col sm:flex-row items-start sm:items-center justify-between p-6 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition-colors"
                        >
                            <div className="flex items-center gap-4 mb-4 sm:mb-0">
                                <div className="w-12 h-12 rounded-lg bg-white/5 text-brand-slate flex items-center justify-center shrink-0">
                                    <Mail className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-white font-medium mb-1">Correo Electrónico</h3>
                                    <p className="text-sm text-brand-slate">contacto@servicioscreativos.online</p>
                                </div>
                            </div>
                            <Button variant="ghost" className="text-brand-slate group-hover:text-white px-0 hover:bg-transparent">
                                Enviar mensaje <ArrowRight className="w-4 h-4 ml-2" />
                            </Button>
                        </a>

                        <a
                            href="https://wa.me/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex flex-col sm:flex-row items-start sm:items-center justify-between p-6 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition-colors"
                        >
                            <div className="flex items-center gap-4 mb-4 sm:mb-0">
                                <div className="w-12 h-12 rounded-lg bg-white/5 text-brand-slate flex items-center justify-center shrink-0">
                                    <MessageSquare className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-white font-medium mb-1">WhatsApp</h3>
                                    <p className="text-sm text-brand-slate">Asistencia rápida por chat.</p>
                                </div>
                            </div>
                            <Button variant="ghost" className="text-brand-slate group-hover:text-white px-0 hover:bg-transparent">
                                Iniciar chat <ArrowRight className="w-4 h-4 ml-2" />
                            </Button>
                        </a>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default Contacto;
