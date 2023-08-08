import React, { useState } from 'react'
import { ChevronRightIcon } from '@heroicons/react/24/outline'
import CommentaryDropdown from '@/components/CommentaryDropdown'
import CommentaryTimelineDropdown from '@/components/CommentaryTimelineDropdown'
import NavigationWhiteScreen from '@/components/NavigationWhiteScreen'
import NewsletterSignupSection from '@/components/NewsletterSignupSection'
import FooterSection from '@/components/FooterSection'
import TimelineCLient from './client'

const Timeline2: React.FC = () => {
  //   const [currentItem, setCurrentItem] = useState<number>(0)

  //   const handlePrevItem = () => {
  //     setCurrentItem((prevItem) => (prevItem > 0 ? prevItem - 1 : 0))
  //   }

  //   const handleNextItem = () => {
  //     setCurrentItem((prevItem) =>
  //       prevItem < TIMELINE_ITEMS.length - 1 ? prevItem + 1 : prevItem,
  //     )
  //   }

  //   const renderTimelineItems = () => {
  //     return TIMELINE_ITEMS.slice(1).map((item, index) => (
  //       <div
  //         className={`timelinesidepane flex flex-row justify-between px-10 py-4 cursor-pointer ${
  //           index === currentItem - 1 ? 'bg-[#dc8b0133]' : ''
  //         }`}
  //         key={item.id}
  //         onClick={() => {
  //           setCurrentItem(index + 1)
  //         }}
  //       >
  //         <p>{item.title}</p>
  //         <p>{item.date}</p>
  //       </div>
  //     ))
  //   }

  //   const renderPrevButton = () => {
  //     if (currentItem > 0) {
  //       const prevItem = TIMELINE_ITEMS[currentItem - 1]
  //       return (
  //         <button
  //           className="p-2 border flex flex-row w-60 font-lexend text-[15px] justify-between"
  //           onClick={handlePrevItem}
  //         >
  //           {prevItem.title}
  //           <ChevronRightIcon className="ml-3 w-3" />
  //         </button>
  //       )
  //     }
  //     return null
  //   }

  //   const renderNextButton = () => {
  //     if (currentItem < TIMELINE_ITEMS.length - 1) {
  //       const nextItem = TIMELINE_ITEMS[currentItem + 1]
  //       return (
  //         <button
  //           className="p-2 border flex flex-row w-60 font-lexend text-[15px] justify-between"
  //           onClick={handleNextItem}
  //         >
  //           {nextItem.title}
  //           <ChevronRightIcon className="ml-3 w-3" />
  //         </button>
  //       )
  //     }
  //     return null
  //   }

  //   const [selectedOption, setSelectedOption] = useState(TIMELINE_ITEMS[1].title)
  //   const [selectedOptionDate, setSelectedOptionDate] = useState(
  //     TIMELINE_ITEMS[1].date,
  //   )

  //   const handleOptionClick = (title: string, date: string) => {
  //     setSelectedOption(title)
  //     setSelectedOptionDate(date)
  //     console.log(`Selected ${title}`)
  //   }
  return (
    <>
      <div className="bg-white">
        <div className="mx-auto max-w-[1440px] md:px-0 ">
          <NavigationWhiteScreen />
        </div>
      </div>
      <TimelineCLient />

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

export default Timeline2
