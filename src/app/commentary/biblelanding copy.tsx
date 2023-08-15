'use client'
import React, { useEffect, useState } from 'react'
import CommentaryTopic from '@/core/CommentaryTopic'
import { getBookName, splitScripture } from '@/helper/helper'
import axios, { AxiosResponse } from 'axios'
import Skeleton from 'react-loading-skeleton'

import 'react-loading-skeleton/dist/skeleton.css'
import { useGenerationStore } from '@/store/tbsstore'
interface CommentaryLandingDataProps {
  bookid: string
}
const CommentaryLandingDataCopy: React.FC<CommentaryLandingDataProps> = ({
  bookid,
}) => {
  // export default async function CommentaryLandingData() {
  // let bibleChapData: BibleResponse | null = null
  // let error: string | null = null

  // try {
  //   const token = 'eceded48dcbede4c15be65df261734da' // Your bearer token
  //   const config = {
  //     headers: {
  //       Authorization: `Bearer ${token}`,
  //       'api-key': '46f2fe8179dd1be84374cc2b0c5f7930',
  //     },
  //   }
  //   const response = await fetch(
  //     `https://api.scripture.api.bible/v1/bibles/de4e12af7f28f599-01/chapters/GEN.1`,
  //     config,
  //   )

  //   if (!response.ok) {
  //     throw new Error('Failed to fetch data')
  //   }

  //   bibleChapData = await response.json()
  // } catch (err) {
  //   error = 'An error occurred while fetching data. Please try again later.'
  // }

  // if (error) {
  //   return (
  //     <div className="bg-thebiblesaysoffwhite">
  //       <div className=" mx-auto max-w-[1440px] h-full pb-24 px-7 md:px-10 lg:px-40">
  //         <div className="mt-8 text-center text-red-600">{error}</div>
  //       </div>
  //     </div>
  //   )
  // }
  let dataComm: CommentaryPost[] | null = null
  let error: string | null = null
  let darkThemeColor = false

  const [activeItem, setActiveItem] = useState<number>(1)
  const { fontSize } = useGenerationStore()

  // On Fontsize
  // const fontSizes = [14, 16, 18, 20, 22]
  // const initialFontSizeIndex = 1
  // const minFontSizeIndex = 0
  // const maxFontSizeIndex = fontSizes.length - 1

  // const initialFontleadingIndex = 10

  // const [fontSizeIndex, setFontSizeIndex] =
  //   useState<number>(initialFontSizeIndex)

  // const [fontleadingIndex, setFontleadingIndex] = useState<number>(
  //   initialFontleadingIndex,
  // )
  // const handleFontSetting = (itemNumber: number) => {
  //   setActiveItem(itemNumber)
  //   if (itemNumber === 1 && fontSizeIndex > minFontSizeIndex) {
  //     setFontSizeIndex((index) => index - 1)
  //     setFontleadingIndex((index) => index - 1)
  //   } else if (itemNumber === 2 && fontSizeIndex < maxFontSizeIndex) {
  //     setFontSizeIndex((index) => index + 1)
  //     setFontleadingIndex((index) => index + 1)
  //   } else if (itemNumber === 3 && fontSizeIndex < maxFontSizeIndex) {
  //     setFontSizeIndex((index) => index + 1)
  //     setFontleadingIndex((index) => index + 1)
  //   }
  // }

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

  const bookAndChapter = bookid ? `${bookName} ${scriptureChap}` : 'Genesis 1'
  const usePassage = scriptureVerse
    ? `${bookName} ${scriptureVerse}`
    : bookAndChapter

  const [passageData, setPassageData] = useState<CommentaryPost[]>()
  const [loadingPassageData, setLoadingPassageData] = useState(true)
  const [errorPassageData, setErrorPassageData] = useState<string>('')

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response: AxiosResponse<CommentaryPost[]> = await axios.get(
          `https://13.51.172.229/wp-json/tbs/v1/commentaries-by-passage-sorted?keyword=${usePassage}`,
        )

        setPassageData(response.data)
        setLoadingPassageData(false)
        console.log(response)
      } catch (error) {
        setErrorPassageData(`Error fetching data: ${error ? error : ''}`)
        setLoadingPassageData(false)
      }
    }

    fetchData()
  }, [usePassage])

  // try {
  //   const response = await fetch(
  //     `http://13.51.172.229/wp-json/tbs/v1/commentaries-by-passage-sorted?keyword=${usePassage}`,
  //   )

  //   if (!response.ok) {
  //     throw new Error('Failed to fetch data')
  //   }

  //   dataComm = await response.json()
  // } catch (err) {
  //   error = 'An error occurred while fetching data. Please try again later.'
  // }

  // if (error) {
  //   return (
  //     <div className="bg-thebiblesaysoffwhite">
  //       <div className=" mx-auto max-w-[1440px] h-full pb-24 px-7 md:px-10 lg:px-40">
  //         <div className="mt-8 text-center text-red-600">
  //           {error} {usePassage}
  //         </div>
  //       </div>
  //     </div>
  //   )
  // }

  return (
    <div
      className="max-h-[1000px] overflow-y-scroll"
      style={{ scrollbarWidth: 'none' }}
    >
      <div className="flex flex-col m-10 pr-0 lg:pr-20 ">
        {error ? (
          <div className="bg-thebiblesaysoffwhite">
            <div className=" mx-auto max-w-[1440px] h-full pb-24 px-7 md:px-10 lg:px-40">
              <div className="mt-8 text-center text-red-600">{error}</div>
            </div>
          </div>
        ) : // <div>
        //   <div className="">
        //     <Skeleton className="font-lexend font-extrabold text-xl dark:text-thebiblesayswhite-100" />
        //     <Skeleton
        //       className="font-serifpro text-[#101010A3] dark:text-thebiblesayswhite-64 text-[17px] mt-5 leading-6"
        //       // count={5}
        //     />
        //   </div>
        //   <Skeleton
        //     className="font-serifpro dark:text-thebiblesayswhite-100 leading-10"
        //     count={100}
        //   />
        // </div>
        passageData && passageData[0] ? ( // Check if dataComm is defined and contains at least one element
          <div className="">
            <div className="border border-t-0 border-l-0 border-r-0 border-b-[#10101029] pb-5">
              {/* <h1>{`text-[${fontSize}px]`}</h1> */}
              <h5
                className="font-lexend font-extrabold text-2xl dark:text-thebiblesayswhite-100"
                dangerouslySetInnerHTML={{
                  __html: passageData[0].post_title || '', // Use empty string as a fallback
                }}
              />
              <p
                className={`font-serifpro text-[#101010A3] dark:text-thebiblesayswhite-64 text-[${fontSize}px] mt-5 leading-8`}
                dangerouslySetInnerHTML={{
                  __html: passageData[0].post_excerpt || '', // Use empty string as a fallback
                }}
              />
            </div>
            <div
              className={`font-serifpro dark:text-thebiblesayswhite-100 text-[${fontSize}px]  leading-10`}
              dangerouslySetInnerHTML={{
                __html: passageData[0].post_content || '', // Use empty string as a fallback
              }}
            />
          </div>
        ) : (
          <div className="font-serifpro text-[17px]">
            A commentary for this chapter is currently in preparation and will
            be available shortly. In the meantime, please utilize the search bar
            to access other chapters that are already accompanied by commentary.
          </div>
          // <div>
          //   <div className="">
          //     <Skeleton className="font-lexend font-extrabold text-xl dark:text-thebiblesayswhite-100" />
          //     <Skeleton
          //       className="font-serifpro text-[#101010A3] dark:text-thebiblesayswhite-64 text-[17px] mt-5 leading-6"
          //       // count={5}
          //     />
          //   </div>
          //   <Skeleton
          //     className="font-serifpro dark:text-thebiblesayswhite-100 leading-10"
          //     count={100}
          //   />
          // </div>
        )}
      </div>
    </div>
  )
}

export default CommentaryLandingDataCopy
