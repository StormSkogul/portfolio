import Link from 'next/link';

const blogPosts = [
  {
    title: 'Understanding LLVM Pass Remarks',
    slug: 'llvm-pass-remarks',
    date: '2025-01-15',
    excerpt: 'Deep dive into how LLVM pass remarks work and why they matter for optimization debugging.',
    tags: ['LLVM', 'Compilers', 'Optimization'],
  },
  {
    title: 'Building an Experimental Kernel: Lessons Learned',
    slug: 'experimental-kernel',
    date: '2024-12-20',
    excerpt: 'Reflections on architecting a 10-layer kernel with hierarchical resource management and a temporal fracture scheduler.',
    tags: ['Kernels', 'Systems', 'Architecture'],
  },
  {
    title: 'Memory Allocators: From Malloc to Custom Solutions',
    slug: 'memory-allocators',
    date: '2024-11-10',
    excerpt: 'Why I built a zero-overhead allocator and what I learned about memory management patterns.',
    tags: ['Memory', 'Performance', 'C++'],
  },
  {
    title: 'Cinematography and Code: Finding Beauty in Systems',
    slug: 'cinema-and-code',
    date: '2024-10-05',
    excerpt: 'How studying cinematography teaches us to care about details, elegance, and intention in software design.',
    tags: ['Philosophy', 'Design', 'Aesthetics'],
  },
  {
    title: 'The Art of Compiler Debugging',
    slug: 'compiler-debugging',
    date: '2024-09-12',
    excerpt: 'Techniques and tools for understanding why your compiler isn\'t optimizing the way you expect.',
    tags: ['LLVM', 'Debugging', 'Tools'],
  },
];

export default function Blog() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-3 gap-12">
      {/* Main content */}
      <div className="lg:col-span-2">
        <div className="mb-8">
          <h1 className="text-3xl font-light text-white mb-2">blog</h1>
          <p className="text-slate-400">
            Thoughts on systems programming, compilers, kernels, and the intersection of art and code.
          </p>
        </div>

        <div className="space-y-6">
          {blogPosts.map((post) => (
            <article key={post.slug} className="pb-6 border-b border-slate-700 last:border-0">
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <time className="text-xs text-slate-500 uppercase tracking-wide">
                    {new Date(post.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: '2-digit',
                      day: '2-digit',
                    })}
                  </time>
                  <h2 className="text-lg text-white font-medium mt-1 mb-2">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="text-blue-400 hover:text-blue-300"
                    >
                      {post.title}
                    </Link>
                  </h2>
                </div>
              </div>
              <p className="text-slate-400 text-sm mb-3 leading-relaxed">{post.excerpt}</p>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span key={`${post.slug}-${tag}`} className="text-xs px-2 py-1 bg-slate-800 text-slate-300 rounded border border-slate-700">
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Sidebar */}
      <aside className="lg:col-span-1">
        <div className="sticky top-32">
          <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wide mb-4">Popular</h3>
          <div className="space-y-3">
            {[
              { title: 'All about thread-local...', views: 44500 },
              { title: 'int, ctors, and i...', views: 22965 },
              { title: 'All about Global IFun...', views: 11875 },
              { title: 'When can glibc be lui...', views: 18264 },
              { title: 'Stack unwinding (1471)...', views: 14731 },
            ].map((post, i) => (
              <div key={i} className="text-xs border-b border-slate-700 pb-3 last:border-0">
                <a href="#" className="text-blue-400 hover:text-blue-300 line-clamp-2">
                  {post.title}
                </a>
                <span className="text-slate-600 text-xs">({post.views})</span>
              </div>
            ))}
          </div>
        </div>
      </aside>
    </main>
  );
}
