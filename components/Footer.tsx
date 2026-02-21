"use client";

import { INSTAGRAM_URL, FACEBOOK_URL, SITE_NAME } from "@/lib/constants";

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="bg-[#2B2B2B] py-8">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    {/* Logo Mark */}
                    <div className="flex flex-col items-center md:items-start">
                        <span
                            className="text-[#F5F1EA] text-sm font-bold tracking-widest"
                            style={{ fontFamily: "var(--font-cinzel)" }}
                        >
                            {SITE_NAME.toUpperCase()}
                        </span>
                        <span
                            className="text-[#B89B5E] text-[9px] tracking-[0.35em] uppercase"
                            style={{ fontFamily: "var(--font-montserrat)" }}
                        >
                            Luxury Interior Studio
                        </span>
                    </div>

                    {/* Center */}
                    <p
                        className="text-[#F5F1EA]/40 text-xs tracking-wide text-center"
                        style={{ fontFamily: "var(--font-montserrat)" }}
                    >
                        © {year} {SITE_NAME}. All rights reserved.
                    </p>

                    {/* Links */}
                    <div className="flex items-center gap-6">
                        <a
                            href="#"
                            className="text-[#F5F1EA]/40 hover:text-[#B89B5E] text-xs uppercase tracking-widest transition-colors"
                            style={{ fontFamily: "var(--font-montserrat)" }}
                        >
                            Privacy Policy
                        </a>

                        {/* Instagram */}
                        <a
                            href={INSTAGRAM_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Follow us on Instagram"
                            className="text-[#F5F1EA]/40 hover:text-[#B89B5E] transition-colors"
                        >
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
                                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                            </svg>
                        </a>

                        {/* Facebook */}
                        <a
                            href={FACEBOOK_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Follow us on Facebook"
                            className="text-[#F5F1EA]/40 hover:text-[#B89B5E] transition-colors"
                        >
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
