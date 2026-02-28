"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const BackToHome = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-center mt-6"
        >
            <Link
                href="/"
                className="inline-flex items-center gap-2 text-sm transition-colors"
            >
                <ArrowRight className="w-4 h-4 rotate-180" />
                Back to homepage
            </Link>
        </motion.div>
    )
}

export default BackToHome

export const Button = ({ isLoading, title, loadingTitle }: { isLoading: boolean; title: string; loadingTitle: string }) => {
    return (
        <button
            type="submit"
            disabled={isLoading}
            className="w-full py-3 rounded-xl font-semibold text-white bg-linear-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 hover:scale-[1.02] hover:shadow-xl shadow-[0_10px_30px_-15px_rgba(37,99,235,0.3)] flex items-center justify-center gap-3 group"
        >
            {isLoading ? (
                <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    {loadingTitle}
                </>
            ) : (
                <>
                    <span className="text-white!">{title}</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform text-white!" />
                </>
            )}
        </button>
    )
}