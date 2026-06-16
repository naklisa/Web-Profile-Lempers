export default function HeroSection() {
  return (
    <section className="glass-card border border-white/10 p-10 shadow-glow">
      <div className="grid gap-8 lg:grid-cols-[1.3fr_0.7fr]">
        <div className="space-y-6">
          <p className="text-sm uppercase tracking-[0.35em] text-itera-textMuted">UKM Lembaga Pers ITERA</p>
          <h1 className="text-5xl font-extrabold leading-tight text-white">
            Portal Berita Kampus Itera dengan Nuansa Glassmorphism & Dark Mode.
          </h1>
          <p className="max-w-2xl text-lg text-itera-textMuted">
            Selamat datang di situs resmi Lembaga Pers ITERA, tempat suara mahasiswa, aspirasi kampus, dan program kerja berintegritas berpadu dalam pengalaman digital modern.
          </p>
          <div className="flex flex-wrap gap-3">
            <a href="/aspirasi" className="rounded-full bg-itera-accent px-6 py-3 text-sm font-bold text-black transition hover:bg-itera-accentSecondary">
              Kirim Aspirasi
            </a>
            <a href="/oprec" className="rounded-full border border-itera-gold px-6 py-3 text-sm font-bold text-itera-gold transition hover:bg-itera-gold/10">
              Bergabung Sekarang
            </a>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-itera-card via-transparent to-itera-card p-6">
          <div className="absolute inset-0 bg-glass-gradient opacity-80" />
          <div className="relative space-y-6">
            <div className="rounded-3xl border border-white/5 bg-black/30 p-6 text-itera-textMuted shadow-xl">
              <p className="text-sm uppercase tracking-[0.35em] text-itera-gold">Update Terkini</p>
              <h2 className="mt-3 text-2xl font-bold text-white">Berita Pilihan</h2>
              <p className="mt-3 text-sm leading-6">
                Ikuti liputan kampus terbaru, pergerakan redaksi, dan agenda eksklusif LPI yang membangun narasi teknologi dan budaya akademik.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl border border-white/5 bg-black/30 p-5 text-sm text-itera-textMuted">
                <p className="font-bold text-white">Statistik</p>
                <p className="mt-3">45+ anggota aktif</p>
                <p>100+ bulletin edisi</p>
              </div>
              <div className="rounded-3xl border border-white/5 bg-black/30 p-5 text-sm text-itera-textMuted">
                <p className="font-bold text-white">Agenda</p>
                <p className="mt-3">Pelatihan jurnalistik</p>
                <p>Kolaborasi karya kampus</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
