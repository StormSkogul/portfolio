import Link from 'next/link';

export default function Home() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-3 gap-12">
      {/* Main content */}
      <div className="lg:col-span-2 space-y-8">
        <section>
          <h2 className="text-2xl font-light text-white mb-4">about me</h2>
          <div className="prose prose-invert max-w-none">
            <p className="text-slate-300 leading-relaxed mb-4">
              Systems programmer. LLVM/Clang contributor since 2025. I work on clang semantic analysis hardening, llvm-libc functions, and RISC-V codegen research.
            </p>
            <p className="text-slate-300 leading-relaxed">
              I like working on things where a single misplaced bit can ruin someone&apos;s entire Tuesday. Currently architecting experimental kernels, compiler debuggers, and low-level systems that make most people&apos;s brains hurt.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-light text-white mb-4">interests</h2>
          <div className="space-y-4 text-slate-300">
            <p>
              <span className="text-blue-400">Computing:</span> I dissect computers from the Linux Kernel to the LLVM IR. Consider sleep(8) optional.
            </p>
            <p>
              <span className="text-blue-400">Cinema:</span> Kubrick, Kurosawa, Tarantino. The way they handle light and composition teaches me how to care about details.
            </p>
            <p>
              <span className="text-blue-400">Music:</span> Shoegaze and dreampop. My Spotify is basically reverb and echoing vocals blurred into a beautiful mess.
            </p>
            <p>
              <span className="text-blue-400">Games:</span> FromSoftware titles. The &quot;git gud&quot; mindset is useful for kernel development.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-light text-white mb-4">featured</h2>
          <div className="bg-slate-800 rounded p-4 border border-slate-700">
            <h3 className="text-lg text-white font-medium mb-2">Aion</h3>
            <p className="text-slate-400 text-sm mb-3">
              LLVM optimization debugger. Answers the question every compiler engineer loses sleep over: &quot;why didn&apos;t it optimize?&quot;
            </p>
            <Link href="/projects" className="text-blue-400 hover:text-blue-300 text-sm">
              View all projects →
            </Link>
          </div>
        </section>
      </div>

      {/* Sidebar */}
      <aside className="lg:col-span-1">
        <div className="sticky top-32">
          <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wide mb-4">Recent Posts</h3>
          <div className="space-y-3">
            {[
              { title: 'Understanding LLVM IR', views: 1240 },
              { title: 'Kernel Debugging Tips', views: 892 },
              { title: 'Compiler Optimization Tricks', views: 756 },
              { title: 'RISC-V Architecture Deep Dive', views: 654 },
              { title: 'Memory Allocation Strategies', views: 543 },
            ].map((post, i) => (
              <div key={i} className="text-sm border-b border-slate-700 pb-3 last:border-0">
                <a href="#" className="text-blue-400 hover:text-blue-300 block mb-1">
                  {post.title}
                </a>
                <span className="text-slate-500 text-xs">({post.views})</span>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wide mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-blue-400 hover:text-blue-300">
                  About
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-blue-400 hover:text-blue-300">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-blue-400 hover:text-blue-300">
                  Blog
                </Link>
              </li>
              <li>
                <a href="https://github.com/janmejayapanda400" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>
      </aside>
    </main>
  );
}
