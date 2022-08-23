interface FormInputProps {
  label?: string
  placeholder?: string
  error?: boolean
  errorMessage?: string
  value?: string
}

export default function FormInput({
  label,
  placeholder,
  error,
  value,
  errorMessage,
}: FormInputProps) {
  return (
    <>
      {label && <label htmlFor="input">{label}</label>}
      <div
        className={`max-w-[280px] h-[46px] bg-white rounded-md border mt-2  ${
          error ? 'border-danger' : 'border-gray-300'
        }`}
      >
        <input
          value={value}
          className="w-full rounded-md h-full px-4"
          type="text"
          id="input"
          placeholder={placeholder || 'placeholder...'}
        />
      </div>
      {error && <span className="text-danger">{errorMessage}</span>}
    </>
  )
}
