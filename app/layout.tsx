import type { Metadata } from 'next';
import './globals.css';
import Navbar from '../components/organisms/navbar';

export const metadata: Metadata = {
  title: 'u/skillity',
  description: 'Share what u love, learn what u love',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className='bg-offWhite'>
        <Navbar />
        <div className='w-full h-full flex justify-center align-middle items-center'>
          {children}
        </div>
      </body>
    </html>
  );
}
