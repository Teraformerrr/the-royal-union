"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Section } from "@/components/ui/Section";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { motion } from "framer-motion";

export default function LegalCorporate() {
    return (
        <main className="min-h-screen bg-background">
            <Navbar />

            {/* Hero */}
            <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-white/40 z-10" />
                    <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/60 to-background/90 z-10" />
                    <div className="absolute inset-0 bg-[url('/images/legal-corporate/legal-corporate.jpg')] bg-cover bg-center" />
                </div>
                <div className="container mx-auto px-6 relative z-20 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-charcoal-blue mb-8 drop-shadow-sm"
                    >
                        Legal and Corporate
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        className="text-xl md:text-3xl text-charcoal-blue/80 max-w-4xl mx-auto font-medium drop-shadow-sm leading-relaxed"
                    >
                        Streamline Your Dubai Expansion with Expert Guidance
                    </motion.p>
                </div>
            </section>

            {/* Intro */}
            <Section className="bg-white">
                <ScrollReveal>
                    <div className="max-w-5xl mx-auto text-center">
                        <p className="text-xl md:text-2xl text-gray-700 leading-relaxed font-light">
                            Entering the UAE market demands precision and foresight. The Royal Union delivers end-to-end legal and corporate services, ensuring foreign businesses comply with UAE's dynamic regulations while optimizing for growth.
                        </p>
                    </div>
                </ScrollReveal>
            </Section>

            {/* Key Offerings Header */}
            <section className="py-10 bg-desert-sand">
                <ScrollReveal>
                    <div className="container mx-auto px-6 text-center">
                        <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground">Key Offerings</h2>
                    </div>
                </ScrollReveal>
            </section>

            {/* Key Offerings List with Images */}
            <section className="py-20 bg-desert-sand">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                        {/* Offering 1: Company Formation */}
                        <ScrollReveal delay={0.1}>
                            <div className="bg-white rounded-xl shadow-lg overflow-hidden border-t-8 border-royal-gold hover:-translate-y-2 transition-transform duration-300 flex flex-col group h-full">
                                <div className="h-64 overflow-hidden relative">
                                    <img src="/images/legal-corporate/company formation.jpg" alt="Company Formation" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
                                </div>
                                <div className="p-10 flex-1 flex flex-col">
                                    <h3 className="text-2xl font-serif font-bold text-foreground mb-6">Company Formation</h3>
                                    <p className="text-gray-600 text-lg leading-relaxed mb-6">
                                        Efficient setup of free zone entities, mainland companies, or offshore structures, with full licensing support.
                                    </p>
                                </div>
                            </div>
                        </ScrollReveal>

                        {/* Offering 2: Compliance and Advisory */}
                        <ScrollReveal delay={0.2}>
                            <div className="bg-white rounded-xl shadow-lg overflow-hidden border-t-8 border-royal-gold hover:-translate-y-2 transition-transform duration-300 flex flex-col group h-full">
                                <div className="h-64 overflow-hidden relative">
                                    <img src="/images/legal-corporate/al_barsha.jpeg" alt="Compliance and Advisory" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
                                </div>
                                <div className="p-10 flex-1 flex flex-col">
                                    <h3 className="text-2xl font-serif font-bold text-foreground mb-6">Compliance and Advisory</h3>
                                    <p className="text-gray-600 text-lg leading-relaxed mb-6">
                                        In-depth counsel on UAE laws, including anti-money-laundering, data protection, and corporate governance.
                                    </p>
                                    <a href="/legal-consultancy" className="text-royal-gold font-bold hover:underline mt-auto">View Legal Consultancy &rarr;</a>
                                </div>
                            </div>
                        </ScrollReveal>

                        {/* Offering 3: Contract and Dispute Resolution */}
                        <ScrollReveal delay={0.3}>
                            <div className="bg-white rounded-xl shadow-lg overflow-hidden border-t-8 border-royal-gold hover:-translate-y-2 transition-transform duration-300 flex flex-col group h-full">
                                <div className="h-64 overflow-hidden relative">
                                    <img src="/images/legal-corporate/contract and dispute.jpg" alt="Contract and Dispute Resolution" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
                                </div>
                                <div className="p-10 flex-1 flex flex-col">
                                    <h3 className="text-2xl font-serif font-bold text-foreground mb-6">Contract and Dispute Resolution</h3>
                                    <p className="text-gray-600 text-lg leading-relaxed mb-6">
                                        Drafting robust agreements and mediating with local authorities for swift resolutions.
                                    </p>
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            {/* Corporate Social Responsibility */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6">
                    <ScrollReveal>
                        <div className="flex flex-col lg:flex-row items-center gap-16">
                            <div className="lg:w-1/2">
                                <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-8">Corporate Social Responsibility</h2>
                                <div className="w-24 h-1 bg-royal-gold mb-8" />
                                <p className="text-xl text-gray-600 leading-relaxed mb-6">
                                    At The Royal Union, we believe that sustainable business success is intrinsically linked to positive social impact. Our CSR initiatives are designed to create lasting value for communities across the UAE and beyond.
                                </p>
                                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                                    From supporting local entrepreneurship and education programs to championing environmental sustainability, we guide our partners in building businesses that contribute meaningfully to society while achieving their commercial objectives.
                                </p>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 bg-royal-gold/10 rounded-full flex items-center justify-center flex-shrink-0">
                                            <svg className="w-6 h-6 text-royal-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-foreground mb-1">Education</h4>
                                            <p className="text-gray-600 text-sm">Supporting youth development and skill-building programs</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 bg-royal-gold/10 rounded-full flex items-center justify-center flex-shrink-0">
                                            <svg className="w-6 h-6 text-royal-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-foreground mb-1">Sustainability</h4>
                                            <p className="text-gray-600 text-sm">Promoting eco-friendly business practices</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 bg-royal-gold/10 rounded-full flex items-center justify-center flex-shrink-0">
                                            <svg className="w-6 h-6 text-royal-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-foreground mb-1">Community</h4>
                                            <p className="text-gray-600 text-sm">Investing in local communities and charitable causes</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 bg-royal-gold/10 rounded-full flex items-center justify-center flex-shrink-0">
                                            <svg className="w-6 h-6 text-royal-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-foreground mb-1">Ethics</h4>
                                            <p className="text-gray-600 text-sm">Upholding the highest standards of corporate governance</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="lg:w-1/2">
                                <div className="relative h-[500px] w-full rounded-2xl overflow-hidden shadow-xl border border-royal-gold/20 group">
                                    <img src="/images/legal-corporate/csr.jpeg" alt="Corporate Social Responsibility" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700" />
                                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* Attracting Strategic Partners */}
            <section className="py-24 bg-desert-sand relative">
                <div className="container mx-auto px-6">
                    <ScrollReveal>
                        <div className="max-w-5xl mx-auto bg-charcoal-blue text-white p-16 rounded-3xl shadow-2xl relative overflow-hidden">
                            {/* Background image overlay for texture */}
                            <div className="absolute inset-0 bg-[url('/images/legal-corporate/legal-corporate.jpg')] bg-cover bg-center opacity-10 mix-blend-overlay" />
                            <div className="absolute top-0 right-0 w-96 h-96 bg-royal-gold/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                            <div className="relative z-10">
                                <h2 className="text-3xl md:text-4xl font-serif font-bold text-royal-gold mb-8">Attracting Strategic Partners</h2>
                                <p className="text-xl text-gray-300 leading-relaxed mb-10 font-light">
                                    We invite leading corporations, institutional investors, and financial institutions to collaborate on integrated solutions, such as joint ventures, investment facilitation, or regulatory advisory. By partnering with The Royal Union, you gain access to a pipeline of vetted international clients, co-developing opportunities like trade finance, mergers and acquisitions, or large-scale infrastructure projects tailored to Dubai's ecosystem.
                                </p>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* Outro */}
            <section className="py-20 bg-white">
                <ScrollReveal>
                    <div className="container mx-auto px-6 text-center">
                        <p className="text-2xl md:text-3xl font-serif text-foreground mb-12 max-w-4xl mx-auto">
                            Build a solid foundation in UAE with us. Reach out to forge a powerful alliance.
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