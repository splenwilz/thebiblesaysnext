'use client'

import React, { Disclosure, Menu, Transition } from '@headlessui/react'
import {
  Bars3Icon,
  ChevronDownIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import logobg from '../assets/images/logo.svg'
import logo from '../assets/images/thebiblesays.svg'

import LtLogo from '@/assets/images/logo/thebiblesaysdarkmode.svg'
import { Fragment, useState } from 'react'
import LogoSection from '../core/LogoSection'
import Link from 'next/link'
import { useGenerationStore } from '@/store/tbsstore'
import { useParams, usePathname } from 'next/navigation'
import Image from 'next/image'

interface NavigationItem {
  name: string
  href: string
  current: boolean
}

const navigation: NavigationItem[] = [
  { name: 'Commentary', href: '/commentary', current: false },
  { name: 'Bible', href: '/bible', current: false },
  { name: 'Tough Topics', href: '/tough-topics', current: false },
]

const hiddennavigation = [
  { name: 'Commentary', href: '/commentary', current: false },
  { name: 'Bible', href: '/bible', current: false },
  { name: 'Tough Topics', href: '/tough-topics', current: false },
  { name: 'New to the Bible?', href: './new-to-bible', current: false },
  { name: 'Map', href: '/maps', current: false },
  { name: 'Timeline', href: '/timeline', current: false },
]
function classNames(...classes: Array<string | boolean>): string {
  return classes.filter(Boolean).join(' ')
}

export default function Navigation() {
  const [expandedItems, setExpandedItems] = useState<number[]>([])

  const handleToggleExpand = (itemId: number) => {
    setExpandedItems((prevExpandedItems) =>
      prevExpandedItems.includes(itemId)
        ? prevExpandedItems.filter((id) => id !== itemId)
        : [...prevExpandedItems, itemId],
    )
  }

  const pathname = usePathname()

  // const { isLoading, setIsLoading } = useGenerationStore()
  // setIsLoading(true)
  // console.log(isLoading)

  return (
    <Disclosure as="nav" className="px-10 lg:px-40 md:px-7 sm:px-7">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl py-5 sm:px-6 lg:px-1">
            <div className="relative flex h-16 items-center justify-between">
              <div className="flex flex-1 items-center justify-start sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center relative">
                  {/* <LogoSection
                    className="custom-class"
                    logobg={logobg}
                    logo={logo}
                  /> */}
                  <Link href={pathname === '/about' ? '../' : ''}>
                    <Image src={LtLogo} alt="The Bible Says" width={120} />
                  </Link>
                </div>
                <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
                  {/* Mobile menu button */}
                  <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400  hover:text-white ">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <div className="mr-2 p-2 border border-stone-400">
                        <XMarkIcon
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
                      </div>
                    ) : (
                      <div className="mr-2 p-2 border border-stone-400">
                        <Bars3Icon
                          className="block h-6 w-6 "
                          aria-hidden="true"
                        />
                      </div>
                    )}
                  </Disclosure.Button>
                </div>
              </div>

              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current ? 'text-white' : 'text-white',
                          'px-3 py-2 text-sm font-medium font-lexend',
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Tools */}
                <Menu as="div" className="relative ml-3 hidden md:block">
                  <div>
                    <Menu.Button className="flex rounded-full text-sm ">
                      <span className="sr-only">Open user menu</span>

                      <a
                        href="#tools"
                        className={classNames(
                          'text-white',
                          'rounded-md flex items-center px-3 py-2 text-sm font-medium',
                        )}
                      >
                        <span>Tools</span>
                        <ChevronDownIcon className="w-5 h-5 ml-1" />
                      </a>
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
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <Link
                            href="./maps"
                            className={classNames(
                              active ? 'bg-gray-100' : '',
                              'block px-4 py-2 text-sm text-gray-700',
                            )}
                          >
                            Maps
                          </Link>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <Link
                            href="./timeline"
                            className={classNames(
                              active ? 'bg-gray-100' : '',
                              'block px-4 py-2 text-sm text-gray-700',
                            )}
                          >
                            Timeline
                          </Link>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {hiddennavigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? ' text-white' : 'hover:text-white',
                    'block rounded-md px-3 text-thebiblesayswhite-100 font-medium py-2 text-[20px] font-lexend text-center',
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
