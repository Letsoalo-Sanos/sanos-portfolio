import {
  Briefcase,
  GraduationCap,
  MapPin,
  Calendar,
  Download,
  CheckCircle,
} from "lucide-react";

const experience = [
  {
    role: "Technical Business Support Trainee",
    company: "Umuzi",
    location: "Remote",
    period: "Nov 2025 – Present",
    type: "Full-time",
    highlights: [
      "Engaging with modules on employability, design thinking, AI accelerator, and Wealthy Me.",
      "Facilitated improved teamwork and productivity in creating prototypes through effective use of Figma.",
      "Solved industry-related problems through research, prototyping, and user-testing.",
      "Delivered compelling presentations and engaged in design critiques, improving communication effectiveness.",
      "Instilled critical work-readiness skills such as communication, teamwork, and time management.",
    ],
  },
];

const education = [
  {
    degree: "BSc Honours in Computer Science",
    institution: "University of Limpopo",
    location: "Mankweng, Limpopo",
    period: "Feb 2024 – Nov 2024",
    modules: ["Research Project", "Databases", "Advanced Operating Systems", "Computer Networks", "Computer Security"],
  },
  {
    degree: "BSc in Mathematical Science",
    institution: "University of Limpopo",
    location: "Mankweng, Limpopo",
    period: "Feb 2020 – Nov 2023",
    modules: ["Data Structures", "Artificial Intelligence", "Computer Architecture", "Computer Networks", "Operating Systems", "Linear Algebra", "Statistical Inference", "Abstract Algebra"],
  },
];

export default function Resume() {
  return (
    <section id="resume" className="py-24">
      <style>{`
        /* ── Timeline layout ── */
        .tl-section { position: relative; padding-left: 28px; }
        .tl-section::before {
          content: "";
          position: absolute;
          left: 0;
          top: 8px;
          bottom: 0;
          width: 1px;
          background: linear-gradient(to bottom, rgba(59,130,246,0.5), rgba(59,130,246,0.05));
        }
        .tl-item { position: relative; margin-bottom: 40px; }
        .tl-item:last-child { margin-bottom: 0; }
        .tl-dot {
          position: absolute;
          left: -34px;
          top: 6px;
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: var(--color-blue-light, #60a5fa);
          border: 2px solid rgba(15,23,42,1);
          box-shadow: 0 0 0 3px rgba(59,130,246,0.2);
        }
        .tl-dot-edu {
          background: #a78bfa;
          box-shadow: 0 0 0 3px rgba(167,139,250,0.2);
        }

        /* ── Entry header ── */
        .entry-header {
          display: flex;
          flex-direction: column;
          gap: 10px;
          padding-bottom: 14px;
          border-bottom: 1px solid rgba(255,255,255,0.05);
          margin-bottom: 14px;
        }
        @media (min-width: 640px) {
          .entry-header {
            flex-direction: row;
            align-items: flex-start;
            justify-content: space-between;
          }
        }
        .entry-title { font-size: 16px; font-weight: 600; color: #f1f5f9; line-height: 1.3; }
        .entry-org { font-size: 13px; margin-top: 2px; }
        .entry-meta {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 5px;
          flex-shrink: 0;
        }
        @media (min-width: 640px) {
          .entry-meta { align-items: flex-end; }
        }
        .meta-pill {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          font-size: 11px;
          padding: 3px 10px;
          border-radius: 99px;
          white-space: nowrap;
        }
        .pill-date   { background: rgba(30,41,59,0.9); color: #94a3b8; border: 1px solid rgba(255,255,255,0.07); }
        .pill-active { background: rgba(16,62,48,0.6); color: #34d399; border: 1px solid rgba(52,211,153,0.25); }
        .pill-loc    { background: transparent; color: #64748b; padding: 0; border: none; gap: 3px; }

        /* ── Highlights ── */
        .highlight-list { list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; gap: 8px; }
        .highlight-item {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          font-size: 13px;
          color: #94a3b8;
          line-height: 1.6;
        }
        .highlight-icon { flex-shrink: 0; margin-top: 3px; }

        /* ── Module tags ── */
        .module-label {
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #475569;
          margin-bottom: 10px;
        }
        .module-grid { display: flex; flex-wrap: wrap; gap: 6px; }
        .module-tag {
          font-size: 11px;
          color: #94a3b8;
          background: rgba(148,163,184,0.06);
          border: 1px solid rgba(148,163,184,0.12);
          border-radius: 4px;
          padding: 3px 10px;
        }

        /* ── Section heading row ── */
        .section-row {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 28px;
        }
        .section-icon-wrap {
          width: 36px; height: 36px;
          border-radius: 8px;
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
        }
        .section-title { font-size: 20px; font-weight: 700; color: #f1f5f9; letter-spacing: -0.02em; }
        .section-rule { flex: 1; height: 1px; background: linear-gradient(to right, rgba(255,255,255,0.08), transparent); }

        /* ── Download btn override ── */
        .dl-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 13px;
          font-weight: 500;
          padding: 9px 20px;
          border-radius: 8px;
          border: 1px solid rgba(59,130,246,0.35);
          color: #93c5fd;
          background: rgba(59,130,246,0.08);
          text-decoration: none;
          transition: background 0.2s, border-color 0.2s;
        }
        .dl-btn:hover { background: rgba(59,130,246,0.16); border-color: rgba(59,130,246,0.55); }
      `}</style>

      <div className="px-6">

        {/* Page header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-14">
          <div>
            <p className="text-sm font-medium tracking-[0.2em] uppercase gold-accent mb-2">My background</p>
            <h2 className="section-heading" style={{ marginBottom: 0 }}>Resume</h2>
            <div className="section-divider" style={{ marginBottom: 0 }} />
          </div>
          <a
            href="/assets/LETSOALO SANOS NEO_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="dl-btn self-start"
          >
            <Download size={14} />
            Download PDF
          </a>
        </div>

        {/* ── Work Experience ── */}
        <div className="mb-16">
          <div className="section-row">
            <div
              className="section-icon-wrap"
              style={{ background: "var(--color-blue-glow)", border: "1px solid rgba(59,130,246,0.2)" }}
            >
              <Briefcase size={15} style={{ color: "var(--color-blue-light)" }} />
            </div>
            <span className="section-title">Work Experience</span>
            <div className="section-rule" />
          </div>

          <div className="tl-section">
            {experience.map((job) => (
              <div key={job.role} className="tl-item">
                <div className="tl-dot" />
                <div className="entry-header">
                  <div>
                    <p className="entry-title">{job.role}</p>
                    <p className="entry-org gold-accent">{job.company}</p>
                    <span className="meta-pill pill-loc" style={{ marginTop: 4 }}>
                      <MapPin size={10} />
                      {job.location}
                    </span>
                  </div>
                  <div className="entry-meta">
                    <span className="meta-pill pill-date">
                      <Calendar size={10} />
                      {job.period}
                    </span>
                    <span className="meta-pill pill-active">{job.type}</span>
                  </div>
                </div>
                <ul className="highlight-list">
                  {job.highlights.map((h) => (
                    <li key={h} className="highlight-item">
                      <CheckCircle size={13} className="highlight-icon" style={{ color: "var(--color-blue-light)" }} />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* ── Education ── */}
        <div>
          <div className="section-row">
            <div
              className="section-icon-wrap"
              style={{ background: "rgba(167,139,250,0.12)", border: "1px solid rgba(167,139,250,0.2)" }}
            >
              <GraduationCap size={15} style={{ color: "#a78bfa" }} />
            </div>
            <span className="section-title">Education</span>
            <div className="section-rule" />
          </div>

          <div className="tl-section">
            {education.map((edu) => (
              <div key={edu.degree} className="tl-item">
                <div className="tl-dot tl-dot-edu" />
                <div className="entry-header">
                  <div>
                    <p className="entry-title">{edu.degree}</p>
                    <p className="entry-org" style={{ color: "#a78bfa" }}>{edu.institution}</p>
                    <span className="meta-pill pill-loc" style={{ marginTop: 4 }}>
                      <MapPin size={10} />
                      {edu.location}
                    </span>
                  </div>
                  <span className="meta-pill pill-date self-start" style={{ flexShrink: 0 }}>
                    <Calendar size={10} />
                    {edu.period}
                  </span>
                </div>
                <p className="module-label">Key Modules</p>
                <div className="module-grid">
                  {edu.modules.map((mod) => (
                    <span key={mod} className="module-tag">{mod}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}