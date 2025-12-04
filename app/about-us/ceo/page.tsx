"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Section } from "@/components/ui/Section";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { motion } from "framer-motion";

export default function CEOProfile() {
    return (
        <main className="min-h-screen bg-background">
            <Navbar />

            {/* Hero Section */}
            <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-white/40 z-10" />
                    <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/60 to-background/90 z-10" />
                    <div className="absolute inset-0 bg-[url('/images/sheikh-handshake.jpg')] bg-cover bg-center" />
                </div>
                <div className="container mx-auto px-6 relative z-20 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-charcoal-blue mb-8 drop-shadow-sm"
                    >
                        His Excellency
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        className="text-xl md:text-3xl text-charcoal-blue/80 max-w-4xl mx-auto font-medium drop-shadow-sm leading-relaxed"
                    >
                        Visionary Leader & Chairman of The Royal Union
                    </motion.p>
                </div>
            </section>

            {/* Biography Section */}
            <Section className="bg-white">
                <ScrollReveal>
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-8 text-center">Biography</h2>
                        <div className="w-24 h-1 bg-royal-gold mx-auto mb-12" />
                        <div className="space-y-6 text-lg text-gray-600 leading-relaxed text-justify">
                            <p>
                                With over three decades of experience at the intersection of global finance, governance, and strategic development, His Excellency has been a pivotal figure in shaping Dubai's economic landscape. His visionary leadership has fostered countless international partnerships, bridging the gap between Eastern traditions and Western innovation.
                            </p>
                            <p>
                                As the Chairman of The Royal Union, he is dedicated to empowering foreign enterprises to thrive within the UAE. His deep-rooted connections with the Royal Family and government entities allow him to navigate complex regulatory frameworks with ease, ensuring that partners receive unparalleled support and access.
                            </p>
                            <p>
                                Beyond his corporate endeavors, His Excellency is a philanthropist committed to educational and cultural initiatives, believing that true prosperity is built on a foundation of shared knowledge and mutual respect.
                            </p>
                        </div>
                    </div>
                </ScrollReveal>
            </Section>

            {/* Vision Section */}
            <section className="py-24 bg-desert-sand">
                <div className="container mx-auto px-6">
                    <ScrollReveal>
                        <div className="flex flex-col lg:flex-row items-center gap-16">
                            <div className="lg:w-1/2">
                                <div className="relative h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl group">
                                    <img src="/images/sheikh-team-walking.jpg" alt="Strategic Vision" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700" />
                                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
                                </div>
                            </div>
                            <div className="lg:w-1/2">
                                <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-8">A Vision for the Future</h2>
                                <div className="w-24 h-1 bg-royal-gold mb-8" />
                                <blockquote className="text-2xl font-light italic text-gray-700 mb-8 border-l-4 border-royal-gold pl-6">
                                    "Our goal is not merely to do business, but to build bridges that connect cultures, economies, and aspirations. The Royal Union stands as a testament to what is possible when trust and excellence converge."
                                </blockquote>
                                <p className="text-xl text-gray-600 leading-relaxed">
                                    Under his guidance, The Royal Union continues to expand its global footprint, inviting world-class leaders to join in writing the next chapter of Dubai's success story.
                                </p>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            <Footer />
        </main>
    );
}
