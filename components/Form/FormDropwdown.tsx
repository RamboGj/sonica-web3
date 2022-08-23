import { Menu, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import { ArrowDown, CaretDown } from 'phosphor-react'

export default function FormDropdown() {
  return (
    <div className="max-w-[280px] h-[46px] bg-white rounded-md border border-gray-300">
      <Menu as="div" className="w-full max-w-[280px] h-[-46px]">
        <div>
          <Menu.Button className="w-full h-[46px] flex items-center align-center justify-between px-5 rounded-md transition duration-500 bg-white focus:text-gray500 text-gray900 focus:outline-none hover:bg-gray300">
            Options
            <CaretDown size={28} aria-hidden="true" />
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
          <Menu.Items className="absolute mt-2 w-[280px] origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="px-1 py-1 ">
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? 'bg-violet-500 text-white' : 'text-gray-900'
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    {active ? (
                      <ArrowDown className="mr-2 h-5 w-5" aria-hidden="true" />
                    ) : (
                      <ArrowDown className="mr-2 h-5 w-5" aria-hidden="true" />
                    )}
                    Edit
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? 'bg-violet-500 text-white' : 'text-gray-900'
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    {active ? (
                      <ArrowDown className="mr-2 h-5 w-5" aria-hidden="true" />
                    ) : (
                      <ArrowDown className="mr-2 h-5 w-5" aria-hidden="true" />
                    )}
                    Duplicate
                  </button>
                )}
              </Menu.Item>
            </div>
            <div className="px-1 py-1">
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? 'bg-violet-500 text-white' : 'text-gray-900'
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    {active ? (
                      <ArrowDown className="mr-2 h-5 w-5" aria-hidden="true" />
                    ) : (
                      <ArrowDown className="mr-2 h-5 w-5" aria-hidden="true" />
                    )}
                    Archive
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? 'bg-violet-500 text-white' : 'text-gray-900'
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    {active ? (
                      <ArrowDown className="mr-2 h-5 w-5" aria-hidden="true" />
                    ) : (
                      <ArrowDown className="mr-2 h-5 w-5" aria-hidden="true" />
                    )}
                    Move
                  </button>
                )}
              </Menu.Item>
            </div>
            <div className="px-1 py-1">
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? 'bg-violet-500 text-white' : 'text-gray-900'
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    {active ? (
                      <ArrowDown
                        className="mr-2 h-5 w-5 text-violet-400"
                        aria-hidden="true"
                      />
                    ) : (
                      <ArrowDown
                        className="mr-2 h-5 w-5 text-violet-400"
                        aria-hidden="true"
                      />
                    )}
                    Delete
                  </button>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  )
}
