"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

function Login() {
  const router = useRouter();

  const [password, setPassword] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [role, setRole] = useState<string>("");
  const [error, setError] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!name || !email || !password || !role) {
      setError("All fields are required");
      return;
    }

    const userData = { name, email, password, role };

    localStorage.setItem("user", JSON.stringify(userData));
    localStorage.setItem("isLoggedIn", "true");

    setError("");

    if (role === "admin") {
      router.push("/dashboard");
    } else {
      router.push("/form");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-gray-300 via-blue-200 to-purple-200 relative overflow-hidden">
      <div className="absolute w-100 h-100 opacity-20 rounded-full blur-3xl -top-40 -left-40"></div>
      <div className="absolute w-100 h-100 bg-blue-400 opacity-20 rounded-full blur-3xl -bottom-40 -right-40"></div>

      <div className="relative z-10 w-full flex flex-col items-center">
        <div className="absolute top-6 right-6">
          <button
            onClick={() => router.push("/dashboard")}
            className="text-white/70 hover:text-white text-xs px-4 py-1 border border-white/40 rounded-full backdrop-blur-md transition-all duration-300"
          >
            Admin Panel
          </button>
        </div>

        {/* Heading */}
        <div className="py-6 text-center">
          <h1 className="text-5xl font-extrabold tracking-wide bg-linear-to-r from-gray-500 to-blue-500 bg-clip-text text-transparent drop-shadow-md">
            DCM Portal
          </h1>
        </div>

        {/* Card */}
        <div className="bg-white/60 backdrop-blur-xl p-10 rounded-2xl shadow-2xl w-105 relative overflow-hidden border border-white/40">
          {/* Shine Animation */}
          <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/40 to-transparent -translate-x-full animate-[shine_3s_infinite] pointer-events-none"></div>

          <h2 className="text-3xl font-extrabold text-center text-gray-800 mb-8">
            Register
          </h2>

          {error && (
            <div className="mb-6 text-red-600 text-sm text-center font-medium">
              {error}
            </div>
          )}

          <form
            onSubmit={handleSubmit}
            autoComplete="off"
            className="space-y-5"
          >
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Name"
              autoComplete="off"
              className="w-full p-3 bg-gray-200 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            />

            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              autoComplete="off"

              className="w-full p-3 bg-gray-200 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            />

            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              autoComplete="off"

              className="w-full p-3 bg-gray-200 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            />

            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              autoComplete="off"

              className="w-full p-3 bg-gray-200 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            >
              <option value="">--Select Role--</option>
              <option value="user">User</option>
              <option value="admin">Admin</option>
            </select>

            <button
              type="submit"
              className="w-full bg-blue-400 text-white py-3 rounded-md font-semibold hover:scale-[1.02] transition-all duration-300 shadow-lg"
            >
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
