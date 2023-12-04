export default function Row({ children }: { children: React.ReactNode }) {
  return (
    <div className='w-4/5 h-fit flex flex-row justify-center align-middle items-center gap-4 overflow-visible'>
      {children}
    </div>
  );
}
