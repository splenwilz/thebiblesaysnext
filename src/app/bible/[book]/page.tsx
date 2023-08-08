import CommentaryNavigation from '@/components/CommentaryNavigation'
import React from 'react'
import BibleMenu from '../biblemenu'
import BibleLandingData from '../biblelanding'
import BibleComm from '../biblecomm'
import NewsletterSignupSection from '@/components/NewsletterSignupSection'
import FooterSection from '@/components/FooterSection'
import BibleCommBook from './biblecomm'

interface BibleLandingServerProps {
  params: { book: string }
}

export default async function BibleLandingServer({
  params: { book },
}: BibleLandingServerProps) {
  // const BibleLandingServer: React.FC = () => {
  let bibleChapData: BibleResponse | null = null
  let error: string | null = null
  console.log(book.toUpperCase().replace('+', '.'))

  try {
    const token = 'eceded48dcbede4c15be65df261734da' // Your bearer token
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
        'api-key': '46f2fe8179dd1be84374cc2b0c5f7930',
      },
    }
    const response = await fetch(
      `https://api.scripture.api.bible/v1/bibles/de4e12af7f28f599-01/chapters/${book
        .toUpperCase()
        .replace('+', '.')
        .replace('%2B', '.')}`,
      config,
    )

    if (!response.ok) {
      throw new Error('Failed to fetch data')
    }

    bibleChapData = await response.json()
  } catch (err) {
    error =
      'An error occurred while retrieving the data. Please attempt again later. Alternatively, its possible that the resource does not exist. Kindly verify and confirm this.'
  }

  return (
    <>
      <div className="bg-thebiblesayswhite-100 dark:bg-thebiblesaysblack-100">
        <div className=" mx-auto max-w-[1440px] px-10 lg:px-10 md:px-7 sm:px-7">
          <CommentaryNavigation />
        </div>
      </div>
      <div className=" dark:bg-thebiblesaysblack-100 ">
        <div className="flex flex-row mx-auto max-w-[1440px]">
          <div className="w-full basis-auto sm:basis-1/2 lg:basis-2/3 flex flex-col">
            <BibleMenu bookid={book} />
            {/* <BibleLandingData /> */}
            {bibleChapData ? (
              <div className="max-h-[700px] overflow-scroll">
                <div className="flex flex-col m-10 pr-0 lg:pr-20 ">
                  <div className="">
                    {/* 
                ### Points to Note:
                1. Scrolling to the end of a chapter, fetches another chapter and updates the Commentary
                 */}
                    <div className="pb-5">
                      <h5 className="font-lexend font-extrabold text-2xl dark:text-thebiblesayswhite-100 mb-3">
                        {bibleChapData?.data.reference}
                      </h5>

                      <div
                        className={`font-serifpro dark:text-thebiblesayswhite-100 text-xl leading-10`}
                        dangerouslySetInnerHTML={{
                          __html: bibleChapData?.data.content || '',
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="max-h-full overflow-scroll">
                <div>
                  <div className=" mx-auto max-w-full h-full pb-24 px-7 md:px-10 lg:px-40">
                    <div className="mt-8 text-center text-red-600">{error}</div>
                  </div>
                </div>
              </div>
            )}

            {/* End Bible Data */}
          </div>
          {/* <BibleComm /> */}
          <BibleCommBook book={book} />
        </div>
      </div>
      <NewsletterSignupSection
        className="px-7 lg:px-40 md:px-7 mb:mt-0"
        placeholder="Enter your Email"
        // onInputChange={(value) => console.log(value)}
        // onSubscribeClick={() => console.log('Subscribe clicked')}
      />

      <FooterSection className="px-7 lg:px-40 md:px-7" />
    </>
  )
}

// export default BibleLanding
