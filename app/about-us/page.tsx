"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Section } from "@/components/ui/Section";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { motion } from "framer-motion";

export default function AboutUs() {
    return (
        <main className="min-h-screen bg-background">
            <Navbar />

            {/* Hero */}
            <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-white/40 z-10" />
                    <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/60 to-background/90 z-10" />
                    <div className="absolute inset-0 bg-[url('/images/about_us/about-us.jpg')] bg-cover bg-center" />
                </div>
                <div className="container mx-auto px-6 relative z-20 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-charcoal-blue mb-8 drop-shadow-sm"
                    >
                        About Us
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        className="text-xl md:text-3xl text-charcoal-blue/80 max-w-4xl mx-auto font-medium drop-shadow-sm leading-relaxed"
                    >
                        The Royal Union: Your Gateway to UAE's Elite Opportunities
                    </motion.p>
                </div>
            </section>

            {/* Intro */}
            <Section className="bg-white">
                <ScrollReveal>
                    <div className="max-w-5xl mx-auto text-center">
                        <p className="text-xl md:text-2xl text-gray-700 leading-relaxed font-light">
                            Founded on the principles of excellence and connectivity, The Royal Union is a premier consultancy dedicated to empowering foreign businesses in Dubai. We specialize in market entry, royal partnerships, wealth management, and legal structuring—delivering results that blend innovation with tradition.
                        </p>
                    </div>
                </ScrollReveal>
            </Section>

            {/* Mission */}
            <section className="py-24 bg-desert-sand">
                <div className="container mx-auto px-6">
                    <ScrollReveal>
                        <div className="flex flex-col lg:flex-row items-center gap-16">
                            <div className="lg:w-1/2">
                                <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-8">Our Mission</h2>
                                <div className="w-24 h-1 bg-royal-gold mb-8" />
                                <p className="text-xl text-gray-600 leading-relaxed">
                                    To create enduring value by linking global enterprises with UAE's royalty, government, and financial networks, fostering sustainable growth in one of the world's most vibrant economies.
                                </p>
                            </div>
                            <div className="lg:w-1/2">
                                <div className="relative h-[400px] w-full rounded-2xl overflow-hidden shadow-xl border border-royal-gold/20 group">
                                    <img src="/images/about_us/our mission.jpg" alt="Our Mission" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700" />
                                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* Leadership / CEO Section */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6">
                    <ScrollReveal>
                        <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-16 text-center">Meet the CEO</h2>
                        <div className="max-w-md mx-auto">
                            <a href="/about-us/ceo" className="block group">
                                <div className="relative h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl transition-all duration-500 transform group-hover:-translate-y-2 group-hover:shadow-3xl">
                                    <img src="/images/sheikh-handshake.jpg" alt="CEO & Chairman" className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-70 transition-opacity duration-500" />

                                    <div className="absolute bottom-0 left-0 right-0 p-8 text-center transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                                        {/* <h3 className="text-3xl font-serif font-bold text-royal-gold mb-2">His Excellency</h3> */}
                                        {/* <p className="text-white/90 text-lg uppercase tracking-widest font-light mb-6">Chairman</p> */}
                                        <div className="inline-block border border-white/30 rounded-full px-6 py-2 text-sm text-white/80 group-hover:bg-white group-hover:text-charcoal-blue transition-all duration-300">
                                            View Profile
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* Partnering */}
            <section className="py-24 bg-charcoal-blue text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/images/sheikh-team-walking.jpg')] bg-cover bg-center opacity-10" />
                <div className="container mx-auto px-6 relative z-10">
                    <ScrollReveal>
                        <div className="max-w-5xl mx-auto text-center">
                            <h2 className="text-4xl md:text-5xl font-serif font-bold text-royal-gold mb-10">Partnering with Global Leaders</h2>
                            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-0 font-light">
                                We're eager to align with leading corporations, institutional investors, and financial institutions to enhance our offerings. Imagine co-branded investment solutions, shared client referrals, or joint ventures in Dubai's booming sectors. Together, we can amplify reach and revenue.
                            </p>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* Outro */}
            <section className="py-24 bg-white">
                <ScrollReveal>
                    <div className="container mx-auto px-6 text-center">
                        <p className="text-2xl md:text-3xl font-serif text-foreground mb-12 max-w-4xl mx-auto">
                            Discover how The Royal Union can elevate your ambitions. Contact our team for a confidential consultation.
                        </p>
                        <a href="/contact-us" className="inline-block bg-royal-gold text-white px-12 py-5 text-lg tracking-widest uppercase font-bold hover:bg-royal-gold-dark transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-1">
                            Contact Us
                        </a>
                    </div>
                </ScrollReveal>
            </section>

            <Footer />
        </main>
    );
}
