"use client";

import { INSTAGRAM_URL, FACEBOOK_URL, SITE_NAME } from "@/lib/constants";

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="bg-[#2B2B2B] border-t border-white/5 py-8">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="flex flex-col md:flex-row items-center justify-between gap-5">

                    {/* Brand */}
                    <div className="flex flex-col items-center md:items-start leading-none">
                        <span
                            className="text-[#F5F1EA] text-sm font-bold tracking-widest"
                            style={{ fontFamily: "var(--font-cinzel)" }}
                        >
                            {SITE_NAME.toUpperCase()}
                        </span>
                        <span
                            className="text-[#B89B5E] text-[9px] tracking-[0.35em] uppercase mt-0.5"
                            style={{ fontFamily: "var(--font-montserrat)" }}
                        >
                            Transform Space With Style
                        </span>
                    </div>

                    {/* Copyright — centred */}
                    <p
                        className="text-[#F5F1EA]/35 text-xs tracking-wide text-center order-last md:order-none"
                        style={{ fontFamily: "var(--font-montserrat)" }}
                    >
                        © {year} {SITE_NAME}. All rights reserved.
                    </p>

                    {/* Links + socials */}
                    <div className="flex items-center gap-5">
                        <a
                            href="#"
                            className="text-[#F5F1EA]/40 hover:text-[#B89B5E] text-[11px] uppercase tracking-widest transition-colors"
                            style={{ fontFamily: "var(--font-montserrat)" }}
                        >
                            Privacy Policy
                        </a>

                        <div className="w-px h-4 bg-white/10" />

                        <a
                            href={INSTAGRAM_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Follow us on Instagram"
                            className="text-[#F5F1EA]/40 hover:text-[#B89B5E] transition-colors"
                        >
                            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
                                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                            </svg>
                        </a>

                        {/* <a
                            href={FACEBOOK_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Follow us on Facebook"
                            className="text-[#F5F1EA]/40 hover:text-[#B89B5E] transition-colors"
                        >
                            <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                            </svg>
                        </a> */}
                    </div>

                </div>
            </div>
        </footer>
    );
}
