"use client"
import React,{useState} from 'react'

const RentalFleet = () => {
    const data = [
        {"id":1, "name":"Mahindra XUV 3XO", "costPerDay":45, "model":"Mahindra", "BodyType":"SUV", "Year":2012, "Doors": "4/5", "AC": "Yes", "Transmission":"Manual", "Fuel":"Petrol","img":"https://images.91wheels.com/assets/b_images/main/models/profile/profile1714459357.jpg?width=420&q=60?w=1080&q=60"},
        {"id":2, "name":"Maruti Swift", "costPerDay":35, "model":"Swift", "BodyType":"hatchback", "Year":2009, "Doors": "4/5", "AC": "Yes", "Transmission":"Manual", "Fuel":"Petrol","img":"https://www.carandbike.com/_next/image?url=https%3A%2F%2Fimages.carandbike.com%2Fcar-images%2Fcolors%2Fmaruti-suzuki%2Fswift%2Fmaruti-suzuki-swift-pearl-metallic-midnight-blue-with-pearl-arctic-white-roof.png%3Fv%3D1614155580&w=640&q=75"},
        {"id":3, "name":"Honda City", "costPerDay":40, "model":"Honda", "BodyType":"Sedan", "Year":2015, "Doors": "4/5", "AC": "Yes", "Transmission":"Automatic", "Fuel":"Petrol","img":"https://images.91wheels.com/assets/b_images/main/models/profile/profile1660828013.jpg?w=600&q=60?w=1920&q=60"},
        {"id":4, "name":"Renault Kiger", "costPerDay":30, "model":"Kiger", "BodyType":"SUV", "Year":2012, "Doors": "4/5", "AC": "Yes", "Transmission":"Manual", "Fuel":"Gasoline","img":"https://images.91wheels.com/assets/b_images/main/models/profile/profile1702526684.jpg?w=600&q=60?w=1920&q=60"},
        {"id":5, "name":"Renault Duster", "costPerDay":45, "model":"Duster", "BodyType":"SUV", "Year":2020, "Doors": "4/5", "AC": "Yes", "Transmission":"Manual", "Fuel":"Petrol","img":"https://images.91wheels.com/assets/c_images/gallery/renault/duster-2025/renault-duster-2025-0-1708929581.png?w=600&q=60?w=1920&q=60"},
        {"id":6, "name":"Nissan Magnite", "costPerDay":36, "model":"Magnite", "BodyType":"SUV", "Year":2018, "Doors": "4/5", "AC": "Yes", "Transmission":"Automatic", "Fuel":"Disel","img":"https://images.91wheels.com/assets/b_images/main/models/profile/profile1716448948.jpg?w=600&q=60?w=1920&q=60"}
    ]
const [selectedCar , setSelectedCar] = useState(data[0]);
    function handleClick(item){
        setSelectedCar(item);
    }
  return (
    <div className=' py-16 px-6 min-[1300px]:px-20 min-[1400px]:px-28'>
      <h2 className='text-xl font-semibold text-center'>Vehicle Models</h2>
      <h1 className='text-3xl font-bold text-center mt-4'>Our rental fleet</h1>
      <p className='text-center w-1/3 mx-auto mt-4 text-sm'>Choose from a variety of our amazing vehicles to rent or your next adventure or buisness trip</p>

      <div className='mt-8  grid grid-cols-4 max-lg:grid-cols-2 '>
    <div className='max-lg:col-span-2'>
                {data.map((item)=>(
            <button key={item.id} className={`py-4 mb-2 shadow-sm text-xl font-semibold  w-full ${selectedCar.id === item.id ? 'bg-[#ff4d30] text-white': 'text-black bg-slate-100'}`} 
            onClick={()=> handleClick(item)}>{item.name}</button>
        ))}
    </div>

    <div className='col-span-3 grid sm:grid-cols-3 '>
        <img src={selectedCar.img} alt="" className='sm:col-span-2 w-full' />
<div  className=''>
    <div className='text-white bg-[#ff4d30] px-4 py-2'><span className='text-xl font-semibold'>$ {selectedCar.costPerDay}</span> / rent per day</div>
    <div className=' border-2 border-slate-400 text-center'>
    <div className='flex py-2 border-b-2 border-slate-400'>
            <span className=' border-r-2  border-slate-400  w-1/2'>Model</span><span className='w-1/2'>{selectedCar.model}</span>
        </div>        
        <div className='flex py-1 border-b-2 border-slate-400'>
            <span className=' border-r-2  border-slate-400  w-1/2'>Body Type</span><span className='w-1/2'>{selectedCar.BodyType}</span>
        </div>        
        <div className='flex py-2 border-b-2 border-slate-400'>
            <span className=' border-r-2  border-slate-400  w-1/2'>Year</span><span className='w-1/2'>{selectedCar.Year}</span>
        </div>        
        <div className='flex py-2 border-b-2 border-slate-400'>
            <span className=' border-r-2  border-slate-400  w-1/2'>Doors</span><span className='w-1/2'>{selectedCar.Doors}</span>
        </div>        
        <div className='flex py-2 border-b-2 border-slate-400'>
            <span className=' border-r-2  border-slate-400  w-1/2'>AC</span><span className='w-1/2'>{selectedCar.AC}</span>
        </div>        
        <div className='flex py-2 border-b-2 border-slate-400'>
            <span className=' border-r-2  border-slate-400  w-1/2'>Transmission</span><span className='w-1/2'>{selectedCar.Transmission}</span>
        </div>        
        <div className='flex py-2 border-slate-400'>
            <span className=' border-r-2  border-slate-400  w-1/2'>Fuel</span><span className='w-1/2'>{selectedCar.Fuel}</span>
        </div>
    </div>
    <div className='text-center text-white text-xl bg-[#ff4d30] py-2 mt-4 font-semibold hover:cursor-pointer'>RESERVE NOW</div>
</div>
    </div>

      </div>
    </div>
  )
}

export default RentalFleet
