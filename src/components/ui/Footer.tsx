"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="relative z-10 w-full border-t border-foreground/5 bg-surface transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-8 pt-20 pb-16">
                {/* Pre-footer Trust Section */}
                <div className="flex flex-col lg:flex-row items-center justify-between gap-12 pb-16 mb-16 border-b border-foreground/5">
                    <div className="text-center lg:text-left">
                        <h2 className="text-3xl font-display font-bold text-foreground mb-4">
                            Ready to secure your <span className="text-primary">compliance roadmap?</span>
                        </h2>
                        <p className="text-foreground/60 max-w-lg">
                            Join 50+ automotive leaders who trust ITIS Secure for their TISAX and ISO 27001 certifications.
                        </p>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <button className="px-8 py-4 bg-primary text-white font-bold rounded-xl hover:bg-primary/90 transition-all shadow-[0_10px_30px_rgba(8,97,242,0.3)] hover:scale-105 active:scale-95">
                            Book Audit Readiness Check
                        </button>
                        <button className="px-8 py-4 bg-foreground/5 text-foreground font-bold rounded-xl hover:bg-foreground/10 transition-all border border-foreground/10">
                            View Case Studies
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

                    {/* Company Info */}
                    <div>
                        <h3 className="text-xl font-display font-bold text-foreground mb-4">
                            ITIS Secure
                        </h3>
                        <p className="text-foreground/50 text-sm leading-relaxed mb-4">
                            World-class security audit firm specializing in TISAX, ISO 27001, and automotive compliance standards.
                        </p>
                        <div className="flex gap-3">
                            <a
                                href="#"
                                className="w-10 h-10 rounded-lg bg-foreground/5 hover:bg-primary/10 border border-foreground/10 hover:border-primary/30 flex items-center justify-center transition-all"
                            >
                                <Linkedin className="w-5 h-5 text-foreground/60 hover:text-primary" />
                            </a>
                            <a
                                href="#"
                                className="w-10 h-10 rounded-lg bg-foreground/5 hover:bg-primary/10 border border-foreground/10 hover:border-primary/30 flex items-center justify-center transition-all"
                            >
                                <Twitter className="w-5 h-5 text-foreground/60 hover:text-primary" />
                            </a>
                        </div>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-sm font-mono text-primary uppercase tracking-wider mb-4">
                            Services
                        </h4>
                        <ul className="space-y-3">
                            <li>
                                <a href="#services" className="text-foreground/60 hover:text-primary transition-colors text-sm">
                                    TISAX® Assessment
                                </a>
                            </li>
                            <li>
                                <a href="#services" className="text-foreground/60 hover:text-primary transition-colors text-sm">
                                    TPISR Audit
                                </a>
                            </li>
                            <li>
                                <a href="#services" className="text-foreground/60 hover:text-primary transition-colors text-sm">
                                    ISO 27001:2022
                                </a>
                            </li>
                            <li>
                                <a href="#services" className="text-foreground/60 hover:text-primary transition-colors text-sm">
                                    GDPR Compliance
                                </a>
                            </li>
                            <li>
                                <a href="#services" className="text-foreground/60 hover:text-primary transition-colors text-sm">
                                    ISMS Implementation
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h4 className="text-sm font-mono text-primary uppercase tracking-wider mb-4">
                            Company
                        </h4>
                        <ul className="space-y-3">
                            <li>
                                <a href="#" className="text-foreground/60 hover:text-primary transition-colors text-sm">
                                    About Us
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-foreground/60 hover:text-primary transition-colors text-sm">
                                    Our Team
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-foreground/60 hover:text-primary transition-colors text-sm">
                                    Case Studies
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-foreground/60 hover:text-primary transition-colors text-sm">
                                    Careers
                                </a>
                            </li>
                            <li>
                                <a href="#contact" className="text-foreground/60 hover:text-primary transition-colors text-sm">
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-sm font-mono text-primary uppercase tracking-wider mb-4">
                            Contact
                        </h4>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <Mail className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                                <a href="mailto:qbyteit@gmail.com" className="text-foreground/60 hover:text-primary transition-colors text-sm">
                                    qbyteit@gmail.com
                                </a>
                            </li>
                            <li className="flex items-start gap-3">
                                <Phone className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                                <a href="tel:+49123456789" className="text-foreground/60 hover:text-primary transition-colors text-sm">
                                    +49 (0) 123 456 789
                                </a>
                            </li>
                            <li className="flex items-start gap-3">
                                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                                <span className="text-foreground/60 text-sm">
                                    Munich, Germany<br />
                                    Automotive & Tech Hub
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-foreground/5 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-foreground/40 text-sm">
                        © {currentYear} ITIS Secure. All rights reserved.
                    </p>
                    <div className="flex gap-6">
                        <a href="#" className="text-foreground/40 hover:text-primary transition-colors text-sm">
                            Privacy Policy
                        </a>
                        <a href="#" className="text-foreground/40 hover:text-primary transition-colors text-sm">
                            Terms of Service
                        </a>
                        <a href="#" className="text-foreground/40 hover:text-primary transition-colors text-sm">
                            Cookie Policy
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
