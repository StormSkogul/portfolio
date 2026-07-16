import Link from 'next/link';

export default function Home() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-light text-white mb-2">janmejaya panda</h1>
      <p className="text-slate-400 mb-8">systems programmer. LLVM/Clang contributor.</p>

      <div className="space-y-6 text-slate-300 leading-relaxed">
        <p>I work on clang semantic analysis hardening, llvm-libc functions, and RISC-V codegen research. I like working on things where a single misplaced bit can ruin someone&apos;s entire Tuesday.</p>

        <h2 className="text-xl font-semibold text-white mt-8">Computing</h2>
        <p>I dissect computers from the Linux Kernel to the LLVM IR. Currently architecting experimental kernels, compiler debuggers, and low-level systems. Considers sleep optional.</p>

        <h2 className="text-xl font-semibold text-white">Cinema</h2>
        <p>Obsessed with how movies look. I study directors like Kubrick, Kurosawa, Tarantino, and Coppola. The way they handle light and composition teaches me to care about details in code.</p>

        <h2 className="text-xl font-semibold text-white">Music</h2>
        <p>Shoegaze, dreampop, and wall-of-sound rock. My Spotify is basically reverb and echoing vocals blurred into a beautiful mess.</p>

        <h2 className="text-xl font-semibold text-white">Games</h2>
        <p>FromSoftware titles. The &quot;git gud&quot; mindset is useful for building kernels—you keep trying until it clicks.</p>

        <div className="pt-4 border-t border-slate-700 mt-8">
          <h2 className="text-xl font-semibold text-white mb-4">Links</h2>
          <ul className="space-y-2">
            <li><Link href="/projects" className="text-blue-400 hover:underline">Projects</Link></li>
            <li><Link href="/blog" className="text-blue-400 hover:underline">Blog</Link></li>
            <li><Link href="/about" className="text-blue-400 hover:underline">About</Link></li>
            <li><a href="https://github.com/janmejayapanda400" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">GitHub</a></li>
          </ul>
        </div>
      </div>
    </main>
  );
}
