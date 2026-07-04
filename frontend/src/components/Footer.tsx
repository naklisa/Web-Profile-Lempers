import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/40 backdrop-blur-md py-16 text-itera-textMuted relative overflow-hidden">
      {/* Background glow orbs */}
      <div className="absolute -bottom-10 -left-10 w-72 h-72 bg-itera-red/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -top-10 -right-10 w-72 h-72 bg-itera-gold/5 rounded-full blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-white/5">
          {/* Logo & Description */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <img src="/logo.png" alt="UKM LPI Logo" className="h-10 w-10 object-contain rounded-lg" />
              <div>
                <h3 className="text-md font-extrabold text-white">
                  UKM Lembaga Pers ITERA
                </h3>
              </div>
            </div>
            <p className="text-xs leading-relaxed max-w-sm text-itera-textMuted">
              Situs resmi UKM Lembaga Pers ITERA (LPI) - Institut Teknologi Sumatera. Tempat suara mahasiswa, aspirasi kampus, dan program kerja berintegritas berpadu dalam media kampus terpercaya.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Navigasi Cepat</h4>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <Link href="/" className="hover:text-white transition">Berita</Link>
              <Link href="/tentang" className="hover:text-white transition">Tentang LPI</Link>
              <Link href="/tim" className="hover:text-white transition">Struktur Organisasi</Link>
              <Link href="/layanan" className="hover:text-white transition">Layanan</Link>
              <Link href="/blog" className="hover:text-white transition">Blog</Link>
              <Link href="/portfolio" className="hover:text-white transition">Portfolio</Link>
              <Link href="/oprec" className="hover:text-white transition">Magang</Link>
              <Link href="/partnership" className="hover:text-white transition">Kemitraan</Link>
            </div>
          </div>

          {/* Saluran Resmi LPI */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Hubungi Kami (Saluran Resmi)</h4>
            <div className="space-y-3 text-xs">
              <a
                href="mailto:lembagapers.itera@gmail.com"
                className="flex items-center gap-2.5 hover:text-white transition group"
              >
                <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-white/5 border border-white/10 group-hover:bg-white/10 transition">
                  <i className="fa-solid fa-envelope text-itera-gold" />
                </span>
                <span>lembagapers.itera@gmail.com</span>
              </a>

              <a
                href="https://wa.me/6281234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 hover:text-white transition group"
              >
                <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-white/5 border border-white/10 group-hover:bg-white/10 transition">
                  <i className="fa-brands fa-whatsapp text-emerald-400" />
                </span>
                <span>+62 812-3456-7890 (Humas)</span>
              </a>

              <div className="flex items-start gap-2.5">
                <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-white/5 border border-white/10 shrink-0">
                  <i className="fa-solid fa-location-dot text-itera-red" />
                </span>
                <span className="leading-relaxed text-itera-textMuted">
                  Kampus ITERA, Gedung UKM Mandiri, Lampung Selatan
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p>© 2026 UKM UKM Lembaga Pers ITERA. Hak cipta dilindungi.</p>
          <p>Institut Teknologi Sumatera • Kampus Pendidikan & Media Kampus.</p>
        </div>
      </div>
    </footer>
  );
}

