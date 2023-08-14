import React from 'react'

import NavigationWhiteScreen from '@/components/NavigationWhiteScreen'
import FooterSection from '@/components/FooterSection'
import NewsletterSignupSection from '@/components/NewsletterSignupSection'
import GridSection from '@/components/GridSection'

const TimelineLanding: React.FC = () => {
  const gridItems = [
    {
      title: 'Old Testament Events',
      description:
        'View the events of the Old Testament in Chronological order.',
      link: 'old-testament-events',
    },
    {
      title: 'Old Testament Books',
      description: 'View when each book of the Old Testament was written.',
      link: 'old-testament-books',
    },
    {
      title: 'New Testament Events',
      description:
        'View the events of the New Testament in Chronological order.',
      link: 'new-testament-events',
    },
    {
      title: 'New Testament Books',
      description: 'View when each book of the New Testament was written.',
      link: 'new-testament-books',
    },
    {
      title: 'Biblical Overview',
      description: 'An overview of Biblical Events from Genesis to Revelation.',
      link: 'biblical-overview',
    },
  ]
  return (
    <>
      <div className="bg-thebiblesayswhite-100 mx-auto max-w-[1440px] md:px-0">
        <NavigationWhiteScreen />
      </div>
      <div className="flex flex-col mb-20 mt-10 justify-center">
        <h1 className="text-center font-lexend mt-16 font-extrabold text-5xl sm:text-6xl md:text-7xl leading-[60px] md:leading-[90px]">
          Interactive <br /> Biblical Timelines
        </h1>
        <p className="text-center font-serifpro mt-5 text-[16px]">
          Please choose from one of the following Interactive Timelines to get
          started.
        </p>
      </div>

      <div className="mb-32">
        <GridSection
          items={gridItems}
          //   onClick={() => {
          //     console.log('Timeline')
          //   }}
        />
      </div>

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

export default TimelineLanding
