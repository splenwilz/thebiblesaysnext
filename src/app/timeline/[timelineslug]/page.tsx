import React, { useState } from 'react'
import { ChevronRightIcon } from '@heroicons/react/24/outline'
import CommentaryDropdown from '@/components/CommentaryDropdown'
import CommentaryTimelineDropdown from '@/components/CommentaryTimelineDropdown'
import NavigationWhiteScreen from '@/components/NavigationWhiteScreen'
import NewsletterSignupSection from '@/components/NewsletterSignupSection'
import FooterSection from '@/components/FooterSection'
import TimelineCLient from './client'

interface Timeline2Props {
  params: { timelineslug: string }
}

// export const revalidate = 1

export default function Timeline2({
  params: { timelineslug },
}: Timeline2Props) {
  return (
    <>
      <div className="bg-white">
        <div className="mx-auto max-w-[1440px] md:px-0 ">
          <NavigationWhiteScreen />
        </div>
      </div>
      <TimelineCLient timelineslug={timelineslug} />

      <NewsletterSignupSection
        className="px-7 lg:px-40 md:px-7 -mt-2 mb:mt-0"
        placeholder="Enter your Email"
        // onInputChange={(value) => console.log(value)}
        // onSubscribeClick={() => console.log('Subscribe clicked')}
      />
      <FooterSection className="px-7 lg:px-40 md:px-7" />
    </>
  )
}
