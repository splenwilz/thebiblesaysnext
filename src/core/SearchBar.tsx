'use client'

import React from 'react'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'

interface SearchBarProps {
  placeholder: string
  searchClassName: string
  inputClassName?: string
  buttonClassName?: string
  searchIconClassName?: string
  // onSearch: (query: string) => void
}

const SearchBar: React.FC<SearchBarProps> = ({
  placeholder,
  searchClassName,
  inputClassName,
  buttonClassName,
  searchIconClassName,
  // onSearch,
}) => {
  const [query, setQuery] = React.useState('')

  const handleSearch = () => {
    // onSearch(query)
    console.log('Searching')
  }

  return (
    <div className={`flex items-center mb-4 ${searchClassName}`}>
      <input
        type="text"
        placeholder={placeholder}
        className={
          inputClassName ||
          'w-72 px-4 py-3 text-white bg-thebiblesayswhite-8 focus:outline-none'
        }
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button
        className="bg-thebiblesaysorange text-white px-4 py-3"
        style={{ backgroundColor: 'rgba(220, 139, 1, 1)' }}
        onClick={handleSearch}
      >
        <MagnifyingGlassIcon
          className={searchIconClassName || ' text-center h-6 w-6'}
        />
      </button>
    </div>
  )
}

export default SearchBar
