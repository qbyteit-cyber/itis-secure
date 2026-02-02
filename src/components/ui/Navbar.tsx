"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 100);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { href: "#services", label: "Services" },
        { href: "#about", label: "About" },
        { href: "#contact", label: "Contact" },
    ];

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: isScrolled ? 0 : -100 }}
                transition={{ duration: 0.3 }}
                className="fixed top-0 left-0 right-0 z-50 px-6 py-4"
            >
                <div className="max-w-7xl mx-auto glass-card rounded-2xl px-6 py-4 border border-foreground/10 shadow-lg transition-all duration-300">

                    <div className="flex items-center justify-between">
                        {/* Logo */}
                        <Link href="/" className="flex items-center">
                            <img
                                src="/ITIS Secure logo transparent-crop.png"
                                alt="ITIS Secure - Information Security Consulting"
                                className="h-10 w-auto"
                            />
                        </Link>

                        <div className="hidden md:flex items-center gap-6">
                            {navLinks.map((link) => (
                                <a
                                    key={link.href}
                                    href={link.href}
                                    className="text-foreground/70 hover:text-primary transition-colors text-sm font-medium"
                                >
                                    {link.label}
                                </a>
                            ))}
                            <div className="flex items-center gap-4 ml-4 pl-4 border-l border-foreground/10">
                                <ThemeToggle />
                                <button className="px-6 py-2 bg-transparent border border-primary text-primary font-bold rounded-lg hover:bg-primary/5 hover:shadow-[0_0_20px_rgba(8,97,242,0.2)] transition-all text-sm">
                                    Get Started
                                </button>
                            </div>
                        </div>

                        {/* Mobile Menu Button & Toggle */}
                        <div className="md:hidden flex items-center gap-3">
                            <ThemeToggle />
                            <button
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                className="p-2 hover:bg-foreground/5 rounded-lg transition-colors"
                                aria-label="Toggle menu"
                            >
                                {isMobileMenuOpen ? (
                                    <X className="w-6 h-6" />
                                ) : (
                                    <Menu className="w-6 h-6" />
                                )}
                            </button>
                        </div>
                    </div>
                </div>
            </motion.nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.2 }}
                        className="fixed top-20 left-4 right-4 z-40 md:hidden"
                    >
                        <div className="glass-card rounded-2xl p-6 border border-foreground/10">
                            <div className="flex flex-col gap-4">
                                {navLinks.map((link) => (
                                    <a
                                        key={link.href}
                                        href={link.href}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className="text-foreground/70 hover:text-primary transition-colors text-lg font-medium py-2"
                                    >
                                        {link.label}
                                    </a>
                                ))}
                                <button className="w-full px-6 py-3 bg-transparent border border-primary text-primary font-bold rounded-lg hover:bg-primary/5 hover:shadow-[0_0_20px_rgba(8,97,242,0.2)] transition-all mt-2">
                                    Get Started
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
