import React from 'react'

interface TimelineItem {
  title: string
  date: string
}

interface TimelineListProps {
  items: TimelineItem[]
}

const TimelineList: React.FC<TimelineListProps> = ({ items }) => {
  return (
    <div>
      {items.map((item, index) => (
        <div className="flex flex-row justify-between px-4 mb-4" key={index}>
          <p>{item.title}</p>
          <p>{item.date}</p>
        </div>
      ))}
    </div>
  )
}

export default TimelineList
