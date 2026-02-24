"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SITE_NAME, SITE_TAGLINE, PHONE_NUMBER, PHONE_NUMBER_2, EMAIL, ADDRESS } from "@/lib/constants";

export default function VisitingCard() {
    return (
        <section
            id="visiting-card"
            className="section-padding bg-[#F5F1EA] flex items-center justify-center"
        >
            <div className="w-full max-w-3xl mx-auto px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    className="relative bg-[#5B3A29]"
                    style={{ border: "1px solid #B89B5E" }}
                >
                    {/* Inner gold border */}
                    <div
                        className="absolute inset-3 pointer-events-none"
                        style={{ border: "1px solid rgba(184,155,94,0.3)" }}
                    />

                    {/* ── Responsive card body ── */}
                    <div className="flex flex-col md:flex-row">

                        {/* ── Left / Top: Brand block ── */}
                        <div className="flex flex-col items-center justify-center text-center px-8 py-10 md:py-12 md:w-2/5 md:border-r md:border-[#B89B5E]/30">

                            {/* Logo */}
                            <div className="relative w-24 h-24 mb-4">
                                <Image
                                    src="/logo.png"
                                    alt={`${SITE_NAME} logo`}
                                    fill
                                    className="object-contain"
                                    sizes="96px"
                                    priority
                                    unoptimized
                                />
                            </div>

                            {/* Studio name */}
                            <h2
                                className="text-[#F5F1EA] mb-1"
                                style={{
                                    fontFamily: "var(--font-cinzel)",
                                    fontSize: "clamp(0.9rem, 2.5vw, 1.3rem)",
                                    fontWeight: 700,
                                    letterSpacing: "0.18em",
                                }}
                            >
                                {SITE_NAME.toUpperCase()}
                            </h2>
                            <p
                                className="text-[#B89B5E] text-[9px] uppercase tracking-[0.35em]"
                                style={{ fontFamily: "var(--font-cinzel)" }}
                            >
                                {SITE_TAGLINE}
                            </p>
                        </div>

                        {/* Mobile horizontal divider */}
                        <div className="md:hidden flex items-center gap-2 px-8">
                            <div className="flex-1 h-px bg-[#B89B5E]/30" />
                            <svg width="8" height="8" viewBox="0 0 10 10" aria-hidden="true">
                                <rect x="1" y="1" width="8" height="8" fill="none" stroke="#B89B5E" strokeWidth="1" transform="rotate(45 5 5)" />
                            </svg>
                            <div className="flex-1 h-px bg-[#B89B5E]/30" />
                        </div>

                        {/* ── Right / Bottom: Contact details ── */}
                        <div
                            className="flex flex-col justify-center items-center md:items-start gap-3 px-8 py-10 md:py-12 md:flex-1 text-center md:text-left"
                            style={{ fontFamily: "var(--font-montserrat)" }}
                        >
                            {/* Phone numbers */}
                            <div className="flex flex-col gap-1.5">
                                <a
                                    href={`tel:+${PHONE_NUMBER}`}
                                    className="flex items-center justify-center md:justify-start gap-2.5 text-[#D8CFC4] hover:text-[#B89B5E] transition-colors text-sm tracking-wide group"
                                >
                                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#B89B5E" strokeWidth="1.8" className="shrink-0" aria-hidden="true">
                                        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.1 1.22 2 2 0 012.11 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                                    </svg>
                                    +91 97011 61430
                                </a>
                                <a
                                    href={`tel:+${PHONE_NUMBER_2}`}
                                    className="flex items-center justify-center md:justify-start gap-2.5 text-[#D8CFC4] hover:text-[#B89B5E] transition-colors text-sm tracking-wide"
                                >
                                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#B89B5E" strokeWidth="1.8" className="shrink-0" aria-hidden="true">
                                        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.1 1.22 2 2 0 012.11 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                                    </svg>
                                    +91 94945 37985
                                </a>
                            </div>

                            {/* Thin rule */}
                            <div className="w-12 h-px bg-[#B89B5E]/30 mx-auto md:mx-0" />

                            {/* Email */}
                            <a
                                href={`mailto:${EMAIL}`}
                                className="flex items-center justify-center md:justify-start gap-2.5 text-[#D8CFC4] hover:text-[#B89B5E] transition-colors text-sm tracking-wide break-all"
                            >
                                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#B89B5E" strokeWidth="1.8" className="shrink-0" aria-hidden="true">
                                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                                    <polyline points="22,6 12,13 2,6" />
                                </svg>
                                {EMAIL}
                            </a>

                            {/* Address */}
                            <p className="flex items-center justify-center md:justify-start gap-2.5 text-[#D8CFC4]/55 text-xs tracking-wide leading-relaxed">
                                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#B89B5E" strokeWidth="1.8" className="shrink-0" aria-hidden="true">
                                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                                    <circle cx="12" cy="10" r="3" />
                                </svg>
                                {ADDRESS}
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
