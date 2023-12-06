type NavLinkProps = {
  href: string;
  text: string;
};

type ButtonAtomProps = {
  text: string;
  onButtonClick: () => void;
};

type InputFieldProps = {
  label: string;
  register: UseFormRegisterReturn<string>;
  error?: { message: string } | undefined;
  placeholder: string;
  type: string;
};
