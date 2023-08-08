import React from 'react'
import SearchBar from '../core/SearchBar'
import ViewButton from '../core/ViewButton'

const Resources: React.FC = () => {
  const handleSearch = (query: string) => {
    console.log('Search query:', query)
  }
  return (
    <div className="bg-thebiblesayswhite-100 mx-auto max-w-[1440px] px-7 lg:px-40 md:px-7 ">
      <h2 className="text-center font-lexend font-extrabold text-3xl mt-50 mb-50 ">
        Resources to help you <br /> learn scripture
      </h2>
      <div className="mt-20 flex flex-col md:flex-row lg:flex-row  bg-thebiblesaysoffwhite overflow-hidden mb-8 h-[700px] md:h-96">
        <div className="basis-1/2 ml-12">
          <h3 className="text-2xl font-lexend font-extrabold mt-28 ">
            Biblical Commentary
          </h3>
          <p className="font-serifpro mt-5 text-sm font-medium mb-6 ">
            Immerse yourself in our easy-to-understand explanation of the Bible
          </p>
          <ViewButton
            viewLink="https://example.com"
            displayText="View"
            className="block md:hidden mt-9"
            textClass="text-[16px]"
            spanClass="text-[16px]"
          />
          <SearchBar
            placeholder="Search the commentary"
            inputClassName="w-60 md:w-72 h-10 border text-sm font-md border-stone-300 px-3 py-3 text-black bg-thebiblesayswhite-100 focus:outline-none"
            buttonClassName="bg-thebiblesaysorange w-10 text-center h-10 text-black px-4 py-3 text-sm font-bold"
            searchIconClassName="h4 w-4 font-extrabold"
            searchClassName=""
            // onSearch={handleSearch}
          />
        </div>
        <div className="scripture_preview basis-1/2 relative mb-24 mt-24 md:mt-0">
          <div className="flex flex-col">
            <div className="flex flex-col absolute -mt-20 -ml-20 -rotate-15 overflow-hidden ">
              <div className="flex flex-row">
                <div className="bg-thebiblesayswhite-100 w-130 text-thebiblesaysblack-100 p-2 shadow-lg basis-1/2">
                  <h4 className="font-lexend font-extrabold m-3 ">
                    Jonah 4:9-11
                  </h4>
                  <p className="font-lexend text-[10.79px] m-3">
                    <b>9</b> Then God said to Jonah, “Do you have good reason to
                    be angry about the plant?” And he said, “I have good reason
                    to be angry, even to death.” <br />
                    <br />
                    <b>10</b> Then the Lord said, “You had compassion on the
                    plant for which you did not work and which you did not cause
                    to grow, which came up overnight and perished overnight.{' '}
                    <br />
                    <br />
                    <b>11</b> Should I not have compassion on Nineveh, the great
                    city in which there are more than 120,000 persons who do not
                    know the difference between their right and left hand, as
                    well as many animals?”
                  </p>
                </div>
                <div className="basis-1/2 ml-5 w-72">
                  <div className="bg-thebiblesayswhite-100 text-thebiblesaysblack-100 p-2 shadow-lg ">
                    <h4 className="font-lexend font-extrabold m-3 ">
                      Jonah 4:9-11 meaning
                    </h4>

                    <p className="font-lexend text-[10.79px] m-3">
                      God asks Jonah if it is proper to be angry over a plant.
                      Jonah affirms he has every reason to be angry, even to
                      death. God rebukes him for having more sympathy for a
                      plant he neither planted nor cultivated than for the souls
                      of the Ninevites.
                    </p>
                  </div>
                  <div className="border bg-thebiblesayswhite-100 shadow-lg p-2 mt-4 text-[10.79px]">
                    Commentary
                  </div>
                </div>
              </div>
              <div className="flex flex-row mt-10">
                <div className="relative">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute top-0 bottom-0 w-6 h-6 my-auto text-gray-400 left-3"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                  <input
                    type="text"
                    placeholder="Jonah 4:9-11"
                    className="w-full py-2 pl-4 h-10 text-xs pr-4 text-gray-500 border rounded-sm outline-none bg-thebiblesayswhite-64"
                  />
                </div>
                <div className="basis-1/2 ml-5 w-72">
                  <div className="bg-thebiblesayswhite-100 text-thebiblesaysblack-100 p-2 shadow-lg ">
                    <p className="font-lexend text-[10.79px] m-3">
                      God commissioned a plant to grow over Jonah’s head to
                      provide extra shade for him. Jonah was happy that he
                      stayed away from the intense heat. But when God caused a
                      worm to kill the plant, leaving Jonah in the heat, the
                      prophet wished he were dead (v. 8). God is creating an
                      object lesson for Jonah. Now the LORD intervened with a
                      question. He said to Jonah, Do you have good reason to be
                      angry about the plant? <br />
                      <br />
                      It is worth noting here that God is speaking directly to
                      Jonah, and it does not seem abnormal to Jonah. It seems
                      this is considered ordinary and typical for Jonah. For New
                      Testament believers, it is worth considering that the Holy
                      Spirit of God dwells within us, and is always speaking
                      (Romans 8:14-16). Therefore, we can take instruction for
                      ourselves from this interaction between God and Jonah,
                      where God exhorts Jonah to trust that He knows what is
                      best, and to choose a perspective that is true, a
                      perspective from God’s point of view. <br />
                      <br />
                      Jonah was angry because God spared the Ninevites. God
                      asked him if it was appropriate for him to be angry (4:3).
                      In doing so, God was asking Jonah to choose a different
                      perspective, a perspective from God’s point of view, which
                      is a true perspective. Then, the prophet did not provide
                      an answer to God’s question. Now again, God asked a
                      similar question, which anticipates a negative response.
                      However, Jonah arrogantly responded affirmatively, saying,
                      I have good reason to be angry, even to death.
                    </p>
                  </div>
                  <div className="border bg-thebiblesayswhite-100 shadow-lg p-2 mt-4 text-[10.79px]">
                    Commentary
                  </div>
                </div>
              </div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Resources
