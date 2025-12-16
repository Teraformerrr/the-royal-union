"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { motion } from "framer-motion";

export default function ContactUs() {
    return (
        <main className="min-h-screen bg-background relative flex flex-col">
            <Navbar />

            {/* Main visually unified section */}
            <div className="flex-grow relative w-full flex items-center justify-center pt-32 pb-12">
                {/* Background Layer */}
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-white/40 z-10" />
                    <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/60 to-background/90 z-10" />
                    <div className="absolute inset-0 bg-[url('/images/contact_us/contact_us.jpg')] bg-cover bg-center" />
                </div>

                <div className="container mx-auto px-6 relative z-20">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Text Content */}
                        <div className="text-center lg:text-left">
                            <motion.h1
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8 }}
                                className="text-5xl md:text-7xl font-serif font-bold text-charcoal-blue mb-6 drop-shadow-sm"
                            >
                                Contact Us
                            </motion.h1>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                className="text-lg text-gray-700 max-w-xl mx-auto lg:mx-0 font-medium leading-relaxed"
                            >
                                We are here to assist you. Please fill out the form and our team will get back to you promptly.
                            </motion.p>
                        </div>

                        {/* Form Section */}
                        <ScrollReveal>
                            <div className="bg-white/95 backdrop-blur-sm p-8 shadow-xl border border-white/20 rounded-2xl">
                                <form className="space-y-5">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                        <div className="space-y-2">
                                            <label className="text-sm font-semibold text-gray-700 ml-1">First Name</label>
                                            <input type="text" className="w-full p-3 border border-gray-200 rounded-lg focus:border-royal-gold focus:ring-2 focus:ring-royal-gold/20 focus:outline-none transition-all bg-gray-50/50" placeholder="John" />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-semibold text-gray-700 ml-1">Last Name</label>
                                            <input type="text" className="w-full p-3 border border-gray-200 rounded-lg focus:border-royal-gold focus:ring-2 focus:ring-royal-gold/20 focus:outline-none transition-all bg-gray-50/50" placeholder="Doe" />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-semibold text-gray-700 ml-1">Email</label>
                                        <input type="email" className="w-full p-3 border border-gray-200 rounded-lg focus:border-royal-gold focus:ring-2 focus:ring-royal-gold/20 focus:outline-none transition-all bg-gray-50/50" placeholder="john@example.com" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-semibold text-gray-700 ml-1">Message</label>
                                        <textarea rows={4} className="w-full p-3 border border-gray-200 rounded-lg focus:border-royal-gold focus:ring-2 focus:ring-royal-gold/20 focus:outline-none transition-all bg-gray-50/50 resize-none" placeholder="Your message..." />
                                    </div>
                                    <Button className="w-full py-4 text-lg font-bold bg-royal-gold hover:bg-royal-gold-dark text-white shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5 rounded-lg border-none tracking-wide">
                                        Send Message
                                    </Button>
                                </form>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    );
}
