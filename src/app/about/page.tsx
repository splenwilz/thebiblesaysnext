import React from 'react'

import Navigation from '@/components/Navigation'

import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import NewsletterSignupSection from '@/components/NewsletterSignupSection'
import FooterSection from '@/components/FooterSection'
import SliderCard from '@/components/SliderCard'

import aboutbg from '@/assets/images/about/aboutbg.jpg'
const About: React.FC = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    accessibility: true,
    adaptiveHeight: true,
    arrows: true,
    autoplay: true,
  }

  return (
    <>
      <div
        className=" bg-cover pb-36"
        style={{ backgroundImage: `url('${aboutbg.src}')` }}
      >
        <div className="mx-auto max-w-[1440px] md:px-0">
          <Navigation />
          <div className="flex flex-col justify-center mt-24">
            <h1 className="font-lexend text-3xl md:text-5xl text-white font-extrabold text-center mx-10 md:mx-10 min-[771px]:mx-20 lg:mx-52 min-[1220px]:mx-96  leading-52">
              Spiritual Growth Through Scriptural Understanding
            </h1>
            <p className="text-center text-thebiblesayswhite-100 font-serifpro mt-16 mx-10 md:mx-10 min-[771px]:mx-20 lg:mx-52 min-[1220px]:mx-96 text-[18px]">
              The Bible Says seeks to enrich your personal bible study, small
              group, church or micro-church by providing easy-to-navigate
              commentary covering every verse in the Bible.
            </p>
          </div>
        </div>
      </div>
      <div className="max-w-[1440px] mx-auto px-10 md:px-16 lg:px-40 mt-32">
        <p className="text-[22px] font-serifpro">
          We seek to empower lay-people, ministry leaders, and all believers by
          providing tools that will assist in their spiritual growth by
          enhancing direct access to the Biblical text. You will be able to
          quickly zoom into a verse or verses, and then zoom out to see the
          chapter context, and even zoom out further to see the book and
          Biblical context.
        </p>
        <p className="text-[18px] font-serifpro mt-6">
          The word text comes from the Greek word “textus”, from which we get
          the word “textile”, as in a tapestry. We see the whole Bible as a
          beautiful tapestry. Like a tapestry you cannot see where each thread
          connects from the front of the tapestry. But from the backside of the
          tapestry we see that each thread connects to other parts of the work.
          Likewise, understanding and studying the Bible as a whole is very
          important, because every chapter and every verse was written with the
          intention that it be read in context. We will have a quick way for you
          to follow these tapestry links.
        </p>
      </div>
      <div className="">
        <h2 className="font-lexend text-3xl md:text-3xl font-black text-center mb-20 mt-40">
          Our recommended approach
        </h2>
      </div>

      <div className="md:flex flex-row gap-8 px-10 md:px-16 lg:px-64 hidden mx-auto max-w-[1440px]">
        <div className="flex flex-col gap-8 basis-1/2">
          <div className="bg-thebiblesaysoffwhite p-8 w-full">
            <p className="font-serifpro font-extrabold text-7xl pb-8">1</p>
            <div className="">
              <h6 className="font-lexend font-black text-2xl mb-2">
                Observe what is stated
              </h6>
              <p className="font-serifpro mt-5">
                “What does this say?” Look through the eyes of the author, and
                listen through the ears of the intended audience. Ask yourself
                “If I were there, what would I have heard?”
              </p>
            </div>
          </div>
          <div className="bg-thebiblesaysoffwhite p-8 w-full">
            <p className="font-serifpro font-extrabold text-7xl pb-8">3</p>
            <div className="">
              <h6 className="font-lexend font-black text-2xl mb-2">
                Correlate your interpretation
              </h6>
              <p className="font-serifpro mt-5">
                Test to see if your interpretation matches the context. Ask
                “Does this fit a) the immediate context? b) the greater context?
                c) the broad context of the entire story arc of the Bible?” If
                not, go back to Step 1.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-8 mt-28 basis-1/2">
          <div className="bg-thebiblesaysoffwhite p-8 w-full">
            <p className="font-serifpro font-extrabold text-7xl pb-8">2</p>
            <div className="">
              <h6 className="font-lexend font-black text-2xl mb-2">
                Interpret what it means
              </h6>
              <p className="font-serifpro mt-5">
                Ask yourself, “What does this mean?” We tend to begin with what
                we want to hear, then interpret it in a manner that supports
                what we had already concluded. This tendency will get in the way
                of us hearing what the Bible is really saying. The Bible largely
                interprets itself; we just need to listen.
              </p>
            </div>
          </div>
          <div className="bg-thebiblesaysoffwhite p-8 w-full">
            <p className="font-serifpro font-extrabold text-7xl pb-8">4</p>
            <div className="">
              <h6 className="font-lexend font-black text-2xl mb-2">
                Apply what you have understood
              </h6>
              <p className="font-serifpro mt-5">
                Ask, “How can I apply this in my life?” We are engaging with the
                living word, the indwelling Spirit that teaches and transforms
                us. Application precedes transformation.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-8 px-10 md:px-16 lg:px-64 md:hidden  mx-auto max-w-[1440px]">
        <div className="flex flex-col gap-8 basis-1/2">
          <div className="bg-thebiblesaysoffwhite p-8 w-full">
            <p className="font-serifpro font-extrabold text-7xl pb-8">1</p>
            <div className="">
              <h6 className="font-lexend font-black text-2xl mb-2">
                Observe what is stated
              </h6>
              <p className="font-serifpro mt-5">
                “What does this say?” Look through the eyes ofthe author, and
                listen through the ears of the intended audience. Ask yourself,
                “If I were there, what would I have heard?”
              </p>
            </div>
          </div>
          <div className="bg-thebiblesaysoffwhite p-8 w-full">
            <p className="font-serifpro font-extrabold text-7xl pb-8">2</p>
            <div className="">
              <h6 className="font-lexend font-black text-2xl mb-2">
                Interpret what it means
              </h6>
              <p className="font-serifpro mt-5">
                Ask yourself, “What does this mean?” We tend to begin with what
                we want to hear, then interpret it in a manner that supports
                what we had already concluded. This tendency will get in the way
                of us hearing what the Bible is really saying. The Bible largely
                interprets itself; we just need to listen.
              </p>
            </div>
          </div>
          <div className="bg-thebiblesaysoffwhite p-8 w-full">
            <p className="font-serifpro font-extrabold text-7xl pb-8">3</p>
            <div className="">
              <h6 className="font-lexend font-black text-2xl mb-2">
                Correlate your interpretation
              </h6>
              <p className="font-serifpro mt-5">
                Test to see if your interpretation matches the context. Ask
                “Does this fit a) the immediate context? b) the greater context?
                c) the broad context of the entire story arc of the Bible?” If
                not, go back to Step 1.
              </p>
            </div>
          </div>

          <div className="bg-thebiblesaysoffwhite p-8 w-full">
            <p className="font-serifpro font-extrabold text-7xl pb-8">4</p>
            <div className="">
              <h6 className="font-lexend font-black text-2xl mb-2">
                Apply what you have understood
              </h6>
              <p className="font-serifpro mt-5">
                Ask, “How can I apply this in my life?” We are engaging with the
                living word, the indwelling Spirit that teaches and transforms
                us. Application precedes transformation.
              </p>
            </div>
          </div>
        </div>
      </div>
      <SliderCard />

      <NewsletterSignupSection
        className="px-7 lg:px-40 md:px-7 -mt-2 mb:mt-0"
        placeholder="Enter your Email"
        // onInputChange={(value) => console.log(value)}
        // onSubscribeClick={() => console.log('Subscribe clicked')}
      />
      <FooterSection className="px-7 lg:px-40 md:px-7" />
    </>
  )
}

export default About
