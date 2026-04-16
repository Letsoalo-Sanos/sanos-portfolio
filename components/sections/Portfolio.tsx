"use client";

import { useEffect, useState } from "react";
import { createBrowserClient } from "@supabase/ssr";

interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  github_url?: string;
  live_url?: string;
  featured: boolean;
}

const FALLBACK_PROJECTS: Project[] = [
  {
    id: 1,
    title: "ML-based Deadlock Detection",
    description:
      "Developed a predictive system to detect potential deadlocks in high-performance computing environments using Python and Random Forest, achieving reliable detection with evaluated precision, recall, and F1-score.",
    tags: ["Python", "Random Forest", "scikit-learn", "HPC"],
    github_url: "https://github.com/Letsoalo-Sanos",
    featured: true,
  },
  {
    id: 2,
    title: "Customer Churn Prediction",
    description:
      "Optimised customer retention for PowerCo with a Random Forest classifier achieving 90% accuracy. Delivered a data-driven executive summary guiding retention strategy.",
    tags: ["Python", "pandas", "NumPy", "Random Forest", "Matplotlib"],
    github_url: "https://github.com/Letsoalo-Sanos",
    featured: true,
  },
  {
    id: 3,
    title: "Website Security Vulnerability Assessment",
    description:
      "Simulated adversarial behaviour to identify web security vulnerabilities using Kali Linux, Nmap, and Metasploit. Produced a comprehensive remediation report.",
    tags: ["Kali Linux", "Nmap", "Metasploit", "Cybersecurity"],
    github_url: "https://github.com/Letsoalo-Sanos",
    featured: false,
  },
  {
    id: 4,
    title: "Network Configuration & Security",
    description:
      "Configured a Ubuntu Linux router with NAT, DHCP, firewall rules, and inter-network routing. Validated stable and secure communication across subnets.",
    tags: ["Ubuntu Linux", "NAT", "DHCP", "Firewall", "TCP/IP"],
    github_url: "https://github.com/Letsoalo-Sanos",
    featured: false,
  },
  {
    id: 5,
    title: "Deloitte Data Analytics Dashboard",
    description:
      "Completed a Deloitte Australia job simulation. Built an interactive Tableau dashboard for forensic data analysis and used Excel for trend identification.",
    tags: ["Tableau", "Excel", "Data Visualisation", "Business Intelligence"],
    featured: false,
  },
];

export default function Portfolio() {
  const [projects, setProjects] = useState<Project[]>(FALLBACK_PROJECTS);
  const [loading,  setLoading]  = useState(true);
  const [showAll,  setShowAll]  = useState(false);

  useEffect(() => {
    async function fetchProjects() {
      try {
        const supabase = createBrowserClient(
          process.env.NEXT_PUBLIC_SUPABASE_URL!,
          process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
        );
        const { data, error } = await supabase
          .from("projects")
          .select("*")
          .order("featured", { ascending: false })
          .order("id", { ascending: true });
        if (!error && data && data.length > 0) setProjects(data as Project[]);
      } catch { /* use fallback */ }
      finally { setLoading(false); }
    }
    fetchProjects();
  }, []);

  const displayed = showAll ? projects : projects.slice(0, 4);

  return (
    <section id="portfolio" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-sm font-medium tracking-[0.2em] uppercase gold-accent mb-2">
          My work
        </p>
        <h2 className="section-heading">Portfolio</h2>
        <div className="section-divider" />

        {loading ? (
          <div className="grid sm:grid-cols-2 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="card-base animate-pulse">
                <div className="h-5 bg-slate-700 rounded w-3/4 mb-3" />
                <div className="h-3 bg-slate-800 rounded w-full mb-2" />
                <div className="h-3 bg-slate-800 rounded w-5/6" />
              </div>
            ))}
          </div>
        ) : (
          <>
            <div className="grid sm:grid-cols-2 gap-6">
              {displayed.map((project) => (
                <div key={project.id} className="card-base flex flex-col h-full">
                  <div className="flex items-start justify-between mb-3">
                    {project.featured && (
                      <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-blue-900/40 text-blue-300 border border-blue-800/50">
                        Featured
                      </span>
                    )}
                    <div className="flex gap-3 ml-auto">
                      {project.github_url && (
                        <a href={project.github_url} target="_blank" rel="noopener noreferrer"
                          className="text-slate-500 hover:text-white transition-colors" aria-label="GitHub">
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                          </svg>
                        </a>
                      )}
                      {project.live_url && (
                        <a href={project.live_url} target="_blank" rel="noopener noreferrer"
                          className="text-slate-500 hover:text-white transition-colors" aria-label="Live demo">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </a>
                      )}
                    </div>
                  </div>
                  <h3 className="font-playfair font-bold text-white text-lg mb-2">{project.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed flex-1 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tags.map((tag) => (
                      <span key={tag} className="tag">{tag}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {projects.length > 4 && (
              <div className="mt-10 text-center">
                <button onClick={() => setShowAll(!showAll)} className="btn-outline">
                  {showAll ? "Show Less" : `Show All ${projects.length} Projects`}
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
}