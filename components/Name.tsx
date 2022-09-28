import { useContract, useContractMetadata } from '@thirdweb-dev/react'

interface NameProps {
  address: string
}

export default function Name({ address }: NameProps) {
  const { contract } = useContract(address)
  const { data } = useContractMetadata(contract?.getAddress())

  console.log('name: ', data?.name)

  return <div>{data?.description}</div>
}
