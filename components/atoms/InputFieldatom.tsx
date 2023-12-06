const InputField: React.FC<InputFieldProps> = ({
  label,
  register,
  error,
  placeholder,
  type,
}) => (
  <div className='w-full h-10 m-4'>
    <label>
      <span className='w-full'>{label}</span>
      <input
        className='w-full unset'
        {...register}
        aria-invalid={error ? 'true' : 'false'}
        placeholder={placeholder}
        type={type}
      />
    </label>
    {error && <p role='alert'>{error.message}</p>}
  </div>
);

export default InputField;
