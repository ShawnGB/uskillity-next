'use client';
import { useForm, SubmitHandler } from 'react-hook-form';
import SignUpFormMolecule from '../molecules/SignUpFormMolecule';

type FormValues = {
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  password: string;
};

export default function SignUpForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isDirty, isValid },
  } = useForm<FormValues>();

  const formFields = [
    {
      label: 'First name',
      register: register('firstName', {
        required: true,
        minLength: {
          value: 2,
          message: 'You are not named after a single character.',
        },
        maxLength: {
          value: 50,
          message: 'Please tell your parents that your name is too long.',
        },
      }),
      error: errors.firstName,
      placeholder: 'Please enter your first name',
      type: 'text',
    },
    {
      label: 'Last name',
      register: register('lastName', {
        required: "Don't be shy, let us know your full name",
        minLength: { value: 2, message: 'Give me some more.' },
        maxLength: { value: 50, message: 'Did you fall onto the keyboard?' },
      }),
      error: errors.lastName,
      placeholder: 'Enter your last name',
      type: 'text',
    },
    {
      label: 'User name',
      register: register('username', {
        required: 'You can do it',
        minLength: {
          value: 5,
          message: 'Be more creative; it should be at least 5 characters long.',
        },
        maxLength: {
          value: 50,
          message: 'That was a little too creative; fewer characters, please.',
        },
      }),
      error: errors.username,
      placeholder: 'How would you like to be called?',
      type: 'text',
    },
    {
      label: 'Email',
      register: register('email', {
        required: "We won't get very far without one",
      }),
      error: errors.email,
      placeholder: 'Your email address',
      type: 'email',
    },
    {
      label: 'Password',
      register: register('password', {
        required: true,
        minLength: { value: 8, message: 'Security needs more characters' },
        maxLength: { value: 50, message: '50 is the maximum' },
      }),
      error: errors.password,
      placeholder: 'MYsuperSecretPassword1234',
      type: 'password',
    },
  ];

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <SignUpFormMolecule fields={formFields} />

      <button
        className='h-11 px-4 border-2 rounded-md justify-self-end border-primary-200 text-primary-500 bg-offWhite bg-opacity-50'
        type='submit'
        disabled={!isDirty || !isValid || isSubmitting}
      >
        {isSubmitting ? 'Submitting...' : 'Submit'}
      </button>
    </form>
  );
}
