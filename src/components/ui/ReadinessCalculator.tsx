"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronRight, ChevronLeft, Mail, Download, Calendar } from "lucide-react";
import { useState } from "react";

interface Question {
    id: string;
    category: string;
    question: string;
    options: {
        label: string;
        value: number;
    }[];
}

interface Answer {
    questionId: string;
    category: string;
    value: number;
    label: string;
}

const questions: Question[] = [
    {
        id: "isms",
        category: "ISMS Documentation",
        question: "Do you currently have a documented Information Security Management System (ISMS)?",
        options: [
            { label: "No", value: 0 },
            { label: "In Progress", value: 5 },
            { label: "Fully Implemented", value: 10 },
        ],
    },
    {
        id: "access",
        category: "Access Control",
        question: "Are multi-factor authentication (MFA) and strict access controls implemented across all Tier-1 systems?",
        options: [
            { label: "No", value: 0 },
            { label: "Partial Implementation", value: 5 },
            { label: "Yes, Fully Implemented", value: 10 },
        ],
    },
    {
        id: "risk",
        category: "Risk Management",
        question: "Do you conduct annual internal audits and risk assessments?",
        options: [
            { label: "No", value: 0 },
            { label: "Occasionally", value: 5 },
            { label: "Yes, Annually", value: 10 },
        ],
    },
    {
        id: "thirdparty",
        category: "Third-Party Management",
        question: "Do you have documented processes for managing third-party security risks?",
        options: [
            { label: "No", value: 0 },
            { label: "In Development", value: 5 },
            { label: "Fully Documented", value: 10 },
        ],
    },
];

interface ReadinessCalculatorProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function ReadinessCalculator({ isOpen, onClose }: ReadinessCalculatorProps) {
    const [currentStep, setCurrentStep] = useState(0);
    const [answers, setAnswers] = useState<Answer[]>([]);
    const [userEmail, setUserEmail] = useState("");
    const [showResults, setShowResults] = useState(false);
    const [emailSubmitted, setEmailSubmitted] = useState(false);

    const totalSteps = questions.length + 1; // +1 for lead capture
    const progress = ((currentStep + 1) / totalSteps) * 100;

    const handleAnswer = (option: { label: string; value: number }) => {
        const currentQuestion = questions[currentStep];
        const newAnswer: Answer = {
            questionId: currentQuestion.id,
            category: currentQuestion.category,
            value: option.value,
            label: option.label,
        };

        setAnswers([...answers.filter(a => a.questionId !== currentQuestion.id), newAnswer]);

        // Auto-advance after selection
        setTimeout(() => {
            if (currentStep < questions.length - 1) {
                setCurrentStep(currentStep + 1);
            } else {
                setCurrentStep(currentStep + 1); // Move to lead capture
            }
        }, 300);
    };

    const handleEmailSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Send results via Web3Forms
        const formData = new FormData();
        formData.append("access_key", "2737653e-178b-49b4-ad00-ab8feac7a6ef");
        formData.append("email", userEmail);
        formData.append("subject", `TISAX Readiness Assessment - ${calculateScore()}%`);
        formData.append("message", generateEmailReport());

        try {
            await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });
        } catch (error) {
            console.error("Failed to send email:", error);
        }

        setEmailSubmitted(true);
        setShowResults(true);
    };

    const calculateScore = () => {
        const totalScore = answers.reduce((sum, answer) => sum + answer.value, 0);
        const maxScore = questions.length * 10;
        return Math.round((totalScore / maxScore) * 100);
    };

    const generateEmailReport = () => {
        const score = calculateScore();
        let report = `TISAX Readiness Assessment Results\n\n`;
        report += `Overall Score: ${score}%\n\n`;
        report += `Breakdown:\n`;
        answers.forEach(answer => {
            report += `- ${answer.category}: ${answer.label} (${answer.value}/10)\n`;
        });
        return report;
    };

    const getScoreTier = (score: number) => {
        if (score >= 91) return { label: "Audit Ready", color: "text-green-400", desc: "Excellent Compliance" };
        if (score >= 71) return { label: "Good Standing", color: "text-blue-400", desc: "Minor Improvements Needed" };
        if (score >= 41) return { label: "Moderate Risk", color: "text-amber-400", desc: "Gaps Identified" };
        return { label: "High Risk", color: "text-red-400", desc: "Immediate Action Required" };
    };

    const handlePrevious = () => {
        if (currentStep > 0) {
            setCurrentStep(currentStep - 1);
        }
    };

    const handleReset = () => {
        setCurrentStep(0);
        setAnswers([]);
        setUserEmail("");
        setShowResults(false);
        setEmailSubmitted(false);
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="fixed inset-0 z-50 flex items-center justify-center p-4"
                    onClick={onClose}
                >
                    {/* Backdrop */}
                    <div className="absolute inset-0 bg-[rgba(11,14,20,0.8)] backdrop-blur-xl" />

                    {/* Modal Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                        onClick={(e) => e.stopPropagation()}
                        className="relative w-full max-w-2xl bg-gradient-to-b from-white/[0.02] to-white/[0.01] backdrop-blur-xl border border-primary/30 rounded-3xl shadow-2xl overflow-hidden"
                    >
                        {/* Progress Bar */}
                        <div className="h-1 bg-white/5">
                            <motion.div
                                className="h-full bg-gradient-to-r from-primary to-blue-500"
                                initial={{ width: 0 }}
                                animate={{ width: `${progress}%` }}
                                transition={{ duration: 0.2, ease: "linear" }}
                            />
                        </div>

                        {/* Close Button */}
                        <button
                            onClick={onClose}
                            className="absolute top-6 right-6 p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors z-10"
                        >
                            <X className="w-5 h-5 text-white/60" />
                        </button>

                        {/* Content */}
                        <div className="p-8 md:p-12">
                            {!showResults ? (
                                <>
                                    {currentStep < questions.length ? (
                                        // Question Step
                                        <motion.div
                                            key={currentStep}
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: -20 }}
                                            transition={{ duration: 0.3, ease: "easeInOut" }}
                                        >
                                            <div className="mb-8">
                                                <p className="text-sm text-primary font-mono mb-2">
                                                    STEP {currentStep + 1} OF {questions.length}
                                                </p>
                                                <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-2">
                                                    {questions[currentStep].category}
                                                </h3>
                                                <p className="text-lg text-white/70">
                                                    {questions[currentStep].question}
                                                </p>
                                            </div>

                                            <div className="space-y-3">
                                                {questions[currentStep].options.map((option, index) => (
                                                    <motion.button
                                                        key={index}
                                                        onClick={() => handleAnswer(option)}
                                                        initial={{ opacity: 0, y: 10 }}
                                                        animate={{ opacity: 1, y: 0 }}
                                                        transition={{ delay: index * 0.1 }}
                                                        className={`
                              w-full p-5 rounded-xl text-left transition-all
                              border ${answers.find(a => a.questionId === questions[currentStep].id)?.value === option.value
                                                                ? 'border-primary bg-primary/10'
                                                                : 'border-white/10 bg-white/5 hover:border-primary/50 hover:bg-white/10'
                                                            }
                            `}
                                                    >
                                                        <span className="text-white font-medium">{option.label}</span>
                                                    </motion.button>
                                                ))}
                                            </div>

                                            {/* Navigation */}
                                            {currentStep > 0 && (
                                                <button
                                                    onClick={handlePrevious}
                                                    className="mt-6 flex items-center gap-2 text-white/50 hover:text-white transition-colors"
                                                >
                                                    <ChevronLeft className="w-4 h-4" />
                                                    Previous
                                                </button>
                                            )}
                                        </motion.div>
                                    ) : (
                                        // Lead Capture Step
                                        <motion.div
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <div className="text-center mb-8">
                                                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/20 mb-4">
                                                    <Mail className="w-8 h-8 text-primary" />
                                                </div>
                                                <h3 className="text-3xl font-display font-bold text-white mb-3">
                                                    Get Your Results
                                                </h3>
                                                <p className="text-white/60">
                                                    Enter your work email to receive your personalized Gap Analysis report
                                                </p>
                                            </div>

                                            <form onSubmit={handleEmailSubmit} className="space-y-4">
                                                <input
                                                    type="email"
                                                    required
                                                    value={userEmail}
                                                    onChange={(e) => setUserEmail(e.target.value)}
                                                    placeholder="your.email@company.com"
                                                    className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-xl focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all text-white placeholder:text-white/30"
                                                />
                                                <button
                                                    type="submit"
                                                    className="w-full px-8 py-4 bg-transparent border border-primary text-primary font-bold rounded-xl hover:bg-primary/5 transition-all hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(8,97,242,0.2)] active:scale-95 flex items-center justify-center gap-2"
                                                >
                                                    View My Results
                                                    <ChevronRight className="w-5 h-5" />
                                                </button>
                                            </form>

                                            <button
                                                onClick={handlePrevious}
                                                className="mt-6 flex items-center gap-2 text-white/50 hover:text-white transition-colors mx-auto"
                                            >
                                                <ChevronLeft className="w-4 h-4" />
                                                Previous
                                            </button>
                                        </motion.div>
                                    )}
                                </>
                            ) : (
                                // Results Screen
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.4 }}
                                    className="text-center"
                                >
                                    <h3 className="text-2xl font-display font-bold text-white mb-6">
                                        Your TISAX Readiness Score
                                    </h3>

                                    <div className="mb-8">
                                        <div className="text-7xl font-display font-bold text-primary mb-2">
                                            {calculateScore()}%
                                        </div>
                                        <div className={`text-xl font-semibold ${getScoreTier(calculateScore()).color} mb-1`}>
                                            {getScoreTier(calculateScore()).label}
                                        </div>
                                        <p className="text-white/50">
                                            {getScoreTier(calculateScore()).desc}
                                        </p>
                                    </div>

                                    {/* Breakdown */}
                                    <div className="bg-white/5 rounded-2xl p-6 mb-8 text-left">
                                        <h4 className="text-sm font-mono text-primary mb-4">BREAKDOWN</h4>
                                        <div className="space-y-3">
                                            {answers.map((answer) => (
                                                <div key={answer.questionId} className="flex justify-between items-center">
                                                    <span className="text-white/70 text-sm">{answer.category}</span>
                                                    <span className={`font-semibold ${answer.value === 10 ? 'text-green-400' :
                                                        answer.value === 5 ? 'text-amber-400' : 'text-red-400'
                                                        }`}>
                                                        {answer.label}
                                                    </span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* CTAs */}
                                    <div className="space-y-3">
                                        <button className="w-full px-8 py-4 bg-transparent border border-primary text-primary font-bold rounded-xl hover:bg-primary/5 transition-all hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(8,97,242,0.2)] flex items-center justify-center gap-2">
                                            <Calendar className="w-5 h-5" />
                                            Book TISAX Consultation
                                        </button>
                                        <button className="w-full px-8 py-4 border border-secondary/50 text-secondary hover:bg-secondary/10 transition-all rounded-xl font-bold flex items-center justify-center gap-2">
                                            <Download className="w-5 h-5" />
                                            Download Full Gap Analysis
                                        </button>
                                    </div>

                                    <button
                                        onClick={handleReset}
                                        className="mt-6 text-white/50 hover:text-white transition-colors text-sm"
                                    >
                                        Start New Assessment
                                    </button>
                                </motion.div>
                            )}
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
