import { useRouter } from 'next/router'
import { CaretLeft } from 'phosphor-react'
import Button from '../../../components/Buttons/Button'
import DeployableContractsCard from '../../../components/Cards/DeployableContractsCard'
import { useState } from 'react'
import { deployableContractsList } from '../../../utils/constants'
import dynamic from 'next/dynamic'

const DeployContractModal = dynamic(
  () => import('../../../components/Modals/DeployContractModal'),
)

export default function ContractsList() {
  const [isDeployContractModal, setIsDeployContractModal] =
    useState<boolean>(false)

  const router = useRouter()

  return (
    <div className="max-w-[1060px] mx-auto flex-col justify-between items-center">
      <div className="pt-5">
        <Button
          label="Back"
          hasIcon
          icon={<CaretLeft size={24} />}
          action={() => router.push('/dashboard')}
          type="ghost"
        />
      </div>
      <div className="mb-10 mt-8">
        <h1 className="text-title1 text-3xl">Deploy pre-built contracts</h1>
        <p className="text-title3 text-md">
          These are the contracts you are able to deploy:
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 w-full h-full place-items-center gap-y-12">
        {deployableContractsList.map((contract) => {
          return (
            <>
              <DeployableContractsCard
                onClick={() => setIsDeployContractModal(true)}
                image={contract.image}
                name={contract.name}
                description={contract.description}
              />
              <DeployContractModal
                contractName={contract.name}
                contractType={contract.type}
                close={() => setIsDeployContractModal(false)}
                isOpen={isDeployContractModal}
              />
            </>
          )
        })}
      </div>
    </div>
  )
}
