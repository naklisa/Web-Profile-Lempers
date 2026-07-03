'use client';

import { useState } from 'react';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

export default function OprecPage() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    npm: '',
    major: '',
    whatsapp: '',
    division: '',
    portfolio: '',
    motivation: '',
    commitment: false,
  });

  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData((prev) => ({ ...prev, [name]: checked }));
  };

  const nextStep = () => setStep((s) => Math.min(s + 1, 3));
  const prevStep = () => setStep((s) => Math.max(s - 1, 1));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Oprec Application Submitted:', formData);
    setSubmitted(true);
    // Reset form after a delay
    setTimeout(() => {
      setSubmitted(false);
      setStep(1);
      setFormData({
        name: '',
        npm: '',
        major: '',
        whatsapp: '',
        division: '',
        portfolio: '',
        motivation: '',
        commitment: false,
      });
    }, 5000);
  };

  const roles = [
    { title: 'Reporter & Penulis', desc: 'Melakukan wawancara di lapangan, riset isu kampus, dan menyusun draft artikel berita secara lugas.' },
    { title: 'Editor & Redaktur', desc: 'Meninjau kelayakan rilis berita, menyunting tata bahasa, dan bertanggung jawab atas keselarasan isi tulisan.' },
    { title: 'Fotografer & Videografer', desc: 'Menghasilkan dokumentasi bernilai jurnalistik tinggi dan merancang video dokumenter singkat.' },
    { title: 'Desainer Grafis', desc: 'Membuat tata letak infografis buletin, poster kampanye sosial, serta visual feeds sosial media LPI.' },
    { title: 'IT & Web Developer', desc: 'Mengembangkan sistem informasi internal, portal pengaduan aspirasi, serta merancang visual situs web.' },
  ];

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-itera-bg text-itera-textPrimary pb-24 relative overflow-hidden">
        {/* Glow Effects */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-itera-red/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-itera-gold/5 rounded-full blur-3xl pointer-events-none" />

        {/* Hero Section */}
        <section className="relative px-6 py-20 max-w-7xl mx-auto z-10 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <span className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold tracking-widest text-itera-gold uppercase">
              Magang Pers Mahasiswa
            </span>
            <h1 className="text-4xl md:text-5xl font-black tracking-tight">
              Open Recruitment LPI 2026
            </h1>
            <p className="text-lg text-itera-textMuted max-w-2xl mx-auto leading-relaxed">
              Jadilah bagian dari pers mahasiswa independen ITERA. Kembangkan keahlian jurnalisme dan perluas portofolio media digital Anda.
            </p>
          </div>
        </section>

        {/* Roles */}
        <section className="px-6 py-8 max-w-7xl mx-auto relative z-10">
          <h2 className="text-2xl font-extrabold text-white text-center mb-8">Pilihan Divisi Kerja</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {roles.map((role, idx) => (
              <div key={idx} className="glass-card rounded-2xl p-6 border border-white/5 space-y-3">
                <h3 className="font-extrabold text-white text-base flex items-center gap-2">
                  <span className="w-1.5 h-6 rounded bg-gradient-to-b from-itera-gold to-itera-red" />
                  {role.title}
                </h3>
                <p className="text-itera-textMuted text-xs leading-relaxed">{role.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Stepper Form */}
        <section className="px-6 py-12 max-w-3xl mx-auto relative z-10">
          <div className="glass-card rounded-3xl p-8 border border-white/5 space-y-8">
            {/* Progress Stepper Bar */}
            <div className="flex items-center justify-between max-w-xs mx-auto text-xs font-bold">
              {[1, 2, 3].map((num) => (
                <div key={num} className="flex items-center gap-2">
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center border transition-all duration-300 ${step >= num
                        ? 'bg-gradient-to-r from-itera-gold to-itera-red border-transparent text-white shadow-glow'
                        : 'bg-white/5 border-white/10 text-white/40'
                      }`}
                  >
                    {num}
                  </div>
                  <span className={step >= num ? 'text-white font-black' : 'text-white/40'}>
                    {num === 1 ? 'Identitas' : num === 2 ? 'Divisi' : 'Submit'}
                  </span>
                </div>
              ))}
            </div>

            {submitted ? (
              <div className="p-8 text-center space-y-4">
                <span className="text-5xl block animate-bounce">🎉</span>
                <h3 className="text-2xl font-black text-white">Formulir Terkirim!</h3>
                <p className="text-itera-textMuted text-xs leading-relaxed max-w-md mx-auto">
                  Terima kasih telah mendaftar di UKM Lembaga Pers ITERA. Tim HRD kami akan meninjau berkas pendaftaran Anda dan menghubungi via WhatsApp untuk tahap wawancara.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Step 1 */}
                {step === 1 && (
                  <div className="space-y-4">
                    <h3 className="text-lg font-extrabold text-white">Langkah 1: Identitas Calon Magang</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <label className="text-[10px] text-itera-textMuted font-bold uppercase tracking-wider">Nama Lengkap</label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/20 text-xs focus:outline-none focus:border-itera-gold/50 transition"
                          placeholder="Nama Lengkap..."
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="text-[10px] text-itera-textMuted font-bold uppercase tracking-wider">Nomor Pokok Mahasiswa (NPM)</label>
                        <input
                          type="text"
                          name="npm"
                          value={formData.npm}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/20 text-xs focus:outline-none focus:border-itera-gold/50 transition"
                          placeholder="NPM Anda..."
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <label className="text-[10px] text-itera-textMuted font-bold uppercase tracking-wider">Program Studi & Angkatan</label>
                        <input
                          type="text"
                          name="major"
                          value={formData.major}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/20 text-xs focus:outline-none focus:border-itera-gold/50 transition"
                          placeholder="Contoh: Teknik Informatika '24"
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="text-[10px] text-itera-textMuted font-bold uppercase tracking-wider">Nomor WhatsApp</label>
                        <input
                          type="text"
                          name="whatsapp"
                          value={formData.whatsapp}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/20 text-xs focus:outline-none focus:border-itera-gold/50 transition"
                          placeholder="+62 8xx..."
                        />
                      </div>
                    </div>

                    <div className="pt-4 flex justify-end">
                      <button
                        type="button"
                        onClick={nextStep}
                        className="px-6 py-3 bg-white/5 border border-white/10 hover:bg-white/10 text-white text-xs font-bold rounded-xl transition"
                      >
                        Lanjutkan →
                      </button>
                    </div>
                  </div>
                )}

                {/* Step 2 */}
                {step === 2 && (
                  <div className="space-y-4">
                    <h3 className="text-lg font-extrabold text-white">Langkah 2: Pemilihan Divisi & Berkas</h3>
                    <div className="space-y-1">
                      <label className="text-[10px] text-itera-textMuted font-bold uppercase tracking-wider">Divisi yang Diminati</label>
                      <select
                        name="division"
                        value={formData.division}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-white/10 text-white text-xs focus:outline-none focus:border-itera-gold/50 transition"
                      >
                        <option value="">Pilih Divisi...</option>
                        <option value="Reporter">Reporter & Penulis</option>
                        <option value="Editor">Editor & Redaktur</option>
                        <option value="Fotografer">Fotografer & Videografer</option>
                        <option value="Designer">Desainer Grafis</option>
                        <option value="IT">IT & Web Developer</option>
                      </select>
                    </div>

                    <div className="space-y-1">
                      <label className="text-[10px] text-itera-textMuted font-bold uppercase tracking-wider">Link Portofolio (Google Drive/Behance/GitHub)</label>
                      <input
                        type="url"
                        name="portfolio"
                        value={formData.portfolio}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/20 text-xs focus:outline-none focus:border-itera-gold/50 transition"
                        placeholder="https://drive.google.com/..."
                      />
                    </div>

                    <div className="pt-4 flex justify-between">
                      <button
                        type="button"
                        onClick={prevStep}
                        className="px-6 py-3 bg-white/5 border border-white/10 hover:bg-white/10 text-white text-xs font-bold rounded-xl transition"
                      >
                        ← Kembali
                      </button>
                      <button
                        type="button"
                        onClick={nextStep}
                        className="px-6 py-3 bg-white/5 border border-white/10 hover:bg-white/10 text-white text-xs font-bold rounded-xl transition"
                      >
                        Lanjutkan →
                      </button>
                    </div>
                  </div>
                )}

                {/* Step 3 */}
                {step === 3 && (
                  <div className="space-y-4">
                    <h3 className="text-lg font-extrabold text-white">Langkah 3: Alasan & Pernyataan Komitmen</h3>
                    <div className="space-y-1">
                      <label className="text-[10px] text-itera-textMuted font-bold uppercase tracking-wider">Mengapa Anda ingin bergabung dengan LPI?</label>
                      <textarea
                        name="motivation"
                        value={formData.motivation}
                        onChange={handleInputChange}
                        required
                        rows={4}
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/20 text-xs focus:outline-none focus:border-itera-gold/50 transition resize-none"
                        placeholder="Tuliskan motivasi, pengalaman kepenulisan/visual, atau tujuan Anda bergabung..."
                      />
                    </div>

                    <div className="flex gap-3 items-start pt-2">
                      <input
                        type="checkbox"
                        name="commitment"
                        id="commitment"
                        checked={formData.commitment}
                        onChange={handleCheckboxChange}
                        required
                        className="mt-1 w-4 h-4 rounded border-white/10 bg-white/5 accent-itera-gold"
                      />
                      <label htmlFor="commitment" className="text-xs text-itera-textMuted leading-relaxed select-none cursor-pointer">
                        Saya berkomitmen untuk mengikuti seluruh rangkaian magang LPI selama satu semester akademik secara bertanggung jawab.
                      </label>
                    </div>

                    <div className="pt-4 flex justify-between">
                      <button
                        type="button"
                        onClick={prevStep}
                        className="px-6 py-3 bg-white/5 border border-white/10 hover:bg-white/10 text-white text-xs font-bold rounded-xl transition"
                      >
                        ← Kembali
                      </button>
                      <button
                        type="submit"
                        className="px-8 py-3 bg-gradient-to-r from-itera-gold to-itera-red text-white text-xs font-bold rounded-xl hover:shadow-lg hover:shadow-itera-red/40 transition duration-300"
                      >
                        Kirim Pendaftaran
                      </button>
                    </div>
                  </div>
                )}
              </form>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
