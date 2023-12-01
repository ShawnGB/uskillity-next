import CardAtom from '../components/atoms/cardAtom';
import Image from 'next/image';

export default function Home() {
  return (
    <CardAtom>
      <div>
        <h1 className=' text-2xl font-bold text-white'>
          Unlock Your Potential with u/skillity: Connect, Learn, Grow
        </h1>
        <h2>
          Welcome to u/skillity, where knowledge meets community. Join us on a
          journey of skill-sharing, networking, and personal growth. Embrace the
          power of connection.
        </h2>
      </div>
      <Image
        src='/quino-al-xEy9QNUCdRI-unsplash.jpg' // Absolute path starting with /
        alt='Description of the image'
        width={500} // Set your desired width
        height={300} // Set your desired height
      />
    </CardAtom>
  );
}
