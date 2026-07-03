'use client';

import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-itera-bg text-itera-textPrimary pb-24 relative overflow-hidden">
        {/* Glow Effects */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-itera-red/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-itera-gold/5 rounded-full blur-3xl pointer-events-none"></div>

        {/* Hero Section */}
        <section className="relative px-6 py-20 md:py-32 max-w-7xl mx-auto z-10">
          <div className="text-center max-w-3xl mx-auto space-y-6">
            <span className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold tracking-widest text-itera-gold uppercase">
              Tentang LPI
            </span>
            <h1 className="text-4xl md:text-6xl font-black tracking-tight leading-tight">
              Menghubungkan Informasi, <br />
              <span className="text-transparent bg-gradient-to-r from-itera-gold via-orange-400 to-itera-red bg-clip-text">
                Menyuarakan Aspirasi
              </span>
            </h1>
            <p className="text-lg text-itera-textMuted leading-relaxed">
              UKM Lembaga Pers ITERA adalah Unit Kegiatan Mahasiswa (UKM) mandiri yang berfungsi sebagai pilar informasi utama dan wadah aspirasi kritis di lingkungan Institut Teknologi Sumatera.
            </p>
          </div>
        </section>

        {/* Vision & Mission */}
        <section className="px-6 py-16 max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Vision */}
            <div className="glass-card rounded-3xl p-8 md:p-10 border border-white/5 hover:border-itera-gold/30 hover:shadow-glow/20 transition-all duration-300 group">
              <div className="mb-6 inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-itera-gold to-orange-500 text-itera-bg text-2xl font-bold group-hover:scale-110 transition duration-300">
                <svg className="w-7 h-7 text-itera-bg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-extrabold mb-4 text-white">Visi Kami</h3>
              <p className="text-itera-textMuted leading-relaxed">
                Menjadi lembaga pers mahasiswa yang kredibel, inovatif, dan berintegritas tinggi serta berpihak pada kepentingan civitas akademika dalam mengembangkan jurnalisme kampus yang kritis dan solutif.
              </p>
            </div>

            {/* Mission */}
            <div className="glass-card rounded-3xl p-8 md:p-10 border border-white/5 hover:border-itera-red/30 hover:shadow-glow/20 transition-all duration-300 group">
              <div className="mb-6 inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-itera-red to-rose-600 text-white text-2xl font-bold group-hover:scale-110 transition duration-300">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-extrabold mb-4 text-white">Misi Kami</h3>
              <ul className="text-itera-textMuted space-y-4">
                {[
                  "Menghadirkan liputan berita yang objektif, akurat, dan berimbang di lingkungan ITERA.",
                  "Menjadi fasilitator penyaluran aspirasi mahasiswa demi terwujudnya transparansi kampus.",
                  "Mengembangkan minat, bakat, serta keahlian jurnalisme bagi anggota dan mahasiswa ITERA."
                ].map((item, idx) => (
                  <li key={idx} className="flex gap-3 items-start">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-itera-red/20 border border-itera-red/30 flex items-center justify-center text-itera-gold text-xs font-bold">
                      {idx + 1}
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Bidang/Departments Overview */}
        <section className="px-6 py-16 max-w-7xl mx-auto relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold">Bidang & Divisi Kerja</h2>
            <p className="text-itera-textMuted mt-3">Sinergi departemen dalam mewujudkan pers mahasiswa yang mandiri dan profesional.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "Bidang Redaksi",
                desc: "Mengelola seluruh alur produksi berita dari tahap riset, wawancara, penulisan, hingga penyuntingan akhir.",
                divs: ["Reporter", "Editor", "Wartawan Kampus"],
                color: "from-red-950/40 to-red-900/20 border-red-500/20 text-red-400"
              },
              {
                title: "Bidang Public Relation (PR)",
                desc: "Menjaga hubungan harmonis antara internal LPI dengan birokrasi kampus, UKM lain, serta pihak eksternal/partnership.",
                divs: ["Humas", "Partnership & Ads Manager", "Event Organizer"],
                color: "from-amber-950/40 to-amber-900/20 border-amber-500/20 text-itera-gold"
              },
              {
                title: "Bidang Media Kreatif",
                desc: "Memproduksi aset visual berupa infografis, poster, dokumentasi foto, dan video sinematik untuk publikasi multikanal.",
                divs: ["Desainer Grafis", "Fotografer", "Videografer"],
                color: "from-cyan-950/40 to-cyan-900/20 border-cyan-500/20 text-cyan-400"
              },
              {
                title: "Bidang IT & Sistem Informasi",
                desc: "Mengembangkan dan memelihara seluruh infrastruktur digital LPI termasuk website resmi dan sistem aspirasi online.",
                divs: ["Web Developer", "System Administrator", "Data Analyst"],
                color: "from-indigo-950/40 to-indigo-900/20 border-indigo-500/20 text-indigo-400"
              }
            ].map((dept, idx) => (
              <div key={idx} className={`bg-gradient-to-br ${dept.color} rounded-3xl p-8 border hover:shadow-lg transition-all duration-300`}>
                <h3 className="text-2xl font-bold mb-3">{dept.title}</h3>
                <p className="text-itera-textPrimary/80 text-sm mb-6 leading-relaxed">{dept.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {dept.divs.map((d, didx) => (
                    <span key={didx} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold">
                      {d}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Nilai-Nilai Kami */}
        <section className="px-6 py-16 max-w-7xl mx-auto text-center relative z-10">
          <h2 className="text-3xl font-extrabold mb-12">Nilai-Nilai Utama LPI</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: '✓', title: 'Kredibilitas', desc: 'Komitmen penuh pada akurasi data & kebenaran liputan.' },
              { icon: '🎯', title: 'Profesionalisme', desc: 'Bekerja sesuai kode etik jurnalistik nasional.' },
              { icon: '🤝', title: 'Integritas', desc: 'Menjunjung nilai kejujuran tanpa intervensi.' },
              { icon: '💡', title: 'Inovasi', desc: 'Terus bereksplorasi dengan format media digital baru.' }
            ].map((val, idx) => (
              <div key={idx} className="glass-card rounded-2xl p-6 border border-white/5 hover:border-white/20 transition duration-300">
                <div className="text-4xl mb-4 bg-gradient-to-r from-itera-gold to-itera-red bg-clip-text text-transparent inline-block font-extrabold">
                  {val.icon}
                </div>
                <h3 className="font-extrabold text-white text-lg mb-2">{val.title}</h3>
                <p className="text-itera-textMuted text-xs leading-relaxed">{val.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
