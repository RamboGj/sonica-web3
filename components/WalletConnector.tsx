import { Menu, Transition } from '@headlessui/react'
import {
  useAddress,
  useDisconnect,
  useMetamask,
  useWalletConnect,
} from '@thirdweb-dev/react'
import { CircleNotch, Wallet, X } from 'phosphor-react'
import { Fragment, useState } from 'react'
import Image from 'next/image'
import metamask from '../assets/metamask.svg'
import walletconnect from '../assets/walletconnect.svg'

export default function WalletConnector() {
  const address = useAddress()
  const disconnect = useDisconnect()
  const connectWithMetamask = useMetamask()
  const connectWithWalletConnect = useWalletConnect()

  const authenticationMethods = [
    { type: 'Metamask', logo: metamask },
    { type: 'WalletConnect', logo: walletconnect },
  ]

  const [isAuthenticating, setIsAuthenticating] = useState<boolean>(false)

  async function connectWallet(type: string) {
    setIsAuthenticating(true)
    if (type.toLowerCase() === 'metamask') {
      await connectWithMetamask()
    } else if (type.toLowerCase() === 'walletconnect') {
      await connectWithWalletConnect()
    }
    setIsAuthenticating(false)
  }

  if (address) {
    return (
      <div className="flex rounded-full text-md bg-white text-purple300 font-bold items-center justify-centertransition duration-500 w-48 focus:outline-none hover:bg-gray300 z-10">
        <Menu as="div" className="w-full">
          <div>
            <Menu.Button className="flex rounded-full w-full h-full text-md bg-white text-purple300 font-bold py-2 px-3 items-center justify-center hover:bg-gray-300 transition duration-500 gap-2">
              {address.slice(0, 5) +
                '...' +
                address.slice(address.length - 4, address.length)}
            </Menu.Button>
          </div>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute mt-2 w-[280px] origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div className="px-1 py-[3px]">
                <Menu.Item>
                  {({ active }) => (
                    <button
                      onClick={disconnect}
                      className={`${
                        active ? 'bg-purple300 text-white' : 'text-gray-900'
                      } group flex w-full items-center rounded-md px-2 py-2 text-sm gap-x-2`}
                    >
                      <X size={24} className="text-purple500" />
                      Disconnect
                    </button>
                  )}
                </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
    )
  }

  return (
    <div className="flex rounded-full text-md bg-white text-purple300 font-bold items-center justify-centertransition duration-500 w-48 focus:outline-none hover:bg-gray300 z-10">
      <Menu as="div" className="w-full">
        <div>
          <Menu.Button
            disabled={isAuthenticating}
            className="flex rounded-full w-full h-full text-md bg-white text-purple300 font-bold py-2 px-3 items-center justify-center hover:bg-gray-300 transition duration-500 gap-2"
          >
            {isAuthenticating ? (
              <CircleNotch size={24} className="animate-spin" />
            ) : (
              <>
                <span>Connect Wallet</span>
                <Wallet size={24} />
              </>
            )}
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute mt-2 w-[280px] origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            {authenticationMethods.map((method) => {
              return (
                <div key={method.type} className="px-1 py-[3px]">
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        onClick={() => connectWallet(method.type)}
                        className={`${
                          active ? 'bg-purple500 text-white' : 'text-gray-900'
                        } group flex w-full items-center rounded-md px-2 py-2 text-sm gap-x-2`}
                      >
                        <Image
                          width={25}
                          height={25}
                          src={method.logo}
                          alt="logo do método de conexão"
                        />
                        {method.type}
                      </button>
                    )}
                  </Menu.Item>
                </div>
              )
            })}
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  )
}
