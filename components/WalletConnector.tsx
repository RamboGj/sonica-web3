import { Menu, Transition } from '@headlessui/react'
import {
  useAddress,
  useBalance,
  useDisconnect,
  useMetamask,
  useNetwork,
  useWalletConnect,
} from '@thirdweb-dev/react'
import { CaretDown, CircleNotch, Copy, WifiHigh, X } from 'phosphor-react'
import { Fragment, useEffect, useState } from 'react'
import Image from 'next/image'
import metamask from '../assets/metamask.svg'
import walletconnect from '../assets/walletconnect.svg'
import SwitchNetworkModal from './Modals/SwitchNetworkModal'
import { useNetworkContext } from '../contexts/NetworkContext'
import toast from 'react-hot-toast'
import { useRouter } from 'next/router'

export default function WalletConnector() {
  const [isAuthenticating, setIsAuthenticating] = useState<boolean>(false)
  const [isActive, setIsActive] = useState<boolean>(false)

  const balance = useBalance()
  const address = useAddress()
  const disconnect = useDisconnect()

  const connectWithMetamask = useMetamask()
  const connectWithWalletConnect = useWalletConnect()
  const { '0': networkData } = useNetwork()
  const router = useRouter()

  const { isSwitchNetworkModal, setIsSwitchNetworkModal, networkImage } =
    useNetworkContext()

  const authenticationMethods = [
    { type: 'Metamask', logo: metamask },
    { type: 'WalletConnect', logo: walletconnect },
  ]

  async function handleCopyAddress() {
    address && (await navigator.clipboard.writeText(address))
    toast.success('Wallet address successfully copied!')
  }

  useEffect(() => {
    if (!address) {
      router.push('/')
    }
  }, [address])

  const dropdownOptions = [
    {
      name: 'Disconnect',
      icon: X,
      action: disconnect,
    },
    {
      name: 'Copy Address',
      icon: Copy,
      action: handleCopyAddress,
    },
    {
      name: 'Switch Network',
      icon: WifiHigh,
      action: () => setIsSwitchNetworkModal(true),
    },
  ]

  async function handleActiveDropdown() {
    setIsActive(false)

    if (!isActive) {
      setIsActive(true)
    } else {
      setIsActive(false)
    }
  }

  async function handleConnectWallet(type: string) {
    setIsAuthenticating(true)

    if (type.toLowerCase() === 'metamask') {
      await connectWithMetamask()

      setIsAuthenticating(false)
      setIsActive(false)
    } else if (type.toLowerCase() === 'walletconnect') {
      await connectWithWalletConnect()

      setIsAuthenticating(false)
      setIsActive(false)
    }
  }

  useEffect(() => {
    setIsActive(false)
  }, [address])

  if (address) {
    return (
      <div className="flex rounded-md text-md shadow-xl bg-white items-center justify-center transition duration-500 w-full max-w-[240px] max-h-12 focus:outline-none hover:bg-gray-300 z-10">
        <Menu as="div" className="w-full">
          <div>
            <Menu.Button
              onClick={handleActiveDropdown}
              className="flex w-full h-full py-2 px-2 items-center justify-center gap-4"
            >
              <div className="flex items-center gap-x-4">
                <Image width={28} height={28} src={networkImage} alt="" />
                <div className="flex flex-col items-start">
                  <p className="font-bold text-sm leading-none">
                    {balance.data?.displayValue.substring(0, 8)} {''}{' '}
                    {networkData.data.chain?.nativeCurrency?.symbol}
                  </p>
                  <p className="font-medium text-gray700 text-sm leading-none">
                    {address.substring(0, 4) +
                      '...' +
                      address.substring(
                        address.length - 3,
                        address.length,
                      )}{' '}
                    ({networkData.data.chain?.name?.substring(0, 8)})
                  </p>
                </div>
                <CaretDown
                  size={24}
                  className={`${
                    isActive ? 'rotate-180' : 'rotate-0'
                  } transition duration-300`}
                />
              </div>
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
            <Menu.Items className="absolute mt-2 shadow-xl w-full max-w-[240px] origin-top-right divide-y divide-gray-100 rounded-md bg-white">
              <div>
                {dropdownOptions.map((option) => {
                  return (
                    <Menu.Item key={option.name}>
                      {({ active }) => (
                        <button
                          onClick={option.action}
                          className={`${
                            active ? 'bg-purple300 text-white' : 'text-gray900'
                          } group flex w-full items-center rounded-md px-2 py-3 text-sm gap-x-2 font-medium hover:scale-105 transition duration-300 hover:bg-purple100`}
                        >
                          <option.icon size={20} className="text-purple500" />
                          <p className="font-medium">{option.name}</p>
                        </button>
                      )}
                    </Menu.Item>
                  )
                })}
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
        <SwitchNetworkModal
          isOpen={isSwitchNetworkModal}
          close={() => setIsSwitchNetworkModal(false)}
        />
      </div>
    )
  }

  return (
    <div className="flex rounded-md text-md shadow-xl bg-white text-purple300 font-bold items-center w-full max-w-[240px] justify-center transition duration-500 focus:outline-none hover:bg-gray300 z-10">
      <Menu as="div" className="w-full">
        <div>
          <Menu.Button
            onClick={handleActiveDropdown}
            disabled={isAuthenticating}
            className="flex rounded-md w-full py-2 px-1 h-12 items-center justify-center hover:bg-gray-300 transition duration-500 gap-2"
          >
            {isAuthenticating ? (
              <CircleNotch size={24} className="animate-spin" />
            ) : (
              <div className="flex w-fit justify-center space-x-4 items-center text-sm">
                <span>Connect Wallet</span>
                <CaretDown
                  size={24}
                  className={`${
                    isActive ? 'rotate-180' : 'rotate-0'
                  } transition duration-300`}
                />
              </div>
            )}
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-300"
          enterFrom="transform opacity-0 scale-50"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-50"
        >
          <Menu.Items className="absolute mt-2 w-[240px] origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            {authenticationMethods.map((method) => {
              return (
                <div key={method.type}>
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        onClick={() => {
                          handleConnectWallet(method.type)
                        }}
                        className={`${
                          active ? 'bg-purple500 text-white' : 'text-gray900'
                        } group flex w-full items-center rounded-md px-4 py-3 text-sm gap-x-2 font-medium hover:scale-105 transition duration-300 hover:bg-purple100`}
                      >
                        <Image
                          width={25}
                          height={25}
                          src={method.logo}
                          alt=""
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
