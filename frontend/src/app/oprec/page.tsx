export default function OprecPage() {
  return (
    <main className="min-h-screen bg-itera-bg px-6 py-10 text-itera-textPrimary">
      <section className="mx-auto max-w-4xl space-y-8">
        <div className="glass-card p-8 shadow-glow">
          <p className="text-sm uppercase tracking-[0.35em] text-itera-textMuted">Magang Pers</p>
          <h1 className="mt-3 text-4xl font-extrabold">Open Recruitment 2026</h1>
          <p className="mt-4 text-itera-textMuted">
            Buka peluang bagi mahasiswa kreatif dan digital untuk bergabung dalam divisi reporter, editor, fotografer, desain, dan IT.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {['Reporter', 'Editor', 'Fotografer', 'Designer', 'IT Dev'].map((role) => (
            <div key={role} className="glass-card p-6 shadow-glow">
              <h2 className="text-xl font-semibold">{role}</h2>
              <p className="mt-3 text-itera-textMuted">Peran strategis untuk menghadirkan konten kampus dan pengalaman media digital yang kuat.</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
