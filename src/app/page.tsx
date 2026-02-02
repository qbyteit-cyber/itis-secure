"use client";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { useState } from "react";
import ServicesSection from "@/components/ui/ServicesSection";
import ContactSection from "@/components/ui/ContactSection";
import TrustMarkers from "@/components/ui/TrustMarkers";
import ReadinessCalculator from "@/components/ui/ReadinessCalculator";
import Footer from "@/components/ui/Footer";
import Testimonials from "@/components/ui/Testimonials";
import AboutSection from "@/components/ui/AboutSection";
import FAQSection from "@/components/ui/FAQSection";
import FeaturedProjects from "@/components/ui/FeaturedProjects";
import LogoMarquee from "@/components/ui/LogoMarquee";

const SecurityMesh = dynamic(() => import("@/components/canvas/SecurityMesh"), {
  ssr: false,
});

export default function Home() {
  const [calculatorOpen, setCalculatorOpen] = useState(false);

  return (
    <main id="main-content" className="min-h-screen flex flex-col items-center justify-start px-4 sm:px-8 relative overflow-x-hidden overflow-y-auto text-center z-0">
      <div className="z-10 text-center space-y-4 sm:space-y-6 max-w-4xl relative mt-24 sm:mt-32 mb-24 sm:mb-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="px-3 py-1 rounded-full border border-primary/20 bg-primary/10 text-primary text-xs sm:text-sm tracking-widest uppercase font-mono">
            Automotive Security Compliance
          </span>
        </motion.div>

        <motion.h1
          className="text-4xl sm:text-6xl md:text-8xl font-display font-bold leading-tight tracking-tighter px-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          Secure Your <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-white to-secondary animate-gradient-x">
            Digital Future
          </span>
        </motion.h1>

        <motion.p
          className="text-base sm:text-lg md:text-xl text-white/60 max-w-2xl mx-auto font-light px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Expert audits for <strong className="text-white font-semibold">TISAX®</strong>, <strong className="text-white font-semibold">ISMS</strong>, <strong className="text-white font-semibold">ISO 27001</strong>, <strong className="text-white font-semibold">GDPR</strong>, and <strong className="text-white font-semibold">TPISR</strong>.
          The modern standard for automotive data protection.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center pt-8 items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <button
            onClick={() => setCalculatorOpen(true)}
            className="px-10 py-5 bg-transparent border border-primary text-primary font-bold text-lg rounded-lg hover:bg-primary/5 transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(8, 97, 242, 0.2)] active:scale-95"
          >
            Start Assessment
          </button>
          <button className="px-10 py-5 border-2 border-primary/50 text-primary hover:bg-primary/10 transition-all hover:border-primary rounded-lg font-bold text-lg flex items-center gap-2 active:scale-95">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Download Compliance Guide
          </button>
        </motion.div>
      </div>

      {/* 3D Background */}
      <div className="fixed inset-0 z-0 opacity-40 pointer-events-none">
        <SecurityMesh />
      </div>

      {/* Vignette & Ambient Light */}
      <div className="fixed inset-0 bg-radial-gradient from-transparent via-background/80 to-background z-[1] pointer-events-none" />

      {/* Content Sections */}
      <div className="relative z-10 w-full pb-16 sm:pb-32">
        <LogoMarquee />
        <div id="services">
          <ServicesSection />
        </div>
        <AboutSection />
        <TrustMarkers />
        <FeaturedProjects />
        <Testimonials />
        <FAQSection />
        <div id="contact">
          <ContactSection />
        </div>
        <Footer />
      </div>

      {/* Readiness Calculator Modal */}
      <ReadinessCalculator isOpen={calculatorOpen} onClose={() => setCalculatorOpen(false)} />
    </main>
  );
}
