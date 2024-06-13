import React from 'react'

const Testimonial = () => {
  return (
    <div className='py-16 bg-slate-50  text-center'>
        <h3 className='text-lg sm:text-xl font-semibold'>Reviewed by People </h3>
        <h1 className='text-2xl sm:text-4xl font-bold mt-3'>Client's Testimonials</h1>
        <p className='text-sm mt-3 sm:w-1/2 w-[80%] mx-auto'>Discover the positive impact we've made on the our clients by reading through their testimonials. Our clients have experienced our service and results, and they're eager to share their positive experiences with you.</p>

        <div className='mt-8 px-12 max-[520px]:px-6 grid grid-cols-2 max-[715px]:grid-cols-1 gap-[80px] text-left'>
            <div className='bg-white shadow-xl p-14'>
                <p className='font-semibold sm:text-2xl text-xl'>"We rented a car from this website and had an amazing experience! The booking was easy and the rental rates were very affordable. "</p>
                <div className="flex gap-4 mt-8" >
                <div className="rounded-full w-[60px] h-[60px] bg-cover bg-center bg-[url('https://static.toiimg.com/thumb/msid-106207513,width-400,resizemode-4/106207513.jpg')]"></div>
                    <div>
                        <p className=' font-semibold'>Harry Potter</p>
                        <p>delhi</p>
                    </div>
                </div>
            </div>
            <div className='bg-white shadow-xl p-14'>
                <p className='font-semibold sm:text-2xl text-xl'>"We rented a car from this website and had an amazing experience! The booking was easy and the rental rates were very affordable. "</p>
                <div className="flex gap-4 mt-8" >
                <div className="rounded-full w-[60px] h-[60px] bg-cover bg-center bg-[url('https://static.toiimg.com/thumb/msid-106207513,width-400,resizemode-4/106207513.jpg')]"></div>
                    <div>
                        <p className=' font-semibold'>Harry Potter</p>
                        <p>delhi</p>
                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Testimonial
