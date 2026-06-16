'use client';

import { useEffect, useMemo, useState } from 'react';
import Footer from '@/components/Footer';

interface Article {
  id: number;
  title: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  image: string;
  snippet: string;
  content: string;
}

interface RedaksiMember {
  name: string;
  role: string;
  avatar: string;
}

interface AspirasiItem {
  id: number;
  sender: string;
  category: string;
  subject: string;
  message: string;
  date: string;
  upvotes: number;
}

interface OprecForm {
  name: string;
  npm: string;
  faculty: string;
  division: string;
  reason: string;
  portfolio: string;
}

const imgUrls = {
  embung: 'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&q=80&w=800',
  krs: 'https://images.unsplash.com/photo-1506318137071-a8e063b4bec0?auto=format&fit=crop&q=80&w=800',
  oail: 'https://images.unsplash.com/photo-1507668077129-56e32842fceb?auto=format&fit=crop&q=80&w=800',
  karyaSains: 'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&q=80&w=800',
  wisuda: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=800',
};

const mockArticles: Article[] = [
  {
    id: 1,
    title: 'Menilik Kondisi Ekosistem Embung ITERA Pasca Peralihan Musim Hujan Regional',
    category: 'Investigasi',
    author: "Randi Pangestu (GL'23)",
    date: '15 Jun 2026',
    readTime: '8 Menit',
    image: imgUrls.embung,
    snippet: 'Tim investigasi Lembaga Pers menelaah pengaruh volume debit air embung utama ITERA terhadap kebersihan lingkungan sekitarnya.',
    content: `
      <p class="text-xl font-normal text-zinc-300 leading-relaxed border-l-4 border-red-500 pl-4">Embung di lingkungan Institut Teknologi Sumatera bukan hanya ornamen estetis, melainkan tanggul resapan krusial dan ekosistem mandiri yang patut diawasi kesehatannya.</p>
      <p class="text-zinc-400">Liputan khusus dari kru LPI mencoba mengumpulkan data berkala tentang laju pendangkalan embung akibat tumpukan sedimentasi lumpur sisa proyek jalan lingkar luar.</p>
      <h4 class="font-extrabold text-2xl text-white mt-8">Hasil Pengamatan Lapangan</h4>
      <p class="text-zinc-400">Melalui uji laboratorium sederhana mandiri yang dibantu oleh rekan Teknik Lingkungan, didapatkan hasil bahwa kadar oksigen terlarut masih aman, namun beberapa sudut menunjukkan akumulasi sampah daun kering.</p>
      <blockquote class="bg-zinc-900 p-6 rounded-2xl border-l-4 border-itera-gold italic text-zinc-300">"Perlu ada sinergi gerakan kebersihan berkala dari perwakilan himpunan mahasiswa dibantu oleh sarana prasarana rektorat agar ikon ITERA ini tetap terjaga keasriannya."</blockquote>
    `,
  },
  {
    id: 2,
    title: 'Kunjungan Astronomi Malam di OAIL ITERA: Antusiasme Tinggi Tapi Terkendala Akses',
    category: 'Sains & Teknologi',
    author: "Dhea Amelia (IF'24)",
    date: '12 Jun 2026',
    readTime: '5 Menit',
    image: imgUrls.oail,
    snippet: 'Observatorium Astronomi ITERA Lampung menarik perhatian ratusan warga Lampung, namun keterbatasan transportasi internal kampus menjadi kendala.',
    content: `
      <p class="text-zinc-300 leading-relaxed">Pihak pengelola UPT Astronomi mengagendakan malam pengamatan bintang gratis untuk umum. Sayangnya, bagi mahasiswa tanpa kendaraan, minimnya penerangan jalan menuju teleskop menjadi tantangan keamanan.</p>
      <h4 class="font-extrabold text-xl text-white mt-6">Saran Penerangan dan Transportasi Khusus</h4>
      <p class="text-zinc-400">Banyak usulan masuk agar pihak internal menyediakan shuttle bus kecil atau penerangan darurat di sepanjang jalan setapak menuju kubah teleskop utama.</p>
    `,
  },
  {
    id: 3,
    title: 'Sering Terjadi Overload Server Saat Pengisian KRS ITERA, Mahasiswa Pertanyakan Infrastruktur IT',
    category: 'Kabar Gajah',
    author: 'Zulfaqar (IF\'23)',
    date: '10 Jun 2026',
    readTime: '6 Menit',
    image: imgUrls.krs,
    snippet: 'Kendala klise musiman berupa server macet kembali berulang di portal SIAK ITERA. Tim jurnalis LPI mewawancarai Kepala UPT TIK kampus untuk meminta klarifikasi.',
    content: `
      <p class="text-zinc-300 leading-relaxed">Hari pertama pembukaan form rencana studi diwarnai kekecewaan kolektif mahasiswa yang mendapati laman website tidak dapat diakses hampir 4 jam.</p>
      <p class="text-zinc-400">Menurut keterangan dari UPT TIK, kendala disebabkan karena ribuan request masuk secara bersamaan melampaui alokasi RAM server utama.</p>
    `,
  },
  {
    id: 4,
    title: 'Inovasi Alat Deteksi Dini Kebakaran Hutan Berbasis IoT Buatan Mahasiswa ITERA',
    category: 'Sains & Teknologi',
    author: 'Rian Pratama (TE\'23)',
    date: '05 Jun 2026',
    readTime: '4 Menit',
    image: imgUrls.karyaSains,
    snippet: 'Sebuah riset kolaboratif mahasiswa Teknik Elektro dan Teknik Informatika menghasilkan sensor pendeteksi titik api regional bernilai ekonomis.',
    content: `
      <p class="text-zinc-300 leading-relaxed">Menggunakan mikrokontroler murah, sensor suhu infrared, dan koneksi LoRa, alat ini dapat mengirimkan sinyal bahaya kebakaran hutan hingga radius 5 km.</p>
    `,
  },
  {
    id: 5,
    title: 'Aksi Solidaritas Mahasiswa Menggalang Dana bagi Korban Banjir di Sekitar Jati Agung',
    category: 'Opini Mahasiswa',
    author: 'Maya Sari (PWK\'24)',
    date: '01 Jun 2026',
    readTime: '3 Menit',
    image: imgUrls.wisuda,
    snippet: 'Mahasiswa ITERA bahu-membahu menyalurkan bantuan logistik bagi warga lingkar kampus yang terdampak luapan air sungai.',
    content: `
      <p class="text-zinc-300 leading-relaxed">Gerakan tanggap bencana ini melibatkan lebih dari 12 UKM dan Himpunan Jurusan di ITERA, mengukuhkan peran pengabdian masyarakat nyata.</p>
    `,
  },
];

const mockRedaksi: RedaksiMember[] = [
  { name: 'Fauzan Azima (TL\'23)', role: 'Pimpinan Umum LPI', avatar: '👨‍💼' },
  { name: 'Siti Rahma (PWK\'23)', role: 'Pimpinan Redaksi / Editor', avatar: '👩‍💻' },
  { name: 'Aditya Wardhana (IF\'24)', role: 'Redaktur Pelaksana', avatar: '✍️' },
  { name: 'Farhan Maulana (DKV\'24)', role: 'Kepala Desain & Layout', avatar: '🎨' },
  { name: 'Ayu Lestari (TL\'24)', role: 'Fotografer & Jurnalis Foto', avatar: '📸' },
  { name: 'Fikri Ramadhan (IF\'24)', role: 'Lead Web Developer & IT', avatar: '💻' },
  { name: 'Nurhaliza (GL\'24)', role: 'Riset & Jurnalis Isu', avatar: '🕵️‍♀️' },
  { name: 'Dimas Saputra (TE\'24)', role: 'Hubungan Masyarakat', avatar: '📣' },
];

const initialAspirasi: AspirasiItem[] = [
  {
    id: 1,
    sender: "Anonim (SI'24)",
    category: 'Fasilitas Kampus & Embung',
    subject: 'Penerapan Lampu Jalan di Selasar Gedung E - F',
    message: 'Jalan setapak antara gedung E menuju Gedung F gelap gulita saat malam hari kuliah sore selesai.',
    date: '14 Jun 2026',
    upvotes: 68,
  },
  {
    id: 2,
    sender: 'Doni (Teknik Geofisika)',
    category: 'Kebijakan Akademik & KRS',
    subject: 'Kuota Kelas Praktikum Fisika Dasar Selalu Kurang',
    message: 'Banyak mahasiswa tingkat awal menunda praktikum penting karena kuota yang terbatas.',
    date: '13 Jun 2026',
    upvotes: 52,
  },
];

const categoryFilters = [
  { value: 'semua', label: 'Semua Rubrik' },
  { value: 'Investigasi', label: 'Investigasi Kampus' },
  { value: 'Kabar Gajah', label: 'Kabar Gajah (Umum)' },
  { value: 'Opini Mahasiswa', label: 'Opini Mahasiswa' },
  { value: 'Sains & Teknologi', label: 'Sains & Teknologi' },
];

export default function HomePage() {
  const [activeSection, setActiveSection] = useState('berita');
  const [activeCategory, setActiveCategory] = useState('semua');
  const [searchQuery, setSearchQuery] = useState('');
  const [modalArticle, setModalArticle] = useState<Article | null>(null);
  const [aspirasiList, setAspirasiList] = useState<AspirasiItem[]>(initialAspirasi);
  const [toastMessage, setToastMessage] = useState('');
  const [toastVisible, setToastVisible] = useState(false);
  const [toastColor, setToastColor] = useState('bg-emerald-600');
  const [oprecForm, setOprecForm] = useState<OprecForm>({
    name: '',
    npm: '',
    faculty: '',
    division: 'Redaksi & Penulisan Berita',
    reason: '',
    portfolio: '',
  });

  const filteredArticles = useMemo(() => {
    return mockArticles.filter((article) => {
      const matchesCategory = activeCategory === 'semua' || article.category === activeCategory;
      const matchesSearch =
        article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.snippet.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.author.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  useEffect(() => {
    if (!toastVisible) return;
    const timeout = setTimeout(() => setToastVisible(false), 3500);
    return () => clearTimeout(timeout);
  }, [toastVisible]);

  const openReader = (articleId: number) => {
    const article = mockArticles.find((item) => item.id === articleId) || null;
    setModalArticle(article);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const closeReader = () => setModalArticle(null);

  const showToast = (text: string, colorClass = 'bg-emerald-600') => {
    setToastMessage(text);
    setToastColor(colorClass);
    setToastVisible(true);
  };

  const submitAspiration = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const name = (form.querySelector('#asp-name') as HTMLInputElement).value.trim() || 'Anonim';
    const category = (form.querySelector('#asp-category') as HTMLSelectElement).value;
    const subject = (form.querySelector('#asp-subject') as HTMLInputElement).value.trim();
    const message = (form.querySelector('#asp-message') as HTMLTextAreaElement).value.trim();

    const newAsp = {
      id: aspirasiList.length + 1,
      sender: name,
      category,
      subject,
      message,
      date: 'Hari Ini',
      upvotes: 1,
    };

    setAspirasiList([newAsp, ...aspirasiList]);
    form.reset();
    showToast('Aspirasi berhasil diunggah di Mading Kampus!', 'bg-emerald-600');
  };

  const submitOprec = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    showToast(`Halo ${oprecForm.name || 'Kandidat'}! Formulir divisi ${oprecForm.division} telah terkirim.`, 'bg-emerald-600');
    setOprecForm({ name: '', npm: '', faculty: '', division: 'Redaksi & Penulisan Berita', reason: '', portfolio: '' });
  };

  const upvoteAspirasi = (index: number) => {
    const updated = [...aspirasiList];
    updated[index].upvotes += 1;
    setAspirasiList(updated);
    showToast('Terima kasih, dukunganmu telah tercatat!', 'bg-indigo-600');
  };

  const copyArticleLink = async () => {
    const url = `${window.location.href}#article-${modalArticle?.id ?? ''}`;
    try {
      await navigator.clipboard.writeText(url);
      showToast('Link berhasil disalin ke clipboard!', 'bg-emerald-600');
    } catch {
      showToast('Gagal menyalin tautan.', 'bg-red-600');
    }
  };

  return (
    <main className="relative overflow-hidden pb-24">
      <div className="pointer-events-none absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full bg-red-600 glow-orb -z-10" />
      <div className="pointer-events-none absolute top-1/3 right-1/4 w-[400px] h-[400px] rounded-full bg-indigo-600 glow-orb -z-10" />
      <div className="pointer-events-none absolute bottom-1/4 left-10 w-[350px] h-[350px] rounded-full bg-teal-500 glow-orb -z-10" />

      <header className="sticky top-0 z-40 glass-nav transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col lg:flex-row justify-between items-center gap-4">
          <button type="button" onClick={() => setActiveSection('berita')} className="flex items-center space-x-3 group">
            <div className="w-12 h-12 bg-gradient-to-tr from-itera-red to-itera-gold flex items-center justify-center rounded-2xl text-white font-extrabold text-2xl shadow-lg shadow-red-900/40 transition-transform group-hover:rotate-6">
              PI
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="text-[9px] tracking-[0.2em] px-2 py-0.5 bg-red-900/30 border border-red-500/30 text-red-400 uppercase font-extrabold rounded-md">UKM MANDIRI</span>
                <span className="text-[9px] tracking-[0.2em] text-itera-gold font-bold">EST. 2016</span>
              </div>
              <h1 className="font-extrabold text-2xl tracking-tight bg-gradient-to-r from-white via-zinc-100 to-zinc-400 bg-clip-text text-transparent">LEMBAGA PERS ITERA</h1>
            </div>
          </button>

          <nav className="flex flex-wrap items-center justify-center gap-1 sm:gap-2 text-xs font-bold p-1.5 bg-zinc-900/60 rounded-2xl border border-zinc-800/80">
            {['berita', 'profil', 'proker', 'redaksi', 'aspirasi', 'oprec'].map((id) => {
              const labels: Record<string, string> = {
                berita: 'Berita & Liputan',
                profil: 'Profil UKM',
                proker: 'Program Kerja',
                redaksi: 'Struktur Kepengurusan',
                aspirasi: 'Pojok Aspirasi',
                oprec: 'Magang Pers',
              };
              return (
                <button
                  key={id}
                  type="button"
                  onClick={() => setActiveSection(id)}
                  className={`nav-btn px-4 py-2.5 rounded-xl text-xs transition-all duration-200 ${
                    activeSection === id ? 'text-white bg-zinc-800' : 'text-itera-textMuted hover:text-white'
                  } ${id === 'oprec' ? 'text-itera-gold hover:bg-itera-gold/10' : ''}`}
                >
                  {labels[id]}
                  {id === 'oprec' ? <span className="ml-1 inline-block w-2 h-2 rounded-full bg-emerald-500 animate-ping" /> : null}
                </button>
              );
            })}
          </nav>
        </div>
      </header>

      <section className={`max-w-7xl mx-auto px-6 py-12 section-container ${activeSection === 'berita' ? 'block' : 'hidden'} space-y-16`}>
        <div className="glass-card p-6 md:p-8 rounded-3xl border border-zinc-800/60 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="space-y-2">
            <h2 className="text-xl md:text-2xl font-black text-white flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-itera-gold animate-pulse" />
              Selamat Datang di Portal Berita & Profile Lembaga Pers ITERA
            </h2>
            <p className="text-sm text-itera-textMuted max-w-3xl leading-relaxed">
              Membuka gerbang kebenaran dan berita teraktual seputar dinamika kampus Institut Teknologi Sumatera. Baca liputan jurnalisme investigasi, opini, dan karya kreatif kami di bawah ini.
            </p>
          </div>
          <button type="button" onClick={() => setActiveSection('profil')} className="px-6 py-3 bg-gradient-to-r from-itera-red to-red-800 text-white font-bold rounded-xl text-xs hover:shadow-lg hover:shadow-red-900/30 transition-all flex items-center space-x-2 whitespace-nowrap">
            <span>Mengenal UKM Kami</span>
            <i className="fa-solid fa-arrow-right" />
          </button>
        </div>

        <div id="headline-container" className="relative group cursor-pointer overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900/40 p-1" onClick={() => openReader(mockArticles[0].id)}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            <div className="lg:col-span-7 overflow-hidden rounded-2xl relative h-[300px] md:h-[450px]">
              <img src={mockArticles[0].image} alt={mockArticles[0].title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
              <span className="absolute top-4 left-4 bg-gradient-to-r from-itera-red to-itera-gold text-white text-xs font-extrabold uppercase px-3 py-1.5 rounded-xl shadow-lg">
                <i className="fa-solid fa-star-of-life mr-1.5 animate-spin" /> Liputan Utama
              </span>
            </div>
            <div className="lg:col-span-5 p-6 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center space-x-2 text-[10px] font-extrabold uppercase tracking-widest text-itera-gold">
                  <span>{mockArticles[0].category}</span>
                </div>
                <h2 className="font-extrabold text-2xl md:text-3xl text-white leading-tight group-hover:text-itera-gold transition-colors duration-300">
                  {mockArticles[0].title}
                </h2>
                <p className="text-sm text-itera-textMuted leading-relaxed line-clamp-4">{mockArticles[0].snippet}</p>
              </div>
              <div className="flex items-center justify-between text-xs font-semibold text-itera-textMuted border-t border-zinc-800/80 pt-6 mt-4">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-itera-red to-itera-gold flex items-center justify-center text-white font-extrabold text-sm">
                    {mockArticles[0].author.charAt(0)}
                  </div>
                  <span>Oleh {mockArticles[0].author}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span>{mockArticles[0].date}</span>
                  <span>•</span>
                  <span className="text-zinc-500">{mockArticles[0].readTime}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="glass-card p-4 rounded-2xl border border-zinc-800/80 flex flex-col lg:flex-row justify-between items-stretch lg:items-center gap-6">
          <div className="flex flex-wrap gap-2 overflow-x-auto pb-1 lg:pb-0 scrollbar-none" id="category-filters">
            {categoryFilters.map((filter) => (
              <button
                key={filter.value}
                type="button"
                onClick={() => setActiveCategory(filter.value)}
                className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-xl transition-all ${
                  activeCategory === filter.value
                    ? 'bg-gradient-to-r from-itera-red to-red-800 text-white'
                    : 'bg-zinc-900 text-itera-textMuted border border-zinc-800 hover:text-white hover:border-zinc-700'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
          <div className="relative w-full lg:w-96">
            <span className="absolute inset-y-0 left-0 pl-4 flex items-center text-itera-textMuted">
              <i className="fa-solid fa-magnifying-glass" />
            </span>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Cari arsip berita atau investigasi..."
              className="w-full pl-11 pr-4 py-3 bg-zinc-950 border border-zinc-800 rounded-xl text-sm text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-itera-red/40 focus:border-itera-red transition-all"
            />
          </div>
        </div>

        <div>
          <div className="flex items-center space-x-3 mb-8">
            <span className="h-6 w-1 bg-gradient-to-b from-itera-red to-itera-gold rounded-full" />
            <h3 className="font-extrabold text-2xl tracking-tight">Klip Berita & Hasil Liputan</h3>
          </div>
          <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ${filteredArticles.length === 0 ? 'hidden' : ''}`}>
            {filteredArticles.map((art) => (
              <article key={art.id} className="glass-card hover:bg-zinc-900/90 border border-zinc-800 rounded-2xl overflow-hidden hover:scale-[1.02] transition-all duration-300 group">
                <div>
                  <div className="relative overflow-hidden cursor-pointer h-48" onClick={() => openReader(art.id)}>
                    <img src={art.image} alt={art.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent opacity-60" />
                    <span className="absolute top-4 left-4 bg-zinc-900/90 backdrop-blur-md text-zinc-300 border border-zinc-700/50 text-[10px] uppercase tracking-wider font-extrabold px-3 py-1 rounded-lg">
                      {art.category}
                    </span>
                  </div>
                  <div className="p-6 space-y-3">
                    <h4 className="font-extrabold text-lg text-white hover:text-itera-gold cursor-pointer transition-colors" onClick={() => openReader(art.id)}>
                      {art.title}
                    </h4>
                    <p className="text-xs text-itera-textMuted line-clamp-3 leading-relaxed">{art.snippet}</p>
                  </div>
                </div>
                <div className="px-6 py-4 border-t border-zinc-800/80 flex items-center justify-between text-[11px] text-itera-textMuted font-semibold">
                  <span className="text-zinc-300">Oleh: {art.author}</span>
                  <span>{art.date}</span>
                </div>
              </article>
            ))}
          </div>
          {filteredArticles.length === 0 ? (
            <div className="text-center py-20 bg-zinc-900/20 border border-dashed border-zinc-800 rounded-3xl space-y-4">
              <div className="w-16 h-16 bg-zinc-900 flex items-center justify-center rounded-2xl mx-auto text-itera-gold">
                <i className="fa-solid fa-magnifying-glass text-2xl animate-pulse" />
              </div>
              <div>
                <p className="text-lg font-bold text-white">Artikel Tidak Ditemukan</p>
                <p className="text-sm text-itera-textMuted">Coba cari dengan kata kunci lain.</p>
              </div>
            </div>
          ) : null}
        </div>
      </section>

      <section className={`section-container ${activeSection === 'profil' ? 'block' : 'hidden'} max-w-7xl mx-auto px-6 py-12 space-y-16`}>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center space-x-2 px-3 py-1 bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-bold uppercase rounded-full">
              <i className="fa-solid fa-fingerprint" />
              <span>Profil UKM Lembaga Pers ITERA</span>
            </div>
            <h2 className="font-extrabold text-4xl lg:text-5xl tracking-tight leading-tight bg-gradient-to-r from-white via-zinc-100 to-zinc-400 bg-clip-text text-transparent">
              Merekam Fakta, Menyuarakan Kebenaran.
            </h2>
            <p className="text-itera-textMuted leading-relaxed">
              Lembaga Pers ITERA (LPI) adalah Unit Kegiatan Mahasiswa Mandiri yang berfungsi sebagai wadah jurnalisme, publikasi informasi ilmiah, serta sarana penyalur aspirasi seluruh civitas akademika Institut Teknologi Sumatera.
            </p>
            <p className="text-itera-textMuted leading-relaxed">
              Sejak didirikan pada tahun 2016, kami terus konsisten meliput dinamika kampus, memproduksi majalah/buletin digital, mengulas kemajuan riset teknologi, serta menjaga prinsip objektivitas dan independensi jurnalisme mahasiswa.
            </p>
          </div>
          <div className="lg:col-span-6 relative">
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: 'fa-scroll', label: '2016', text: 'Tahun Berdiri', color: 'text-itera-gold' },
                { icon: 'fa-users', label: '45+', text: 'Anggota Aktif', color: 'text-teal-400' },
                { icon: 'fa-newspaper', label: '100+', text: 'Buletin & Rilis Berita', color: 'text-indigo-400' },
                { icon: 'fa-graduation-cap', label: 'ITERA', text: 'Afiliasi Kampus', color: 'text-red-500' },
              ].map((item) => (
                <div key={item.label} className="glass-card p-6 rounded-2xl border border-zinc-800 hover:border-zinc-700 transition-all">
                  <i className={`fa-solid ${item.icon} text-3xl ${item.color} mb-4`} />
                  <h4 className="font-extrabold text-3xl text-white">{item.label}</h4>
                  <p className="text-xs text-itera-textMuted uppercase tracking-wider mt-1">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-12 border-t border-zinc-800/80">
          <div className="glass-card p-8 rounded-3xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/10 rounded-full blur-3xl" />
            <div className="w-12 h-12 rounded-2xl bg-itera-red/15 text-red-400 flex items-center justify-center text-xl font-bold mb-6">
              <i className="fa-solid fa-eye" />
            </div>
            <h3 className="font-bold text-2xl mb-3 text-white">Visi</h3>
            <p className="text-itera-textMuted leading-relaxed text-sm">
              Menjadi lembaga pers mahasiswa yang kritis, independen, komunikatif, dan berbasis teknologi dalam menyajikan informasi yang berintegritas demi terciptanya iklim demokrasi kampus ITERA yang sehat.
            </p>
          </div>
          <div className="glass-card p-8 rounded-3xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 rounded-full blur-3xl" />
            <div className="w-12 h-12 rounded-2xl bg-indigo-500/15 text-indigo-400 flex items-center justify-center text-xl font-bold mb-6">
              <i className="fa-solid fa-compass" />
            </div>
            <h3 className="font-bold text-2xl mb-3 text-white">Misi Utama</h3>
            <ul className="text-itera-textMuted leading-relaxed text-sm space-y-2">
              <li className="flex items-start"><i className="fa-solid fa-circle-chevron-right text-itera-gold mr-2.5 mt-1" /> Menyajikan jurnalisme investigatif yang kredibel dan dapat dipertanggungjawabkan.</li>
              <li className="flex items-start"><i className="fa-solid fa-circle-chevron-right text-itera-gold mr-2.5 mt-1" /> Melatih kompetensi jurnalisme, kepenulisan, fotografi, dan teknologi penyiaran digital bagi mahasiswa ITERA.</li>
              <li className="flex items-start"><i className="fa-solid fa-circle-chevron-right text-itera-gold mr-2.5 mt-1" /> Menjembatani hubungan dan komunikasi yang efektif antara birokrasi kampus dan mahasiswa.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className={`section-container ${activeSection === 'proker' ? 'block' : 'hidden'} max-w-7xl mx-auto px-6 py-12 space-y-12`}>
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-bold uppercase rounded-full">
            <i className="fa-solid fa-calendar-days" />
            <span>Agenda Tahunan</span>
          </div>
          <h2 className="font-extrabold text-4xl text-white">Program Kerja Unggulan</h2>
          <p className="text-sm text-itera-textMuted">Beberapa agenda utama rutin yang digagas oleh Lembaga Pers ITERA untuk mengasah literasi dan jurnalisme di kampus.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: 'fa-book-open', title: 'PJTD (Pelatihan Jurnalistik Tingkat Dasar)', text: 'Pelatihan rutin untuk mengajari mahasiswa teknik menulis berita, wawancara, dan jurnalisme investigasi.' },
            { icon: 'fa-images', title: 'Gema Sumatra Bulletin', text: 'Penerbitan majalah digital yang memuat riset mahasiswa, isu rektorat, dan cerita kampus.' },
            { icon: 'fa-chalkboard-user', title: 'Lembaga Pers Mengajar', text: 'Program pengabdian untuk mengajari literasi media dan edukasi tangkal hoaks di sekolah sekitar.' },
          ].map((item) => (
            <div key={item.title} className="glass-card p-6 rounded-2xl border border-zinc-800 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-itera-red/10 flex items-center justify-center text-xl text-itera-red"><i className={`fa-solid ${item.icon}`} /></div>
              <h3 className="font-bold text-xl text-white">{item.title}</h3>
              <p className="text-xs text-itera-textMuted leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className={`section-container ${activeSection === 'redaksi' ? 'block' : 'hidden'} max-w-7xl mx-auto px-6 py-12 space-y-12`}>
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 bg-itera-gold/10 border border-itera-gold/20 text-itera-gold text-xs font-bold uppercase rounded-full">
            <i className="fa-solid fa-sitemap" />
            <span>Kabinet Kepengurusan 2026/2027</span>
          </div>
          <h2 className="font-extrabold text-4xl text-white">Struktur Redaksi & Kru</h2>
          <p className="text-sm text-itera-textMuted">Talenta kreatif di balik kemudi peliputan berita, desain buletin digital, dan pengembangan web profil resmi LPI.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {mockRedaksi.map((member) => (
            <div key={member.name} className="glass-card p-6 rounded-2xl text-center space-y-4 hover:border-itera-gold/30 hover:scale-[1.03] transition-all duration-300">
              <div className="w-16 h-16 rounded-2xl bg-zinc-800/80 flex items-center justify-center text-3xl mx-auto border border-zinc-700/50 shadow-inner">{member.avatar}</div>
              <div>
                <h4 className="font-bold text-white text-base">{member.name}</h4>
                <p className="text-[10px] font-extrabold text-itera-gold uppercase tracking-widest mt-1">{member.role}</p>
              </div>
              <div className="flex justify-center space-x-3 text-sm text-itera-textMuted pt-2 border-t border-zinc-800/60">
                <a href="#" className="hover:text-itera-gold"><i className="fa-solid fa-envelope" /></a>
                <a href="#" className="hover:text-itera-gold"><i className="fa-brands fa-linkedin" /></a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className={`section-container ${activeSection === 'aspirasi' ? 'block' : 'hidden'} max-w-7xl mx-auto px-6 py-12 space-y-12`}>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5 glass-card p-8 rounded-3xl space-y-6">
            <div>
              <div className="flex items-center space-x-2 text-itera-gold font-bold text-xs uppercase mb-2">
                <i className="fa-solid fa-bullhorn" />
                <span>Suara Mahasiswa ITERA</span>
              </div>
              <h2 className="font-extrabold text-2xl text-white">Suarakan Laporanmu</h2>
              <p className="text-xs text-itera-textMuted mt-1.5 leading-relaxed">Laporkan keluhan mengenai fasilitas kampus, KRS, parkiran, atau transparansi secara ANONIM. Laporan akan dikaji tim liputan kami.</p>
            </div>
            <form id="aspiration-form" onSubmit={submitAspiration} className="space-y-4">
              <div>
                <label className="block text-[10px] font-extrabold uppercase tracking-widest text-itera-textMuted mb-2">Nama Pengirim</label>
                <input id="asp-name" type="text" placeholder="Tulis Anonim atau inisial" className="w-full px-4 py-3 bg-zinc-950 border border-zinc-800 rounded-xl text-sm text-white focus:outline-none focus:ring-2 focus:ring-itera-red/40 focus:border-itera-red transition-all" />
              </div>
              <div>
                <label className="block text-[10px] font-extrabold uppercase tracking-widest text-itera-textMuted mb-2">Kategori Masalah</label>
                <select id="asp-category" className="w-full px-4 py-3 bg-zinc-950 border border-zinc-800 rounded-xl text-sm text-zinc-300 focus:outline-none focus:ring-2 focus:ring-itera-red/40 focus:border-itera-red transition-all">
                  <option>Fasilitas Kampus & Embung</option>
                  <option>Kebijakan Akademik & KRS</option>
                  <option>Layanan Administrasi ITERA</option>
                  <option>Keluhan Umum Lapangan</option>
                </select>
              </div>
              <div>
                <label className="block text-[10px] font-extrabold uppercase tracking-widest text-itera-textMuted mb-2">Subjek Aduan</label>
                <input id="asp-subject" type="text" placeholder="Contoh: Lampu di Laboratorium Fisika mati total" required className="w-full px-4 py-3 bg-zinc-950 border border-zinc-800 rounded-xl text-sm text-white focus:outline-none focus:ring-2 focus:ring-itera-red/40 focus:border-itera-red transition-all" />
              </div>
              <div>
                <label className="block text-[10px] font-extrabold uppercase tracking-widest text-itera-textMuted mb-2">Uraian Detail Keluhan</label>
                <textarea id="asp-message" rows={4} placeholder="Uraikan laporanmu secara mendetail..." required className="w-full px-4 py-3 bg-zinc-950 border border-zinc-800 rounded-xl text-sm text-white focus:outline-none focus:ring-2 focus:ring-itera-red/40 focus:border-itera-red transition-all" />
              </div>
              <button type="submit" className="w-full py-4 bg-gradient-to-r from-itera-red to-red-800 text-white font-extrabold rounded-xl text-sm shadow-lg shadow-red-900/15 hover:shadow-red-900/25 transition-all flex items-center justify-center space-x-2">
                <i className="fa-solid fa-paper-plane" />
                <span>Posting di Mading Digital</span>
              </button>
            </form>
          </div>

          <div className="lg:col-span-7 space-y-6">
            <div>
              <h3 className="font-extrabold text-2xl text-white">Mading Aspirasi Mahasiswa ITERA</h3>
              <p className="text-xs text-itera-textMuted mt-1">Laporan dari mahasiswa ITERA yang sedang berada di bawah pemantauan tim riset internal Lembaga Pers.</p>
            </div>
            <div className="space-y-4">
              {aspirasiList.map((asp, index) => (
                <div key={asp.id} className="glass-card p-6 rounded-2xl space-y-4 hover:border-zinc-700 transition-all duration-200">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <span className="bg-red-500/10 border border-red-500/20 text-red-400 text-[9px] font-extrabold px-2.5 py-1 rounded-lg uppercase tracking-wider">{asp.category}</span>
                      <span className="text-xs text-itera-textMuted">{asp.date}</span>
                    </div>
                    <span className="text-xs font-semibold text-itera-textMuted">Oleh: <strong className="text-itera-gold">{asp.sender}</strong></span>
                  </div>
                  <div>
                    <h4 className="font-bold text-base text-white mb-2">"{asp.subject}"</h4>
                    <p className="text-xs text-itera-textMuted leading-relaxed">{asp.message}</p>
                  </div>
                  <div className="flex items-center justify-between pt-3 border-t border-zinc-800/80">
                    <span className="text-[10px] text-itera-gold font-bold bg-itera-gold/10 px-2.5 py-1 rounded-lg"><i className="fa-solid fa-clock-rotate-left mr-1 animate-pulse" /> Diteruskan ke Rektorat</span>
                    <button type="button" onClick={() => upvoteAspirasi(index)} className="flex items-center space-x-2 text-xs font-bold text-itera-textMuted hover:text-itera-gold transition-colors">
                      <i className="fa-solid fa-fire text-red-600" />
                      <span>Upvote ({asp.upvotes})</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className={`section-container ${activeSection === 'oprec' ? 'block' : 'hidden'} max-w-4xl mx-auto px-6 py-12 space-y-8`}>
        <div className="bg-gradient-to-br from-zinc-900 to-zinc-950 text-white p-8 md:p-12 rounded-3xl relative overflow-hidden border border-zinc-800 shadow-2xl">
          <div className="absolute -right-16 -bottom-16 w-80 h-80 bg-red-600/15 rounded-full blur-[80px] pointer-events-none" />
          <div className="relative z-10 space-y-6">
            <span className="inline-flex items-center space-x-2 px-3 py-1 bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-bold uppercase rounded-full">
              <i className="fa-solid fa-feather-point" />
              <span>Magang Jurnalistik ITERA 2026</span>
            </span>
            <h2 className="font-extrabold text-4xl leading-tight text-white">Waktunya Kamu Mengabarkan Kebenaran!</h2>
            <p className="text-itera-textMuted max-w-2xl leading-relaxed text-sm">Kami mengundang para reporter bertalenta, fotografer handal, desainer visual kreatif, serta developer web untuk bergabung dan bertumbuh bersama LPI.</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4 text-center">
              {[
                { icon: 'fa-pen-nib', label: 'Reporter Berita', color: 'text-itera-gold' },
                { icon: 'fa-camera', label: 'Fotografer Media', color: 'text-teal-400' },
                { icon: 'fa-palette', label: 'Desainer Buletin', color: 'text-indigo-400' },
                { icon: 'fa-terminal', label: 'Web & IT Dev', color: 'text-emerald-400' },
              ].map((item) => (
                <div key={item.label} className="p-4 bg-zinc-900/80 border border-zinc-800 rounded-2xl">
                  <i className={`fa-solid ${item.icon} text-2xl mb-2 ${item.color}`} />
                  <p className="text-xs font-bold text-white">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="glass-card rounded-3xl p-8 space-y-6">
          <div className="flex items-center space-x-3">
            <span className="h-6 w-1 bg-gradient-to-b from-itera-red to-itera-gold rounded-full" />
            <h3 className="font-extrabold text-2xl tracking-tight text-white">Formulir Pendaftaran Magang LPI</h3>
          </div>
          <form id="oprec-form" onSubmit={submitOprec} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <label className="block text-[10px] font-extrabold uppercase tracking-widest text-itera-textMuted mb-2">Nama Lengkap</label>
                <input value={oprecForm.name} onChange={(e) => setOprecForm({ ...oprecForm, name: e.target.value })} className="w-full px-4 py-3 bg-zinc-950 border border-zinc-800 rounded-xl text-sm text-white focus:outline-none focus:ring-2 focus:ring-itera-red/40 focus:border-itera-red transition-all" required />
              </div>
              <div>
                <label className="block text-[10px] font-extrabold uppercase tracking-widest text-itera-textMuted mb-2">NIM (Nomor Induk Mahasiswa)</label>
                <input value={oprecForm.npm} onChange={(e) => setOprecForm({ ...oprecForm, npm: e.target.value })} className="w-full px-4 py-3 bg-zinc-950 border border-zinc-800 rounded-xl text-sm text-white focus:outline-none focus:ring-2 focus:ring-itera-red/40 focus:border-itera-red transition-all" required />
              </div>
              <div>
                <label className="block text-[10px] font-extrabold uppercase tracking-widest text-itera-textMuted mb-2">Program Studi & Angkatan</label>
                <input value={oprecForm.faculty} onChange={(e) => setOprecForm({ ...oprecForm, faculty: e.target.value })} className="w-full px-4 py-3 bg-zinc-950 border border-zinc-800 rounded-xl text-sm text-white focus:outline-none focus:ring-2 focus:ring-itera-red/40 focus:border-itera-red transition-all" required />
              </div>
              <div>
                <label className="block text-[10px] font-extrabold uppercase tracking-widest text-itera-textMuted mb-2">Divisi Magang Pilihan</label>
                <select value={oprecForm.division} onChange={(e) => setOprecForm({ ...oprecForm, division: e.target.value })} className="w-full px-4 py-3 bg-zinc-950 border border-zinc-800 rounded-xl text-sm text-zinc-300 focus:outline-none focus:ring-2 focus:ring-itera-red/40 focus:border-itera-red transition-all">
                  <option>Redaksi & Penulisan Berita</option>
                  <option>Investigasi Isu Kampus</option>
                  <option>Fotografi & Jurnalistik Foto</option>
                  <option>Desain Layout & Grafis Media</option>
                  <option>Teknologi & IT Media</option>
                </select>
              </div>
            </div>
            <div className="space-y-4 flex flex-col justify-between">
              <div>
                <label className="block text-[10px] font-extrabold uppercase tracking-widest text-itera-textMuted mb-2">Alasan bergabung ke Lembaga Pers ITERA?</label>
                <textarea value={oprecForm.reason} onChange={(e) => setOprecForm({ ...oprecForm, reason: e.target.value })} rows={4} required className="w-full px-4 py-3 bg-zinc-950 border border-zinc-800 rounded-xl text-sm text-white focus:outline-none focus:ring-2 focus:ring-itera-red/40 focus:border-itera-red transition-all" />
              </div>
              <div>
                <label className="block text-[10px] font-extrabold uppercase tracking-widest text-itera-textMuted mb-2">Tautan Karya/Portofolio (Opsional)</label>
                <input value={oprecForm.portfolio} onChange={(e) => setOprecForm({ ...oprecForm, portfolio: e.target.value })} className="w-full px-4 py-3 bg-zinc-950 border border-zinc-800 rounded-xl text-sm text-white focus:outline-none focus:ring-2 focus:ring-itera-red/40 focus:border-itera-red transition-all" />
              </div>
              <button type="submit" className="w-full py-4 bg-gradient-to-r from-itera-red to-red-800 text-white font-extrabold rounded-xl text-sm shadow-lg shadow-red-900/15 hover:shadow-red-900/25 transition-all flex items-center justify-center space-x-2">
                <i className="fa-solid fa-square-check" />
                <span>Kirim Pendaftaran</span>
              </button>
            </div>
          </form>
        </div>
      </section>

      <Footer />

      <div className={`fixed inset-0 bg-black/90 backdrop-blur-md z-50 flex justify-center items-center transition-all duration-300 ${modalArticle ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <div className={`w-full max-w-4xl bg-zinc-950 border border-zinc-800 rounded-3xl shadow-2xl flex flex-col h-[90vh] overflow-hidden m-4 transform transition duration-300 ${modalArticle ? 'scale-100' : 'scale-95'}`}>
          <div className="border-b border-zinc-800 p-5 flex items-center justify-between bg-zinc-900/90 backdrop-blur-md sticky top-0 z-10">
            <button type="button" onClick={closeReader} className="flex items-center space-x-2 text-itera-textMuted hover:text-white font-bold text-sm transition-colors">
              <i className="fa-solid fa-arrow-left" />
              <span>Kembali ke Berita</span>
            </button>
            <div className="flex items-center space-x-3">
              <button type="button" onClick={copyArticleLink} className="w-10 h-10 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-white flex items-center justify-center transition-all" title="Salin Tautan">
                <i className="fa-regular fa-share-from-square" />
              </button>
            </div>
          </div>
          <div className="flex-1 overflow-y-auto p-8 md:p-12 space-y-8">
            {modalArticle ? (
              <>
                <div className="space-y-4">
                  <span className="bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-extrabold px-3 py-1.5 rounded-lg uppercase tracking-wider inline-block">{modalArticle.category}</span>
                  <h2 className="font-extrabold text-3xl md:text-4.5xl text-white leading-tight">{modalArticle.title}</h2>
                  <div className="flex flex-wrap items-center justify-between gap-4 border-y border-zinc-800 py-5 text-xs font-semibold text-itera-textMuted">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-itera-red to-itera-gold text-white flex items-center justify-center font-bold">{modalArticle.author.charAt(0)}</div>
                      <span>Liputan oleh: <strong className="text-white">{modalArticle.author}</strong></span>
                    </div>
                    <div className="flex items-center space-x-4 text-zinc-500">
                      <span><i className="fa-regular fa-clock mr-1.5 text-itera-gold" />{modalArticle.readTime} Baca</span>
                      <span><i className="fa-regular fa-calendar-days mr-1.5 text-red-400" />{modalArticle.date}</span>
                    </div>
                  </div>
                </div>
                <div className="overflow-hidden rounded-2xl border border-zinc-800 h-[250px] md:h-[400px]">
                  <img src={modalArticle.image} alt={modalArticle.title} className="w-full h-full object-cover" />
                </div>
                <article className="text-zinc-300 leading-relaxed text-sm md:text-base space-y-6" dangerouslySetInnerHTML={{ __html: modalArticle.content }} />
                <div className="border-t border-zinc-800/80 pt-8 space-y-4 text-center">
                  <p className="text-xs font-bold text-itera-textMuted">Sebarkan artikel jurnalisme ini ke grup angkatan / jurusan ITERA!</p>
                  <div className="flex justify-center">
                    <button type="button" onClick={copyArticleLink} className="px-5 py-2.5 bg-zinc-800 hover:bg-zinc-700 text-white rounded-xl text-xs font-bold transition-all flex items-center space-x-2">
                      <i className="fa-regular fa-copy" />
                      <span>Salin Link Berita</span>
                    </button>
                  </div>
                </div>
              </>
            ) : null}
          </div>
        </div>
      </div>

      <div className={`fixed bottom-6 right-6 text-white font-semibold px-6 py-4 rounded-2xl shadow-xl transform transition-all duration-300 z-50 flex items-center space-x-3 border border-zinc-800 ${toastColor} ${toastVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`}>
        <i className="fa-solid fa-square-check text-lg" />
        <span>{toastMessage}</span>
      </div>
    </main>
  );
}
