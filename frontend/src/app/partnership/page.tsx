'use client';

import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

export default function PartnershipPage() {
  const partnershipTypes = [
    {
      title: 'Media Partnership',
      desc: 'Kolaborasi publikasi, pertukaran info, serta peliputan bersama media luar.',
      benefits: [
        'Co-branding di platform LPI',
        'Pertukaran rilis berita berkala',
        'Publikasi silang ke jaringan pembaca',
        'Peliputan bersama acara besar',
      ],
    },
    {
      title: 'Sponsorship Event',
      desc: 'Sponsorship strategis untuk menyukseskan program kerja utama LPI.',
      benefits: [
        'Visibilitas brand di buletin fisik',
        'Penempatan logo di spanduk/backdrop',
        'Penyebutan brand saat sambutan acara',
        'Akses promosi langsung ke peserta',
      ],
    },
    {
      title: 'Kemitraan Konten',
      desc: 'Pembuatan rubrik khusus atau artikel ulasan yang digarap tim profesional.',
      benefits: [
        'Ulasan artikel objektif & mendalam',
        'Penempatan permanen di web LPI',
        'Distribusi konten di media sosial',
        'Infografis pendukung beresolusi tinggi',
      ],
    },
    {
      title: 'Slot Periklanan (Ads)',
      desc: 'Pemasangan banner promosi di website LPI dengan performa terukur.',
      benefits: [
        'Banner di area strategis web LPI',
        'Promosi berkala di feed Instagram LPI',
        'Penyisipan ads di newsletter mingguan',
        'Analisis performa klik & tayangan',
      ],
    },
  ];

  const packages = [
    {
      name: 'Kemitraan Perunggu',
      price: 'Rp 1.5 Juta',
      duration: 'per Event / Edisi Buletin',
      features: [
        'Logo ukuran kecil di buletin & web',
        '1 Artikel promosi/press release',
        '1x Post feed Instagram LPI',
        'Laporan jangkauan standar',
      ],
      popular: false,
    },
    {
      name: 'Kemitraan Emas',
      price: 'Rp 3.5 Juta',
      duration: 'per Semester Akademik',
      features: [
        'Logo ukuran sedang di web (halaman utama)',
        '3 Artikel rilis eksklusif',
        '3x Post & Story Instagram LPI',
        'Penyebutan sponsor di podcast/event LPI',
        'Laporan analisis performa komprehensif',
      ],
      popular: true,
    },
    {
      name: 'Kemitraan Khusus',
      price: 'Tarif Kustom',
      duration: 'Sesuai Kesepakatan',
      features: [
        'Semua keuntungan paket Emas',
        'Kolaborasi konten berseri',
        'Integrasi penuh ads di sistem informasi LPI',
        'Prioritas liputan wartawan LPI di luar kota',
        'Dukungan penuh tim humas 24/7',
      ],
      popular: false,
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
              Partnership & Sponsorship
            </span>
            <h1 className="text-4xl md:text-6xl font-black tracking-tight leading-tight">
              Tumbuh Bersama <span className="text-transparent bg-gradient-to-r from-itera-gold to-itera-red bg-clip-text">Jaringan LPI</span>
            </h1>
            <p className="text-lg text-itera-textMuted max-w-2xl mx-auto leading-relaxed">
              Jalin kemitraan strategis untuk memperluas jangkauan brand Anda di kalangan civitas akademika Institut Teknologi Sumatera.
            </p>
          </div>
        </section>

        {/* Jenis Partnership */}
        <section className="px-6 py-12 max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-12 space-y-2">
            <h2 className="text-3xl font-extrabold">Opsi Kemitraan</h2>
            <p className="text-itera-textMuted text-sm">Pilihan model kerjasama yang fleksibel dan terarah.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {partnershipTypes.map((type, idx) => (
              <div
                key={idx}
                className="glass-card rounded-3xl p-8 border border-white/5 hover:border-itera-red/20 transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <h3 className="text-xl font-extrabold text-white group-hover:text-itera-gold transition">
                    {type.title}
                  </h3>
                  <p className="text-itera-textMuted text-xs leading-relaxed">{type.desc}</p>
                  <ul className="space-y-2 pt-2">
                    {type.benefits.map((benefit, bidx) => (
                      <li key={bidx} className="flex gap-2 items-center text-xs text-itera-textMuted">
                        <span className="text-itera-gold">✓</span>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="pt-6">
                  <a
                    href="https://wa.me/6281234567890"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-center w-full py-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 text-white text-xs font-bold transition"
                  >
                    Ajukan Proposal Kemitraan
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Keuntungan Menjadi Partner */}
        <section className="px-6 py-16 max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-12 space-y-2">
            <h2 className="text-3xl font-extrabold">Mengapa Memilih LPI?</h2>
            <p className="text-itera-textMuted text-sm">Keuntungan nyata dari kolaborasi strategis bersama media LPI.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: '👥', title: 'Audiens Berkualitas', desc: 'Jangkauan pembaca ribuan mahasiswa, dosen, serta civitas akademika ITERA.' },
              { icon: '📱', title: 'Multi-Channel Promosi', desc: 'Publikasi visual terintegrasi lewat situs web resmi, buletin fisik, serta media sosial.' },
              { icon: '📊', title: 'Laporan Akuntabel', desc: 'Penyajian data analitik reach, views, dan klik secara rinci pasca kemitraan usai.' }
            ].map((item, idx) => (
              <div key={idx} className="glass-card rounded-2xl p-6 border border-white/5 text-center space-y-4">
                <span className="text-4xl block">{item.icon}</span>
                <h3 className="font-extrabold text-white text-lg">{item.title}</h3>
                <p className="text-itera-textMuted text-xs leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Paket Partnership */}
        <section className="px-6 py-16 max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-12 space-y-2">
            <h2 className="text-3xl font-extrabold">Paket Sponsorship Utama</h2>
            <p className="text-itera-textMuted text-sm">Pilih paket terbaik untuk mempercepat visibilitas brand Anda.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, idx) => (
              <div
                key={idx}
                className={`rounded-3xl p-8 border transition flex flex-col justify-between ${
                  pkg.popular
                    ? 'bg-gradient-to-br from-itera-card via-zinc-900 to-itera-card border-itera-red/40 shadow-glow/15 relative'
                    : 'glass-card border-white/5 hover:border-white/20'
                }`}
              >
                {pkg.popular && (
                  <span className="absolute -top-3.5 right-6 px-3 py-1 rounded-full bg-itera-red text-white text-[10px] font-bold uppercase tracking-wider border border-white/10 shadow-lg">
                    Rekomendasi
                  </span>
                )}
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-extrabold text-white">{pkg.name}</h3>
                    <div className="mt-4">
                      <span className="text-3xl font-black text-itera-gold">{pkg.price}</span>
                      <span className="text-itera-textMuted text-[10px] block mt-1">{pkg.duration}</span>
                    </div>
                  </div>
                  <div className="h-px bg-white/5" />
                  <ul className="space-y-3">
                    {pkg.features.map((feature, fidx) => (
                      <li key={fidx} className="flex gap-2 text-xs text-itera-textMuted">
                        <span className="text-itera-gold font-bold">✓</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="pt-8">
                  <a
                    href="https://wa.me/6281234567890"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`block text-center w-full py-3 rounded-xl text-xs font-bold transition duration-300 ${
                      pkg.popular
                        ? 'bg-gradient-to-r from-itera-gold to-itera-red text-white hover:shadow-lg hover:shadow-itera-red/30'
                        : 'bg-white/5 border border-white/10 hover:bg-white/10 text-white'
                    }`}
                  >
                    Pilih Paket
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Process */}
        <section className="px-6 py-16 max-w-7xl mx-auto relative z-10 text-center">
          <div className="mb-12 space-y-2">
            <h2 className="text-3xl font-extrabold">Prosedur Kerjasama</h2>
            <p className="text-itera-textMuted text-sm">Proses pendaftaran kemitraan yang terkoordinasi dan cepat.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Ajukan Rencana', desc: 'Isi formulir kontak atau kirimkan email proposal kasar.' },
              { step: '02', title: 'Konsultasi Humas', desc: 'Diskusi detail paket dan kesesuaian target audiens.' },
              { step: '03', title: 'Kontrak Resmi', desc: 'Tandatangan nota kesepakatan (MoU) kerjasama.' },
              { step: '04', title: 'Realisasi Ads', desc: 'Mulai jalankan kampanye dan pantau laporan perkembangan.' }
            ].map((proc, idx) => (
              <div key={idx} className="space-y-2">
                <div className="text-4xl font-black text-transparent bg-gradient-to-r from-itera-gold to-itera-red bg-clip-text">
                  {proc.step}
                </div>
                <h3 className="font-extrabold text-white text-sm">{proc.title}</h3>
                <p className="text-itera-textMuted text-[11px] leading-relaxed px-4">{proc.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* PR Contact Info */}
        <section className="px-6 py-16 max-w-4xl mx-auto relative z-10">
          <div className="glass-card rounded-3xl p-8 md:p-12 border border-white/5 text-center space-y-6 bg-gradient-to-br from-itera-card to-zinc-950">
            <h2 className="text-2xl font-extrabold text-white">Hubungi Humas & Sponsorship LPI</h2>
            <p className="text-itera-textMuted text-xs max-w-xl mx-auto leading-relaxed">
              Tim Public Relation kami siap merancang penyesuaian paket yang paling relevan dengan anggaran dan tujuan brand Anda.
            </p>
            <div className="p-6 rounded-2xl bg-white/5 border border-white/5 max-w-md mx-auto space-y-2">
              <p className="text-xs text-itera-textMuted font-semibold">Saluran Resmi:</p>
              <p className="text-lg font-black text-itera-gold">partnership@lembagarpers.itera.ac.id</p>
              <p className="text-sm font-bold text-white">WhatsApp: +62 812-3456-7890 (Humas LPI)</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
