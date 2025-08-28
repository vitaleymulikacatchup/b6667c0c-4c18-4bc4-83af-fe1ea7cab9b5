import type { Metadata } from 'next';
import { Inter_Tight, Poppins } from 'next/font/google';
import './globals.css';

const interTight = Inter_Tight({
  variable: '--font-inter-tight',
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
  title: 'Webild',
  description: 'Showcase Webild as a playful, trendy SaaS',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${interTight.variable} antialiased bg-[var(--background)] text-[var(--text)]`}>  
        {children}
      </body>
    </html>
  );
}