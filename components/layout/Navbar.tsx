"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  House,
  User,
  BriefcaseBusiness,
  Zap,
  Images,
  FileText,
  BadgeCheck,
  Mail,
  BookOpen,
} from "lucide-react";

const navLinks = [
  { label: "Home",           href: "#about",         icon: House },
  { label: "About",          href: "#about-me",       icon: User },
  { label: "Services",       href: "#services",       icon: BriefcaseBusiness },
  { label: "Skills",         href: "#skills",         icon: Zap },
  { label: "Portfolio",      href: "#portfolio",      icon: Images },
  { label: "Blog",           href: "#blog",           icon: BookOpen },
  { label: "Resume",         href: "#resume",         icon: FileText },
  { label: "Certifications", href: "#certifications", icon: BadgeCheck },
  { label: "Contact",        href: "#contact",        icon: Mail },
];

const socialLinks = [
  {
    href: "https://github.com/Letsoalo-Sanos",
    label: "GitHub",
    svg: (
      <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
      </svg>
    ),
  },
  {
    href: "https://linkedin.com/in/sanos-letsoalo",
    label: "LinkedIn",
    svg: (
      <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    href: "https://twitter.com/",
    label: "Twitter / X",
    svg: (
      <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    href: "mailto:letsoalo.sanos@gmail.com",
    label: "Email",
    svg: (
      <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
];

export default function Navbar() {
  const [scrolled,      setScrolled]      = useState(false);
  const [menuOpen,      setMenuOpen]      = useState(false);
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sectionIds = navLinks.map((l) => l.href.replace("#", ""));
    const observers: IntersectionObserver[] = [];
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id); },
        { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
      );
      observer.observe(el);
      observers.push(observer);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const blue = "var(--color-blue)";

  return (
    <>
      {/* ══════════════════════════════════════
          LEFT SIDEBAR — desktop
          ══════════════════════════════════════ */}
      <aside
        className="sidebar-aside hidden lg:flex fixed left-0 top-0 h-full w-72 z-50 flex-col backdrop-blur-md"
        style={{
          background: "var(--bg)",
          borderRight: "1px solid var(--border)",
        }}
      >

        {/* Profile block */}
        <div
          className="flex flex-col items-center pt-8 pb-5 px-4 flex-shrink-0"
          style={{ borderBottom: "1px solid var(--border)" }}
        >
          <div className="relative w-28 h-28 mb-4">
            <Image
              src="/assets/photo.jpg"
              alt="Letsoalo Sanos Neo"
              fill
              className="rounded-full object-cover object-top"
              style={{ border: "6px solid var(--bg-light)" }}
              priority
            />
          </div>

          <Link
            href="/"
            className="font-playfair text-lg font-bold text-center leading-snug hover:opacity-80 transition-opacity"
            style={{ color: "var(--text)" }}
          >
            Letsoalo Sanos Neo
          </Link>

          <div className="flex items-center gap-2 mt-4">
            {socialLinks.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target={s.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                aria-label={s.label}
                className="sidebar-social-btn w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200"
                style={{ color: "var(--text-muted)" }}
              >
                {s.svg}
              </a>
            ))}
          </div>
        </div>

        {/* Nav */}
        <nav className="sidebar-nav flex-1 px-3 py-4 flex flex-col gap-0.5 overflow-y-auto">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.replace("#", "");
            const Icon = link.icon;
            return (
              <a
                key={link.href}
                href={link.href}
                className="flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200"
                style={
                  isActive
                    ? {
                        background: "var(--accent-glow)",
                        color: "var(--text)",
                        borderLeft: `3px solid var(--accent)`,
                        paddingLeft: "13px",
                      }
                    : {
                        color: "var(--text-muted)",
                      }
                }
                onMouseEnter={(e) => {
                  if (!isActive) {
                    (e.currentTarget as HTMLElement).style.color = "var(--text)";
                    (e.currentTarget as HTMLElement).style.background = "var(--bg-light)";
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive) {
                    (e.currentTarget as HTMLElement).style.color = "var(--text-muted)";
                    (e.currentTarget as HTMLElement).style.background = "transparent";
                  }
                }}
              >
                <Icon
                  size={18}
                  strokeWidth={isActive ? 2.5 : 1.8}
                  style={{ color: isActive ? "var(--accent)" : "currentColor", flexShrink: 0 }}
                />
                {link.label}
                {isActive && (
                  <span
                    className="ml-auto w-1.5 h-1.5 rounded-full flex-shrink-0"
                    style={{ background: "var(--accent)" }}
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* Bottom CTA */}
        <div
          className="px-4 py-6 flex-shrink-0"
          style={{ borderTop: "1px solid var(--border)" }}
        >
          <a
            href="/assets/LETSOALO SANOS NEO_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-sm w-full text-center block"
          >
            Download CV
          </a>
        </div>
      </aside>

      {/* ══════════════════════════════════════
          TOP BAR — mobile only
          ══════════════════════════════════════ */}
      <header
        className="lg:hidden fixed top-0 inset-x-0 z-50 transition-all duration-300"
        style={{
          background: scrolled ? "var(--bg)" : "var(--bg)",
          borderBottom: scrolled ? "1px solid var(--border)" : "none",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          boxShadow: scrolled ? "0 4px 24px rgba(0,0,0,0.2)" : "none",
        }}
      >
        <div className="px-6 h-16 flex items-center justify-between">
          <Link
            href="/"
            className="font-playfair text-base font-bold"
            style={{ color: "var(--text)" }}
          >
            Letsoalo Sanos Neo
          </Link>
          <button
            style={{ color: "var(--text-muted)" }}
            className="hover:opacity-80 transition-opacity"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {menuOpen && (
          <div
            className="px-4 py-3 flex flex-col gap-1 max-h-[80vh] overflow-y-auto"
            style={{
              background: "var(--bg)",
              borderTop: "1px solid var(--border)",
            }}
          >
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace("#", "");
              const Icon = link.icon;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center gap-3 py-2.5 px-3 rounded-lg text-sm transition-colors"
                  style={
                    isActive
                      ? { color: "var(--text)", background: "var(--accent-glow)" }
                      : { color: "var(--text-muted)" }
                  }
                >
                  <Icon
                    size={16}
                    style={{ color: isActive ? "var(--accent)" : "currentColor", flexShrink: 0 }}
                  />
                  {link.label}
                </a>
              );
            })}

            <div
              className="flex items-center gap-3 px-3 pt-3 mt-1"
              style={{ borderTop: "1px solid var(--border)" }}
            >
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="transition-colors"
                  style={{ color: "var(--text-muted)" }}
                >
                  {s.svg}
                </a>
              ))}
            </div>

            <a
              href="/assets/LETSOALO_SANOS_NEO_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-sm text-center mt-2"
            >
              Download CV
            </a>
          </div>
        )}
      </header>
    </>
  );
}