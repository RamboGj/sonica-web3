import { useAddress } from '@thirdweb-dev/react'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { Toaster } from 'react-hot-toast'
import scPhoto from '../assets/scphoto.png'
import WalletConnector from '../components/WalletConnector'

export default function Home() {
  const address = useAddress()
  const router = useRouter()

  useEffect(() => {
    if (address) {
      router.push('/dashboard')
    }
  }, [address])

  if (!address) {
    return (
      <div className="w-screen h-[calc(100vh_-_6rem)] bg-gradient-to-b from-purple300 to-gray900 px-12">
        <div className="max-w-[1060px] mx-auto flex justify-between items-center pt-24">
          <div className="max-w-[420px] leading-none space-y-8 mx-auto lg:mx-0 text-white text-center lg:text-left">
            <h1 className="font-bold text-6xl">Connect your wallet first.</h1>
            <p className="text-lg">
              You need to connect your wallet to start deploying new contracts.
            </p>
            <div className="flex justify-center lg:justify-start">
              <WalletConnector />
            </div>
          </div>
          <div className="hidden lg:flex lg:flex-1 relative w-full h-full justify-end">
            <img
              src={scPhoto.src}
              alt="foto de um smart contract"
              className="self-end"
            />
          </div>
        </div>
        <Toaster position="bottom-right" reverseOrder={false} />
      </div>
    )
  }
}
