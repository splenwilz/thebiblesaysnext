import React from 'react'
import Button from '../core/Button'
import Link from 'next/link'
import Image from 'next/image'

type StaticImageData = {
  src: string
  height: number
  width: number
  blurDataURL?: string
}
interface AboutCardSectionProps {
  className?: string
  titleClass?: string
  descriptionClass?: string
  title: string
  description: string
  buttonLabel: string
  imageUrl: string | StaticImageData
}

const AboutCardSection: React.FC<AboutCardSectionProps> = ({
  className,
  titleClass,
  title,
  descriptionClass,
  description,
  buttonLabel,
  imageUrl,
}) => {
  return (
    <div
      className={`biblical-card bg-thebiblesayswhite-100 mx-auto max-w-[1440px] h-full pb-0 md:pb-24 mt-28 ${className}`}
    >
      <div className="flex flex-col md:flex-row bg-thebiblesayswhite-100 mb-2 pt-30 gap-8">
        <div className="basis-1/2 h-100">
          <h1 className={`font-lexend font-extrabold mt-6 ${titleClass}`}>
            {title}
          </h1>
          <p className={`font-serifpro mt-5 ${descriptionClass}`}>
            {description}
          </p>
          <Link href="/about" className="">
            <button
              className="bg-thebiblesaysorange text-thebiblesaysblack-100 px-8 py-4 mt-2 text-center text-xs font-bold font-lexend justify-self-center"
              // onClick={onClick}
            >
              {buttonLabel}
            </button>

            {/* <Button className="mt-8  md:ml-0 py-[17px] text-[15px]">
              {buttonLabel}
            </Button> */}
          </Link>
        </div>
        <div className="basis-1/2 pt-12 md:pt-0">
          <Image src={imageUrl} alt="spiritual growth" className="w-full" />
        </div>
      </div>
    </div>
  )
}

export default AboutCardSection
