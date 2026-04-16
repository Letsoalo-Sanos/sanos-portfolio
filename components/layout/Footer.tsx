export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950 py-10 mt-20">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-playfair text-lg font-bold">
          <span className="text-white">Sanos</span>
          <span className="gold-accent">.</span>
        </p>
        <p className="text-slate-500 text-sm">
          © {new Date().getFullYear()} Letsoalo Sanos Neo · Pretoria, Gauteng
        </p>
        <div className="flex items-center gap-5">
          <a href="https://github.com/Letsoalo-Sanos" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
            GitHub
          </a>
          <a href="https://linkedin.com/in/sanos-letsoalo" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
            LinkedIn
          </a>
          <a href="mailto:letsoalo.sanos@gmail.com" className="text-slate-400 hover:text-white transition-colors">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}