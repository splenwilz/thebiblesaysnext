// 'use client'
// import React, { useEffect, useState } from 'react'
// import axios, { AxiosResponse } from 'axios'
// import CommentaryTopic from '@/core/CommentaryTopic'
// import Image from 'next/image'

// type StaticImageData = {
//   src: string
//   height: number
//   width: number
//   blurDataURL?: string
// }
// interface BlogPost {
//   slug: string
//   title: string
//   summary: string
//   content: string
//   image_url: string
// }

// interface PostProps {
//   slug: string
// }

// const Post: React.FC<PostProps> = ({ slug }) => {
//   const [dataPost, setDataPost] = useState<BlogPost | null>(null)
//   const [errorPost, setErrorPost] = useState<string | null>(null)
//   const [loadingPost, setLoadingPost] = useState(true)

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response: AxiosResponse<BlogPost> = await axios.get(
//           `https://13.51.172.229/wp-json/tbs/v1/post?slug=${slug}`,
//         )

//         setDataPost(response.data)
//       } catch (error) {
//         setErrorPost(`Error fetching data: ${error ? error : ''}`)
//       } finally {
//         setLoadingPost(false)
//       }
//     }

//     fetchData()
//   }, [slug])

//   if (loadingPost) {
//     return <p>Loading...</p>
//   }

//   if (errorPost) {
//     return <p>Error: {errorPost}</p>
//   }

//   return (
//     <div className="flex flex-col m-10 pr-0 lg:pr-20">
//       <div className="flex flex-col justify-center">
//         <h1
//           className="font-serifpro font-extrabold text-3xl mb-6 dark:text-thebiblesayswhite-100"
//           dangerouslySetInnerHTML={{ __html: dataPost ? dataPost?.title : '' }}
//         />

//         <img src={dataPost?.image_url} alt="" className="w-full mb-8" />
//         {dataPost?.content ? (
//           <div
//             className={`font-serifpro text-[17px] leading-10 dark:text-thebiblesayswhite-100 `}
//             // style={{ fontSize: `${fontSize}px` }}
//             dangerouslySetInnerHTML={{ __html: dataPost.content }}
//           />
//         ) : (
//           <p>No content available.</p>
//         )}
//       </div>
//     </div>
//   )
// }

// export default Post
