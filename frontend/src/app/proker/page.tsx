export default function ProkerPage() {
  return (
    <main className="min-h-screen bg-itera-bg px-6 py-10 text-itera-textPrimary">
      <section className="mx-auto max-w-6xl space-y-8">
        <div className="glass-card p-8 shadow-glow">
          <p className="text-sm uppercase tracking-[0.35em] text-itera-textMuted">Program Kerja</p>
          <h1 className="mt-3 text-4xl font-extrabold">Program Unggulan 2026</h1>
          <p className="mt-4 text-itera-textMuted">
            Inisiatif LPI memfokuskan pada peliputan kelas, Pers Mengajar, serta produksi konten kreatif bagi mahasiswa ITERA.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          <div className="glass-card p-6 shadow-glow">
            <h2 className="text-xl font-semibold">PJTD</h2>
            <p className="mt-3 text-itera-textMuted">Pelatihan jurnalistik dan teknik penulisan wartawan kampus untuk generasi baru.</p>
          </div>
          <div className="glass-card p-6 shadow-glow">
            <h2 className="text-xl font-semibold">Gema Sumatra Bulletin</h2>
            <p className="mt-3 text-itera-textMuted">Publikasi berkala yang menghadirkan analisis, wawancara, dan opini dalam dunia kampus.</p>
          </div>
          <div className="glass-card p-6 shadow-glow">
            <h2 className="text-xl font-semibold">Lembaga Pers Mengajar</h2>
            <p className="mt-3 text-itera-textMuted">Program pendidikan jurnalistik bagi jurusan dan komunitas kampus ITERA.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
