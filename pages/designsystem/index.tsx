import Button from '../../components/Button'
import FormDropdow from '../../components/Form/FormDropwdown'
import FormInput from '../../components/Form/FormInput'

export default function DesignSystem() {
  return (
    <div className="mx-auto w-full flex flex-col justify-center">
      <div className="mx-auto">
        <h1>04. BUTTONS</h1>
        <div className="space-x-12">
          <Button type="danger" disabled />
          <Button type="danger" />
          <Button type="continue" />
          <Button type="success" />
          <Button type="ghost" />
          <Button />
        </div>
      </div>

      <div className="mx-auto mt-32">
        <h1>05. FORMS</h1>
        <FormInput label="Digite" placeholder="digite..." error />
        <div className="mt-12">
          <FormDropdow />
        </div>
      </div>
    </div>
  )
}
