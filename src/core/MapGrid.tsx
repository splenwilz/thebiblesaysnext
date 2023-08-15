'use client'

// import Image from 'next/image'
// import React, { useState } from 'react'
// type StaticImageData = {
//   src: string
//   height: number
//   width: number
//   blurDataURL?: string
// }
// interface ImageGridProps {
//   imageUrls: Array<string> | StaticImageData[]
// }

// const MapGrid: React.FC<ImageGridProps> = ({ imageUrls }) => {
//   const [fullscreenImage, setFullscreenImage] = useState<string | null>(null)
//   const handleImageClick = (imageUrl: string) => {
//     setFullscreenImage(imageUrl)
//   }
//   const handleCloseFullscreen = () => {
//     setFullscreenImage(null)
//   }
//   return (
//     <div className="grid md:grid-cols-2 lg:grid-cols-3 mx-auto justify-center items-center gap-9 md:gap-6 max-w-[1440px] px-0 lg:px-10 md:px-7 sm:px-7">
//       {imageUrls.map((imageUrl, index) => (
//         <div key={index} className="">
//           <Image
//             src={imageUrl}
//             alt=""
//             className="w-full cursor-pointer hover:backdrop-blur-lg"
//             onClick={() => handleImageClick(imageUrl: string)}
//           />
//           {fullscreenImage === imageUrl && (
//             <div
//               className="fixed inset-0 z-50 flex justify-center items-center bg-black bg-opacity-75"
//               onClick={handleCloseFullscreen}
//             >
//               <img
//                 src={imageUrl}
//                 alt=""
//                 className="max-h-full max-w-full"
//               />
//             </div>
//           )}
//         </div>
//       ))}
//     </div>
//   )
// }

// export default MapGrid
import Image from 'next/image'
import React, { useState } from 'react'

type ImageData = {
  src: string
  height: number
  width: number
  blurDataURL?: string
}

interface ImageGridProps {
  imageUrls: Array<string>
}

const ImageGrid: React.FC<ImageGridProps> = ({ imageUrls }) => {
  const [fullscreenImage, setFullscreenImage] = useState<string | null>(null)

  const handleImageClick = (imageUrl: string) => {
    setFullscreenImage(imageUrl)
  }

  const handleCloseFullscreen = () => {
    setFullscreenImage(null)
  }

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 mx-auto justify-center items-center gap-9 md:gap-6 max-w-[1440px] px-0 lg:px-10 md:px-7 sm:px-7">
      {imageUrls.map((imageUrl, index) => (
        <div key={index} className="">
          <Image
            src={typeof imageUrl === 'string' ? imageUrl : imageUrl}
            alt=""
            width={500}
            height={500}
            className="w-full cursor-pointer hover:backdrop-blur-lg"
            onClick={() => handleImageClick(imageUrl)}
          />
          {fullscreenImage === imageUrl && (
            <div
              className="fixed inset-0 z-50 flex justify-center items-center bg-black bg-opacity-75  w-full h-full"
              onClick={handleCloseFullscreen}
            >
              <Image
                src={imageUrl}
                alt=""
                layout="fill"
                objectFit="contain"
                quality={100}
              />
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

export default ImageGrid
