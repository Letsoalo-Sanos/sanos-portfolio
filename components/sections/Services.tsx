import {
  BrainCircuit,
  BarChart3,
  TrendingUp,
  DatabaseZap,
  ShieldAlert,
  Headphones,
  Search,
  FlaskConical,
  PackageCheck,
  FileOutput,
} from "lucide-react";

const services = [
  {
    icon: BrainCircuit,
    title: "Machine Learning | AI",
    description: "End-to-end ML model development from data preprocessing and feature engineering to model training, evaluation, and deployment. Specialising in classification, regression, clustering, and deep learning.",
    deliverables: ["Trained ML models", "Model evaluation reports", "Deployment-ready pipelines"],
  },
  {
    icon: BarChart3,
    title: "Data Analysis | Visualisation",
    description: "Turning raw data into clear, actionable insights using Python, SQL, Power BI, and Tableau. I build dashboards and reports that help businesses make smarter, faster decisions.",
    deliverables: ["Interactive dashboards", "Exploratory data analysis", "Business intelligence reports"],
  },
  {
    icon: TrendingUp,
    title: "Predictive Modelling",
    description: "Building predictive systems that forecast outcomes and detect patterns from customer churn prediction to anomaly detection. Proven track record with 90%+ model accuracy on real projects.",
    deliverables: ["Churn prediction models", "Forecasting systems", "Anomaly detection"],
  },
  {
    icon: DatabaseZap,
    title: "Database Design | SQL",
    description: "Designing and querying relational databases using MySQL and PostgreSQL. From schema design to complex query optimisation, ensuring your data is structured for performance and scalability.",
    deliverables: ["Database schema design", "SQL query optimisation", "Data pipelines"],
  },
  {
    icon: ShieldAlert,
    title: "Cybersecurity Consulting",
    description: "Web security vulnerability assessments and penetration testing using industry-standard tools. Identifying weaknesses before attackers do, with clear remediation recommendations.",
    deliverables: ["Vulnerability assessment reports", "Penetration testing", "Security recommendations"],
  },
  {
    icon: Headphones,
    title: "Technical Business Support",
    description: "Providing end-to-end technical assistance and troubleshooting for business systems. Bridging the gap between technical teams and stakeholders through clear communication, user testing, and hands-on problem resolution.",
    deliverables: ["Technical troubleshooting", "System support & documentation", "Stakeholder communication"],
  },
];

const process = [
  { icon: Search,       step: "01", title: "Discovery",   desc: "Understanding your problem, data, and goals." },
  { icon: FlaskConical, step: "02", title: "Analysis",    desc: "Exploring your data to identify patterns and opportunities." },
  { icon: PackageCheck, step: "03", title: "Development", desc: "Building the solution model, dashboard, or system." },
  { icon: FileOutput,   step: "04", title: "Delivery",    desc: "Handing over clean code, reports, and documentation." },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-slate-900/40">
      <div className="max-w-6xl mx-auto px-6">

        <p className="text-sm font-medium tracking-[0.2em] uppercase gold-accent mb-2">
          What I offer
        </p>
        <h2 className="section-heading">Services</h2>
        <div className="section-divider" />

        {/* Services grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div key={service.title} className="card-base flex flex-col">
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mb-4 flex-shrink-0"
                  style={{ background: "var(--color-blue-glow)", border: "1px solid rgba(59,130,246,0.2)" }}
                >
                  <Icon size={20} style={{ color: "var(--color-blue-light)" }} />
                </div>
                <h3 className="font-playfair text-lg font-bold text-white mb-3">{service.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed flex-1 mb-4">{service.description}</p>
                <div className="mt-auto space-y-1.5">
                  <p className="text-xs font-medium tracking-widest uppercase text-slate-500 mb-2">Deliverables</p>
                  {service.deliverables.map((d) => (
                    <div key={d} className="flex items-center gap-2 text-xs text-slate-400">
                      <span className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: "var(--color-blue)" }} />
                      {d}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Process */}
        <p className="text-sm font-medium tracking-[0.2em] uppercase gold-accent mb-2">How I work</p>
        <h3 className="font-playfair text-2xl font-bold text-white mb-8">My Process</h3>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-5">
          {process.map((p) => {
            const Icon = p.icon;
            return (
              <div key={p.step} className="card-base text-center">
                <div className="flex justify-center mb-3">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center"
                    style={{ background: "var(--color-blue-glow)", border: "1px solid rgba(59,130,246,0.25)" }}
                  >
                    <Icon size={20} style={{ color: "var(--color-blue-light)" }} />
                  </div>
                </div>
                <p className="font-playfair text-3xl font-bold mb-1" style={{ color: "var(--color-blue-light)" }}>
                  {p.step}
                </p>
                <h4 className="font-semibold text-white mb-2 text-sm">{p.title}</h4>
                <p className="text-slate-400 text-xs leading-relaxed">{p.desc}</p>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-12 card-base flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <p className="font-playfair text-xl font-bold text-white mb-1">Ready to work together?</p>
            <p className="text-slate-400 text-sm">Tell me about your project and let&apos;s figure out how data can help.</p>
          </div>
          <a href="#contact" className="btn-primary flex-shrink-0">Get In Touch</a>
        </div>

      </div>
    </section>
  );
}