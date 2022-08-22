import { useAddress, useMetamask } from '@thirdweb-dev/react'
import { CircleNotch, Wallet } from 'phosphor-react'
import { useState } from 'react'

export default function Header() {
  const [isAuthenticating, setIsAuthenticating] = useState<boolean>(false)
  const address = useAddress()

  const connectWithMetamask = useMetamask()

  async function handleConnectWithMetamask() {
    setIsAuthenticating(true)
    await connectWithMetamask()
    setIsAuthenticating(false)
  }

  return (
    <div className="w-screen bg-purple300 h-24 px-12">
      <div className="flex max-w-[1060px] justify-between items-center mx-auto h-full">
        <h1 className="text-white mx-auto md:mx-0 text-[40px] font-bold">
          Web 3.0
        </h1>
        <button
          disabled={!!address}
          onClick={handleConnectWithMetamask}
          className="hidden md:flex rounded-full text-md bg-white text-purple300 font-bold py-2 px-3 items-center justify-center hover:bg-gray-300 transition duration-500 gap-2 w-48"
        >
          {isAuthenticating ? (
            <CircleNotch size={24} className="animate-spin" />
          ) : (
            <>
              <span>Connect Wallet</span>
              <Wallet size={24} />
            </>
          )}
        </button>
      </div>
    </div>
  )
}
