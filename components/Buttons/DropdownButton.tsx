import { Menu, Transition } from '@headlessui/react'
import React, { Fragment } from 'react'
import { CaretDown, IconProps, Square, SquaresFour } from 'phosphor-react'

interface DropdownButtonOptionsProps {
  name: string
  icon: React.ForwardRefExoticComponent<
    IconProps & React.RefAttributes<SVGSVGElement>
  >
}

export default function DropdownButton() {
  const dropdownOptions: DropdownButtonOptionsProps[] = [
    { name: 'Single NFT', icon: Square },
    { name: 'Multiple NFTs', icon: SquaresFour },
  ]

  return (
    <div className="max-w-[280px] h-[46px] bg-white rounded-md border border-gray-300">
      <Menu as="div" className="w-full max-w-[280px] h-[-46px]">
        <div>
          <Menu.Button className="w-full h-[46px] flex items-center gap-x-3 px-8 bg-purple300 text-white rounded-md hover:bg-purple500 focus:outline-none transition duration-500">
            <p>Create</p>
            <CaretDown weight="light" size={24} />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute mt-2 w-[180px] origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            {dropdownOptions.map((opt) => {
              return (
                <div key={opt.name} className="px-1 py-1">
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        className={`${
                          active ? 'bg-violet-500 text-white' : 'text-gray-900'
                        } group flex w-full gap-x-2 items-center rounded-md px-2 py-2 text-sm transition duration-300 hover:scale-105`}
                      >
                        <opt.icon size={24} weight="light" />
                        {opt.name}
                      </button>
                    )}
                  </Menu.Item>
                </div>
              )
            })}
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  )
}
