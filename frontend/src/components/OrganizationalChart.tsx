'use client';

import React, { useMemo } from 'react';

interface Member {
  name: string;
  nim: string;
}

interface StaffMember extends Member {
  role?: string;
}

interface SubDivision {
  title: string;
  head: StaffMember;
  staff: StaffMember[];
}

interface Department {
  id: string;
  name: string;
  manager: Member;
  accentColor: string;
  textColor: string;
  borderColor: string;
  bgGlow: string;
  subdivisions?: SubDivision[];
  staff?: StaffMember[];
}

interface BPHMember extends Member {
  role: string;
}

const bphMembers: BPHMember[] = [
  { name: 'Arvel Alyagin', nim: '12340012', role: 'Pemimpin Umum' },
  { name: 'Refi Ikhsanti', nim: '123140126', role: 'Sekretaris Umum' },
  { name: 'Tarisya Hidayatul Rahmi', nim: '123450052', role: 'Bendahara Umum' },
  { name: 'Nesya Salsabila', nim: '124430111', role: 'Sekretaris 1' },
  { name: 'Fitri Ainurrohmah', nim: '124290009', role: 'Bendahara 1' },
];

const departmentsData: Department[] = [
  {
    id: 'redaksi',
    name: 'BIDANG REDAKSI',
    manager: { name: 'Nahli Saud Ramdani', nim: '123140049' },
    accentColor: 'text-red-500',
    textColor: 'text-red-400',
    borderColor: 'border-red-500/30',
    bgGlow: 'bg-red-500/5',
    subdivisions: [
      {
        title: 'Divisi Reporter',
        head: { name: 'Dwi Fathina', nim: '124380077', role: 'Redaktur Berita' },
        staff: [
          { name: 'Selamya Al Fathi', nim: '124250004', role: 'Staf Anggota' },
          { name: 'Ahmad Fariz Alfarisi', nim: '124220185', role: 'Staf Anggota' },
          { name: 'Aulia Putri Saiganta', nim: '124490035', role: 'Staf Anggota' },
        ],
      },
      {
        title: 'Divisi Penulis',
        head: { name: 'Husni Rosidah', nim: '124430073', role: 'Redaktur Opini' },
        staff: [
          { name: 'Angelica Margareth', nim: '123500008', role: 'Staf Anggota' },
          { name: 'Refsa Fadilah Kirana', nim: '124430127', role: 'Staf Anggota' },
          { name: 'Aliefiandra Akbar Syahputra', nim: '124140076', role: 'Staf Anggota' },
          { name: 'Sandrak Antoni Sitorus', nim: '124480090', role: 'Staf Anggota' },
        ],
      },
    ],
  },
  {
    id: 'pr',
    name: 'BIDANG PUBLIC RELATION',
    manager: { name: 'Refa Destiny Pranata', nim: '123450016' },
    accentColor: 'text-teal-500',
    textColor: 'text-teal-400',
    borderColor: 'border-teal-500/30',
    bgGlow: 'bg-teal-500/5',
    subdivisions: [
      {
        title: 'Public Relation',
        head: { name: 'Refa Destiny Pranata', nim: '123450016', role: 'Public Relation Manager' },
        staff: [
          { name: 'Nahdia Shofi Rahayu', nim: '123430100', role: 'Staf Anggota' },
          { name: 'Dewo Prayogo', nim: '124390004', role: 'Staf Anggota' },
          { name: 'Miftah Andini', nim: '124500020', role: 'Staf Anggota' },
          { name: 'Mochammad Raka Aryandwika', nim: '124390009', role: 'Staf Anggota' },
        ],
      },
    ],
  },
  {
    id: 'mediakreatif',
    name: 'BIDANG MEDIA KREATIF',
    manager: { name: 'Rizka Nabila NS', nim: '123340067' },
    accentColor: 'text-cyan-500',
    textColor: 'text-cyan-400',
    borderColor: 'border-cyan-500/30',
    bgGlow: 'bg-cyan-500/5',
    subdivisions: [
      {
        title: 'Divisi Desain',
        head: { name: 'Garis Rayya Rabbani', nim: '123140018', role: 'Kepala Divisi (Kadiv)' },
        staff: [
          { name: 'Kyla Yasmine Anadila', nim: '124380013', role: 'Staf Anggota' },
          { name: 'Amelia Febrian', nim: '124380067', role: 'Staf Anggota' },
          { name: 'Nabila Maulida', nim: '124380082', role: 'Staf Anggota' },
        ],
      },
      {
        title: 'Divisi Fotografi',
        head: { name: 'Aqeel Mawla Rachman', nim: '124390059', role: 'Kepala Divisi (Kadiv)' },
        staff: [
          { name: 'Raihan Abdullah', nim: '124310043', role: 'Staf Anggota' },
          { name: 'Ainindya Putri Nayla', nim: '124240006', role: 'Staf Anggota' },
          { name: 'Muhammad Rifa Andiyansyah', nim: '124280106', role: 'Staf Anggota' },
        ],
      },
      {
        title: 'Divisi Videografi',
        head: { name: 'Reza Ramadhan', nim: '123290069', role: 'Kepala Divisi (Kadiv)' },
        staff: [
          { name: 'Ufairah Sayyidah Marwa', nim: '124240016', role: 'Staf Anggota' },
          { name: 'Nia Ramadhani', nim: '124120054', role: 'Staf Anggota' },
        ],
      },
      {
        title: 'Divisi Publikasi Media Sosial',
        head: { name: 'Feby Angelina', nim: '123450039', role: 'Kepala Divisi (Kadiv)' },
        staff: [
          { name: 'Haura Haya Dzakiyyah', nim: '124460017', role: 'Staf Anggota' },
          { name: 'Nur Intan Permata Sari', nim: '124260159', role: 'Staf Anggota' },
        ],
      },
    ],
  },
  {
    id: 'pengembangan',
    name: 'BIDANG PENGEMBANGAN',
    manager: { name: 'Febrian Chandra Kusuma', nim: '124340029' },
    accentColor: 'text-purple-500',
    textColor: 'text-purple-400',
    borderColor: 'border-purple-500/30',
    bgGlow: 'bg-purple-500/5',
    subdivisions: [
      {
        title: 'Pengembangan',
        head: { name: 'Febrian Chandra Kusuma', nim: '124340029', role: 'Project Manager' },
        staff: [
          { name: 'Humaidi Zendi', nim: '124300026', role: 'Staf Anggota' },
          { name: 'Ahmad Rijal Faqihudin', nim: '124460042', role: 'Staf Anggota' },
          { name: 'Muhammad Chalid Arkan Aimar', nim: '124430138', role: 'Staf Anggota' },
          { name: 'Keysha Naimira Putri', nim: '124280013', role: 'Staf Anggota' },
        ],
      },
    ],
  },
  {
    id: 'usaha',
    name: 'BIDANG USAHA',
    manager: { name: 'Fairuz Ary Syifa', nim: '123450044' },
    accentColor: 'text-amber-500',
    textColor: 'text-amber-400',
    borderColor: 'border-amber-500/30',
    bgGlow: 'bg-amber-500/5',
    subdivisions: [
      {
        title: 'Usaha',
        head: { name: 'Fairuz Ary Syifa', nim: '123450044', role: 'Manager Usaha' },
        staff: [
          { name: 'Miftah Ulfa Rahmi', nim: '124490067', role: 'Staf Anggota' },
          { name: 'Syahnandria Ghassani Galazardi', nim: '124260107', role: 'Staf Anggota' },
        ],
      },
    ],
  },
];

const MemberCard: React.FC<{ member: Member & { role?: string }; isHead?: boolean; accentColor?: string; borderColor?: string }> = ({
  member,
  isHead = false,
  accentColor = 'text-zinc-300',
  borderColor = 'border-zinc-700/50',
}) => (
  <div className={`px-3 py-2.5 rounded-lg border ${borderColor} bg-zinc-950/60 backdrop-blur-sm hover:bg-zinc-900/80 transition-all duration-200 group`}>
    <div className={`text-xs font-bold tracking-wide ${isHead ? accentColor : 'text-zinc-200'}`}>{member.name}</div>
    {member.role && <div className="text-[10px] text-zinc-400 font-medium mt-0.5">{member.role}</div>}
    <div className="text-[9px] text-zinc-500 mt-1 font-mono">NIM: {member.nim}</div>
  </div>
);

const SubDivisionSection: React.FC<{ subdivision: SubDivision; accentColor: string; borderColor: string }> = ({
  subdivision,
  accentColor,
  borderColor,
}) => (
  <div className="space-y-2.5 border-l-2 border-zinc-800/60 pl-4 ml-3">
    <div className="text-xs font-bold text-zinc-300 uppercase tracking-wider">{subdivision.title}</div>
    <div>
      <div className="text-[10px] font-semibold text-zinc-400 mb-1.5">Kepala:</div>
      <MemberCard member={subdivision.head} isHead={true} accentColor={accentColor} borderColor={borderColor} />
    </div>
    {subdivision.staff.length > 0 && (
      <div>
        <div className="text-[10px] font-semibold text-zinc-400 mb-1.5">Staff:</div>
        <div className="space-y-2">
          {subdivision.staff.map((staff, idx) => (
            <MemberCard key={idx} member={staff} borderColor={borderColor} />
          ))}
        </div>
      </div>
    )}
  </div>
);

const DepartmentCard: React.FC<{ department: Department }> = ({ department }) => (
  <div className={`glass-card ${department.bgGlow} border-2 ${department.borderColor} rounded-2xl p-6 space-y-5 hover:border-opacity-60 transition-all duration-300`}>
    {/* Department Header */}
    <div className="space-y-3 pb-4 border-b border-zinc-800/60">
      <h3 className={`text-sm font-black uppercase tracking-[0.15em] ${department.accentColor}`}>{department.name}</h3>
      <div>
        <div className="text-[10px] font-semibold text-zinc-400 mb-2">Pemimpin Bidang:</div>
        <MemberCard
          member={department.manager}
          isHead={true}
          accentColor={department.accentColor}
          borderColor={department.borderColor}
        />
      </div>
    </div>

    {/* Subdivisions or Direct Staff */}
    <div className="space-y-5">
      {department.subdivisions && department.subdivisions.length > 0 ? (
        department.subdivisions.map((sub, idx) => (
          <SubDivisionSection
            key={idx}
            subdivision={sub}
            accentColor={department.accentColor}
            borderColor={department.borderColor}
          />
        ))
      ) : department.staff && department.staff.length > 0 ? (
        <div className="space-y-2.5">
          <div className="text-xs font-bold text-zinc-300 uppercase tracking-wider">Tim Staff</div>
          <div className="space-y-2">
            {department.staff.map((staff, idx) => (
              <MemberCard key={idx} member={staff} borderColor={department.borderColor} />
            ))}
          </div>
        </div>
      ) : null}
    </div>
  </div>
);

const BPHCoreCard: React.FC = () => {
  const primaryMember = bphMembers[0];
  const otherMembers = bphMembers.slice(1);

  return (
    <div className="glass-card bg-gradient-to-br from-red-500/10 to-amber-500/5 border-2 border-red-500/40 rounded-2xl p-6 space-y-4 max-w-2xl mx-auto">
      <div className="space-y-2 text-center">
        <h2 className="text-sm font-black uppercase tracking-[0.15em] text-red-400">Badan Pengurus Harian Inti</h2>
        <p className="text-xs text-zinc-400">Core Leadership 2026/2027</p>
      </div>

      <div className="border-t border-red-500/20 pt-4 space-y-3">
        {/* Primary Leader */}
        <div className="space-y-1">
          <div className="text-[10px] font-bold text-red-400 uppercase tracking-wider">Pucuk Pimpinan</div>
          <div className="bg-red-950/40 border border-red-500/40 rounded-lg px-3 py-2.5 backdrop-blur-sm">
            <div className="text-sm font-bold text-red-300">{primaryMember.name}</div>
            <div className="text-[10px] text-red-400 font-semibold mt-0.5">{primaryMember.role}</div>
            <div className="text-[9px] text-red-500/70 mt-1 font-mono">NIM: {primaryMember.nim}</div>
          </div>
        </div>

        {/* Other Members */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-2 pt-2">
          {otherMembers.map((member, idx) => (
            <div key={idx} className="space-y-1">
              <div className="text-[9px] font-bold text-amber-400 uppercase tracking-wider line-clamp-2">{member.role}</div>
              <div className="bg-amber-950/30 border border-amber-500/30 rounded-lg px-2 py-2 backdrop-blur-sm">
                <div className="text-xs font-bold text-amber-300 line-clamp-2">{member.name}</div>
                <div className="text-[8px] text-amber-500/60 mt-0.5 font-mono">{member.nim}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const ConnectingLine: React.FC = () => (
  <div className="flex justify-center py-8">
    <div className="relative w-1 h-16 bg-gradient-to-b from-zinc-600 to-zinc-700 rounded-full shadow-lg">
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-zinc-500 rounded-full -mt-1.5" />
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-zinc-500 rounded-full -mb-1.5" />
    </div>
  </div>
);

export default function OrganizationalChart() {
  const stats = useMemo(() => {
    const totalMembers =
      bphMembers.length +
      departmentsData.reduce((sum, dept) => {
        const deptTotal = 1 + (dept.subdivisions?.reduce((acc, sub) => acc + 1 + sub.staff.length, 0) || dept.staff?.length || 0);
        return sum + deptTotal;
      }, 0);

    return { totalMembers };
  }, []);

  return (
    <div className="space-y-12 py-12">
      {/* Header */}
      <div className="text-center space-y-4 max-w-3xl mx-auto px-4">
        <div className="inline-flex items-center space-x-2 px-3 py-1 bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-bold uppercase rounded-full">
          <i className="fa-solid fa-sitemap" />
          <span>Kabinet Kepengurusan 2026/2027</span>
        </div>
        <h2 className="font-extrabold text-4xl lg:text-5xl text-white">Bagan Struktur Organisasi</h2>
        <p className="text-sm text-zinc-400 leading-relaxed">
          Hierarki lengkap UKM UKM Lembaga Pers ITERA yang tersusun atas BPH INTI dan 5 Bidang Utama. Total {stats.totalMembers} anggota
          dengan berbagai spesialisasi di bidang jurnalisme, desain, dan pengembangan media.
        </p>
      </div>

      {/* TIER 1: BPH INTI */}
      <div className="space-y-2">
        <div className="text-center text-[10px] font-bold text-zinc-500 uppercase tracking-widest">TIER 1 - PUCUK ORGANISASI</div>
        <div className="px-4 sm:px-0">
          <BPHCoreCard />
        </div>
      </div>

      {/* Connecting Line */}
      <ConnectingLine />

      {/* TIER 2: 5 BIDANG */}
      <div className="space-y-6">
        <div className="text-center text-[10px] font-bold text-zinc-500 uppercase tracking-widest">TIER 2 - LIMA BIDANG UTAMA</div>
        <div className="overflow-x-auto scrollbar-thin scrollbar-thumb-zinc-700 scrollbar-track-zinc-900">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 px-4 sm:px-0 min-w-full lg:min-w-0">
            {departmentsData.map((dept) => (
              <DepartmentCard key={dept.id} department={dept} />
            ))}
          </div>
        </div>
      </div>

      {/* Statistics Footer */}
      <div className="bg-gradient-to-r from-zinc-900/40 to-zinc-800/40 border border-zinc-800/60 rounded-2xl p-6 mt-12">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
          {[
            { label: 'Total Anggota', value: stats.totalMembers, icon: 'fa-users' },
            { label: 'Bidang Utama', value: 5, icon: 'fa-layer-group' },
            { label: 'Core BPH', value: 5, icon: 'fa-crown' },
            { label: 'Sub-Divisions', value: 8, icon: 'fa-code-branch' },
          ].map((stat, idx) => (
            <div key={idx} className="space-y-2">
              <i className={`fa-solid ${stat.icon} text-xl text-zinc-500`} />
              <div className="text-2xl font-bold text-white">{stat.value}</div>
              <div className="text-xs text-zinc-400 uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
