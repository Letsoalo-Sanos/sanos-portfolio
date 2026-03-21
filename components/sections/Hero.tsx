import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center pt-16 overflow-hidden"
    >
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(#c9a84c 1px, transparent 1px), linear-gradient(90deg, #c9a84c 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Radial glow */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[500px] rounded-full opacity-10 blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(ellipse, #c9a84c 0%, transparent 70%)" }}
      />

      <div className="relative max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-16 items-center">
        {/* Text */}
        <div>
          <p className="animate-fade-up animate-delay-100 text-sm font-medium tracking-[0.2em] uppercase gold-accent mb-4">
            Data Scientist · ML Engineer · Freelancer
          </p>

          <h1 className="animate-fade-up animate-delay-200 font-playfair text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
            Letsoalo
            <br />
            <span className="gold-accent">Sanos Neo</span>
          </h1>

          <p className="animate-fade-up animate-delay-300 text-slate-400 text-lg leading-relaxed mb-4 max-w-lg">
            A Computer Science Honours graduate from Limpopo, South Africa,
            on a mission to use data and machine learning to solve problems
            that actually matter — from predicting system failures to uncovering
            insights that drive smarter decisions.
          </p>
          <p className="animate-fade-up animate-delay-300 text-slate-400 text-base leading-relaxed mb-8 max-w-lg">
            I freelance across ML modelling, data visualisation, and cybersecurity,
            and I care deeply about contributing to a growing South African tech
            ecosystem. If data tells a story, I want to be the one who finds it.
          </p>

          <div className="animate-fade-up animate-delay-400 flex flex-wrap gap-4">
            <a href="#projects" className="btn-primary">
              View Projects
            </a>
            <a href="#contact" className="btn-outline">
              Hire Me
            </a>
          </div>

          {/* Quick stats */}
          <div className="animate-fade-up animate-delay-400 mt-12 flex flex-wrap gap-10">
            {[
              { value: "BSc Hons", label: "Computer Science" },
              { value: "90%",      label: "RF Model Accuracy" },
              { value: "5+",       label: "Projects Completed" },
              { value: "4",        label: "Certifications" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="font-playfair text-2xl font-bold gold-accent">{stat.value}</p>
                <p className="text-slate-500 text-xs mt-0.5">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Profile card */}
        <div className="animate-fade-up animate-delay-300 flex justify-center">
          <div className="card-base w-full max-w-sm">
            {/* Profile photo */}
            <div className="relative w-28 h-28 mx-auto mb-5">
              <Image
                src="/assets/photo.jpg"
                alt="Letsoalo Sanos Neo"
                fill
                className="rounded-full object-cover object-top border-2 border-amber-600/40"
                priority
              />
            </div>

            <h2 className="font-playfair text-xl font-bold text-white text-center mb-1">
              Letsoalo Sanos Neo
            </h2>
            <p className="text-center gold-accent text-sm mb-1">
              Data Scientist & ML Engineer
            </p>
            <p className="text-center text-slate-500 text-xs mb-5">
              Available for freelance work
            </p>

            {/* Availability badge */}
            <div className="flex justify-center mb-5">
              <span className="flex items-center gap-2 text-xs text-emerald-400 bg-emerald-900/30 border border-emerald-800/50 px-3 py-1.5 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Open to opportunities
              </span>
            </div>

            <div className="space-y-3 text-sm">
              {[
                { icon: "📍", text: "Polokwane, Limpopo, South Africa" },
                { icon: "🎓", text: "BSc Honours — Computer Science, UL" },
                { icon: "💼", text: "Technical Business Support @ Umuzi" },
                { icon: "✉️", text: "letsoalo.sanos@gmail.com" },
              ].map((item) => (
                <div key={item.text} className="flex items-start gap-3 text-slate-400">
                  <span className="text-base flex-shrink-0">{item.icon}</span>
                  <span>{item.text}</span>
                </div>
              ))}
            </div>

            <div className="mt-5 flex gap-3 justify-center">
              <a
                href="https://github.com/Letsoalo-Sanos"
                target="_blank"
                rel="noopener noreferrer"
                className="tag hover:opacity-80 transition-opacity cursor-pointer"
              >
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/sanos-letsoalo"
                target="_blank"
                rel="noopener noreferrer"
                className="tag hover:opacity-80 transition-opacity cursor-pointer"
              >
                LinkedIn
              </a>
              <a
                href="/assets/LETSOALO_SANOS_NEO_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="tag hover:opacity-80 transition-opacity cursor-pointer"
              >
                CV ↓
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}