"use client";

import { motion } from "framer-motion";
import { Shield, ArrowRight } from "lucide-react";
import Link from "next/link";
import LoginForm from "@/app/components/auth/LoginForm";
import BackToHome from "@/app/components/auth/AuthCommon";

export default function LoginPage() {
  return (
    <div className="relative min-h-screen flex items-center justify-center px-4">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-linear-to-br from-blue-500/10 to-transparent blur-3xl rounded-full" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-linear-to-tl from-orange-500/10 to-transparent blur-3xl rounded-full" />

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
              left: `${15 + (i * 15)}%`,
              top: `${20 + (i * 10)}%`,
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
          <div className="absolute -inset-0.5 bg-linear-to-r from-blue-500 to-orange-500 rounded-3xl blur opacity-0 group-hover:opacity-30 transition duration-500" />

          {/* Main Card */}
          <div className="relative glass-card p-8 rounded-3xl backdrop-blur-xl border border-white/10">
            {/* Logo/Brand */}
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-linear-to-r from-blue-500/10 to-orange-500/10 backdrop-blur-sm border border-white/20 mb-4">
                <Shield className="w-4 h-4 text-blue-300" />
                <span className="text-sm font-medium">Secure Login</span>
              </div>

              <h1 className="text-4xl font-bold mb-2">
                <span className="text-transparent bg-clip-text bg-linear-to-r from-white to-blue-100">
                  Welcome Back
                </span>
              </h1>
              <p className="text-white/70">Sign in to your CoderLala account</p>
            </div>

            {/* Login Form Component */}
            <LoginForm />

            {/* Sign Up Link */}
            {/* <div className="text-center mt-8 pt-6 border-t border-white/10">
              <p className="text-white/60">
                Don't have an account?{" "}
                <Link href="/auth/register" className="text-blue-300 hover:text-blue-400 font-medium transition-colors">
                  Sign up
                </Link>
              </p>
            </div> */}

          </div>
        </motion.div>

        {/* Back to Home Link */}
        <BackToHome />
      </div>
    </div>
  );
}

