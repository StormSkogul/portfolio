import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({ subsets: ['latin'] });
const geistMono = Geist_Mono({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'janmejaya panda',
  description: 'systems programmer. LLVM/Clang contributor. working on experimental kernels, compilers, and low-level systems.',
  authors: [{ name: 'janmejaya panda' }],
  creator: 'janmejaya panda',
  openGraph: {
    title: 'janmejaya panda',
    description: 'systems programmer. LLVM/Clang contributor.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${geistSans.className} bg-white text-black`}>
      <body className={geistMono.className}>
        <div className="max-w-2xl mx-auto px-4 py-8 md:py-12 font-sans">
          {children}
        </div>
      </body>
    </html>
  );
}
