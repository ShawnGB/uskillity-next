import Link from 'next/link';

export default function NavLinkAtom({ href, text }: NavLinkProps) {
  return (
    <Link href={href} className='h-full px-4 flex items-center'>
      {text}
    </Link>
  );
}
