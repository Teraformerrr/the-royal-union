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
                        Streamline Your UAE Expansion with Expert Guidance
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
                                    We invite leading corporations, institutional investors, and financial institutions to collaborate on integrated solutions, such as joint ventures, investment facilitation, or regulatory advisory. By partnering with The Royal Union, you gain access to a pipeline of vetted international clients, co-developing opportunities like trade finance, mergers and acquisitions, or large-scale infrastructure projects tailored to UAE's ecosystem.
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