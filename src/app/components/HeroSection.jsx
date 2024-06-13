import React from 'react'

const HeroSection = () => {
  return (
    <div className=' flex   px-8 min-[1300px]:px-20 min-[1400px]:px-28 '>
      <div className='w-[35%] max-[1100px]:w-[45%] max-[970px]:w-[55%] max-[800px]:w-[65%] max-[660px]:w-full mt-12   min-[1300px]:mt-[180px] bg-[#ffffff9a] p-6 rounded-lg'>
      
        <h3 className='text-xl font-bold '>Start your journey today</h3>
        <h1 className='text-[3rem] font-extrabold mt-2 '>Save <span className='text-[#cc4f3b]'>Big</span> with our car rental</h1>
        <p className=' mt-4'>Drive your dream car with unbeatable rates, unlimited mileage, and flexible pickup options.</p>

        <div className='flex items-center gap-4 mt-8'>
            <button className='flex items-center gap-2 px-8 max-[660px]:px-2 font-semibold py-4  bg-[#ff4d30] shadow-[#ff4c3096] text-white rounded shadow-lg'>Book Ride 
            <img src="/icons/check.png" alt="" className='w-6' style={{filter:"invert(100%) sepia(20%) saturate(0%) hue-rotate(148deg) brightness(101%) contrast(101%)"}}/>
            </button>
            <button className='flex items-center gap-2 px-8  max-[660px]:px-2 font-semibold py-4  bg-[#000000] shadow-[#00000073] text-white rounded shadow-lg'>Learn More
            <img src="/icons/arrow.png" alt="" className='w-4' style={{filter:"invert(100%) sepia(20%) saturate(0%) hue-rotate(148deg) brightness(101%) contrast(101%)"}}/>
            </button>
        </div>
      </div>
      <div className='w-[65%] max-[800px]:w-[45%] max-[660px]:w-0'>
        {/* <img src="/heroSectionCar.png" className=' w-[80%]' alt="" style={{"-webkit-transform":"scaleX(-1)",transform:"scaleX(-1)" }}/> */}
      </div>
    </div>
  )
}

export default HeroSection
