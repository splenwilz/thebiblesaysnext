'use client'
import React, { useState } from 'react'

interface AccordionItem {
  title: string
  content: string
}

export default function Accordion() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const handleClick = (index: number) => {
    setActiveIndex(index === activeIndex ? null : index)
  }

  const accordionData: AccordionItem[] = [
    {
      title: 'Accordion Item 1',
      content: 'Content for Accordion Item 1',
    },
    {
      title: 'Accordion Item 2',
      content: 'Content for Accordion Item 2',
    },
    {
      title: 'Accordion Item 3',
      content: 'Content for Accordion Item 3',
    },
    {
      title: 'Accordion Item 4',
      content: 'Content for Accordion Item 4',
    },
    {
      title: 'Accordion Item 5',
      content: 'Content for Accordion Item 5',
    },
  ]

  return (
    <div className="container mx-auto">
      {accordionData.map((item, index) => (
        <div className="border-gray-300 mb-4 rounded border" key={index}>
          <div
            className="accordion-header bg-gray-100 cursor-pointer px-4 py-2"
            onClick={() => handleClick(index)}
          >
            {item.title}
          </div>
          <div
            className={`accordion-content bg-white px-4 pb-4 pt-2 ${
              activeIndex === index ? 'block' : 'hidden'
            }`}
          >
            {item.content}
          </div>
        </div>
      ))}
    </div>
  )
}
