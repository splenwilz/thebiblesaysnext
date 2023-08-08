'use client'
import React from 'react'

import Image from 'next/image'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import ReviewCard from '@/components/ReviewCard'

import david from '../assets/images/david.svg'
import joey from '../assets/images/Joey.png.webp'
import bobfu from '../assets/images/bobfu1.png.webp'

const SliderCard = () => {
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
    <div className="biblical-card bg-thebiblesayswhite-100 mx-auto max-w-[1440px] px-7 md:px-24">
      <Slider {...sliderSettings}>
        <ReviewCard
          reviewText={
            '"One writers and editors of TheBibleSays.com are some of the most biblically knowledgeable people I know, and are committed to providing the reader with insight to the biblical context, as it was intended by the Bible’s authors. I have been consulted and reviewed portions of their work, and believe they are providing a great service to lay readers, to help them in their journey to read and discover the great truths of the Bible for themselves."'
          }
          authorName="David Anderson PhD"
          authorTitle="President Grace School of Theology"
          authorImage={david}
        />
        <ReviewCard
          reviewText={
            '"It has been a great honor to join the team of contributors for TheBibleSays.com. Our goal is to be a commentary that does not get stuck in the weeds while at the same time providing robust clarity. My fellow contributors and TheBibleSays.com editors diligently seek to provide a framework to focus on what the Scriptures say, letting them speak for themselves. By looking at passages in context, and showing the practical realities inherent in each passage, TheBibleSays.com helps readers to see and apply the life-changing truth of the Biblical message. "'
          }
          authorName="Joey Willis"
          authorTitle="Director of Student Development; The King's College"
          authorImage={joey}
        />
        <ReviewCard
          reviewText={
            '"TheBibleSays is an absolute to go source if you like to seek wholistic biblical truth with coherent context and biblical exposition in systemic way. Highly recommend it with full endorsement"'
          }
          authorName="Rev. Bob Fu"
          authorTitle="PhD, founder and president of ChinaAid"
          authorImage={bobfu}
        />
      </Slider>
    </div>
  )
}

export default SliderCard
