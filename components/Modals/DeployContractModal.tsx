import { Dialog, Transition } from '@headlessui/react'
import { X } from 'phosphor-react'
import { Fragment, useState } from 'react'
import FormInput from '../Form/FormInput'
import uploadImage from '../../assets/upload.svg'
import Image from 'next/image'
import Button from '../Buttons/Button'
import { ApexOptions } from 'apexcharts'
import dynamic from 'next/dynamic'
import { mainnets, SUPPORTED_CHAIN_ID, testnets } from '../../utils/network'
import NetworkCircleCard from '../Cards/NetworkCircleCard'
import ImageUploading, {
  ImageListType,
  ImageType,
} from 'react-images-uploading'
import { ChainId, useAddress, useNetwork, useSDK } from '@thirdweb-dev/react'
import { useNetworkContext } from '../../contexts/NetworkContext'

interface SwitchNetworkModalProps {
  isOpen: boolean
  close: () => void
  contractType:
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
  contractName: string
}

const Chart = dynamic(() => import('react-apexcharts'), {
  ssr: false,
})

export default function DeployContractModal({
  isOpen,
  close,
  contractType,
  contractName,
}: SwitchNetworkModalProps) {
  const address = useAddress()

  const [tokenName, setTokenName] = useState<string>('')
  const [tokenSymbol, setTokenSymbol] = useState<string>('')
  const [tokenDescription, setTokenDescription] = useState<string>('')
  const [primarySalesAddress, setPrimarySalesAddress] = useState<string>(
    address || '',
  )
  const [royaltiesPercentageAddress, setRoyaltiesPercentageAddress] =
    useState<string>('')
  const [royaltiesPercentage, setRoyaltiesPercentage] = useState<number>(0)
  const [selectedChainId, setSelectedChainId] = useState<ChainId>(0)
  const [isDeploying, setIsDeploying] = useState<boolean>(false)

  const platformFee = 10 * 100 // 10%
  const platformAddress = '0x1A8F4f7eB2134E8ad141A761aF528B74640712eC'

  const [images, setImages] = useState<ImageType[]>([])

  const sdk = useSDK()
  const [, switchNetwork] = useNetwork()

  const { setNetworkImage, networkImage } = useNetworkContext()

  async function cleanDeployModalData() {
    setTokenName('')
    setTokenSymbol('')
    setTokenDescription('')
    setPrimarySalesAddress(address || '')
    setRoyaltiesPercentage(0)
  }

  async function handleSwitchDeployChain(chainId: ChainId, chainLogo: string) {
    if (switchNetwork) {
      const switchChain = await switchNetwork(chainId)

      if (!switchChain.error) {
        setNetworkImage(chainLogo || networkImage)
        setSelectedChainId(chainId)
      } else {
        setSelectedChainId((previousChaindId) => previousChaindId)
      }
    }
  }

  async function deploy() {
    setIsDeploying(true)

    const contractData = {
      name: tokenName,
      symbol: tokenSymbol,
      description: tokenDescription,
      image: images[0].file,
      primary_sale_recipient: primarySalesAddress,
      fee_recipient: royaltiesPercentageAddress,
      seller_fee_basis_points: royaltiesPercentage * 100,
      platform_fee_recipient: platformAddress,
      platform_fee_basis_points: platformFee, // 10%
    }

    const contractAddress = await sdk?.deployer.deployBuiltInContract(
      contractType,
      contractData,
    )

    setIsDeploying(false)
    cleanDeployModalData()
    console.log('contractAddress: ', contractAddress)
  }

  const primarySalesPercentage: number = 100 - (royaltiesPercentage + 10)

  const chartOptions: ApexOptions = {
    series: [primarySalesPercentage, royaltiesPercentage, 10],
    colors: ['#730ECC', '#05D869', '#222222'],
    labels: ['Primary sales', 'Royalties', 'Platform Fee'],
    dataLabels: {
      enabled: false,
    },

    legend: {
      itemMargin: {
        horizontal: 50,
      },

      fontFamily: 'Kanit',
      fontWeight: 300,
      position: 'bottom',
      inverseOrder: false,
      width: 300,
    },
  }

  const onChange = (imageList: ImageListType) => {
    // data for submit
    console.log('image data: ', imageList)
    setImages(imageList)
  }
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={close}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-[840px] text-white px-10 flex flex-col justify-center pt-10 pb-16 transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    <div className="flex items-center justify-between">
                      <h1 className="text-title text-black text-center text-[30px] mx-auto">
                        Deploying {contractName}
                      </h1>
                      <X
                        size={32}
                        onClick={close}
                        className="text-black cursor-pointer hover:text-gray500 transtion duration-500 justify-end"
                      />
                    </div>
                  </Dialog.Title>
                  <div className="mt-12  mx-auto flex-col justify-center w-full h-full text-gray900">
                    <div className="flex-col items-start">
                      <div className="flex gap-x-4">
                        <ImageUploading
                          value={images}
                          onChange={onChange}
                          maxNumber={1}
                        >
                          {({
                            imageList,
                            onImageUpload,
                            onImageRemoveAll,
                            onImageUpdate,
                            onImageRemove,
                            isDragging,
                            dragProps,
                          }) => {
                            return (
                              <button
                                disabled={imageList.length > 0}
                                onClick={onImageUpload}
                                className={`w-[210px] h-[212px] flex-col justify-center rounded-md px-6 py-8 space-y-2 border hover:border-purple500 hover:bg-white hover:cursor-pointer transition duration-500 ${
                                  imageList.length > 0
                                    ? `bg-white border-purple300`
                                    : `bg-gray300 border-transparent`
                                }`}
                              >
                                {imageList.length > 0 ? (
                                  <Image
                                    className="flex justify-center m-auto"
                                    src={String(imageList[0].dataURL)}
                                    width={180}
                                    height={180}
                                    alt="uploaded image"
                                  />
                                ) : (
                                  <>
                                    <div className="w-full justify-center flex">
                                      <Image
                                        src={uploadImage}
                                        width={68}
                                        height={82}
                                        alt="upload image image"
                                      />
                                    </div>

                                    <div className="text-center space-y-2">
                                      <h1 className="text-purple500 font-light">
                                        Upload file
                                      </h1>

                                      <p className="text-xs px-4">
                                        Upload your NFT image file here
                                      </p>
                                    </div>
                                  </>
                                )}
                              </button>
                            )
                          }}
                        </ImageUploading>

                        <div className="items-start flex-col flex-1 space-y-2">
                          <div className="items-start">
                            <FormInput
                              value={tokenName}
                              setValue={setTokenName}
                              label="Name"
                              placeholder='e.g. "Bitcoin", "Ethereum" '
                            />
                          </div>
                          <div>
                            <FormInput
                              value={tokenSymbol}
                              setValue={setTokenSymbol}
                              label="Symbol"
                              placeholder='e.g. "BTC", "ETH" '
                            />
                          </div>
                          <div>
                            <p className="text-body text-black">
                              Lorem, ipsum dolor sit amet consectetur
                              adipisicing elit. Sed qui, quas fugit laudantium
                              quis facere,
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="mt-4">
                        <div className="w-full space-y-2">
                          <label
                            htmlFor="desc"
                            className="text-purple500 font-bold text-title"
                          >
                            Description
                          </label>
                          <textarea
                            value={tokenDescription}
                            onChange={(e) =>
                              setTokenDescription(e.target.value)
                            }
                            id="desc"
                            className="flex flex-1 w-full max-h-[80px] py-2 px-4 rounded-md border border-gray300 bg-gray-50 hover:bg-gray300 hover:border-purple300 transition duration-500 placeholder:text-sm focus:outline-none focus:border-purple300 focus:bg-white"
                            placeholder={`The description of your ${contractName}`}
                          />
                        </div>
                      </div>

                      <div className="flex py-5 px-6 border border-gray300 rounded-md mt-5 gap-x-5">
                        <div className="flex-col flex-1 space-y-4">
                          <div>
                            <FormInput
                              value={primarySalesAddress}
                              setValue={setPrimarySalesAddress}
                              label="Primary Sales"
                              placeholder="The wallet address that should receive the initial sales"
                            />
                          </div>

                          <div className="flex items-end gap-x-2">
                            <div className="flex-1">
                              <FormInput
                                value={royaltiesPercentageAddress}
                                setValue={setRoyaltiesPercentageAddress}
                                label="Royalties"
                                placeholder="The wallet address that should receive the royalties"
                              />
                            </div>

                            <div className="max-w-[72px] h-[46px] flex justify-center bg-white rounded-md border p-2 items-center">
                              <div className="w-[14px] text-gray500">{'%'}</div>
                              <input
                                maxLength={2}
                                value={royaltiesPercentage}
                                onChange={(e) =>
                                  setRoyaltiesPercentage(Number(e.target.value))
                                }
                                type="text"
                                className="w-full h-full rounded-md p-2 focus:border-0 focus:outline-none"
                              />
                            </div>
                          </div>
                          <div className="flex items-end gap-x-2">
                            <div className="flex-1 text-gray500">
                              <FormInput
                                value={platformAddress}
                                label="Platform Fee"
                                disabled
                              />
                            </div>

                            <div className="max-w-[72px] h-[46px] flex gap-x-2 justify-center mx-auto bg-white rounded-md border p-2 items-center text-gray500 disabled:bg-gray300 disabled:cursor-not-allowed">
                              <span className="disabled">{'%'}</span>
                              <input
                                maxLength={2}
                                disabled
                                value={platformFee / 100}
                                type="text"
                                className="w-full h-full rounded-md focus:border-0 focus:outline-none"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="max-w-[200px] hidden lg:flex justify-center pl-12">
                          <Chart
                            options={chartOptions}
                            width={325}
                            series={chartOptions.series}
                            type="donut"
                          />
                        </div>
                      </div>

                      <div className="mt-4">
                        <h1 className="text-title3 text-purple500">
                          Network / Chain
                        </h1>
                        <div className="flex justify-between mt-2">
                          <div>
                            <h3>Mainnets</h3>
                            <div className="flex gap-x-4 mt-2">
                              {mainnets.map((mainnet) => {
                                return (
                                  <NetworkCircleCard
                                    key={mainnet.id}
                                    onClick={() =>
                                      handleSwitchDeployChain(
                                        mainnet.id,
                                        mainnet.logo,
                                      )
                                    }
                                    selectedChainId={
                                      selectedChainId as SUPPORTED_CHAIN_ID
                                    }
                                    chainSymbol={mainnet.symbol}
                                    chainId={mainnet.id as SUPPORTED_CHAIN_ID}
                                    chainName={mainnet.name}
                                    image={mainnet.logo}
                                  />
                                )
                              })}
                            </div>
                          </div>
                          <div>
                            <h3>Testnets</h3>
                            <div className="flex gap-x-4 mt-2">
                              {testnets.map((testnet) => {
                                return (
                                  <NetworkCircleCard
                                    key={testnet.id}
                                    onClick={() =>
                                      handleSwitchDeployChain(
                                        testnet.id,
                                        testnet.logo,
                                      )
                                    }
                                    chainId={testnet.id as SUPPORTED_CHAIN_ID}
                                    selectedChainId={
                                      selectedChainId as SUPPORTED_CHAIN_ID
                                    }
                                    chainSymbol={testnet.symbol}
                                    chainName={testnet.name}
                                    image={testnet.logo}
                                  />
                                )
                              })}
                            </div>
                          </div>
                          <div className="items-end flex">
                            <Button
                              label="Deploy now"
                              type="success"
                              action={deploy}
                              isLoading={isDeploying}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}
