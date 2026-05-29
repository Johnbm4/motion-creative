export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-black text-white min-h-screen selection:bg-white selection:text-black">
      <nav className="fixed top-0 w-full p-10 flex justify-between z-50 mix-blend-difference">
        <span className="font-bold tracking-widest text-xs">MOTION</span>
        <div className="flex gap-8 text-[10px] uppercase tracking-widest">
          <span>Work</span>
          <span>Manifesto</span>
        </div>
      </nav>

      <main className="pt-32">{children}</main>

      <footer className="p-20 text-center border-t border-gray-900 mt-32">
        <p className="text-gray-500 text-[10px] uppercase tracking-widest">
          © 2026 Motion Creative. Built in Addis.
        </p>
      </footer>
    </div>
  );
}
