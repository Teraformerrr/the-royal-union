"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface SplashScreenProps {
    onComplete: () => void;
}

export default function SplashScreen({ onComplete }: SplashScreenProps) {
    const [exit, setExit] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setExit(true);
            setTimeout(onComplete, 1000); // Wait for exit animation to finish
        }, 2500); // Duration of the splash screen

        return () => clearTimeout(timer);
    }, [onComplete]);

    return (
        <motion.div
            initial={{ opacity: 1 }}
            animate={exit ? { opacity: 0, y: -50 } : { opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-charcoal-blue text-white overflow-hidden"
        >
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />

            <div className="relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="mb-6"
                >
                    <h1 className="text-5xl md:text-7xl font-serif font-bold tracking-widest text-royal-gold drop-shadow-lg">
                        THE ROYAL UNION
                    </h1>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="flex items-center justify-center gap-4"
                >
                    <div className="h-[1px] w-12 bg-white/30" />
                    <p className="text-lg md:text-xl font-light tracking-[0.3em] text-gray-300 uppercase">
                        Excellence Beyond Borders
                    </p>
                    <div className="h-[1px] w-12 bg-white/30" />
                </motion.div>
            </div>
        </motion.div>
    );
}
