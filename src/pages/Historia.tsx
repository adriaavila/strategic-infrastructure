import { Navbar } from "@/components/landing/Navbar";
import { Footer } from "@/components/landing/Footer";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { FileText, Sparkles, Heart } from "lucide-react";

const Historia = () => {
    return (
        <div className="relative min-h-screen bg-brand-dark text-white selection:bg-brand-primary/30">
            <div className="noise-overlay" />
            <Navbar />

            <main className="pt-32 pb-20 overflow-hidden relative">
                {/* Decorative Background Elements */}
                <div className="absolute top-40 left-1/4 w-[500px] h-[500px] bg-brand-primary/20 rounded-full blur-[120px] -z-10" />
                <div className="absolute bottom-40 right-1/4 w-[400px] h-[400px] bg-brand-secondary/20 rounded-full blur-[100px] -z-10" />

                <div className="container mx-auto px-6 max-w-5xl">
                    {/* Hero Section */}
                    <section className="text-center mb-32 flex flex-col items-center justify-center pt-10">
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="relative mb-12"
                        >
                            {/* Very large logo */}
                            <div className="relative w-48 h-48 md:w-64 md:h-64 mx-auto drop-shadow-2xl flex items-center justify-center before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-tr before:from-brand-primary/40 before:to-brand-secondary/40 before:blur-3xl before:-z-10 rounded-full">
                                <img src="/logo.svg" alt="Servicios Creativos Logo" className="w-full h-full object-contain" />
                            </div>
                        </motion.div>

                        <motion.h1
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="text-5xl md:text-7xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-white/90 to-white/70"
                        >
                            La Historia Detrás
                        </motion.h1>

                        <motion.p
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="text-xl md:text-2xl text-brand-slate max-w-3xl mx-auto leading-relaxed"
                        >
                            La estética no es solo visual, es una herramienta de ventas. Construimos tecnología que enamora y cierra contratos.
                        </motion.p>
                    </section>

                    {/* About Section */}
                    <section className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-32">
                        <motion.div
                            initial={{ x: -30, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="space-y-6 text-brand-slate text-lg leading-relaxed"
                        >
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
                                Hola, soy Adrian Avila.
                            </h2>
                            <p>
                                Soy la mente detrás de <strong className="text-white font-medium">servicioscreativos.online</strong>. Sé que un software feo y complicado hace que tus clientes abandonen y tus ventas caigan, sin importar qué tan avanzado sea el código detrás.
                            </p>
                            <p>
                                Por eso fusiono ingeniería de software, automatizaciones y análisis de datos con un <strong className="text-white font-medium">diseño premium enfocado en usabilidad (UI/UX)</strong>.
                            </p>
                            <p>
                                Creo firmemente que la estética de un producto digital es una ventaja competitiva directa. Un software hermoso retiene clientes y destaca sobre los demás. Cada proyecto que hacemos está diseñado para multiplicar tu rentabilidad con un nivel de detalle milimétrico.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ x: 30, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="relative h-[500px] w-full bg-gradient-to-br from-white/5 to-white/10 rounded-3xl border border-white/10 overflow-hidden group flex items-center justify-center backdrop-blur-sm"
                        >
                            {/* Optional: Replace this placeholder with an actual photo of Adrian Avila if available */}
                            <div className="absolute inset-0 bg-brand-dark/40 backdrop-blur-sm z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <p className="text-white/80 font-medium tracking-widest uppercase text-sm">Adrian Avila</p>
                            </div>
                            <div className="flex flex-col items-center gap-6 text-brand-slate/50 z-0">
                                <Heart className="w-16 h-16 text-brand-primary/40" />
                                <span className="text-2xl font-light italic">"La belleza es una métrica."</span>
                            </div>
                        </motion.div>
                    </section>

                    {/* UX Focus Section */}
                    <section className="mb-32">
                        <motion.div
                            initial={{ y: 30, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="bg-white/5 border border-white/10 rounded-3xl p-10 md:p-16 backdrop-blur-md relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-secondary/20 rounded-full blur-[80px] -z-10 translate-x-1/2 -translate-y-1/2" />
                            <div className="max-w-3xl">
                                <h3 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                                    <Sparkles className="text-brand-primary w-8 h-8" />
                                    El Diseño Como Motor de Ventas
                                </h3>
                                <p className="text-brand-slate text-lg leading-relaxed mb-8">
                                    Si tu tecnología es difícil de usar, pierdes clientes. Diseñamos con interfaces intuitivas, animaciones fluidas y estéticas premium que transmiten confianza inmediata. Nuestra promesa es entregar herramientas robustas que hagan lucir a tu negocio inalcanzable para tu competencia.
                                </p>

                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                    <div className="border border-white/10 bg-black/20 rounded-2xl p-6">
                                        <h4 className="text-white font-medium mb-2">Interfaces Pulidas</h4>
                                        <p className="text-sm text-brand-slate">Diseños minimalistas y modernos que reducen la fricción cognitiva.</p>
                                    </div>
                                    <div className="border border-white/10 bg-black/20 rounded-2xl p-6">
                                        <h4 className="text-white font-medium mb-2">Micro Interacciones</h4>
                                        <p className="text-sm text-brand-slate">Detalles animados que guían y recompensan al usuario sin abrumarlo.</p>
                                    </div>
                                    <div className="border border-white/10 bg-black/20 rounded-2xl p-6">
                                        <h4 className="text-white font-medium mb-2">Estética Única</h4>
                                        <p className="text-sm text-brand-slate">Ni plantillas genéricas ni soluciones aburridas. Tailor-made.</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </section>

                    {/* Brief / CTA Section */}
                    <section className="text-center py-20 border-t border-white/10">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="max-w-2xl mx-auto"
                        >
                            <div className="w-16 h-16 bg-brand-primary/20 rounded-2xl flex items-center justify-center mx-auto mb-8 border border-brand-primary/30">
                                <FileText className="w-8 h-8 text-brand-primary" />
                            </div>
                            <h2 className="text-4xl font-bold mb-6 text-white">Haz tu Briefing</h2>
                            <p className="text-brand-slate text-lg mb-10">
                                Construyamos algo único y altamente rentable. Cuéntanos tu desafío y te mostraremos cómo podemos resolverlo generando más volumen de negocio de forma atractiva y funcional.
                            </p>

                            <Button size="lg" className="h-14 px-8 rounded-full text-lg shadow-[0_0_40px_-10px_rgba(157,123,247,0.5)] hover:shadow-[0_0_60px_-10px_rgba(157,123,247,0.7)] transition-all">
                                Completar el Brief
                            </Button>
                        </motion.div>
                    </section>

                </div>
            </main>

            <Footer />
        </div>
    );
};

export default Historia;
