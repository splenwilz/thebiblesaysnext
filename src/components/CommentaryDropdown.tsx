'use client'
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import React, { useState } from 'react'

interface opt {
  optionlabel: string
  link: string
}

interface CommentaryDropdownProps {
  // options: string[]
  options: opt[]
  buttonClass: string
  dropdownContainerClass: string
  dropDownItemClass: string
  selectedOption: string
  handleOptionClick: (option: string) => void
}

const CommentaryDropdown: React.FC<CommentaryDropdownProps> = ({
  options,
  buttonClass,
  dropdownContainerClass,
  dropDownItemClass,
  selectedOption,
  // handleOptionClick,
}) => {
  const [isOpen, setIsOpen] = useState(false)

  const handleToggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="relative inline-block text-left mb-3  min-[948px]:mb-0">
      <div className="flex flex-row justify-between">
        <button
          type="button"
          className={`inline-flex font-lexend justify-between w-44 md:w-56 border shadow-sm p-2 pl-3 pr-3 bg-white text-[15px] focus:outline-none ${buttonClass}`}
          onClick={handleToggle}
        >
          {selectedOption ? selectedOption : 'Commentary'}
          {isOpen ? (
            <ChevronUpIcon className="w-5 pl-2" />
          ) : (
            <ChevronDownIcon className="w-5 pl-2" />
          )}
        </button>
      </div>
      {isOpen && (
        <div
          className={`origin-top-right absolute z-10 right-0 mt-2 w-44 md:w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none ${dropdownContainerClass}`}
        >
          <div className="py-1" role="none">
            {options.map((option) => (
              <Link
                key={option.optionlabel}
                href={`../${option.link}`}
                className={`block px-4 py-2 ml-1 mr-1 font-lexend  text-[15px] text-gray-700 hover:bg-[#10101014] dark:hover:bg-thebiblesayswhite-8 dark:hover:text-gray-300 ${dropDownItemClass}`}
                role="menuitem"
              >
                {option.optionlabel}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default CommentaryDropdown
