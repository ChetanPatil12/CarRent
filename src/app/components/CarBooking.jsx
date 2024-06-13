"use client"
import React from 'react'
import Select from 'react-select'
const CarBooking = () => {
  const options = [{value:"Mahindra XUV 3XO",label:"Mahindra XUV 3XO"},
    {value:"Toyota Urban Cruiser Taisor",label:"Toyota Urban Cruiser Taisor"},
    {value:"Maruti Swift",label:"Maruti Swift"},
    {value:"Skoda Slavia",label:"Skoda Slavia"},
    {value:"Honda City",label:"Honda City"},
    {value:"Honda Elevate",label:"Honda Elevate"},
    {value:"Renault Kiger",label:"Renault Kiger"},
    {value:"Citroen C3",label:"Citroen C3"},
  ]
  return (
    <div className=' py-20 px-16 min-[1300px]:px-20 min-[1400px]:px-28 bg-[#f5f5f5]'>
      <h1 className="text-2xl font-semibold mb-2">Book a Car</h1>
      <form className='w-full grid grid-cols-3 max-[800px]:grid-cols-2 max-[460px]:grid-cols-1 gap-4 border rounded-lg shadow-lg pb-6 bg-white'>

        <div className=' px-4 mt-4'>
          <span className='flex items-center gap-2  font-semibold mb-2'>
            <img src="/icons/car1.png" alt="" className='w-8'/> Select Your Car Type <span className='text-[#ff4d30]'>*
            </span>
          </span>
          <Select options={options} required="true"/>
        </div>
        <div className=' px-4 mt-4'>
          <span className='flex items-center gap-2  font-semibold mb-2'>
            <img src="/icons/locationPing.png" alt="" className='w-4 my-2 '/> Pick up <span className='text-[#ff4d30]'>*
            </span>
          </span>
          <Select options={options} required="true"/>
        </div>        <div className=' px-4 mt-4'>
          <span className='flex items-center gap-2  font-semibold mb-2'>
            <img src="/icons/locationPing.png" alt="" className='w-4 my-2'/> Drop-of<span className='text-[#ff4d30]'>*
            </span>
          </span>
          <Select options={options} required="true"/>
        </div>        <div className=' px-4 mt-4'>
          <span className='flex items-center gap-2  font-semibold mb-2'>
            <img src="/icons/calander.png" alt="" className='w-6'/> Pick up Date <span className='text-[#ff4d30]'>*
            </span>
          </span>
          <input type="date" className='border px-2 w-full py-2 rounded text-sm text-slate-500 border-slate-300 ' required="true"/>
        </div>
        <div className=' px-4 mt-4'>
          <span className='flex items-center gap-2  font-semibold mb-2'>
            <img src="/icons/calander.png" alt="" className='w-6'/> Drop of Date <span className='text-[#ff4d30]'>*
            </span>
          </span>
          <input type="date" className='border px-2 w-full py-2 rounded text-sm text-slate-500 border-slate-300 ' required="true"/>
        </div>
        <div className=' px-4 mt-4  flex flex-col  justify-between'>
          <span className='  mb-2'>

          </span>
          <button  className='h-10  w-full font-semibold  bg-[#ff4d30] shadow-[#ff4c3096] text-white rounded shadow-lg'>Search

            </button>
        </div>
        

      </form>
    </div>
  )
}

export default CarBooking
