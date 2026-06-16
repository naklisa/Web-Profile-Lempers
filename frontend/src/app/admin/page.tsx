export default function AdminPage() {
  return (
    <main className="min-h-screen bg-itera-bg px-6 py-10 text-itera-textPrimary">
      <section className="mx-auto max-w-6xl space-y-8">
        <div className="glass-card p-8 shadow-glow">
          <p className="text-sm uppercase tracking-[0.35em] text-itera-textMuted">Dashboard Internal</p>
          <h1 className="mt-3 text-4xl font-extrabold">CMS Editorial Board</h1>
          <p className="mt-4 text-itera-textMuted">
            Backend admin untuk mengelola berita, aspirasi, dan aktivitas kampus dengan keamanan token JWT.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          <div className="glass-card p-6 shadow-glow">
            <h2 className="text-xl font-semibold">Kontrol Berita</h2>
            <p className="mt-3 text-itera-textMuted">CRUD artikel dan kategori untuk tampilan homepage.
</p>
          </div>
          <div className="glass-card p-6 shadow-glow">
            <h2 className="text-xl font-semibold">Manajemen Aspirasi</h2>
            <p className="mt-3 text-itera-textMuted">Moderasi, voting, dan status aspirasi mahasiswa ITERA.</p>
          </div>
          <div className="glass-card p-6 shadow-glow">
            <h2 className="text-xl font-semibold">Pengaturan Redaksi</h2>
            <p className="mt-3 text-itera-textMuted">Kelola struktur organisasi dan update statisik anggota.
</p>
          </div>
        </div>
      </section>
    </main>
  );
}
