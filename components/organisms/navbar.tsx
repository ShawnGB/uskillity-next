'use client';

import { useEffect, useState } from 'react';
import ButtonAtom from '../atoms/ButtonAtom';
import NavLinkAtom from '../atoms/NavLinkAtom';

export default function Navbar() {
  const containerStyle = 'h-full  mx-4 flex gap-4 items-center';

  const navLinks: NavLinkProps[] = [
    { href: '/', text: 'Home' },
    { href: '/workshops', text: 'Workshops' },
    { href: 'about', text: 'baout' },
  ];

  const navButtons: ButtonAtomProps[] = [
    { text: 'Sign up', onButtonClick: () => console.log('clicked') },
    { text: 'Log in', onButtonClick: () => console.log('clicked') },
  ];

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
      className={`sticky top-0 left-0 w-screen h-20 flex justify-between items-center z-50 backdrop-filter backdrop-blur-md bg-opacity-75 ${
        isScrolled ? 'shadow' : ''
      }`}
    >
      <div className={containerStyle}>
        {navLinks.map((link, index) => (
          <NavLinkAtom href={link.href} text={link.text} key={index} />
        ))}
      </div>

      <div className={containerStyle}>
        {navButtons.map((button, index) => (
          <ButtonAtom
            key={index}
            text={button.text}
            onButtonClick={button.onButtonClick}
          />
        ))}
      </div>
    </nav>
  );
}
