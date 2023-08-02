import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import NavBar from '@/components/navBar';
import ChildrenWrapper from '@/components/ChildWrapper';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className={`${inter.className}`}>
        <NavBar />
        <ChildrenWrapper>{children}</ChildrenWrapper>
      </body>
    </html>
  );
}
