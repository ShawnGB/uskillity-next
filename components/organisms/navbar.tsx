'use client';

import ButtonAtom from '../atoms/ButtonAtom';
import NavLinkAtom from '../atoms/NavLinkAtom';

export default function Navbar() {
  const containerStyle = 'h-full  mx-4 flex gap-4 items-center';

  const navLinks: NavLinkProps[] = [
    { href: '/', text: 'Home' },
    { href: '/workshops', text: 'Workshops' },
    { href: 'about', text: 'baout' },
  ];

  return (
    <nav className='w-full h-16 fixed flex justify-between '>
      <div className={containerStyle}>
        {navLinks.map((link, index) => (
          <NavLinkAtom href={link.href} text={link.text} key={index} />
        ))}
      </div>

      <div className={containerStyle}>
        <ButtonAtom
          text='Sign up'
          onButtonClick={() => console.log('clicked')}
        />
        <ButtonAtom
          text='Log in'
          onButtonClick={() => console.log('clicked')}
        />
      </div>
    </nav>
  );
}
