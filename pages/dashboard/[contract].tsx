import { useRouter } from 'next/router'

export default function ContractPage() {
  const router = useRouter()

  const { contract } = router.query

  return (
    <div>
      <h1>{contract}</h1>
    </div>
  )
}
