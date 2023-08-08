import React from 'react'

import NavigationWhiteScreen from '@/components/NavigationWhiteScreen'
import FooterSection from '@/components/FooterSection'
import NewsletterSignupSection from '@/components/NewsletterSignupSection'

import map1 from '@/assets/images/map/map1.jpg'
import map2 from '@/assets/images/map/map2.jpg'
import map3 from '@/assets/images/map/map3.jpg'
import map4 from '@/assets/images/map/map4.jpg'
import map5 from '@/assets/images/map/map5.jpg'
import map6 from '@/assets/images/map/map6.jpg'
import map7 from '@/assets/images/map/map7.jpg'
import map8 from '@/assets/images/map/map8.jpg'
import MapGrid from '@/core/MapGrid'

const Maps: React.FC = () => {
  const images = [map1, map2, map3, map4, map5, map6, map7, map8]
  return (
    <>
      <div className="mx-auto max-w-[1440px] md:px-0 bg-white ">
        <NavigationWhiteScreen />
      </div>

      <div className="flex flex-row justify-center">
        <h1 className="font-lexend font-extrabold text-4xl md:text-5xl mt-20 mb-16">
          Biblical Maps
        </h1>
      </div>

      <MapGrid imageUrls={images} />

      <NewsletterSignupSection
        className="px-7 lg:px-40 md:px-7 mt-28 mb:mt-0"
        placeholder="Enter your Email"
        // onInputChange={(value) => console.log(value)}
        // onSubscribeClick={() => console.log('Subscribe clicked')}
      />

      <FooterSection className="px-7 lg:px-40 md:px-7" />
    </>
  )
}

export default Maps
