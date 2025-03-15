import React from 'react'
import GetInTouch from '@/components/contact/GetInTouch'
import ServicesSection from '@/components/services/ServicesSection'
import heroimage from '../../assets/images/contact/hero.png'
import HeroSection from '@/components/global/HeroSection'

const page = () => {
  return (
    <>
      <HeroSection image={heroimage.src} title={"SERVICES"} />
      <ServicesSection />
      <GetInTouch />
    </>
  )
}

export default page
