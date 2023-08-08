'use client'
import React, { Disclosure } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import CommentarySearch from '../core/CommentarySearch'

// import useFetch from '../hooks/useFetch'
// import { NavLink } from 'react-router-dom'
import { useState } from 'react'
import Link from 'next/link'
import { useGenerationStore } from '@/store/tbsstore'
import Image from 'next/image'

import DkLogo from '@/assets/images/logo/thebiblesays.svg'
import LtLogo from '@/assets/images/logo/thebiblesaysdarkmode.svg'

//   logobg: 'url("./src/assets/images/logo/thebiblesays.svg")',
//   logobgd: 'url("./src/assets/images/logo/thebiblesaysdarkmode.svg")',

const hiddennavigation = [
  { name: 'Commentary', href: '/commentary', current: false },
  { name: 'Bible', href: '/bible', current: false },
  { name: 'Tough Topics', href: '/tough-topics', current: false },
  { name: 'Map', href: '/maps', current: false },
  { name: 'Timeline', href: '/timeline', current: false },
]

function classNames(...classes: Array<string | boolean>): string {
  return classes.filter(Boolean).join(' ')
}
const handleSearchSubmit = (query: string) => {
  console.log('Search query:', query)
}

const CommentaryNavigation = () => {
  // const { data, error, loading } = useFetch()

  const { darkThemeColor } = useGenerationStore()
  const [searchValue, setSearchValue] = useState('')

  return (
    <Disclosure as="nav" className="">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl py-5 sm:px-6 lg:px-1">
            <div className="relative flex h-16 items-center justify-between">
              <div className="flex flex-1 items-center justify-start sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center relative">
                  <Link href="../" className="">
                    {!darkThemeColor ? (
                      <Image src={DkLogo} alt="The Bible Says" />
                    ) : (
                      <Image src={LtLogo} alt="The Bible Says" />
                    )}
                    {/* <div className="dark:bg-logobgd bg-logobg bg-cover w-32 h-10"></div> */}
                  </Link>
                </div>

                <div className="absolute inset-y-0 right-0 flex items-center ">
                  <CommentarySearch
                    onSubmit={handleSearchSubmit}
                    inputClass=""
                    formClass="hidden md:block"
                    searchValue={searchValue}
                    onBlur={() => {
                      console.log('Blur')
                    }}
                    onFocus={() => {
                      console.log('Focus')
                    }}
                  />

                  {/* Mobile menu button */}
                  <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400  hover:text-black ">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <div className="mr-2 p-2 border border-gray-300 ">
                        <XMarkIcon
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
                      </div>
                    ) : (
                      <div className="mr-2 p-2 border border-gray-300 ">
                        <Bars3Icon
                          className="block h-6 w-6 "
                          aria-hidden="true"
                        />
                      </div>
                    )}
                  </Disclosure.Button>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"></div>
            </div>
          </div>

          <Disclosure.Panel className="flex flex-row justify-end mr-4">
            <div className="space-y-1 px-2 pb-3 pt-2 z-10 bg-thebiblesayswhite-100 dark:bg-thebiblesaysblack-100 dark:border-thebiblesayswhite-8 w-60 absolute border shadow-sm -mt-6">
              {hiddennavigation.map((item, index) => (
                <Disclosure.Button
                  key={index}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? '  text-thebiblesaysblack-100 dark:text-thebiblesayswhite-100'
                      : 'hover:text-gray-400 dark:hover:text-gray-300',
                    'block px-3 text-thebiblesaysblack-100 hover:bg-[#10101014] dark:text-thebiblesayswhite-100 dark:hover:bg-thebiblesayswhite-8 font-[500] py-2 text-[15px] font-lexend ',
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

export default CommentaryNavigation
