import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface LogoSectionProps {
  className?: string
  logobg: string
  logo: string
}

const LogoSection: React.FC<LogoSectionProps> = ({
  className,
  logobg,
  logo,
}) => {
  return (
    <div className={className}>
      <Link href="/" className="">
        <Image
          className="block h-10 md:h-8 w-auto "
          src={logobg}
          alt="The Bible Says"
        />
        <Image
          className="relative md:-mt-8 -mt-10 w-32 md:w-24 -ml-2 md:-ml-1 block h-10 md:h-8 "
          src={logo}
          alt="The Bible Says"
        />
      </Link>
    </div>
  )
}

export default LogoSection
