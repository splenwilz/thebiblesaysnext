import React from 'react'
import Link from 'next/link'

export default async function FooterLinksSection() {
  // const [itemsToShow, setItemsToShow] = useState(3)
  let data: MenuData | null = null
  let error: string | null = null

  // const handleLoadMore = () => {
  //   // Increase the number of items to show by, for example, 3 more
  //   setItemsToShow((prevItems) => prevItems + 3)
  // }
  try {
    const response = await fetch(
      'https://www.thebiblesays.com/wp-json/rae/v1/header-footer?header_location_id=hcms-menu-header&footer_location_id=hcms-menu-footer',
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
          <div className="mt-8 text-center text-red-600">{error}</div>
        </div>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 grid-flow-row gap-2">
      {data?.data?.footer?.footerMenuItems?.map((item, index) => (
        <div key={index}>
          <div>
            <ul className="text-thebiblesayswhite-100 font-lexend text-[15px] md:text-[13px]  text-center md:text-left">
              <li className="mb-4">
                <Link href={item.url} className="hover:underline">
                  {item.title}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      ))}
    </div>
  )
}
