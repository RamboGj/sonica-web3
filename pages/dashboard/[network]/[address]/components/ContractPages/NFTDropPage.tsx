import { useRouter } from 'next/router'
import { CaretLeft, CircleNotch, Code, CopySimple, Gear } from 'phosphor-react'
import Button from '../../../../../../components/Buttons/Button'
import Image from 'next/image'
import { copyAddress } from '../../../../../../utils/functions'
import { Toaster } from 'react-hot-toast'
import DropdownButton from '../../../../../../components/Buttons/DropdownButton'
import { useContract, useContractMetadata } from '@thirdweb-dev/react'

export interface PageProps {
  address: string
}

export default function NFTDropPage({ address }: PageProps) {
  const router = useRouter()

  const { contract } = useContract(address?.toString())
  const { data: metadata } = useContractMetadata(contract?.getAddress())

  return (
    <div className="w-screen h-full mt-5">
      <div className="max-w-[1060px] h-full w-full mx-auto">
        {metadata ? (
          <>
            <Button
              action={() => {
                router.push('/dashboard')
              }}
              type="ghost"
              label="Back"
              hasIcon
              icon={<CaretLeft size={24} />}
            />
            <div className="mt-6">
              <section className="w-full px-8 py-4 flex items-center gap-x-8 shadow-lg rounded-lg">
                <div>
                  <Image
                    width={150}
                    height={150}
                    src={metadata?.image}
                    alt=""
                    className="rounded-[4px]"
                  />
                </div>
                <div className="flex flex-col gap-y-1 w-full">
                  <div className="flex gap-x-5 items-center justify-between">
                    <h1 className="text-title1">{metadata?.name}</h1>
                    <div className="flex gap-x-5 flex-1 justify-end">
                      <button
                        onClick={async (e) => {
                          await e.preventDefault()
                          contract && copyAddress(contract.toString())
                        }}
                        className="flex items-center gap-x-2 rounded-md border border-purple300 px-4 py-1 max-w-fit cursor-pointer text-sm hover:bg-purple300 hover:text-white transition duration-500"
                      >
                        <CopySimple size={20} />
                        {address &&
                          address.slice(0, 4) +
                            '...' +
                            address.slice(address.length - 4, address.length)}
                      </button>
                      <button className="flex items-center gap-x-2 rounded-md border border-purple300 px-4 py-1 max-w-fit cursor-pointer text-sm hover:bg-purple300 hover:text-white transition duration-500">
                        <Code size={20} />
                      </button>
                      <button className="flex items-center gap-x-2 rounded-md px-4 py-1 max-w-fit cursor-pointer text-sm bg-purple300 text-white font-medium hover:bg-purple500 transition duration-500">
                        <Gear size={20} />
                        Settings
                      </button>
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <p className="break-words text-sm max-w-md">
                      {metadata?.description}
                    </p>
                    <DropdownButton />
                  </div>
                </div>
              </section>
              <section className="mt-8 w-full flex-col">
                <a
                  href={`/dashboard/${contract}`}
                  className={`px-4 border-b-2 border-transparent py-2 border-b-attention active:border-b-purple300 transition duration-300 text-lg ${
                    router.pathname === `/dashboard/${contract}` ? 'active' : ''
                  }`}
                >
                  Claim Phases
                </a>
                <div className="border-b-2 border-b-gray300 mt-1"></div>

                <div className="w-full flex items-start justify-between mt-5">
                  <p>
                    You need to create a claim phase in order for users to claim
                    your NFTs.
                  </p>
                </div>

                <div className="w-full px-8 pb-7 pt-3 border border-purple300 rounded-xl mt-4 font-kanit font-light">
                  <span className="block">Supply</span>
                  <div className="flex justify-between mt-4">
                    <div className="w-[280px] flex-col text-center py-5 border border-gray300 rounded-lg">
                      <p>Claimed</p>
                      <span>0</span>
                    </div>
                    <div className="w-[280px] flex-col text-center py-5 border border-gray300 rounded-lg">
                      <p>Unclaimed</p>
                      <span>0</span>
                    </div>
                    <div className="w-[280px] flex-col text-center py-5 text-white bg-purple300 font-medium rounded-lg">
                      <p>Total</p>
                      <span>0</span>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </>
        ) : (
          <div className="w-full">
            <p>Loading...</p>
            <CircleNotch
              size={96}
              className="animate-spin mx-auto"
              weight="light"
            />
          </div>
        )}
      </div>
      <Toaster />
    </div>
  )
}
