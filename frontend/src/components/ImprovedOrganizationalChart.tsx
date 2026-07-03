'use client';

import React from 'react';

interface Member {
  name: string;
  nim: string;
  role?: string;
}

interface Position {
  name: string;
  member: Member;
  color: string;
  level: number;
}

interface Department {
  name: string;
  head: Member;
  color: string;
  members: Member[];
  subdivisions?: {
    name: string;
    head: Member;
    members: Member[];
  }[];
}

const bphPositions: Position[] = [
  { name: 'Pemimpin Umum', member: { name: 'Arvel Alyagin', nim: '12340012' }, color: 'from-red-500 to-red-600', level: 0 },
  { name: 'Sekretaris Umum', member: { name: 'Refi Ikhsanti', nim: '123140126' }, color: 'from-orange-500 to-orange-600', level: 1 },
  { name: 'Bendahara Umum', member: { name: 'Tarisya Hidayatul Rahmi', nim: '123450052' }, color: 'from-yellow-500 to-yellow-600', level: 1 },
  { name: 'Sekretaris 1', member: { name: 'Nesya Salsabila', nim: '124430111' }, color: 'from-green-500 to-green-600', level: 1 },
  { name: 'Bendahara 1', member: { name: 'Fitri Ainurrohmah', nim: '124290009' }, color: 'from-blue-500 to-blue-600', level: 1 },
];

const departments: Department[] = [
  {
    name: 'REDAKSI',
    head: { name: 'Nahli Saud Ramdani', nim: '123140049' },
    color: 'from-red-500 to-red-600',
    members: [],
    subdivisions: [
      {
        name: 'Divisi Reporter',
        head: { name: 'Dwi Fathina', nim: '124380077', role: 'Redaktur Berita' },
        members: [
          { name: 'Selamya Al Fathi', nim: '124250004' },
          { name: 'Ahmad Fariz Alfarisi', nim: '124220185' },
          { name: 'Aulia Putri Saiganta', nim: '124490035' },
        ],
      },
      {
        name: 'Divisi Penulis',
        head: { name: 'Husni Rosidah', nim: '124430073', role: 'Redaktur Opini' },
        members: [
          { name: 'Angelica Margareth', nim: '123500008' },
          { name: 'Refsa Fadilah Kirana', nim: '124430127' },
          { name: 'Aliefiandra Akbar Syahputra', nim: '124140076' },
          { name: 'Sandrak Antoni Sitorus', nim: '124480090' },
        ],
      },
    ],
  },
  {
    name: 'PUBLIC RELATION',
    head: { name: 'Refa Destiny Pranata', nim: '123450016' },
    color: 'from-teal-500 to-teal-600',
    members: [],
    subdivisions: [
      {
        name: 'Public Relation',
        head: { name: 'Refa Destiny Pranata', nim: '123450016', role: 'Public Relation Manager' },
        members: [
          { name: 'Nahdia Shofi Rahayu', nim: '123430100' },
          { name: 'Dewo Prayogo', nim: '124390004' },
          { name: 'Miftah Andini', nim: '124500020' },
          { name: 'Mochammad Raka Aryandwika', nim: '124390009' },
        ],
      },
    ],
  },
  {
    name: 'MEDIA KREATIF',
    head: { name: 'Rizka Nabila NS', nim: '123340067' },
    color: 'from-cyan-500 to-cyan-600',
    members: [],
    subdivisions: [
      {
        name: 'Divisi Desain',
        head: { name: 'Garis Rayya Rabbani', nim: '123140018', role: 'Kepala Divisi (Kadiv)' },
        members: [
          { name: 'Kyla Yasmine Anadila', nim: '124380013' },
          { name: 'Amelia Febrian', nim: '124380067' },
          { name: 'Nabila Maulida', nim: '124380082' },
        ],
      },
      {
        name: 'Divisi Fotografi',
        head: { name: 'Aqeel Mawla Rachman', nim: '124390059', role: 'Kepala Divisi (Kadiv)' },
        members: [
          { name: 'Raihan Abdullah', nim: '124310043' },
          { name: 'Ainindya Putri Nayla', nim: '124240006' },
          { name: 'Muhammad Rifa Andiyansyah', nim: '124280106' },
        ],
      },
      {
        name: 'Divisi Videografi',
        head: { name: 'Reza Ramadhan', nim: '123290069', role: 'Kepala Divisi (Kadiv)' },
        members: [
          { name: 'Ufairah Sayyidah Marwa', nim: '124240016' },
          { name: 'Nia Ramadhani', nim: '124120054' },
        ],
      },
      {
        name: 'Divisi Publikasi Media Sosial',
        head: { name: 'Feby Angelina', nim: '123450039', role: 'Kepala Divisi (Kadiv)' },
        members: [
          { name: 'Haura Haya Dzakiyyah', nim: '124460017' },
          { name: 'Nur Intan Permata Sari', nim: '124260159' },
        ],
      },
    ],
  },
  {
    name: 'PENGEMBANGAN',
    head: { name: 'Febrian Chandra Kusuma', nim: '124340029' },
    color: 'from-purple-500 to-purple-600',
    members: [],
    subdivisions: [
      {
        name: 'Pengembangan',
        head: { name: 'Febrian Chandra Kusuma', nim: '124340029', role: 'Project Manager' },
        members: [
          { name: 'Humaidi Zendi', nim: '124300026' },
          { name: 'Ahmad Rijal Faqihudin', nim: '124460042' },
          { name: 'Muhammad Chalid Arkan Aimar', nim: '124430138' },
          { name: 'Keysha Naimira Putri', nim: '124280013' },
        ],
      },
    ],
  },
  {
    name: 'USAHA',
    head: { name: 'Fairuz Ary Syifa', nim: '123450044' },
    color: 'from-amber-500 to-amber-600',
    members: [],
    subdivisions: [
      {
        name: 'Usaha',
        head: { name: 'Fairuz Ary Syifa', nim: '123450044', role: 'Manager Usaha' },
        members: [
          { name: 'Miftah Ulfa Rahmi', nim: '124490067' },
          { name: 'Syahnandria Ghassani Galazardi', nim: '124260107' },
        ],
      },
    ],
  },
];

const MemberCard = ({ member, role, color }: { member: Member; role?: string; color?: string }) => (
  <div className={`relative group rounded-lg p-3 ${color || 'bg-gradient-to-br from-zinc-800 to-zinc-900'} border border-white/10 hover:border-white/30 transition-all duration-300 hover:shadow-lg`}>
    <div className="flex flex-col gap-1">
      <p className="font-bold text-sm text-white truncate">{member.name}</p>
      {role && <p className="text-xs text-white/60 font-semibold">{role}</p>}
      <p className="text-xs text-white/40">{member.nim}</p>
    </div>
    <div className="absolute inset-0 rounded-lg bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
  </div>
);

const BPHSection = () => (
  <div className="mb-12">
    <h2 className="text-2xl font-bold text-white mb-6 text-center">BPH (BADAN PENGURUS HARIAN)</h2>
    <div className="flex flex-col items-center gap-6">
      {/* Pemimpin Umum */}
      <div className="flex justify-center w-full">
        <div className="w-64">
          <MemberCard 
            member={bphPositions[0].member} 
            role={bphPositions[0].name} 
            color="bg-gradient-to-br from-red-600 to-red-700"
          />
        </div>
      </div>

      {/* Connector */}
      <div className="h-8 w-1 bg-gradient-to-b from-red-500/50 to-white/20"></div>

      {/* Level 1 positions */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-4xl">
        {bphPositions.slice(1).map((pos, idx) => (
          <div key={idx} className="flex flex-col items-center">
            <div className="w-full h-6 border-t-2 border-white/20"></div>
            <MemberCard 
              member={pos.member} 
              role={pos.name}
              color={`bg-gradient-to-br ${pos.color}`}
            />
          </div>
        ))}
      </div>
    </div>
  </div>
);

const DepartmentSection = ({ dept }: { dept: Department }) => (
  <div className="mb-8">
    <h3 className={`text-xl font-bold text-white mb-4 pb-2 border-l-4 pl-4 bg-gradient-to-r ${dept.color} bg-clip-text text-transparent`}>
      BIDANG {dept.name}
    </h3>

    {/* Department Head */}
    <div className="mb-6 ml-4">
      <p className="text-xs text-white/50 font-semibold mb-2">Kepala Bidang</p>
      <div className="max-w-sm">
        <MemberCard 
          member={dept.head} 
          color={`bg-gradient-to-br ${dept.color}`}
        />
      </div>
    </div>

    {/* Subdivisions or Members */}
    {dept.subdivisions && dept.subdivisions.length > 0 ? (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ml-4">
        {dept.subdivisions.map((sub, idx) => (
          <div key={idx} className="bg-white/5 rounded-lg p-4 border border-white/10">
            <p className="text-sm font-semibold text-white/70 mb-3 uppercase">Divisi {sub.name}</p>
            <div className="space-y-3">
              <div>
                <p className="text-xs text-white/40 mb-1">Kepala Divisi</p>
                <MemberCard member={sub.head} />
              </div>
              {sub.members.length > 0 && (
                <div>
                  <p className="text-xs text-white/40 mb-2">Anggota</p>
                  <div className="grid grid-cols-2 gap-2">
                    {sub.members.map((member, midx) => (
                      <MemberCard key={midx} member={member} />
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    ) : (
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 ml-4">
        {dept.members.map((member, idx) => (
          <MemberCard key={idx} member={member} />
        ))}
      </div>
    )}
  </div>
);

export default function ImprovedOrganizationalChart() {
  return (
    <div className="w-full py-12 px-6 bg-gradient-to-b from-zinc-950 to-zinc-900 rounded-2xl border border-white/10">
      <div className="max-w-6xl mx-auto">
        <BPHSection />
        <div className="border-t border-white/10 my-12 pt-12">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">STRUKTUR DEPARTEMEN</h2>
          {departments.map((dept, idx) => (
            <DepartmentSection key={idx} dept={dept} />
          ))}
        </div>
      </div>
    </div>
  );
}
