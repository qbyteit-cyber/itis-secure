"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { useState } from "react";

const faqs = [
    {
        question: "What is TISAX and why do I need it?",
        answer: "TISAX (Trusted Information Security Assessment Exchange) is the automotive industry's standard for information security assessments. It's required by major OEMs (like BMW, Volkswagen, Daimler) for suppliers handling sensitive data. Without TISAX certification, you may lose existing contracts or be excluded from new business opportunities in the automotive supply chain.",
    },
    {
        question: "How long does TISAX certification take?",
        answer: "The timeline varies based on your current security maturity. Typically, gap analysis takes 1-2 weeks, remediation 2-6 months, and the audit itself 3-5 days. With our proven methodology, most clients achieve certification within 4-6 months from initial assessment to final approval.",
    },
    {
        question: "What are the different TISAX assessment levels?",
        answer: "TISAX has three assessment levels: AL1 (self-assessment), AL2 (3rd party audit for normal protection needs), and AL3 (enhanced audit for high protection needs). Most automotive suppliers require AL2 or AL3. The level depends on the type of data you handle and your customer's requirements.",
    },
    {
        question: "How much does TISAX certification cost?",
        answer: "Costs vary based on company size, scope, and current security posture. Typical investments range from €15,000-€50,000 including gap analysis, remediation support, audit fees, and certification. We provide transparent pricing after an initial assessment of your specific needs.",
    },
    {
        question: "Is TISAX the same as ISO 27001?",
        answer: "No, but they're closely related. TISAX is based on ISO 27001 but adds automotive-specific requirements like prototype protection and VDA ISA catalog controls. Having ISO 27001 certification significantly reduces TISAX preparation time, but you'll still need automotive-specific controls implemented.",
    },
    {
        question: "How often do I need to renew TISAX certification?",
        answer: "TISAX assessments are valid for 3 years. However, you must maintain your security controls continuously and may need surveillance audits. If your scope changes significantly (new locations, major process changes), you may need a reassessment before the 3-year period ends.",
    },
    {
        question: "What happens if I fail the TISAX audit?",
        answer: "TISAX uses a maturity-based scoring system rather than pass/fail. You receive a detailed report showing compliance levels for each control. If gaps are identified, you'll have time to remediate and request a follow-up assessment. Our 98% first-time success rate minimizes this risk through thorough preparation.",
    },
    {
        question: "Can I use one TISAX assessment for multiple customers?",
        answer: "Yes! That's the key benefit of TISAX. Once certified, your assessment results are shared via the ENX portal with all participating automotive OEMs and suppliers. You don't need separate audits for each customer—one TISAX label satisfies all participants.",
    },
    {
        question: "What documentation do I need for TISAX?",
        answer: "You'll need an Information Security Management System (ISMS) with policies, procedures, risk assessments, asset inventories, incident response plans, and evidence of implementation. We provide templates and guidance to streamline documentation creation based on your existing processes.",
    },
    {
        question: "Do you offer ongoing support after certification?",
        answer: "Absolutely. We provide post-certification support including annual compliance reviews, security awareness training, incident response assistance, and preparation for recertification. Many clients retain us as their virtual CISO for continuous security management.",
    },
];

export default function FAQSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="py-24 px-8 relative z-10 w-full max-w-4xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-16"
            >
                <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
                    Frequently Asked Questions
                </h2>
                <p className="text-lg text-white/60">
                    Everything you need to know about TISAX certification
                </p>
            </motion.div>

            <div className="space-y-4">
                {faqs.map((faq, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.05 }}
                        className="glass-card rounded-xl overflow-hidden border border-white/10 hover:border-primary/20 transition-all"
                    >
                        <button
                            onClick={() => toggleFAQ(index)}
                            className="w-full px-6 py-5 flex items-center justify-between text-left group"
                        >
                            <span className="text-lg font-semibold text-white pr-8 group-hover:text-primary transition-colors">
                                {faq.question}
                            </span>
                            <div className="shrink-0 w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                                {openIndex === index ? (
                                    <Minus className="w-5 h-5 text-primary" />
                                ) : (
                                    <Plus className="w-5 h-5 text-primary" />
                                )}
                            </div>
                        </button>

                        <AnimatePresence>
                            {openIndex === index && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.3, ease: "easeInOut" }}
                                    className="overflow-hidden"
                                >
                                    <div className="px-6 pb-5 text-white/70 leading-relaxed border-t border-white/5 pt-4">
                                        {faq.answer}
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>
                ))}
            </div>

            {/* CTA */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mt-12 text-center"
            >
                <p className="text-white/60 mb-4">Still have questions?</p>
                <a
                    href="#contact"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-transparent border border-primary text-primary font-bold rounded-lg hover:bg-primary/5 hover:shadow-[0_0_30px_rgba(8,97,242,0.2)] transition-all"
                >
                    Contact Our Experts
                </a>
            </motion.div>
        </section>
    );
}
