"use client";

import { motion } from "framer-motion";
import { SITE_NAME, SITE_TAGLINE, PHONE_NUMBER, EMAIL, ADDRESS } from "@/lib/constants";

export default function VisitingCard() {
    return (
        <section id="visiting-card" className="py-20 bg-[#F5F1EA] flex items-center justify-center">
            <div className="px-6 w-full max-w-2xl">
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    className="relative bg-[#5B3A29] p-10 md:p-14 text-center"
                    style={{ border: "1px solid #B89B5E" }}
                >
                    {/* Inner gold border */}
                    <div
                        className="absolute inset-3 pointer-events-none"
                        style={{ border: "1px solid rgba(184,155,94,0.35)" }}
                    />

                    {/* Top ornament */}
                    <div className="flex items-center justify-center gap-3 mb-8">
                        <div className="w-12 h-px bg-[#B89B5E]" />
                        <svg width="12" height="12" viewBox="0 0 12 12" aria-hidden="true">
                            <rect x="2" y="2" width="8" height="8" fill="none" stroke="#B89B5E" strokeWidth="1" transform="rotate(45 6 6)" />
                        </svg>
                        <div className="w-12 h-px bg-[#B89B5E]" />
                    </div>

                    {/* Studio Name */}
                    <h2
                        className="text-[#F5F1EA] tracking-[0.2em] mb-2"
                        style={{
                            fontFamily: "var(--font-cinzel)",
                            fontSize: "clamp(1.4rem, 4vw, 2rem)",
                            fontWeight: 700,
                            letterSpacing: "0.25em",
                        }}
                    >
                        {SITE_NAME.toUpperCase()}
                    </h2>
                    <p
                        className="text-[#B89B5E] text-xs uppercase tracking-[0.45em] mb-10"
                        style={{ fontFamily: "var(--font-cinzel)" }}
                    >
                        {SITE_TAGLINE}
                    </p>

                    {/* Divider */}
                    <div className="flex items-center justify-center gap-2 mb-10">
                        <div className="w-8 h-px bg-[#B89B5E]/50" />
                        <div className="w-1 h-1 rounded-full bg-[#B89B5E]/50" />
                        <div className="w-8 h-px bg-[#B89B5E]/50" />
                    </div>

                    {/* Contact Details */}
                    <div
                        className="flex flex-col gap-3 items-center"
                        style={{ fontFamily: "var(--font-montserrat)" }}
                    >
                        <a
                            href={`tel:+${PHONE_NUMBER}`}
                            className="text-[#D8CFC4] text-sm hover:text-[#B89B5E] transition-colors tracking-widest"
                        >
                            +{PHONE_NUMBER}
                        </a>
                        <a
                            href={`mailto:${EMAIL}`}
                            className="text-[#D8CFC4] text-sm hover:text-[#B89B5E] transition-colors tracking-wide"
                        >
                            {EMAIL}
                        </a>
                        <p className="text-[#D8CFC4]/60 text-xs tracking-wide text-center max-w-xs">
                            {ADDRESS}
                        </p>
                    </div>

                    {/* Bottom ornament */}
                    <div className="flex items-center justify-center gap-3 mt-10">
                        <div className="w-12 h-px bg-[#B89B5E]" />
                        <svg width="12" height="12" viewBox="0 0 12 12" aria-hidden="true">
                            <rect x="2" y="2" width="8" height="8" fill="none" stroke="#B89B5E" strokeWidth="1" transform="rotate(45 6 6)" />
                        </svg>
                        <div className="w-12 h-px bg-[#B89B5E]" />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
