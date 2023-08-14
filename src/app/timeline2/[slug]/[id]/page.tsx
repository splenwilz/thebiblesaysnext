import React, { useState } from 'react'
import { ChevronRightIcon } from '@heroicons/react/24/outline'
import CommentaryDropdown from '@/components/CommentaryDropdown'
import CommentaryTimelineDropdown from '@/components/CommentaryTimelineDropdown'
import NavigationWhiteScreen from '@/components/NavigationWhiteScreen'
import NewsletterSignupSection from '@/components/NewsletterSignupSection'
import FooterSection from '@/components/FooterSection'
import TimelineCLient from '@/app/timeline/[timelineslug]/client'
import TimelineMenu from '../menu'
import TimelineLanding from '../../../timeline/page'
import TimelineSide from '../timelinelanding'
// import TimelineCLient from './client'

export default async function Timeline({
  params: { id },
}: {
  params: { id: string }
}) {
  return (
    <>
      <div className="bg-white">
        <div className="mx-auto max-w-[1440px] md:px-0 ">
          <NavigationWhiteScreen />
        </div>
      </div>
      {/* <TimelineCLient /> */}
      <TimelineMenu />
      <TimelineSide id={id} timelinesection="" />

      <NewsletterSignupSection
        className="px-7 lg:px-40 md:px-7 -mt-2 mb:mt-0"
        placeholder="Enter your Email"
      />
      <FooterSection className="px-7 lg:px-40 md:px-7" />
    </>
  )
}
