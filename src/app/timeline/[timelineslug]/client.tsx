'use client'
import React, { useEffect, useState } from 'react'
import { ChevronRightIcon } from '@heroicons/react/24/outline'
import CommentaryDropdown from '@/components/CommentaryDropdown'
import CommentaryTimelineDropdown from '@/components/CommentaryTimelineDropdown'
import NewsletterSignupSection from '@/components/NewsletterSignupSection'
import Link from 'next/link'
import { biblicalTimeline } from '@/timelines/biblical-timeline'
import { newTestamentEvents } from '@/timelines/new-testament-events'
import { oldTestamentEvents } from '@/timelines/old-testament-events'
import { newTestamentBooks } from '@/timelines/new-testment-books'
import { oldTestamentBooks } from '@/timelines/old-testament-books'

interface TimelineData {
  Year: string
  End_Year: string
  Headline: string
  Text: string
  Media: string
  Media_Credit: string
  Media_Caption: string
  Media_Thumbnail: string
  Type: string
  Background: string
}

interface TimelineCLientProps {
  timelineslug: string
}
interface SpreadsheetIds {
  [key: string]: TimelineData[]
}
const TimelineCLient: React.FC<TimelineCLientProps> = ({ timelineslug }) => {
  const SPREADSHEET_IDS: SpreadsheetIds = {
    'biblical-overview': biblicalTimeline,
    'old-testament-events': oldTestamentEvents,
    'new-testament-events': newTestamentEvents,
    'old-testament-books': oldTestamentBooks,
    'new-testament-books': newTestamentBooks,
  }
  const TIMELINE_ITEMS = SPREADSHEET_IDS[timelineslug]

  const [currentItem, setCurrentItem] = useState<number>(0)

  const handlePrevItem = () => {
    setCurrentItem((prevItem) => (prevItem > 0 ? prevItem - 1 : 0))
  }

  const handleNextItem = () => {
    setCurrentItem((prevItem) =>
      prevItem < TIMELINE_ITEMS.length - 1 ? prevItem + 1 : prevItem,
    )
  }

  const renderTimelineItems = () => {
    return TIMELINE_ITEMS.slice(1).map((item, index) => (
      <div
        className={`timelinesidepane flex flex-row justify-between px-10 py-4 cursor-pointer ${
          index === currentItem - 1 ? 'bg-[#dc8b0133]' : ''
        }`}
        key={index}
        onClick={() => {
          setCurrentItem(index + 1)
        }}
      >
        <p>{item.Headline}</p>
        <p>{item.Year}</p>
      </div>
    ))
  }

  const renderPrevButton = () => {
    if (currentItem > 0) {
      const prevItem = TIMELINE_ITEMS[currentItem - 1]
      return (
        <button
          className="p-2 border flex flex-row w-60 font-lexend text-[15px] justify-between"
          onClick={handlePrevItem}
        >
          {prevItem.Headline}
          <ChevronRightIcon className="ml-3 w-3" />
        </button>
      )
    }
    return null
  }

  const renderNextButton = () => {
    if (currentItem < TIMELINE_ITEMS.length - 1) {
      const nextItem = TIMELINE_ITEMS[currentItem + 1]
      return (
        <button
          className="p-2 border flex flex-row w-60 font-lexend text-[15px] justify-between"
          onClick={handleNextItem}
        >
          {nextItem.Headline}
          <ChevronRightIcon className="ml-3 w-3" />
        </button>
      )
    }
    return null
  }

  const [selectedOption, setSelectedOption] = useState(
    TIMELINE_ITEMS[1].Headline,
  )
  const [selectedOptionDate, setSelectedOptionDate] = useState(
    TIMELINE_ITEMS[1].Year,
  )

  const handleOptionClick = (title: string, date: string) => {
    setSelectedOption(title)
    setSelectedOptionDate(date)
    console.log(`Selected ${title}`)
  }
  return (
    <>
      <div className="border border-t-thebiblesaysblack-16 border-l-0 border-r-0 border-b-thebiblesaysblack-16 ">
        <div className=" flex flex-col mt-2 md:mt-0 md:flex-row py-4 justify-between mx-auto max-w-[1440px] px-10 lg:px-40 md:px-7 sm:px-7 ">
          <h6 className="font-lexend mt-2 font-semibold mb-2">
            Timelines {timelineslug}
          </h6>
          <div className="flex flex-col min-[516px]:flex-row gap-1 sm:gap-4 justify-start md:justify-end">
            <CommentaryDropdown
              buttonClass="dark:border-thebiblesayswhite-8 dark:bg-thebiblesaysblack-100  dark:text-thebiblesayswhite-100 w-[300px]"
              dropdownContainerClass="dark:bg-thebiblesaysblack-100 dark:border dark:border-thebiblesayswhite-8 w-[300px]"
              dropDownItemClass="dark:text-thebiblesayswhite-100"
              options={[
                {
                  optionlabel: 'Old Testament Events',
                  link: './timeline/old-testament-events',
                },
                {
                  optionlabel: 'New Testament Events',
                  link: './timeline/new-testament-events',
                },
                {
                  optionlabel: 'Old Testament Books',
                  link: './timeline/old-testament-books',
                },
                {
                  optionlabel: 'New Testament Books',
                  link: './timeline/new-testament-books',
                },
                {
                  optionlabel: 'Biblical Overview',
                  link: './timeline/biblical-overview',
                },
              ]}
              selectedOption="Biblical Overview"
              handleOptionClick={() => {
                console.log('Timeline selected')
              }}
            />
            <CommentaryTimelineDropdown
              buttonClass="dark:border-thebiblesayswhite-8 dark:bg-thebiblesaysblack-100  dark:text-thebiblesayswhite-100 w-[300px]"
              dropdownContainerClass="dark:bg-thebiblesaysblack-100 dark:border dark:border-thebiblesayswhite-8 w-[300px]"
              dropDownItemClass="dark:text-thebiblesayswhite-100"
              options={TIMELINE_ITEMS}
              selectedOption={
                <div className="flex flex-row justify-between gap-6">
                  {' '}
                  <p>{selectedOption}</p>
                  <p>{selectedOptionDate}</p>
                </div>
              }
              handleOptionClick={handleOptionClick}
            />
          </div>
        </div>
      </div>
      <div className="flex flex-row mb-40 mt-10 justify-center max-w-[1440px] mx-auto px-10 lg:px-40 md:px-7 sm:px-7">
        <div className="basis-[38%] bg-thebiblesaysoffwhite  hidden md:block">
          <h6 className="font-lexend font-extrabold text-xl sm:text-2xl text-center pb-8 mt-8">
            Biblical Overview
          </h6>
          <div
            className="h-[500px] overflow-y-scroll"
            style={{ scrollbarWidth: 'none' }}
          >
            {renderTimelineItems()}
          </div>
        </div>
        <div className="w-full lg:basis-[62%] px-0 md:px-12">
          <div className="timelineitems ">
            {currentItem < TIMELINE_ITEMS.length && (
              <>
                {TIMELINE_ITEMS[currentItem].Year && (
                  <span className="font-lexend font-semibold text-[15px] ml-1 mb-2 block">
                    {TIMELINE_ITEMS[currentItem].Year}
                  </span>
                )}
                <h1 className="font-lexend font-extrabold text-4xl">
                  {TIMELINE_ITEMS[currentItem].Headline}
                </h1>
                <p
                  className="font-serifpro leading-6 mt-5 h-[390px] overflow-y-scroll"
                  style={{ scrollbarWidth: 'none' }}
                >
                  {TIMELINE_ITEMS[currentItem].Text}
                </p>
              </>
            )}
          </div>
          <div
            className={`flex flex-row ${
              TIMELINE_ITEMS[currentItem - 1]
                ? 'justify-between'
                : 'justify-end'
            } mt-20`}
          >
            {renderPrevButton()}
            {renderNextButton()}
          </div>
        </div>
      </div>
    </>
  )
}

export default TimelineCLient
