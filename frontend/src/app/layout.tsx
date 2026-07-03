import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'UKM Lembaga Pers ITERA',
  description: 'Web Profil Resmi UKM Lembaga Pers ITERA dengan portal berita dan aspirasi kampus.',
  icons: {
    icon: '/logo.png',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body className="min-h-screen bg-itera-bg text-itera-textPrimary">
        {children}
      </body>
    </html>
  );
}
