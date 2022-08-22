interface FormInputProps {
  label: string
  placeholder: string
  error?: boolean
}

export default function FormInput({
  label,
  placeholder,
  error,
}: FormInputProps) {
  return (
    <>
      <label htmlFor="input">{label}</label>
      <div
        className={`max-w-[280px] h-[46px] bg-white rounded-md border mt-2  ${
          error ? 'border-danger' : 'border-gray-300'
        }`}
      >
        <input
          className="w-full rounded-md h-full px-4"
          type="text"
          id="input"
          placeholder={placeholder}
        />
      </div>
      {error && <span className="text-danger">Error message here</span>}
    </>
  )
}
