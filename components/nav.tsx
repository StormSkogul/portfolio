import Link from 'next/link';

export function Nav() {
  return (
    <nav className="mb-12 pb-4 border-b border-gray-200">
      <div className="flex gap-6 text-sm">
        <Link href="/" className="font-bold hover:text-blue-600">
          home
        </Link>
        <Link href="/about" className="hover:text-blue-600">
          about
        </Link>
        <Link href="/blog" className="hover:text-blue-600">
          blog
        </Link>
        <Link href="/projects" className="hover:text-blue-600">
          projects
        </Link>
      </div>
    </nav>
  );
}
