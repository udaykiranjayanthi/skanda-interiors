"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SERVICES } from "@/lib/constants";

const fadeUp = {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-80px" },
};

export default function Services() {
    return (
        <section id="services" className="section-padding bg-[#2B2B2B]">
            <div className="max-w-7xl mx-auto px-6">
                {/* Header */}
                <div className="text-center mb-16">
                    <motion.span
                        {...fadeUp}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        className="inline-block text-[#B89B5E] text-xs uppercase tracking-[0.4em] mb-4"
                        style={{ fontFamily: "var(--font-cinzel)" }}
                    >
                        What We Do
                    </motion.span>
                    <motion.h2
                        {...fadeUp}
                        transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                        className="text-[#F5F1EA] gold-underline"
                        style={{
                            fontFamily: "var(--font-playfair)",
                            fontSize: "clamp(2rem, 4vw, 2.75rem)",
                            fontWeight: 600,
                        }}
                    >
                        Our Services
                    </motion.h2>
                </div>

                {/* Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {SERVICES.map(({ title, description, image }, i) => (
                        <motion.div
                            key={title}
                            {...fadeUp}
                            transition={{ duration: 0.6, ease: "easeOut", delay: i * 0.1 }}
                            className="group relative overflow-hidden bg-[#1a1a1a] rounded-sm shadow-xl cursor-default"
                        >
                            {/* Image */}
                            <div className="relative h-56 overflow-hidden">
                                <Image
                                    src={image}
                                    alt={title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    loading="lazy"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#2B2B2B]/90 via-transparent to-transparent" />
                            </div>

                            {/* Gold border on hover */}
                            <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#B89B5E] transition-all duration-500 pointer-events-none rounded-sm" />

                            {/* Content */}
                            <div className="p-6">
                                <div className="flex items-center gap-3 mb-3">
                                    <div className="w-6 h-px bg-[#B89B5E]" />
                                    <h3
                                        className="text-[#F5F1EA] text-lg font-semibold group-hover:text-[#B89B5E] transition-colors duration-300"
                                        style={{ fontFamily: "var(--font-playfair)" }}
                                    >
                                        {title}
                                    </h3>
                                </div>
                                <p
                                    className="text-[#D8CFC4]/70 text-sm leading-relaxed"
                                    style={{ fontFamily: "var(--font-montserrat)" }}
                                >
                                    {description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
