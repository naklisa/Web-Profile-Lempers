'use client';

import { useState } from 'react';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

interface Portfolio {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  year: number;
}

const portfolios: Portfolio[] = [
  {
    id: 1,
    title: 'Liputan Akbar Milad ITERA',
    category: 'Liputan Event',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=600',
    description: 'Liputan jurnalistik mendalam seputar peringatan Dies Natalis ITERA yang menghimpun suara rektorat hingga keluh kesah mahasiswa.',
    year: 2024,
  },
  {
    id: 2,
    title: 'Investigasi Dampak Sanitasi Kampus',
    category: 'Investigasi',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=600',
    description: 'Investigasi pencemaran air bersih di lingkungan gedung asrama mahasiswa ITERA pasca musim penghujan regional.',
    year: 2024,
  },
  {
    id: 3,
    title: 'Profil Dosen Berdedikasi: Mengajar Tanpa Batas',
    category: 'Profil Tokoh',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600',
    description: 'Mengulik kisah hidup dan motivasi salah satu dosen teknik yang menginisiasi program pengabdian desa tertinggal di Lampung.',
    year: 2024,
  },
  {
    id: 4,
    title: 'Galeri Foto: Wisuda ITERA Ke-18',
    category: 'Seri Foto',
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=600',
    description: 'Kumpulan dokumentasi foto human interest bernilai tinggi yang menangkap momen kebahagiaan para wisudawan.',
    year: 2024,
  },
  {
    id: 5,
    title: 'Dokumenter Singkat: Dapur Redaksi LPI',
    category: 'Video Kreatif',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=600',
    description: 'Video dokumenter berdurasi 10 menit yang menggambarkan realitas perjuangan wartawan kampus saat malam deadline cetak.',
    year: 2024,
  },
  {
    id: 6,
    title: 'Kampanye Visual Kesadaran Kesehatan Mental',
    category: 'Kampanye Sosial',
    image: 'https://images.unsplash.com/photo-1460925895917-aeb19be489c7?auto=format&fit=crop&q=80&w=600',
    description: 'Rangkaian infografis digital LPI untuk mengedukasi mahasiswa tentang pentingnya menyeimbangkan tugas kuliah dan kesehatan mental.',
    year: 2023,
  },
];

export default function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('Semua');

  const categories = ['Semua', ...Array.from(new Set(portfolios.map((p) => p.category)))];
  const filtered =
    selectedCategory === 'Semua' ? portfolios : portfolios.filter((p) => p.category === selectedCategory);

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
              Portfolio Karya
            </span>
            <h1 className="text-4xl md:text-6xl font-black tracking-tight leading-tight">
              Galeri Liputan & <span className="text-transparent bg-gradient-to-r from-itera-gold to-itera-red bg-clip-text">Karya Kreatif</span>
            </h1>
            <p className="text-lg text-itera-textMuted max-w-2xl mx-auto leading-relaxed">
              Arsip karya jurnalistik terbaik, foto seri esai, dokumenter investigasi, dan infografis interaktif hasil produksi kru LPI.
            </p>
          </div>
        </section>

        {/* Filter */}
        <section className="px-6 py-8 border-b border-white/5 max-w-7xl mx-auto relative z-10">
          <div className="flex flex-wrap gap-2.5 justify-center">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2.5 rounded-xl text-xs font-bold transition duration-300 ${
                  selectedCategory === cat
                    ? 'bg-gradient-to-r from-itera-gold to-itera-red text-white shadow-lg'
                    : 'bg-white/5 text-itera-textMuted hover:bg-white/10 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </section>

        {/* Portfolio Grid */}
        <section className="px-6 py-16 max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((portfolio) => (
              <div
                key={portfolio.id}
                className="group glass-card rounded-3xl overflow-hidden border border-white/5 hover:border-itera-gold/30 hover:shadow-glow/15 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Image Container */}
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={portfolio.image}
                      alt={portfolio.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent" />
                    <span className="absolute top-4 right-4 px-3 py-1 rounded-full bg-itera-red/80 border border-white/10 text-white text-[10px] font-bold">
                      {portfolio.year}
                    </span>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 space-y-4">
                    <span className="inline-block px-3 py-1 rounded-full bg-white/5 border border-white/10 text-itera-gold text-[10px] font-bold uppercase tracking-wider">
                      {portfolio.category}
                    </span>
                    <h3 className="font-extrabold text-white text-lg leading-snug group-hover:text-itera-gold transition line-clamp-2">
                      {portfolio.title}
                    </h3>
                    <p className="text-itera-textMuted text-xs leading-relaxed line-clamp-3">
                      {portfolio.description}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <button className="w-full py-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 text-white text-xs font-bold transition">
                    Lihat Karya Lengkap →
                  </button>
                </div>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-16">
              <p className="text-itera-textMuted text-lg">Belum ada publikasi karya di kategori ini.</p>
            </div>
          )}
        </section>

        {/* Newsletter CTA */}
        <section className="px-6 py-16 max-w-4xl mx-auto relative z-10 text-center">
          <div className="glass-card rounded-3xl p-8 md:p-12 border border-white/5 bg-gradient-to-br from-itera-card to-zinc-950 space-y-6">
            <h2 className="text-3xl font-black">Ikuti Terbitan Terbaru</h2>
            <p className="text-itera-textMuted text-xs max-w-lg mx-auto leading-relaxed">
              Dapatkan rangkuman buletin digital LPI secara eksklusif serta kiriman infografis literasi pers langsung di email Anda setiap bulannya.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Alamat email Anda..."
                className="flex-1 px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 text-xs focus:outline-none focus:border-itera-gold/50 focus:ring-1 focus:ring-itera-gold/20 transition"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-itera-gold to-itera-red text-white text-xs font-bold rounded-xl hover:shadow-lg hover:shadow-itera-red/40 transition duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
