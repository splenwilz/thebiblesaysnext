import React from 'react'
import Biblicalmap from '../assets/icons/biblicalmaps.svg'
import Readscriptures from '../assets/icons/readscriptures.svg'
import { MinusIcon } from '@heroicons/react/24/outline'
import ViewButton from '../core/ViewButton'
import Image from 'next/image'

const BiblicalSection: React.FC = () => {
  return (
    <div className="biblical-card bg-thebiblesayswhite-100 mx-auto max-w-[1440px] px-7 lg:px-40 md:px-7">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-thebiblesaysoffwhite h-70 mx-auto pl-10">
          <div className="h-40 block mb-9">
            <div className="rounded-full text-white w-10 mt-10 bg-thebiblesaysblack-100">
              <MinusIcon className="" />
            </div>
            <h4 className="text-xl font-lexend font-extrabold mt-5">
              Biblical Timeline
            </h4>
            <p className="mt-3 font-serifpro text-sm pr-5 w-full">
              Better understand historic context with interactive timelines of
              Biblical events.
            </p>
          </div>
          <ViewButton viewLink="timeline" displayText="view" />
        </div>

        <div className="bg-thebiblesaysoffwhite h-70 mx-auto pl-10">
          <div className="h-40 block mb-9">
            <div className="rounded-full  text-white w-10 h-10 p-2 mt-10 bg-thebiblesaysblack-100">
              <Image src={Biblicalmap} alt="" className="h-4 w-5 mt-1" />
            </div>

            <h4 className="text-xl font-lexend font-extrabold mt-5">
              Biblical Maps
            </h4>
            <p className="mt-3 font-serifpro text-sm pr-5 w-full">
              Get to know the geographic context of Biblical events with maps of
              Israel and the surrounding region from different periods of
              history
            </p>
          </div>
          <ViewButton viewLink="maps" displayText="view" />
        </div>

        <div className="bg-thebiblesaysoffwhite h-70 mx-auto pl-10">
          <div className="h-40 block mb-9">
            <div className="rounded-full  text-white w-10 h-10 p-2 mt-10 bg-thebiblesaysblack-100">
              <Image src={Readscriptures} alt="" className="h-4 w-5 mt-1" />
            </div>
            <h4 className="text-xl font-lexend font-extrabold mt-5">
              Read Scripture
            </h4>
            <p className="mt-3 font-serifpro text-sm pr-5 w-full">
              Use our site to search, read, and study scripture.
            </p>
          </div>
          <ViewButton viewLink="bible" displayText="view" />
        </div>
      </div>
    </div>
  )
}

export default BiblicalSection
