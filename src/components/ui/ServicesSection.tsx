"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Database, FileKey, Lock, Shield } from "lucide-react";
import { useState } from "react";

const services = [
    {
        id: "tisax",
        title: "TISAX® Assessment",
        description: "Full preparation for the Trusted Information Security Assessment Exchange (VDA ISA). Essential for VW, BMW, and Mercedes suppliers.",
        scope: "Gap analysis • Documentation • Pre-audit • Certification support",
        icon: ShieldCheck,
    },
    {
        id: "tpisr",
        title: "TPISR Audit",
        description: "Compliance services for Third-Party Information Security Requirements (Auto-ISAC). Trusted by GM and Ford supply chains.",
        scope: "Risk assessment • Controls implementation • Audit preparation",
        icon: Database,
    },
    {
        id: "iso27001",
        title: "ISO 27001:2022",
        description: "The gold standard for Information Security Management Systems (ISMS). Build a resilient security framework.",
        scope: "ISMS design • Policy development • Internal audit • Certification",
        icon: Lock,
    },
    {
        id: "gdpr",
        title: "GDPR Compliance",
        description: "Ensure your data handling meets strict EU privacy regulations. Protect personal data and avoid heavy fines.",
        scope: "Data mapping • Privacy impact assessment • Compliance roadmap",
        icon: FileKey,
    },
    {
        id: "isms",
        title: "ISMS Implementation",
        description: "Build and maintain a comprehensive Information Security Management System tailored to your organization's needs and risk profile.",
        scope: "Framework design • Risk management • Continuous improvement",
        icon: Shield,
    },
];

export default function ServicesSection() {
    const [hoveredCard, setHoveredCard] = useState<string | null>(null);

    return (
        <section className="py-24 px-8 relative overflow-hidden w-full max-w-7xl mx-auto">
            {/* Trust Background Pattern */}
            <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, var(--color-primary) 1px, transparent 0)', backgroundSize: '40px 40px' }} />

            <div className="mb-16 text-center">
                <motion.h2
                    className="text-4xl md:text-5xl font-display font-bold mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    Compliance <span className="text-primary">Ecosystem</span>
                </motion.h2>
                <motion.p
                    className="text-foreground/60 max-w-2xl mx-auto text-lg"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    We bridge the gap between complex security standards and your business operations.
                    Select your audit path.
                </motion.p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
                {services.map((service, index) => (
                    <motion.div
                        key={service.id}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        onMouseEnter={() => setHoveredCard(service.id)}
                        onMouseLeave={() => setHoveredCard(null)}
                        className={`
                            group relative p-8 rounded-2xl 
                            bg-surface
                            border transition-all duration-500
                            ${hoveredCard === service.id
                                ? 'border-primary shadow-[0_20px_50px_rgba(8,97,242,0.1)]'
                                : 'border-foreground/5'
                            }
                            hover:scale-[1.02]
                        `}
                    >
                        {/* Icon */}
                        <div className={`
                            inline-flex items-center justify-center w-14 h-14 rounded-xl mb-6
                            transition-all duration-300
                            ${hoveredCard === service.id
                                ? 'bg-primary/20 shadow-[0_0_20px_rgba(0,242,255,0.3)]'
                                : 'bg-primary/10'
                            }
                        `}>
                            <service.icon className={`
                                w-7 h-7 transition-all duration-300
                                ${hoveredCard === service.id ? 'text-primary scale-110' : 'text-primary/80'}
                            `} />
                        </div>

                        {/* Title */}
                        <h3 className="text-xl font-display font-semibold text-foreground mb-3">
                            {service.title}
                        </h3>

                        {/* Description */}
                        <p className="text-foreground/50 text-sm leading-relaxed mb-4">
                            {service.description}
                        </p>

                        {/* Scope of Work - Revealed on Hover */}
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{
                                opacity: hoveredCard === service.id ? 1 : 0,
                                height: hoveredCard === service.id ? 'auto' : 0
                            }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                        >
                            <div className="pt-4 border-t border-foreground/5">
                                <p className="text-xs text-primary/70 font-medium mb-2">SCOPE OF WORK</p>
                                <p className="text-xs text-foreground/40 leading-relaxed">
                                    {service.scope}
                                </p>
                            </div>
                        </motion.div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
