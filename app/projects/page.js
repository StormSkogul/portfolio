import Link from 'next/link';

const projects = [
  {
    id: 'aion',
    name: 'Aion',
    tagline: 'LLVM optimization debugger',
    description:
      'Answers the only question compiler engineers actually care about: "why didn\'t it optimize?" Decodes pass remarks, multi-context IR analysis, covers vectorization, PGO, devirtualization.',
    stack: ['C++', 'LLVM', 'YAML'],
    github: 'https://github.com/janmejayapanda400/aion',
  },
  {
    id: 'lain-os',
    name: 'Lain-OS',
    tagline: 'Experimental kernel (codenamed Abyss)',
    description:
      '10-layer architecture, hierarchical NeuroVFS, a temporal fracture scheduler which is exactly as chaotic as it sounds, and a predictive shell using markov chains.',
    stack: ['C', 'RISC-V ASM'],
    github: 'https://github.com/janmejayapanda400/lain-os',
  },
  {
    id: 'aetherfm',
    name: 'aetherfm',
    tagline: 'GTK+ file manager',
    description:
      'Fast, minimal, actually respects UNIX philosophy unlike certain other file managers. Does one thing and does it well.',
    stack: ['C', 'GTK', 'GLib'],
  },
  {
    id: 'aether-allocator',
    name: 'Aether Allocator',
    tagline: 'Single-header C allocator',
    description:
      'Zero overhead. Eliminates leaks, double-free, dangling pointers. The kind of thing you write after one too many nights debugging malloc crimes.',
    stack: ['C'],
  },
  {
    id: 'inter-cpp',
    name: 'inter-cpp',
    tagline: 'Bytecode interpreter',
    description:
      'Custom opcode dispatch mechanism. C++17 implementation with performance in mind.',
    stack: ['C++17'],
  },
  {
    id: 'process-analyzer',
    name: 'P.A',
    tagline: 'Process Analyzer',
    description:
      'Finds and harvests zombie and orphan processes via syscall instrumentation. Yes, "harvests" is the right word.',
    stack: ['C++'],
  },
  {
    id: 'rune',
    name: 'rune',
    tagline: 'Classification library',
    description:
      'Pure Haskell. Human-readable rules, no neural network black-box nonsense. If you can\'t explain why a decision was made, you don\'t have a classifier.',
    stack: ['Haskell'],
  },
  {
    id: 'krrs',
    name: 'krrs',
    tagline: 'Kernel in Rust',
    description:
      'What happens when you try to write a kernel in Rust. Turns out the borrow checker has opinions about interrupt handlers.',
    stack: ['Rust'],
  },
  {
    id: 'bootloader-asm',
    name: 'bootloader-asm',
    tagline: 'x86 bootloader in pure assembly',
    description:
      'Real-mode to protected-mode. The 47 most important bytes of any computer\'s life.',
    stack: ['x86 ASM'],
  },
  {
    id: 'void-allocator',
    name: 'VoidAllocator',
    tagline: 'Memory allocator for bulk integers',
    description:
      'Tuned for bulk integer allocations. Turns out when you stop pretending everything is a generic object, things get fast.',
    stack: ['C++'],
  },
  {
    id: 'bgkernel',
    name: 'bgkernel',
    tagline: 'Real working kernel model',
    description:
      'Bootloading, interrupts, the whole stack. Yes it actually boots.',
    stack: ['C++', 'ASM'],
  },
  {
    id: 'quantum-teleport',
    name: 'QuantumTeleportMAUI',
    tagline: 'Quantum teleportation simulator',
    description:
      'I wanted to understand quantum computing so I built a teleporter. No particles were harmed.',
    stack: ['Q#', 'C#'],
  },
];

export default function Projects() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-3 gap-12">
      {/* Main content */}
      <div className="lg:col-span-2">
        <div className="mb-8">
          <h1 className="text-3xl font-light text-white mb-2">projects</h1>
          <p className="text-slate-400">
            A collection of things I&apos;ve built. Some are production-ready, others are experiments in understanding systems.
          </p>
        </div>

        <div className="space-y-8">
          {projects.map((project) => (
            <article key={project.id} className="pb-6 border-b border-slate-700 last:border-0">
              <h2 className="text-lg text-white font-medium mb-1">
                {project.github ? (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300"
                  >
                    {project.name}
                  </a>
                ) : (
                  project.name
                )}
              </h2>
              <p className="text-slate-500 text-sm mb-3">
                {project.tagline}
              </p>
              <p className="text-slate-300 text-sm mb-3 leading-relaxed">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span
                    key={`${project.id}-${tech}`}
                    className="text-xs px-2 py-1 bg-slate-800 text-slate-300 rounded border border-slate-700"
                  >
                    {tech}
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
          <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wide mb-4">Tech Stack</h3>
          <div className="space-y-2 text-sm text-slate-400">
            <p><span className="text-blue-400">Languages:</span> C, C++, Rust, Haskell, Q#</p>
            <p><span className="text-blue-400">Systems:</span> LLVM, RISC-V, x86 Assembly</p>
            <p><span className="text-blue-400">Tools:</span> GTK, GLib, CMake, Make</p>
          </div>
        </div>
      </aside>
    </main>
  );
}
