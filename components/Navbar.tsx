"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NAV_LINKS, SITE_NAME } from "@/lib/constants";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("home");

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);

            // Determine active section
            const sections = NAV_LINKS.map((l) => l.href.replace("#", ""));
            for (let i = sections.length - 1; i >= 0; i--) {
                const el = document.getElementById(sections[i]);
                if (el && el.getBoundingClientRect().top <= 120) {
                    setActiveSection(sections[i]);
                    break;
                }
            }
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleNavClick = (href: string) => {
        setMobileOpen(false);
        const id = href.replace("#", "");
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <>
            <nav
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
                    ? "bg-[#F5F1EA] shadow-md py-3"
                    : "bg-transparent py-5"
                    }`}
            >
                <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
                    {/* Logo */}
                    <a
                        href="#home"
                        onClick={(e) => { e.preventDefault(); handleNavClick("#home"); }}
                        className="flex flex-col leading-none"
                    >
                        <span
                            style={{ fontFamily: "var(--font-cinzel)" }}
                            className={`text-xl font-bold tracking-widest transition-colors duration-500 ${scrolled ? "text-[#5B3A29]" : "text-[#F5F1EA]"
                                }`}
                        >
                            {SITE_NAME.toUpperCase()}
                        </span>
                        <span
                            className={`text-[10px] tracking-[0.3em] uppercase transition-colors duration-500 ${scrolled ? "text-[#B89B5E]" : "text-[#D8CFC4]"
                                }`}
                        >
                            Transform Space With Style
                        </span>
                    </a>

                    {/* Desktop Links */}
                    <ul className="hidden md:flex items-center gap-8">
                        {NAV_LINKS.map(({ label, href }) => {
                            const isActive = activeSection === href.replace("#", "");
                            return (
                                <li key={href}>
                                    <button
                                        onClick={() => handleNavClick(href)}
                                        className={`text-[13px] uppercase tracking-widest font-medium transition-all duration-300 relative pb-1 cursor-pointer ${scrolled
                                            ? isActive
                                                ? "text-[#B89B5E]"
                                                : "text-[#2B2B2B] hover:text-[#B89B5E]"
                                            : isActive
                                                ? "text-[#B89B5E]"
                                                : "text-[#F5F1EA] hover:text-[#B89B5E]"
                                            }`}
                                    >
                                        {label}
                                        {isActive && (
                                            <motion.span
                                                layoutId="active-nav"
                                                className="absolute bottom-0 left-0 right-0 h-px bg-[#B89B5E]"
                                            />
                                        )}
                                    </button>
                                </li>
                            );
                        })}
                    </ul>

                    {/* Mobile Hamburger */}
                    <button
                        id="hamburger-btn"
                        aria-label="Toggle mobile menu"
                        className="md:hidden flex flex-col gap-1.5 p-2"
                        onClick={() => setMobileOpen((o) => !o)}
                    >
                        <span
                            className={`block w-6 h-0.5 transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-2" : ""
                                } ${scrolled ? "bg-[#5B3A29]" : "bg-[#F5F1EA]"}`}
                        />
                        <span
                            className={`block w-6 h-0.5 transition-all duration-300 ${mobileOpen ? "opacity-0" : ""
                                } ${scrolled ? "bg-[#5B3A29]" : "bg-[#F5F1EA]"}`}
                        />
                        <span
                            className={`block w-6 h-0.5 transition-all duration-300 ${mobileOpen ? "-rotate-45 -translate-y-2" : ""
                                } ${scrolled ? "bg-[#5B3A29]" : "bg-[#F5F1EA]"}`}
                        />
                    </button>
                </div>
            </nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="fixed top-0 left-0 right-0 bottom-0 z-40 bg-[#F5F1EA] flex flex-col items-center justify-center gap-8"
                    >
                        <div className="flex flex-col leading-none items-center mb-4">
                            <span
                                style={{ fontFamily: "var(--font-cinzel)" }}
                                className="text-2xl font-bold tracking-widest text-[#5B3A29]"
                            >
                                {SITE_NAME.toUpperCase()}
                            </span>
                            <span className="text-[10px] tracking-[0.3em] uppercase text-[#B89B5E]">
                                Transform Space With Style
                            </span>
                        </div>

                        {NAV_LINKS.map(({ label, href }, i) => (
                            <motion.button
                                key={href}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.07 }}
                                onClick={() => handleNavClick(href)}
                                className="text-[22px] uppercase tracking-widest font-medium text-[#2B2B2B] hover:text-[#B89B5E] transition-colors"
                                style={{ fontFamily: "var(--font-cinzel)" }}
                            >
                                {label}
                            </motion.button>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
