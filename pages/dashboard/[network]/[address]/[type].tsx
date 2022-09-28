import { useRouter } from 'next/router'
import { contractTypes } from '../../../../utils/constants'
import NFTDropPage from './components/ContractPages/NFTDropPage'
import NFTCollectionPage from './components/ContractPages/NFTCollectionPage'

export default function ContractPage() {
  const router = useRouter()

  const { address, type } = router.query

  if (address) {
    switch (type) {
      case contractTypes.NFTDrop:
        return <NFTDropPage address={address.toString()} />

      case contractTypes.NFTCollection:
        return <NFTCollectionPage address={address.toString()} />
    }
  }
}
