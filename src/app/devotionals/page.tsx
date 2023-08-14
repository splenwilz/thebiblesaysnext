import React from 'react'

import NavigationWhiteScreen from '@/components/NavigationWhiteScreen'
import minitbs from '@/assets/images/devotionals/minitbs.svg'
import yellowballon from '@/assets/images/devotionals/yellowballon.jpg'
import FooterSection from '@/components/FooterSection'
import Button from '@/core/Button'
import Image from 'next/image'
import Link from 'next/link'

const Devotionals: React.FC = () => {
  return (
    <>
      <div className="mx-auto max-w-[1440px] md:px-0 bg-white">
        <NavigationWhiteScreen />
      </div>
      <div className="flex flex-col mx-auto max-w-[1440px] md:flex-row mb-40 mt-10 px-10 lg:px-40 md:px-7 sm:px-7">
        <div className="pr-10">
          <h1 className="font-lexend text-5xl md:text-6xl font-extrabold mt-5 md:mt-20">
            Yellow Balloons Devotionals
          </h1>
          <div className="flex flex-row mt-5 ml-2">
            <span className="">A Partner of </span>
            <Image src={minitbs} alt="" className="ml-2 -mt-1" />
          </div>
          <div className="mt-5">
            <p className="font-serifpro leading-7">
              Check out the Yellow Balloons Devotionals. They connect age-old
              biblical truths with our modern day lives in a way that is simple,
              practical, and easy to understand.
            </p>
          </div>
          <Link href="https://yellowballoons.net/devotionals/" target="_blank">
            <Button className="mt-12  md:ml-0 py-[17px] text-[15px] w-40">
              View Devotionals
            </Button>
          </Link>
        </div>
        <div className="w-full mt-16 md:mt-2  px-0 lg:px-0">
          <Image src={yellowballon} alt="" className="w-full" />
        </div>
      </div>

      <FooterSection className="px-7 lg:px-40 md:px-7" />
    </>
  )
}

export default Devotionals
