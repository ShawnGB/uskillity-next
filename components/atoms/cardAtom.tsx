export default function cardAtom({ children }: { children: React.ReactNode }) {
  return (
    <div className='w-10/12 p-8 rounded-lg shadow-md bg-primary-300 flex justify-between align-middle items-center'>
      {children}
    </div>
  );
}
