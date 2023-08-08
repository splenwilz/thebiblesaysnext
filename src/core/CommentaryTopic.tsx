import React from 'react'

import Link from 'next/link'
import Image from 'next/image'

interface TopicProps {
  imageSrc: string
  title: string
  description: string
  link: string
  // widthDim: number
  // HeightDim: number
}
const truncateText = (text: string, maxLength: number) => {
  if (text.length <= maxLength) {
    return text
  }
  return text.slice(0, maxLength) + '...'
}
const CommentaryTopic: React.FC<TopicProps> = ({
  imageSrc,
  title,
  description,
  link,
  // widthDim,
  // HeightDim,
}) => {
  return (
    <div className="flex flex-col lg:flex-row gap-6 mb-7">
      <div className="topicImage w-full lg:basis-1/3">
        <Link href={link} className="">
          <Image
            src={imageSrc}
            alt=""
            className="w-full"
            width={500}
            height={500}
          />
        </Link>
      </div>
      <div className="w-full lg:basis-2/3">
        <Link href={link} className="text-6xl">
          <h2
            className="font-serifpro font-extrabold text-6xl dark:text-thebiblesayswhite-100"
            dangerouslySetInnerHTML={{
              __html: truncateText(title, 50),
            }}
            style={{ fontSize: '21px', fontWeight: '800' }}
            title={title}
          />
        </Link>
        <p
          className="font-serifpro text-sm mt-2 leading-6 dark:text-thebiblesayswhite-64"
          dangerouslySetInnerHTML={{
            __html: truncateText(description, 100),
          }}
        />
      </div>
    </div>
  )
}

export default CommentaryTopic
