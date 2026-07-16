import Image from 'next/image';

const films = [
  { id: 'seven-samurai', text: 'Seven Samurai (1954) — Kurosawa\'s incredible use of horizontal movement.' },
  { id: 'ran', text: 'Ran (1985) — How color hits you emotionally before you even know what\'s happening.' },
  { id: '2001', text: '2001: A Space Odyssey (1968) — Kubrick\'s absolute technical perfection.' },
  { id: 'barry-lyndon', text: 'Barry Lyndon (1975) — Every frame looks like a painting for a reason.' },
  { id: 'the-shining', text: 'The Shining (1980) — The way the camera moves makes you feel trapped.' },
  { id: 'pulp-fiction', text: 'Pulp Fiction (1994) — The best dialogue and structure in any crime movie.' },
  { id: 'inglourious', text: 'Inglourious Basterds (2009) — The opening scene is a lesson in building tension.' },
  { id: 'kill-bill', text: 'Kill Bill (2003) — Just a wild, beautiful mix of genres.' },
  { id: 'apocalypse-now', text: 'Apocalypse Now (1979) — Coppola\'s visual descent into madness. "I love the smell of napalm in the morning."' },
];

const albums = [
  { id: 'mbv-loveless', text: 'My Bloody Valentine – Loveless — probably what started it all for me.' },
  { id: 'slowdive-souvlaki', text: 'Slowdive – Souvlaki — the most beautiful dreampop album I\'ve ever found.' },
  { id: 'cocteau-twins', text: 'Cocteau Twins – Heaven or Las Vegas — the vocals here are just incredible.' },
  { id: 'jamc', text: 'The Jesus and Mary Chain – Psychocandy — love how they turn feedback into something catchy.' },
  { id: 'ride-nowhere', text: 'Ride – Nowhere — early UK shoegaze at its best.' },
  { id: 'lush-spooky', text: 'Lush – Spooky — another great one for those layered, echoing sounds.' },
  { id: 'deftones-white', text: 'Deftones – White Pony — heavy and atmospheric at the same time.' },
  { id: 'beach-house', text: 'Beach House – Bloom — modern dreampop with great textures.' },
  { id: 'whirr-sway', text: 'Whirr – Sway — for when I want something really loud and crushing.' },
];

const games = [
  { id: 'sekiro', text: 'Sekiro: Shadows Die Twice — my favorite parry system in any game. Always down for a speedrun challenge.' },
  { id: 'dark-souls', text: 'Dark Souls / Elden Ring — iconic level design that makes you learn from every mistake.' },
  { id: 'ghost-tsushima', text: 'Ghost of Tsushima — the look of this game is amazing (huge Kurosawa fan, obviously).' },
  { id: 'resident-evil', text: 'Resident Evil — love the classic games and the whole legacy series.' },
  { id: 'competitive', text: 'CS:GO / CoD — what I play when I just want to test my reflexes.' },
];

export default function About() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-3 gap-12">
      {/* Main content */}
      <div className="lg:col-span-2 space-y-12">
        <section>
          <h1 className="text-3xl font-light text-white mb-6">about me</h1>
          
          <div className="space-y-4 text-slate-300 leading-relaxed">
            <p>
              I&apos;m a systems programmer obsessed with how software talks to hardware. Started contributing to LLVM/Clang in 2025, focusing on semantic analysis hardening, llvm-libc functions, and RISC-V codegen research.
            </p>
            
            <p>
              I don&apos;t just use computers; I dissect them. From the Linux Kernel to the LLVM IR, I&apos;m driven by understanding the layers below. I&apos;ve spent nights debugging malloc crimes, architecting experimental kernels, building compiler debuggers, and writing memory allocators that don&apos;t leak.
            </p>

            <p>
              <strong>Languages I work with:</strong> C, C++, Rust, Haskell, Go, Java, Python, x86/RISC-V Assembly
            </p>

            <p>
              <strong>Things I break:</strong> Linux kernels, memory allocators, compiler pipelines, bytecode VMs
            </p>

            <p>
              <strong>Tools I use:</strong> LLVM, CMake, Docker, GDB, Git, PyTorch, TensorFlow
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">cinema</h2>
          <p className="text-gray-700 mb-4">
            I&apos;m obsessed with movies, especially how they look. I spend a lot of time studying directors like Kubrick, Kurosawa, Tarantino, and Coppola. Every shot they take feels like it was handled with so much care.
          </p>
          <p className="text-gray-700 mb-6">
            There are a few shots that just stay in my head. Like the way Kurosawa handles movement in Seven Samurai, or that entire movie Barry Lyndon which was shot entirely in candlelight with vintage lenses. Even just the tension in a Tarantino opening—it&apos;s just perfect. I try to bring that same level of care to my code.
          </p>
          
          <div className="mb-8">
            <h3 className="text-lg font-bold mb-4">favorite films</h3>
            <ul className="space-y-2">
              {films.map((film) => (
                <li key={film.id} className="text-gray-700">
                  {film.text}
                </li>
              ))}
            </ul>
          </div>

          <div className="my-8 rounded overflow-hidden">
            <img 
              src="/cinema-collage.jpg" 
              alt="Cinema stills collage" 
              className="w-full h-auto"
            />
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-light text-white mb-4">games</h2>
          <p className="text-slate-300 mb-6 leading-relaxed">
            I tend to like games that are actually hard and force you to really pay attention. Mostly FromSoftware stuff. I think that &quot;git gud&quot; mindset is actually pretty useful for building kernels—you just keep trying until it finally clicks. If it&apos;s too easy, I usually get bored pretty fast.
          </p>
          
          <h3 className="text-lg font-medium text-white mb-4">playing</h3>
          <ul className="space-y-2">
            {games.map((game) => (
              <li key={game.id} className="text-slate-300 text-sm">
                {game.text}
              </li>
            ))}
          </ul>
        </section>
      </div>

      {/* Sidebar */}
      <aside className="lg:col-span-1">
        <div className="sticky top-32">
          <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wide mb-4">Skills</h3>
          <div className="space-y-3 text-sm text-slate-400">
            <p><span className="text-blue-400">Languages:</span> C, C++, Rust, Haskell, Python</p>
            <p><span className="text-blue-400">Systems:</span> LLVM, Linux, RISC-V, x86</p>
            <p><span className="text-blue-400">Tools:</span> GDB, Perf, Valgrind</p>
          </div>
        </div>
      </aside>
    </main>
  );
}
