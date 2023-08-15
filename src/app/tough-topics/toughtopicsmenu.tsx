'use client'
import CommentaryDropdown from '@/components/CommentaryDropdown'
import React, { useEffect, useState } from 'react'

import Darkmode from '@/assets/icons/darkmode.svg'
import Lightmode from '@/assets/icons/lightmode.svg'
import Image from 'next/image'
import CommentarySearch from '@/core/CommentarySearch'
import Link from 'next/link'

import axios, { AxiosResponse } from 'axios'

import { useGenerationStore } from '@/store/tbsstore'

interface Data1 {
  id: number
  topic_category: string
  topic_title: string
  image_url: string
  summary: string
  topic_text: string
  link: string
}
interface Data {
  data: Data1[]
}

const ToughTopicsMenu: React.FC = () => {
  const [data, setData] = useState<Data | null>(null)
  const [error, setError] = useState<string | null>(null)

  const [loading, setLoading] = useState(true)
  const [selectedOption, setSelectedOption] = useState('Tough Topics')

  const [isSetting, setIsSetting] = useState(false)

  // const [theme, setTheme] = useState<string>('light')

  const [activeItem, setActiveItem] = useState<number>(1)

  const [searchValue, setSearchValue] = useState('')
  const [filteredPost, setFilteredPost] = useState<postSchema[]>([])

  const [isSearching, setIsSearching] = useState(false)

  const { darkThemeColor, setdarkThemeColor } = useGenerationStore()

  //   Effects

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response: AxiosResponse<Data> = await axios.get(
          'https://thebiblesays.com/wp-json/tbs/v1/topics?category=2448',
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
    if (data) {
      setFilteredPost(data.data)
    }
  }, [data])

  useEffect(() => {
    if (darkThemeColor) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkThemeColor])

  // Handlers
  const handleOptionClick = (option: string) => {
    setSelectedOption(option)
    console.log(`Selected ${option}`)
  }
  const handleTextSetting = () => {
    setIsSetting(!isSetting)
  }

  const handleThemeSwitch = () => {
    setdarkThemeColor(!darkThemeColor)
  }
  const handleFontSetting = (itemNumber: number) => {
    setActiveItem(itemNumber)
    // Additional functionality for each "Aa" element
    // Add your code here
  }
  const handleSearchSubmit = async (query: string) => {
    setSearchValue(query)
    if (data) {
      const filteredPost = data.data.filter((post) =>
        post.topic_title.toLowerCase().includes(query.toLowerCase()),
      )
      setFilteredPost(filteredPost)
      setIsSearching(true)
      console.log(filteredPost)
    }
  }
  const handleSearchFocus = () => {
    setIsSearching(true)
    setFilteredPost(filteredPost)
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
          // options={['Commentary', 'Bible', 'Tough Topics']}
          options={[
            { optionlabel: 'Commentary', link: '../commentary' },
            { optionlabel: 'Bible', link: '../bible' },
            { optionlabel: 'Tough Topic', link: '../tough-topics' },
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
          {isSetting && (
            <div className="z-10 mt-4 -ml-10 block absolute bg-thebiblesayswhite-100 w-52 text-sm border dark:bg-thebiblesaysblack-100 dark:border-thebiblesayswhite-8">
              <div className="font-lexend text-[12px] ml-4 uppercase py-1 font-medium text-center dark:text-thebiblesayswhite-100 ">
                Text Setting
              </div>
              <div className="border border-t-0 border-l-0 border-r-0 dark:border-b-thebiblesayswhite-8"></div>
              <div className="flex flex-row justify-center">
                <div
                  className={classNames(
                    activeItem === 1
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
                    activeItem === 2
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
                    activeItem === 3
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
      <div className="">
        <CommentarySearch
          onSubmit={handleSearchSubmit}
          onBlur={() => {
            setTimeout(() => {
              setIsSearching(false)
            }, 500)
          }}
          onFocus={handleSearchFocus}
          formClass=""
          searchValue={searchValue}
          inputClass="h-[41px] border-gray-300 ml-0 md:ml-2"
        />
        {isSearching && (
          <div className="mt-2 ml-0 md:ml-2 block absolute bg-thebiblesayswhite-100 dark:bg-thebiblesaysblack-100 w-72 dark:text-thebiblesayswhite-100 text-sm border dark:border-thebiblesayswhite-8 dark:focus:ring-thebiblesaysblack-40 dark:focus:border-thebiblesaysblack-40">
            <div className="font-lexend text-[12px] ml-4 uppercase py-1 font-medium dark:text-thebiblesayswhite-100">
              Books
            </div>
            <div className="border border-t-0 border-l-0 border-r-0 dark:border-thebiblesayswhite-8"></div>
            <div
              className="max-h-64 overflow-y-scroll"
              style={{ scrollbarWidth: 'none' }}
            >
              <div>
                {filteredPost.map((topic, index) => (
                  <Link
                    key={index}
                    href={topic.link.substring(
                      'https://thebiblesays.com'.length,
                    )}
                    className="block px-4 py-2 ml-1 mr-1 font-lexend text-[15px] text-gray-700 dark:text-thebiblesayswhite-64 hover:bg-[#10101014] dark:hover:bg-thebiblesayswhite-8 dark:hover:text-gray-300"
                    role="menuitem"
                    dangerouslySetInnerHTML={{
                      __html: topic.topic_title,
                    }}
                    onClick={() => setSearchValue(topic.topic_title)}
                  />
                ))}
              </div>
            </div>
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
        {isSetting && (
          <div className="z-10 mt-4 -ml-10 block absolute bg-thebiblesayswhite-100 w-52 text-sm border dark:bg-thebiblesaysblack-100 dark:border-thebiblesayswhite-8">
            <div className="font-lexend text-[12px] ml-4 uppercase py-1 font-medium text-center dark:text-thebiblesayswhite-100 ">
              Text Setting
            </div>
            <div className="border border-t-0 border-l-0 border-r-0 dark:border-b-thebiblesayswhite-8"></div>
            <div className="flex flex-row justify-center">
              <div
                className={classNames(
                  activeItem === 1
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
                  activeItem === 2
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
                  activeItem === 3
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
  )
}

export default ToughTopicsMenu
