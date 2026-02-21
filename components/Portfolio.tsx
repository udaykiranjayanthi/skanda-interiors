"use client";

import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import Image from "next/image";
import { PORTFOLIO_IMAGES } from "@/lib/constants";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const fadeUp = {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-80px" },
};

export default function Portfolio() {
    return (
        <section id="portfolio" className="section-padding bg-[#F5F1EA]">
            {/* Section header — constrained */}
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="text-center mb-14">
                    <motion.span
                        {...fadeUp}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        className="inline-block text-[#B89B5E] text-xs uppercase tracking-[0.4em] mb-4"
                        style={{ fontFamily: "var(--font-cinzel)" }}
                    >
                        Our Work
                    </motion.span>
                    <motion.h2
                        {...fadeUp}
                        transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                        className="text-[#5B3A29] gold-underline mb-2"
                        style={{
                            fontFamily: "var(--font-playfair)",
                            fontSize: "clamp(1.9rem, 4vw, 2.6rem)",
                            fontWeight: 600,
                        }}
                    >
                        Portfolio
                    </motion.h2>
                    <motion.p
                        {...fadeUp}
                        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                        className="text-[#2B2B2B]/60 mt-6 text-base max-w-xl mx-auto"
                        style={{ fontFamily: "var(--font-montserrat)" }}
                    >
                        A curated selection of our most celebrated interior transformations.
                    </motion.p>
                </div>
            </div>

            {/* Carousel — full-width, no horizontal container padding */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
                className="w-full shadow-2xl"
            >
                <Swiper
                    modules={[Autoplay, Navigation, Pagination]}
                    spaceBetween={0}
                    slidesPerView={1}
                    autoplay={{ delay: 5000, disableOnInteraction: false }}
                    navigation
                    pagination={{ clickable: true }}
                    loop
                    className="w-full"
                >
                    {PORTFOLIO_IMAGES.map(({ src, alt, label }) => (
                        <SwiperSlide key={src}>
                            {/* Responsive 16:9-ish ratio via aspect-ratio */}
                            <div className="relative w-full" style={{ aspectRatio: "16/9" }}>
                                <Image
                                    src={src}
                                    alt={alt}
                                    fill
                                    className="object-cover"
                                    sizes="100vw"
                                    loading="lazy"
                                />
                                {/* Caption gradient + text */}
                                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/75 to-transparent pt-20 pb-10 px-8 md:px-16">
                                    <div className="flex items-center gap-3">
                                        <div className="w-6 h-px bg-[#B89B5E]" />
                                        <p
                                            className="text-white text-sm md:text-base tracking-widest uppercase"
                                            style={{ fontFamily: "var(--font-cinzel)" }}
                                        >
                                            {label}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </motion.div>
        </section>
    );
}
