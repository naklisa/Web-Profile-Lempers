'use client';

import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

export default function ProfilPage() {
  const milestones = [
    { year: '2016', title: 'Awal Pendirian', desc: 'LPI resmi didirikan sebagai Unit Kegiatan Mahasiswa (UKM) mandiri untuk memfasilitasi kebutuhan pers di kampus ITERA.' },
    { year: '2019', title: 'Digitalisasi Media', desc: 'Meluncurkan portal berita online pertama LPI dan mendirikan divisi IT khusus untuk pengembangan web.' },
    { year: '2022', title: 'Pilar Aspirasi', desc: 'Mengintegrasikan portal pengaduan aspirasi mahasiswa secara terstruktur dengan sistem moderasi internal.' },
    { year: '2026', title: 'Transformasi Visual', desc: 'Melakukan perombakan platform web secara menyeluruh untuk menghadirkan visualisasi pers modern dan interaktif.' },
  ];

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-itera-bg text-itera-textPrimary pb-24 relative overflow-hidden">
        {/* Glow Effects */}
        <div className="absolute top-10 left-10 w-96 h-96 bg-itera-gold/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-itera-red/10 rounded-full blur-3xl pointer-events-none" />

        <section className="relative px-6 py-20 max-w-7xl mx-auto z-10">
          <div className="text-center max-w-3xl mx-auto space-y-6 mb-16">
            <span className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold tracking-widest text-itera-gold uppercase">
              Profil Organisasi
            </span>
            <h1 className="text-4xl md:text-5xl font-black tracking-tight">
              Sejarah & Landasan Nilai LPI
            </h1>
            <p className="text-lg text-itera-textMuted leading-relaxed">
              Menelusuri jejak langkah UKM Lembaga Pers ITERA dari masa ke masa serta prinsip pokok yang mendasari pergerakan pers kampus kami.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {/* Sejarah */}
            <div className="glass-card rounded-3xl p-8 md:p-10 border border-white/5 space-y-4">
              <h2 className="text-2xl font-extrabold text-white flex items-center gap-3">
                <span className="w-2 h-8 rounded bg-gradient-to-b from-itera-gold to-itera-red" />
                Sejarah Singkat LPI
              </h2>
              <div className="text-itera-textMuted space-y-4 leading-relaxed">
                <p>
                  Didirikan pada tahun 2016, UKM Lembaga Pers ITERA (LPI) lahir dari inisiatif para mahasiswa yang melihat pentingnya kehadiran media independen sebagai penyalur informasi yang valid di tengah perkembangan pesat Institut Teknologi Sumatera.
                </p>
                <p>
                  Seiring berjalannya waktu, LPI tidak hanya berfokus pada peliputan berita konvensional, tetapi berkembang menjadi wadah edukasi jurnalistik, produksi konten kreatif multi-platform, hingga mediator aspirasi mahasiswa dengan pihak birokrasi kampus.
                </p>
              </div>
            </div>

            {/* Visi Misi */}
            <div className="glass-card rounded-3xl p-8 md:p-10 border border-white/5 space-y-4">
              <h2 className="text-2xl font-extrabold text-white flex items-center gap-3">
                <span className="w-2 h-8 rounded bg-gradient-to-b from-itera-red to-rose-600" />
                Visi & Misi Utama
              </h2>
              <ul className="space-y-4 text-itera-textMuted">
                {[
                  "Mewujudkan media pers mahasiswa yang berdaulat, jujur, serta berimbang dalam menyajikan fakta kampus.",
                  "Mengembangkan kompetensi literasi media dan etika jurnalistik profesional bagi mahasiswa ITERA.",
                  "Menjadi fasilitator andalan untuk menjembatani suara dan aspirasi mahasiswa kepada rektorat secara transparan."
                ].map((item, idx) => (
                  <li key={idx} className="flex gap-3 items-start">
                    <span className="mt-1 text-itera-gold font-bold">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Timeline Milestones */}
          <div className="glass-card rounded-3xl p-8 md:p-12 border border-white/5">
            <h2 className="text-2xl font-extrabold text-white text-center mb-12">Garis Waktu Perjalanan LPI</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
              {milestones.map((stone, idx) => (
                <div key={idx} className="space-y-4 relative group">
                  <div className="text-5xl font-black text-transparent bg-gradient-to-r from-itera-gold to-itera-red bg-clip-text">
                    {stone.year}
                  </div>
                  <div className="h-0.5 bg-gradient-to-r from-itera-gold to-itera-red w-full my-2 opacity-50 group-hover:opacity-100 transition duration-300" />
                  <h3 className="font-extrabold text-white text-lg">{stone.title}</h3>
                  <p className="text-itera-textMuted text-xs leading-relaxed">{stone.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
