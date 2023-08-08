import React from 'react'

interface NewsletterSignupSectionProps {
  className?: string
  placeholder: string
  // onInputChange: (value: string) => void
  // onSubscribeClick: () => void
}

const NewsletterSignupSection: React.FC<NewsletterSignupSectionProps> = ({
  className,
  placeholder,
  // onInputChange,
  // onSubscribeClick,
}) => {
  return (
    <div className="bg-thebiblesaysorange">
      <div className={` h-50 w-full mx-auto max-w-[1440px] ${className}`}>
        <div className="grid md:grid-cols-2 gap-8 pt-20 pb-12">
          <div className="h-100">
            <h4 className="text-[24px] md:text-[24px] font-lexend font-extrabold min-[360px]-text-center md:text-left">
              Sign Up for TBS Updates
            </h4>
          </div>
          <div className=" h-100">
            <div className="flex justify-end mb-4">
              <input
                type="text"
                placeholder={placeholder}
                className="w-52 min-[360]:w-60 px-4 py-3 md:text-thebiblesaysblack-40 text-thebiblesaysblack-100 text-lg md:text-sm bg-thebiblesayswhite-100 focus:outline-none"
                // value={""}
                // onChange={(e) => onInputChange(e.target.value)}
              />
              <button
                className="bg-thebiblesaysblack-100 text-lg md:text-sm text-white px-4 py-3"
                // onClick={onSubscribeClick}
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NewsletterSignupSection
