"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { motion } from "framer-motion";

export default function ContactUs() {
    return (
        <main className="min-h-screen bg-background">
            <Navbar />

            <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-white/40 z-10" />
                    <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/60 to-background/90 z-10" />
                    <div className="absolute inset-0 bg-[url('/images/contact_us/contact_us.jpg')] bg-cover bg-center" />
                </div>
                <div className="container mx-auto px-6 relative z-20 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-5xl md:text-7xl font-serif font-bold text-charcoal-blue mb-6 drop-shadow-sm"
                    >
                        Contact Us
                    </motion.h1>
                </div>
            </section>

            <Section>
                <ScrollReveal>
                    <div className="max-w-3xl mx-auto bg-white p-12 shadow-lg border border-gray-100 rounded-xl">
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-700">First Name</label>
                                    <input type="text" className="w-full p-3 border border-gray-300 rounded-md focus:border-royal-gold focus:outline-none transition-colors bg-gray-50" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-700">Last Name</label>
                                    <input type="text" className="w-full p-3 border border-gray-300 rounded-md focus:border-royal-gold focus:outline-none transition-colors bg-gray-50" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-700">Email</label>
                                <input type="email" className="w-full p-3 border border-gray-300 rounded-md focus:border-royal-gold focus:outline-none transition-colors bg-gray-50" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-700">Message</label>
                                <textarea rows={5} className="w-full p-3 border border-gray-300 rounded-md focus:border-royal-gold focus:outline-none transition-colors bg-gray-50" />
                            </div>
                            <Button className="w-full py-4 text-lg font-bold bg-royal-gold hover:bg-royal-gold-dark text-white shadow-md hover:shadow-lg transition-all transform hover:-translate-y-1">Send Message</Button>
                        </form>
                    </div>
                </ScrollReveal>
            </Section>

            <Footer />
        </main>
    );
}
