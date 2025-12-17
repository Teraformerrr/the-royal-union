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
                    <div className="absolute inset-0 bg-[url('/images/ceo.jpg')] bg-cover bg-center" />
                </div>
                <div className="container mx-auto px-6 relative z-20 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-charcoal-blue mb-8 drop-shadow-sm"
                    >
                        The Principle Director
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        className="text-xl md:text-3xl text-charcoal-blue/80 max-w-4xl mx-auto font-medium drop-shadow-sm leading-relaxed"
                    >
                        Distinguished Investment Strategist & Executive Advisor
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
                                Dezmen Driver is a distinguished investment strategist, executive advisor, and multi-sector business leader with an exceptional track record of driving capital growth, forging sovereign-level partnerships, and guiding multinational organizations into the United Arab Emirates. Over two decades, he has held influential positions across global banking, royal family private offices, real estate development, and advanced investment platforms—establishing himself as a leading figure in high-level commercial diplomacy and cross-border economic expansion.
                            </p>
                            <p>
                                His career began in international banking, where he managed institutional loan and investment portfolios for Standard Chartered Bank, later scaling his impact significantly at Citibank, where he oversaw large-scale portfolio structures with regional and international mandates. His ability to engineer growth, mitigate risk, and optimize asset performance distinguished him early as a high-value strategist within global finance.
                            </p>
                            <p>
                                Dezmen’s expertise deepened within the private sector as he became Head of Investments for the Al Rajhi Family Office, where over a seven-year tenure he generated over USD 2.1 billion in revenue, primarily through strategic land acquisition, development entry structures, and high-yield real estate exits under Tameer Holdings. His vision and execution helped shape some of the region’s most profitable real estate transactions during a period of rapid market expansion.
                            </p>
                            <p>
                                He continued advancing into sovereign leadership roles, serving within His Highness Private Office as Vice Chairman, entrusted with overseeing both commercial and trade matters for His Highness and his family with wealth accumulating to over 1.1 Trillion USD. Dezmen’s responsibilities in this capacity spanned government relations, strategic investment planning, and international partnership development—cementing his standing as a trusted steward of national-level initiatives.
                            </p>
                            <p>
                                His executive acumen later extended to his tenure as Executive Director for his Highness, where he directed all investment activities linked to the House of Highness’s Sharjah real estate portfolio and broader fund operations. This role continued to solidify his ability to integrate trade insight, investment governance, and high-stakes project management.
                            </p>

                            <h3 className="text-2xl font-serif font-bold text-foreground mt-12 mb-6">Ventures & Leadership</h3>
                            <p>
                                Alongside his institutional leadership, Dezmen is the founder and operator of multiple successful ventures across the UAE:
                            </p>
                            <ul className="list-none space-y-4">
                                <li>
                                    <strong>F&amp;B Ventures:</strong> Including Wok Boys and the award-winning Nara Thi Pan Asia.
                                </li>
                                <li>
                                    <strong>Real Estate Development, Brokerage &amp; Investment Firms:</strong> Delivering a combined portfolio across multi-use developments.
                                </li>
                                <li>
                                    <strong>Oracle Traders:</strong> An artificial-intelligence-driven hedge fund specializing in predictive modeling and advanced investment algorithms.
                                </li>
                                <li>
                                    <strong>Pink Trolly:</strong> Luxury Bespoke Real Estate Remodeling Company providing dream abode alterations and property appreciation upgrades.
                                </li>
                                <li>
                                    <strong>Al Barsha Private Notary:</strong> The UAE’s leading luxury private legal notary, facilitating high-value corporate and government transactions, and providing an essential gateway for international businesses entering the UAE.
                                </li>

                            </ul>

                            <p className="mt-8">
                                Today, Dezmen stands as a CEO dedicated to forging powerful partnerships, attracting foreign direct investment, and creating seamless pathways for global enterprises entering the UAE. His rare combination of royal-office experience, institutional banking leadership, and entrepreneurial success gives him a uniquely comprehensive understanding of the country’s economic ecosystem. With deep governmental relationships, strategic vision, and proven financial mastery, he continues to play a pivotal role in elevating the UAE as a world-class hub for commerce, innovation, and long-term international investment.
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
                                    &quot;Our goal is not merely to do business, but to build bridges that connect cultures, economies, and aspirations. The Royal Union stands as a testament to what is possible when trust and excellence converge.&quot;
                                </blockquote>
                                <p className="text-xl text-gray-600 leading-relaxed">
                                    Under his guidance, The Royal Union continues to expand its global footprint, inviting world-class leaders to join in writing the next chapter of UAE&apos;s success story.
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
