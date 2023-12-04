export default function DetailCardAtom({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className='h-fit w-1/3 p-4 flex flex-col gap-4 rounded-md shadow-lg '>
      {children}
    </div>
  );
}
