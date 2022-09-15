import { toast } from 'react-hot-toast'

export async function copyAddress(address: string) {
  await navigator.clipboard.writeText(address)
  toast.success('Contract address successfully copied!')
}
