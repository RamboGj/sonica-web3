interface FormInputProps {
  label?: string
  placeholder?: string
  error?: boolean
  errorMessage?: string
  value?: string
  setValue?: (value: string) => void
  disabled?: boolean
}

export default function FormInput({
  label,
  placeholder,
  error,
  value,
  setValue,
  errorMessage,
  disabled,
}: FormInputProps) {
  return (
    <>
      {label && (
        <label htmlFor="input" className="text-purple500 font-bold text-title">
          {label}
        </label>
      )}
      <div
        className={`max-w-full h-[46px] bg-white rounded-md border mt-2  ${
          error ? 'border-danger' : 'border-gray-300'
        }`}
      >
        <input
          value={value}
          onChange={(e) => setValue && setValue(e.target.value)}
          disabled={disabled}
          className="w-full rounded-md h-full px-4 disabled:bg-gray300 disabled:cursor-not-allowed hover:bg-gray-50 hover:outline-purple300 placeholder:text-sm"
          type="text"
          id="input"
          placeholder={placeholder || 'placeholder...'}
        />
      </div>
      {error && <span className="text-danger">{errorMessage}</span>}
    </>
  )
}
