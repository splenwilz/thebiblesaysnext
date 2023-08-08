import Link from 'next/link'
import React from 'react'

interface ViewButtonProps {
  viewLink: string
  displayText: string
  className?: string
  textClass?: string
  spanClass?: string
}

const ViewButton: React.FC<ViewButtonProps> = ({
  viewLink,
  displayText,
  className,
  textClass,
  spanClass,
}) => {
  return (
    <div className={`font-lexend flex flex-row mt-20 mb-5 h-10 ${className}`}>
      <button className="text-sm font-[400] font-lexend flex flex-row">
        <Link href={viewLink} className={`font-lexend ${textClass}`}>
          {displayText}
        </Link>
        <span
          className={`ml-2 font-lexend font-semibold ${spanClass}`}
          aria-hidden="true"
        >
          &rarr;
        </span>
      </button>
    </div>
  )
}

export default ViewButton
