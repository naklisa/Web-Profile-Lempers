'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const menuStructure = [
  {
    label: 'Berita',
    href: '/',
    type: 'link',
  },
  {
    label: 'Tentang Kami',
    type: 'dropdown',
    items: [
      { href: '/tentang', label: 'Tentang LPI' },
      { href: '/tim', label: 'Struktur Organisasi' },
      { href: '/layanan', label: 'Layanan Kami' },
    ],
  },
  {
    label: 'Konten',
    type: 'dropdown',
    items: [
      { href: '/blog', label: 'Blog' },
      { href: '/portfolio', label: 'Portfolio' },
    ],
  },
  {
    label: 'Berinteraksi',
    type: 'dropdown',
    items: [
      { href: 'https://interaksi.vercel.app/', label: 'Aspirasi Mahasiswa' },
      { href: '/oprec', label: 'Daftar Magang' },
      { href: '/partnership', label: 'Partnership' },
    ],
  },
];

function DropdownMenu({ label, items, pathname }: { label: string; items: any[]; pathname: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative group">
      <button
        className="flex items-center gap-1.5 rounded-xl px-4 py-2 text-xs font-bold text-itera-textMuted hover:bg-zinc-800/80 hover:text-white transition"
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
      >
        <span>{label}</span>
        <i className={`fa-solid fa-chevron-down text-[10px] transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      <div
        className={`absolute left-0 top-full mt-2 w-48 rounded-2xl bg-zinc-900 border border-zinc-800 shadow-xl transition-all duration-200 ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
          }`}
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
      >
        {items.map((item) => {
          const active = pathname === item.href;
          const isExternal = item.href.startsWith('http');
          return (
            <Link
              key={item.href}
              href={item.href}
              target={isExternal ? '_blank' : undefined}
              rel={isExternal ? 'noopener noreferrer' : undefined}
              className={`block px-4 py-3 text-xs font-bold rounded-lg mx-2 transition ${active
                ? 'bg-zinc-800 text-white'
                : 'text-itera-textMuted hover:bg-zinc-800/80 hover:text-white'
                } first:mt-2 last:mb-2`}
            >
              {item.label}
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="glass-nav sticky top-0 z-40">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-4">
        <Link href="/" className="flex items-center gap-3">
          <img src="/logo.png" alt="UKM LPI Logo" className="h-12 w-12 object-contain rounded-xl" />
          <div>
            <h1 className="text-xl font-extrabold text-transparent bg-gradient-to-r from-white to-zinc-400 bg-clip-text">
              UKM Lembaga Pers ITERA
            </h1>
          </div>
        </Link>

        <nav className="flex flex-wrap items-center justify-center gap-2 rounded-2xl bg-zinc-900/60 px-2 py-2 text-xs font-bold text-white ring-1 ring-white/10">
          {menuStructure.map((item) => {
            if (item.type === 'link') {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href as any}
                  className={`rounded-xl px-4 py-2 transition ${active ? 'bg-zinc-800 text-white shadow-glow' : 'text-itera-textMuted hover:bg-zinc-800/80 hover:text-white'
                    }`}
                >
                  {item.label}
                </Link>
              );
            } else {
              return (
                <DropdownMenu
                  key={item.label}
                  label={item.label}
                  items={item.items}
                  pathname={pathname}
                />
              );
            }
          })}
        </nav>
      </div>
    </header>
  );
}
