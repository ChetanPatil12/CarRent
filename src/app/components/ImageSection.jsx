import React from 'react'

const ImageSection = () => {
  return (
    <div>
    <div className='bg-[#2d2d2d] py-16 text-white text-center px-6' >
        <h1 className="text-2xl lg:text-5xl md:text-4xl font-bold">Save big with our cheap car rental!</h1>
        <h3 className="text-lg lg:text-2xl md:text-xl font-bold mt-6">Top Airports. Local Suppliers. <span className='text-[#ff4d30]'>24/7</span> Support.</h3>
    </div>
      
      <div className='flex justify-center'>
        <img src="/threeCar.png" alt="" />
      </div>
    </div>
  )
}

export default ImageSection
