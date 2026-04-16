"use client";

import { useState, useId } from "react";
import { Mail, Linkedin, Github, MapPin, Send, RotateCcw } from "lucide-react";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const contactInfo = [
  { icon: Mail,     label: "Email",    value: "letsoalo.sanos@gmail.com",       href: "mailto:letsoalo.sanos@gmail.com" },
  { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/sanos-letsoalo", href: "https://linkedin.com/in/sanos-letsoalo" },
  { icon: Github,   label: "GitHub",   value: "github.com/Letsoalo-Sanos",      href: "https://github.com/Letsoalo-Sanos" },
  { icon: MapPin,   label: "Location", value: "Pretoria, South Africa",          href: undefined },
];

export default function Contact() {
  const id = useId();
  const [form, setForm]         = useState<FormData>({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus]     = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async () => {
    if (!form.name || !form.email || !form.message) {
      setErrorMsg("Please fill in name, email and message.");
      return;
    }
    setStatus("loading");
    setErrorMsg("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Server error");
      setStatus("success");
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch {
      setStatus("error");
      setErrorMsg("Something went wrong. Please email me directly.");
    }
  };

  const inputClass = "w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2.5 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-blue-500 transition-colors";

  return (
    <section id="contact" className="py-24 bg-slate-900/40">
      <div className="max-w-5xl mx-auto px-6">

        <p className="text-sm font-medium tracking-[0.2em] uppercase gold-accent mb-2">
          Let&apos;s connect
        </p>
        <h2 className="section-heading">Get In Touch</h2>
        <div className="section-divider" />

        <div className="grid md:grid-cols-2 gap-12 items-start">

          {/* Left — contact info */}
          <div>
            <p className="text-slate-400 leading-relaxed mb-8">
              I&apos;m open to data science and analyst opportunities, freelance projects, and
              collaborations. Whether you have a question or just want to say hello — my
              inbox is always open.
            </p>
            <div className="space-y-5">
              {contactInfo.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.label} className="flex items-center gap-4">
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ background: "var(--color-blue-glow)", border: "1px solid rgba(59,130,246,0.2)" }}
                    >
                      <Icon size={16} style={{ color: "var(--color-blue-light)" }} />
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 uppercase tracking-wider mb-0.5">{item.label}</p>
                      {item.href ? (
                        <a
                          href={item.href}
                          target={item.href.startsWith("http") ? "_blank" : undefined}
                          rel="noopener noreferrer"
                          className="text-sm text-slate-300 hover:text-white transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-sm text-slate-300">{item.value}</p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right — form */}
          <div className="card-base">
            {status === "success" ? (
              <div className="text-center py-10">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                  style={{ background: "rgba(34,197,94,0.1)", border: "1px solid rgba(34,197,94,0.3)" }}
                >
                  <Send size={24} style={{ color: "#22c55e" }} />
                </div>
                <h3 className="font-playfair text-xl font-bold text-white mb-2">Message Sent!</h3>
                <p className="text-slate-400 text-sm mb-6">
                  Thanks for reaching out. I&apos;ll get back to you soon.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="btn-outline text-sm flex items-center gap-2 mx-auto"
                  suppressHydrationWarning
                >
                  <RotateCcw size={14} />
                  Send Another
                </button>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor={`${id}-name`} className="block text-xs text-slate-500 mb-1.5 uppercase tracking-wider">
                      Name *
                    </label>
                    <input
                      id={`${id}-name`}
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      autoComplete="off"
                      suppressHydrationWarning
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label htmlFor={`${id}-email`} className="block text-xs text-slate-500 mb-1.5 uppercase tracking-wider">
                      Email *
                    </label>
                    <input
                      id={`${id}-email`}
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      autoComplete="off"
                      suppressHydrationWarning
                      className={inputClass}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor={`${id}-subject`} className="block text-xs text-slate-500 mb-1.5 uppercase tracking-wider">
                    Subject
                  </label>
                  <input
                    id={`${id}-subject`}
                    type="text"
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    placeholder="What's this about?"
                    autoComplete="off"
                    suppressHydrationWarning
                    className={inputClass}
                  />
                </div>

                <div>
                  <label htmlFor={`${id}-message`} className="block text-xs text-slate-500 mb-1.5 uppercase tracking-wider">
                    Message *
                  </label>
                  <textarea
                    id={`${id}-message`}
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={5}
                    placeholder="Tell me about your project or opportunity..."
                    suppressHydrationWarning
                    className={`${inputClass} resize-none`}
                  />
                </div>

                {errorMsg && <p className="text-red-400 text-xs">{errorMsg}</p>}

                <button
                  onClick={handleSubmit}
                  disabled={status === "loading"}
                  suppressHydrationWarning
                  className="btn-primary w-full disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  <Send size={15} />
                  {status === "loading" ? "Sending…" : "Send Message"}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}