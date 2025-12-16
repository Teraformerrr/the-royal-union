"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Section } from "@/components/ui/Section";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { motion } from "framer-motion";

export default function AboutUs() {
    const teamMembers = [
        {
            name: "Dezmen Driver",
            role: "Principle",
            image: "/images/dez.png",
            link: "/about-us/ceo",
            description: null,
        },
        {
            name: "Mez Darayas",
            role: "Director",
            image: "/images/mez.png",
            link: null,
            description: "Mez is a seasoned professional with long-standing experience in Dubai\u2019s real estate and banking sectors. Having grown up and worked in the UAE for many years, he brings deep market insight and a strong understanding of regional financial systems, property investment, and commercial operations. Mez has collaborated with diverse stakeholders across the private and institutional landscape, combining financial discipline with real-world real estate expertise. Known for his strategic mindset and reliability, he continues to deliver value through informed decision-making and a results-driven approach."
        },
        {
            name: "Alex Politis",
            role: "Director",
            image: "/images/alez10.png",
            link: null,
            description: "Alex oversees the group\u2019s global partnerships and investment initiatives, with a primary focus on building strategic relationships and exploring new investment opportunities across international markets. With a background in finance and economics in Canada, he brings a disciplined, analytical perspective to evaluating potential ventures and reviewing the group\u2019s existing investment opportunities. Alex is involved in opportunity assessment, partner alignment, and high-level oversight, helping ensure investments remain aligned with the group\u2019s strategic objectives and long-term vision."
        },
        {
            name: "Mohamed Mistry",
            role: "Head Of AI / Technology",
            image: "/images/jam.png",
            link: null,
            description: "Mohamed is an AI specialist focused on applying artificial intelligence and machine learning to finance and real estate, driving data-driven insights, automation, and smarter decision-making. With a strong background in cybersecurity, he develops intelligent systems that prioritize both performance and protection. A dedicated technology enthusiast, Mohamed excels at building secure, scalable solutions that bridge advanced analytics with real-world business impact."
        },
    ];

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
                            Founded on the principles of excellence and connectivity, The Royal Union is a premier Partnership dedicated to empowering foreign businesses in UAE. We specialize in market entry, exclusive partnerships, wealth management, and legal structuring—delivering results that blend innovation with tradition.
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
                                    To create enduring value by linking global enterprises with UAE's government, and financial networks, fostering sustainable growth in one of the world's most vibrant economies.
                                </p>
                            </div>
                            <div className="lg:w-1/2">
                                <div className="relative h-[400px] w-full rounded-2xl overflow-hidden shadow-xl border border-royal-gold/20 group">
                                    <img src="/images/about_us/our_mission1.jpg" alt="Our Mission" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700" />
                                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* Leadership / Team Section */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6">
                    <ScrollReveal>
                        <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-16 text-center">Meet the Team</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
                            {teamMembers.map((member, index) => {
                                const CardContent = () => (
                                    <div className="relative h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:shadow-3xl bg-gray-900 group">
                                        <img
                                            src={member.image}
                                            alt={member.name}
                                            className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110 opacity-90"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-transparent opacity-90 transition-opacity duration-500" />

                                        <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col justify-end h-full">
                                            <div className="transform transition-transform duration-500 translate-y-0 group-hover:-translate-y-2">
                                                <h3 className="text-xl font-serif font-bold text-royal-gold mb-1 text-center md:text-left">{member.name}</h3>
                                                <p className="text-white/90 text-sm uppercase tracking-widest font-light mb-4 text-center md:text-left">{member.role}</p>
                                            </div>

                                            {member.description && (
                                                <div className="h-0 opacity-0 group-hover:h-auto group-hover:opacity-100 transition-all duration-500 overflow-hidden">
                                                    <p className="text-gray-300 text-xs leading-relaxed text-justify border-t border-white/10 pt-4">
                                                        {member.description}
                                                    </p>
                                                </div>
                                            )}

                                            {member.link && (
                                                <div className="mt-2 text-center md:text-left">
                                                    <span className="inline-block border border-white/30 rounded-full px-6 py-2 text-sm text-white/80 group-hover:bg-white group-hover:text-charcoal-blue transition-all duration-300">
                                                        View Profile
                                                    </span>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                );

                                return member.link ? (
                                    <a key={index} href={member.link} className="block h-full">
                                        <CardContent />
                                    </a>
                                ) : (
                                    <div key={index} className="block h-full cursor-default">
                                        <CardContent />
                                    </div>
                                );
                            })}
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
                                We engage with a select circle of leading corporations, institutional investors, and financial institutions to unlock unparalleled opportunities. Through bespoke co-branded investment solutions, curated client introductions, and strategic ventures in the UAE's most dynamic sectors, we create access to premium markets and high-value clients—opportunities available only to those who partner with us.
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