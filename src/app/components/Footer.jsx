import React from 'react'

const Footer = () => {
  return (
    <div className='py-20 px-8 grid gap-8 grid-cols-4 max-[930px]:grid-cols-3 max-[630px]:grid-cols-2 max-[480px]:grid-cols-1'>
        <div className='flex flex-col gap-2 '>
            <h1 className='text-2xl  font-bold'>
                CAR <span className='font-semibold'>Rental</span>
            </h1>
            <p className=' text-gray-400 text-sm'>
            We offers a big range of vehicles for all your driving needs. We have the perfect car to meet your needs.
            </p>

            <div className='flex items-center gap-2 mt-4'>
                <img src="/icons/telephone.png" className='w-4' alt="" /> <p className=' font-bold'>123-344-545</p>
            </div>
            <div className='flex items-center gap-2'>
                <img src="/icons/email.png" className='w-4' alt="" /> <p className=' font-bold'>carrental@email.com</p>
            </div>
        </div>
        <div className='flex flex-col gap-2'>
            <h1 className='text-2xl  font-bold'>
                COMPANY
            </h1>
            <p>New York</p>
            <p>Carreers</p>
            <p>Mobile</p>
            <p>Blog</p>
            <p>How we work</p>
        </div>
        <div className='flex flex-col gap-2'>
            <h1 className='text-2xl  font-bold'>
                WORKING HOURS
            </h1>
            <p>Mon - Fri: 9:00AM - 9:00PM</p>
            <p>Sat: 9:00AM - 19:00PM</p>
            <p>Sun: close</p>
        </div>
        <div className='flex flex-col gap-2'>
            <h1 className='text-2xl  font-bold'>
                SUBSCRIPTION
            </h1>
            <p>Subscribe your Email address for latest news & updates.</p>
            <input type="text " className='bg-gray-100 py-4 px-4 focus:border-none border-none text-center text-sm' placeholder='Enter Email Address' />
            <button className='mt-2 px-8 max-[660px]:px-2 font-semibold py-4  bg-[#ff4d30] shadow-[#ff4c3096] text-white rounded shadow-lg'>Submit
            </button>
        </div>
    </div>
  )
}

export default Footer
