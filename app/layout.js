import './globals.css';
import Nav from '@/components/nav';

export const metadata = {
  title: 'janmejaya panda',
  description: 'systems programmer. LLVM/Clang contributor. working on experimental kernels, compilers, and low-level systems.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="bg-slate-950 text-slate-100">
      <body className="bg-slate-950">
        <Nav />
        <div className="min-h-screen bg-slate-950">
          {children}
        </div>
      </body>
    </html>
  );
}
