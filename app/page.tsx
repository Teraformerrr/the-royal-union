"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import SplashScreen from "@/components/ui/SplashScreen";
import { ArrowRight, Shield, TrendingUp, Globe, Award } from "lucide-react";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Home() {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <main className="min-h-screen bg-background selection:bg-royal-gold selection:text-white">
      <AnimatePresence>
        {showSplash && <SplashScreen onComplete={() => setShowSplash(false)} />}
      </AnimatePresence>

      <Navbar />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          {/* Stronger white overlay for better text contrast against busy city background */}
          <div className="absolute inset-0 bg-white/40 z-10" />
          <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/60 to-background/90 z-10" />
          <div className="absolute inset-0 bg-[url('/images/difc.jpg')] bg-cover bg-center" />
        </div>

        <div className="container mx-auto px-6 relative z-20 text-center">
          <motion.div
            initial="initial"
            animate="animate"
            variants={staggerContainer}
            className="max-w-4xl mx-auto space-y-8"
          >
            <motion.h2
              variants={fadeIn}
              className="text-royal-gold-dark font-serif tracking-[0.2em] text-sm md:text-base uppercase font-bold drop-shadow-sm"
            >
              Excellence in Every Venture
            </motion.h2>

            <motion.h1
              variants={fadeIn}
              className="text-6xl md:text-8xl lg:text-9xl font-serif font-bold text-charcoal-blue leading-tight drop-shadow-md"
            >
              The Royal <br />
              <span className="text-royal-gold drop-shadow-md">
                Union
              </span>
            </motion.h1>

            <motion.p
              variants={fadeIn}
              className="text-lg md:text-2xl text-charcoal-blue/80 max-w-2xl mx-auto leading-relaxed font-medium drop-shadow-sm"
            >
              Where business ventures meet royalty. We bridge the gap between traditional values and modern innovation.
            </motion.p>

            <motion.div
              variants={fadeIn}
              className="flex flex-col md:flex-row items-center justify-center gap-6 pt-8"
            >
              <Button size="lg" className="w-full md:w-auto min-w-[200px] shadow-lg shadow-royal-gold/20">
                Explore Solutions
              </Button>
              <Button variant="outline" size="lg" className="w-full md:w-auto min-w-[200px] bg-white/50 backdrop-blur-sm border-royal-gold text-royal-gold-dark hover:bg-royal-gold hover:text-white">
                Contact Us
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
        >

          <div className="w-[1px] h-12 bg-gradient-to-b from-royal-gold to-transparent" />
        </motion.div>
      </section>

      {/* Intro Section - Redefining Corporate Excellence */}
      <Section className="bg-background">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6 leading-tight">
              Redefining Corporate <br />
              <span className="text-royal-gold">Excellence</span>
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              At The Royal Union, we curate exclusive opportunities that blend the heritage of the Middle East with global business standards. Our approach is rooted in integrity, vision, and an unwavering commitment to success.
            </p>
            <Button variant="outline" className="group border-royal-gold text-royal-gold hover:bg-royal-gold hover:text-white">
              Read Our Story
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/3] relative overflow-hidden rounded-none shadow-2xl shadow-royal-gold/10">
              <div className="absolute inset-0 bg-gradient-to-tr from-royal-gold/10 to-transparent z-10" />
              {/* Updated Image: DIFC Skyline */}
              <img
                src="/images/difc.jpg"
                alt="DIFC Skyline"
                className="object-cover w-full h-full"
              />
            </div>
            {/* Floating decorative element */}
            <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-white p-8 flex flex-col justify-center z-20 border border-royal-gold/20 shadow-xl">
              <span className="text-4xl font-serif text-royal-gold font-bold mb-2">25+</span>
              <span className="text-gray-500 text-sm uppercase tracking-wider">Years of Excellence</span>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Features Grid */}
      <Section className="bg-desert-sand relative">
        {/* Abstract Background Shapes */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-royal-gold/5 to-transparent pointer-events-none" />

        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
            Strategic Pillars
          </h2>
          <div className="w-24 h-1 bg-royal-gold mx-auto mb-6" />
          <p className="text-gray-600">
            Our foundation is built on four core pillars that drive sustainable growth and innovation across all our ventures.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              image: "/images/governance/golden_eagle2.png",
              title: "Governance",
              desc: "Upholding the highest standards of corporate integrity and compliance."
            },
            { icon: TrendingUp, title: "Wealth", desc: "Strategic asset management and investment diversification." },
            { icon: Globe, title: "Global Reach", desc: "Connecting local heritage with international opportunities." },
            { icon: Award, title: "Excellence", desc: "Pursuing perfection in every operational aspect." }
          ].map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
            >
              <Card className="h-full flex flex-col items-center text-center p-8 group bg-white border-royal-gold/10 hover:border-royal-gold/30 shadow-sm hover:shadow-xl">
                <div className="w-16 h-16 rounded-full bg-royal-gold/5 flex items-center justify-center mb-6 group-hover:bg-royal-gold/20 transition-colors duration-500 overflow-hidden">
                  {/* @ts-ignore */}
                  {feature.image ? (
                    <img src={feature.image} alt={feature.title} className="w-10 h-10 object-contain" />
                  ) : (
                    // @ts-ignore
                    <feature.icon className="w-8 h-8 text-royal-gold" />
                  )}
                </div>
                <h3 className="text-xl font-serif text-foreground mb-4">{feature.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{feature.desc}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Two-Tone Gradient Section - Partner with Royalty */}
      <section className="py-32 bg-gradient-to-br from-desert-sand-dark to-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-30" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
            <div className="lg:w-1/2">
              <h2 className="text-4xl md:text-6xl font-serif font-bold text-foreground mb-8 leading-tight">
                Partner with <br />
                <span className="text-royal-gold">
                  Royalty
                </span>
              </h2>
              <p className="text-gray-600 text-lg mb-10 max-w-xl">
                Join a network of elite visionaries and industry leaders. We provide the platform for your business to ascend to new heights.
              </p>
              <Button size="lg" className="bg-charcoal-blue text-white hover:bg-charcoal-blue-light">
                Become a Partner
              </Button>
            </div>
            <div className="lg:w-1/2 relative">
              <div className="relative z-10">
                {/* Updated Image: Sheikh Handshake */}
                <img
                  src="/images/sheikh-handshake.jpg"
                  alt="Strategic Partnership"
                  className="rounded-lg shadow-2xl shadow-royal-gold/20 w-full"
                />
              </div>
              {/* Decorative Circle */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-royal-gold/20 rounded-full -z-0 animate-spin-slow" />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials / Success Stories */}
      <Section className="bg-background">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground">Success Stories</h2>
        </div>

        {/* Optional: Group Walking Image as a feature or background here */}
        <div className="mb-16 relative h-96 rounded-2xl overflow-hidden mx-auto max-w-5xl shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
          <img
            src="/images/sheikh-team-walking.jpg"
            alt="Leadership Team"
            className="object-cover w-full h-full"
          />
          <div className="absolute bottom-8 left-8 z-20 text-white">
            <h3 className="text-2xl font-serif font-bold mb-2">Leading the Way</h3>
            <p className="text-gray-200">Our leadership team driving innovation across the region.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <Card key={i} className="bg-white border-gray-200 hover:border-royal-gold/50 shadow-sm">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gray-100 rounded-full border border-royal-gold/20" />
                <div>
                  <h4 className="font-serif font-bold text-foreground">Client Name</h4>
                  <p className="text-xs text-gray-500 uppercase">CEO, Global Corp</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "The Royal Union transformed our approach to the Middle Eastern market. Their insights and connections are truly unparalleled."
              </p>
            </Card>
          ))}
        </div>
      </Section>

      <Footer />
    </main>
  );
}
