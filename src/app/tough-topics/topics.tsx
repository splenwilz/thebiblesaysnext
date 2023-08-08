import React from 'react'
import CommentaryTopic from '@/core/CommentaryTopic'

export default async function ToughTopics() {
  let data: ToughTopics | null = null
  let error: string | null = null

  try {
    const response = await fetch(
      'https://thebiblesays.com/wp-json/tbs/v1/topics?category=2448',
    )

    if (!response.ok) {
      throw new Error('Failed to fetch data')
    }

    data = await response.json()
  } catch (err) {
    error = 'An error occurred while fetching data. Please try again later.'
  }

  if (error) {
    return (
      <div className="bg-thebiblesaysoffwhite">
        <div className=" mx-auto max-w-[1440px] h-full pb-24 px-7 md:px-10 lg:px-40">
          <div className="mt-8 text-center text-red-600">{error}</div>
        </div>
      </div>
    )
  }

  return (
    <div className="flex flex-col mt-10 mb-10 sm:mr-10 lg:pr-20 px-10 lg:px-10 md:px-7 sm:px-7">
      <div className="flex flex-col">
        {data?.data.map((topic, index) => (
          <div className="" key={index}>
            <CommentaryTopic
              imageSrc={topic.image_url}
              title={topic.topic_title}
              description={topic.summary}
              link={topic.link.substring('https://thebiblesays.com'.length)}
            />
          </div>
        ))}
      </div>
    </div>
  )
}
