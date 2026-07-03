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

const MemberCard = ({ member, role, color, onClick, staffCount }: { member: Member; role?: string; color?: string; onClick?: () => void; staffCount?: number }) => (
  <div 
    onClick={onClick}
    className={`relative group rounded-xl p-2.5 bg-zinc-950 border border-white/10 hover:border-white/30 transition-all duration-300 hover:shadow-lg cursor-pointer hover:scale-[1.02] text-center w-full`}
  >
    <div className="flex flex-col gap-1 items-center justify-center min-w-0">
      {role && <p className="text-[9px] md:text-[10px] text-white/50 font-bold uppercase tracking-wider truncate w-full">{role}</p>}
      <p className="font-extrabold text-xs md:text-sm text-white break-words leading-tight mt-0.5 whitespace-normal w-full">{member.name}</p>
      {staffCount && staffCount > 0 ? (
        <span className="mt-1.5 px-2 py-0.5 rounded-full bg-itera-gold/10 border border-itera-gold/20 text-[9px] text-itera-gold font-bold uppercase tracking-wider flex items-center gap-1 group-hover:bg-itera-gold/20 transition-all select-none">
          <i className="fa-solid fa-users text-[8px]" />
          {staffCount} Anggota
        </span>
      ) : null}
    </div>
    <div className="absolute inset-0 rounded-lg bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
  </div>
);

const BPHSection = ({ onMemberClick }: { onMemberClick?: (member: Member, dept: string, role: string, staffList?: Member[]) => void }) => {
  const pUmum = bphPositions[0]; // Pemimpin Umum
  const sekUmum = bphPositions[1]; // Sekretaris Umum
  const bendUmum = bphPositions[2]; // Bendahara Umum
  const sek1 = bphPositions[3]; // Sekretaris 1
  const bend1 = bphPositions[4]; // Bendahara 1

  return (
    <div className="flex flex-col items-center w-full">
      {/* Pemimpin Umum */}
      <div className="w-64 z-10">
        <MemberCard 
          member={pUmum.member} 
          role={pUmum.name} 
          color="bg-zinc-950"
          onClick={() => onMemberClick?.(pUmum.member, 'BPH', pUmum.name)}
        />
      </div>

      {/* Vertical line from Pemimpin Umum */}
      <div className="h-6 w-0.5 bg-zinc-700"></div>

      {/* Horizontal connector line for Sekretaris & Bendahara */}
      <div className="w-[60%] flex h-px relative">
        <div className="absolute left-[25%] right-[25%] top-0 h-px bg-zinc-700"></div>
        {/* Central vertical line continuing down */}
        <div className="absolute left-1/2 -translate-x-1/2 top-0 h-4 w-0.5 bg-zinc-700"></div>
      </div>
      <div className="flex justify-between w-[60%] h-4 relative">
        <div className="absolute left-[25%] top-0 h-full w-px bg-zinc-700"></div>
        <div className="absolute right-[25%] top-0 h-full w-px bg-zinc-700"></div>
        <div className="absolute left-1/2 -translate-x-1/2 top-0 h-full w-0.5 bg-zinc-700"></div>
      </div>

      {/* Sekretaris and Bendahara Columns */}
      <div className="flex justify-between w-[60%] gap-8 relative pb-6">
        {/* Continuous center vertical line running through BPH gap */}
        <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-0.5 bg-zinc-700"></div>

        {/* Left Column: Sekretaris */}
        <div className="flex flex-col items-center w-1/2 z-10">
          <div className="w-full max-w-[200px]">
            <MemberCard 
              member={sekUmum.member} 
              role={sekUmum.name}
              onClick={() => onMemberClick?.(sekUmum.member, 'BPH', sekUmum.name)}
            />
          </div>
          <div className="h-6 w-0.5 bg-zinc-700"></div>
          <div className="w-full max-w-[200px]">
            <MemberCard 
              member={sek1.member} 
              role={sek1.name}
              onClick={() => onMemberClick?.(sek1.member, 'BPH', sek1.name)}
            />
          </div>
        </div>

        {/* Right Column: Bendahara */}
        <div className="flex flex-col items-center w-1/2 z-10">
          <div className="w-full max-w-[200px]">
            <MemberCard 
              member={bendUmum.member} 
              role={bendUmum.name}
              onClick={() => onMemberClick?.(bendUmum.member, 'BPH', bendUmum.name)}
            />
          </div>
          <div className="h-6 w-0.5 bg-zinc-700"></div>
          <div className="w-full max-w-[200px]">
            <MemberCard 
              member={bend1.member} 
              role={bend1.name}
              onClick={() => onMemberClick?.(bend1.member, 'BPH', bend1.name)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const DepartmentSectionHorizontal = ({ onMemberClick }: { onMemberClick?: (member: Member, dept: string, role: string, staffList?: Member[]) => void }) => {
  const redaksi = departments[0];
  const publicRelation = departments[1];
  const mediaKreatif = departments[2];
  const pengembangan = departments[3];
  const usaha = departments[4];

  // Combine subdivision staff for department-level views
  const redaksiStaff = [
    ...(redaksi.subdivisions?.[0]?.members || []),
    ...(redaksi.subdivisions?.[1]?.members || [])
  ];

  const mediaStaff = [
    ...(mediaKreatif.subdivisions?.[0]?.members || []),
    ...(mediaKreatif.subdivisions?.[1]?.members || []),
    ...(mediaKreatif.subdivisions?.[2]?.members || []),
    ...(mediaKreatif.subdivisions?.[3]?.members || [])
  ];

  const prStaff = publicRelation.subdivisions?.[0]?.members || [];
  const devStaff = pengembangan.subdivisions?.[0]?.members || [];
  const usahaStaff = usaha.subdivisions?.[0]?.members || [];

  return (
    <div className="flex flex-col items-center w-full">
      {/* Top vertical connector meeting the BPH center line */}
      <div className="h-8 w-0.5 bg-zinc-700"></div>

      {/* Flex container for the 5 columns */}
      <div className="flex justify-between w-full gap-4 items-start pt-6 relative">
        
        {/* Column 1: Redaksi */}
        <div className="flex flex-col items-center w-[20%] relative">
          {/* Vertical tick connecting to main horizontal line */}
          <div className="absolute top-0 h-6 w-0.5 bg-zinc-700 -translate-y-6 left-1/2 -translate-x-1/2"></div>
          {/* Horizontal line segment: from center to right edge + half gap */}
          <div className="absolute top-0 right-[-8px] left-1/2 h-px bg-zinc-700 -translate-y-6"></div>
          
          <div className="w-full">
            <MemberCard
              member={redaksi.head}
              role="Redaksi"
              staffCount={redaksiStaff.length}
              onClick={() => onMemberClick?.(redaksi.head, 'Redaksi', 'Pemimpin Redaksi', redaksiStaff)}
            />
          </div>

          {/* Subdivisions: Reporter & Penulis */}
          <div className="h-6 w-0.5 bg-zinc-700"></div>
          
          {/* Subdivision boxes with precise center connectors */}
          <div className="flex justify-between w-full gap-2 relative pt-6">
            <div className="w-1/2 relative">
              {/* Vertical tick */}
              <div className="absolute top-0 h-6 w-px bg-zinc-700 -translate-y-6 left-1/2 -translate-x-1/2"></div>
              {/* Horizontal segment: from center to right edge + half gap (4px) */}
              <div className="absolute top-0 right-[-4px] left-1/2 h-px bg-zinc-700 -translate-y-6"></div>
              <MemberCard
                member={redaksi.subdivisions![0].head}
                role="Reporter"
                staffCount={redaksi.subdivisions![0].members.length}
                onClick={() => onMemberClick?.(redaksi.subdivisions![0].head, 'Redaksi - Reporter', 'Redaktur Berita', redaksi.subdivisions![0].members)}
              />
            </div>
            <div className="w-1/2 relative">
              {/* Vertical tick */}
              <div className="absolute top-0 h-6 w-px bg-zinc-700 -translate-y-6 left-1/2 -translate-x-1/2"></div>
              {/* Horizontal segment: from left edge - half gap (4px) to center */}
              <div className="absolute top-0 left-[-4px] right-1/2 h-px bg-zinc-700 -translate-y-6"></div>
              <MemberCard
                member={redaksi.subdivisions![1].head}
                role="Penulis"
                staffCount={redaksi.subdivisions![1].members.length}
                onClick={() => onMemberClick?.(redaksi.subdivisions![1].head, 'Redaksi - Penulis', 'Redaktur Opini', redaksi.subdivisions![1].members)}
              />
            </div>
          </div>
        </div>

        {/* Column 2: Media Kreatif */}
        <div className="flex flex-col items-center w-[36%] relative">
          {/* Vertical tick */}
          <div className="absolute top-0 h-6 w-0.5 bg-zinc-700 -translate-y-6 left-1/2 -translate-x-1/2"></div>
          {/* Horizontal line segment: spans all the way (with margins to meet neighbors) */}
          <div className="absolute top-0 left-[-8px] right-[-8px] h-px bg-zinc-700 -translate-y-6"></div>
          
          <div className="w-full max-w-[240px]">
            <MemberCard
              member={mediaKreatif.head}
              role="Media Kreatif"
              staffCount={mediaStaff.length}
              onClick={() => onMemberClick?.(mediaKreatif.head, 'Media Kreatif', 'Produser', mediaStaff)}
            />
          </div>

          {/* Subdivisions: Fotografi, Videografi, Desain, Publikasi Medsos */}
          <div className="h-6 w-0.5 bg-zinc-700"></div>
          
          {/* The 4 subdivisions grid with precise center connectors */}
          <div className="grid grid-cols-4 gap-2 w-full relative pt-6">
            <div className="relative">
              {/* Vertical tick */}
              <div className="absolute top-0 h-6 w-px bg-zinc-700 -translate-y-6 left-1/2 -translate-x-1/2"></div>
              {/* Horizontal segment: from center to right edge + half gap (4px) */}
              <div className="absolute top-0 right-[-4px] left-1/2 h-px bg-zinc-700 -translate-y-6"></div>
              <MemberCard
                member={mediaKreatif.subdivisions![1].head}
                role="Fotografi"
                staffCount={mediaKreatif.subdivisions![1].members.length}
                onClick={() => onMemberClick?.(mediaKreatif.subdivisions![1].head, 'Media Kreatif - Fotografi', 'Kepala Divisi', mediaKreatif.subdivisions![1].members)}
              />
            </div>
            <div className="relative">
              {/* Vertical tick */}
              <div className="absolute top-0 h-6 w-px bg-zinc-700 -translate-y-6 left-1/2 -translate-x-1/2"></div>
              {/* Horizontal segment: spans all the way */}
              <div className="absolute top-0 left-[-4px] right-[-4px] h-px bg-zinc-700 -translate-y-6"></div>
              <MemberCard
                member={mediaKreatif.subdivisions![2].head}
                role="Videografi"
                staffCount={mediaKreatif.subdivisions![2].members.length}
                onClick={() => onMemberClick?.(mediaKreatif.subdivisions![2].head, 'Media Kreatif - Videografi', 'Kepala Divisi', mediaKreatif.subdivisions![2].members)}
              />
            </div>
            <div className="relative">
              {/* Vertical tick */}
              <div className="absolute top-0 h-6 w-px bg-zinc-700 -translate-y-6 left-1/2 -translate-x-1/2"></div>
              {/* Horizontal segment: spans all the way */}
              <div className="absolute top-0 left-[-4px] right-[-4px] h-px bg-zinc-700 -translate-y-6"></div>
              <MemberCard
                member={mediaKreatif.subdivisions![0].head}
                role="Desain"
                staffCount={mediaKreatif.subdivisions![0].members.length}
                onClick={() => onMemberClick?.(mediaKreatif.subdivisions![0].head, 'Media Kreatif - Desain', 'Kepala Divisi', mediaKreatif.subdivisions![0].members)}
              />
            </div>
            <div className="relative">
              {/* Vertical tick */}
              <div className="absolute top-0 h-6 w-px bg-zinc-700 -translate-y-6 left-1/2 -translate-x-1/2"></div>
              {/* Horizontal segment: from left edge - half gap (4px) to center */}
              <div className="absolute top-0 left-[-4px] right-1/2 h-px bg-zinc-700 -translate-y-6"></div>
              <MemberCard
                member={mediaKreatif.subdivisions![3].head}
                role="Publikasi Medsos"
                staffCount={mediaKreatif.subdivisions![3].members.length}
                onClick={() => onMemberClick?.(mediaKreatif.subdivisions![3].head, 'Media Kreatif - Publikasi Medsos', 'Kepala Divisi', mediaKreatif.subdivisions![3].members)}
              />
            </div>
          </div>
        </div>

        {/* Column 3: Pengembangan */}
        <div className="flex flex-col items-center w-[14%] relative">
          <div className="absolute top-0 h-6 w-0.5 bg-zinc-700 -translate-y-6 left-1/2 -translate-x-1/2"></div>
          {/* Horizontal segment: spans all the way */}
          <div className="absolute top-0 left-[-8px] right-[-8px] h-px bg-zinc-700 -translate-y-6"></div>
          <div className="w-full">
            <MemberCard
              member={pengembangan.head}
              role="Pengembangan"
              staffCount={devStaff.length}
              onClick={() => onMemberClick?.(pengembangan.head, 'Pengembangan', 'Project Manager', devStaff)}
            />
          </div>
        </div>

        {/* Column 4: Public Relation */}
        <div className="flex flex-col items-center w-[15%] relative">
          <div className="absolute top-0 h-6 w-0.5 bg-zinc-700 -translate-y-6 left-1/2 -translate-x-1/2"></div>
          {/* Horizontal segment: spans all the way */}
          <div className="absolute top-0 left-[-8px] right-[-8px] h-px bg-zinc-700 -translate-y-6"></div>
          <div className="w-full">
            <MemberCard
              member={publicRelation.head}
              role="Public Relation"
              staffCount={prStaff.length}
              onClick={() => onMemberClick?.(publicRelation.head, 'Public Relation', 'Manager', prStaff)}
            />
          </div>
        </div>

        {/* Column 5: Usaha */}
        <div className="flex flex-col items-center w-[15%] relative">
          <div className="absolute top-0 h-6 w-0.5 bg-zinc-700 -translate-y-6 left-1/2 -translate-x-1/2"></div>
          {/* Horizontal segment: from left edge - half gap (8px) to center */}
          <div className="absolute top-0 left-[-8px] right-1/2 h-px bg-zinc-700 -translate-y-6"></div>
          <div className="w-full">
            <MemberCard
              member={usaha.head}
              role="Usaha"
              staffCount={usahaStaff.length}
              onClick={() => onMemberClick?.(usaha.head, 'Usaha', 'Manager Usaha', usahaStaff)}
            />
          </div>
        </div>

      </div>
    </div>
  );
};

export default function ImprovedOrganizationalChart({ onMemberClick }: { onMemberClick?: (member: Member, dept: string, role: string, staffList?: Member[]) => void }) {
  return (
    <div className="w-full py-12 px-6 bg-gradient-to-b from-zinc-950 to-zinc-900 rounded-2xl border border-white/10 min-w-[1150px]">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        <BPHSection onMemberClick={onMemberClick} />
        <DepartmentSectionHorizontal onMemberClick={onMemberClick} />
      </div>
    </div>
  );
}
