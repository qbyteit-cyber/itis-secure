"use client";

import { motion } from "framer-motion";
import { Shield, Target, Zap, ExternalLink } from "lucide-react";

const projects = [
    {
        title: "Global Tier-1 Supplier ISMS",
        client: "Automotive Manufacturing Leader",
        description: "Full-scale ISO 27001 & TISAX® implementation across 12 international locations. Established a unified security framework and automated compliance monitoring.",
        impact: "100% Audit Success Rate",
        category: "Audit & Compliance",
        icon: Shield
    },
    {
        title: "Connected Vehicle Security",
        client: "European EV Start-up",
        description: "Designed and implemented a secure TPISR-compliant cloud architecture for vehicle telemetry mapping, ensuring robust data protection and sovereign cloud alignment.",
        impact: "TPISR Certification Secured",
        category: "Cloud Security",
        icon: Zap
    },
    {
        title: "Governance Transformation",
        client: "Multinational Logistics Group",
        description: "Transitioned a legacy governance model into a high-performance integrated risk management system, reducing audit overhead by 40% while enhancing threat visibility.",
        impact: "40% Efficiency Gain",
        category: "Risk Management",
        icon: Target
    }
];

export default function FeaturedProjects() {
    return (
        <section id="projects" className="py-24 relative overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-primary font-mono text-sm tracking-[0.3em] uppercase mb-4 block"
                    >
                        Success Stories
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-display font-bold text-white mb-6"
                    >
                        Impact Through <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Precision</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-white/60 max-w-2xl mx-auto text-lg"
                    >
                        We don't just advise; we deliver tangible security resilience. Explore how we’ve helped industry leaders navigate complex compliance landscapes.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.15 }}
                            className="group relative"
                        >
                            {/* Card Background with Glassmorphism */}
                            <div className="absolute inset-0 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl transition-all duration-500 group-hover:bg-white/[0.08] group-hover:border-primary/30 group-hover:shadow-[0_0_40px_rgba(8,97,242,0.1)]" />

                            <div className="relative p-8 flex flex-col h-full">
                                <div className="mb-6 flex justify-between items-start">
                                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary border border-primary/20 group-hover:scale-110 transition-transform duration-500">
                                        <project.icon size={24} />
                                    </div>
                                    <span className="text-[10px] tracking-widest uppercase text-white/40 font-mono py-1 px-2 border border-white/10 rounded">
                                        {project.category}
                                    </span>
                                </div>

                                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-primary/70 text-sm font-medium mb-4">{project.client}</p>

                                <p className="text-white/50 text-sm leading-relaxed mb-8 flex-grow">
                                    {project.description}
                                </p>

                                <div className="pt-6 border-t border-white/5 mt-auto flex items-center justify-between">
                                    <div>
                                        <p className="text-xs text-white/30 uppercase tracking-tighter mb-1">Key Impact</p>
                                        <p className="text-white font-semibold text-sm">{project.impact}</p>
                                    </div>
                                    <button className="text-white/40 group-hover:text-primary transition-colors p-2 -mr-2">
                                        <ExternalLink size={18} />
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Background Decorative Element */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
        </section>
    );
}
