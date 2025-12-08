"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { 
  Lock, 
  Mail, 
  Eye, 
  EyeOff, 
  ArrowRight,
  Shield,
  Smartphone,
  Fingerprint,
  Key,
  CheckCircle,
  AlertCircle
} from "lucide-react";
import Link from "next/link";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [loginMethod, setLoginMethod] = useState("password"); // "password", "otp", "passwordless"

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      alert("Login feature will be implemented with backend integration.");
    }, 1500);
  };

  const handleOtpLogin = () => {
    if (!email) {
      alert("Please enter your email to receive OTP");
      return;
    }
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      alert(`OTP sent to ${email}. Check your email.`);
    }, 1500);
  };

  const loginMethods = [
    { id: "password", label: "Password", icon: Key, color: "from-blue-500 to-blue-600" },
    { id: "otp", label: "OTP Login", icon: Smartphone, color: "from-orange-500 to-orange-600" },
    { id: "passwordless", label: "Passwordless", icon: Fingerprint, color: "from-purple-500 to-purple-600" },
  ];

  return (
    <div className="relative min-h-screen flex items-center justify-center px-4">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-blue-500/10 to-transparent blur-3xl rounded-full" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-tl from-orange-500/10 to-transparent blur-3xl rounded-full" />
        
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
          <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-orange-500 rounded-3xl blur opacity-0 group-hover:opacity-30 transition duration-500" />
          
          {/* Main Card */}
          <div className="relative glass-card p-8 rounded-3xl backdrop-blur-xl border border-white/10">
            {/* Logo/Brand */}
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-orange-500/10 backdrop-blur-sm border border-white/20 mb-4">
                <Shield className="w-4 h-4 text-blue-300" />
                <span className="text-sm font-medium">Secure Login</span>
              </div>
              
              <h1 className="text-4xl font-bold mb-2">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-100">
                  Welcome Back
                </span>
              </h1>
              <p className="text-white/70">Sign in to your CoderLala account</p>
            </div>

            {/* Login Method Selector */}
            <div className="mb-8">
              <h3 className="text-sm font-medium text-white/60 mb-3">Login Method</h3>
              <div className="flex gap-2">
                {loginMethods.map((method) => (
                  <button
                    key={method.id}
                    onClick={() => setLoginMethod(method.id)}
                    className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl transition-all ${loginMethod === method.id 
                      ? `bg-gradient-to-r ${method.color} text-white` 
                      : 'bg-white/5 hover:bg-white/10 border border-white/10'
                    }`}
                  >
                    <method.icon className="w-4 h-4" />
                    <span className="text-sm font-medium">{method.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Login Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Email Field */}
              <div>
                <label className="block text-sm font-medium mb-2">
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
                    className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-blue-500 focus:outline-none transition-colors"
                    placeholder="you@company.com"
                  />
                </div>
              </div>

              {/* Password Field (Only for password method) */}
              {loginMethod === "password" && (
                <div>
                  <label className="block text-sm font-medium mb-2">
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
                      className="w-full pl-10 pr-12 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-blue-500 focus:outline-none transition-colors"
                      placeholder="••••••••"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 p-1"
                    >
                      {showPassword ? (
                        <EyeOff className="w-5 h-5 text-white/40" />
                      ) : (
                        <Eye className="w-5 h-5 text-white/40" />
                      )}
                    </button>
                  </div>
                </div>
              )}

              {/* Remember Me & Forgot Password */}
              {loginMethod === "password" && (
                <div className="flex items-center justify-between">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={rememberMe}
                      onChange={(e) => setRememberMe(e.target.checked)}
                      className="hidden"
                    />
                    <div className={`w-5 h-5 rounded border ${rememberMe ? 'bg-blue-500 border-blue-500' : 'border-white/20'} flex items-center justify-center`}>
                      {rememberMe && <CheckCircle className="w-3 h-3 text-white" />}
                    </div>
                    <span className="text-sm text-white/70">Remember me</span>
                  </label>
                  <Link
                    href="/forgot-password"
                    className="text-sm text-blue-300 hover:text-blue-400 transition-colors"
                  >
                    Forgot password?
                  </Link>
                </div>
              )}

              {/* OTP Button */}
              {loginMethod === "otp" && (
                <button
                  type="button"
                  onClick={handleOtpLogin}
                  disabled={isLoading}
                  className="w-full py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 hover:scale-[1.02] hover:shadow-xl shadow-[0_10px_30px_-15px_rgba(234,88,12,0.3)] flex items-center justify-center gap-3"
                >
                  {isLoading ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending OTP...
                    </>
                  ) : (
                    <>
                      <Smartphone className="w-5 h-5" />
                      Send OTP to Email
                    </>
                  )}
                </button>
              )}

              {/* Login Button */}
              <button
                type="submit"
                disabled={isLoading || (loginMethod === "otp" && !email)}
                className="w-full py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 hover:scale-[1.02] hover:shadow-xl shadow-[0_10px_30px_-15px_rgba(37,99,235,0.3)] flex items-center justify-center gap-3 group"
              >
                {isLoading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Signing in...
                  </>
                ) : (
                  <>
                    <span>Continue</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>
            </form>

            {/* Divider */}
            <div className="relative my-8">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-white/10"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-[#0a0e27] text-white/40">Or continue with</span>
              </div>
            </div>

            {/* Social Login (Placeholder) */}
            <div className="grid grid-cols-2 gap-3">
              <button className="py-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors flex items-center justify-center gap-2">
                <div className="w-5 h-5 bg-gradient-to-r from-blue-400 to-blue-600 rounded" />
                <span className="text-sm font-medium">Google</span>
              </button>
              <button className="py-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors flex items-center justify-center gap-2">
                <div className="w-5 h-5 bg-gradient-to-r from-blue-300 to-blue-500 rounded" />
                <span className="text-sm font-medium">GitHub</span>
              </button>
            </div>

            {/* Sign Up Link */}
            <div className="text-center mt-8 pt-6 border-t border-white/10">
              <p className="text-white/60">
                Don't have an account?{" "}
                <Link href="/signup" className="text-blue-300 hover:text-blue-400 font-medium transition-colors">
                  Sign up here
                </Link>
              </p>
            </div>

            {/* Security Note */}
            <div className="mt-6 p-4 rounded-xl bg-blue-500/10 border border-blue-500/20">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-blue-300 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-white/70">
                  This is a demo login page. Full authentication system will be integrated with backend.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Back to Home Link */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-center mt-6"
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-white/60 hover:text-white/80 transition-colors"
          >
            <ArrowRight className="w-4 h-4 rotate-180" />
            Back to homepage
          </Link>
        </motion.div>
      </div>
    </div>
  );
}