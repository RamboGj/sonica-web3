import { useAddress, useMetamask } from '@thirdweb-dev/react'
import { CircleNotch, Wallet } from 'phosphor-react'
import { useEffect, useState } from 'react'

export default function Header() {
  const [isAuthenticating, setIsAuthenticating] = useState<boolean>(false)
  const address = useAddress()

  const connectWithMetamask = useMetamask()

  function handleConnectWithMetamask() {
    connectWithMetamask()
    setIsAuthenticating(true)
  }

  async function verifyIfIsConnected() {
    if (address) {
      setIsAuthenticating(false)
    } else {
      console.log('Autenticando')
    }
  }

  useEffect(() => {
    verifyIfIsConnected()
  }, [address])

  return (
    <div className="w-screen bg-bgPink h-24">
      <div className="flex max-w-[1060px] justify-between items-center mx-auto h-full">
        <h1 className="text-white text-[40px] font-bold">Web 3.0</h1>
        <button
          onClick={handleConnectWithMetamask}
          className="flex rounded-full text-md bg-white text-bgPink font-bold py-2 px-3 items-center justify-center hover:bg-gray-300 transition duration-500 gap-2 w-48"
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
