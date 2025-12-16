"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/Button";

const navLinks = [
    { name: "Home", href: "/" },
    { name: "Royalty & Governance", href: "/royalty-governance" },
    { name: "Wealth Management", href: "/wealth-management" },
    { name: "Legal & Corporate", href: "/legal-corporate" },
    { name: "About Us", href: "/about-us" },
    { name: "Contact Us", href: "/contact-us" },
];

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? "bg-background/80 backdrop-blur-md border-b border-white/10 py-4" : "bg-transparent py-6"
                }`}
        >
            <div className="container mx-auto px-6 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="relative z-50 group">
                    <h1 className="text-2xl font-serif font-bold tracking-widest text-foreground group-hover:text-royal-gold transition-colors duration-300">
                        THE ROYAL UNION
                    </h1>
                    <div className="h-0.5 w-0 bg-royal-gold group-hover:w-full transition-all duration-500" />
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden lg:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={`text-sm font-medium tracking-wide transition-colors duration-300 relative group ${pathname === link.href ? "text-royal-gold" : "text-foreground/80 hover:text-royal-gold"
                                }`}
                        >
                            {link.name}
                            <span className={`absolute -bottom-1 left-0 h-0.5 bg-royal-gold transition-all duration-300 ${pathname === link.href ? "w-full" : "w-0 group-hover:w-full"
                                }`} />
                        </Link>
                    ))}

                </nav>

                {/* Mobile Menu Button */}
                <button
                    className="lg:hidden relative z-50 text-foreground hover:text-royal-gold transition-colors"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>

                {/* Mobile Menu Overlay */}
                <AnimatePresence>
                    {isMobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            className="fixed inset-0 bg-background/95 backdrop-blur-xl z-40 flex flex-col items-center justify-center gap-8 lg:hidden"
                        >
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className={`text-2xl font-serif font-medium transition-colors duration-300 ${pathname === link.href ? "text-royal-gold" : "text-foreground hover:text-royal-gold"
                                        }`}
                                >
                                    {link.name}
                                </Link>
                            ))}

                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </header>
    );
}
