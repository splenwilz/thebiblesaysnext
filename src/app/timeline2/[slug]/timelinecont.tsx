import React from 'react'
import { google } from 'googleapis'
import Link from 'next/link'
import { getGoogleSheetsData } from '../gsheet'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline'
import PrevNext from './prevnext'

interface TimelineContProps {
  id: string
  timelinesection: string
}
const TimelineCont: React.FC<TimelineContProps> = async ({
  id,
  timelinesection,
}) => {
  // const TimelineCont = async () => {
  const useId = id ? id : '3'

  const range = `Sheet1!A${useId}:D${useId}`
  const item = await getGoogleSheetsData(range, timelinesection)

  //   console.log(item)
  return (
    <div className="w-full lg:basis-[62%] px-0 md:px-12">
      <div className="timelineitems ">
        <>
          <span className="font-lexend font-semibold text-[15px] ml-1 mb-2 block">
            {item ? item[0][0] : ''}
          </span>

          <h1 className="font-lexend font-extrabold text-4xl">
            {item ? item[0][2] : ''}
          </h1>
          <p className="font-serifpro leading-6 mt-5 h-[500px] overflow-y-scroll">
            {item ? item[0][3] : ''}
          </p>
        </>
      </div>
      <PrevNext id={id} timelinesection={timelinesection} />
    </div>
  )
}

export default TimelineCont
