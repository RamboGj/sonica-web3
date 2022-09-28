import Image from 'next/image'
import { CommonContractOutputSchema } from '@thirdweb-dev/sdk'
import { z } from 'zod'
import logo from '../../assets/contracts/nft-collection.png'
import { CopySimple, Trash } from 'phosphor-react'
import { Toaster } from 'react-hot-toast'
import Link from 'next/link'
import { CONTRACTS_TYPES_TRANSLATION_FOR_TABLE } from '../../utils/constants'
import { CHAINS_IDS_TRANSLATION, SUPPORTED_CHAIN_ID } from '../../utils/network'
import { copyAddress } from '../../utils/functions'
import { memo } from 'react'
import { ChainId } from '@thirdweb-dev/react'

interface ContractProps {
  chainId: ChainId
  address: string
  contractType:
    | 'split'
    | 'nft-drop'
    | 'signature-drop'
    | 'nft-collection'
    | 'edition-drop'
    | 'edition'
    | 'token-drop'
    | 'token'
    | 'vote'
    | 'marketplace'
    | 'pack'
    | 'multiwrap'
    | 'custom'

  metadata: () => Promise<z.output<typeof CommonContractOutputSchema>>
}

interface DeployedContractsTableProps {
  combinedContractsList: ContractProps[] | undefined
}

export default function DeployedContractsTableComponent({
  combinedContractsList,
}: DeployedContractsTableProps) {
  const tableHeader = [
    { name: 'Name', colSpan: '3' },
    { name: 'Contract Type', colSpan: '2' },
    { name: 'Network', colSpan: '2' },
    { name: 'Address', colSpan: '2' },
    { name: '', colSpan: '1' },
  ]

  return (
    <>
      <div
        id="table border top"
        className="w-full py-0.5 bg-[#f8f7f7] rounded-t-xl"
      ></div>
      <table className="w-full">
        <thead className="w-full bg-[#f8f7f7]">
          <tr className="grid grid-cols-10 pt-2 pb-3 px-12">
            {tableHeader.map((head) => {
              return (
                <th
                  key={head.name}
                  className={`col-span-${head.colSpan} font-thin text-start text-sm`}
                >
                  {head.name}
                </th>
              )
            })}
          </tr>
        </thead>
        <tbody className="w-full divide-y-2 divide-gray300 rounded-xl">
          {combinedContractsList &&
            combinedContractsList.map((contract) => {
              return (
                <>
                  <Link
                    key={contract.address}
                    href={`/dashboard/${CHAINS_IDS_TRANSLATION[
                      contract.chainId as unknown as SUPPORTED_CHAIN_ID
                    ].toLowerCase()}/${contract.address}/${
                      contract.contractType
                    }`}
                  >
                    <a>
                      <tr className="w-full grid grid-cols-10 text-sm py-2 px-12 text-thin font-thin hover:bg-gray300 hover:bg-opacity-75 hover:cursor-pointer transition duration-500 rounded-md">
                        <td className="col-span-3 my-auto text-purple300 font-medium hover:underline transtion duration-300">
                          Nome Provisório
                        </td>
                        <td className="col-span-2 my-auto">
                          <div className="flex items-center gap-x-2">
                            <Image width={32} height={44} src={logo} alt="" />
                            <p>
                              {
                                CONTRACTS_TYPES_TRANSLATION_FOR_TABLE[
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
                                CHAINS_IDS_TRANSLATION[
                                  contract.chainId as unknown as SUPPORTED_CHAIN_ID
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
                          <button
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
                          </button>
                        </td>
                        <td className="col-span-1 my-auto w-full ">
                          <Trash
                            className="text-danger hover:text-disabledDanger w-full h-full cursor-pointer transition duration-500"
                            onClick={() => console.log('remove this')}
                            width={56}
                          />
                        </td>
                      </tr>
                    </a>
                  </Link>
                </>
              )
            })}
        </tbody>
        <Toaster />
      </table>
    </>
  )
}

export const DeployedContractsTable = memo(DeployedContractsTableComponent)
