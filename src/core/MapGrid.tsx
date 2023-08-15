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
import React, { useState } from 'react'
import Image from 'next/image'

type ImageData = {
  src: string
  height: number
  width: number
}

interface ImageGridProps {
  imageUrls: Array<string | ImageData>
}

const ImageGrid: React.FC<ImageGridProps> = ({ imageUrls }) => {
  const [fullscreenImageSrc, setFullscreenImageSrc] = useState<string | null>(
    null,
  )

  const handleImageClick = (imageUrl: string | ImageData) => {
    if (typeof imageUrl === 'string') {
      setFullscreenImageSrc(imageUrl)
    } else {
      setFullscreenImageSrc(imageUrl.src)
    }
  }

  const handleCloseFullscreen = () => {
    setFullscreenImageSrc(null)
  }

  const images = [
    { src: '/assets/images/map/map1.jpg', height: 500, width: 500 },
    { src: '/assets/images/map/map2.jpg', height: 500, width: 500 },
    { src: '/assets/images/map/map3.jpg', height: 500, width: 500 },
    { src: '/assets/images/map/map4.jpg', height: 500, width: 500 },
    { src: '/assets/images/map/map5.jpg', height: 500, width: 500 },
    { src: '/assets/images/map/map6.jpg', height: 500, width: 500 },
    { src: '/assets/images/map/map7.jpg', height: 500, width: 500 },
    { src: '/assets/images/map/map8.jpg', height: 500, width: 500 },
  ]

  return (
    // <div className="grid md:grid-cols-2 lg:grid-cols-3 mx-auto justify-center items-center gap-9 md:gap-6 max-w-[1440px] px-0 lg:px-10 md:px-7 sm:px-7">
    //   {imageUrls.map((imageUrl, index) => (
    //     <div key={index} className="">
    //       <Image
    //         src={typeof imageUrl === 'string' ? imageUrl : imageUrl.src}
    //         alt=""
    //         width={500}
    //         height={500}
    //         className="w-full cursor-pointer hover:backdrop-blur-lg"
    //         onClick={() => handleImageClick(imageUrl)}
    //       />
    //       {fullscreenImageSrc === imageUrl.src && (
    //         <div
    //           className="fixed inset-0 z-50 flex justify-center items-center bg-black bg-opacity-75 w-full h-full"
    //           onClick={handleCloseFullscreen}
    //         >
    //           <Image
    //             src={
    //               typeof imageUrl === 'string' ? imageUrl : imageUrl.src
    //             }
    //             alt=""
    //             layout="fill"
    //             objectFit="contain"
    //             quality={100}
    //           />
    //         </div>
    //       )}
    //     </div>
    //   ))}
    // </div>

    // {imageUrls && (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto justify-center items-center gap-9 md:gap-6 max-w-7xl px-0 lg:px-10 md:px-7 sm:px-7">
      {images?.map((mapimg, index) => (
        <div key={index} className="relative">
          <Image
            src={mapimg.src}
            width={mapimg.width}
            height={mapimg.height}
            alt=""
            className="w-full cursor-pointer hover:backdrop-blur-lg"
            onClick={() => handleImageClick(mapimg.src)}
          />

          {fullscreenImageSrc === mapimg.src && (
            <div
              className="fixed inset-0 z-50 flex justify-center items-center bg-black bg-opacity-75"
              onClick={handleCloseFullscreen}
            >
              <Image
                src={mapimg.src}
                alt=""
                className="max-h-full max-w-full"
                // width={mapimg.width}
                // height={mapimg.height}
                layout="fill"
                objectFit="contain"
                quality={100}
              />
            </div>
          )}
        </div>
      ))}
    </div>
    // )}
  )
}

export default ImageGrid
