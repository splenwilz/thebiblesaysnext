import SkeletonLoader from '@/components/SkeletonLoader'
import React from 'react'
import thebiblesayslogo from '@/assets/images/logo/thebiblesays.svg'

const Loading = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <SkeletonLoader>Loading...</SkeletonLoader>
    </div>
  )
}

export default Loading
