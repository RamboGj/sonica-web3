import { ExternalProvider } from '@ethersproject/providers'

/* eslint-disable no-unused-vars */
declare global {
  interface Window {
    ethereum?: ExternalProvider
  }
}
/* eslint-disable no-unused-vars */
