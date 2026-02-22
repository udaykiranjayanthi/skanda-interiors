"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { VALUES } from "@/lib/constants";

const fadeUp = {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-80px" },
};

const VALUE_ICONS: Record<string, React.ReactNode> = {
    target: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <circle cx="12" cy="12" r="10" />
            <circle cx="12" cy="12" r="6" />
            <circle cx="12" cy="12" r="2" />
        </svg>
    ),
    diamond: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M6 3h12l4 6-10 13L2 9z" />
            <path d="M2 9h20" />
        </svg>
    ),
    sparkle: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z" />
        </svg>
    ),
    key: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <circle cx="7.5" cy="15.5" r="5.5" />
            <path d="M21 2l-9.6 9.6M15.5 7.5L19 11M18 3l3 3" />
        </svg>
    ),
};

export default function About() {
    return (
        <section id="about" className="section-padding bg-[#F5F1EA]">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-center">

                    {/* ── Left: Image column ── */}
                    <motion.div
                        {...fadeUp}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                        className="relative"
                    >
                        {/* Aspect-ratio wrapper — overflow-visible so badge can poke out */}
                        <div className="relative aspect-[4/5] shadow-2xl overflow-visible">
                            {/* Actual image clipped inside */}
                            <div className="absolute inset-0 overflow-hidden">
                                <Image
                                    src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&q=85"
                                    alt="Skanda Interiors design team at work"
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                    priority={false}
                                />
                                {/* Decorative inner gold frame */}
                                <div className="absolute inset-0 border border-[#B89B5E]/30 m-4 pointer-events-none" />
                            </div>
                        </div>

                        {/* Stats badge — positioned relative to the outer overflow-visible wrapper */}
                        <div className="absolute -bottom-8 right-0 md:-right-6 bg-[#5B3A29] text-[#F5F1EA] px-7 py-6 shadow-xl z-10">
                            <p
                                className="text-5xl font-bold text-[#B89B5E] leading-none"
                                style={{ fontFamily: "var(--font-cinzel)" }}
                            >
                                10+
                            </p>
                            <p
                                className="text-[10px] uppercase tracking-widest mt-2 whitespace-nowrap"
                                style={{ fontFamily: "var(--font-montserrat)" }}
                            >
                                Years of Excellence
                            </p>
                        </div>
                    </motion.div>

                    {/* ── Right: Content column ── */}
                    {/* pb-8 gives room for the badge on mobile when stacked */}
                    <div className="pt-10 md:pt-0 pb-2">
                        <motion.span
                            {...fadeUp}
                            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                            className="inline-block text-[#B89B5E] text-xs uppercase tracking-[0.4em] mb-4"
                            style={{ fontFamily: "var(--font-cinzel)" }}
                        >
                            Our Story
                        </motion.span>

                        <motion.h2
                            {...fadeUp}
                            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                            className="text-[#5B3A29] mb-8 leading-tight"
                            style={{
                                fontFamily: "var(--font-playfair)",
                                fontSize: "clamp(1.9rem, 4vw, 2.6rem)",
                                fontWeight: 600,
                            }}
                        >
                            Crafting Spaces That{" "}
                            <em className="italic text-[#B89B5E]">Tell a Story</em>
                        </motion.h2>

                        {/* Gold divider */}
                        <motion.div
                            {...fadeUp}
                            transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
                            className="flex items-center gap-3 mb-6"
                        >
                            <div className="w-10 h-px bg-[#B89B5E]" />
                            <div className="w-1.5 h-1.5 rotate-45 bg-[#B89B5E]" />
                        </motion.div>

                        <motion.p
                            {...fadeUp}
                            transition={{ duration: 0.6, ease: "easeOut", delay: 0.35 }}
                            className="text-[#2B2B2B]/75 text-base md:text-[17px] leading-[1.85] mb-10"
                            style={{ fontFamily: "var(--font-montserrat)" }}
                        >
                            Skanda Interiors is a luxury interior design studio dedicated to
                            crafting elegant, functional, and timeless spaces. We specialize in
                            premium materials, thoughtful layouts, and seamless execution —
                            transforming your vision into living masterpieces that endure.
                        </motion.p>

                        {/* Values grid */}
                        <div className="grid grid-cols-2 gap-3">
                            {VALUES.map(({ icon, label }, i) => (
                                <motion.div
                                    key={label}
                                    {...fadeUp}
                                    transition={{ duration: 0.5, ease: "easeOut", delay: 0.45 + i * 0.08 }}
                                    className="flex items-center gap-3 p-4 border border-[#D8CFC4] hover:border-[#B89B5E] hover:bg-white transition-all duration-300 group"
                                >
                                    <div className="shrink-0 text-[#B89B5E] group-hover:text-[#5B3A29] transition-colors duration-300">
                                        {VALUE_ICONS[icon]}
                                    </div>
                                    <span
                                        className="text-[13px] text-[#2B2B2B] group-hover:text-[#5B3A29] transition-colors font-medium leading-tight"
                                        style={{ fontFamily: "var(--font-montserrat)" }}
                                    >
                                        {label}
                                    </span>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
