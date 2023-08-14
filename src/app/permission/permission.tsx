'use client'
import Button from '@/core/Button'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import Link from 'next/link'
import React, { useState } from 'react'

interface AccordionItem {
  title: string
  content: React.ReactNode // Accept React components as content
}

const AccordionContent1: React.FC = () => (
  <div>
    <p className="text-serif-pro mt-2">
      Navigate through 5 different timelines to learn more about the chronology
      of the books of the Bible and events in the biblical narrative as they
      fall in biblical history..
    </p>
    <Link href="./timeline">
      <Button className="mt-6  md:ml-0 py-[17px] text-[15px] w-fit">
        Click here for our Timelines
      </Button>
    </Link>
  </div>
)

const AccordionContent2: React.FC = () => (
  <div>
    <p className="text-serif-pro mt-2">
      If there is a relevant map(s) that exists for a particular passage, it can
      be found in the Additional Resources section of that commentary, under
      Maps and Charts. Click on the map to expand it. .
    </p>
    <p className="text-serif-pro mt-2">
      Also feel free to browse each map for yourself and become acquainted with
      the geography of the Bible.
    </p>
    <Link href="./maps">
      <Button className="mt-6 md:ml-0 py-[17px] text-[15px] w-fit">
        Click here for our Bible Maps
      </Button>
    </Link>
    <p className="text-serif-pro mt-6">
      We would like to give credit to{' '}
      <Link href="http://biblemapper.com/" target="_blank">
        BibleMapper.com
      </Link>{' '}
      for their free-to-use Bible maps.
    </p>
    {/* Add more React components or content here */}
  </div>
)

const AccordionContent3: React.FC = () => (
  <div>
    <p className="font-serifpro text-[16px] leading-6 mt-5">
      Next Step Discipleship Ministries <br />
      Attn: The Bible Says Commentary <br />
      5900 Whitman Drive <br />
      Midland, TX 79705 <br />
    </p>
  </div>
)

const AccordionContent4: React.FC = () => (
  <div className="">
    <p className="text-serif-pro mt-2">
      We encourage you to share our original commentary with your friends,
      family and congregation. You can download PDF and Word versions of our
      commentaries by going to the Additional Resources section on the right
      hand of the commentary page and clicking “Downloads.” We simply ask that
      you give credit to: TheBibleSays.com
    </p>
  </div>
)

const AccordionContent5: React.FC = () => (
  <div className="">
    <p className="text-serif-pro mt-2">
      The Yellow Balloons Devotionals connect age-old biblical truths with our
      modern day lives in a way that is simple, practical, and easy to
      understand. Sign up below to receive encouraging devotionals straight to
      your inbox.
    </p>
    <Link
      href="https://yellowballoons.us18.list-manage.com/subscribe/post?u=dcca8eb7e5675d6f700763ffd&id=acf0ddc3cb"
      target="_blank"
    >
      <Button className="mt-6 md:ml-0 py-[17px] text-[15px] w-fit">
        Signup
      </Button>
    </Link>
  </div>
)

const AccordionContent6: React.FC = () => (
  <div className="">
    <p className="text-serif-pro mt-2">
      Our commentary navigation has been designed with you in mind. Select the
      book, chapter, and verses you are interested in reading about. Easily go
      to the next or previous passages using the arrows on the sides of the
      commentary.
    </p>
    <p className="text-serif-pro mt-2">
      Quickly see the Chapter Context or Book Theme in the ‘Additional
      Resources’ section on the right of the page. You can also see maps,
      charts, podcasts and videos relevant to the particular set of verses.
    </p>
    <Link href="/commentary">
      <Button className="mt-6  md:ml-0 py-[17px] text-[15px] w-fit">
        Click here to get started
      </Button>
    </Link>
  </div>
)

const AccordionContent7: React.FC = () => (
  <div className="">
    <p className="text-serif-pro mt-2">
      Our Tough Topics Explained articles address significant Biblical themes to
      help enrich your understanding of the Bible.
    </p>
    <Link href="/tough-topics">
      <Button className="mt-6  md:ml-0 py-[17px] text-[15px] w-fit">
        Click here to get started
      </Button>
    </Link>
  </div>
)

const AccordionContent8: React.FC = () => (
  <div className="">
    <p className="text-serif-pro mt-2">
      Our commentary uses italics to denote immediate Biblical context. We aim
      to let the Bible speak for itself and to make it clear which words are our
      commentary and which ones are from the Biblical text. As you read our
      commentary, words and phrases that appear in the Biblical text will be
      italicized.
    </p>
  </div>
)

const AccordionContent9: React.FC = () => (
  <div className="">
    <p className="text-serif-pro mt-2">
      In the Additional Resources of each commentary you will see a Videos
      section. It is here that we embed videos from the Youtube Channel of Bible
      Project. Bible Project is a fantastic resource and all videos that are
      embedded from their Youtube Channel are completely owned by them.
      <Link href="https://www.youtube.com/@bibleproject" target="_blank">
        https://www.youtube.com/@bibleproject
      </Link>
    </p>
  </div>
)
export default function App() {
  const accordionData: AccordionItem[] = [
    {
      title: 'The Timeline Pages',
      content: <AccordionContent1 />,
    },
    {
      title: 'Bible Maps',
      content: <AccordionContent2 />,
    },
    {
      title: 'Contact The Bible Says',
      content: <AccordionContent3 />,
    },
    {
      title: ' Can I quote, print, or download The Bible Says Commentary?',
      content: <AccordionContent4 />,
    },
    {
      title: 'Yellow Ballon Devotionals',
      content: <AccordionContent5 />,
    },
    {
      title: 'Bible Commentary',
      content: <AccordionContent6 />,
    },
    {
      title: 'Tough Topics Explained',
      content: <AccordionContent7 />,
    },
    {
      title:
        ' Why are certain words italicized in the The Bible Says commentary?',
      content: <AccordionContent8 />,
    },
    {
      title: 'Videos',
      content: <AccordionContent9 />,
    },
  ]

  return (
    <div className="container mx-auto">
      {accordionData.map((item, index) => (
        <Accordion key={index} title={item.title} content={item.content} />
      ))}
    </div>
  )
}

function Accordion({ title, content }: AccordionItem) {
  const [isActive, setIsActive] = useState(false)

  const toggleAccordion = () => {
    setIsActive(!isActive)
  }

  return (
    <div className="mb-4 border">
      <div
        className="flex flex-row gap-3 accordion-header bg-thebiblesaysblack-8 cursor-pointer px-4 py-5 text-lg font-bold font-serifpro"
        onClick={toggleAccordion}
      >
        <ChevronDownIcon
          className={`w-6 transition-transform ${isActive ? 'rotate-180' : ''}`}
        />{' '}
        {title}
      </div>
      <div
        className={`accordion-content bg-white px-4 pb-4 pt-2 ${
          isActive ? 'block' : 'hidden'
        }`}
        style={{
          animation: isActive
            ? 'accordion-down 0.2s ease-out'
            : 'accordion-up 0.2s ease-out',
          overflow: 'hidden',
        }}
      >
        {content}
      </div>
    </div>
  )
}
