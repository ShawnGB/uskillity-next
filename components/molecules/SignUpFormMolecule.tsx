import React from 'react';
import InputField from '../atoms/InputFieldatom';

const SignUpFormMolecule: React.FC<{ fields: InputFieldProps[] }> = ({
  fields,
}) => (
  <>
    {fields.map((field, index) => (
      <InputField key={index} {...field} />
    ))}
  </>
);

export default SignUpFormMolecule;
