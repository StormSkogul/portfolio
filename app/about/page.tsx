import { Nav } from '@/components/nav';
import Image from 'next/image';

const films = [
  'Seven Samurai (1954) — Kurosawa\'s incredible use of horizontal movement.',
  'Ran (1985) — How color hits you emotionally before you even know what\'s happening.',
  '2001: A Space Odyssey (1968) — Kubrick\'s absolute technical perfection.',
  'Barry Lyndon (1975) — Every frame looks like a painting for a reason.',
  'The Shining (1980) — The way the camera moves makes you feel trapped.',
  'Pulp Fiction (1994) — The best dialogue and structure in any crime movie.',
  'Inglourious Basterds (2009) — The opening scene is a lesson in building tension.',
  'Kill Bill (2003) — Just a wild, beautiful mix of genres.',
  'Apocalypse Now (1979) — Coppola\'s visual descent into madness. "I love the smell of napalm in the morning."',
];

const albums = [
  'My Bloody Valentine – Loveless — probably what started it all for me.',
  'Slowdive – Souvlaki — the most beautiful dreampop album I\'ve ever found.',
  'Cocteau Twins – Heaven or Las Vegas — the vocals here are just incredible.',
  'The Jesus and Mary Chain – Psychocandy — love how they turn feedback into something catchy.',
  'Ride – Nowhere — early UK shoegaze at its best.',
  'Lush – Spooky — another great one for those layered, echoing sounds.',
  'Deftones – White Pony — heavy and atmospheric at the same time.',
  'Beach House – Bloom — modern dreampop with great textures.',
  'Whirr – Sway — for when I want something really loud and crushing.',
];

const games = [
  'Sekiro: Shadows Die Twice — my favorite parry system in any game. Always down for a speedrun challenge.',
  'Dark Souls / Elden Ring — iconic level design that makes you learn from every mistake.',
  'Ghost of Tsushima — the look of this game is amazing (huge Kurosawa fan, obviously).',
  'Resident Evil — love the classic games and the whole legacy series.',
  'CS:GO / CoD — what I play when I just want to test my reflexes.',
];

export default function About() {
  return (
    <>
      <Nav />
      
      <main className="space-y-12">
        <section>
          <h1 className="text-3xl font-bold mb-6">about me</h1>
          
          <div className="space-y-4 text-gray-700">
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
              {films.map((film, idx) => (
                <li key={idx} className="text-gray-700">
                  {film}
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
          <h2 className="text-2xl font-bold mb-4">music</h2>
          <p className="text-gray-700 mb-6">
            I listen to a lot of shoegaze, rock, and dreampop. I&apos;ve always loved bands that can create a massive wall of sound where everything just blurs together. Most of my Spotify is basically just a collection of reverb and echoing vocals.
          </p>
          
          <h3 className="text-lg font-bold mb-4">on rotation</h3>
          <ul className="space-y-2">
            {albums.map((album, idx) => (
              <li key={idx} className="text-gray-700">
                {album}
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">games</h2>
          <p className="text-gray-700 mb-6">
            I tend to like games that are actually hard and force you to really pay attention. Mostly FromSoftware stuff. I think that &quot;git gud&quot; mindset is actually pretty useful for building kernels—you just keep trying until it finally clicks. If it&apos;s too easy, I usually get bored pretty fast.
          </p>
          
          <h3 className="text-lg font-bold mb-4">playing</h3>
          <ul className="space-y-2">
            {games.map((game, idx) => (
              <li key={idx} className="text-gray-700">
                {game}
              </li>
            ))}
          </ul>
        </section>

        <footer className="mt-12 pt-8 border-t border-gray-200 text-sm text-gray-600">
          <p>Want to chat about any of this? Find me on GitHub.</p>
        </footer>
      </main>
    </>
  );
}
