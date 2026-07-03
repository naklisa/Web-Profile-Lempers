'use client';

import { useState } from 'react';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

interface BlogPost {
  id: number;
  title: string;
  category: string;
  author: string;
  date: string;
  excerpt: string;
  content: string;
  image: string;
  readTime: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: '10 Tips Menulis Artikel yang Menarik dan Informatif',
    category: 'Tutorial',
    author: 'Husni Rosidah',
    date: '15 Mei 2026',
    excerpt: 'Pelajari teknik menulis artikel yang tidak hanya informatif tetapi juga menarik perhatian pembaca kampus.',
    content: 'Artikel lengkap tentang tips dan trik menulis artikel berkualitas...',
    image: 'https://images.unsplash.com/photo-1455849318169-8728d338c3f7?auto=format&fit=crop&q=80&w=600',
    readTime: '8 Menit Baca',
  },
  {
    id: 2,
    title: 'Etika Jurnalisme Modern di Era Digitalisasi Kampus',
    category: 'Opini',
    author: 'Arvel Alyagin',
    date: '10 Mei 2026',
    excerpt: 'Diskusi mendalam tentang standar etika jurnalisme yang relevan di era perkembangan media sosial kampus.',
    content: 'Pembahasaan etika jurnalisme modern...',
    image: 'https://images.unsplash.com/photo-1416339684178-3a60019f8761?auto=format&fit=crop&q=80&w=600',
    readTime: '6 Menit Baca',
  },
  {
    id: 3,
    title: 'Teknik Fotografi Jurnalistik untuk Liputan Acara',
    category: 'Tutorial',
    author: 'Ilham Hidayat',
    date: '05 Mei 2026',
    excerpt: 'Panduan lengkap teknik fotografi profesional untuk mendokumentasikan momentum event besar.',
    content: 'Tips teknik fotografi untuk event...',
    image: 'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?auto=format&fit=crop&q=80&w=600',
    readTime: '7 Menit Baca',
  },
  {
    id: 4,
    title: 'Cara Melakukan Riset Fakta Sebelum Penulisan Investigasi',
    category: 'Tutorial',
    author: 'Dwi Fathina',
    date: '01 Mei 2026',
    excerpt: 'Metodologi verifikasi dan pengumpulan data primer demi menghasilkan liputan investigasi berbobot.',
    content: 'Metodologi riset investigasi...',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=600',
    readTime: '10 Menit Baca',
  },
];

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('Semua');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = ['Semua', ...Array.from(new Set(blogPosts.map((p) => p.category)))];

  let filtered = blogPosts;

  if (selectedCategory !== 'Semua') {
    filtered = filtered.filter((p) => p.category === selectedCategory);
  }

  if (searchQuery) {
    filtered = filtered.filter(
      (p) =>
        p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }

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
              Blog & Edukasi
            </span>
            <h1 className="text-4xl md:text-6xl font-black tracking-tight leading-tight">
              Kabar, Opini, & <span className="text-transparent bg-gradient-to-r from-itera-gold to-itera-red bg-clip-text">Tips Literasi</span>
            </h1>
            <p className="text-lg text-itera-textMuted max-w-2xl mx-auto leading-relaxed">
              Koleksi tulisan opini kritis, artikel edukasi jurnalistik, serta ragam rilis tutorial media digital oleh redaktur LPI.
            </p>
          </div>
        </section>

        {/* Search & Filter */}
        <section className="px-6 py-8 border-y border-white/5 max-w-7xl mx-auto relative z-10">
          <div className="max-w-xl mx-auto space-y-6">
            <div className="relative">
              <input
                type="text"
                placeholder="Cari artikel edukasi..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-5 pr-12 py-3.5 rounded-2xl bg-white/5 border border-white/10 text-white placeholder-white/30 text-xs focus:outline-none focus:border-itera-gold/50 focus:ring-1 focus:ring-itera-gold/20 transition"
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-white/30 text-xs">🔍</span>
            </div>
            <div className="flex flex-wrap gap-2.5 justify-center">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition duration-300 ${
                    selectedCategory === cat
                      ? 'bg-gradient-to-r from-itera-gold to-itera-red text-white shadow-lg'
                      : 'bg-white/5 text-itera-textMuted hover:bg-white/10 hover:text-white'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Blog Grid */}
        <section className="px-6 py-16 max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filtered.map((post) => (
              <article
                key={post.id}
                className="group glass-card rounded-3xl overflow-hidden border border-white/5 hover:border-itera-gold/25 hover:shadow-glow/10 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-52 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-103 transition duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent" />
                    <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-itera-red/90 border border-white/10 text-white text-[10px] font-bold">
                      {post.category}
                    </span>
                  </div>

                  <div className="p-6 space-y-4">
                    <h3 className="text-xl font-extrabold text-white group-hover:text-itera-gold transition line-clamp-2 leading-snug">
                      {post.title}
                    </h3>
                    <p className="text-itera-textMuted text-xs leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>
                  </div>
                </div>

                <div className="p-6 space-y-4 pt-0">
                  <div className="flex justify-between items-center text-[10px] text-itera-textMuted/60 font-semibold uppercase tracking-wider">
                    <span>Penulis: {post.author}</span>
                    <span>{post.date}</span>
                  </div>
                  <div className="h-px bg-white/5" />
                  <div className="flex justify-between items-center">
                    <span className="text-[10px] text-itera-textMuted font-bold">{post.readTime}</span>
                    <button className="px-4 py-2 bg-white/5 border border-white/10 hover:bg-white/10 text-white text-xs font-bold rounded-xl transition">
                      Baca Selengkapnya
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-16">
              <p className="text-itera-textMuted text-lg">Tidak ada artikel edukasi yang cocok.</p>
            </div>
          )}
        </section>

        {/* Resources Section */}
        <section className="px-6 py-16 max-w-7xl mx-auto relative z-10 border-t border-white/5">
          <div className="text-center mb-12 space-y-2">
            <h2 className="text-3xl font-extrabold">Sumber Daya & Panduan</h2>
            <p className="text-itera-textMuted text-sm">Akses gratis panduan dasar kepenulisan dan panduan desain untuk pers kampus.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: '📄', title: 'Panduan Kepenulisan Rilis', desc: 'Pedoman perancangan struktur rilis berita yang lugas, padat, dan informatif.' },
              { icon: '🎨', title: 'Aset Visual LPI', desc: 'Koleksi logo LPI beresolusi tinggi, palet warna resmi, serta panduan font standar.' },
              { icon: '📋', title: 'Checklist Pra-Liputan', desc: 'Daftar kelengkapan alat, daftar pertanyaan dasar, serta checklist administrasi wawancara.' }
            ].map((res, idx) => (
              <div
                key={idx}
                className="glass-card rounded-2xl p-6 border border-white/5 hover:border-white/20 transition-all duration-300 space-y-4 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <span className="text-3xl block">{res.icon}</span>
                  <h3 className="font-extrabold text-white text-base">{res.title}</h3>
                  <p className="text-itera-textMuted text-xs leading-relaxed">{res.desc}</p>
                </div>
                <div className="pt-4">
                  <button className="text-xs font-extrabold text-itera-gold hover:text-white transition flex items-center gap-1">
                    Unduh Dokumen <span>→</span>
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
