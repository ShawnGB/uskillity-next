import React from 'react';
import CardAtom from '../atoms/cardAtom';
import hero from '../../app/(resources)/images/hero.jpg';
import Image from 'next/image';

export default function Hero() {
  return (
    <CardAtom>
      <div className='w-1/3 h-full m-8 flex flex-col justify-center gap-16 '>
        <h1 className='text-6xl font-bold text-white text-secondary-50 text-bold '>
          Unlock Your Potential & Connect, Learn, Grow
        </h1>
        <h2 className='text-xl text-secondary-100 text-justify leading-normal'>
          Welcome to u/skillity, where knowledge meets community. Join us on a
          journey of skill-sharing, networking, and personal growth. Embrace the
          power of connection.
        </h2>
      </div>
      <div className='w-2/3'>
        <Image src={hero} alt='Description of the image' />
      </div>
    </CardAtom>
  );
}
