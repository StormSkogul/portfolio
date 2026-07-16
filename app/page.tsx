import { Nav } from '@/components/nav';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Nav />
      
      <main className="space-y-6">
        <section>
          <h1 className="text-3xl font-bold mb-2">janmejaya panda</h1>
          <p className="text-lg text-gray-700 mb-4">
            systems programmer. LLVM/Clang contributor since 2025.
          </p>
          <p className="text-gray-700">
            I work on clang semantic analysis hardening, llvm-libc functions, and RISC-V codegen research. I like working on things where a single misplaced bit can ruin someone&apos;s entire Tuesday.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-4">What I&apos;m into</h2>
          <div className="space-y-3 text-gray-700">
            <p>
              <strong>Computing:</strong> I dissect computers from the Linux Kernel to the LLVM IR. Currently architecting experimental kernels, compiler debuggers, and low-level systems. Considers sleep(8) optional.
            </p>
            <p>
              <strong>Cinema:</strong> Obsessed with how movies look. I study directors like Kubrick, Kurosawa, Tarantino, and Coppola. The way they handle light, movement, and composition teaches me how to care about details in code.
            </p>
            <p>
              <strong>Music:</strong> Shoegaze, dreampop, and wall-of-sound rock. My Spotify is basically reverb and echoing vocals blurred into a beautiful mess.
            </p>
            <p>
              <strong>Games:</strong> FromSoftware titles. The &quot;git gud&quot; mindset is useful for building kernels—you keep trying until it clicks.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-4">Currently</h2>
          <p className="text-gray-700">
            Primary active project: <Link href="/projects" className="text-blue-600 hover:underline">Aion</Link>, an LLVM optimization debugger that answers the question every compiler engineer loses sleep over: &quot;why didn&apos;t it optimize?&quot;
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-4">Quick links</h2>
          <ul className="list-none space-y-2">
            <li>
              <Link href="/projects" className="text-blue-600 hover:underline">
                See all my projects →
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-blue-600 hover:underline">
                More about me →
              </Link>
            </li>
            <li>
              <Link href="/blog" className="text-blue-600 hover:underline">
                Read my thoughts →
              </Link>
            </li>
            <li>
              <a 
                href="https://github.com/janmejayapanda400" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                github →
              </a>
            </li>
          </ul>
        </section>

        <footer className="mt-12 pt-8 border-t border-gray-200 text-sm text-gray-600">
          <p>built with Next.js. deployed on Vercel.</p>
        </footer>
      </main>
    </>
  );
}
