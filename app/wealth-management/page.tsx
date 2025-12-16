"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Section } from "@/components/ui/Section";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { motion } from "framer-motion";

export default function WealthManagement() {
    return (
        <main className="min-h-screen bg-background">
            <Navbar />

            {/* Hero */}
            <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-white/40 z-10" />
                    <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/60 to-background/90 z-10" />
                    <div className="absolute inset-0 bg-[url('/images/wealth-management/wealth_management_1.jpg')] bg-cover bg-center" />
                </div>
                <div className="container mx-auto px-6 relative z-20 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-charcoal-blue mb-8 drop-shadow-sm"
                    >
                        Wealth Management
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        className="text-xl md:text-3xl text-charcoal-blue/80 max-w-4xl mx-auto font-medium drop-shadow-sm leading-relaxed"
                    >
                        Elevate Your Clients' Wealth in UAE's Global Hub
                    </motion.p>
                </div>
            </section>

            {/* Intro */}
            <Section className="bg-white">
                <ScrollReveal>
                    <div className="max-w-5xl mx-auto text-center">
                        <p className="text-xl md:text-2xl text-gray-700 leading-relaxed font-light">
                            The Royal Union specializes in sophisticated wealth management tailored for foreign businesses establishing a presence in UAE. We combine local expertise with global strategies to safeguard and grow assets in a tax-efficient, high-growth environment.
                        </p>
                    </div>
                </ScrollReveal>
            </Section>

            {/* Services Header */}
            <section className="py-10 bg-desert-sand">
                <ScrollReveal>
                    <div className="container mx-auto px-6 text-center">
                        <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground">Our Comprehensive Services Include</h2>
                    </div>
                </ScrollReveal>
            </section>

            {/* Services List - Expanded with Images */}
            <section className="py-20 bg-desert-sand">
                <div className="container mx-auto px-6">
                    <div className="space-y-20">
                        {/* Service 1: Asset Optimization */}
                        <ScrollReveal>
                            <div className="flex flex-col lg:flex-row items-center gap-12">
                                <div className="lg:w-1/2">
                                    <div className="relative h-[400px] w-full rounded-xl overflow-hidden shadow-xl group">
                                        <img src="/images/wealth-management/asset.jpg" alt="Asset Optimization" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700" />
                                        <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
                                    </div>
                                </div>
                                <div className="lg:w-1/2">
                                    <h3 className="text-3xl font-serif font-bold text-foreground mb-6">Asset Optimization</h3>
                                    <div className="w-20 h-1 bg-royal-gold mb-8" />
                                    <p className="text-gray-600 text-xl leading-relaxed mb-6">
                                        Customized portfolios blending UAE real estate, equities, and alternative investments for maximum returns.
                                    </p>
                                    <a href="/asset-management" className="text-royal-gold font-bold hover:underline">Discover Asset Management &rarr;</a>
                                </div>
                            </div>
                        </ScrollReveal>

                        {/* Service 2: Risk Mitigation */}
                        <ScrollReveal>
                            <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
                                <div className="lg:w-1/2">
                                    <div className="relative h-[400px] w-full rounded-xl overflow-hidden shadow-xl group">
                                        <img src="/images/wealth-management/risk.jpg" alt="Risk Mitigation" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700" />
                                        <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
                                    </div>
                                </div>
                                <div className="lg:w-1/2">
                                    <h3 className="text-3xl font-serif font-bold text-foreground mb-6">Risk Mitigation</h3>
                                    <div className="w-20 h-1 bg-royal-gold mb-8" />
                                    <p className="text-gray-600 text-xl leading-relaxed mb-6">
                                        Advanced strategies to protect wealth amid market volatility, including diversification across GCC opportunities.
                                    </p>
                                    <a href="/strategic-investment" className="text-royal-gold font-bold hover:underline">Explore Strategic Investment &rarr;</a>
                                </div>
                            </div>
                        </ScrollReveal>

                        {/* Service 3: Legacy Planning */}
                        <ScrollReveal>
                            <div className="flex flex-col lg:flex-row items-center gap-12">
                                <div className="lg:w-1/2">
                                    <div className="relative h-[400px] w-full rounded-xl overflow-hidden shadow-xl group">
                                        <img src="/images/wealth-management/legacy_planning.png" alt="Legacy Planning" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700" />
                                        <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
                                    </div>
                                </div>
                                <div className="lg:w-1/2">
                                    <h3 className="text-3xl font-serif font-bold text-foreground mb-6">Legacy Planning</h3>
                                    <div className="w-20 h-1 bg-royal-gold mb-8" />
                                    <p className="text-gray-600 text-xl leading-relaxed">
                                        Holistic solutions for succession, trusts, and philanthropy, aligned with Dubai's investor-friendly policies.
                                    </p>
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            {/* Opportunities for Partners */}
            <section className="py-24 bg-charcoal-blue text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/images/wealth-management/wealth_management_1.jpg')] bg-cover bg-center opacity-10 mix-blend-overlay" />
                <div className="container mx-auto px-6 relative z-10">
                    <ScrollReveal>
                        <div className="max-w-5xl mx-auto text-center">
                            <h2 className="text-4xl md:text-5xl font-serif font-bold text-royal-gold mb-10">Opportunities for Partners</h2>
                            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-12 font-light">
                                Partner with us to integrate your expertise into our ecosystem. Leading corporations, institutional investors, and financial institutions can co-manage high-net-worth portfolios, provide exclusive investment products, or collaborate on innovative ventures. Together, we can attract ultra-high-value clients seeking seamless entry into UAE's economy, enhancing your portfolio with premium, referral-based business.
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
                            Secure your clients' future with The Royal Union—where wealth meets opportunity. Let's discuss synergistic partnerships.
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
