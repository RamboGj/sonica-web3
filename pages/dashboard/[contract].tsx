import { useRouter } from 'next/router'
import { CaretDown, CaretLeft, GearSix, Link } from 'phosphor-react'
import Button from '../../components/Buttons/Button'
import contractImage from '../../assets/contracts/nft-collection.png'
import Image from 'next/image'

export default function ContractPage() {
  const router = useRouter()

  const { contract } = router.query

  return (
    <div className="w-screen h-full mt-5">
      <div className="max-w-[1060px] h-full w-full mx-auto">
        <Button type="ghost" label="Back" hasIcon icon={<CaretLeft />} />
        <div>
          <section>
            <div>
              <Image width={72} height={72} src={contractImage} alt="" />
            </div>
            <div>
              <div>
                <h1>NFT Test</h1>
                <button>Address</button>
                <button>Iframe</button>
                <GearSix size={32} />
              </div>
              <div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quidem aspernatur cumque at dolores? Id alias ullam odio
                  porro!
                </p>
                <Button label="Create" hasIcon icon={<CaretDown />} />
              </div>
            </div>
            <div>
              <h3>Supply</h3>
              <div>
                <p>Claimed</p>
                <span>0</span>
              </div>
              <div>
                <p>Unclaimed</p>
                <span>0</span>
              </div>
              <div>
                <p>Total</p>
                <span>0</span>
              </div>
            </div>
          </section>
          <section>
            <Link>
              <a href="">Permissions</a>
            </Link>
            <Link>
              <a href="">Claim Phases</a>
            </Link>
            <div>
              <h3>Admin</h3>
              <p>
                Determine who can grant or revoke roles and modify settings on
                this contract.
              </p>
              <div>
                <input type="text" />
                <input type="text" />
              </div>
            </div>
            <div>
              <h3>Creator</h3>
              <p>Determine who can create new tokens on this contract.</p>
              <div>
                <input type="text" />
                <input type="text" />
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
