import Link from 'next/link';

export default function Nav() {
  return (
    <>
      {/* Starry background header */}
      <div className="relative w-full h-40 bg-gradient-to-b from-slate-900 via-slate-900 to-blue-900 overflow-hidden">
        {/* Stars */}
        <div className="absolute inset-0">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full opacity-60"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 70}%`,
                opacity: Math.random() * 0.7 + 0.3,
              }}
            />
          ))}
        </div>

        {/* Blue horizon gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-b from-transparent to-blue-600 opacity-40" />

        {/* Centered title */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <h1 className="text-5xl font-light text-white tracking-wide">janmejaya</h1>
          <p className="text-sm text-slate-300 mt-2">systems programmer</p>
        </div>
      </div>

      {/* Navigation bar */}
      <nav className="bg-slate-900 border-b border-slate-700 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex gap-8 text-sm">
            <Link href="/" className="text-slate-300 hover:text-white transition">
              Home
            </Link>
            <Link href="/about" className="text-slate-300 hover:text-white transition">
              About
            </Link>
            <Link href="/projects" className="text-slate-300 hover:text-white transition">
              Projects
            </Link>
            <Link href="/blog" className="text-slate-300 hover:text-white transition">
              Blog
            </Link>
          </div>
          <div className="flex gap-4 text-slate-400">
            <a href="https://github.com" className="hover:text-white transition" aria-label="GitHub">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 0C4.477 0 0 4.477 0 10c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.868-.013-1.703-2.782.603-3.369-1.343-3.369-1.343-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.545 2.914 1.209.092-.937.349-1.546.635-1.901-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.024A9.578 9.578 0 0110 4.836c.85.004 1.705.114 2.504.336 1.909-1.293 2.747-1.024 2.747-1.024.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C17.138 18.163 20 14.413 20 10c0-5.523-4.477-10-10-10z" />
              </svg>
            </a>
            <a href="https://twitter.com" className="hover:text-white transition" aria-label="Twitter">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M20 3.795a8.173 8.173 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.227 8.227 0 01-2.605.996 4.105 4.105 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85 8.25 8.25 0 01-5.096 1.756c-.331 0-.658-.019-.979-.057a11.626 11.626 0 006.29 1.84c7.547 0 11.675-6.252 11.675-11.675 0-.178-.004-.355-.012-.53a8.348 8.348 0 002.046-2.124z" />
              </svg>
            </a>
            <a href="/feed" className="hover:text-white transition" aria-label="RSS Feed">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M4.5 2a1.5 1.5 0 100 3A1.5 1.5 0 004.5 2zm0 5a7 7 0 017 7h3a10 10 0 00-10-10v3zm0 5a4 4 0 014 4h3a7 7 0 00-7-7v3z" />
              </svg>
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}
