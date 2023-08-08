import React from 'react'
import ViewButton from './ViewButton'

interface BiblicalCardProps {
  title: string
  description: string
  viewLink: string
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
}

const BiblicalCard: React.FC<BiblicalCardProps> = ({
  title,
  description,
  viewLink,
  icon: Icon,
}) => {
  return (
    <div className="bg-thebiblesaysoffwhite h-70 mx-auto pl-10">
      <div className="h-40 block mb-9">
        <div className="rounded-full text-white w-10 mt-10 bg-thebiblesaysblack-100">
          <Icon className="" />
        </div>
        <h4 className="text-xl font-lexend font-extrabold mt-5">{title}</h4>
        <p className="mt-3 font-serifpro text-sm pr-5 w-full">{description}</p>
      </div>
      <ViewButton viewLink={viewLink} displayText="view" />
    </div>
  )
}

export default BiblicalCard
