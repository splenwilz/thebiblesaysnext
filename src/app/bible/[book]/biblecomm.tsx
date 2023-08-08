import { getBookName, splitScripture } from '@/helper/helper'
import CommentaryTabs from '@/components/CommentaryTabs'
import Image from 'next/image'
// const BibleResources = BibleResource()
// Resources Icons
import BookMark from '@/assets/icons/bookmark.svg'
import Download from '@/assets/icons/download.svg'
import ImportContact from '@/assets/icons/import_contacts.svg'
import Map from '@/assets/icons/map.svg'
import PlayArrow from '@/assets/icons/play_arrow.svg'
import ViewTimeline from '@/assets/icons/view_timeline.svg'
import Link from 'next/link'

interface BibleCommBookProps {
  book: string
}

const BibleCommBook: React.FC<BibleCommBookProps> = async ({ book }) => {
  const scriptureBook = book
    ? splitScripture(book.replace('%2B', '+'))?.book
    : ''
  const bookName = getBookName(scriptureBook || '')
  // const booknameShprt =
  const scriptureChap = book
    ? splitScripture(book.replace('%2B', '+'))?.chapter
    : '1'
  const scriptureVerse = book
    ? `${splitScripture(book.replace('%2B', '+'))?.chapter}:${
        splitScripture(book.replace('%2B', '+'))?.verse
      }`
    : ''
  let dataComm: CommentaryPost[] | null = null
  let error: string | null = null
  let darkThemeColor = false

  try {
    const response = await fetch(
      `https://www.thebiblesays.com/wp-json/tbs/v1/commentaries-by-passage-sorted?keyword=${bookName}%20${scriptureChap}`,
    )

    if (!response.ok) {
      throw new Error('Failed to fetch data')
    }

    dataComm = await response.json()
  } catch (err) {
    error = 'An error occurred while fetching data. Please try again later.'
  }

  if (error) {
    return (
      <div className="bg-thebiblesaysoffwhite">
        <div className=" mx-auto max-w-[1440px] h-full pb-24 px-7 md:px-10 lg:px-40">
          <div className="mt-8 text-center text-red-600">{error}</div>
        </div>
      </div>
    )
  }
  const CommentaryTab = [
    {
      label: 'Commentary',
      content: (
        <div className="max-h-[700px] overflow-y-scroll ">
          {dataComm?.length === 0 ? (
            <div className="  mb-10">
              <div className=" border border-t-0 border-l-0 border-r-0 border-b-[#10101029] pb-5">
                <h5 className="font-lexend font-extrabold text-2xl dark:text-thebiblesayswhite-100">
                  Coming soon!
                </h5>

                <p className="font-serifpro text-[#101010A3] dark:text-thebiblesayswhite-64 text-[17px] mt-5 leading-8">
                  Bible Commentaries for this chapter are on their way and
                  coming soon
                </p>
              </div>
            </div>
          ) : (
            dataComm?.map((commentaryPost, index) => (
              <div className="  mb-10" key={index}>
                <div className=" border border-t-0 border-l-0 border-r-0 border-b-[#10101029] pb-5">
                  <h5
                    className="font-lexend font-extrabold text-2xl dark:text-thebiblesayswhite-100"
                    dangerouslySetInnerHTML={{
                      __html: commentaryPost.post_title,
                    }}
                  />

                  <p
                    className="font-serifpro text-[#101010A3] dark:text-thebiblesayswhite-64 text-[17px] mt-5 leading-8"
                    dangerouslySetInnerHTML={{
                      __html: commentaryPost.post_excerpt,
                    }}
                  />
                </div>

                <div
                  className="mt-5 font-serifpro text-[17px] leading-8 text-thebiblesaysblack-100 dark:text-thebiblesayswhite-100 scr pr-5 "
                  dangerouslySetInnerHTML={{
                    __html: commentaryPost.post_content,
                  }}
                />
              </div>
            ))
          )}
        </div>
      ),
    },
    {
      label: 'Resources',
      content: (
        <div className="">
          <div className="flex flex-row py-2 pl-0">
            {!darkThemeColor ? (
              <Image src={ImportContact} alt="" />
            ) : (
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                className="text-thebiblesaysorange"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.16683 13.7497C5.9108 13.7497 6.63499 13.8365 7.33939 14.0101C8.04379 14.1837 8.73627 14.4441 9.41683 14.7913V5.89551C8.79183 5.47884 8.11392 5.15592 7.3831 4.92676C6.6523 4.69759 5.91354 4.58301 5.16683 4.58301C4.63905 4.58301 4.12169 4.64898 3.61475 4.78092C3.1078 4.91287 2.59739 5.07606 2.0835 5.27051V14.3122C2.51405 14.1177 3.00363 13.9754 3.55225 13.8851C4.10086 13.7948 4.63905 13.7497 5.16683 13.7497ZM10.6668 14.7913C11.3613 14.4441 12.0418 14.1837 12.7085 14.0101C13.3752 13.8365 14.0835 13.7497 14.8335 13.7497C15.3613 13.7497 15.9064 13.7913 16.4689 13.8747C17.0314 13.958 17.5141 14.0691 17.9168 14.208V5.27051C17.4446 5.0344 16.9458 4.86079 16.4205 4.74967C15.8952 4.63856 15.3662 4.58301 14.8335 4.58301C14.0835 4.58301 13.3578 4.69759 12.6564 4.92676C11.955 5.15592 11.2918 5.47884 10.6668 5.89551V14.7913ZM10.0418 16.6663C9.3335 16.1386 8.56266 15.7323 7.72933 15.4476C6.896 15.1629 6.04183 15.0205 5.16683 15.0205C4.65937 15.0205 4.16098 15.083 3.67166 15.208C3.18233 15.333 2.69461 15.4858 2.2085 15.6663C1.88766 15.8191 1.57829 15.7983 1.28037 15.6038C0.982454 15.4094 0.833496 15.1316 0.833496 14.7705V5.12467C0.833496 4.91634 0.882107 4.72537 0.979329 4.55176C1.07655 4.37815 1.22238 4.24273 1.41683 4.14551C2.00016 3.86773 2.60707 3.66287 3.23756 3.53092C3.86803 3.39898 4.51112 3.33301 5.16683 3.33301C6.04183 3.33301 6.89252 3.45106 7.71891 3.68717C8.5453 3.92329 9.31961 4.2844 10.0418 4.77051C10.7502 4.2844 11.5106 3.92329 12.3231 3.68717C13.1356 3.45106 13.9724 3.33301 14.8335 3.33301C15.4844 3.33301 16.1229 3.39898 16.7488 3.53092C17.3747 3.66287 17.9793 3.86773 18.5627 4.14551C18.7571 4.24273 18.9064 4.37815 19.0106 4.55176C19.1147 4.72537 19.1668 4.91634 19.1668 5.12467V14.7705C19.1668 15.1579 19.0106 15.4527 18.6981 15.6548C18.3856 15.8569 18.0766 15.8608 17.771 15.6663C17.2988 15.4719 16.818 15.3156 16.3287 15.1976C15.8393 15.0795 15.341 15.0205 14.8335 15.0205C13.9585 15.0205 13.1182 15.1663 12.3127 15.458C11.5071 15.7497 10.7502 16.1525 10.0418 16.6663Z"
                  fill="white"
                />
              </svg>
            )}
            <Link
              className="font-lexend text-[15px] pl-4 dark:text-thebiblesayswhite-100"
              href="#"
            >
              Book Theme
            </Link>
          </div>
          <div className="flex flex-row py-2">
            {!darkThemeColor ? (
              <Image src={BookMark} alt="" />
            ) : (
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.1665 17.4997V3.64551C4.1665 3.31217 4.2915 3.02051 4.5415 2.77051C4.7915 2.52051 5.08317 2.39551 5.4165 2.39551H14.5832C14.9165 2.39551 15.2082 2.52051 15.4582 2.77051C15.7082 3.02051 15.8332 3.31217 15.8332 3.64551V17.4997L9.99984 14.9997L4.1665 17.4997ZM5.4165 15.6038L9.99984 13.6663L14.5832 15.6038V3.64551H5.4165V15.6038Z"
                  fill="white"
                />
              </svg>
            )}
            <Link
              className="font-lexend text-[15px] pl-4 dark:text-thebiblesayswhite-100"
              href="#"
            >
              Chapter Context
            </Link>
          </div>
          <div className="flex flex-row py-2">
            {!darkThemeColor ? (
              <Image src={Map} alt="" />
            ) : (
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.75 17.5L7.27083 15.5625L3.54167 17.0417C3.30556 17.1667 3.07292 17.1597 2.84375 17.0208C2.61458 16.8819 2.5 16.6736 2.5 16.3958V4.77083C2.5 4.59028 2.55208 4.43056 2.65625 4.29167C2.76042 4.15278 2.89583 4.04861 3.0625 3.97917L7.27083 2.5L12.75 4.41667L16.4583 2.9375C16.6944 2.82639 16.9271 2.83681 17.1562 2.96875C17.3854 3.10069 17.5 3.30556 17.5 3.58333V15.3542C17.5 15.5069 17.4479 15.6389 17.3438 15.75C17.2396 15.8611 17.1111 15.9444 16.9583 16L12.75 17.5ZM12.0417 15.9375V5.41667L7.95833 4.04167V14.5625L12.0417 15.9375ZM13.2917 15.9375L16.25 14.9583V4.29167L13.2917 5.41667V15.9375ZM3.75 15.6875L6.70833 14.5625V4.04167L3.75 5.02083V15.6875Z"
                  fill="white"
                />
              </svg>
            )}
            <Link
              className="font-lexend text-[15px] pl-4 dark:text-thebiblesayswhite-100"
              href="#"
            >
              Maps & Charts
            </Link>
          </div>
          <div className="flex flex-row py-2">
            {!darkThemeColor ? (
              <Image src={PlayArrow} alt="" />
            ) : (
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.6665 15.7712V4.10449L15.8332 9.93783L6.6665 15.7712ZM7.9165 13.5003L13.5207 9.93783L7.9165 6.37533V13.5003Z"
                  fill="white"
                />
              </svg>
            )}
            <Link
              className="font-lexend text-[15px] pl-4 dark:text-thebiblesayswhite-100"
              href="#"
            >
              Videos
            </Link>
          </div>
          <div className="flex flex-row py-2">
            {!darkThemeColor ? (
              <Image src={Download} alt="" />
            ) : (
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.5835 16.6663C4.25016 16.6663 3.9585 16.5413 3.7085 16.2913C3.4585 16.0413 3.3335 15.7497 3.3335 15.4163V12.4372H4.5835V15.4163H15.4168V12.4372H16.6668V15.4163C16.6668 15.7497 16.5418 16.0413 16.2918 16.2913C16.0418 16.5413 15.7502 16.6663 15.4168 16.6663H4.5835ZM10.0002 13.4788L5.97933 9.45801L6.87516 8.56217L9.37516 11.0622V3.33301H10.6252V11.0622L13.1252 8.56217L14.021 9.45801L10.0002 13.4788Z"
                  fill="white"
                />
              </svg>
            )}
            <Link
              className="font-lexend text-[15px] pl-4 dark:text-thebiblesayswhite-100"
              href="#"
            >
              Download Commentary
            </Link>
          </div>
          <div className="flex flex-row py-2">
            {!darkThemeColor ? (
              <Image src={ViewTimeline} alt="" />
            ) : (
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.20833 14.1875H9.79167V12.9375H5.20833V14.1875ZM7.70833 10.625H12.2917V9.375H7.70833V10.625ZM10.2083 7.0625H14.7917V5.8125H10.2083V7.0625ZM3.75 17.5C3.41667 17.5 3.125 17.375 2.875 17.125C2.625 16.875 2.5 16.5833 2.5 16.25V3.75C2.5 3.41667 2.625 3.125 2.875 2.875C3.125 2.625 3.41667 2.5 3.75 2.5H16.25C16.5833 2.5 16.875 2.625 17.125 2.875C17.375 3.125 17.5 3.41667 17.5 3.75V16.25C17.5 16.5833 17.375 16.875 17.125 17.125C16.875 17.375 16.5833 17.5 16.25 17.5H3.75ZM3.75 16.25H16.25V3.75H3.75V16.25Z"
                  fill="white"
                />
              </svg>
            )}
            <Link
              className="font-lexend text-[15px] pl-4 dark:text-thebiblesayswhite-100"
              href="#"
            >
              View on the Timeline
            </Link>
          </div>
        </div>
      ),
    },
  ]
  return (
    <div className="hidden sm:block basis-1/2 lg:basis-2/6 w-full bg-thebiblesaysoffwhite dark:bg-thebiblesayswhite-8 p-9 border border-t-thebiblesaysblack-16 border-l-0 border-r-0">
      <div className="">
        <CommentaryTabs tabsData={CommentaryTab} />
      </div>
    </div>
  )
}

export default BibleCommBook
