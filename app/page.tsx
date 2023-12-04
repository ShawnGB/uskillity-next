import Hero from '../components/organisms/hero';
import UspCards from '../components/organisms/uspCards';

export default function Home() {
  return (
    <div className='w-full flex flex-col items-center justify-start gap-16'>
      <Hero />
      <UspCards />
    </div>
  );
}
