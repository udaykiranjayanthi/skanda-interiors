"use client";

import { motion } from "framer-motion";
import {
    PHONE_NUMBER,
    PHONE_NUMBER_2,
    EMAIL,
    ADDRESS,
    WORKING_HOURS,
    WHATSAPP_URL,
    INSTAGRAM_URL,
} from "@/lib/constants";

const fadeUp = {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-80px" },
};

function ContactRow({
    icon,
    label,
    value,
    href,
}: {
    icon: React.ReactNode;
    label: string;
    value: string;
    href?: string;
}) {
    const content = (
        <div className="flex items-start gap-4 group">
            <div className="w-10 h-10 rounded-full border border-[#B89B5E]/40 flex items-center justify-center text-[#B89B5E] shrink-0 group-hover:bg-[#B89B5E] group-hover:text-white transition-all duration-300 mt-0.5">
                {icon}
            </div>
            <div className="flex-1 min-w-0">
                <p
                    className="text-[#B89B5E] text-[10px] uppercase tracking-widest mb-1"
                    style={{ fontFamily: "var(--font-cinzel)" }}
                >
                    {label}
                </p>
                <p
                    className="text-[#F5F1EA] text-sm leading-relaxed break-words"
                    style={{ fontFamily: "var(--font-montserrat)" }}
                >
                    {value}
                </p>
            </div>
        </div>
    );

    return href ? (
        <a href={href} className="block">
            {content}
        </a>
    ) : (
        <div>{content}</div>
    );
}

export default function Contact() {
    return (
        <section id="contact" className="section-padding bg-[#5B3A29]">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">

                {/* Header */}
                <div className="text-center mb-14">
                    <motion.span
                        {...fadeUp}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        className="inline-block text-[#B89B5E] text-xs uppercase tracking-[0.4em] mb-4"
                        style={{ fontFamily: "var(--font-cinzel)" }}
                    >
                        Get In Touch
                    </motion.span>
                    <motion.h2
                        {...fadeUp}
                        transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                        className="text-[#F5F1EA] gold-underline mb-2"
                        style={{
                            fontFamily: "var(--font-playfair)",
                            fontSize: "clamp(1.9rem, 4vw, 2.6rem)",
                            fontWeight: 600,
                        }}
                    >
                        Contact Us
                    </motion.h2>
                </div>

                {/* Two-column body */}
                <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-start">

                    {/* Left – Contact details */}
                    <motion.div
                        {...fadeUp}
                        transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
                        className="flex flex-col gap-7"
                    >
                        <ContactRow
                            icon={
                                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.1 1.22 2 2 0 012.11 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                                </svg>
                            }
                            label="Phone"
                            value="+91 97011 61430"
                            href={`tel:+${PHONE_NUMBER}`}
                        />
                        <ContactRow
                            icon={
                                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.1 1.22 2 2 0 012.11 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                                </svg>
                            }
                            label="Phone (Alt)"
                            value="+91 94945 37985"
                            href={`tel:+${PHONE_NUMBER_2}`}
                        />
                        <ContactRow
                            icon={
                                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" />
                                </svg>
                            }
                            label="Email"
                            value={EMAIL}
                            href={`mailto:${EMAIL}`}
                        />
                        <ContactRow
                            icon={
                                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" />
                                </svg>
                            }
                            label="Office Address"
                            value={ADDRESS}
                        />
                        <ContactRow
                            icon={
                                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                                    <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
                                </svg>
                            }
                            label="Working Hours"
                            value={WORKING_HOURS}
                        />
                    </motion.div>

                    {/* Right – WhatsApp CTA panel */}
                    <motion.div
                        {...fadeUp}
                        transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
                    >
                        <div className="border border-[#B89B5E]/30 p-8 md:p-10 text-center">
                            {/* WhatsApp icon circle */}
                            <div className="w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center mx-auto mb-6 shadow-lg">
                                <svg
                                    width="28"
                                    height="28"
                                    viewBox="0 0 24 24"
                                    fill="white"
                                    aria-hidden="true"
                                >
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                </svg>
                            </div>

                            <h3
                                className="text-[#F5F1EA] mb-3"
                                style={{
                                    fontFamily: "var(--font-playfair)",
                                    fontSize: "clamp(1.25rem, 3vw, 1.6rem)",
                                    fontWeight: 600,
                                }}
                            >
                                Let&apos;s Start Your Project
                            </h3>
                            <p
                                className="text-[#D8CFC4]/65 text-sm mb-8 leading-relaxed max-w-xs mx-auto"
                                style={{ fontFamily: "var(--font-montserrat)" }}
                            >
                                Reach out for a free consultation. We&apos;ll understand your vision
                                and craft a design plan tailored just for you.
                            </p>

                            <motion.a
                                href={WHATSAPP_URL}
                                target="_blank"
                                rel="noopener noreferrer"
                                id="contact-whatsapp-cta"
                                aria-label="Chat on WhatsApp"
                                whileHover={{ scale: 1.03 }}
                                whileTap={{ scale: 0.97 }}
                                className="inline-flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#1ea855] text-white w-full px-6 py-4 text-sm uppercase tracking-widest font-semibold transition-all duration-300 shadow-lg"
                                style={{ fontFamily: "var(--font-montserrat)" }}
                            >
                                <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                </svg>
                                Chat on WhatsApp
                            </motion.a>

                            {/* Instagram CTA */}
                            <motion.a
                                href={INSTAGRAM_URL}
                                target="_blank"
                                rel="noopener noreferrer"
                                id="contact-instagram-cta"
                                aria-label="Follow us on Instagram"
                                whileHover={{ scale: 1.03 }}
                                whileTap={{ scale: 0.97 }}
                                className="mt-3 inline-flex items-center justify-center gap-3 w-full px-6 py-3.5 text-sm uppercase tracking-widest font-semibold transition-all duration-300 text-white/80 hover:text-white"
                                style={{
                                    fontFamily: "var(--font-montserrat)",
                                    background: "transparent",
                                    border: "1px solid rgba(255,255,255,0.25)",
                                }}
                            >
                                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                                </svg>
                                Follow on Instagram
                            </motion.a>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
