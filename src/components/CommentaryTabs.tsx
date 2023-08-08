'use client'
import React, { useState } from 'react'

interface TabData {
  label: string
  content: React.ReactNode
}

interface CommentaryTabsProps {
  tabsData: TabData[]
}

const CommentaryTabs: React.FC<CommentaryTabsProps> = ({ tabsData }) => {
  const [activeTabIndex, setActiveTabIndex] = useState(0)

  return (
    <div className="">
      <div className="flex space-x-9 border-b dark:border-b-thebiblesayswhite-8">
        {tabsData.map((tab, index) => {
          return (
            <button
              key={index}
              className={`py-2 border-b-2 transition-colors duration-300 font-lexend text-[16px] ${
                index === activeTabIndex
                  ? 'border-thebiblesaysblack-64 dark:border-thebiblesayswhite-100 font-semibold dark:text-thebiblesayswhite-100'
                  : 'border-transparent dark:text-thebiblesayswhite-64'
              }`}
              onClick={() => setActiveTabIndex(index)}
            >
              {tab.label}
            </button>
          )
        })}
      </div>
      <div className="py-4 pr-9 max-h-[1000px] overflow-scroll">
        <div>{tabsData[activeTabIndex].content}</div>
      </div>
    </div>
  )
}

export default CommentaryTabs
