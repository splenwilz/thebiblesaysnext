'use client'
import CommentaryDropdown from '@/components/CommentaryDropdown'
import CommentaryTimelineDropdown from '@/components/CommentaryTimelineDropdown'
import React from 'react'

const TimelineMenu = () => {
  const TIMELINE_ITEMS = [
    {
      id: 1,
      title: 'Take a Journey Through the Biblical Overview Timeline',
      date: '',
      content:
        'How were the Israelites guided out of Egypt?The Lord was going before them in a pillar of cloud by day to lead them on the way, and in a pillar of fire by night to give them light. The one pillar changed from smoke during the day to fire during the night. Not only did it lead Israel on its journey, it enabled them to travel by day and by night. It also might have been large enough to provide shade in the daytime and light when it was dark. It was also a constant presence, because He did not take away the pillar of cloud by day, nor the pillar of fire by night, from before the people. This became a symbol of the LORD’s abiding presence with His people. They could rely on His leadership, and it was in their best interest to obey and follow Him. The pillar was a visible confirmation of the constant presence of the LORD. The presence of the LORD meant that the Israelites were always led in the right direction and unceasingly protected as they travelled.',
    },
    {
      id: 2,
      title: 'The First Adam',
      date: '4000 BC',
      content: ' Adam',
    },
    {
      id: 3,
      title: 'Seth is Born',
      date: '3870 BC',
      content: ' Seth',
    },
    {
      id: 4,
      title: 'Enosh is Born',
      date: '3750 BC',
      content: ' Enosh',
    },
    {
      id: 5,
      title: 'Mahalalel is Born',
      date: '3660 BC',
      content: ' Mahalalel',
    },
    {
      id: 6,
      title: 'Kenan is Born',
      date: '3605 BC',
      content: ' Kenan',
    },
    {
      id: 7,
      title: 'Jared is Born',
      date: '3540 BC',
      content: ' Jared',
    },
    {
      id: 8,
      title: 'Enoch is Born',
      date: '3380 BC',
      content: ' Enoch',
    },
    {
      id: 9,
      title: 'Methusaleh is Born',
      date: '3310 BC',
      content: ' Methusaleh',
    },
    {
      id: 10,
      title: 'Lamech is Born',
      date: '3125 BC',
      content: ' Lamech',
    },
    {
      id: 11,
      title: 'The Birth of Noah',
      date: '3000 BC',
      content: ' Noah',
    },
    {
      id: 12,
      title: 'Shem is Born',
      date: '2450 BC',
      content: ' Shem',
    },
  ]
  return (
    <div className="border border-t-thebiblesaysblack-16 border-l-0 border-r-0 border-b-thebiblesaysblack-16 ">
      <div className=" flex flex-col mt-2 md:mt-0 md:flex-row py-4 justify-between mx-auto max-w-[1440px] px-10 lg:px-40 md:px-7 sm:px-7 ">
        <h6 className="font-lexend mt-2 font-semibold mb-2">Timelines</h6>
        <div className="flex flex-col min-[516px]:flex-row gap-1 sm:gap-4 justify-start md:justify-end">
          <CommentaryDropdown
            buttonClass="dark:border-thebiblesayswhite-8 dark:bg-thebiblesaysblack-100  dark:text-thebiblesayswhite-100 w-[300px]"
            dropdownContainerClass="dark:bg-thebiblesaysblack-100 dark:border dark:border-thebiblesayswhite-8 w-[300px]"
            dropDownItemClass="dark:text-thebiblesayswhite-100"
            options={[
              {
                optionlabel: 'Old Testament Events',
                link: './timeline2/old-testament-events',
              },
              {
                optionlabel: 'New Testament Events',
                link: './timeline2/new-testament-events',
              },
              {
                optionlabel: 'Old Testament Books',
                link: './timeline2/old-testament-books',
              },
              {
                optionlabel: 'New Testament Books',
                link: './timeline2/new-testament-books',
              },
              {
                optionlabel: 'Biblical Overview',
                link: './timeline2/biblical-overview',
              },
            ]}
            selectedOption="Biblical Overview"
            handleOptionClick={() => {
              console.log('Timeline selected')
            }}
          />
          {/* <CommentaryTimelineDropdown
            buttonClass="dark:border-thebiblesayswhite-8 dark:bg-thebiblesaysblack-100  dark:text-thebiblesayswhite-100 w-[300px]"
            dropdownContainerClass="dark:bg-thebiblesaysblack-100 dark:border dark:border-thebiblesayswhite-8 w-[300px]"
            dropDownItemClass="dark:text-thebiblesayswhite-100"
            options={TIMELINE_ITEMS}
            selectedOption={
              <div className="flex flex-row justify-between gap-6">
                {' '}
              </div>
            }
            handleOptionClick={() => {
              console.log('')
            }}
          /> */}
        </div>
      </div>
    </div>
  )
}

export default TimelineMenu
