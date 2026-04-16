import {
  Bot,
  BarChart2,
  ShieldCheck,
  Wrench,
  Lightbulb,
  Presentation,
  TrendingUp,
  Award,
  FolderOpen,
  Target,
} from "lucide-react";

const strengths = [
  { icon: Bot,          title: "Machine Learning & AI",         desc: "Building and deploying predictive models using Python, scikit-learn, TensorFlow, and Random Forest across classification, regression, and clustering tasks." },
  { icon: BarChart2,    title: "Data Analysis & Visualisation", desc: "Transforming raw datasets into clear insights using pandas, NumPy, Power BI, Tableau, and Matplotlib to support data-driven decision making." },
  { icon: ShieldCheck,  title: "Cybersecurity & Networking",    desc: "Conducting vulnerability assessments and penetration testing with Kali Linux, Nmap, and Metasploit. Configuring secure networks with TCP/IP, NAT, DHCP, and firewall rules." },
  { icon: Wrench,       title: "Technical Business Support",    desc: "Providing hands-on technical assistance, troubleshooting system and software issues, and bridging the gap between technical teams and business stakeholders." },
  { icon: Lightbulb,    title: "Problem Solving",               desc: "Breaking down complex problems methodically — from root cause analysis to prototype testing — with a research-first, iterate-fast mindset." },
  { icon: Presentation, title: "Communication & Presentation",  desc: "Delivering compelling presentations, design critiques, and executive summaries that translate technical findings into clear, actionable narratives." },
];

const stats = [
  { icon: Award,      value: "2",   label: "Degrees Earned" },
  { icon: FolderOpen, value: "5+",  label: "Projects Completed" },
  { icon: Target,     value: "4",   label: "Certifications" },
  { icon: TrendingUp, value: "90%", label: "Best Model Accuracy" },
];

export default function About() {
  return (
    <section id="about-me" className="py-24">
      <div className="max-w-6xl mx-auto px-6">

        <p className="text-sm font-medium tracking-[0.2em] uppercase gold-accent mb-2">
          Who I am
        </p>
        <h2 className="section-heading">About Me</h2>
        <div className="section-divider" />

        {/* Intro */}
        <div className="max-w-3xl mb-14">
          <h3 className="font-playfair text-2xl font-bold text-white mb-5 leading-snug">
            Data Scientist & Technical Business Support Specialist delivering actionable insights.
          </h3>
          <p className="text-slate-400 leading-relaxed mb-4">
             I’m <span className="text-white font-medium">Letsoalo Sanos Neo</span>,
              a Computer Science Honours graduate specializing in data science,
             machine learning, and technical business support.
             I help businesses convert raw data into meaningful insights that support smarter decisions and measurable outcomes.

          </p>
          <p className="text-slate-400 leading-relaxed mb-4">
             With a strong foundation in statistics, predictive modeling, and data analysis,
             I have developed solutions across classification, regression,
             and data visualization using tools such as Python, Power BI, and modern machine learning frameworks.
          </p>
          <p className="text-slate-400 leading-relaxed">
           Currently training in Technical Business Support at Umuzi, 
           I bridge the gap between technical teams and business needs,ensuring solutions are practical,
           scalable, and aligned with real-world objectives.
          </p>
          <div className="flex flex-wrap gap-3 mt-8">
            <a href="#contact"   className="btn-primary">Let&apos;s Talk</a>
            <a href="#portfolio" className="btn-outline">View My Work</a>
          </div>
        </div>

        {/* Key Strengths */}
        <p className="text-sm font-medium tracking-[0.2em] uppercase gold-accent mb-2">
          What I bring
        </p>
        <h3 className="font-playfair text-2xl font-bold text-white mb-8">Key Strengths</h3>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
          {strengths.map((s) => {
            const Icon = s.icon;
            return (
              <div key={s.title} className="card-base flex gap-4 items-start">
                <div
                  className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center"
                  style={{ background: "var(--color-blue-glow)", border: "1px solid rgba(59,130,246,0.2)" }}
                >
                  <Icon size={18} style={{ color: "var(--color-blue-light)" }} />
                </div>
                <div>
                  <h4 className="font-semibold text-white text-sm mb-1.5">{s.title}</h4>
                  <p className="text-slate-400 text-xs leading-relaxed">{s.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Stats strip */}
        <div className="card-base">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <div key={stat.label}>
                  <div className="flex justify-center mb-2">
                    <Icon size={20} style={{ color: "var(--color-blue-light)" }} />
                  </div>
                  <p className="font-playfair text-3xl font-bold mb-1"
                    style={{ color: "var(--color-blue-light)" }}>
                    {stat.value}
                  </p>
                  <p className="text-slate-500 text-xs uppercase tracking-wider">{stat.label}</p>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}