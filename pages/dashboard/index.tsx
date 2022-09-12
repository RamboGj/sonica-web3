import { ChainId, useAddress, useDisconnect } from '@thirdweb-dev/react'
import { useRouter } from 'next/router'
import { CaretLeft, Plus, Wallet } from 'phosphor-react'
import { useEffect } from 'react'
import { Toaster } from 'react-hot-toast'
import Button from '../../components/Buttons/Button'
import DeployedContractsTable from '../../components/DeployedContractsTable'
import { useContractList } from '../../hooks/useList'

export default function Dashboard() {
  const disconnect = useDisconnect()
  const router = useRouter()
  const address = useAddress()

  const contracts = useContractList(ChainId.Mumbai, address)

  useEffect(() => {
    console.log('contrats: ', contracts.data)
  }, [contracts])

  useEffect(() => {
    console.log(contracts)
  }, [])

  if (contracts) {
    return (
      <div className="w-screen px-12">
        <div className="pt-5 max-w-[1060px] mx-auto flex justify-between items-center">
          <div>
            <Button
              label="Back"
              hasIcon
              icon={<CaretLeft size={24} />}
              action={disconnect}
              type="ghost"
            />
          </div>
          <div>
            <Button
              action={() => router.push('/contracts/list')}
              label="Deploy new"
            />
          </div>
        </div>
        <div className="max-w-[1060px] mx-auto flex justify-between items-center mt-12">
          <div className="w-full h-full flex flex-col items-center justify-center bg-white shadow-xl rounded-md mx-auto">
            <DeployedContractsTable contracts={contracts.data} />
          </div>
        </div>
        <Toaster position="top-center" />
      </div>
    )
  }

  if (!contracts) {
    return (
      <div className="w-screen h-[calc(100vh_-_6rem)] px-12">
        <div className="pt-5 max-w-[1060px] mx-auto">
          <Button
            label="Back"
            hasIcon
            icon={<CaretLeft size={24} />}
            action={disconnect}
            type="ghost"
          />
        </div>
        <div className="max-w-[1060px] mx-auto flex justify-between items-center mt-12">
          <div className="w-8/12 h-full flex flex-col items-center justify-center bg-white shadow-xl py-24 px-8 rounded-md mx-auto">
            <Wallet size={96} className="text-purple300 justify-center" />
            <h1 className="mt-10 text-title1">
              You don {"'t"} have any contracts
            </h1>
            <p className="text-title3">Deploy a new contract to start</p>

            <div className="mt-8">
              <Button
                action={() => router.push('/contracts/list')}
                hasIcon
                icon={<Plus size={24} />}
                label="Deploy new contract"
                type="ghost"
              />
            </div>
          </div>
        </div>
        <Toaster position="top-center" />
      </div>
    )
  }
}
