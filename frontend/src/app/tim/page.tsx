'use client';

import { useState, useMemo, useEffect } from 'react';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import ImprovedOrganizationalChart from '@/components/ImprovedOrganizationalChart';
import { organizationalData } from '@/components/OrganizationalStructure';

export default function TeamPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedMember, setSelectedMember] = useState<{ member: any; dept: string; role: string; staffList?: any[] } | null>(null);

  // Close modal on Esc keypress
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedMember(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Manage browser history to allow closing modal with mobile back button
  useEffect(() => {
    if (!selectedMember) return;

    // Push a dummy state so back button acts as a close trigger
    window.history.pushState({ modalOpen: true }, '');

    const handlePopState = () => {
      setSelectedMember(null);
    };

    window.addEventListener('popstate', handlePopState);

    return () => {
      window.removeEventListener('popstate', handlePopState);
      // Clean up the dummy state if closed via other means (X click, outside click, Escape)
      if (window.history.state?.modalOpen) {
        window.history.back();
      }
    };
  }, [selectedMember]);



  // Flat list of all members for search indexing
  const allMembers = useMemo(() => {
    const list: { member: any; deptName: string; roleName: string }[] = [];
    organizationalData.forEach((dept) => {
      // Direct members / Core leadership
      dept.members.forEach((m) => {
        list.push({ member: m, deptName: dept.name, roleName: m.role });
      });
      // Subdivision members
      if (dept.subdivisions) {
        dept.subdivisions.forEach((sub) => {
          // Head of subdivision
          list.push({ member: sub.head, deptName: `${dept.name} - ${sub.title}`, roleName: sub.head.role });
          // Staff
          sub.staff.forEach((s) => {
            list.push({ member: s, deptName: `${dept.name} - ${sub.title}`, roleName: s.role });
          });
        });
      }
    });

    // Deduplicate by NIM
    const seenNims = new Set<string>();
    return list.filter((item) => {
      if (seenNims.has(item.member.nim)) return false;
      seenNims.add(item.member.nim);
      return true;
    });
  }, []);

  // Filter members by search query
  const filteredMembers = useMemo(() => {
    if (!searchQuery.trim()) return [];
    const query = searchQuery.toLowerCase().trim();
    return allMembers.filter(
      (item) =>
        item.member.name.toLowerCase().includes(query) ||
        item.member.nim.includes(query) ||
        item.roleName.toLowerCase().includes(query) ||
        item.deptName.toLowerCase().includes(query)
    );
  }, [searchQuery, allMembers]);

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
              Struktur Organisasi
            </span>
            <h1 className="text-4xl md:text-6xl font-black tracking-tight leading-tight">
              Di Balik <span className="text-transparent bg-gradient-to-r from-itera-gold to-itera-red bg-clip-text">Suara Kampus</span>
            </h1>
            <p className="text-lg text-itera-textMuted max-w-2xl mx-auto leading-relaxed">
              Kenal lebih dekat dengan tim redaktur, jurnalis, desainer, dan pengembang yang berdedikasi tinggi di UKM Lembaga Pers ITERA.
            </p>
          </div>
        </section>

        {/* Search Bar Section */}
        <section className="px-6 py-4 max-w-7xl mx-auto relative z-10">
          <div className="flex justify-center mb-8 max-w-xl mx-auto">
            {/* Search Input */}
            <div className="relative w-full">
              <span className="absolute inset-y-0 left-0 pl-4 flex items-center text-itera-textMuted">
                <i className="fa-solid fa-magnifying-glass" />
              </span>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Cari nama pengurus, jabatan, atau NIM..."
                className="w-full pl-11 pr-10 py-3 bg-zinc-950 border border-zinc-800 rounded-xl text-sm text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-itera-red/40 focus:border-itera-red transition-all"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="absolute inset-y-0 right-0 pr-4 flex items-center text-zinc-500 hover:text-white transition"
                >
                  ✕
                </button>
              )}
            </div>
          </div>
        </section>

        {/* Structure Content */}
        <section className="px-6 py-6 max-w-7xl mx-auto relative z-10">
          {searchQuery.trim() ? (
            <div className="max-w-5xl mx-auto space-y-6">
              <div className="flex items-center space-x-2">
                <span className="h-5 w-1 rounded-full bg-itera-gold" />
                <p className="text-sm font-bold text-white">Hasil Pencarian: {filteredMembers.length} Anggota</p>
              </div>

              {filteredMembers.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {filteredMembers.map((item, idx) => (
                    <div
                      key={idx}
                      onClick={() => setSelectedMember({ member: item.member, dept: item.deptName, role: item.roleName })}
                      className="glass-card p-5 rounded-2xl border border-zinc-800 hover:border-zinc-700 transition-all duration-300 hover:scale-[1.02] cursor-pointer flex items-center gap-4"
                    >
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-itera-red to-itera-gold flex items-center justify-center text-white font-extrabold text-sm flex-shrink-0">
                        {item.member.name.charAt(0)}
                      </div>
                      <div className="min-w-0 flex-1">
                        <h4 className="font-bold text-white text-sm truncate">{item.member.name}</h4>
                        <p className="text-xs text-itera-gold font-semibold truncate uppercase tracking-wider">{item.roleName}</p>
                        <p className="text-[10px] text-itera-textMuted mt-0.5">NIM: {item.member.nim} • {item.deptName}</p>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-16 bg-zinc-900/10 border border-dashed border-zinc-800 rounded-3xl space-y-4">
                  <div className="w-12 h-12 bg-zinc-900/40 flex items-center justify-center rounded-xl mx-auto text-itera-gold">
                    <i className="fa-solid fa-user-slash text-xl" />
                  </div>
                  <p className="text-sm text-itera-textMuted">Anggota tidak ditemukan. Coba gunakan kata kunci lain.</p>
                </div>
              )}
            </div>
          ) : (
            <div className="glass-card rounded-3xl p-6 md:p-10 border border-white/5 overflow-x-auto">
              <ImprovedOrganizationalChart onMemberClick={(member, dept, role, staffList) => setSelectedMember({ member, dept, role, staffList })} />
            </div>
          )}
        </section>



        {/* Member Detail Modal */}
        {selectedMember && (
          <div
            onClick={() => setSelectedMember(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm transition-opacity duration-300 cursor-pointer"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="relative glass-card max-w-md w-full rounded-3xl p-8 border border-white/10 shadow-2xl space-y-6 transform scale-100 transition-transform duration-300 cursor-default max-h-[90vh] overflow-y-auto custom-scrollbar"
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={() => setSelectedMember(null)}
                className="absolute top-4 right-4 text-zinc-400 hover:text-white transition text-lg"
              >
                ✕
              </button>

              <div className="text-center space-y-4">
                {/* Avatar Generator */}
                <div className="w-20 h-20 mx-auto rounded-2xl bg-gradient-to-tr from-itera-red to-itera-gold p-1 shadow-lg shadow-itera-red/20">
                  <div className="w-full h-full rounded-2xl bg-zinc-950 flex items-center justify-center text-3xl text-white font-extrabold select-none">
                    {selectedMember.member.name.charAt(0)}{selectedMember.member.name.split(' ')[1]?.charAt(0) || ''}
                  </div>
                </div>

                <div className="space-y-1">
                  <h3 className="text-lg font-extrabold text-white">{selectedMember.member.name}</h3>
                  <p className="text-xs text-itera-gold font-bold uppercase tracking-wider">{selectedMember.role}</p>
                  <p className="text-[11px] text-itera-textMuted">NIM: {selectedMember.member.nim}</p>
                </div>
              </div>

              <div className="border-t border-white/5 pt-4 space-y-3 text-xs text-itera-textMuted">
                <div className="flex justify-between">
                  <span>Departemen</span>
                  <span className="font-bold text-white text-right">{selectedMember.dept}</span>
                </div>
                <div className="flex justify-between">
                  <span>Instansi</span>
                  <span className="font-semibold text-white">Lembaga Pers ITERA</span>
                </div>
                {selectedMember.member.interestCode && (
                  <div className="flex justify-between">
                    <span>Kode Interest</span>
                    <span className="font-bold text-itera-gold tracking-wider">{selectedMember.member.interestCode}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span>Status Kru</span>
                  <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 font-bold uppercase tracking-wider text-[9px]">Aktif</span>
                </div>
              </div>

              {/* Staff List inside Modal */}
              {selectedMember.staffList && selectedMember.staffList.length > 0 && (
                <div className="border-t border-white/5 pt-4 space-y-3">
                  <p className="text-[10px] font-extrabold uppercase tracking-widest text-itera-textMuted opacity-70">
                    Anggota Divisi ({selectedMember.staffList.length})
                  </p>
                  <div className="max-h-40 overflow-y-auto space-y-2 pr-1 custom-scrollbar">
                    {selectedMember.staffList.map((staff, sIdx) => (
                      <div
                        key={sIdx}
                        onClick={() => setSelectedMember({ member: staff, dept: selectedMember.dept, role: 'Staff' })}
                        className="flex items-center justify-between p-2 rounded-xl bg-white/5 border border-white/5 hover:border-zinc-700 hover:bg-white/10 text-xs cursor-pointer transition-all duration-200"
                      >
                        <div className="min-w-0 flex-1">
                          <p className="font-bold text-white truncate">{staff.name}</p>
                          <p className="text-[10px] text-itera-textMuted mt-0.5">NIM: {staff.nim}</p>
                        </div>
                        <span className="px-2 py-0.5 rounded bg-zinc-900 text-zinc-400 text-[8px] font-bold uppercase tracking-wider">
                          Staff
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="flex justify-center gap-3 pt-2">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/5 border border-white/10 text-zinc-300 hover:bg-white/10 hover:text-white transition"
                  title="Instagram"
                >
                  <i className="fa-brands fa-instagram" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/5 border border-white/10 text-zinc-300 hover:bg-white/10 hover:text-white transition"
                  title="LinkedIn"
                >
                  <i className="fa-brands fa-linkedin-in" />
                </a>
              </div>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </>
  );
}
