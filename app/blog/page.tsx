import { Nav } from '@/components/nav';
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
    <>
      <Nav />
      
      <main>
        <h1 className="text-3xl font-bold mb-2">blog</h1>
        <p className="text-gray-700 mb-8">
          Thoughts on systems programming, compilers, kernels, and the intersection of art and code.
        </p>

        <div className="space-y-8">
          {blogPosts.map((post) => (
            <article key={post.slug} className="pb-6 border-b border-gray-200 last:border-0">
              <div className="mb-2 flex items-baseline justify-between">
                <h2 className="text-xl font-bold">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-blue-600 hover:underline"
                  >
                    {post.title}
                  </Link>
                </h2>
                <time className="text-sm text-gray-600 whitespace-nowrap ml-4">
                  {new Date(post.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric',
                  })}
                </time>
              </div>
              <p className="text-gray-700 mb-3">{post.excerpt}</p>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag, i) => (
                  <span key={i} className="text-xs px-2 py-1 bg-gray-100 text-gray-700 rounded">
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

        <footer className="mt-12 pt-8 border-t border-gray-200 text-sm text-gray-600">
          <p>New posts coming soon. Subscribe via GitHub for updates.</p>
        </footer>
      </main>
    </>
  );
}
