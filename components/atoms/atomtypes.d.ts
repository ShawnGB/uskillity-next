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
  register: UseFormRegisterReturn<string>; // You might want to adjust this based on your form's structure
  error?: FieldError | undefined;
  placeholder: string;
  type: string;
};
