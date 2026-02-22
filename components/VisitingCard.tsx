"use client";

import { motion } from "framer-motion";
import { SITE_NAME, SITE_TAGLINE, PHONE_NUMBER, PHONE_NUMBER_2, EMAIL, ADDRESS } from "@/lib/constants";

export default function VisitingCard() {
    return (
        <section
            id="visiting-card"
            className="section-padding bg-[#F5F1EA] flex items-center justify-center"
        >
            <div className="w-full max-w-xl mx-auto px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    className="relative bg-[#5B3A29] text-center"
                    style={{ border: "1px solid #B89B5E", padding: "clamp(2.5rem, 6vw, 4rem)" }}
                >
                    {/* Inner gold border */}
                    <div
                        className="absolute inset-3 pointer-events-none"
                        style={{ border: "1px solid rgba(184,155,94,0.3)" }}
                    />

                    {/* Top ornament */}
                    <div className="flex items-center justify-center gap-3 mb-8">
                        <div className="w-12 h-px bg-[#B89B5E]" />
                        <svg width="10" height="10" viewBox="0 0 10 10" aria-hidden="true">
                            <rect x="1" y="1" width="8" height="8" fill="none" stroke="#B89B5E" strokeWidth="1" transform="rotate(45 5 5)" />
                        </svg>
                        <div className="w-12 h-px bg-[#B89B5E]" />
                    </div>

                    {/* Studio name */}
                    <h2
                        className="text-[#F5F1EA] mb-2"
                        style={{
                            fontFamily: "var(--font-cinzel)",
                            fontSize: "clamp(1.2rem, 4vw, 1.75rem)",
                            fontWeight: 700,
                            letterSpacing: "0.22em",
                        }}
                    >
                        {SITE_NAME.toUpperCase()}
                    </h2>
                    <p
                        className="text-[#B89B5E] text-[11px] uppercase tracking-[0.4em] mb-8"
                        style={{ fontFamily: "var(--font-cinzel)" }}
                    >
                        {SITE_TAGLINE}
                    </p>

                    {/* Mid divider */}
                    <div className="flex items-center justify-center gap-2 mb-8">
                        <div className="w-10 h-px bg-[#B89B5E]/40" />
                        <div className="w-1 h-1 rounded-full bg-[#B89B5E]/40" />
                        <div className="w-10 h-px bg-[#B89B5E]/40" />
                    </div>

                    {/* Contact details */}
                    <div
                        className="flex flex-col gap-2.5 items-center"
                        style={{ fontFamily: "var(--font-montserrat)" }}
                    >
                        <a
                            href={`tel:+${PHONE_NUMBER}`}
                            className="text-[#D8CFC4] text-sm hover:text-[#B89B5E] transition-colors tracking-widest"
                        >
                            +91 97011 61430
                        </a>
                        <a
                            href={`tel:+${PHONE_NUMBER_2}`}
                            className="text-[#D8CFC4] text-sm hover:text-[#B89B5E] transition-colors tracking-widest"
                        >
                            +91 94945 37985
                        </a>
                        <a
                            href={`mailto:${EMAIL}`}
                            className="text-[#D8CFC4] text-sm hover:text-[#B89B5E] transition-colors tracking-wide"
                        >
                            {EMAIL}
                        </a>
                        <p className="text-[#D8CFC4]/55 text-xs tracking-wide text-center max-w-[260px] leading-relaxed">
                            {ADDRESS}
                        </p>
                    </div>

                    {/* Bottom ornament */}
                    <div className="flex items-center justify-center gap-3 mt-8">
                        <div className="w-12 h-px bg-[#B89B5E]" />
                        <svg width="10" height="10" viewBox="0 0 10 10" aria-hidden="true">
                            <rect x="1" y="1" width="8" height="8" fill="none" stroke="#B89B5E" strokeWidth="1" transform="rotate(45 5 5)" />
                        </svg>
                        <div className="w-12 h-px bg-[#B89B5E]" />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
