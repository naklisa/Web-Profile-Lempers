export default function AspirasiPage() {
  return (
    <main className="min-h-screen bg-itera-bg px-6 py-10 text-itera-textPrimary">
      <section className="mx-auto max-w-6xl space-y-8">
        <div className="glass-card p-8 shadow-glow">
          <p className="text-sm uppercase tracking-[0.35em] text-itera-textMuted">Pojok Aspirasi</p>
          <h1 className="mt-3 text-4xl font-extrabold">Aspirasi Mahasiswa ITERA</h1>
          <p className="mt-4 text-itera-textMuted">
            Kirimkan ide dan masukan terkait kampus, kegiatan UKM, serta isu penting yang ingin disuarakan.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <div className="glass-card p-6 shadow-glow">
            <h2 className="text-xl font-semibold">Form Aspirasi</h2>
            <p className="mt-3 text-itera-textMuted">Segera hadir formulir aspirasi interaktif dengan sistem voting dan moderation internal.</p>
          </div>
          <div className="glass-card p-6 shadow-glow">
            <h2 className="text-xl font-semibold">Tema Populer</h2>
            <ul className="mt-4 space-y-3 text-itera-textMuted">
              <li>• Akses fasilitas kampus</li>
              <li>• Lingkungan belajar & mahasiswa</li>
              <li>• Kebijakan organisasi & event</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
