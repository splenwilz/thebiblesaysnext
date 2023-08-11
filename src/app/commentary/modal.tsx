'use client'
import {
  extractStringBeforeHyphen,
  extractVideoLink,
  getBookName,
  splitScripture,
} from '@/helper/helper'
import { ChevronRightIcon, XMarkIcon } from '@heroicons/react/24/solid'
import axios, { AxiosResponse } from 'axios'
import React, { useEffect, useState } from 'react'
import Modal from 'react-modal'
import { useSearchParams, useRouter, usePathname } from 'next/navigation'
import Image from 'next/image'
import ReactPlayer from 'react-player'
import { DocumentArrowDownIcon } from '@heroicons/react/20/solid'
// import {  } from 'next/router'
// Modal.setAppElement('#tbs')

interface CommModalProps {
  bookid: string
}

// export const revalidate = 0

const CommModal: React.FC<CommModalProps> = ({ bookid }) => {
  const searchParams = useSearchParams()

  const router = useRouter()
  const pathname = usePathname()

  const booktheme = searchParams.get('booktheme')
  const context = searchParams.get('context')
  const maps = searchParams.get('maps')
  const videos = searchParams.get('videos')
  const download = searchParams.get('download')

  const useAdditionalDetailsParam = booktheme || context || download

  const [isOpen, setIsOpen] = useState(false)

  const [mapInfo, setMapInfo] = useState<MapsVideosData | null>(null)

  const [bookThemeDetails, setBookThemeDetails] =
    useState<BookThemeDetails | null>(null)

  const [errorBookThemeDetails, setErrorBookThemeDetails] = useState<
    string | null
  >(null)
  const [loadingBookThemeDetails, setLoadingBookThemeDetails] = useState(true)

  const scriptureBook = bookid
    ? splitScripture(bookid.replace('%2B', '+'))?.book
    : ''

  const scriptureChap = bookid
    ? splitScripture(bookid.replace('%2B', '+'))?.chapter
    : '1'
  const bookName = getBookName(scriptureBook || '')

  const [fullscreenImage, setFullscreenImage] = useState<string | null>(null)

  const mapparam = extractStringBeforeHyphen(maps ? maps : 'gen')

  const videoparam = extractStringBeforeHyphen(videos ? videos : 'gen')

  const customStyles = {
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.6)',
    },
    content: {
      top: '50%',
      left: '50%',
      width: '1000px',
      height: '590px',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      padding: '40px',
    },
  }

  // Effects

  useEffect(() => {
    if (booktheme || context || maps || videos || download) {
      setIsOpen(true)
    }
  }, [booktheme, context, maps, videos, download])

  useEffect(() => {
    const fetchData = async () => {
      if (booktheme || context || download) {
        try {
          const response: AxiosResponse<BookThemeDetails> = await axios.get(
            `https://13.51.172.229/wp-json/tbs/v1/additional-details?id=${useAdditionalDetailsParam}`,
          )

          setBookThemeDetails(response.data)
          setLoadingBookThemeDetails(false)
          console.log(response)
        } catch (error) {
          setErrorBookThemeDetails(`Error fetching data: ${error ? error : ''}`)
          setLoadingBookThemeDetails(false)
        }
      } else if (maps || videos) {
        try {
          const response: AxiosResponse<MapsVideosData> = await axios.get(
            `https://13.51.172.229/wp-json/tbs/v1/additional-details-2?category=${
              maps ? mapparam : videoparam
            }`,
          )

          setMapInfo(response.data)
          setLoadingBookThemeDetails(false)
          console.log(response)
        } catch (error) {
          setErrorBookThemeDetails(`Error fetching data: ${error ? error : ''}`)
          setLoadingBookThemeDetails(false)
        }
      }
    }

    fetchData()
  }, [
    useAdditionalDetailsParam,
    download,
    booktheme,
    context,
    maps,
    mapparam,
    videoparam,
    videos,
  ])

  // Handlers
  const handleModalClose = () => {
    if (booktheme || context || videos || maps || download) {
      router.push(pathname)
    }
    setIsOpen(false)
  }
  const handleImageClick = (imageUrl: string) => {
    setFullscreenImage(imageUrl)
  }

  const handleCloseFullscreen = () => {
    setFullscreenImage(null)
  }
  return (
    <div>
      {/* <button onClick={() => setIsOpen(true)}>
        Book Theme {extractStringBeforeHyphen(maps ? maps : 'gen')}
        {maps}
      </button> */}
      <Modal
        // className="max-w-max-h-96"
        isOpen={isOpen}
        onRequestClose={() => setIsOpen(false)}
        style={customStyles}
      >
        <div className="flex flex-row justify-between">
          {videos && (
            <h1 className="font-serifpro font-extrabold text-2xl mb-5">
              Videos for {bookName ? bookName : 'Genesis'}
            </h1>
          )}

          {maps && (
            <h1 className="font-serifpro font-extrabold text-2xl mb-5">
              Maps for {bookName ? bookName : 'Genesis'}
            </h1>
          )}

          {booktheme && (
            <h1 className="font-serifpro font-extrabold text-2xl mb-5">
              Book Theme for {bookName ? bookName : 'Genesis'}
            </h1>
          )}

          {context && (
            <h1 className="font-serifpro font-extrabold text-2xl mb-5">
              Chapter Context for {bookName ? bookName : 'Genesis'}{' '}
              {scriptureChap ? scriptureChap : '1'}
            </h1>
          )}

          {download && (
            <h1 className="font-serifpro font-extrabold text-2xl mb-5">
              Download Commentary for {bookName ? bookName : 'Genesis'}{' '}
              {scriptureChap ? scriptureChap : '1'}
            </h1>
          )}

          <XMarkIcon
            className="text-lg font-light cursor-pointer"
            style={{ width: '25px' }}
            onClick={handleModalClose}
          />
        </div>
        <div className="h-96 overflow-y-scroll">
          {context ? (
            <div className=" modalcontent">
              {bookThemeDetails?.chapter_context === '' ? (
                <p className="font-serifpro pr-5"></p>
              ) : (
                <p
                  className="font-serifpro pr-5"
                  dangerouslySetInnerHTML={{
                    __html: bookThemeDetails?.chapter_context || '', // Use empty string as a fallback
                  }}
                />
              )}
            </div>
          ) : (
            <div className=" modalcontent">
              {/* <div className="grid md:grid-cols-2 lg:grid-cols-3 mx-auto justify-center items-center gap-9 md:gap-6 max-w-[1440px] px-0 lg:px-10 md:px-7 sm:px-7">
                {mapInfo?.maps.map((mapimg, index) => (
                  <div key={index} className="">
                    <img
                      src={mapimg.map.url}
                      width="100%"
                      height="auto"
                      alt=""
                      className="w-full cursor-pointer hover:backdrop-blur-lg"
                    />
                  </div>
                ))}
              </div> */}
              {maps && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto justify-center items-center gap-9 md:gap-6 max-w-7xl px-0 lg:px-10 md:px-7 sm:px-7">
                  {mapInfo?.maps.map((mapimg, index) => (
                    <div key={index} className="relative">
                      <img
                        src={mapimg.map.url}
                        width="100%"
                        height="auto"
                        alt=""
                        className="w-full cursor-pointer hover:backdrop-blur-lg"
                        onClick={() => handleImageClick(mapimg.map.url)}
                      />

                      {fullscreenImage === mapimg.map.url && (
                        <div
                          className="fixed inset-0 z-50 flex justify-center items-center bg-black bg-opacity-75"
                          onClick={handleCloseFullscreen}
                        >
                          <img
                            src={mapimg.map.url}
                            alt=""
                            className="max-h-full max-w-full"
                          />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}

              {videos && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  {mapInfo?.videos.map((video, index) => {
                    const videoLink = extractVideoLink(video.video)

                    if (!videoLink) {
                      return null
                    }

                    return (
                      <div key={index} className="flex justify-center">
                        <div className="w-full">
                          <ReactPlayer
                            url={videoLink}
                            width="100%"
                            height="auto"
                            controls // Add controls to the player
                          />
                        </div>
                      </div>
                    )
                  })}
                </div>
              )}
              {booktheme && (
                <>
                  {bookThemeDetails?.book_theme === '' ? (
                    <p className="font-serifpro pr-5">
                      The Bible Says Commentary on the Book of {bookName}
                    </p>
                  ) : (
                    <p
                      className="font-serifpro pr-5"
                      dangerouslySetInnerHTML={{
                        __html: bookThemeDetails?.book_theme || '', // Use empty string as a fallback
                      }}
                    />
                  )}
                </>
              )}
              {download && (
                <div className="flex flex-col mx-auto  gap-9 md:gap-6 max-w-7xl ">
                  {bookThemeDetails?.documents.map((doc, index) => (
                    <div key={index} className="relative">
                      <a href={doc.document.url} className="" target="_blank">
                        <div className="flex flex-row justify-between shadow-sm text-gray-700 hover:bg-[#10101014] dark:hover:bg-thebiblesayswhite-8 dark:hover:text-gray-300 ">
                          <div className="flex flex-row gap-4">
                            <DocumentArrowDownIcon />
                            <div className="flex flex-col gap-4 w-full p-2">
                              {/* <h2 className="font-serifpro">{doc.title}</h2> */}
                              <p className="font-serifpro">
                                {doc.document.filename}
                              </p>
                            </div>
                          </div>
                          <p className="font-serifpro p-5 text-[15px]">
                            Download
                          </p>
                        </div>
                      </a>
                      {/* <p>{doc.title}</p>
                      <p>{doc.document.url}</p> */}
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
        <div className="flex flex-row justify-center mt-10">
          <button
            className="px-8 py-2 font-semibold border border-[#DC8B01] font-lexend text-[15px] cursor-pointer"
            onClick={handleModalClose}
          >
            Close
          </button>
        </div>
      </Modal>
    </div>
  )
}
export default CommModal
