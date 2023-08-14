'use client'
import CommentaryDropdown from '@/components/CommentaryDropdown'
import React, { useState, useEffect } from 'react'
import axios, { AxiosResponse } from 'axios'

import Darkmode from '@/assets/icons/darkmode.svg'
import Lightmode from '@/assets/icons/lightmode.svg'
import Image from 'next/image'
import CommentarySearch from '@/core/CommentarySearch'
import Link from 'next/link'

import { ChevronRightIcon } from '@heroicons/react/24/outline'
import { useGenerationStore } from '@/store/tbsstore'
import { getBookName, splitScripture } from '@/helper/helper'

interface Books {
  id: string
  bibleId: string
  abbreviation: string
  name: string
  nameLong: string
}
interface BooksData {
  data: Books[]
}

interface Chapter {
  id: string
  bibleId: string
  bookId: string
  number: string
  reference: string
}

interface Chapters {
  data: Chapter[]
}

interface BibleMenuProps {
  bookid: string
}

// export const revalidate = 0

const BibleMenu: React.FC<BibleMenuProps> = ({ bookid }) => {
  // const BibleMenu = () => {
  const [data, setData] = useState<BooksData | null>(null)
  const [error, setError] = useState<string | null>(null)

  const [loading, setLoading] = useState(true)

  const [dataChaps, setDataChaps] = useState<Chapters | null>(null)
  const [errorChaps, setErrorChaps] = useState<string | null>(null)
  const [loadingChaps, setLoadingChaps] = useState(true)

  const [selectedOption, setSelectedOption] = useState('Bible')

  const [isSetting, setIsSetting] = useState(false)

  //   const [theme, setTheme] = useState<string>('light')

  const [activeItem, setActiveItem] = useState<number>(1)

  const [isSearching, setIsSearching] = useState(false)

  const [searchValue, setSearchValue] = useState('')

  const [filteredBooks, setFilteredBooks] = useState<Books[]>([])

  const {
    darkThemeColor,
    setdarkThemeColor,
    showVersesRange,
    setshowVersesRange,
    fontSize,
    setFontSize,
  } = useGenerationStore()

  const scriptureBook = bookid
    ? splitScripture(bookid.replace('%2B', '+'))?.book
    : ''
  const bookName = getBookName(scriptureBook || '')
  // const booknameShprt =
  const scriptureChap = bookid
    ? splitScripture(bookid.replace('%2B', '+'))?.chapter
    : '1'
  const scriptureVerse = bookid
    ? `${splitScripture(bookid.replace('%2B', '+'))?.chapter}:${
        splitScripture(bookid.replace('%2B', '+'))?.verse
      }`
    : ''
  bookid === '' ? 'do nothing' : bookid.replace('%2B', '+')
  const book =
    bookid === ''
      ? 'GEN'
      : splitScripture(bookid.replace('%2B', '+'))?.book.toLocaleUpperCase()
  //   const book = 'GEN'
  const chapter = '1'
  //   const bookChapter =

  const [bookChapter, setBookChapter] = useState<string>(
    book && chapter
      ? `${scriptureBook?.toUpperCase()}.${scriptureChap}`
      : 'GEN.1',
  )

  //   const { dataChaps, errorChaps, loadingChaps } = useChapters({
  //     chapterId: book ? book : '',
  //   })

  //   Effects

  useEffect(() => {
    const fetchData = async () => {
      try {
        const config = {
          headers: {
            'api-key': '46f2fe8179dd1be84374cc2b0c5f7930',
          },
        }

        const response: AxiosResponse<BooksData> = await axios.get(
          'https://api.scripture.api.bible/v1/bibles/de4e12af7f28f599-02/books?include-chapters=false&include-chapters-and-sections=false',
          config,
        )

        setData(response.data)
        setLoading(false)
      } catch (error) {
        setError(`Error fetching data: ${error ? error : ''}`)
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const config = {
          headers: {
            'api-key': '46f2fe8179dd1be84374cc2b0c5f7930',
          },
        }

        const response: AxiosResponse<Chapters> = await axios.get(
          `https://api.scripture.api.bible/v1/bibles/de4e12af7f28f599-02/books/${book}/chapters`,
          config,
        )

        setDataChaps(response.data)
        setLoadingChaps(false)
      } catch (error) {
        setErrorChaps(`Error fetching data: ${error ? error : ''}`)
        setLoadingChaps(false)
      }
    }

    fetchData()
  }, [book])

  useEffect(() => {
    if (darkThemeColor) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkThemeColor])

  //   Handlers
  const handleOptionClick = (option: string) => {
    setSelectedOption(option)
    console.log(`Selected ${option}`)
  }

  const handleMouseDown = (event: MouseEvent) => {
    if (!(event.target as Element).closest('.issearching')) {
      setIsSetting(false)
    }
  }
  useEffect(() => {
    if (isSetting) {
      document.addEventListener('mousedown', handleMouseDown)
    } else {
      document.removeEventListener('mousedown', handleMouseDown)
    }

    return () => {
      document.removeEventListener('mousedown', handleMouseDown)
    }
  }, [isSetting])

  const handleTextSetting = () => {
    console.log('handling text')
    setIsSetting(true)
  }

  const handleThemeSwitch = () => {
    setdarkThemeColor(!darkThemeColor)
  }
  const fontSizes = [16, 17, 18, 20, 22]
  const minFontSizeIndex = 0
  const maxFontSizeIndex = fontSizes.length - 1

  const [fontSizeIndex, setFontSizeIndex] = useState<number>(1)
  const [fontleadingIndex, setFontleadingIndex] = useState<number>(10)

  const handleFontSetting = (index: number) => {
    if (index > fontSizeIndex) {
      setFontSizeIndex(index)
      setFontSize(fontSizes[index])
      setFontleadingIndex(index)
      console.log(fontSize)
    } else if (index < fontSizeIndex) {
      setFontSizeIndex(index)
      setFontSize(fontSizes[index])
      setFontleadingIndex(index)
      console.log(fontSize)
    }
  }

  const handleSearchSubmit = async (query: string) => {
    setSearchValue(query)
    if (data) {
      const filteredBook = data.data.filter((post) =>
        post.name.toLowerCase().includes(query.toLowerCase()),
      )
      setFilteredBooks(filteredBook)
      setIsSearching(true)
      console.log(filteredBook)
    }
  }
  const handleSearchBlur = () => {
    // Delay the closing of the dropdown to allow time for link click event to be processed
    if (book && chapter) {
      setTimeout(() => {
        setIsSearching(false)
      }, 500)
    } // Adjust the delay time as per your preference
  }
  const handleSearchFocus = () => {
    if (data) {
      const filteredBook = data.data.filter((post) =>
        post.name.toLowerCase().includes(''.toLowerCase()),
      )
      setFilteredBooks(filteredBook)
      setIsSearching(true)
      console.log(filteredBook)
    }
    console.log('Search input focused')
  }

  function classNames(...classes: Array<string | boolean>): string {
    return classes.filter(Boolean).join(' ')
  }
  return (
    <div className="border  flex flex-col lg:flex-row py-4  border-t-thebiblesaysblack-16 border-b-thebiblesaysblack-16 dark:border-t-thebiblesayswhite-8 dark:border-b-thebiblesayswhite-8 border-r-0 border-l-0 px-10 ">
      <div className="flex flex-row ">
        <CommentaryDropdown
          buttonClass="dark:border-thebiblesayswhite-8 dark:bg-thebiblesaysblack-100  dark:text-thebiblesayswhite-100"
          dropdownContainerClass="dark:bg-thebiblesaysblack-100 dark:border dark:border-thebiblesayswhite-8"
          dropDownItemClass="dark:text-thebiblesayswhite-100"
          options={[
            { optionlabel: 'Commentary', link: './commentary' },
            { optionlabel: 'Bible', link: './bible' },
            { optionlabel: 'Tough Topic', link: './tough-topics' },
          ]}
          selectedOption={selectedOption}
          handleOptionClick={handleOptionClick}
        />
        <div className="block lg:hidden">
          <div className="ml-5 mt-2 flex flex-row gap-2 cursor-pointer">
            <span
              className="font-lexend font-bold text-thebiblesaysblack-100 dark:text-thebiblesayswhite-64 ml-3"
              onClick={handleTextSetting}
            >
              Aa
            </span>
            <Image
              src={!darkThemeColor ? Darkmode : Lightmode}
              alt=""
              className="ml-7"
              onClick={handleThemeSwitch}
            />
          </div>
          {/* Setting for Font Size */}
          <div className="issearching">
            {isSetting && (
              <div className="z-10 mt-4 -ml-10 block absolute bg-thebiblesayswhite-100 w-52 text-sm border dark:bg-thebiblesaysblack-100 dark:border-thebiblesayswhite-8">
                <div className="font-lexend text-[12px] ml-4 uppercase py-1 font-medium text-center dark:text-thebiblesayswhite-100 ">
                  Text Setting
                </div>
                <div className="border border-t-0 border-l-0 border-r-0 dark:border-b-thebiblesayswhite-8"></div>
                <div className="flex flex-row justify-center">
                  <div
                    className={classNames(
                      fontSizeIndex === 1
                        ? 'bg-thebiblesaysblack-16 dark:bg-thebiblesayswhite-8'
                        : 'hover:text-gray-400',
                      'font-lexend text-[12px] py-3 px-4 font-medium text-thebiblesaysblack-100 dark:text-thebiblesayswhite-100 cursor-pointer m-1',
                    )}
                    onClick={() => handleFontSetting(1)}
                  >
                    Aa
                  </div>
                  <div
                    className={classNames(
                      fontSizeIndex === 2
                        ? 'bg-thebiblesaysblack-16 dark:bg-thebiblesayswhite-8'
                        : 'hover:text-gray-400',
                      'font-lexend text-[16px] py-3 px-4 font-medium text-thebiblesaysblack-100 dark:text-thebiblesayswhite-100 cursor-pointer m-1',
                    )}
                    onClick={() => handleFontSetting(2)}
                  >
                    Aa
                  </div>
                  <div
                    className={classNames(
                      fontSizeIndex === 3
                        ? 'bg-thebiblesaysblack-16 dark:bg-thebiblesayswhite-8'
                        : 'hover:text-gray-400',
                      'font-lexend text-[20px] py-3 px-4 font-medium text-thebiblesaysblack-100 dark:text-thebiblesayswhite-100 cursor-pointer m-1',
                    )}
                    onClick={() => handleFontSetting(3)}
                  >
                    Aa
                  </div>
                </div>
              </div>

              // <div className="z-10 mt-4 -ml-10 block absolute bg-thebiblesayswhite-100 w-52 text-sm border dark:bg-thebiblesaysblack-100 dark:border-thebiblesayswhite-8">
              //   <div className="font-lexend text-[12px] ml-4 uppercase py-1 font-medium text-center dark:text-thebiblesayswhite-100">
              //     Text Setting1
              //   </div>
              //   <div className="border border-t-0 border-l-0 border-r-0 dark:border-b-thebiblesayswhite-8"></div>
              //   <div className="flex flex-row justify-center">
              //     <div
              //       className={classNames(
              //         fontSizeIndex === 1
              //           ? 'bg-thebiblesaysblack-16 dark:bg-thebiblesayswhite-8'
              //           : 'hover:text-gray-400',
              //         'font-lexend text-[12px] py-3 px-4 font-medium text-thebiblesaysblack-100 dark:text-thebiblesayswhite-100 cursor-pointer m-1',
              //       )}
              //       onClick={() => handleFontSetting(0)}
              //     >
              //       Aa
              //     </div>
              //     <div
              //       className={classNames(
              //         fontSizeIndex === 2
              //           ? 'bg-thebiblesaysblack-16 dark:bg-thebiblesayswhite-8'
              //           : 'hover:text-gray-400',
              //         'font-lexend text-[16px] py-3 px-4 font-medium text-thebiblesaysblack-100 dark:text-thebiblesayswhite-100 cursor-pointer m-1',
              //       )}
              //       onClick={() => handleFontSetting(1)}
              //     >
              //       Aa
              //     </div>
              //     <div
              //       className={classNames(
              //         fontSizeIndex === 3
              //           ? 'bg-thebiblesaysblack-16 dark:bg-thebiblesayswhite-8'
              //           : 'hover:text-gray-400',
              //         'font-lexend text-[20px] py-3 px-4 font-medium text-thebiblesaysblack-100 dark:text-thebiblesayswhite-100 cursor-pointer m-1',
              //       )}
              //       onClick={() => handleFontSetting(2)}
              //     >
              //       Aa
              //     </div>
              //   </div>
              // </div>
            )}
          </div>
        </div>
      </div>
      <div className="">
        <CommentarySearch
          onSubmit={handleSearchSubmit}
          onBlur={handleSearchBlur}
          onFocus={handleSearchFocus}
          searchValue={searchValue}
          formClass=""
          inputClass="h-[41px] border-gray-300 ml-0 md:ml-2"
        />
        {isSearching && (
          <div
            className="mt-2 ml-0 md:ml-2 block absolute bg-thebiblesayswhite-100 dark:bg-thebiblesaysblack-100 w-72 dark:text-thebiblesayswhite-100 text-sm border dark:border-thebiblesayswhite-8 dark:focus:ring-thebiblesaysblack-40 dark:focus:border-thebiblesaysblack-40"
            onBlur={() => {
              book && chapter
                ? setIsSearching(false)
                : console.log('No book and chapter selected')
            }}
          >
            <div className="font-lexend text-[12px] ml-4 uppercase py-1 font-medium dark:text-thebiblesayswhite-100">
              <div className="flex flex-row">
                <Link href="/bible" onClick={() => setSearchValue('')}>
                  Books
                </Link>
                {bookid !== '' && (
                  <>
                    <ChevronRightIcon className="w-3 mx-3" />
                    <Link href="" onClick={(e) => e.preventDefault()}>
                      Chapter
                    </Link>
                  </>
                )}
              </div>
            </div>
            <div className="border border-t-0 border-l-0 border-r-0 dark:border-thebiblesayswhite-8"></div>
            {bookid !== '' ? (
              <div className="max-h-64 overflow-y-scroll pt-5">
                {/* {dataChaps?.data[0].reference} */}
                <Link
                  href={`${dataChaps?.data[0].bookId}&chapter=${dataChaps?.data[0].number}`}
                  className="font-lexend  text-[15px] pl-5 py-3 mt-4 text-thebiblesaysblack-100 dark:text-thebiblesayswhite-100 cursor-pointer "
                >
                  Book Overview
                </Link>
                <div className="grid grid-cols-5 grid-flow-row mt-3">
                  {dataChaps?.data.slice(1).map((chap, index) => (
                    <Link
                      key={index}
                      className={`font-lexend  text-[15px] pl-5 py-3 font-medium ${
                        chapter === chap.number ? 'bg-thebiblesaysblack-8' : ''
                      } text-thebiblesaysblack-100 dark:text-thebiblesayswhite-100 cursor-pointer `}
                      href={`./${chap.bookId.toLowerCase()}+${chap.number}`}
                      onClick={() => {
                        setSearchValue(chap.reference)
                        setIsSearching(false)
                        // setCommentary(`${chap.reference}`)
                      }}
                    >
                      {chap.number}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <div className="max-h-64 overflow-y-scroll">
                <div>
                  {filteredBooks?.map((book, index) => (
                    <Link
                      key={index}
                      href={`./bible/${book.id.toLowerCase()}+1`}
                      className="block px-4 py-2 ml-1 mr-1 font-lexend text-[15px] text-gray-700 hover:bg-[#10101014] dark:hover:bg-thebiblesayswhite-8 dark:hover:text-gray-300"
                      role="menuitem"
                      onClick={() => setSearchValue(book.name)}
                    >
                      {book.name}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
      <div className="hidden lg:block">
        <div className="ml-5 mt-2 flex flex-row gap-2 cursor-pointer">
          <span
            className="font-lexend font-bold text-thebiblesaysblack-100 dark:text-thebiblesayswhite-64 ml-3"
            onClick={handleTextSetting}
          >
            Aa
          </span>
          <Image
            src={!darkThemeColor ? Darkmode : Lightmode}
            alt=""
            className="ml-7"
            onClick={handleThemeSwitch}
          />
        </div>
        {/* Setting for Font Size */}
        <div className="issearching">
          {isSetting && (
            <div className="z-10 mt-4 -ml-10 block absolute bg-thebiblesayswhite-100 w-52 text-sm border dark:bg-thebiblesaysblack-100 dark:border-thebiblesayswhite-8">
              <div className="font-lexend text-[12px] ml-4 uppercase py-1 font-medium text-center dark:text-thebiblesayswhite-100 ">
                Text Setting
              </div>
              <div className="border border-t-0 border-l-0 border-r-0 dark:border-b-thebiblesayswhite-8"></div>
              <div className="flex flex-row justify-center">
                <div
                  className={classNames(
                    fontSizeIndex === 1
                      ? 'bg-thebiblesaysblack-16 dark:bg-thebiblesayswhite-8'
                      : 'hover:text-gray-400',
                    'font-lexend text-[12px] py-3 px-4 font-medium text-thebiblesaysblack-100 dark:text-thebiblesayswhite-100 cursor-pointer m-1',
                  )}
                  onClick={() => handleFontSetting(1)}
                >
                  Aa
                </div>
                <div
                  className={classNames(
                    fontSizeIndex === 2
                      ? 'bg-thebiblesaysblack-16 dark:bg-thebiblesayswhite-8'
                      : 'hover:text-gray-400',
                    'font-lexend text-[16px] py-3 px-4 font-medium text-thebiblesaysblack-100 dark:text-thebiblesayswhite-100 cursor-pointer m-1',
                  )}
                  onClick={() => handleFontSetting(2)}
                >
                  Aa
                </div>
                <div
                  className={classNames(
                    fontSizeIndex === 3
                      ? 'bg-thebiblesaysblack-16 dark:bg-thebiblesayswhite-8'
                      : 'hover:text-gray-400',
                    'font-lexend text-[20px] py-3 px-4 font-medium text-thebiblesaysblack-100 dark:text-thebiblesayswhite-100 cursor-pointer m-1',
                  )}
                  onClick={() => handleFontSetting(3)}
                >
                  Aa
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default BibleMenu
