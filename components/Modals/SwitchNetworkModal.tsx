import { Dialog, Transition } from '@headlessui/react'
import { CircleNotch, X } from 'phosphor-react'
import { Fragment } from 'react'
import { useNetworkContext } from '../../contexts/NetworkContext'
import NetworkCard from '../Cards/NetworkCard'
import { mainnets, testnets } from '../../utils/network'

interface SwitchNetworkModalProps {
  isOpen: boolean
  close: () => void
}

export default function SwitchNetworkModal({
  isOpen,
  close,
}: SwitchNetworkModalProps) {
  const { handleSwitchNetwork, isSwitchingNetwork } = useNetworkContext()

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={close}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-[540px] text-white  px-10 flex flex-col justify-center pt-10 pb-16 transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    <div className="flex items-center justify-between">
                      <h1 className="text-title text-black text-center text-[30px] mx-auto">
                        Switch Network
                      </h1>
                      <X
                        size={32}
                        onClick={close}
                        className="text-black cursor-pointer hover:text-gray500 transtion duration-500 justify-end"
                      />
                    </div>
                  </Dialog.Title>
                  <div className="mt-5 mx-auto flex-col justify-center w-full h-full">
                    {isSwitchingNetwork ? (
                      <div className="my-56 mx-auto flex justify-center">
                        <CircleNotch
                          size={128}
                          className="text-purple300 animate-spin"
                        />
                      </div>
                    ) : (
                      <>
                        <p className="text-lg text-purple300 text-center font-medium">
                          Choose which network you want to switch to
                        </p>
                        <div className="mt-6">
                          <h1 className="text-lg text-purple300">Mainnets</h1>

                          <div className="space-y-4 mt-4">
                            {mainnets.map((mainnet) => {
                              return (
                                <NetworkCard
                                  network={mainnet.name}
                                  symbol={mainnet.symbol}
                                  action={() =>
                                    handleSwitchNetwork(
                                      mainnet.id,
                                      mainnet.logo,
                                    )
                                  }
                                  key={mainnet.id}
                                  image={mainnet.logo}
                                />
                              )
                            })}
                          </div>
                        </div>
                        <div className="mt-6">
                          <h1 className="text-lg text-purple300">Testnets</h1>

                          <div className="space-y-4 mt-4">
                            {testnets.map((testnet) => {
                              return (
                                <NetworkCard
                                  action={() =>
                                    handleSwitchNetwork(
                                      testnet.id,
                                      testnet.logo,
                                    )
                                  }
                                  key={testnet.id}
                                  image={testnet.logo}
                                  network={testnet.name}
                                  symbol={testnet.symbol}
                                />
                              )
                            })}
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}
