"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Section } from "@/components/ui/Section";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { motion } from "framer-motion";

export default function LegalConsultancy() {
    return (
        <main className="min-h-screen bg-background">
            <Navbar />

            {/* Hero */}
            <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
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
                        className="text-5xl md:text-7xl font-serif font-bold text-charcoal-blue mb-6 drop-shadow-sm"
                    >
                        Legal Consultancy
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        className="text-xl md:text-2xl text-charcoal-blue/80 max-w-3xl mx-auto font-medium drop-shadow-sm"
                    >
                        Expert legal counsel for seamless operations and dispute resolution.
                    </motion.p>
                </div>
            </section>

            {/* Overview */}
            <Section className="bg-white">
                <ScrollReveal>
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-8">Overview</h2>
                        <p className="text-lg text-gray-600 leading-relaxed mb-8">
                            The Royal Union offers comprehensive legal consultancy services designed to protect your interests and facilitate your business objectives. From contract drafting to complex dispute resolution, our team of experts ensures you are on solid legal ground.
                        </p>
                    </div>
                </ScrollReveal>
            </Section>

            {/* Key Benefits */}
            <section className="py-20 bg-desert-sand">
                <div className="container mx-auto px-6">
                    <ScrollReveal>
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-12 text-center">Areas of Practice</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {[
                                { title: "Commercial Contracts", desc: "Drafting and reviewing robust agreements that protect your commercial interests." },
                                { title: "Labor Law", desc: "Guidance on UAE labor regulations, employment contracts, and workforce management." },
                                { title: "Intellectual Property", desc: "Strategies to register and protect your trademarks, patents, and copyrights in the region." }
                            ].map((item, i) => (
                                <div key={i} className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                                    <h3 className="text-xl font-bold text-royal-gold mb-4">{item.title}</h3>
                                    <p className="text-gray-600">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 bg-charcoal-blue text-white text-center">
                <div className="container mx-auto px-6">
                    <ScrollReveal>
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-royal-gold mb-6">Secure Your Business</h2>
                        <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
                            Don't leave your legal standing to chance. Consult with our experts today.
                        </p>
                        <a href="/contact-us" className="inline-block bg-royal-gold text-white px-10 py-4 text-lg font-bold hover:bg-royal-gold-dark transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                            Schedule a Consultation
                        </a>
                    </ScrollReveal>
                </div>
            </section>

            <Footer />
        </main>
    );
}
