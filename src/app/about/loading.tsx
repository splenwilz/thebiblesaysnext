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
