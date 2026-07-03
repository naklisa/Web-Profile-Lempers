'use client';

import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

export default function ServicesPage() {
  const services = [
    {
      icon: '📰',
      title: 'Liputan Berita',
      description: 'Liputan mendalam dan akurat tentang berbagai peristiwa penting di kampus ITERA.',
      features: ['Event Coverage', 'Investigasi Kampus', 'Feature Stories', 'Breaking News'],
    },
    {
      icon: '📸',
      title: 'Dokumentasi Visual',
      description: 'Layanan fotografi dan videografi profesional untuk keperluan event dan promosi.',
      features: ['Fotografi Event', 'Video Production', 'Photo Editing', 'Drone Footage'],
    },
    {
      icon: '💬',
      title: 'Pojok Aspirasi',
      description: 'Wadah aspirasi terstruktur untuk menyuarakan masukan mahasiswa kepada pengelola kampus.',
      features: ['Aspirasi Terbuka', 'Diskusi Publik', 'Solusi Konstruktif', 'Follow-up Action'],
    },
    {
      icon: '🎯',
      title: 'Kampanye Sosial',
      description: 'Penyusunan strategi kampanye kesadaran sosial untuk isu-isu lingkungan dan mahasiswa.',
      features: ['Campaign Strategy', 'Content Creation', 'Community Engagement', 'Impact Measurement'],
    },
    {
      icon: '🤝',
      title: 'Kemitraan & Kolaborasi',
      description: 'Kesempatan bermitra media dan publikasi bersama UKM Lembaga Pers ITERA.',
      features: ['Media Partnership', 'Event Sponsorship', 'Content Collaboration', 'Brand Awareness'],
    },
    {
      icon: '🎓',
      title: 'Program Magang',
      description: 'Kesempatan belajar jurnalisme dan teknologi informasi secara praktis di LPI.',
      features: ['Practical Training', 'Mentorship', 'Skill Development', 'Certificate Program'],
    },
  ];

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-itera-bg text-itera-textPrimary pb-24 relative overflow-hidden">
        {/* Glow Effects */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-itera-red/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-itera-gold/5 rounded-full blur-3xl pointer-events-none" />

        {/* Hero Section */}
        <section className="relative px-6 py-20 md:py-32 max-w-7xl mx-auto z-10 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <span className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold tracking-widest text-itera-gold uppercase">
              Layanan Kami
            </span>
            <h1 className="text-4xl md:text-6xl font-black tracking-tight leading-tight">
              Solusi Publikasi & <span className="text-transparent bg-gradient-to-r from-itera-gold to-itera-red bg-clip-text">Media Kampus</span>
            </h1>
            <p className="text-lg text-itera-textMuted max-w-2xl mx-auto leading-relaxed">
              Jelajahi berbagai layanan publikasi berita, dokumentasi, kemitraan strategis, dan pengaduan aspirasi yang kami tawarkan.
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="px-6 py-12 max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, idx) => (
              <div
                key={idx}
                className="glass-card rounded-3xl p-8 border border-white/5 hover:border-itera-gold/30 hover:shadow-glow/15 transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="space-y-6">
                  <span className="text-4xl inline-block bg-white/5 p-4 rounded-2xl border border-white/10 group-hover:scale-110 transition duration-300">
                    {service.icon}
                  </span>
                  <div className="space-y-2">
                    <h3 className="text-xl font-extrabold text-white group-hover:text-itera-gold transition">
                      {service.title}
                    </h3>
                    <p className="text-itera-textMuted text-xs leading-relaxed">{service.description}</p>
                  </div>
                  <div className="pt-2 space-y-2">
                    {service.features.map((feature, fidx) => (
                      <div key={fidx} className="flex gap-2 items-center text-xs text-itera-textMuted">
                        <span className="text-itera-gold font-bold">✓</span>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="pt-8">
                  <a
                    href="https://wa.me/6281234567890"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-center w-full py-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 text-white text-xs font-bold transition"
                  >
                    Ajukan Layanan
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Workflow steps */}
        <section className="px-6 py-16 max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-12 space-y-2">
            <h2 className="text-3xl font-extrabold">Cara Mengakses Layanan</h2>
            <p className="text-itera-textMuted text-sm">Alur koordinasi sederhana untuk merealisasikan kolaborasi Anda bersama LPI.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { step: '01', title: 'Hubungi Kontak', desc: 'Kirimkan permohonan layanan via email, WhatsApp resmi kami, atau kunjungi kantor LPI.' },
              { step: '02', title: 'Diskusi & Detail', desc: 'Lakukan pembahasan mengenai ruang lingkup, kebutuhan, tenggat waktu, serta kriteria output.' },
              { step: '03', title: 'Eksekusi Karya', desc: 'Tim redaksi/media kreatif LPI akan mengeksekusi layanan dengan standar kualitas terbaik.' },
            ].map((step, idx) => (
              <div key={idx} className="glass-card rounded-2xl p-8 border border-white/5 text-center relative group">
                <div className="text-5xl font-black text-transparent bg-gradient-to-r from-itera-gold to-itera-red bg-clip-text mb-4">
                  {step.step}
                </div>
                <h3 className="font-extrabold text-white text-lg mb-2">{step.title}</h3>
                <p className="text-itera-textMuted text-xs leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Service Areas */}
        <section className="px-6 py-16 max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-red-950/20 to-red-900/10 border border-red-500/20 rounded-3xl p-8 md:p-10 space-y-4">
              <h3 className="text-xl font-extrabold text-red-400 flex items-center gap-2">
                <span>🏫</span> Lingkup Internal ITERA
              </h3>
              <ul className="space-y-3 text-xs text-itera-textPrimary/80">
                <li>• Publikasi event resmi Himpunan dan Unit Kegiatan Mahasiswa.</li>
                <li>• Liputan khusus bagi prestasi civitas akademika kampus.</li>
                <li>• Jembatan jajak pendapat publik dan survei suara mahasiswa.</li>
                <li>• Dokumentasi resmi kegiatan wisuda dan perayaan Dies Natalis.</li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-indigo-950/20 to-indigo-900/10 border border-indigo-500/20 rounded-3xl p-8 md:p-10 space-y-4">
              <h3 className="text-xl font-extrabold text-indigo-400 flex items-center gap-2">
                <span>🌐</span> Lingkup Kemitraan Eksternal
              </h3>
              <ul className="space-y-3 text-xs text-itera-textPrimary/80">
                <li>• Slot periklanan produk komersial di website resmi LPI.</li>
                <li>• Distribusi siaran pers (press release) ke audiens mahasiswa.</li>
                <li>• Sponsorship dan branding terintegrasi saat agenda LPI berjalan.</li>
                <li>• Kerja sama liputan berita lintas media/pers luar kampus.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Pricing / Cost info */}
        <section className="px-6 py-16 max-w-4xl mx-auto relative z-10">
          <div className="glass-card rounded-3xl p-8 md:p-12 border border-white/5 text-center space-y-6 bg-gradient-to-br from-itera-card to-zinc-950">
            <h2 className="text-2xl font-extrabold text-white">Informasi Proposal Tarif & Paket</h2>
            <p className="text-itera-textMuted text-xs max-w-xl mx-auto leading-relaxed">
              Seluruh bentuk kompensasi periklanan dan kemitraan dikelola secara transparan dan dialokasikan untuk mendanai produksi buletin fisik serta infrastruktur digital LPI.
            </p>
            <div className="p-6 rounded-2xl bg-white/5 border border-white/5 max-w-md mx-auto space-y-2">
              <p className="text-xs text-itera-textMuted font-semibold">Hubungi Hubungan Masyarakat (Humas) LPI:</p>
              <p className="text-lg font-black text-itera-gold">lembagapers.itera@gmail.com</p>
              <p className="text-sm font-bold text-white">WhatsApp: +62 812-3456-7890</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
