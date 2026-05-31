import type { ReactNode } from 'react';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="bg-void text-white min-h-screen selection:bg-white selection:text-black overflow-x-hidden">
      <main>{children}</main>
    </div>
  );
}
