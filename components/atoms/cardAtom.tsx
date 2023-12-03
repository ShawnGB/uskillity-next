export default function CardAtom({ children }: { children: React.ReactNode }) {
  return (
    <div className='w-4/5 max-h-fit m-8  overflow-hidden rounded-lg shadow-md bg-primary-300  flex flex-row justify-between items-center'>
      {children}
    </div>
  );
}
