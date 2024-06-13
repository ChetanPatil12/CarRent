import React from 'react'

const ChooseUs = () => {
  return (
    <div className='py-16  min-[700px]:flex justify-around px-20 max-[1000px]:px-6'>
      <div className='min-[700px]:w-1/3'>
        <h3 className='font-bold text-xl '>Why Choose Us</h3>
        <h1 className='font-bold text-3xl '>Best valued deals you will ever find</h1>
        <p className='text-sm mt-2'>Discover the best deals you'll ever find with our unbeatable offers. We're dedicated to providing you with the best value for your money, so you can enjoy top-quality services and products without breaking the bank. Our deals are designed to give you the ultimate renting experience, so don't miss out on your chance to save big.</p>
        <button className=' mt-8 flex items-center gap-2 px-8  font-semibold py-4  bg-[#ff4d30] shadow-[#ff4c3096] text-white rounded shadow-lg'>Find Details
            <img src="/icons/arrow.png" alt="" className='w-4' style={{filter:"invert(100%) sepia(20%) saturate(0%) hue-rotate(148deg) brightness(101%) contrast(101%)"}}/>
            </button>
      </div>
      <div className='min-[700px]:w-1/3 max-[700px]:mt-10'>
        <div className='flex gap-4'>
            <img src="/icons/car2.png" className='w-[100px] h-[100px] ' alt="" />
            <div>
                <h2 className='text-lg font-bold'>Cross Country Drive</h2>
                <p className='mt-2 text-sm'>Take your driving experience to the next level with our top-notch vehicles for your cross-country adventures.</p>
            </div>
        </div>
        <div className='flex gap-4 mt-6'>
            <img src="/icons/Coin.png" className='w-[100px] h-[100px]' alt="" />
            <div>
                <h2 className='text-lg font-bold'>All Inclusive Pricing</h2>
                <p className='mt-2 text-sm'>Get everything you need in one convenient, transparent price with our all-inclusive pricing policy.</p>
            </div>
        </div>
        <div className='flex gap-4 mt-6'>
            <img src="/icons/CoinHand.png" className='w-[100px] h-[100px]' alt="" />
            <div>
                <h2 className='text-lg font-bold'>No Hidden Charges</h2>
                <p className='mt-2 text-sm'>Enjoy peace of mind with our no hidden charges policy. We believe in transparent and honest pricing.</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default ChooseUs
