"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { VALUES } from "@/lib/constants";

const fadeUp = {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-80px" },
};

export default function About() {
    return (
        <section id="about" className="section-padding bg-[#F5F1EA]">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
                    {/* Image */}
                    <motion.div
                        {...fadeUp}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                        className="relative"
                    >
                        <div className="relative aspect-[4/5] overflow-hidden rounded-none shadow-2xl">
                            <Image
                                src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&q=85"
                                alt="Skanda Interiors design team at work"
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                            {/* Decorative gold frame */}
                            <div className="absolute inset-0 border border-[#B89B5E]/30 m-4 pointer-events-none" />
                        </div>
                        {/* Stats badge */}
                        <div className="absolute -bottom-6 -right-4 md:-right-8 bg-[#5B3A29] text-[#F5F1EA] p-6 shadow-xl">
                            <p
                                className="text-5xl font-bold text-[#B89B5E]"
                                style={{ fontFamily: "var(--font-cinzel)" }}
                            >
                                10+
                            </p>
                            <p
                                className="text-xs uppercase tracking-widest mt-1"
                                style={{ fontFamily: "var(--font-montserrat)" }}
                            >
                                Years of Excellence
                            </p>
                        </div>
                    </motion.div>

                    {/* Content */}
                    <div className="py-8">
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
                            className="text-[#5B3A29] mb-6 leading-tight"
                            style={{
                                fontFamily: "var(--font-playfair)",
                                fontSize: "clamp(2rem, 4vw, 2.75rem)",
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
                            className="text-[#2B2B2B]/75 text-base md:text-lg leading-relaxed mb-10"
                            style={{ fontFamily: "var(--font-montserrat)" }}
                        >
                            Skanda Interiors is a luxury interior design studio dedicated to
                            crafting elegant, functional, and timeless spaces. We specialize in
                            premium materials, thoughtful layouts, and seamless execution —
                            transforming your vision into living masterpieces that endure.
                        </motion.p>

                        {/* Values */}
                        <div className="grid grid-cols-2 gap-4">
                            {VALUES.map(({ icon, label }, i) => (
                                <motion.div
                                    key={label}
                                    {...fadeUp}
                                    transition={{ duration: 0.5, ease: "easeOut", delay: 0.45 + i * 0.08 }}
                                    className="flex items-center gap-3 p-4 border border-[#D8CFC4] hover:border-[#B89B5E] hover:bg-white transition-all duration-300 group"
                                >
                                    <span className="text-xl">{icon}</span>
                                    <span
                                        className="text-sm text-[#2B2B2B] group-hover:text-[#5B3A29] transition-colors font-medium"
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
