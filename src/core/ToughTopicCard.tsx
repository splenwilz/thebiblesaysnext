import React from 'react'
import { Link } from 'react-router-dom'

interface ToughTopicCardProps {
  title: string
  imageUrl: string
  description: string
  viewLink: string
}

const ToughTopicCard: React.FC<ToughTopicCardProps> = ({
  title,
  imageUrl,
  description,
  viewLink,
}) => {
  return (
    <div className="h-100">
      <img className="object-cover w-full h-48" src={imageUrl} alt="title" />
      <div className="p-8 shadow-lg bg-thebiblesayswhite-100">
        <div className="block mb-4 h-36">
          <h6 className="text-lg font-lexend font-semibold tracking-tight mb-2">
            {title}
          </h6>
          <p className="mt-3 font-serifpro text-sm pr-5">{description}</p>
        </div>
        <div className="font-lexend flex flex-row h-2 mt-10">
          <button className="text-sm font-[400] font-lexend flex flex-row">
            <Link to={viewLink} className="font-lexend">
              See More
            </Link>
            <span className="ml-2 font-lexend font-semibold" aria-hidden="true">
              &rarr;
            </span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default ToughTopicCard
