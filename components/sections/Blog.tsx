const posts = [
  {
    id: 1,
    title: "How I Built a Deadlock Detection System with Random Forest",
    excerpt:
      "A walkthrough of my honours research project — from data collection in HPC environments to training a Random Forest model that reliably predicts deadlocks before they happen.",
    date: "Mar 2025",
    readTime: "6 min read",
    tags: ["Machine Learning", "Python", "Research"],
    slug: "#",
  },
  {
    id: 2,
    title: "Customer Churn Prediction: What I Learned from the BCG Simulation",
    excerpt:
      "Breaking down the approach I used to achieve 90% accuracy with Random Forest on PowerCo's churn data — feature engineering, model selection, and communicating results to stakeholders.",
    date: "Feb 2025",
    readTime: "5 min read",
    tags: ["Data Science", "Python", "Random Forest"],
    slug: "#",
  },
  {
    id: 3,
    title: "Getting Started with Power BI as a Data Analyst",
    excerpt:
      "A practical guide to building your first Power BI dashboard — from connecting data sources to creating visuals that actually tell a story. Tips from completing the Deloitte simulation.",
    date: "Jan 2025",
    readTime: "4 min read",
    tags: ["Power BI", "Data Visualisation", "Beginners"],
    slug: "#",
  },
  {
    id: 4,
    title: "Why South Africa Needs More Data Scientists from Rural Areas",
    excerpt:
      "Growing up in Limpopo and studying data science — my perspective on the gap between rural talent and tech opportunity, and what needs to change to close it.",
    date: "Dec 2024",
    readTime: "7 min read",
    tags: ["Opinion", "South Africa", "Tech"],
    slug: "#",
  },
];

export default function Blog() {
  return (
    <section id="blog" className="py-24 bg-slate-900/40">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-sm font-medium tracking-[0.2em] uppercase gold-accent mb-2">
          Thoughts & insights
        </p>
        <h2 className="section-heading">Blog</h2>
        <div className="section-divider" />

        <div className="grid sm:grid-cols-2 gap-6">
          {posts.map((post) => (
            <a
              key={post.id}
              href={post.slug}
              className="card-base flex flex-col group cursor-pointer"
            >
              {/* Date & read time */}
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs text-slate-500">{post.date}</span>
                <span className="text-xs text-slate-500">{post.readTime}</span>
              </div>

              {/* Title */}
              <h3 className="font-playfair font-bold text-white text-lg leading-snug mb-3 group-hover:text-blue-300 transition-colors">
                {post.title}
              </h3>

              {/* Excerpt */}
              <p className="text-slate-400 text-sm leading-relaxed flex-1 mb-4">
                {post.excerpt}
              </p>

              {/* Tags & read more */}
              <div className="flex items-center justify-between mt-auto">
                <div className="flex flex-wrap gap-1.5">
                  {post.tags.map((tag) => (
                    <span key={tag} className="tag text-[11px]">{tag}</span>
                  ))}
                </div>
                <span className="text-xs text-blue-400 font-medium flex items-center gap-1 flex-shrink-0 ml-3 group-hover:gap-2 transition-all">
                  Read →
                </span>
              </div>
            </a>
          ))}
        </div>

        {/* Coming soon note */}
        <p className="text-center text-slate-600 text-xs mt-10">
          Full blog coming soon — posts will be published here and on Medium.
        </p>
      </div>
    </section>
  );
}