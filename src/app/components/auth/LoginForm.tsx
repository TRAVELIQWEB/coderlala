"use client";

import { useState } from "react";
import {
    Lock,
    Mail,
    Eye,
    EyeOff,
    ArrowRight,
    CheckCircle,
    AlertCircle
} from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "./AuthCommon";
import api from "@/lib/axios";

export default function LoginForm() {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [rememberMe, setRememberMe] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState<string | null>(null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setError(null);

        try {
        
            const response = await api.post('auth/login', {
                email,
                password,
            })
            console.log(response);

           


            if (!response.data.ok) {
                const data = await response.data
                  setSuccess(data.message || 'Login failed');
            }
            if(response.data.role === "admin"){
                router.push("/admin/dashboard");
            }else{
                router.push("/user/dashboard");
            }
           
        } catch (err: any) {

            setError(err?.response?.data?.message || "An unexpected error occurred");
            
            
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="w-full">
            {/* Error Message */}
            {
                success && (
                    <div className="mb-6 p-4 rounded-xl bg-green-500/10 border border-green-500/20 flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-300 shrink-0 mt-0.5" />
                        <p className="text-sm text-green-200">{success}</p>
                    </div>
                )
            }

            {error && (
                <div className="mb-6 p-4 rounded-xl bg-red-500/10 border border-red-500/20 flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-red-300 shrink-0 mt-0.5" />
                    <p className="text-sm text-red-200">{error}</p>
                </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
                {/* Email Field */}
                <div>
                    <label className="block text-sm font-medium mb-2 text-white/80">
                        Email Address
                    </label>
                    <div className="relative">
                        <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                            <Mail className="w-5 h-5 text-white/40" />
                        </div>
                        <input
                            type="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-blue-500 focus:outline-none transition-colors text-white"
                            placeholder="you@company.com"
                        />
                    </div>
                </div>

                {/* Password Field */}
                <div>
                    <label className="block text-sm font-medium mb-2 text-white/80">
                        Password
                    </label>
                    <div className="relative">
                        <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                            <Lock className="w-5 h-5 text-white/40" />
                        </div>
                        <input
                            type={showPassword ? "text" : "password"}
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full pl-10 pr-12 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-blue-500 focus:outline-none transition-colors text-white"
                            placeholder="••••••••"
                        />
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-3 top-1/2 transform -translate-y-1/2 p-1 text-white/60 hover:text-white"
                        >
                            {showPassword ? (
                                <EyeOff className="w-5 h-5" />
                            ) : (
                                <Eye className="w-5 h-5" />
                            )}
                        </button>
                    </div>
                </div>

                {/* Remember Me & Forgot Password */}
                <div className="flex items-center justify-between">
                    <label className="flex items-center gap-2 cursor-pointer select-none">
                        <input
                            type="checkbox"
                            checked={rememberMe}
                            onChange={(e) => setRememberMe(e.target.checked)}
                            className="hidden"
                        />
                        <div className={`w-5 h-5 rounded border ${rememberMe ? 'bg-blue-500 border-blue-500' : 'border-white/20'} flex items-center justify-center transition-colors`}>
                            {rememberMe && <CheckCircle className="w-3.5 h-3.5 text-white!" />}
                        </div>
                        <span className="text-sm text-white/70 hover:text-white/90 transition-colors">Remember me</span>
                    </label>
                    {/* <Link
                        href="/forgot-password"
                        className="text-sm text-blue-300 hover:text-blue-400 transition-colors"
                    >
                        Forgot password?
                    </Link> */}
                </div>

                {/* Login Button */}
                <Button isLoading={isLoading} title={"Sign In"} loadingTitle={"Signing in..."} />
                {/* <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full py-3 rounded-xl font-semibold text-white bg-linear-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 hover:scale-[1.02] hover:shadow-xl shadow-[0_10px_30px_-15px_rgba(37,99,235,0.3)] flex items-center justify-center gap-3 group"
                >
                    {isLoading ? (
                        <>
                            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                            Signing in...
                        </>
                    ) : (
                        <>
                            <span className="text-white!">Sign In</span>
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform text-white!" />
                        </>
                    )}
                </button> */}
            </form>
        </div>
    );
}
