'use client';

import { useState } from 'react';

export interface Member {
  name: string;
  nim: string;
  role: string;
  isHead?: boolean;
  division?: string;
  interestCode?: string;
}

export interface Department {
  id: string;
  name: string;
  title: string;
  icon: string;
  color: string;
  bgColor: string;
  accentBorder: string;
  members: Member[];
  subdivisions?: Subdivision[];
}

export interface Subdivision {
  title: string;
  head: Member;
  staff: Member[];
}

export const organizationalData: Department[] = [
  {
    id: 'bph',
    name: 'BPH INTI',
    title: 'Badan Pengurus Harian Inti (Core Leadership)',
    icon: 'fa-crown',
    color: 'text-itera-gold',
    bgColor: 'bg-itera-gold/10',
    accentBorder: 'border-itera-gold/30',
    members: [
      { name: 'Arvel Alyagin', nim: '12340012', role: 'Pemimpin Umum', isHead: true, interestCode: 'LP-F 2023210' },
      { name: 'Refi Ikhsanti', nim: '123140126', role: 'Sekretaris Umum', isHead: true, interestCode: 'LP-F 2023206' },
      { name: 'Tarisya Hidayatul Rahmi', nim: '123450052', role: 'Bendahara Umum', isHead: true, interestCode: 'LP-J 2023107' },
      { name: 'Nesya Salsabila', nim: '124430111', role: 'Sekretaris 1', interestCode: 'LP-V 2024301' },
      { name: 'Fitri Ainurrohmah', nim: '124290009', role: 'Bendahara 1', interestCode: 'LP-F 2024204' },
    ],
  },
  {
    id: 'redaksi',
    name: 'BIDANG REDAKSI',
    title: 'Editorial Division',
    icon: 'fa-pen-nib',
    color: 'text-red-500',
    bgColor: 'bg-red-500/10',
    accentBorder: 'border-red-500/30',
    members: [{ name: 'Nahli Saud Ramdani', nim: '123140049', role: 'Pemimpin Redaksi', isHead: true, interestCode: 'LP-F 2023203' }],
    subdivisions: [
      {
        title: 'Divisi Reporter',
        head: { name: 'Dwi Fathina', nim: '124380077', role: 'Redaktur Berita', interestCode: 'LP-J 2024103' },
        staff: [
          { name: 'Selamya Al Fathi', nim: '124250004', role: 'Staff Reporter', interestCode: 'LP-J 2024104' },
          { name: 'Ahmad Fariz Alfarisi', nim: '124220185', role: 'Staff Reporter', interestCode: 'LP-J 2024115' },
          { name: 'Aulia Putri Saiganta', nim: '124490035', role: 'Staff Reporter', interestCode: 'LP-J 2024110' },
        ],
      },
      {
        title: 'Divisi Penulis',
        head: { name: 'Husni Rosidah', nim: '124430073', role: 'Redaktur Opini', interestCode: 'LP-J 2024105' },
        staff: [
          { name: 'Angelica Margareth', nim: '123500008', role: 'Staff Penulis', interestCode: 'LP-J 2023103' },
          { name: 'Refsa Fadilah Kirana', nim: '124430127', role: 'Staff Penulis', interestCode: 'LP-J 2024109' },
          { name: 'Aliefiandra Akbar Syahputra', nim: '124140076', role: 'Staff Penulis', interestCode: 'LP-J 2024101' },
          { name: 'Sandrak Antoni Sitorus', nim: '124480090', role: 'Staff Penulis', interestCode: 'LP-J 2024108' },
        ],
      },
    ],
  },
  {
    id: 'pr',
    name: 'BIDANG PUBLIC RELATION',
    title: 'Public Relations Division',
    icon: 'fa-handshake',
    color: 'text-indigo-400',
    bgColor: 'bg-indigo-500/10',
    accentBorder: 'border-indigo-500/30',
    members: [{ name: 'Refa Destiny Pranata', nim: '123450016', role: 'Public Relation Manager', isHead: true, interestCode: 'LP-V 2023304' }],
    subdivisions: [
      {
        title: 'Tim PR',
        head: { name: 'Refa Destiny Pranata', nim: '123450016', role: 'Manager', interestCode: 'LP-V 2023304' },
        staff: [
          { name: 'Nahdia Shofi Rahayu', nim: '123430100', role: 'Staff PR', interestCode: 'LP-J 2023108' },
          { name: 'Dewo Prayogo', nim: '124390004', role: 'Staff PR', interestCode: 'LP-V 2024304' },
          { name: 'Miftah Andini', nim: '124500020', role: 'Staff PR', interestCode: 'LP-J 2024102' },
          { name: 'Mochammad Raka Aryandwika', nim: '124390009', role: 'Staff PR', interestCode: 'LP-F 2024206' },
        ],
      },
    ],
  },
  {
    id: 'media',
    name: 'BIDANG MEDIA KREATIF',
    title: 'Creative Media Division',
    icon: 'fa-film',
    color: 'text-teal-400',
    bgColor: 'bg-teal-500/10',
    accentBorder: 'border-teal-500/30',
    members: [{ name: 'Rizka Nabila NS', nim: '123340067', role: 'Produser Media Kreatif', isHead: true, interestCode: 'LP-V 2023303' }],
    subdivisions: [
      {
        title: 'Divisi Desain',
        head: { name: 'Garis Rayya Rabbani', nim: '123140018', role: 'Kepala Divisi', interestCode: 'LP-F 2023207' },
        staff: [
          { name: 'Kyla Yasmine Anadila', nim: '124380013', role: 'Designer', interestCode: 'LP-D 2024403' },
          { name: 'Amelia febrian', nim: '124380067', role: 'Designer', interestCode: 'LP-D 2024404' },
          { name: 'Nabila Maulida', nim: '124380082', role: 'Designer', interestCode: 'LP-D 2024402' },
        ],
      },
      {
        title: 'Divisi Fotografi',
        head: { name: 'Aqeel Mawla Rachman', nim: '124390059', role: 'Kepala Divisi', interestCode: 'LP-F 2024201' },
        staff: [
          { name: 'Raihan Abdullah', nim: '124310043', role: 'Fotografer', interestCode: 'LP-F 2024207' },
          { name: 'Ainindya putri nayla', nim: '124240006', role: 'Fotografer', interestCode: 'LP-F 2024202' },
          { name: 'Muhamamd Rifa Andiyansyah', nim: '124280106', role: 'Fotografer', interestCode: 'LP-J 2024114' },
        ],
      },
      {
        title: 'Divisi Videografi',
        head: { name: 'Reza Ramadhan', nim: '123290069', role: 'Kepala Divisi', interestCode: 'LP-V 2023301' },
        staff: [
          { name: 'Ufairah Sayyidah Marwa', nim: '124240016', role: 'Videographer', interestCode: 'LP-V 2024303' },
          { name: 'Nia Ramadhani', nim: '124120054', role: 'Videographer', interestCode: 'LP-V 2024305' },
        ],
      },
      {
        title: 'Divisi Publikasi Media Sosial',
        head: { name: 'Feby Angelina', nim: '123450039', role: 'Kepala Divisi', interestCode: 'LP-D 2023402' },
        staff: [
          { name: 'Haura Haya Dzakiyyah', nim: '124460017', role: 'Social Media', interestCode: 'LP-J 2024112' },
          { name: 'Nur Intan Permata Sari', nim: '124260159', role: 'Social Media', interestCode: 'LP-J 2024106' },
        ],
      },
    ],
  },
  {
    id: 'dev',
    name: 'BIDANG PENGEMBANGAN',
    title: 'Development Division',
    icon: 'fa-code',
    color: 'text-purple-400',
    bgColor: 'bg-purple-500/10',
    accentBorder: 'border-purple-500/30',
    members: [{ name: 'Febrian Chandra Kusuma', nim: '124340029', role: 'Project Manager', isHead: true, interestCode: 'LP-J 2024107' }],
    subdivisions: [
      {
        title: 'Tim Pengembangan',
        head: { name: 'Febrian Chandra Kusuma', nim: '124340029', role: 'Manager', interestCode: 'LP-J 2024107' },
        staff: [
          { name: 'Humaidi Zendi', nim: '124300026', role: 'Developer', interestCode: 'LP-F 2024203' },
          { name: 'Ahmad Rijal Faqihudin', nim: '124460042', role: 'Developer', interestCode: 'LP-V 2024302' },
          { name: 'Muhammad Chalid Arkan Aimar', nim: '124430138', role: 'Developer', interestCode: 'LP-J 2024111' },
          { name: 'Keysha Naimira Putri', nim: '124280013', role: 'Developer', interestCode: 'LP-D 2024401' },
        ],
      },
    ],
  },
  {
    id: 'usaha',
    name: 'BIDANG USAHA',
    title: 'Business Division',
    icon: 'fa-briefcase',
    color: 'text-amber-400',
    bgColor: 'bg-amber-500/10',
    accentBorder: 'border-amber-500/30',
    members: [{ name: 'Fairuz Ary Syifa', nim: '123450044', role: 'Manager Usaha', isHead: true, interestCode: 'LP-J 2023113' }],
    subdivisions: [
      {
        title: 'Tim Usaha',
        head: { name: 'Fairuz Ary Syifa', nim: '123450044', role: 'Manager', interestCode: 'LP-J 2023113' },
        staff: [
          { name: 'Miftah Ulfa Rahmi', nim: '124490067', role: 'Staff Usaha', interestCode: 'LP-F 2024208' },
          { name: 'Syahnandria Ghassani Galazardi', nim: '124260107', role: 'Staff Usaha', interestCode: 'LP-J 2024113' },
        ],
      },
    ],
  },
];

interface MemberCardProps {
  member: Member;
  departmentColor: string;
  departmentBg: string;
  isSubdivision?: boolean;
  onClick?: () => void;
}

function MemberCard({ member, departmentColor, departmentBg, isSubdivision, onClick }: MemberCardProps) {
  return (
    <div 
      onClick={onClick}
      className={`glass-card p-4 rounded-2xl border border-zinc-800 hover:border-zinc-700 transition-all duration-300 hover:scale-[1.02] cursor-pointer ${isSubdivision ? 'bg-zinc-900/30' : ''}`}
    >
      <div className="flex items-start gap-3">
        <div className={`w-12 h-12 rounded-xl flex items-center justify-center font-extrabold text-lg flex-shrink-0 ${departmentBg} ${departmentColor} shadow-lg shadow-zinc-950/50`}>
          {member.name.charAt(0)}{member.name.split(' ')[1]?.charAt(0) || ''}
        </div>
        <div className="flex-1 min-w-0">
          <h4 className="font-bold text-white text-sm truncate">{member.name}</h4>
          <p className={`text-xs font-semibold ${departmentColor} uppercase tracking-wide`}>{member.role}</p>
          <p className="text-xs text-itera-textMuted mt-1">NIM: {member.nim}</p>
        </div>
        {member.isHead ? (
          <div className={`px-2 py-1 rounded-lg text-[10px] font-extrabold uppercase tracking-wider ${departmentBg} ${departmentColor} flex-shrink-0`}>
            Head
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default function OrganizationalStructure({ onMemberClick, hideHeader = true }: { onMemberClick?: (member: Member, dept: string, role: string) => void; hideHeader?: boolean }) {
  const [activeDept, setActiveDept] = useState('bph');

  const currentDept = organizationalData.find((d) => d.id === activeDept) || organizationalData[0];

  return (
    <section className="max-w-7xl mx-auto px-6 py-6 space-y-12">
      {/* Header */}
      {!hideHeader && (
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 bg-itera-gold/10 border border-itera-gold/20 text-itera-gold text-xs font-bold uppercase rounded-full">
            <i className="fa-solid fa-sitemap" />
            <span>Kabinet Kepengurusan 2026/2027</span>
          </div>
          <h2 className="font-extrabold text-4xl lg:text-5xl text-white leading-tight">Struktur Redaksi & Kru</h2>
          <p className="text-sm text-itera-textMuted leading-relaxed">
            Talenta kreatif di balik kemudi peliputan berita, desain buletin digital, pengembangan teknologi, dan seluruh operasional UKM Lembaga Pers ITERA.
          </p>
        </div>
      )}

      {/* Department Tabs */}
      <div className="glass-card p-3 rounded-2xl border border-zinc-800/80 overflow-x-auto">
        <div className="flex gap-2 min-w-max">
          {organizationalData.map((dept) => (
            <button
              key={dept.id}
              onClick={() => setActiveDept(dept.id)}
              className={`px-4 py-3 rounded-xl text-xs font-extrabold uppercase tracking-wider transition-all duration-300 flex items-center gap-2 whitespace-nowrap ${activeDept === dept.id
                  ? `${dept.bgColor} ${dept.color} border border-transparent shadow-lg`
                  : 'bg-zinc-900/40 text-itera-textMuted border border-zinc-800/50 hover:border-zinc-700/50'
                }`}
            >
              <i className={`fa-solid ${dept.icon}`} />
              <span>{dept.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Department Content */}
      <div className={`${currentDept.accentBorder} border-l-4 glass-card p-8 rounded-2xl space-y-8 transition-all duration-500`}>
        {/* Department Title */}
        <div className="space-y-2">
          <div className="flex items-center gap-3">
            <div className={`w-12 h-12 rounded-2xl ${currentDept.bgColor} ${currentDept.color} flex items-center justify-center text-2xl shadow-lg shadow-zinc-950/50`}>
              <i className={`fa-solid ${currentDept.icon}`} />
            </div>
            <div>
              <h3 className="font-extrabold text-2xl text-white">{currentDept.name}</h3>
              <p className={`text-xs font-semibold ${currentDept.color} uppercase tracking-wider`}>{currentDept.title}</p>
            </div>
          </div>
        </div>

        {/* Main Department Members */}
        {currentDept.members.length > 0 ? (
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <span className={`h-5 w-1 rounded-full ${currentDept.color} bg-gradient-to-b from-transparent to-current`} />
              <p className="text-xs font-extrabold uppercase tracking-wider text-itera-textMuted">Kepemimpinan Departemen</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {currentDept.members.map((member, idx) => (
                <MemberCard 
                  key={idx} 
                  member={member} 
                  departmentColor={currentDept.color} 
                  departmentBg={currentDept.bgColor} 
                  onClick={() => onMemberClick?.(member, currentDept.name, member.role)}
                />
              ))}
            </div>
          </div>
        ) : null}

        {/* Subdivisions */}
        {currentDept.subdivisions && currentDept.subdivisions.length > 0 ? (
          <div className="space-y-8 pt-6 border-t border-zinc-800/60">
            {currentDept.subdivisions.map((sub, subIdx) => (
              <div key={subIdx} className="space-y-4">
                <div className="flex items-center gap-3 px-4 py-3 bg-zinc-900/40 rounded-xl border border-zinc-800/40">
                  <div className={`w-8 h-8 rounded-lg ${currentDept.bgColor} ${currentDept.color} flex items-center justify-center text-sm`}>
                    <i className="fa-solid fa-folder" />
                  </div>
                  <div>
                    <p className="text-sm font-extrabold text-white">{sub.title}</p>
                    <p className={`text-xs ${currentDept.color} font-bold uppercase tracking-wider`}>{sub.head.role}</p>
                  </div>
                </div>

                {/* Head of Subdivision */}
                <div className="pl-4 space-y-3">
                  <p className="text-[10px] font-extrabold uppercase tracking-widest text-itera-textMuted opacity-70">Kepala</p>
                  <MemberCard
                    member={sub.head}
                    departmentColor={currentDept.color}
                    departmentBg={currentDept.bgColor}
                    isSubdivision
                    onClick={() => onMemberClick?.(sub.head, `${currentDept.name} - ${sub.title}`, sub.head.role)}
                  />

                  {/* Staff Members */}
                  {sub.staff.length > 0 ? (
                    <div className="space-y-3 pt-3 border-t border-zinc-800/40">
                      <p className="text-[10px] font-extrabold uppercase tracking-widest text-itera-textMuted opacity-70">Anggota Tim</p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {sub.staff.map((staff, staffIdx) => (
                          <MemberCard
                            key={staffIdx}
                            member={staff}
                            departmentColor={currentDept.color}
                            departmentBg={currentDept.bgColor}
                            isSubdivision
                            onClick={() => onMemberClick?.(staff, `${currentDept.name} - ${sub.title}`, staff.role)}
                          />
                        ))}
                      </div>
                    </div>
                  ) : null}
                </div>
              </div>
            ))}
          </div>
        ) : null}
      </div>

      {/* Department Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { icon: 'fa-users', label: `Total Anggota ${currentDept.name}`, value: currentDept.members.length + (currentDept.subdivisions?.reduce((acc, sub) => acc + sub.staff.length + 1, 0) || 0) },
          { icon: 'fa-layer-group', label: 'Subdivisi', value: currentDept.subdivisions?.length || 0 },
          { icon: 'fa-briefcase', label: 'Total Departemen', value: organizationalData.length },
          { icon: 'fa-people-group', label: 'Total Kru LPI', value: organizationalData.reduce((acc, dept) => acc + dept.members.length + (dept.subdivisions?.reduce((s, sub) => s + sub.staff.length + 1, 0) || 0), 0) },
        ].map((stat, idx) => (
          <div key={idx} className="glass-card p-4 rounded-2xl border border-zinc-800 text-center space-y-2 hover:border-zinc-700 transition-all">
            <div className="text-2xl text-itera-gold"><i className={`fa-solid ${stat.icon}`} /></div>
            <p className="text-2xl font-extrabold text-white">{stat.value}</p>
            <p className="text-[10px] text-itera-textMuted uppercase tracking-wider font-bold">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
