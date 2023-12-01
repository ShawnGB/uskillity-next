type ContainerProps = {
  children: React.ReactNode;
};

export default function LayoutContainer({ children }: ContainerProps) {
  return (
    <div className='w-full h-full flex justify-center items-center m-8'>
      {children}
    </div>
  );
}
