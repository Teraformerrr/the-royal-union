"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface CardProps {
    children?: ReactNode;
    title?: string;
    description?: string;
    icon?: ReactNode;
    className?: string;
    hoverEffect?: boolean;
}

export function Card({ children, title, description, icon, className, hoverEffect = true }: CardProps) {
    // If title/desc/icon are provided, use the structured layout
    if (title || description || icon) {
        return (
            <motion.div
                whileHover={{ y: -10, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
                transition={{ duration: 0.3 }}
                className={cn("bg-white p-8 rounded-xl shadow-sm border border-gray-100", className)}
            >
                {icon && <div className="mb-6 text-royal-gold">{icon}</div>}
                {title && <h3 className="text-xl font-serif font-bold text-foreground mb-4">{title}</h3>}
                {description && <p className="text-gray-600 leading-relaxed">{description}</p>}
                {children}
            </motion.div>
        );
    }

    // Otherwise treat as a wrapper
    return (
        <motion.div
            whileHover={hoverEffect ? { y: -5, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)" } : {}}
            transition={{ duration: 0.3 }}
            className={cn(
                "bg-white border border-gray-100 p-8 rounded-xl transition-all duration-500",
                className
            )}
        >
            {children}
        </motion.div>
    );
}
