import React from 'react'
import Accordian, { AccordianItem } from './Accordian'

const Faq = () => {
  return (
    <div className='flex flex-col justify-center border-t-2 items-center  py-16 bg-cover bg-center bg-[url("https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")]'>
    <div className='text-center '>
        <h3 className='text-4xl font-bold text-white'>FAQ</h3>
        <h1 className='font-bold text-2xl mt-4 text-white '>Frequently Asked Questions </h1>

    </div>
      <Accordian className=" w-[70%] mt-8  shadow-lg bg-white">
        <AccordianItem value="1" trigger='1. What is special about comparing rental car deals?'>
        Comparing rental car deals is important as it helps find the best deal that fits your budget and requirements, ensuring you get the most value for your money. By comparing various options, you can find deals that offer lower prices, additional services, or better car models. You can find car rental deals by researching online and comparing prices from different rental companies.
        </AccordianItem>
        <AccordianItem value="2" trigger='2. How do I find the car rental deals?'>
        You can find car rental deals by researching online and comparing prices from different rental companies. Websites such as Expedia, Kayak, and Travelocity allow you to compare prices and view available rental options. It is also recommended to sign up for email newsletters and follow rental car companies on social media to be informed of any special deals or promotions.
        </AccordianItem>
        <AccordianItem value="3" trigger='3. How do I find such low rental car prices?'>
        Book in advance: Booking your rental car ahead of time can often result in lower prices. Compare prices from multiple companies: Use websites like Kayak, Expedia, or Travelocity to compare prices from multiple rental car companies. Look for discount codes and coupons: Search for discount codes and coupons that you can use to lower the rental price. Renting from an off-airport location can sometimes result in lower prices.
        </AccordianItem>

      </Accordian>
    </div>
  )
}

export default Faq
