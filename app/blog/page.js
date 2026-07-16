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
    <main className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-light text-white mb-2">blog</h1>
      <p className="text-slate-400 mb-8">Thoughts on systems programming, compilers, and low-level systems.</p>

      <div className="space-y-8">
        {blogPosts.map((post) => (
          <article key={post.slug} className="pb-8 border-b border-slate-700 last:border-0">
            <time className="text-xs text-slate-500">
              {new Date(post.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: '2-digit',
                day: '2-digit',
              })}
            </time>
            <h2 className="text-2xl text-white font-light mt-2 mb-3">
              <Link href={`/blog/${post.slug}`} className="text-blue-400 hover:underline">
                {post.title}
              </Link>
            </h2>
            <p className="text-slate-300 mb-4">{post.excerpt}</p>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span key={`${post.slug}-${tag}`} className="text-xs px-2 py-1 bg-slate-800 text-slate-300 border border-slate-700">
                  {tag}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
