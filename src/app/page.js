import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import CarBooking from './components/CarBooking'
import TripPlan from './components/TripPlan'
import RentalFleet from './components/RentalFleet'
import ImageSection from './components/ImageSection'
import ChooseUs from './components/ChooseUs'
import Testimonial from './components/Testimonial'
import Faq from './components/Faq'
import Footer from './components/Footer'

const Page = () => {
  return (
    <div >

      <div className=' bg-cover h-[100vh]  bg-center bg-[url("https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")]'>
         <Navbar />
        <HeroSection />
      </div>
      <CarBooking/>
      <TripPlan/>
      <RentalFleet/>
      <ImageSection/>
      <ChooseUs/>
      <Testimonial/>
      <Faq/>
      <Footer/>
    </div>
  )
}

export default Page
