"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Section } from "@/components/ui/Section";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { motion } from "framer-motion";

export default function RoyaltyGovernance() {
    return (
        <main className="min-h-screen bg-background">
            <Navbar />

            {/* Hero Section */}
            <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-white/40 z-10" />
                    <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/60 to-background/90 z-10" />
                    <div className="absolute inset-0 bg-[url('/images/governance/dubai_royalty.jpg')] bg-cover bg-center" />
                </div>
                <div className="container mx-auto px-6 relative z-20 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-charcoal-blue mb-8 drop-shadow-sm"
                    >
                        Royalty and Governance
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        className="text-xl md:text-3xl text-charcoal-blue/80 max-w-4xl mx-auto font-medium drop-shadow-sm leading-relaxed"
                    >
                        Unlock Elite Partnerships in Dubai's Thriving Economy
                    </motion.p>
                </div>
            </section>

            {/* Introduction Section */}
            <Section className="bg-white">
                <ScrollReveal>
                    <div className="max-w-5xl mx-auto text-center">
                        <p className="text-xl md:text-2xl text-gray-700 leading-relaxed font-light">
                            At The Royal Union, we bridge the gap between ambitious foreign enterprises and UAE’s influential circles of royalty and governance. Our exclusive network grants unparalleled access to key decision-makers, facilitating seamless market entry and strategic alliances that propel your business forward.
                        </p>
                    </div>
                </ScrollReveal>
            </Section>

            {/* Why Partner with Us - Header */}
            <section className="py-10 bg-desert-sand">
                <ScrollReveal>
                    <div className="container mx-auto px-6 text-center">
                        <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground">Why Partner with Us?</h2>
                    </div>
                </ScrollReveal>
            </section>

            {/* Feature Section 1: Elite Introductions */}
            <section className="py-20 bg-white overflow-hidden">
                <div className="container mx-auto px-6">
                    <ScrollReveal>
                        <div className="flex flex-col lg:flex-row items-center gap-16">
                            <div className="lg:w-1/2">
                                <div className="relative h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl group">
                                    <img src="/images/governance/Elite_introduction.png" alt="Elite Introductions" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700" />
                                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
                                </div>
                            </div>
                            <div className="lg:w-1/2">
                                <h3 className="text-3xl md:text-4xl font-serif font-bold text-royal-gold mb-6">Elite Introductions</h3>
                                <div className="w-20 h-1 bg-royal-gold mb-8" />
                                <p className="text-gray-600 text-lg md:text-xl leading-relaxed mb-6">
                                    Direct connections to royalty and high-level government officials, enabling endorsements, joint ventures, and expedited approvals.
                                </p>
                                <a href="/royal-partnerships" className="text-royal-gold font-bold hover:underline">Learn more about Royal Partnerships &rarr;</a>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* Feature Section 2: Governance Expertise */}
            <section className="py-20 bg-desert-sand overflow-hidden">
                <div className="container mx-auto px-6">
                    <ScrollReveal>
                        <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
                            <div className="lg:w-1/2">
                                <div className="relative h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl group">
                                    <img src="/images/governance/givernance_expertise.png" alt="Governance Expertise" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700" />
                                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
                                </div>
                            </div>
                            <div className="lg:w-1/2">
                                <h3 className="text-3xl md:text-4xl font-serif font-bold text-royal-gold mb-6">Governance Expertise</h3>
                                <div className="w-20 h-1 bg-royal-gold mb-8" />
                                <p className="text-gray-600 text-lg md:text-xl leading-relaxed mb-6">
                                    Navigate UAE's regulatory landscape with insights from insiders, ensuring compliance while unlocking opportunities in sectors like finance, real estate, and technology.
                                </p>
                                <a href="/corporate-governance" className="text-royal-gold font-bold hover:underline">Explore Corporate Governance &rarr;</a>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* Feature Section 3: Strategic Alliances */}
            <section className="py-24 bg-charcoal-blue relative text-white">
                <div className="absolute inset-0 bg-[url('/images/governance/dubai_royalty-4.jpg')] bg-cover bg-center opacity-20" />
                <div className="absolute inset-0 bg-gradient-to-r from-charcoal-blue/90 to-charcoal-blue/40" />
                <div className="container mx-auto px-6 relative z-10">
                    <ScrollReveal>
                        <div className="max-w-4xl mx-auto text-center">
                            <h3 className="text-3xl md:text-5xl font-serif font-bold text-royal-gold mb-8">Strategic Alliances for Global Players</h3>
                            <p className="text-gray-200 text-lg md:text-xl leading-relaxed mb-0">
                                Collaborate with us to co-create bespoke solutions for international clients. Leading corporations, institutional investors, and financial institutions can leverage our strategic alliances and high-level regional networks to offer premium services, such as tailored financing, investment advisory, cross-border wealth structuring, or large-scale project collaborations—expanding your footprint in one of the world’s fastest-growing markets.
                            </p>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* Outro / CTA Section */}
            <section className="py-24 bg-white">
                <ScrollReveal>
                    <div className="container mx-auto px-6 text-center">
                        <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground mb-8">Transform Opportunities into Legacies</h2>
                        <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
                            Join forces with The Royal Union to transform opportunities into legacies. Contact us today to explore partnership possibilities.
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
