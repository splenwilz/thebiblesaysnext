import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react'

interface CommentarySearchProps {
  onSubmit: (query: string) => void
  onBlur: () => void
  onFocus: () => void
  onSubmitSearch: () => void
  searchClassName: string
  placeholder: string
  searchValue: string
  inputClass: string
  formClass: string
  searchIconClassName?: string
}

// interface SearchBarProps {
//   placeholder: string
//   searchClassName: string
//   inputClassName?: string
//   buttonClassName?: string
//   searchIconClassName?: string
//   // onSearch: (query: string) => void
// }

// const SearchBar: React.FC<SearchBarProps> = ({
//   placeholder,
//   searchClassName,
//   inputClassName,
//   buttonClassName,
//   searchIconClassName,
//   // onSearch,
// }) => {
const CommentarySearch3: React.FC<CommentarySearchProps> = ({
  inputClass,
  placeholder,
  formClass,
  searchValue,
  searchClassName,
  searchIconClassName,
  onSubmitSearch,
  onFocus,
  onBlur,
  onSubmit,
}) => {
  const [searchQuery, setSearchQuery] = useState('')

  useEffect(() => {
    setSearchQuery(searchValue)
  }, [searchValue])

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value
    setSearchQuery(inputValue)
    onSubmit(inputValue)
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    onSubmit(searchQuery)
  }

  return (
    <form onSubmit={handleSubmit} className={formClass || ''}>
      <div>
        <div className={`relative  ${searchClassName}`}>
          <input
            type="search"
            id="default-search"
            className={`block p-2 h-11 pl-5  w-72 text-[15px] text-gray-900 bg-thebiblesayswhite-100 outline-none border border-gray-300 dark:bg-thebiblesaysblack-100 dark:border-thebiblesayswhite-8 dark:placeholder-gray-400 dark:text-white dark:focus:ring-thebiblesayswhite-40 dark:focus:border-thebiblesayswhite-40 ${inputClass}`}
            placeholder={placeholder}
            required
            value={searchQuery}
            onChange={handleInputChange}
            onBlur={onBlur}
            onFocus={onFocus}
          />
          <div className="">
            <div
              className="flex absolute inset-y-0  items-center ml-64 min-[948px]:right-4 pointer-events-none"
              style={{ marginLeft: '256px' }}
            >
              <svg
                className="w-5 h-5 text-gray-400 dark:text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>
          {/* <button
            className="bg-thebiblesaysorange text-white px-4 py-3"
            style={{ backgroundColor: 'rgba(220, 139, 1, 1)' }}
            onClick={onSubmitSearch}
          >
            <MagnifyingGlassIcon
              className={searchIconClassName || ' text-center h-6 w-6'}
            />
          </button> */}
          {/* <div className="w-44 thebiblesayswhite-100"></div> */}
        </div>
      </div>
    </form>
  )
}

export default CommentarySearch3
