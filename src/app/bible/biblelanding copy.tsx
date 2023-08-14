'use client'
import React, { useEffect, useState } from 'react'
import CommentaryTopic from '@/core/CommentaryTopic'
import axios, { AxiosResponse } from 'axios'
import { useGenerationStore } from '@/store/tbsstore'

interface BibleLandingDataProps {
  book: string
}
const BibleLandingDataCopy: React.FC<BibleLandingDataProps> = ({ book }) => {
  // export default function BibleLandingData() {
  // let bibleChapData: BibleResponse | null = null
  // let error: string | null = null
  const { fontSize } = useGenerationStore()

  const [passageData, setPassageData] = useState<BibleResponse>()
  const [loadingPassageData, setLoadingPassageData] = useState(true)
  const [errorPassageData, setErrorPassageData] = useState<string>('')

  useEffect(() => {
    const fetchData = async () => {
      const token = 'eceded48dcbede4c15be65df261734da' // Your bearer token
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
          'api-key': '46f2fe8179dd1be84374cc2b0c5f7930',
        },
      }
      try {
        const response: AxiosResponse<BibleResponse> = await axios.get(
          `https://api.scripture.api.bible/v1/bibles/de4e12af7f28f599-01/chapters/${book
            .toUpperCase()
            .replace('+', '.')
            .replace('%2B', '.')}`,
          config,
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
  }, [book])

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

  return (
    <div className="max-h-[700px] overflow-y-scroll">
      <div className="flex flex-col m-10 pr-0 lg:pr-20 ">
        <div className="">
          {/* 
                ### Points to Note:
                1. Scrolling to the end of a chapter, fetches another chapter and updates the Commentary
                 */}
          <div className="pb-5">
            <h5 className="font-lexend font-extrabold text-2xl dark:text-thebiblesayswhite-100 mb-3">
              {passageData?.data.reference}
            </h5>

            <div
              className={`font-serifpro dark:text-thebiblesayswhite-100 text-[${fontSize}px]  leading-10`}
              dangerouslySetInnerHTML={{
                __html: passageData?.data.content || '',
              }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
export default BibleLandingDataCopy
