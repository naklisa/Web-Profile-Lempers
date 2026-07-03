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

        {/* Makna Logo LPI */}
        <section className="px-6 py-16 max-w-7xl mx-auto relative z-10">
          <div className="glass-card rounded-3xl p-8 md:p-12 border border-white/5 bg-gradient-to-br from-itera-card via-zinc-950 to-itera-card">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* Left Column: Logo Showcase */}
              <div className="lg:col-span-4 flex flex-col items-center justify-center text-center space-y-4">
                <div className="relative group p-4 rounded-3xl bg-white/5 border border-white/10 shadow-glow/5 hover:shadow-glow/15 transition-all duration-300">
                  <div className="absolute inset-0 bg-gradient-to-tr from-itera-red/10 to-itera-gold/10 rounded-3xl blur-xl pointer-events-none group-hover:scale-110 transition duration-300" />
                  <img 
                    src="/logo.png" 
                    alt="Logo Lembaga Pers ITERA" 
                    className="h-48 w-48 object-contain rounded-2xl relative z-10 transition duration-300 group-hover:scale-[1.03]" 
                  />
                </div>
                <div>
                  <h3 className="text-xl font-black text-white">Logo Resmi LPI</h3>
                  <p className="text-xs text-itera-textMuted mt-1">Institut Teknologi Sumatera</p>
                </div>
              </div>

              {/* Right Column: Logo Meanings */}
              <div className="lg:col-span-8 space-y-8">
                <div>
                  <span className="px-3 py-1 rounded-full bg-itera-gold/10 border border-itera-gold/20 text-[10px] font-extrabold tracking-widest text-itera-gold uppercase">
                    Identitas Visual
                  </span>
                  <h2 className="text-3xl font-black mt-3 text-white">Makna Logo LPI</h2>
                  <p className="text-sm text-itera-textMuted mt-1">Setiap elemen grafis pada logo kami memegang filosofi dan nilai fungsional pers mahasiswa.</p>
                </div>

                <div className="space-y-6">
                  {[
                    {
                      num: "1",
                      title: "Kepala Gajah",
                      desc: "Melambangkan hewan yang memiliki ingatan yang kuat dan hal ini sejalan dengan fungsi Lembaga Pers ITERA sebagai unit kegiatan mahasiswa yang bertugas untuk mengabadikan momen-momen penting yang ada atau berhubungan dengan Institut Teknologi Sumatera."
                    },
                    {
                      num: "2",
                      title: "Mata Lensa",
                      desc: "Mempresentasikan kamera yang dimana dapat mengabadikan momen foto maupun video."
                    },
                    {
                      num: "3",
                      title: "Tulisan Lembaga Pers ITERA",
                      desc: "Menjelaskan bahwa unit kegiatan mahasiswa ini bernama Lembaga Pers ITERA."
                    }
                  ].map((item, idx) => (
                    <div key={idx} className="flex gap-4 items-start p-5 rounded-2xl bg-white/5 border border-white/5 hover:border-white/10 transition duration-300">
                      <span className="flex-shrink-0 w-10 h-10 rounded-xl bg-gradient-to-tr from-itera-gold to-itera-red flex items-center justify-center text-white text-md font-black shadow-md shadow-itera-red/10">
                        {item.num}
                      </span>
                      <div className="space-y-1">
                        <h4 className="font-extrabold text-white text-base">{item.title}</h4>
                        <p className="text-xs text-itera-textMuted leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
