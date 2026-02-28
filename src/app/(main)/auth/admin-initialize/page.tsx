"use client";

import { motion } from "framer-motion";
import { UserPlus, ArrowRight } from "lucide-react";
import Link from "next/link";
import AdminInitializeForm from "@/app/components/auth/AdminInitializeForm";
import BackToHome from "@/app/components/auth/AuthCommon";

export default function RegisterPage() {
    return (
        <div className="relative min-h-screen flex items-center justify-center px-4">
            {/* Background Elements */}
            <div className="absolute inset-0 -z-10 pointer-events-none">
                <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-linear-to-br from-purple-500/10 to-transparent blur-3xl rounded-full" />
                <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-linear-to-tl from-indigo-500/10 to-transparent blur-3xl rounded-full" />

                {/* Floating elements */}
                {[...Array(5)].map((_, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: -20 }}
                        animate={{
                            opacity: [0.3, 0.6, 0.3],
                            y: [0, -20, 0],
                            x: [0, Math.sin(i) * 10, 0]
                        }}
                        transition={{
                            duration: 3 + i,
                            repeat: Infinity,
                            delay: i * 0.3,
                            ease: "easeInOut"
                        }}
                        className="absolute w-1 h-1 bg-white/40 rounded-full blur-sm"
                        style={{
                            left: `${20 + (i * 15)}%`,
                            top: `${15 + (i * 15)}%`,
                        }}
                    />
                ))}
            </div>

            <div className="w-full max-w-md">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    className="relative group"
                >
                    {/* Card Glow Effect */}
                    <div className="absolute -inset-0.5 bg-linear-to-r from-purple-500 to-indigo-500 rounded-3xl blur opacity-0 group-hover:opacity-30 transition duration-500" />

                    {/* Main Card */}
                    <div className="relative glass-card p-8 rounded-3xl backdrop-blur-xl border border-white/10">
                        {/* Logo/Brand */}
                        <div className="text-center mb-8">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-linear-to-r from-purple-500/10 to-indigo-500/10 backdrop-blur-sm border border-white/20 mb-4">
                                <UserPlus className="w-4 h-4 text-purple-300" />
                                <span className="text-sm font-medium">Create Account</span>
                            </div>

                            <h1 className="text-4xl font-bold mb-2">
                                <span className="text-transparent bg-clip-text bg-linear-to-r from-white to-purple-100">
                                    Admin Initialize
                                </span>
                            </h1>
                            <p className="text-white/70">Create your admin initialize account</p>
                        </div>

                        {/* Admin Initialize Form Component */}
                        <AdminInitializeForm />

                        {/* Login Link */}
                        <div className="text-center pt-6">
                            <p className="text-white/60">
                                Already have an admin account ?{" "}
                                <Link href="/auth/login" className="text-purple-300 hover:text-purple-400 font-medium transition-colors">
                                    Sign in
                                </Link>
                            </p>
                        </div>
                    </div>
                </motion.div>

                {/* Back to Home Link */}
                <BackToHome />
            </div>
        </div>
    );
}

