import CommentaryNavigation from '@/components/CommentaryNavigation'
import React from 'react'
import BibleMenu from '../biblemenu'
import BibleLandingData from '../biblelanding'
import BibleComm from '../biblecomm'
import NewsletterSignupSection from '@/components/NewsletterSignupSection'
import FooterSection from '@/components/FooterSection'
import CommModal from '../modal'

interface CommentaryProps {
  params: { book: string }
}

// export const revalidate = 1

export default async function Commentary({
  params: { book },
}: CommentaryProps) {
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
            <CommModal bookid={book} />
            <BibleLandingData bookid={book} />
          </div>
          <BibleComm bookid={book} />
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
