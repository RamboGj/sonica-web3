import WalletConnector from './WalletConnector'

export default function Header() {
  return (
    <div className="w-screen bg-purple300 h-24 px-12">
      <div className="flex max-w-[1060px] justify-between items-center mx-auto h-full">
        <a className="text-white text-[24px] md:text-[40px] font-bold" href="/">
          Web3
        </a>
        <WalletConnector />
      </div>
    </div>
  )
}
