import { ChainId, useAddress, useNetwork } from '@thirdweb-dev/react'
import scPhoto from '../assets/scphoto.png'
import WalletConnector from '../components/WalletConnector'

export default function Home() {
  const address = useAddress()
  const [, switchNetwork] = useNetwork()

  const networksList = [
    { name: 'Goerli', id: ChainId.Goerli },
    { name: 'Ethereum Mainnet', id: ChainId.Mainnet },
    { name: 'Mumbai', id: ChainId.Mumbai },
    { name: 'Polygon', id: ChainId.Polygon },
    { name: 'Fantom', id: ChainId.Fantom },
    { name: 'Avalanche', id: ChainId.Avalanche },
  ]

  if (!address) {
    return (
      <div className="w-screen h-full bg-gradient-to-b from-purple300 to-gray900 px-12">
        <div className="max-w-[1060px] mx-auto flex justify-between items-center pt-24">
          <div className="max-w-[420px] leading-none space-y-8 mx-auto lg:mx-0 text-center lg:text-left">
            <h1 className="text-white font-bold text-[60px]">
              Connect your wallet first.
            </h1>
            <p className="text-white text-lg">
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
      </div>
    )
  }

  return (
    <div className="w-screen overscroll-x-none h-screen bg-gradient-to-b from-purple300 to-gray900 px-12">
      <div className="max-w-[1060px] mx-auto flex justify-between items-center pt-24">
        {networksList.map((net) => {
          return (
            <button
              onClick={async () => {
                if (switchNetwork) switchNetwork(net.id)
              }}
              key={net.id}
            >
              {net.name}
            </button>
          )
        })}
      </div>
    </div>
  )
}
