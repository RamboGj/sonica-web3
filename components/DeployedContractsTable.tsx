import Image from 'next/image'
import { ChainId, CommonContractOutputSchema } from '@thirdweb-dev/sdk'
import { z } from 'zod'
import logo from '../assets/contracts/nft-collection.png'
import { CopySimple, Trash } from 'phosphor-react'
import toast, { Toaster } from 'react-hot-toast'
import Link from 'next/link'
import {
  CHAINS_IDS_TRANSLATION_FOR_TABLE,
  CONTRACTS_TYPES_TRANSLATION_FOR_NAME,
  SUPPORTED_CHAIN_ID,
} from '../utils/constants'

interface ContractProps {
  address: string
  contractType:
    | 'custom'
    | 'nft-drop'
    | 'signature-drop'
    | 'nft-collection'
    | 'edition-drop'
    | 'edition'
    | 'token-drop'
    | 'token'
    | 'vote'
    | 'split'
    | 'marketplace'
    | 'pack'
    | 'multiwrap'
  metadata: () => Promise<z.output<typeof CommonContractOutputSchema>>
  chainId: ChainId
}

interface DeployedContractsTableProps {
  combinedContractsList: ContractProps[] | undefined
}

export default function DeployedContractsTable({
  combinedContractsList,
}: DeployedContractsTableProps) {
  async function copyAddress(address: string) {
    await navigator.clipboard.writeText(address)
    toast.success('Contract address successfully copied!')
  }

  return (
    <>
      <div
        id="table border top"
        className="w-full py-1 bg-gray300 rounded-t-xl"
      ></div>
      <table className="w-full">
        <thead className="w-full bg-gray300">
          <tr className="w-full grid grid-cols-10 pt-3 pb-4 px-12 font-thin">
            <th className="col-span-3 font-thin text-start">Name</th>
            <th className="col-span-2 font-thin text-start">Contract Type</th>
            <th className="col-span-2 font-thin text-start">Network</th>
            <th className="col-span-2 font-thin text-start">Address</th>
            <th className="col-span-1"></th>
          </tr>
        </thead>
        <tbody className="w-full divide-y-2 divide-gray300 rounded-xl">
          {combinedContractsList &&
            combinedContractsList.map((contract) => {
              const contractName = 'Nome do contrato'

              return (
                <Link
                  key={contract.address}
                  href={`/dashboard/${contract.address}`}
                >
                  <a>
                    <tr className="w-full grid grid-cols-10 text-sm py-2 px-12 text-thin font-thin hover:bg-gray300 hover:bg-opacity-75 hover:cursor-pointer transition duration-500 rounded-md">
                      <td className="col-span-3 my-auto text-purple300 font-medium hover:underline transtion duration-300">
                        {' '}
                        {contractName.length > 30
                          ? contractName.slice(0, 27) + '...'
                          : contractName}
                      </td>
                      <td className="col-span-2 my-auto">
                        <div className="flex items-center gap-x-2">
                          <Image width={32} height={44} src={logo} alt="" />
                          <p>
                            {
                              CONTRACTS_TYPES_TRANSLATION_FOR_NAME[
                                contract.contractType
                              ]
                            }
                          </p>
                        </div>
                      </td>
                      <td className="col-span-2 my-auto">
                        <div className="flex items-center gap-x-2">
                          <p>
                            {
                              CHAINS_IDS_TRANSLATION_FOR_TABLE[
                                contract.chainId as SUPPORTED_CHAIN_ID
                              ]
                            }
                          </p>
                          <div className="py-1 px-2 rounded-md bg-purple300 text-white">
                            {ChainId.Goerli || ChainId.Mumbai
                              ? 'Testnet'
                              : 'Mainnet'}
                          </div>
                        </div>
                      </td>
                      <td className="col-span-2 my-auto">
                        <div
                          onClick={async (e) => {
                            await e.preventDefault()
                            copyAddress(contract.address)
                          }}
                          className="flex items-center gap-x-2 rounded-md border border-purple300 px-4 py-1 max-w-fit cursor-pointer text-sm hover:bg-purple300 hover:text-white transition duration-500"
                        >
                          <CopySimple size={20} className="text-gray500" />
                          {contract.address.slice(0, 4) +
                            '...' +
                            contract.address.slice(
                              contract.address.length - 4,
                              contract.address.length,
                            )}
                        </div>
                      </td>
                      <td className="col-span-1 my-auto w-full ">
                        <Trash
                          className="text-danger hover:text-disabledDanger w-full h-full cursor-pointer transition duration-500"
                          onClick={() => console.log('remove this')}
                          width={72}
                        />
                      </td>
                    </tr>
                  </a>
                </Link>
              )
            })}
        </tbody>
        <Toaster />
      </table>
    </>
  )
}
