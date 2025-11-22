import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-white text-foreground pt-20 pb-10 border-t border-royal-gold/20">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand Column */}
                    <div className="space-y-6">
                        <h2 className="text-2xl font-serif font-bold tracking-widest text-royal-gold">
                            THE ROYAL UNION
                        </h2>
                        <p className="text-gray-500 text-sm leading-relaxed">
                            Where business ventures meet royalty. We provide elite governance, wealth management, and corporate solutions for the modern era.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-serif font-semibold mb-6 text-royal-gold">Quick Links</h3>
                        <ul className="space-y-4">
                            {["Home", "Royalty & Governance", "Wealth Management", "Legal & Corporate", "About Us"].map((item) => (
                                <li key={item}>
                                    <Link
                                        href={`/${item.toLowerCase().replace(/ & /g, "-").replace(/ /g, "-") === "/home" ? "" : item.toLowerCase().replace(/ & /g, "-").replace(/ /g, "-")}`}
                                        className="text-gray-500 hover:text-royal-gold transition-colors duration-300 text-sm"
                                    >
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-lg font-serif font-semibold mb-6 text-royal-gold">Our Services</h3>
                        <ul className="space-y-4">
                            {["Strategic Investment", "Corporate Governance", "Legal Consultancy", "Asset Management", "Royal Partnerships"].map((item) => (
                                <li key={item}>
                                    <a href="#" className="text-gray-500 hover:text-royal-gold transition-colors duration-300 text-sm">
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-lg font-serif font-semibold mb-6 text-royal-gold">Contact Us</h3>
                        <ul className="space-y-6">
                            <li className="flex items-start gap-4">
                                <MapPin className="text-royal-gold shrink-0 mt-1" size={20} />
                                <span className="text-gray-500 text-sm">
                                    Royal Union Tower, Level 45<br />
                                    Downtown Dubai, UAE
                                </span>
                            </li>
                            <li className="flex items-center gap-4">
                                <Phone className="text-royal-gold shrink-0" size={20} />
                                <span className="text-gray-500 text-sm">+971 4 123 4567</span>
                            </li>
                            <li className="flex items-center gap-4">
                                <Mail className="text-royal-gold shrink-0" size={20} />
                                <span className="text-gray-500 text-sm">contact@royalunion.ae</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-royal-gold/10 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-400 text-xs">
                        © {new Date().getFullYear()} The Royal Union. All rights reserved.
                    </p>
                    <div className="flex gap-8">
                        <a href="#" className="text-gray-400 hover:text-royal-gold text-xs transition-colors">Privacy Policy</a>
                        <a href="#" className="text-gray-400 hover:text-royal-gold text-xs transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
