'use client';

import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import ImprovedOrganizationalChart from '@/components/ImprovedOrganizationalChart';

export default function TeamPage() {
  const stats = [
    { label: 'Total Anggota', value: '50+' },
    { label: 'Divisi Aktif', value: '6' },
    { label: 'Tahun Berdiri', value: '3+' },
    { label: 'Event Terliput', value: '100+' },
  ];

  const cultureItems = [
    {
      title: '🎯 Fokus pada Misi',
      desc: 'Setiap anggota tim berkomitmen pada misi utama Lembaga Pers untuk memberikan informasi berkualitas dan tepercaya.',
    },
    {
      title: '🤝 Kolaborasi Erat',
      desc: 'Kami percaya bahwa hasil jurnalistik terbaik datang dari kerja sama tim yang solid, terbuka, dan saling mendukung.',
    },
    {
      title: '📈 Pertumbuhan Berkelanjutan',
      desc: 'Kami terus belajar, mengevaluasi tulisan, dan meningkatkan keterampilan teknis maupun etika media secara berkala.',
    },
    {
      title: '🎨 Kreativitas Tinggi',
      desc: 'Mendorong inovasi dalam penyampaian infografis, video jurnalisme, dan interaktivitas website modern.',
    },
    {
      title: '✅ Standar Tinggi',
      desc: 'Kami mengejar kualitas editorial tinggi mulai dari verifikasi narasumber, cek fakta, hingga penyuntingan akhir.',
    },
    {
      title: '🌟 Integritas Penuh',
      desc: 'Prinsip independensi dan kode etik pers mahasiswa adalah jangkar utama dari setiap tulisan yang kami terbitkan.',
    },
  ];

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-itera-bg text-itera-textPrimary pb-24 relative overflow-hidden">
        {/* Glow Orbs */}
        <div className="absolute top-1/3 left-10 w-96 h-96 bg-itera-red/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-2/3 right-10 w-96 h-96 bg-itera-gold/5 rounded-full blur-3xl pointer-events-none" />

        {/* Hero Section */}
        <section className="relative px-6 py-20 md:py-32 max-w-7xl mx-auto z-10 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <span className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold tracking-widest text-itera-gold uppercase">
              Tim & Redaksi
            </span>
            <h1 className="text-4xl md:text-6xl font-black tracking-tight leading-tight">
              Di Balik <span className="text-transparent bg-gradient-to-r from-itera-gold to-itera-red bg-clip-text">Suara Kampus</span>
            </h1>
            <p className="text-lg text-itera-textMuted max-w-2xl mx-auto leading-relaxed">
              Kenal lebih dekat dengan tim redaktur, jurnalis, desainer, dan pengembang yang berdedikasi tinggi di UKM Lembaga Pers ITERA.
            </p>
          </div>
        </section>

        {/* Organizational Chart */}
        <section className="px-6 py-16 max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-12 space-y-2">
            <h2 className="text-3xl font-extrabold">Struktur Organisasi</h2>
            <p className="text-itera-textMuted text-sm">Pembagian bidang kerja dan kepengurusan aktif periode 2026/2027.</p>
          </div>
          <div className="glass-card rounded-3xl p-6 md:p-10 border border-white/5 overflow-x-auto">
            <ImprovedOrganizationalChart />
          </div>
        </section>

        {/* Team Culture */}
        <section className="px-6 py-16 max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-12 space-y-2">
            <h2 className="text-3xl font-extrabold">Budaya Kerja Kami</h2>
            <p className="text-itera-textMuted text-sm">Etos kerja yang kami pegang teguh dalam menjalankan tugas jurnalistik sehari-hari.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {cultureItems.map((culture, idx) => (
              <div
                key={idx}
                className="glass-card rounded-2xl p-6 border border-white/5 hover:border-itera-gold/20 hover:shadow-glow/10 transition-all duration-300 group"
              >
                <h3 className="font-extrabold text-white text-lg mb-3 flex items-center gap-2">
                  {culture.title}
                </h3>
                <p className="text-itera-textMuted text-xs leading-relaxed">{culture.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Join Us Section */}
        <section className="px-6 py-16 max-w-5xl mx-auto relative z-10">
          <div className="glass-card rounded-3xl p-8 md:p-12 border border-white/5 bg-gradient-to-br from-itera-card via-zinc-950 to-itera-card text-center space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl font-black">Bergabung Dengan Kami</h2>
              <p className="text-itera-textMuted text-sm max-w-2xl mx-auto">
                Kami selalu membuka ruang bagi mahasiswa ITERA yang ingin belajar dan bertumbuh di bidang kejurnalistikan, desain visual, videografi, serta pengembangan sistem informasi media.
              </p>
            </div>

            <div className="inline-block p-6 rounded-2xl bg-white/5 border border-white/5 max-w-xl mx-auto">
              <p className="text-white/80 text-sm font-semibold mb-2">Pendaftaran Magang Pers LPI</p>
              <p className="text-2xl font-black text-itera-gold mb-2">Setiap Awal Semester</p>
              <p className="text-itera-textMuted text-xs mb-4">Daftarkan diri Anda untuk merasakan atmosfer kerja media kampus secara nyata.</p>
              <a
                href="/oprec"
                className="inline-block px-6 py-3 bg-gradient-to-r from-itera-gold to-itera-red text-white text-sm font-bold rounded-xl hover:shadow-lg hover:shadow-itera-red/40 transition duration-300"
              >
                Lihat Formulir Magang
              </a>
            </div>

            <div className="pt-4 max-w-2xl mx-auto">
              <h3 className="font-bold text-white text-sm uppercase tracking-widest mb-4">Ketentuan Pendaftaran</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left text-xs text-itera-textMuted">
                <div className="flex gap-2">
                  <span className="text-itera-gold">✓</span>
                  <span>Mahasiswa aktif ITERA dari semua jurusan.</span>
                </div>
                <div className="flex gap-2">
                  <span className="text-itera-gold">✓</span>
                  <span>Memiliki ketertarikan kuat pada media/jurnalistik.</span>
                </div>
                <div className="flex gap-2">
                  <span className="text-itera-gold">✓</span>
                  <span>Bersedia meluangkan waktu secara aktif dan berkomitmen.</span>
                </div>
                <div className="flex gap-2">
                  <span className="text-itera-gold">✓</span>
                  <span>Mampu bekerja dalam tim maupun di bawah tenggat waktu.</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Leadership Message */}
        <section className="px-6 py-16 max-w-4xl mx-auto relative z-10">
          <div className="glass-card rounded-3xl p-8 md:p-10 border border-white/5 relative">
            <span className="absolute -top-5 left-10 px-4 py-1 rounded-full bg-itera-red text-white text-xs font-bold uppercase tracking-wider border border-white/10 shadow-lg">
              Pesan Pemimpin Umum
            </span>
            <div className="space-y-6 pt-4 text-center md:text-left md:flex md:items-center md:gap-8">
              <div className="flex-shrink-0 w-24 h-24 mx-auto rounded-2xl bg-gradient-to-tr from-itera-gold to-itera-red p-1">
                <div className="w-full h-full rounded-2xl bg-zinc-950 flex items-center justify-center text-4xl">
                  👨‍💼
                </div>
              </div>
              <div className="space-y-4">
                <p className="text-white/80 italic text-lg leading-relaxed">
                  "UKM Lembaga Pers ITERA bukan sekadar organisasi pers kampus biasa. LPI adalah laboratorium kehidupan bagi mahasiswa untuk mengasah pemikiran kritis, memperkuat kepekaan sosial, serta melatih integritas moral yang tinggi melalui tulisan dan karya visual."
                </p>
                <div>
                  <h4 className="font-extrabold text-white">Arvel Alyagin</h4>
                  <p className="text-itera-textMuted text-xs">Pemimpin Umum LPI ITERA 2026/2027</p>
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
