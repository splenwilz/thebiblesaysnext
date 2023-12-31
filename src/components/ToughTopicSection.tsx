import React, { useState } from 'react'
import Button from '../core/Button'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import Link from 'next/link'
import Image from 'next/image'

const truncateText = (text: string, maxLength: number) => {
  if (text.length <= maxLength) {
    return text
  }
  return text.slice(0, maxLength) + '...'
}

export default async function ToughTopicsSection() {
  // const [itemsToShow, setItemsToShow] = useState(3)
  let itemsToShow = 3
  let data: ToughTopics | null = null
  let error: string | null = null

  // const handleLoadMore = () => {
  //   // Increase the number of items to show by, for example, 3 more
  //   setItemsToShow((prevItems) => prevItems + 3)
  // }
  try {
    const response = await fetch(
      'https://thebiblesays.com/wp-json/tbs/v1/topics?category=2448',
    )

    if (!response.ok) {
      throw new Error('Failed to fetch data')
    }

    data = await response.json()
  } catch (err) {
    error = 'An error occurred while fetching data. Please try again later.'
  }

  if (error) {
    return (
      <div className="bg-thebiblesaysoffwhite">
        <div className=" mx-auto max-w-[1440px] h-full pb-24 px-7 md:px-10 lg:px-40">
          <h2 className="text-center font-lexend font-extrabold text-3xl pt-24 mb-16">
            Tough Topics
          </h2>
          <div className="mt-8 text-center text-red-600">{error}</div>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-thebiblesaysoffwhite">
      <div className=" mx-auto max-w-[1440px] h-full pb-24 px-7 md:px-10 lg:px-40">
        <h2 className="text-center font-lexend font-extrabold text-3xl pt-24 mb-16">
          Tough Topics
        </h2>
        {!data ? (
          <div className="mt-20 grid md:grid-cols-2 lg:grid-cols-3 justify-center items-center gap-8 space-y-1 md:space-y-0">
            <div className="h-100">
              <Skeleton height={192} className="" />
              <div className="p-8 shadow-lg">
                <div className="block mb-4 h-36">
                  <Skeleton className="text-lg font-lexend font-semibold tracking-tight mb-2" />
                  <Skeleton
                    className="mt-3 font-serifpro text-sm pr-5 text-ellipsis overflow-hidden"
                    count={4}
                  />
                </div>
              </div>
            </div>

            <div className="h-100">
              <Skeleton height={192} className="" />
              <div className="p-8 shadow-lg">
                <div className="block mb-4 h-36">
                  <Skeleton className="text-lg font-lexend font-semibold tracking-tight mb-2" />
                  <Skeleton
                    className="mt-3 font-serifpro text-sm pr-5 text-ellipsis overflow-hidden"
                    count={4}
                  />
                </div>
              </div>
            </div>

            <div className="h-100">
              <Skeleton height={192} className="" />
              <div className="p-8 shadow-lg">
                <div className="block mb-4 h-36">
                  <Skeleton className="text-lg font-lexend font-semibold tracking-tight mb-2" />
                  <Skeleton
                    className="mt-3 font-serifpro text-sm pr-5 text-ellipsis overflow-hidden"
                    count={4}
                  />
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="mt-20 grid md:grid-cols-2 lg:grid-cols-3 justify-center items-center gap-8 space-y-1 md:space-y-0">
            {data?.data.slice(0, itemsToShow).map((topic, index) => (
              <div className="h-100 " key={index}>
                <Link href={topic.link} className="">
                  <Image
                    className="object-cover w-full h-48"
                    width={500}
                    height={500}
                    alt={topic.topic_title}
                    src={topic.image_url}
                  />
                </Link>
                <div className="p-8 shadow-lg bg-thebiblesayswhite-100">
                  <div className="block mb-4 h-36">
                    <Link href={topic.link} className="">
                      <h6
                        className="text-lg font-lexend font-semibold tracking-tight mb-2"
                        title={topic.topic_title}
                        dangerouslySetInnerHTML={{
                          __html: truncateText(topic.topic_title, 50),
                        }}
                      />
                    </Link>

                    <p
                      className="mt-3 font-serifpro text-sm pr-5 h-20 text-ellipsis overflow-hidden"
                      dangerouslySetInnerHTML={{
                        __html: truncateText(topic.summary, 100),
                      }}
                    />
                  </div>
                  <div className="font-lexend flex flex-row h-2 mt-10">
                    <button className="text-sm font-[400] font-lexend flex flex-row">
                      <Link
                        href={topic.link.substring(
                          'https://13.51.172.229'.length,
                        )}
                        className="font-lexend"
                      >
                        See More
                      </Link>
                      <span
                        className="ml-2 font-lexend font-semibold"
                        aria-hidden="true"
                      >
                        &rarr;
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
        <div className="grid grid-flex mt-8 justify-center">
          {(data?.data.length ?? 0) > 3 && (
            <div className="grid grid-flex mt-8 justify-center">
              <button
                className="bg-thebiblesaysorange text-thebiblesaysblack-100 px-8 py-4 mt-2 text-center text-xs font-bold font-lexend justify-self-center hover:text-thebiblesayswhite-100 hover:bg-[#aa6b00]"
                // onClick={onClick}
              >
                <Link href="/tough-topics">See More</Link>
              </button>

              {/* <Button
                className="hover:text-thebiblesayswhite-100 hover:bg-[#aa6b00]"
                // onClick={handleLoadMore}
              >
                See More
              </Button> */}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

// 'use client'

// import React, { useEffect, useState } from 'react'
// // import ToughTopicCard from '../core/ToughTopicCard'
// import Button from '../core/Button'
// import Skeleton from 'react-loading-skeleton'
// import 'react-loading-skeleton/dist/skeleton.css'
// import axios, { AxiosResponse } from 'axios'
// import Link from 'next/link'
// import Image from 'next/image'

// interface Data1 {
//   id: number
//   topic_category: string
//   topic_title: string
//   image_url: string
//   summary: string
//   topic_text: string
//   link: string
// }
// interface Data {
//   data: Data1[]
// }

// const truncateText = (text: string, maxLength: number) => {
//   if (text.length <= maxLength) {
//     return text
//   }
//   return text.slice(0, maxLength) + '...'
// }

// const ToughTopicsSection: React.FC = () => {
//   const [itemsToShow, setItemsToShow] = useState(3)

//   const [data, setData] = useState<Data | null>(null)
//   const [error, setError] = useState<string | null>(null)

//   const [loading, setLoading] = useState(true)

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response: AxiosResponse<Data> = await axios.get(
//           'https://www.thebiblesays.com/wp-json/tbs/v1/topics?category=2448',
//         )

//         setData(response.data)
//         setLoading(false)
//       } catch (error) {
//         setError(`Error fetching data: ${error ? error : ''}`)
//         setLoading(false)
//       }
//     }

//     fetchData()
//   }, [])

//   const handleLoadMore = () => {
//     // Increase the number of items to show by, for example, 3 more
//     setItemsToShow((prevItems) => prevItems + 3)
//   }

//   return (
//     <div className="bg-thebiblesaysoffwhite">
//       <div className=" mx-auto max-w-[1440px] h-full pb-24 px-7 md:px-10 lg:px-40">
//         <h2 className="text-center font-lexend font-extrabold text-3xl pt-24 mb-16">
//           Tough Topics
//         </h2>
//         {loading || error ? (
//           // <SkeletonTheme baseColor="#f2f2f2" highlightColor="#f2f2f2">
//           <div className="mt-20 grid md:grid-cols-2 lg:grid-cols-3 justify-center items-center gap-8 space-y-1 md:space-y-0">
//             <div className="h-100">
//               <Skeleton height={192} className="" />
//               <div className="p-8 shadow-lg">
//                 <div className="block mb-4 h-36">
//                   <Skeleton className="text-lg font-lexend font-semibold tracking-tight mb-2" />
//                   <Skeleton
//                     className="mt-3 font-serifpro text-sm pr-5 text-ellipsis overflow-hidden"
//                     count={4}
//                   />
//                 </div>
//               </div>
//             </div>

//             <div className="h-100">
//               <Skeleton height={192} className="" />
//               <div className="p-8 shadow-lg">
//                 <div className="block mb-4 h-36">
//                   <Skeleton className="text-lg font-lexend font-semibold tracking-tight mb-2" />
//                   <Skeleton
//                     className="mt-3 font-serifpro text-sm pr-5 text-ellipsis overflow-hidden"
//                     count={4}
//                   />
//                 </div>
//               </div>
//             </div>

//             <div className="h-100">
//               <Skeleton height={192} className="" />
//               <div className="p-8 shadow-lg">
//                 <div className="block mb-4 h-36">
//                   <Skeleton className="text-lg font-lexend font-semibold tracking-tight mb-2" />
//                   <Skeleton
//                     className="mt-3 font-serifpro text-sm pr-5 text-ellipsis overflow-hidden"
//                     count={4}
//                   />
//                 </div>
//               </div>
//             </div>
//           </div>
//         ) : (
//           // </SkeletonTheme>
//           <div className="mt-20 grid md:grid-cols-2 lg:grid-cols-3 justify-center items-center gap-8 space-y-1 md:space-y-0">
//             {/* {cards?.map((card, index) => (
//             <ToughTopicCard key={index} {...card} />
//           ))} */}

//             {data?.data.slice(0, itemsToShow).map((topic, index) => (
//               <div className="h-100 " key={index}>
//                 <Link href={topic.link} className="">
//                   <Image
//                     className="object-cover w-full h-48"
//                     width={500}
//                     height={500}
//                     alt={topic.topic_title}
//                     src={topic.image_url}
//                   />
//                 </Link>
//                 <div className="p-8 shadow-lg bg-thebiblesayswhite-100">
//                   <div className="block mb-4 h-36">
//                     <Link href={topic.link} className="">
//                       <h6
//                         className="text-lg font-lexend font-semibold tracking-tight mb-2"
//                         title={topic.topic_title}
//                         dangerouslySetInnerHTML={{
//                           __html: truncateText(topic.topic_title, 50),
//                         }}
//                       />
//                     </Link>

//                     {/* Use dangerouslySetInnerHTML to render the HTML content and
//                    Truncate the text to a maximum of 100 characters */}
//                     <p
//                       className="mt-3 font-serifpro text-sm pr-5 h-20 text-ellipsis overflow-hidden"
//                       dangerouslySetInnerHTML={{
//                         __html: truncateText(topic.summary, 100),
//                       }}
//                     />
//                   </div>
//                   <div className="font-lexend flex flex-row h-2 mt-10">
//                     <button className="text-sm font-[400] font-lexend flex flex-row">
//                       <Link
//                         href={topic.link.substring(
//                           'https://13.51.172.229'.length,
//                         )}
//                         className="font-lexend"
//                       >
//                         See More
//                       </Link>
//                       <span
//                         className="ml-2 font-lexend font-semibold"
//                         aria-hidden="true"
//                       >
//                         &rarr;
//                       </span>
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         )}
//         <div className="grid grid-flex mt-8 justify-center">
//           {(data?.data.length ?? 0) > itemsToShow && (
//             <div className="grid grid-flex mt-8 justify-center ">
//               <button
//                 className="bg-thebiblesaysorange text-thebiblesaysblack-100 px-8 py-4 mt-2 text-center text-xs font-bold font-lexend justify-self-center hover:text-thebiblesayswhite-100 hover:bg-[#aa6b00]"
//                 onClick={handleLoadMore}
//               >
//                 See More
//               </button>
//               {/* <Button
//                 className="hover:text-thebiblesayswhite-100 hover:bg-[#aa6b00]"
//                 onClick={handleLoadMore}
//               >
//                 See More
//               </Button> */}
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   )
// }

// export default ToughTopicsSection
