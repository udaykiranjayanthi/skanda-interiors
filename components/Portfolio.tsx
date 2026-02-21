"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination, EffectFade } from "swiper/modules";
import Image from "next/image";
import { PORTFOLIO_IMAGES } from "@/lib/constants";

// Swiper CSS
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
            <div className="max-w-7xl mx-auto px-6">
                {/* Header */}
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
                        className="text-[#5B3A29] gold-underline"
                        style={{
                            fontFamily: "var(--font-playfair)",
                            fontSize: "clamp(2rem, 4vw, 2.75rem)",
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

                {/* Carousel */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
                    className="relative"
                >
                    <Swiper
                        modules={[Autoplay, Navigation, Pagination]}
                        spaceBetween={0}
                        slidesPerView={1}
                        autoplay={{ delay: 5000, disableOnInteraction: false }}
                        navigation
                        pagination={{ clickable: true }}
                        loop
                        className="w-full shadow-2xl"
                        style={{ borderRadius: "2px" }}
                    >
                        {PORTFOLIO_IMAGES.map(({ src, alt, label }) => (
                            <SwiperSlide key={src}>
                                <div className="relative w-full" style={{ paddingBottom: "52%" }}>
                                    <Image
                                        src={src}
                                        alt={alt}
                                        fill
                                        className="object-cover"
                                        sizes="100vw"
                                        loading="lazy"
                                    />
                                    {/* Caption */}
                                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-8">
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
            </div>
        </section>
    );
}
