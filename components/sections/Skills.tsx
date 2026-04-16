"use client";
import { useState, useEffect, useRef } from "react";
import {
  Code2,
  Brain,
  LineChart,
  Database,
  Cloud,
  Network,
  Shield,
  CheckCircle2,
  Headphones,
  ChevronDown,
} from "lucide-react";

const skillGroups = [
  {
    category: "Programming Languages",
    icon: Code2,
    skills: [
      {
        name: "Python",
        level: 88,
        subtopics: ["OOP", "Decorators", "Generators", "asyncio", "Virtual Envs", "pip / poetry"],
      },
      {
        name: "R",
        level: 70,
        subtopics: ["tidyverse", "ggplot2", "dplyr", "R Markdown", "Statistical Modelling"],
      },
      {
        name: "SQL",
        level: 82,
        subtopics: ["JOINs", "Subqueries", "Window Functions", "CTEs", "Indexing", "Stored Procedures"],
      },
    ],
  },
  {
    category: "Machine Learning | AI",
    icon: Brain,
    skills: [
      {
        name: "Supervised Learning",
        level: 85,
        subtopics: ["Linear Regression", "Logistic Regression", "SVM", "Decision Trees", "XGBoost"],
      },
      {
        name: "Unsupervised Learning",
        level: 75,
        subtopics: ["K-Means", "DBSCAN", "PCA", "Autoencoders", "Hierarchical Clustering"],
      },
      {
        name: "Deep Learning",
        level: 72,
        subtopics: ["CNNs", "RNNs", "LSTMs", "Transformers", "Transfer Learning", "Backprop"],
      },
      {
        name: "Random Forest",
        level: 80,
        subtopics: ["Bagging", "Feature Importance", "OOB Error", "Hyperparameter Tuning"],
      },
      {
        name: "scikit-learn",
        level: 86,
        subtopics: ["Pipelines", "GridSearchCV", "Cross-Validation", "Preprocessing", "Metrics"],
      },
      {
        name: "TensorFlow",
        level: 68,
        subtopics: ["Keras API", "Model Saving", "Custom Layers", "TensorBoard", "TF Datasets"],
      },
    ],
  },
  {
    category: "Data Analysis | Visualisation",
    icon: LineChart,
    skills: [
      {
        name: "pandas",
        level: 90,
        subtopics: ["DataFrame Ops", "GroupBy", "Merge/Join", "Time Series", "MultiIndex"],
      },
      {
        name: "NumPy",
        level: 85,
        subtopics: ["Broadcasting", "Vectorisation", "Linear Algebra", "Random Module", "Masking"],
      },
      {
        name: "Matplotlib",
        level: 78,
        subtopics: ["Subplots", "Custom Styles", "Annotations", "3D Plots", "Animation"],
      },
      {
        name: "Seaborn",
        level: 80,
        subtopics: ["Heatmaps", "Pairplots", "Violin Plots", "FacetGrid", "Statistical Plots"],
      },
      {
        name: "Power BI",
        level: 74,
        subtopics: ["DAX", "Power Query", "Data Modelling", "Custom Visuals", "Row-Level Security"],
      },
      {
        name: "Tableau",
        level: 70,
        subtopics: ["Calculated Fields", "LOD Expressions", "Parameters", "Dashboard Actions", "Stories"],
      },
      {
        name: "Excel",
        level: 88,
        subtopics: ["PivotTables", "VLOOKUP/XLOOKUP", "Power Query", "Macros (VBA)", "Conditional Formatting"],
      },
    ],
  },
  {
    category: "Database Management",
    icon: Database,
    skills: [
      {
        name: "MySQL",
        level: 80,
        subtopics: ["Schema Design", "Transactions", "Views", "Triggers", "Replication"],
      },
      {
        name: "PostgreSQL",
        level: 78,
        subtopics: ["JSONB", "Full-Text Search", "Partitioning", "Extensions", "pgAdmin"],
      },
      {
        name: "Supabase",
        level: 68,
        subtopics: ["Row-Level Security", "Realtime", "Storage", "Auth", "Edge Functions"],
      },
    ],
  },
  {
    category: "Cloud | Infrastructure",
    icon: Cloud,
    skills: [
      {
        name: "AWS",
        level: 72,
        subtopics: ["EC2", "S3", "Lambda", "RDS", "IAM", "CloudWatch"],
      },
      {
        name: "Azure",
        level: 65,
        subtopics: ["Azure ML", "Blob Storage", "Azure SQL", "Active Directory", "AKS"],
      },
      {
        name: "Linux",
        level: 82,
        subtopics: ["Bash Scripting", "Cron Jobs", "systemd", "File Permissions", "SSH", "Package Managers"],
      },
      {
        name: "Windows",
        level: 85,
        subtopics: ["Active Directory", "Group Policy", "PowerShell", "Task Scheduler", "Registry"],
      },
    ],
  },
  {
    category: "Networking",
    icon: Network,
    skills: [
      {
        name: "TCP/IP",
        level: 80,
        subtopics: ["OSI Model", "IP Addressing", "Subnetting", "3-Way Handshake", "Packet Analysis"],
      },
      {
        name: "DNS",
        level: 75,
        subtopics: ["A/AAAA Records", "MX Records", "CNAME", "TTL", "DNS Resolution"],
      },
      {
        name: "DHCP",
        level: 73,
        subtopics: ["Scope Config", "Lease Time", "Reservations", "Relay Agents", "DORA Process"],
      },
      {
        name: "NAT",
        level: 70,
        subtopics: ["PAT", "Static NAT", "Dynamic NAT", "Port Forwarding", "NAT Tables"],
      },
      {
        name: "Firewall",
        level: 74,
        subtopics: ["ACLs", "Stateful Inspection", "Rule Sets", "DMZ", "IDS/IPS"],
      },
      {
        name: "Routing",
        level: 72,
        subtopics: ["OSPF", "BGP", "Static Routes", "Route Tables", "VLAN Routing"],
      },
    ],
  },
  {
    category: "Cybersecurity",
    icon: Shield,
    skills: [
      {
        name: "Kali Linux",
        level: 74,
        subtopics: ["Tool Suite", "Live Boot", "Custom Kernels", "Forensics Tools", "Wordlists"],
      },
      {
        name: "Nmap",
        level: 78,
        subtopics: ["Port Scanning", "OS Detection", "Service Enumeration", "NSE Scripts", "Stealth Scans"],
      },
      {
        name: "Metasploit",
        level: 68,
        subtopics: ["Modules", "Payloads", "Meterpreter", "Post Exploitation", "Auxiliary Modules"],
      },
      {
        name: "Penetration Testing",
        level: 72,
        subtopics: ["Recon", "Exploitation", "Privilege Escalation", "Reporting", "OWASP Top 10"],
      },
    ],
  },
  {
    category: "Technical Business Support",
    icon: Headphones,
    skills: [
      {
        name: "Troubleshooting",
        level: 90,
        subtopics: ["Root Cause Analysis", "Diagnostic Tools", "Escalation Paths", "Remote Support"],
      },
      {
        name: "Technical Documentation",
        level: 85,
        subtopics: ["SOPs", "Runbooks", "API Docs", "Knowledge Base", "Confluence"],
      },
      {
        name: "User Testing",
        level: 76,
        subtopics: ["UAT Planning", "Test Cases", "Bug Reporting", "Regression Testing", "Feedback Loops"],
      },
      {
        name: "Stakeholder Communication",
        level: 82,
        subtopics: ["Requirements Gathering", "Progress Reporting", "Risk Communication", "Presentations"],
      },
      {
        name: "IT Support",
        level: 88,
        subtopics: ["Helpdesk", "Asset Management", "Imaging", "Account Provisioning", "SLA Management"],
      },
      {
        name: "Incident Management",
        level: 80,
        subtopics: ["Triage", "P1/P2 Response", "Post-Mortems", "ITIL Practices", "On-Call Rotation"],
      },
    ],
  },
];

const competencies = [
  "Problem-Solving",
  "Analytical Thinking",
  "Project Management",
  "Communication",
  "Teamwork",
  "Time Management",
  "Adaptability",
  "Continuous Improvement",
];

function getLevelLabel(level: number) {
  if (level >= 85) return { label: "Expert", color: "#22d3ee" };
  if (level >= 70) return { label: "Proficient", color: "#818cf8" };
  return { label: "Familiar", color: "#94a3b8" };
}

function SkillBar({
  skill,
  animate,
}: {
  skill: { name: string; level: number; subtopics: string[] };
  animate: boolean;
}) {
  const [expanded, setExpanded] = useState(false);
  const { label, color } = getLevelLabel(skill.level);

  return (
    <div className="skill-row">
      <div
        className="skill-header"
        onClick={() => setExpanded((v) => !v)}
        style={{ cursor: "pointer" }}
      >
        <div className="skill-name-row">
          <span className="skill-name">{skill.name}</span>
          <div className="skill-meta">
            <span className="skill-badge" style={{ color, borderColor: `${color}33`, background: `${color}11` }}>
              {label}
            </span>
            <span className="skill-pct">{skill.level}%</span>
            <ChevronDown
              size={13}
              className="chevron"
              style={{
                color: "#64748b",
                transform: expanded ? "rotate(180deg)" : "rotate(0deg)",
                transition: "transform 0.25s ease",
              }}
            />
          </div>
        </div>

        {/* Progress bar */}
        <div className="bar-track">
          <div
            className="bar-fill"
            style={{
              width: animate ? `${skill.level}%` : "0%",
              background: `linear-gradient(90deg, ${color}99, ${color})`,
              boxShadow: animate ? `0 0 8px ${color}66` : "none",
            }}
          />
        </div>
      </div>

      {/* Subtopics */}
      <div className={`subtopics ${expanded ? "open" : ""}`}>
        <div className="subtopics-inner">
          {skill.subtopics.map((s) => (
            <span key={s} className="subtopic-tag">
              {s}
            </span>
          ))}
        </div>
      </div>

      <style>{`
        .skill-row { margin-bottom: 10px; }
        .skill-header { user-select: none; }
        .skill-name-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 5px;
        }
        .skill-name { font-size: 12px; color: #e2e8f0; font-weight: 500; }
        .skill-meta { display: flex; align-items: center; gap: 8px; }
        .skill-badge {
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 0.04em;
          border: 1px solid;
          border-radius: 4px;
          padding: 1px 6px;
        }
        .skill-pct { font-size: 11px; color: #64748b; font-variant-numeric: tabular-nums; }
        .chevron { flex-shrink: 0; }
        .bar-track {
          width: 100%;
          height: 5px;
          background: rgba(255,255,255,0.06);
          border-radius: 99px;
          overflow: hidden;
        }
        .bar-fill {
          height: 100%;
          border-radius: 99px;
          transition: width 1.1s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .subtopics {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.3s ease, opacity 0.3s ease;
          opacity: 0;
        }
        .subtopics.open {
          max-height: 200px;
          opacity: 1;
        }
        .subtopics-inner {
          display: flex;
          flex-wrap: wrap;
          gap: 5px;
          padding-top: 8px;
          padding-bottom: 2px;
        }
        .subtopic-tag {
          font-size: 10px;
          color: #94a3b8;
          background: rgba(148,163,184,0.07);
          border: 1px solid rgba(148,163,184,0.15);
          border-radius: 4px;
          padding: 2px 8px;
          letter-spacing: 0.02em;
        }
      `}</style>
    </div>
  );
}

function SkillCard({
  group,
}: {
  group: (typeof skillGroups)[number];
}) {
  const [animate, setAnimate] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setAnimate(true); observer.disconnect(); } },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const Icon = group.icon;

  return (
    <div ref={ref} className="card-base">
      <div className="flex items-center gap-3 mb-5">
        <div
          className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
          style={{ background: "var(--color-blue-glow)", border: "1px solid rgba(59,130,246,0.2)" }}
        >
          <Icon size={16} style={{ color: "var(--color-blue-light)" }} />
        </div>
        <h3 className="font-semibold text-white text-xs leading-tight">{group.category}</h3>
      </div>

      <div>
        {group.skills.map((skill) => (
          <SkillBar key={skill.name} skill={skill} animate={animate} />
        ))}
      </div>

      <p style={{ fontSize: 10, color: "#475569", marginTop: 8, textAlign: "right" }}>
        Click a skill to expand subtopics
      </p>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-slate-900/40">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-sm font-medium tracking-[0.2em] uppercase gold-accent mb-2">
          What I know
        </p>
        <h2 className="section-heading">Skills & Technologies</h2>
        <div className="section-divider" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
          {skillGroups.map((group) => (
            <SkillCard key={group.category} group={group} />
          ))}
        </div>

        {/* Competencies */}
        <div className="card-base">
          <div className="flex items-center gap-3 mb-4">
            <CheckCircle2 size={18} style={{ color: "var(--color-blue-light)" }} />
            <p className="text-sm font-semibold text-white">Core Competencies</p>
          </div>
          <div className="flex flex-wrap gap-2">
            {competencies.map((c) => (
              <span
                key={c}
                className="text-sm text-slate-300 border border-slate-700 rounded-full px-3 py-1"
              >
                {c}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}