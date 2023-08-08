'use client'
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline'
import React, { useState } from 'react'

interface Option {
  id: number
  title: string
  date: string
  content: string
}

interface CommentaryTimelineDropdownProps {
  options: Option[]
  buttonClass: string
  dropdownContainerClass: string
  dropDownItemClass: string
  selectedOption: React.ReactNode
  handleOptionClick: (title: string, date: string) => void
}

const CommentaryTimelineDropdown: React.FC<CommentaryTimelineDropdownProps> = ({
  options,
  buttonClass,
  dropdownContainerClass,
  dropDownItemClass,
  selectedOption,
  handleOptionClick,
}) => {
  const [isOpen, setIsOpen] = useState(false)

  const handleToggle = () => {
    setIsOpen(!isOpen)
  }

  const handleOptionItemClick = (title: string, date: string) => {
    handleOptionClick(title, date)
    setIsOpen(false)
  }

  return (
    <div className="md:hidden relative inline-block text-left mb-3 min-[948px]:mb-0">
      <div className="flex flex-row justify-between">
        <button
          type="button"
          className={`inline-flex font-lexend justify-between w-60 md:w-60 border shadow-sm p-2 pl-3 pr-3 bg-white text-[15px] focus:outline-none ${buttonClass}`}
          onClick={handleToggle}
        >
          {selectedOption ? selectedOption : <p></p>}
          {isOpen ? (
            <ChevronUpIcon className="w-5 pl-2" />
          ) : (
            <ChevronDownIcon className="w-5 pl-2" />
          )}
        </button>
      </div>
      {isOpen && (
        <div
          className={`origin-top-right absolute z-10 lg:right-0 mt-2 w-60 md:w-60 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none ${dropdownContainerClass}`}
        >
          <div className="py-1" role="none">
            {options.slice(1).map((option) => (
              <a
                key={option.id}
                href="#"
                className={`flex flex-row justify-between px-4 py-2 ml-1 mr-1 font-lexend text-[15px] text-gray-700 hover:bg-[#10101014] dark:hover:bg-thebiblesayswhite-8 dark:hover:text-gray-300 ${dropDownItemClass}`}
                role="menuitem"
                onClick={() => handleOptionItemClick(option.title, option.date)}
              >
                <span>{option.title}</span> <span>{option.date}</span>
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default CommentaryTimelineDropdown
