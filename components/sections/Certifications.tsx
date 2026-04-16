import { FileText } from "lucide-react";

const certifications = [
  {
    title: "Customer Centricity as Competitive Advantage",
    issuer: "Kennesaw State University (Coursera)",
    date: "Feb 2026",
    skills: ["Customer Centricity", "Business Strategy", "Competitive Advantage", "Marketing"],
    description:
      "Completed an online course by Prof. Jagdish Sheth authorized by Kennesaw State University. Focused on leveraging customer-centric strategies as a competitive differentiator in modern business.",
    credential_url: "https://coursera.org/verify/YOAGXE85EF73",
    pdf: "/certificates/Coursera YOAGXE85EF73.pdf", // 👈 replace with your actual filename
  },
  {
    title: "Bloomberg — Client Service Job Simulation",
    issuer: "Bloomberg (Forage)",
    date: "Jan 2026",
    skills: ["Prioritization & Task Management", "Problem Solving & Analytics", "Conflict Resolution", "Resourcefulness & Resilience"],
    description:
      "Completed Bloomberg's Client Service Job Simulation via Forage, demonstrating practical skills in prioritization, problem solving, conflict resolution, and resilience in a professional services context.",
    credential_url: "",
    pdf: "/certificates/Client Service Job Simulation Certificate.pdf", // 👈 replace with your actual filename
  },
  {
    title: "Deloitte Australia — Data Analytics Job Simulation",
    issuer: "Forage",
    date: "Oct 2025",
    skills: ["Tableau", "Excel", "Data Visualisation", "Decision Making"],
    description:
      "Completed a 4-hour Deloitte job simulation focused on data analysis and forensic technology. Developed a Tableau dashboard and used Excel to identify key trends enabling strategic business conclusions.",
    pdf: "/certificates/Delloite Forage Job Simulation.pdf", // 👈 replace with your actual filename
  },
  {
    title: "BCG Data Science Job Simulation",
    issuer: "Forage",
    date: "Sep 2025",
    skills: ["Python", "pandas", "NumPy", "Random Forest", "Matplotlib"],
    description:
      "Optimised customer retention for PowerCo with predictive modelling, achieving 90% accuracy with Random Forest. Delivered a data-driven executive summary.",
    pdf: "/certificates/Forage BCG X Certifiate.pdf", // 👈 replace with your actual filename
  },
  {
    title: "Machine Learning A-Z: AI, Python & R",
    issuer: "SuperDataScience / Ligancy Team (Udemy)",
    date: "Apr 2025",
    skills: ["Python", "R", "Regression", "Classification", "Clustering", "NLP"],
    description:
      "Completed a comprehensive 43-hour course covering data preprocessing, regression, classification, clustering, and NLP with practical predictive modelling projects.",
    pdf: "/certificates/Machine Learning Certificate.pdf", // 👈 replace with your actual filename
  },
  {
    title: "Complete Data Analyst Bootcamp (Basics to Advanced)",
    issuer: "KRISHAI Technologies (Udemy)",
    date: "Mar 2025",
    skills: ["Python", "SQL", "Statistics", "Power BI", "Tableau"],
    description:
      "Mastered Python, SQL, Statistics, Power BI, and Tableau through a 71.5-hour intensive bootcamp, focusing on data visualisation and data-driven decision-making.",
    pdf: "/certificates/Data Analysis Certificate.pdf", // 👈 replace with your actual filename
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 bg-slate-900/40">
      <div className="px-6">
        <p className="text-sm font-medium tracking-[0.2em] uppercase gold-accent mb-2">
          Professional development
        </p>
        <h2 className="section-heading">Certifications</h2>
        <div className="section-divider" />

        <div className="grid sm:grid-cols-2 gap-6">
          {certifications.map((cert) => (
            <div key={cert.title} className="card-base flex flex-col">
              <div className="flex items-start justify-between gap-4 mb-2">
                <h3 className="font-playfair font-bold text-white text-base leading-snug">
                  {cert.title}
                </h3>
                <span className="text-xs text-slate-500 whitespace-nowrap pt-0.5">
                  {cert.date}
                </span>
              </div>

              <p className="text-xs gold-accent mb-3">{cert.issuer}</p>
              <p className="text-sm text-slate-400 leading-relaxed flex-1 mb-4">
                {cert.description}
              </p>

              <div className="flex flex-wrap gap-1.5 mb-4">
                {cert.skills.map((s) => (
                  <span key={s} className="tag text-[11px]">
                    {s}
                  </span>
                ))}
              </div>

              {/* PDF link — only renders if pdf field is set */}
              {cert.pdf && (
                <a
                  href={cert.pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto inline-flex items-center gap-2 text-xs text-slate-400 hover:text-white transition-colors self-start"
                >
                  <FileText size={13} />
                  View Certificate
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}