import { useAddress, useMetamask } from '@thirdweb-dev/react'
import { CircleNotch, Wallet } from 'phosphor-react'
import { useEffect, useState } from 'react'
import scPhoto from '../assets/scphoto.png'

export default function Home() {
  const connectWithMetamask = useMetamask()

  const address = useAddress()

  const [isAuthenticating, setIsAuthenticating] = useState<boolean>(false)

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

  if (!address) {
    return (
      <div className="max-w-screen w-full h-screen bg-gradient-to-b from-purple300 to-black overflow-hidden">
        <div className="max-w-[1060px] mx-auto flex justify-between items-center pt-24">
          <div className="max-w-[420px] leading-none space-y-8">
            <h1 className="text-white font-bold text-[60px]">
              Connect your wallet first.
            </h1>
            <p className="text-white text-lg">
              You need to connect your wallet to start deploying new contracts.
            </p>
            <button
              onClick={handleConnectWithMetamask}
              className="flex rounded-full text-md bg-white text-purple300 font-bold py-2 px-3 items-center justify-center hover:bg-gray-300 transition duration-500 gap-2 w-48"
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
          <div className="hidden lg:flex lg:flex-1 relative w-full h-full justify-end">
            <img
              src={scPhoto.src}
              alt="foto de um smart contract"
              className="self-end"
            />
          </div>
        </div>
      </div>
    )
  }
}
