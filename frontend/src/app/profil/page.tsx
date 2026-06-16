export default function ProfilPage() {
  return (
    <main className="min-h-screen bg-itera-bg px-6 py-10 text-itera-textPrimary">
      <section className="mx-auto max-w-6xl space-y-8">
        <div className="glass-card p-8 shadow-glow">
          <p className="text-sm uppercase tracking-[0.35em] text-itera-textMuted">Profil UKM</p>
          <h1 className="mt-3 text-4xl font-extrabold">Sejarah & Visi Misi</h1>
          <p className="mt-4 text-itera-textMuted">
            Lembaga Pers ITERA hadir sejak 2016 sebagai unit kegiatan mahasiswa yang mengedepankan peliputan, edukasi jurnalistik, dan kreativitas media kampus.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <div className="glass-card p-8 shadow-glow">
            <h2 className="text-2xl font-semibold">Sejarah Singkat</h2>
            <p className="mt-4 text-itera-textMuted">
              Dari awal kelahiran hingga kini, LPI menjadi ruang produksi berita, feature, dan program mapos yang menjadi jantung suara mahasiswa ITERA.
            </p>
          </div>
          <div className="glass-card p-8 shadow-glow">
            <h2 className="text-2xl font-semibold">Visi & Misi</h2>
            <ul className="mt-4 space-y-3 text-itera-textMuted">
              <li>• Mewujudkan media kampus yang independen, kreatif, dan berintegritas.</li>
              <li>• Menguatkan literasi jurnalistik dan aspirasi mahasiswa ITERA.</li>
              <li>• Menjadi suara terpercaya untuk isu kampus dan lingkungan.</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
