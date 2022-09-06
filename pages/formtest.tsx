import { useState } from 'react'
import { useForm } from 'react-hook-form'
import Button from '../components/Buttons/Button'

export default function FormTest() {
  const { register, handleSubmit } = useForm()
  const [name, setName] = useState<string>('')
  const [email, setEmail] = useState<string>('')

  return (
    <div className="flex-col max-w-[1060px] justify-center mx-auto mt-32">
      <h1>Form Test</h1>
      <form
        onSubmit={handleSubmit((data) => {
          console.log(data)
          setEmail(data.email_field)
          setName(data.name_field)
        })}
      >
        <label htmlFor="email">
          Email
          <input type="text" id="email" {...register('email_field')} />
        </label>
        <label htmlFor="name">
          Nome
          <input type="text" id="name" {...register('name_field')} />
        </label>

        <Button type="success" />
      </form>

      <Button
        type="continue"
        action={() => console.log('Email: ', email, 'Name: ', name)}
      />
    </div>
  )
}
