import React from 'react'

const TripPlan = () => {
  return (
    <div className='py-16 px-6'>
              <h2 className='text-center text-xl font-bold'>Plan your trip now</h2>
              <h1 className='text-center text-2xl font-bold'>Quick & easy car rental</h1>

              <div className='grid grid-cols-3 max-[635px]:grid-cols-2 max-[420px]:grid-cols-1 gap-8  mt-4'>
                <div className="flex flex-col items-center">
                    <img src="/icons/SelectCar.png" alt="" className='w-[130px]'  />
                    <h3 className='font-bold '>Select Car</h3>
                    <p className='w-[80%] text-sm mt-2 text-center'>We offers a big range of vehicles for all your driving needs. We have the perfect car to meet your needs</p>
                </div>
                <div className="flex flex-col items-center">
                    <img src="/icons/ContactOperator.png"  className='w-[130px]' alt="" />
                    <h3 className='font-bold '>Contact Operator</h3>
                    <p className='w-[80%] text-sm mt-2 text-center'>Our knowledgeable and friendly operators are always ready to help with any questions or concerns</p>
                </div>
                <div className="flex flex-col items-center">
                    <img src="/icons/letsDrive.png" alt="" className='w-[130px]'  />
                    <h3 className='font-bold '>Let's Drive</h3>
                    <p className='w-[80%] text-sm mt-2 text-center'>Whether you're hitting the open road, we've got you covered with our wide range of cars</p>
                </div>
              </div>
    </div>
  )
}

export default TripPlan
