import CardAtom from '../components/atoms/cardAtom';
import Image from 'next/image';
import hero from './(resources)/images/hero.jpg';

export default function Home() {
  return (
    <CardAtom>
      <div className='w-1/3 h-full mx-4 flex flex-col justify-center gap-8'>
        <h1 className='text-6xl font-bold text-white text-secondary-50 text-bold'>
          Unlock Your Potential & Connect, Learn, Grow
        </h1>
        <h2 className='text-xl text-secondary-100'>
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
