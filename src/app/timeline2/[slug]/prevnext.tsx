import { getGoogleSheetsData } from '@/app/timeline2/gsheet'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import React from 'react'

interface PrevNextProps {
  id: string
  timelinesection: string
}

const PrevNext: React.FC<PrevNextProps> = async ({ id, timelinesection }) => {
  // const PrevNext = () => {
  const useId = id ? id : '3'
  const nextId = parseInt(id) < 3 ? '3' : useId
  //   const range = `Sheet1!A${useId}:D${useId}`
  const range = `Sheet1!A${(parseInt(nextId) - 1).toString()}:D${(
    parseInt(nextId) + 1
  ).toString()}`
  const item = await getGoogleSheetsData(range, timelinesection)
  console.log(item)
  // const useId = id === '1' ? '2' : id
  return (
    <div
      className={`flex flex-row ${
        true ? 'justify-between' : 'justify-end'
      } mt-20`}
    >
      <Link
        href={`./${timelinesection}/${useId ? parseInt(useId) - 1 : 1}`}
        className="p-2 border flex flex-row w-60 font-lexend text-[15px] justify-between"
        //   onClick={handleNextItem}
      >
        {item ? item[0][2] : ''}
        <ChevronLeftIcon className="mr-3 w-3" />
      </Link>
      <Link
        href={`./${timelinesection}/${useId ? parseInt(useId) + 1 : 1}`}
        className="p-2 border flex flex-row w-60 font-lexend text-[15px] justify-between"
        //   onClick={handleNextItem}
      >
        <ChevronRightIcon className="ml-3 w-3" />
        {item ? item[2][2] : ''}
      </Link>
    </div>
  )
}

export default PrevNext
