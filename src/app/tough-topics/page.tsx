import React from 'react'
import ToughTopics from './topics'
import CommentaryNavigation from '@/components/CommentaryNavigation'
// import ToughTopicsMenu from './toughtopicsmenu'

import ToughTopicsMenu from './toughtopicsmenu'
// import ToughTopicsTabs from './toughtopicsmenu'
import CommentaryTabs from '@/components/CommentaryTabs'

import NewsletterSignupSection from '@/components/NewsletterSignupSection'
import FooterSection from '@/components/FooterSection'
import TopicsTab from './topicstab'

export const metadata = {
  title: 'Tough Topics Explained Commentary | TheBibleSays.com',
  description:
    'Delve into the meat of God&#039;s Word by reading our Tough Topics Explained articles',
}

// export const revalidate = 0

const ToughTopicsServer = () => {
  return (
    <>
      <div className="bg-thebiblesayswhite-100 dark:bg-thebiblesaysblack-100">
        <div className=" mx-auto max-w-[1440px] px-10 lg:px-10 md:px-7 sm:px-7">
          <CommentaryNavigation />
        </div>
      </div>
      <div className="dark:bg-thebiblesaysblack-100 ">
        <div className="flex flex-row mx-auto max-w-[1440px] ">
          <div className="w-full basis-auto sm:basis-1/2 lg:basis-2/3 flex flex-col">
            <ToughTopicsMenu />
            <ToughTopics />
          </div>
          <div className="hidden sm:block basis-1/2 lg:basis-2/6 w-full bg-thebiblesaysoffwhite dark:bg-thebiblesayswhite-8 p-9 border border-t-thebiblesaysblack-16 border-l-0 border-r-0">
            <div className="">
              <TopicsTab />
            </div>
          </div>
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

export default ToughTopicsServer
