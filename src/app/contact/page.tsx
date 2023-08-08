import React from 'react'

import contactbg from '@/assets/images/contact/contactbg.png'
import Image from 'next/image'
import NavigationWhiteScreen from '@/components/NavigationWhiteScreen'
import FooterSection from '@/components/FooterSection'

const Contact: React.FC = () => {
  return (
    <>
      <div className="mx-auto max-w-[1440px] md:px-0 bg-white">
        <NavigationWhiteScreen />
      </div>
      <div className="flex flex-row mx-auto max-w-[1440px]">
        <div className="hidden md:block basis-1/2">
          <Image src={contactbg} alt="" className="w-full h-[750px]" />
        </div>
        <div className="w-full md:basis-1/2 bg-thebiblesaysoffwhite">
          <div className="flex flex-col m-10 lg:m-20">
            <h2 className="font-lexend font-semibold text-4xl">
              Contact the Bible Says
            </h2>
            <form action="" className="mt-16">
              <div className="flex flex-row gap-4">
                <input
                  type="text"
                  name=""
                  id=""
                  className="px-3 py-3 border border-[#10101029] text-[15px] w-full font-lexend font-medium focus:outline-none"
                  placeholder="First Name"
                />
                <input
                  type="text"
                  name=""
                  id=""
                  className="px-3 py-3 border border-[#10101029] text-[15px] w-full font-lexend font-medium  focus:outline-none"
                  placeholder="Last Name"
                />
              </div>
              <div className="mt-5">
                <input
                  type="email"
                  name=""
                  id=""
                  className="px-3 py-3 border border-[#10101029] text-[15px] w-full font-lexend font-medium  focus:outline-none"
                  placeholder="Email"
                />
              </div>
              <div className="mt-5">
                <textarea
                  name=""
                  id=""
                  className="px-3 py-3 border border-[#10101029] text-[15px] w-full font-lexend font-medium  focus:outline-none"
                  placeholder="Message"
                  rows={5}
                  cols={1}
                ></textarea>
              </div>
            </form>
            <div className="bg-[#5a585829] h-[1.5px] px-2 lg:px-10 w-full mt-10 mb-10"></div>
            <div className="flex flex-row md:flex-col gap-2 min-[1186px]:gap-20 min-[1040px]:flex-row">
              <div className="basis-1/2">
                <h6 className="font-lexend font-bold text-lg leading-10">
                  Address
                </h6>
                <p className="font-serifpro text-[17px]">
                  The Bible Says <br />
                  5900 Whitman Drive <br />
                  Midland, TX 79705 <br />
                </p>
              </div>
              <div className="basis-1/2">
                <h6 className="font-lexend font-bold text-lg leading-10">
                  Email
                </h6>
                <p className="font-serifpro text-[17px]">
                  info@thebiblesays.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <FooterSection className="px-7 lg:px-40 md:px-7" />
    </>
  )
}

export default Contact
