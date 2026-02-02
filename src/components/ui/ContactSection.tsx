"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import ContactForm from "./ContactForm";

export default function ContactSection() {
    return (
        <section className="py-32 px-8 relative z-10 w-full max-w-7xl mx-auto">
            <div className="glass-card rounded-[3rem] p-12 md:p-20 border border-foreground/10 relative overflow-hidden shadow-2xl">

                {/* Decorative Gradients */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2 pointer-events-none" />

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10">

                    {/* Left Column: CTA */}
                    <div className="space-y-8">
                        <motion.h2
                            className="text-5xl md:text-7xl font-display font-bold leading-[0.9] tracking-tighter text-foreground"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            Ready to be <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/60">Audit Proof?</span>
                        </motion.h2>

                        <motion.p
                            className="text-lg text-foreground/60 max-w-md"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            Don't let compliance hold you back. Partner with ITIS Secure to navigate TISAX, ISO, and TPISR with confidence.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="space-y-4"
                        >
                            <p className="text-sm text-foreground/40">
                                ✓ Expert auditors with 10+ years experience<br />
                                ✓ Trusted by 100+ automotive suppliers<br />
                                ✓ 98% first-time pass rate
                            </p>
                        </motion.div>
                    </div>

                    {/* Right Column: Contact Form */}
                    <div className="flex flex-col justify-center lg:pl-12 border-t lg:border-t-0 lg:border-l border-foreground/10 pt-8 lg:pt-0">
                        <ContactForm />
                    </div>
                </div>
            </div>
        </section>
    );
}
