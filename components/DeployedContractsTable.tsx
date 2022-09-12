import Image from 'next/image'

import logo from '../assets/contracts/nft-collection.png'
import { CopySimple, Trash } from 'phosphor-react'
import toast, { Toaster } from 'react-hot-toast'
import { useRouter } from 'next/router'

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
  metadata: () => Promise<ContractProps>
}

interface DeployedContractsTableProps {
  contracts: ContractProps[] | undefined
}

export default function DeployedContractsTable({
  contracts,
}: DeployedContractsTableProps) {
  const router = useRouter()

  async function copyAddress(address: string) {
    await navigator.clipboard.writeText(address)
    toast.success('Contract address successfully copied!')
  }

  return (
    <table className="w-full">
      <thead className="w-full bg-gray300 shadow-xl rounded-md">
        <tr className="w-full grid grid-cols-8 py-4 px-12 font-thin">
          <th className="col-span-1"></th>
          <th className="col-span-2 font-thin text-start">Name</th>
          <th className="col-span-2 font-thin text-start">Contract Type</th>
          <th className="col-span-2 font-thin text-start">Address</th>
          <th className="col-span-1"></th>
        </tr>
      </thead>
      <tbody className="w-full rounded-md divide-y-2 divide-gray300">
        {contracts &&
          contracts.map((contract) => {
            return (
              <tr
                onClick={() => router.push(`/dashboard/${contract.address}`)}
                className="w-full grid grid-cols-8 py-2 px-12 text-thin font-thin hover:scale-105 hover:bg-gray100 hover:cursor-pointer transition duration-500"
                key={contract.address}
              >
                <td className="col-span-1">
                  <Image width={72} height={94} src={logo} alt="" />
                </td>
                <td className="col-span-2 my-auto text-purple300 font-medium">
                  Nome do contrato
                </td>
                <td className="col-span-2 my-auto">NFT Collection</td>
                <td className="col-span-2 my-auto">
                  <div
                    onClick={() => copyAddress(contract.address)}
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
            )
          })}
      </tbody>
      <Toaster />
    </table>
  )
}
