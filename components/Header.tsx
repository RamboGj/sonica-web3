import WalletConnector from './WalletConnector'

export default function Header() {
  return (
    <div className="w-screen bg-purple300 h-24 px-12">
      <div className="flex max-w-[1060px] justify-between items-center mx-auto h-full">
        <h1 className="text-white mx-auto md:mx-0 text-[40px] font-bold">
          Web 3.0
        </h1>
        <WalletConnector />
      </div>
    </div>
  )
}
