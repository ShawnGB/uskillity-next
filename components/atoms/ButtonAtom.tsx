type IProps = {
  children?: React.ReactNode;
  text: string;
};

export default function ButtonAtom({ children, text }: IProps) {
  return (
    <button className='h-11 px-4 border-2 rounded-md justify-self-end'>
      {text}
    </button>
  );
}
