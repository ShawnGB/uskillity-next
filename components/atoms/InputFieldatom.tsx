const InputField: React.FC<InputFieldProps> = ({
  label,
  register,
  error,
  placeholder,
  type,
}) => (
  <div>
    <label>
      <span>{label}</span>
      <input
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
