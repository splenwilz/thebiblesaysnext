import Image from 'next/image'
import React from 'react'
type StaticImageData = {
  src: string
  height: number
  width: number
  blurDataURL?: string
}
interface ImageGridProps {
  imageUrls: Array<string> | StaticImageData[]
}

const MapGrid: React.FC<ImageGridProps> = ({ imageUrls }) => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 mx-auto justify-center items-center gap-9 md:gap-6 max-w-[1440px] px-0 lg:px-10 md:px-7 sm:px-7">
      {imageUrls.map((imageUrl, index) => (
        <div key={index} className="">
          <Image
            src={imageUrl}
            alt=""
            className="w-full cursor-pointer hover:backdrop-blur-lg"
          />
        </div>
      ))}
    </div>
  )
}

export default MapGrid
