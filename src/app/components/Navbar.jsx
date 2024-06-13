"use client"
import React, { useState } from 'react'
import gsap from "gsap"
import { useGSAP } from '@gsap/react'


const Navbar = () => {

    useGSAP(()=>{
      gsap.from(".logo",{
        x:100,
        delay:0.5,
        opacity:0,
        duration:0.5,
        ease: "back.out(3)"
      })
    })
   
      function mobileMenu(){
        gsap.to(".mobile-menu",{
          x:"100%"
        })
        
      }

    function closeMobileMenu(){
      gsap.to(".mobile-menu",{
        x:0
      })
    }
  
  return (
    <div className=' flex justify-between items-center px-6 min-[1300px]:px-20 min-[1400px]:px-28 pt-8 pb-4'>
        <div className="flex items-center gap-4">
          <img src="/icons/carLogo.png" alt="Logo" className='h-8  logo' style={{filter:"invert(37%) sepia(94%) saturate(2255%) hue-rotate(342deg) brightness(103%) contrast(101%)"}}/>
          <div className=''><p className='text-2xl font-extrabold leading-[1rem]'>CAR</p><p className='font-semibold text-lg'>Rental</p></div>
        </div>
        <div className="flex gap-6 min-[1400px]:gap-10 font-semibold  max-[1000px]:hidden">
          <a href="" className='hover:C'>Home</a>
          <a href="" className='hover:text-[#ff4d30]'>About</a>
          <a href="" className='hover:text-[#ff4d30]'>Vehicle Models</a>
          <a href="" className='hover:text-[#ff4d30]'>Testimonials</a>
          <a href="" className='hover:text-[#ff4d30]'>Our Team</a>
          <a href="" className='hover:text-[#ff4d30]'>Contact</a>
        </div>
        <div className="flex gap-4 font-semibold max-[1000px]:hidden">
          <button>Sign In</button>
          <button className='px-4 py-4 rounded bg-[#ff4d30] text-white shadow-lg shadow-[#ff4c3096] hover:shadow-[#ff4c30d0]'>Register</button>
        </div>


        {/* mobile  */}

        <div className='min-[1000px]:hidden'>
          <img src="/menu-burger-horizontal-svgrepo-com.svg " alt=""  className='w-10  ' onClick={mobileMenu}/>
          <div className='w-[100vw] h-[100vh] absolute z-12 bg-white left-[-100%] top-0 flex  justify-center items-center  font-semibold text-2xl  mobile-menu'>
          <button onClick={closeMobileMenu} className='absolute hover:cursor-pointer right-[3rem] top-[3rem]'><img src="/close-sm-svgrepo-com.svg" alt="" className='w-14'/></button>
          <div className='flex flex-col justify-center items-center gap-10'>
            <a href="" className='hover:text-[#ff4d30]'>Home</a>
            <a href="" className='hover:text-[#ff4d30]'>About</a>
            <a href="" className='hover:text-[#ff4d30]'>Vehicle Models</a>
            <a href="" className='hover:text-[#ff4d30]'>Testimonials</a>
            <a href="" className='hover:text-[#ff4d30]'>Our Team</a>
            <a href="" className='hover:text-[#ff4d30]'>Contact</a>
          </div>

          </div>
        </div>
    </div>
  )
}

export default Navbar
