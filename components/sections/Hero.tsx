"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

const TYPED_ITEMS = ["Freelancer", "Data Scientist", "Technical Business Support Specialist",  "Problem Solver"];

export default function Hero() {
  const typedRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    let itemIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let timer: ReturnType<typeof setTimeout>;

    function type() {
      const current = TYPED_ITEMS[itemIndex];
      if (isDeleting) { charIndex--; } else { charIndex++; }
      if (typedRef.current) {
        typedRef.current.textContent = current.substring(0, charIndex);
      }
      let delay = isDeleting ? 60 : 100;
      if (!isDeleting && charIndex === current.length) {
        delay = 1800;
        isDeleting = true;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        itemIndex = (itemIndex + 1) % TYPED_ITEMS.length;
        delay = 400;
      }
      timer = setTimeout(type, delay);
    }

    timer = setTimeout(type, 600);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="about" className="hero-section">
      {/* Background image */}
      <Image
        src="/assets/hero-bgg.jpeg"
        alt="Hero background"
        fill
        priority
        className="hero-bgg-image"
      />

      {/* Dark overlay */}
      <div className="hero-overlay" />

      {/* Content */}
      <div className="hero-content">
        <h2 className="hero-name">Letsoalo Sanos Neo</h2>

        <p className="hero-subtitle">
          I&apos;m{" "}
          <span ref={typedRef} className="hero-typed" />
          <span className="hero-cursor" />
        </p>

        {/* Social links */}
        <div className="hero-socials">
          {[
            {
              href: "https://github.com/Letsoalo-Sanos",
              label: "GitHub",
              svg: (
                <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
              ),
            },
            {
              href: "https://linkedin.com/in/sanos-letsoalo",
              label: "LinkedIn",
              svg: (
                <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              ),
            },
            {
              href: "mailto:letsoalo.sanos@gmail.com",
              label: "Email",
              svg: (
                <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              ),
            },
            {
              href: "https://twitter.com/",
              label: "Twitter / X",
              svg: (
                <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              ),
            },
          ].map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className="hero-social-link"
            >
              {social.svg}
            </a>
          ))}
        </div>


      </div>
    </section>
  );
}