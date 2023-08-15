'use client'

import React, { useEffect, useState } from 'react'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import axios, { AxiosResponse } from 'axios'
import CommentarySearch from './CommentarySearch'
import CommentarySearch2 from './CommentarySearch2'

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
  const [isSearching, setisSearching] = useState(false)

  const [commRes, setComRes] = useState<CommentaryPost[] | null>(null)

  const [errCommRes, setErrCommRes] = useState<string | null>(null)
  const [loadingCommRes, setLoadingCommRes] = useState(true)

  const [searchValue, setSearchValue] = useState('')

  const [filteredBooks, setFilteredBooks] = useState<CommentaryPost[]>([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response: AxiosResponse<CommentaryPost[]> = await axios.get(
          `https://13.51.172.229/wp-json/tbs/v1/tbssearch?keyword=${query}`,
        )

        setComRes(response.data)
        setLoadingCommRes(false)
      } catch (error) {
        setErrCommRes(`Error fetching data: ${error ? error : ''}`)
        setLoadingCommRes(false)
      }
    }

    fetchData()
  }, [query])

  useEffect(() => {
    if (commRes) {
      setFilteredBooks(commRes)
    }
  }, [commRes])

  const handleOnFocus = () => {
    setisSearching(true)
  }

  const handleSearch = () => {
    // onSearch(query)
    console.log('Searching')
  }

  // Handle Searching
  const handleQueryInput = (query: string) => {
    if (commRes) {
      const filteredBook = commRes?.filter((post) =>
        post.post_title.toLowerCase().includes(query.toLowerCase()),
      )
      setFilteredBooks(filteredBook)
      console.log(`Searching ${query}`)
    }
  }

  const handleSearchSubmit = async (query: string) => {
    setSearchValue(query)
    if (commRes) {
      const filteredBook = commRes.filter((post) =>
        post.post_title.toLowerCase().includes(query.toLowerCase()),
      )
      setFilteredBooks(filteredBook)
      setisSearching(true)
      console.log(filteredBook)
    }
  }
  const handleOnSubmitSearch = () => {
    console.log(searchValue)
  }
  const handleSearchBlur = () => {
    // Delay the closing of the dropdown to allow time for link click event to be processed
    if (commRes) {
      setTimeout(() => {
        setisSearching(false)
      }, 500)
    } // Adjust the delay time as per your preference
  }
  const handleSearchFocus = () => {
    if (commRes) {
      const filteredBook = commRes.filter((post) =>
        post.post_title.toLowerCase().includes(''.toLowerCase()),
      )
      setFilteredBooks(filteredBook)
      setisSearching(true)
      console.log(filteredBook)
    }
    console.log('Search input focused')
  }

  return (
    <>
      {/* <div className={`flex items-center mb-4 ${searchClassName}`}>
        <input
          type="text"
          placeholder={placeholder}
          className={
            inputClassName ||
            'w-72 px-4 py-3 text-white bg-thebiblesayswhite-8 focus:outline-none'
          }
          value={query}
          onFocus={handleOnFocus}
          onBlur={() => setisSearching(false)}
          onChange={(e) => {
            setQuery(e.target.value)
            handleQueryInput(e.target.value)
          }}
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
      </div> */}

      <CommentarySearch2
        onSubmit={handleSearchSubmit}
        onSubmitSearch={handleOnSubmitSearch}
        placeholder={placeholder}
        onBlur={handleSearchBlur}
        onFocus={handleSearchFocus}
        searchValue={searchValue}
        searchClassName={searchClassName}
        formClass=""
        inputClass="h-[40px] border-gray-300 ml-0 md:ml-2"
      />
      {isSearching && (
        <div
          className="mt-0 ml-0 md:ml-0 block absolute bg-thebiblesayswhite-100 dark:bg-thebiblesaysblack-100 w-72 dark:text-thebiblesayswhite-100 text-sm border dark:border-thebiblesayswhite-8 dark:focus:ring-thebiblesaysblack-40 dark:focus:border-thebiblesaysblack-40"
          // onBlur={h}
        >
          <div className="font-lexend text-[12px] ml-4  py-1 font-medium dark:text-thebiblesayswhite-100">
            <div className="flex flex-row">
              <Link href="/commentary" className="text-[16px] font-serifpro">
                Search Results
              </Link>
            </div>
          </div>
          <div className="border border-t-0 border-l-0 border-r-0 dark:border-thebiblesayswhite-8"></div>

          <div className="max-h-64 overflow-y-scroll w-full">
            <div>
              {filteredBooks &&
                filteredBooks?.map((comm, index) => (
                  <Link
                    key={index}
                    href={`./commentary/${comm.category_slug.replace(
                      '-',
                      '+',
                    )}`}
                    className="block px-4 py-2 ml-1 mr-1 font-lexend text-[15px] text-gray-700 hover:bg-[#10101014] dark:hover:bg-thebiblesayswhite-8 dark:hover:text-gray-300"
                    role="menuitem"
                    // onClick={() => {
                    //   setSearchValue(book.name)
                    //   // setUsAvailChap(book.name)
                    // }}
                  >
                    {comm.post_title}
                  </Link>
                ))}
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default SearchBar
