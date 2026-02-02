"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react";

export default function ContactForm() {
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    const [errorMessage, setErrorMessage] = useState("");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus("loading");
        setErrorMessage("");

        const formData = new FormData(e.currentTarget);
        formData.append("access_key", "2737653e-178b-49b4-ad00-ab8feac7a6ef");

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });

            const data = await response.json();

            if (data.success) {
                setStatus("success");
                e.currentTarget.reset();
                setTimeout(() => setStatus("idle"), 5000);
            } else {
                setStatus("error");
                setErrorMessage("Unable to send message. Please try again or contact us directly.");
            }
        } catch (error) {
            setStatus("error");
            setErrorMessage("Connection error. Please verify your internet connection and retry.");
        }
    };

    return (
        <motion.form
            onSubmit={handleSubmit}
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
        >
            {/* Name & Email Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-white/70 mb-2">
                        Full Name *
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all text-white placeholder:text-white/30"
                        placeholder="John Doe"
                    />
                </div>
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-white/70 mb-2">
                        Email Address *
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all text-white placeholder:text-white/30"
                        placeholder="john@company.com"
                    />
                </div>
            </div>

            {/* Company & Service Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <label htmlFor="company" className="block text-sm font-medium text-white/70 mb-2">
                        Company Name
                    </label>
                    <input
                        type="text"
                        id="company"
                        name="company"
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all text-white placeholder:text-white/30"
                        placeholder="Your Company"
                    />
                </div>
                <div>
                    <label htmlFor="service" className="block text-sm font-medium text-white/70 mb-2">
                        Service Interest
                    </label>
                    <select
                        id="service"
                        name="service"
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all text-white"
                    >
                        <option value="" className="bg-background">Select a service</option>
                        <option value="TISAX" className="bg-background">TISAX® Assessment</option>
                        <option value="TPISR" className="bg-background">TPISR Audit</option>
                        <option value="ISO27001" className="bg-background">ISO 27001:2022</option>
                        <option value="GDPR" className="bg-background">GDPR Compliance</option>
                        <option value="ISMS" className="bg-background">ISMS Implementation</option>
                        <option value="Other" className="bg-background">Other</option>
                    </select>
                </div>
            </div>

            {/* Message */}
            <div>
                <label htmlFor="message" className="block text-sm font-medium text-white/70 mb-2">
                    Message *
                </label>
                <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all text-white placeholder:text-white/30 resize-none"
                    placeholder="Tell us about your compliance needs..."
                />
            </div>

            {/* Status Messages */}
            {status === "success" && (
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 p-4 bg-green-500/10 border border-green-500/20 rounded-lg text-green-400"
                >
                    <CheckCircle className="w-5 h-5" />
                    <span>Message sent successfully! We'll get back to you soon.</span>
                </motion.div>
            )}

            {status === "error" && (
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 p-4 bg-red-500/10 border border-red-500/20 rounded-lg text-red-400"
                >
                    <AlertCircle className="w-5 h-5" />
                    <span>{errorMessage}</span>
                </motion.div>
            )}

            {/* Submit Button */}
            <div className="space-y-3">
                {/* Security Badge */}
                <div className="flex items-center justify-center gap-2 text-sm text-white/40">
                    <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                    <span>Secure Transmission Guaranteed</span>
                </div>

                <button
                    type="submit"
                    disabled={status === "loading"}
                    className="w-full px-8 py-4 bg-transparent border border-primary text-primary font-bold rounded-lg hover:bg-primary/5 transition-all hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(8,97,242,0.2)] active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                    {status === "loading" ? (
                        <>
                            <Loader2 className="w-5 h-5 animate-spin" />
                            Sending...
                        </>
                    ) : (
                        <>
                            <Send className="w-5 h-5" />
                            Send Message
                        </>
                    )}
                </button>
            </div>
        </motion.form>
    );
}
