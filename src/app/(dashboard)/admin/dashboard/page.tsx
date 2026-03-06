"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
// import { AdminMenuItems } from "@/data/DashboardMenu";

import { FaBlog, FaUsers, FaChartBar } from "react-icons/fa";

export const AdminMenuItems = [
    {
        label: "Dashboard",
        href: "/admin/dashboard",
        icon: <FaChartBar />,
    },
    {
        label: "Blog",
        href: "/admin/blog",
        icon: <FaBlog />,
        description: "Create, edit and manage blog posts."
    },
    // {
    //     label: "Users",
    //     href: "/admin/users",
    //     icon: <FaUsers />,
    //     description: "Manage platform users."
    // },
];
export default function DashboardPage() {
    const [userRole] = useState<"Admin" | "Agent">("Admin");

    const cardItems = AdminMenuItems.filter(
        (item) => item.href !== "/admin/dashboard"
    );

    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-3xl font-bold">Welcome {userRole}</h1>
                <p className="">
                    Manage your platform, view analytics, and oversee operations
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

                {cardItems.map((item, index) => (
                    <motion.div
                        key={item.href}
                        initial={{ opacity: 0, scale: 0.96 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.35, delay: index * 0.08 }}
                        whileHover={{ y: -6 }}
                        className="group relative"
                    >

                        {/* subtle glow */}
                        <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500 bg-[radial-gradient(circle_at_top,oklch(from_var(--primary)_l_c_h_/0.25),transparent_70%)] blur-xl" />

                        <Link
                            href={item.href}
                            className="
relative flex flex-col justify-between h-full
p-6 rounded-2xl
bg-card text-card-foreground
border border-border
shadow-sm
transition-all duration-300
hover:shadow-lg
hover:border-primary/40
"
                        >

                            {/* TOP */}
                            <div className="space-y-4">

                                {/* icon */}
                                <div className="
flex items-center justify-center
w-12 h-12 rounded-xl
bg-muted
text-primary
group-hover:scale-110
group-hover:bg-primary
group-hover:text-primary-foreground
transition-all duration-300
">

                                    {item.icon}

                                </div>

                                {/* title */}
                                <h3 className="
text-lg font-semibold
group-hover:text-primary
transition-colors
">
                                    {item.label}
                                </h3>

                                {/* description */}
                                <p className="
text-sm
text-muted-foreground
leading-relaxed
">
                                    {item.description || "Manage and control this section"}
                                </p>

                            </div>

                            {/* BOTTOM */}
                            <div className="
mt-6 flex items-center justify-between
text-sm font-medium
text-muted-foreground
group-hover:text-primary
transition
">

                                <span>Open</span>

                                <svg
                                    className="w-5 h-5 group-hover:translate-x-1 transition"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                                    />
                                </svg>

                            </div>

                        </Link>

                    </motion.div>
                ))}

            </div>
        </div>
    );
}