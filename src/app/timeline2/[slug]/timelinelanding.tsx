import React from 'react'
import { google } from 'googleapis'
import Link from 'next/link'
import { getGoogleSheetsData } from '../gsheet'
import TimelineCont from './timelinecont'

interface TimelineSideProps {
  id: string
  timelinesection: string
}
const TimelineSide: React.FC<TimelineSideProps> = async ({
  id,
  timelinesection,
}) => {
  const range = `Sheet1!A:D`
  const posts = await getGoogleSheetsData(range, timelinesection)
  return (
    <div className="flex flex-row mb-40 mt-10 justify-center max-w-[1440px] mx-auto px-10 lg:px-40 md:px-7 sm:px-7">
      <div className="basis-[38%] bg-thebiblesaysoffwhite  hidden md:block">
        <h6 className="font-lexend font-extrabold text-xl sm:text-2xl text-center pb-8 mt-8">
          Biblical Overview
        </h6>
        <div className="h-[500px] overflow-y-scroll">
          {posts?.slice(2).map((item, index) => (
            <Link
              className={`timelinesidepane flex flex-row justify-between px-10 py-4 cursor-pointer ${
                index === parseInt(id) - 3 ? 'bg-[#dc8b0133]' : ''
              }`}
              key={index}
              href={`/timeline2/biblical-overview/${index + 3}`}
            >
              <p>{item[2]}</p>
              <p>{item[0]}</p>
            </Link>
          ))}
        </div>
      </div>
      <TimelineCont id={id} timelinesection={timelinesection} />
    </div>
  )
}

export default TimelineSide
