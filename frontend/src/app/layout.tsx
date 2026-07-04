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
      <head>
        <link 
          rel="stylesheet" 
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css" 
          integrity="sha512-Kc323vGBEqzTmouAECnVceyQqyqdsSiqLQISBL29aUW4U/M7pSPA/gEUZQqv1cwx4OnYxTxve5UMg5GT6L4JJg==" 
          crossOrigin="anonymous" 
          referrerPolicy="no-referrer" 
        />
      </head>
      <body className="min-h-screen bg-itera-bg text-itera-textPrimary">
        {children}
      </body>
    </html>
  );
}
