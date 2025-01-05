import Image from 'next/image'
import React from 'react'

const Loader = () => {
  return (
    <div className='flex-center h-screen w-full text-white gap-3'>
        <Image 
            src={"/icons/loading-circle.svg"} 
            alt='Loading'
            width={50}
            height={50}
        />
        <p className='text-sm'>Just a Moment</p>
    </div>
  )
}

export default Loader