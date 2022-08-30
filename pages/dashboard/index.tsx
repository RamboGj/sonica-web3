import { useAddress, useDisconnect } from '@thirdweb-dev/react'
import { useRouter } from 'next/router'
import { CaretLeft, Plus, Wallet } from 'phosphor-react'
import { Toaster } from 'react-hot-toast'
import Button from '../../components/Buttons/Button'

export default function Dashboar() {
  const disconnect = useDisconnect()
  const router = useRouter()
  const address = useAddress()

  if (!address) {
    router.push('/')
  }

  return (
    <div className="w-screen h-[calc(100vh_-_6rem)] px-12">
      <div className="pt-5 max-w-[1060px] mx-auto">
        <Button
          label="Back"
          hasIcon
          icon={<CaretLeft size={24} />}
          action={disconnect}
          type="ghost"
        />
      </div>
      <div className="max-w-[1060px] mx-auto flex justify-between items-center pt-24">
        <div className="w-full h-full flex flex-col items-center justify-center bg-white shadow-xl py-24 px-8 rounded-md mx-auto">
          <Wallet size={96} className="text-purple300 justify-center" />
          <h1 className="mt-10 text-title1">
            You don {"'t"} have any contracts
          </h1>
          <p className="text-title3">Deploy a new contract to start</p>

          <div className="mt-8">
            <Button
              action={() => router.push('/contracts/list')}
              hasIcon
              icon={<Plus size={24} />}
              label="Deploy new contract"
              type="ghost"
            />
          </div>
        </div>
      </div>
      <Toaster position="top-center" />
    </div>
  )
}
