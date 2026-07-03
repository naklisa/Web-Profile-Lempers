'use client';

import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

export default function ProkerPage() {
  const programs = [
    {
      title: 'PJTD (Pelatihan Jurnalistik Tingkat Dasar)',
      status: 'Berjalan Berkala',
      date: 'Setiap Semester Baru',
      desc: 'Pelatihan dasar bagi calon wartawan kampus mengenai teknik wawancara, penulisan berita, kode etik jurnalistik, dan teknik fotografi jurnalistik dasar.',
      icon: '📝',
    },
    {
      title: 'Gema Sumatra Bulletin',
      status: 'Terjadwal',
      date: 'Dua Bulan Sekali',
      desc: 'Penerbitan buletin cetak dan digital berisi analisis mendalam, rubrik opini mahasiswa, wawancara tokoh birokrasi, dan rekapitulasi isu krusial di ITERA.',
      icon: '📰',
    },
    {
      title: 'LPI Mengajar',
      status: 'Rencana Pelaksanaan',
      date: 'Pertengahan Tahun',
      desc: 'Program pengabdian masyarakat berupa edukasi literasi media, penulisan kreatif, serta pemanfaatan media digital bagi sekolah-sekolah di sekitar wilayah Lampung.',
      icon: '🏫',
    },
  ];

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-itera-bg text-itera-textPrimary pb-24 relative overflow-hidden">
        {/* Glow Effects */}
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-itera-gold/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-itera-red/10 rounded-full blur-3xl pointer-events-none" />

        <section className="relative px-6 py-20 max-w-7xl mx-auto z-10">
          <div className="text-center max-w-3xl mx-auto space-y-6 mb-16">
            <span className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold tracking-widest text-itera-gold uppercase">
              Program Kerja
            </span>
            <h1 className="text-4xl md:text-5xl font-black tracking-tight">
              Inisiatif & Rencana Program LPI
            </h1>
            <p className="text-lg text-itera-textMuted leading-relaxed">
              Program kerja utama yang kami laksanakan untuk mengembangkan ekosistem pers mahasiswa yang inklusif, edukatif, dan berdampak.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {programs.map((prog, idx) => (
              <div
                key={idx}
                className="glass-card rounded-3xl p-8 border border-white/5 hover:border-itera-red/30 hover:shadow-glow/10 transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="space-y-6">
                  <div className="flex justify-between items-start">
                    <span className="text-4xl">{prog.icon}</span>
                    <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold text-itera-gold uppercase tracking-wider">
                      {prog.status}
                    </span>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-extrabold text-white group-hover:text-itera-gold transition">
                      {prog.title}
                    </h3>
                    <p className="text-xs text-itera-textMuted font-medium">{prog.date}</p>
                  </div>
                  <p className="text-itera-textMuted text-xs leading-relaxed">{prog.desc}</p>
                </div>
                <div className="pt-8">
                  <button className="w-full py-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 text-white text-xs font-bold transition">
                    Detail Program →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
