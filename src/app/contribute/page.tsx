import React from 'react'

import NavigationWhiteScreen from '@/components/NavigationWhiteScreen'
import contributebg from '@/assets/images/contribute/contributebg.jpg'
import FooterSection from '@/components/FooterSection'
import Button from '@/core/Button'
import Image from 'next/image'

const Contribute: React.FC = () => {
  return (
    <>
      <div className="bg-thebiblesayswhite-100 mx-auto max-w-[1440px] md:px-0">
        <NavigationWhiteScreen />
      </div>
      <div className="flex flex-row mx-auto max-w-[1440px]">
        <div className="w-full min-[980px]:basis-1/2 bg-thebiblesaysoffwhite px-10 lg:px-40 min-[980px]:px-20 md:px-7 sm:px-7">
          <div className="flex flex-col ml-0 mt-20 mr-5 lg:mr-20 mb-20">
            <h1 className="font-lexend font-semibold text-4xl sm:text-6xl md:text-7xl">
              Support Our Commentary
            </h1>
            <p className="font-serifpro mt-7">
              If you want to support our mission of making scripture accessible
              for everyone, please consider donating.
            </p>
            <Button className="mt-12  md:ml-0 py-[17px] text-[15px] w-40">
              Donate Online
            </Button>
            <p className="mt-10 text-[15px] font-lexend">
              Donations made to The Bible Says are tax-deductible
            </p>
            <div className="bg-thebiblesayswhite-100 p-12 mt-12">
              <p className="font-lexend text-lg font-semibold">
                You can also mail your tax-deductible donation to:
              </p>
              <p className="font-serifpro text-[16px] leading-6 mt-5">
                Next Step Discipleship Ministries <br />
                Attn: The Bible Says Commentary <br />
                5900 Whitman Drive <br />
                Midland, TX 79705 <br />
              </p>
            </div>
          </div>
        </div>
        <div className="hidden basis-1/2 min-[980px]:block">
          <Image src={contributebg} alt="" className="w-full h-[890px]" />
        </div>
      </div>

      <FooterSection className="px-7 lg:px-40 md:px-7" />
    </>
  )
}

export default Contribute
