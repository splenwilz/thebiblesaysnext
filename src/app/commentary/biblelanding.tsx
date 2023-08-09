import React from 'react'
import CommentaryTopic from '@/core/CommentaryTopic'
import { getBookName, splitScripture } from '@/helper/helper'
interface CommentaryLandingDataProps {
  bookid: string
}
const CommentaryLandingData: React.FC<CommentaryLandingDataProps> = async ({
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

  try {
    const response = await fetch(
      `https://www.thebiblesays.com/wp-json/tbs/v1/commentaries-by-passage-sorted?keyword=${usePassage}`,
    )

    if (!response.ok) {
      throw new Error('Failed to fetch data')
    }

    dataComm = await response.json()
  } catch (err) {
    error = 'An error occurred while fetching data. Please try again later.'
  }

  if (error) {
    return (
      <div className="bg-thebiblesaysoffwhite">
        <div className=" mx-auto max-w-[1440px] h-full pb-24 px-7 md:px-10 lg:px-40">
          <div className="mt-8 text-center text-red-600">{error}</div>
        </div>
      </div>
    )
  }

  return (
    <div className="max-h-[1000px] overflow-scroll">
      <div className="flex flex-col m-10 pr-0 lg:pr-20 ">
        {error ? (
          <div className="bg-thebiblesaysoffwhite">
            <div className=" mx-auto max-w-[1440px] h-full pb-24 px-7 md:px-10 lg:px-40">
              <div className="mt-8 text-center text-red-600">{error}</div>
            </div>
          </div>
        ) : dataComm && dataComm[0] ? ( // Check if dataComm is defined and contains at least one element
          <div className="">
            <div className="border border-t-0 border-l-0 border-r-0 border-b-[#10101029] pb-5">
              <h5
                className="font-lexend font-extrabold text-2xl dark:text-thebiblesayswhite-100"
                dangerouslySetInnerHTML={{
                  __html: dataComm[0].post_title || '', // Use empty string as a fallback
                }}
              />
              <p
                className="font-serifpro text-[#101010A3] dark:text-thebiblesayswhite-64 text-[17px] mt-5 leading-6"
                dangerouslySetInnerHTML={{
                  __html: dataComm[0].post_excerpt || '', // Use empty string as a fallback
                }}
              />
            </div>
            <div
              className="font-serifpro dark:text-thebiblesayswhite-100 text-xl leading-10"
              dangerouslySetInnerHTML={{
                __html: dataComm[0].post_content || '', // Use empty string as a fallback
              }}
            />
          </div>
        ) : (
          <div className="font-serifpro text-[17px]">
            A commentary for this chapter is currently in preparation and will
            be available shortly. In the meantime, please utilize the search bar
            to access other chapters that are already accompanied by commentary.
          </div>
        )}
      </div>
    </div>
  )
}

export default CommentaryLandingData
