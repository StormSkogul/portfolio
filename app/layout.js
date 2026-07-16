import './globals.css';

export const metadata = {
  title: 'janmejaya panda',
  description: 'systems programmer. LLVM/Clang contributor. working on experimental kernels, compilers, and low-level systems.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="bg-white text-black">
      <body>
        <div className="max-w-2xl mx-auto px-4 py-8 md:py-12">
          {children}
        </div>
      </body>
    </html>
  );
}
