import type { Metadata } from 'next';
import './globals.css';
import Navbar from '../components/organisms/navbar';
import Footer from '../components/organisms/footer';

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
        <div className='w-full min-h-screen flex justify-center mb-40'>
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
