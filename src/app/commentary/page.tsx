import CommentaryNavigation from '@/components/CommentaryNavigation'
import React from 'react'
import BibleMenu from './biblemenu'
import BibleLandingData from './biblelanding'
import BibleComm from './biblecomm'
import NewsletterSignupSection from '@/components/NewsletterSignupSection'
import FooterSection from '@/components/FooterSection'
import CommModal from './modal'

export const metadata = {
  title: 'Commentary | TheBibleSays.com',
  description:
    'The Bible begins with God creating the entire universe.In the opening sentence of the Bible, we find God creating.',
}

// export const revalidate = 0

const Commentary: React.FC = () => {
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
            <BibleMenu bookid="" />

            <CommModal bookid="" />
            <BibleLandingData bookid="" />
          </div>
          <BibleComm bookid="" />
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

export default Commentary
