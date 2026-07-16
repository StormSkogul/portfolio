import Link from 'next/link';

export default function Nav() {
  return (
    <nav className="bg-slate-900 border-b border-slate-700">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-light text-white hover:text-slate-300">
          janmejaya
        </Link>
        <div className="flex gap-8 text-sm">
          <Link href="/" className="text-slate-300 hover:text-white transition">
            Home
          </Link>
          <Link href="/projects" className="text-slate-300 hover:text-white transition">
            Projects
          </Link>
          <Link href="/blog" className="text-slate-300 hover:text-white transition">
            Blog
          </Link>
          <Link href="/about" className="text-slate-300 hover:text-white transition">
            About
          </Link>
        </div>
        <div className="flex gap-4 text-slate-400">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition text-sm">
            github
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition text-sm">
            twitter
          </a>
        </div>
      </div>
    </nav>
  );
}
