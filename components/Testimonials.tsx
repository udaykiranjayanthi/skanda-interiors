"use client";

import { motion } from "framer-motion";
import { TESTIMONIALS } from "@/lib/constants";

const fadeUp = {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-80px" },
};

function StarRating() {
    return (
        <div className="flex gap-1 mb-5" aria-label="5 star rating">
            {[...Array(5)].map((_, i) => (
                <svg
                    key={i}
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="#B89B5E"
                    aria-hidden="true"
                >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
            ))}
        </div>
    );
}

export default function Testimonials() {
    return (
        <section id="testimonials" className="section-padding bg-[#D8CFC4]">
            <div className="max-w-7xl mx-auto px-6">
                {/* Header */}
                <div className="text-center mb-16">
                    <motion.span
                        {...fadeUp}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        className="inline-block text-[#5B3A29] text-xs uppercase tracking-[0.4em] mb-4"
                        style={{ fontFamily: "var(--font-cinzel)" }}
                    >
                        Kind Words
                    </motion.span>
                    <motion.h2
                        {...fadeUp}
                        transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                        className="text-[#2B2B2B] gold-underline"
                        style={{
                            fontFamily: "var(--font-playfair)",
                            fontSize: "clamp(2rem, 4vw, 2.75rem)",
                            fontWeight: 600,
                        }}
                    >
                        What Our Clients Say
                    </motion.h2>
                </div>

                {/* Testimonials Grid */}
                <div className="grid md:grid-cols-3 gap-6">
                    {TESTIMONIALS.map(({ quote, name, location }, i) => (
                        <motion.div
                            key={name}
                            {...fadeUp}
                            transition={{ duration: 0.6, ease: "easeOut", delay: i * 0.12 }}
                            className="bg-[#F5F1EA] p-8 relative group hover:shadow-xl transition-shadow duration-500"
                        >
                            {/* Decorative quote mark */}
                            <div
                                className="absolute -top-4 left-8 text-7xl text-[#B89B5E]/25 leading-none select-none pointer-events-none"
                                style={{ fontFamily: "var(--font-playfair)" }}
                                aria-hidden="true"
                            >
                                "
                            </div>

                            <StarRating />

                            <p
                                className="text-[#2B2B2B]/80 text-sm md:text-base leading-relaxed mb-8 italic"
                                style={{ fontFamily: "var(--font-playfair)" }}
                            >
                                &ldquo;{quote}&rdquo;
                            </p>

                            <div className="flex items-center gap-3">
                                <div className="w-8 h-px bg-[#B89B5E]" />
                                <div>
                                    <p
                                        className="text-[#5B3A29] font-semibold text-sm"
                                        style={{ fontFamily: "var(--font-montserrat)" }}
                                    >
                                        {name}
                                    </p>
                                    <p
                                        className="text-[#2B2B2B]/50 text-xs tracking-wide"
                                        style={{ fontFamily: "var(--font-montserrat)" }}
                                    >
                                        {location}
                                    </p>
                                </div>
                            </div>

                            {/* Bottom gold accent */}
                            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#B89B5E]/40 to-transparent group-hover:via-[#B89B5E] transition-all duration-500" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
