import Image from 'next/image'
import React from 'react'
type StaticImageData = {
  src: string
  height: number
  width: number
  blurDataURL?: string
}
interface ReviewCardProps {
  reviewText: string
  authorName: string
  authorTitle: string
  authorImage: string | StaticImageData
}
// type StaticImageData = { src: string; height: number; width: number; blurDataURL?: string; }

const ReviewCard: React.FC<ReviewCardProps> = ({
  reviewText,
  authorName,
  authorTitle,
  authorImage,
}) => {
  return (
    <div className="reviews ml-0 mr-0 md:ml-20 md:mr-20 lg:ml-40 lg:mr-40 pt-16 mb-40 md:mb-20">
      <p className="font-serifpro italic text-lg lg:text-[16px] leading-8 text-center">
        {reviewText}
      </p>
      <div className="">
        <figcaption className="mt-10">
          <Image
            className="mx-auto w-26 md:w-10 rounded-full"
            width={73}
            src={authorImage}
            alt=""
          />
          <div className="mt-4 flex flex-col md:flex-row items-center justify-center space-x-3 text-base">
            <div className="font-semibold text-gray-900 font-lexend text-[16px]">
              {authorName}
            </div>
            <svg
              viewBox="0 0 2 2"
              width={2}
              height={2}
              aria-hidden="true"
              className="fill-gray-900"
            >
              <circle cx={1} cy={1} r={1} />
            </svg>
            <div className="text-[14px] font-lexend pt-1 md:pt:0">
              {authorTitle}
            </div>
          </div>
        </figcaption>
      </div>
    </div>
  )
}

export default ReviewCard
