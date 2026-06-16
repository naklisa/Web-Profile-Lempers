'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
  { href: '/', label: 'Berita & Liputan' },
  { href: '/profil', label: 'Profil UKM' },
  { href: '/proker', label: 'Program Kerja' },
  { href: '/aspirasi', label: 'Pojok Aspirasi' },
  { href: '/oprec', label: 'Magang Pers' },
  { href: '/admin', label: 'Admin' },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="glass-nav sticky top-0 z-40">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-4">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-tr from-itera-red to-itera-gold text-white text-2xl font-extrabold">
            PI
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-itera-textMuted">UKM MANDIRI</p>
            <h1 className="text-xl font-extrabold text-transparent bg-gradient-to-r from-white to-zinc-400 bg-clip-text">
              Lembaga Pers ITERA
            </h1>
          </div>
        </Link>

        <nav className="flex flex-wrap items-center justify-center gap-2 rounded-2xl bg-zinc-900/60 px-2 py-2 text-xs font-bold text-white ring-1 ring-white/10">
          {links.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-xl px-4 py-2 transition ${
                  active ? 'bg-zinc-800 text-white shadow-glow' : 'text-itera-textMuted hover:bg-zinc-800/80 hover:text-white'
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
