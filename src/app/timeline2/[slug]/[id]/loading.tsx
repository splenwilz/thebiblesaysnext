import FooterSection from '@/components/FooterSection'
import NavigationWhiteScreen from '@/components/NavigationWhiteScreen'
import NewsletterSignupSection from '@/components/NewsletterSignupSection'
import SkeletonLoader from '@/components/SkeletonLoader'
import React from 'react'
import TimelineMenu from '../menu'
import TimelineSide from '../timelinelanding'

const Loading = () => {
  return (
    <>
      <div className="bg-white">
        <div className="mx-auto max-w-[1440px] md:px-0 ">
          <NavigationWhiteScreen />
        </div>
      </div>
      <TimelineMenu />
      {/* <TimelineSide id="" /> */}
      <SkeletonLoader className="flex flex-row mb-40 mt-10 justify-center max-w-[1440px] mx-auto px-10 lg:px-40 md:px-7 sm:px-7">
        <div className="basis-[38%] bg-thebiblesaysoffwhite  hidden md:block">
          <h6 className="font-lexend font-extrabold text-xl sm:text-2xl text-center pb-8 mt-8">
            Biblical Overview
          </h6>
          <div className="h-[500px] overflow-y-scroll mx-5">
            <div className="h-6 bg-gray-200 mb-4"></div>
            <div className="h-6 bg-gray-200 mb-4"></div>
            <div className="h-6 bg-gray-200 mb-4"></div>
            <div className="h-6 bg-gray-200 mb-4"></div>
            <div className="h-6 bg-gray-200 mb-4"></div>
            <div className="h-6 bg-gray-200 mb-4"></div>
            <div className="h-6 bg-gray-200 mb-4"></div>
            <div className="h-6 bg-gray-200 mb-4"></div>
            <div className="h-6 bg-gray-200 mb-4"></div>
            <div className="h-6 bg-gray-200 mb-4"></div>
          </div>
        </div>
        <div className="w-full lg:basis-[62%] px-0 md:px-12">
          <div className="timelineitems ">
            <>
              <span className="font-lexend font-semibold text-[15px] ml-1 mb-2 block">
                {/* 4000 BC */}
              </span>

              <div className="h-8 bg-gray-200 mb-4"></div>
              <div className="h-5 bg-gray-200 mb-4 font-serifpro leading-6 mt-5 max-h-[1000px] overflow-y-scroll"></div>
              <div className="h-5 bg-gray-200 mb-4 font-serifpro leading-6 mt-5 max-h-[1000px] overflow-y-scroll"></div>
              <div className="h-5 bg-gray-200 mb-4 font-serifpro leading-6 mt-5 max-h-[1000px] overflow-y-scroll"></div>
              <div className="h-5 bg-gray-200 mb-4 font-serifpro leading-6 mt-5 max-h-[1000px] overflow-y-scroll"></div>
              <div className="h-5 bg-gray-200 mb-4 font-serifpro leading-6 mt-5 max-h-[1000px] overflow-y-scroll"></div>
              <div className="h-5 bg-gray-200 mb-4 font-serifpro leading-6 mt-5 max-h-[1000px] overflow-y-scroll"></div>
              <div className="h-5 bg-gray-200 mb-4 font-serifpro leading-6 mt-5 max-h-[1000px] overflow-y-scroll"></div>
              <div className="h-5 bg-gray-200 mb-4 font-serifpro leading-6 mt-5 max-h-[1000px] overflow-y-scroll"></div>
              <div className="h-5 bg-gray-200 mb-4 font-serifpro leading-6 mt-5 max-h-[1000px] overflow-y-scroll"></div>
              <div className="h-5 bg-gray-200 mb-4 font-serifpro leading-6 mt-5 max-h-[1000px] overflow-y-scroll"></div>
              <div className="h-5 bg-gray-200 mb-4 font-serifpro leading-6 mt-5 max-h-[1000px] overflow-y-scroll"></div>
              <div className="h-5 bg-gray-200 mb-4 font-serifpro leading-6 mt-5 max-h-[1000px] overflow-y-scroll"></div>
              <div className="h-5 bg-gray-200 mb-4 font-serifpro leading-6 mt-5 max-h-[1000px] overflow-y-scroll"></div>
              <div className="h-5 bg-gray-200 mb-4 font-serifpro leading-6 mt-5 max-h-[1000px] overflow-y-scroll"></div>
              <div className="h-5 bg-gray-200 mb-4 font-serifpro leading-6 mt-5 max-h-[1000px] overflow-y-scroll"></div>
              <div className="h-5 bg-gray-200 mb-4 font-serifpro leading-6 mt-5 max-h-[1000px] overflow-y-scroll"></div>
            </>
          </div>
        </div>
      </SkeletonLoader>

      {/* <div className="container mx-auto">
        <SkeletonLoader className="flex gap-2 my-2 w-80">
          <div className="h-12 w-12 rounded-full bg-gray-200 flex-shrink-0"></div>
          <div className="w-full flex flex-col gap-2">
            <div className="h-5 bg-gray-200"></div>
            <div className="h-5 w-1/2 bg-gray-200"></div>
          </div>
        </SkeletonLoader>
      </div> */}

      <NewsletterSignupSection
        className="px-7 lg:px-40 md:px-7 -mt-2 mb:mt-0"
        placeholder="Enter your Email"
      />
      <FooterSection className="px-7 lg:px-40 md:px-7" />
    </>
  )
}

export default Loading
