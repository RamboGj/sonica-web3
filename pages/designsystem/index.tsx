// import Button from '../../components/Button'
// import FormDropdow from '../../components/Form/FormDropwdown'
// import FormInput from '../../components/Form/FormInput'
import logoSonica from '../../assets/logo-sonica.svg'
import Image from 'next/image'

export default function DesignSystem() {
  return (
    <div className="max-w-screen">
      <header className="flex px-12 md:px-48 justify-center md:justify-between items-center h-[200px] bg-white">
        <Image src={logoSonica} width={300} height={150} alt="Logo da Sonica" />

        <div className="text-right space-y-2 hidden md:block">
          <p className="text-subtitle">18/08/2022</p>
          <div>
            <h1 className="text-title1">STYLE GUIDE 1.0</h1>
            <h3 className="text-title3">V2 Web3 Module</h3>
          </div>
        </div>
      </header>
      <main className="w-full px-12 md:px-48 justify-center md:justify-between bg-gray300 max-h-fit">
        <div className="flex flex-wrap justify-between py-24 space-y-12 md:space-y-0">
          <div className="col-span-1 max-w-[350px] w-full">
            <h1 className="text-[40px] text-gray500">01 TYPEFACE</h1>
            <div className="w-full p-[2px] bg-gray500 rounded-full"></div>

            <div className="mt-12 space-y-16">
              <div className="font-kanit">
                <h1 className="text-title">Title: Kanit</h1>
                <ul className="flex space-x-12">
                  <li className="flex flex-col font-thin">
                    <p className="text-[60px]">Aa</p>
                    <p>Thin</p>
                  </li>
                  <li className="flex flex-col font-light">
                    <p className="text-[60px]">Aa</p>
                    <p>Light</p>
                  </li>
                  <li className="flex flex-col font-medium">
                    <p className="text-[60px]">Aa</p>
                    <p>Medium</p>
                  </li>
                  <li className="flex flex-col font-bold">
                    <p className="text-[60px]">Aa</p>
                    <p>Bold</p>
                  </li>
                </ul>
              </div>
              <div className="font-worksans">
                <p className="text-md">Body: Work Sans</p>
                <ul className="flex space-x-12">
                  <li className="flex flex-col font-thin">
                    <p className="text-[60px]">Aa</p>
                    <p>Thin</p>
                  </li>
                  <li className="flex flex-col font-light">
                    <p className="text-[60px]">Aa</p>
                    <p>Light</p>
                  </li>
                  <li className="flex flex-col font-medium">
                    <p className="text-[60px]">Aa</p>
                    <p>Medium</p>
                  </li>
                  <li className="flex flex-col font-bold">
                    <p className="text-[60px]">Aa</p>
                    <p>Bold</p>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col space-y-4 font-kanit text-gray500">
                <p className="font-light text-[38px]">
                  Title 1 / Kanit Light / 38px
                </p>
                <p className="font-light text-[30px]">
                  Title2 / Kanit Light / 30px
                </p>
                <p className="font-medium text-[20px]">
                  Title3 / Kanit Medium / 20px
                </p>
                <p className="font-medium text-[16px]">
                  Subtitle / Kanit Medium / 16px
                </p>
                <p className="font-worksans font-regular text-[14px]">
                  Body / Work Sans / 14px
                </p>
                <p className="font-worksans font-regular text-[16px]">
                  Button / Work Sans Medium / 16px
                </p>
              </div>
            </div>
          </div>
          <div className="col-span-1 w-[350px]">
            <h1 className="text-[40px] text-gray500">02 PARAGRAPH</h1>
            <div className="w-full p-[2px] bg-gray500 rounded-full"></div>

            <div className="mt-12 space-y-16">
              <article className="space-y-10">
                <div>
                  <h1 className="font-kanit text-title1 font-light text-gray500">
                    Lorem ipsum dolor
                  </h1>
                  <p className="mt-6 text-body text-gray500">
                    Nam vestibulum turpis a diam molestie, in fringilla sapien
                    placerat. Vestibulum vitae dui ullamcorper, vehicula lacus
                    id, ullamcorper purus. Curabitur quis risus vitae metus
                    dictum viverra non a massa. Nullam cursus, tellus vitae
                    luctus accumsan, felis sem ultricies tortor, sit amet
                    tincidunt est erat et dui.
                  </p>
                </div>

                <div>
                  <h3 className="font-kanit text-title3 text-gray500">
                    Lorem ipsum dolor
                  </h3>
                  <p className="mt-3 text-body text-gray500">
                    Nam vestibulum turpis a diam molestie, in fringilla sapien
                    placerat. Vestibulum vitae dui ullamcorper, vehicula lacus
                    id, ullamcorper purus. Curabitur quis risus vitae metus
                    dictum viverra non a massa. Nullam cursus, tellus vitae
                    luctus accumsan, felis sem ultricies tortor, sit amet
                    tincidunt est erat et dui.
                  </p>
                </div>
              </article>
            </div>
          </div>
          <div className="col-span-1 w-[350px]">
            <h1 className="text-[40px] text-gray500">03 COLOR PALLETE</h1>
            <div className="w-full p-[2px] bg-gray500 rounded-full"></div>

            <div className="space-y-8 text-gray500">
              <h1 className="text-title3 text-gray900 mt-10 mb-4">
                Primary Colors
              </h1>
              <div className="flex flex-wrap justify-around space-y-4">
                <div className="w-[100px] flex-col text-center mt-4">
                  <div className="w-[100px] h-[100px] rounded-md bg-purple100"></div>
                  <p>180, 94, 255</p>
                  <p>#B45EFF</p>
                </div>
                <div className="w-[100px] flex-col text-center">
                  <div className="w-[100px] h-[100px] rounded-md bg-purple300"></div>
                  <p>114, 19, 254</p>
                  <p>#9013FE</p>
                </div>
                <div className="w-[100px] flex-col text-center">
                  <div className="w-[100px] h-[100px] rounded-md bg-purple500"></div>
                  <p>115, 14, 204</p>
                  <p>#730ECC</p>
                </div>
                <div className="w-[100px] flex-col text-center">
                  <div className="w-[100px] h-[100px] rounded-md bg-purple700"></div>
                  <p>90, 47, 128</p>
                  <p>#5A2f80</p>
                </div>
                <div className="w-[100px] flex-col text-center">
                  <div className="w-[100px] h-[100px] rounded-md bg-purple900"></div>
                  <p>72, 9, 128</p>
                  <p>#480980</p>
                </div>
              </div>
              <div className="w-[350px] h-5 flex mt-6">
                <div className="w-[70px] h-full bg-purple100"></div>
                <div className="w-[70px] h-full bg-purple300"></div>
                <div className="w-[70px] h-full bg-purple500"></div>
                <div className="w-[70px] h-full bg-purple700"></div>
                <div className="w-[70px] h-full bg-purple900"></div>
              </div>
            </div>
            <div className="text-gray500">
              <h1 className="text-title3 text-gray900 mt-10 mb-4">
                Gray Scale
              </h1>
              <div className="flex flex-wrap justify-around space-y-4">
                <div className="w-[100px] flex-col text-center mt-4">
                  <div className="w-[100px] h-[100px] rounded-md bg-white"></div>
                  <p>255, 255, 255</p>
                  <p>#FFFFFF</p>
                </div>
                <div className="w-[100px] flex-col text-center">
                  <div className="w-[100px] h-[100px] rounded-md bg-gray300 border border-gray700"></div>
                  <p>236, 236, 236</p>
                  <p>#ECECEC</p>
                </div>
                <div className="w-[100px] flex-col text-center">
                  <div className="w-[100px] h-[100px] rounded-md bg-gray500"></div>
                  <p>175, 175, 175</p>
                  <p>#AFAFAF</p>
                </div>
                <div className="w-[100px] flex-col text-center">
                  <div className="w-[100px] h-[100px] rounded-md bg-gray700"></div>
                  <p className="">74, 74, 74</p>
                  <p>#4a4a4a</p>
                </div>
                <div className="w-[100px] flex-col text-center">
                  <div className="w-[100px] h-[100px] rounded-md bg-gray900"></div>
                  <p>34, 34, 34</p>
                  <p>#222222</p>
                </div>
              </div>
              <div className="w-[350px] h-5 flex mt-6">
                <div className="w-[70px] h-full bg-white"></div>
                <div className="w-[70px] h-full bg-gray300"></div>
                <div className="w-[70px] h-full bg-gray500"></div>
                <div className="w-[70px] h-full bg-gray700"></div>
                <div className="w-[70px] h-full bg-gray900"></div>
              </div>
            </div>
            <div>
              <h1 className="text-title3 mt-10 mb-4">Gradients</h1>
              <div className="flex flex-wrap justify-around space-y-4">
                <div className="w-[100px] flex-col text-center mt-4 text-gray500">
                  <div className="w-[100px] h-[100px] rounded-md bg-gradient-to-b from-purple300 to-gray900"></div>
                  <p>144, 19, 254</p>
                  <p>#9013FE</p>
                  <p>x</p>
                  <p>34, 34, 34</p>
                  <p>#222222</p>
                </div>
                <div className="w-[100px] flex-col text-center text-gray500">
                  <div className="w-[100px] h-[100px] rounded-md bg-gradient-to-b from-gray300 to-purple300"></div>
                  <p>240, 240, 240</p>
                  <p>#F0F0F0</p>
                  <p>x</p>
                  <p>144, 19, 254</p>
                  <p>#9013FE</p>
                </div>
              </div>
              <div className="w-[350px] h-5 flex mt-6">
                <div className="w-[175px] h-full bg-gradient-to-r from-purple300 to-gray900"></div>
                <div className="w-[175px] h-full bg-gradient-to-r from-gray300 to-purple300"></div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>

    // <div className="mx-auto w-full flex flex-col justify-center">
    //   <div className="mx-auto">
    //     <h1>04. BUTTONS</h1>
    //     <div className="space-x-12">
    //       <Button type="danger" disabled />
    //       <Button type="danger" />
    //       <Button type="continue" />
    //       <Button type="success" />
    //       <Button type="ghost" />
    //       <Button />
    //     </div>
    //   </div>

    //   <div className="mx-auto mt-32">
    //     <h1>05. FORMS</h1>
    //     <FormInput label="Digite" placeholder="digite..." error />
    //     <div className="mt-12">
    //       <FormDropdow />
    //     </div>
    //   </div>
    // </div>
  )
}
