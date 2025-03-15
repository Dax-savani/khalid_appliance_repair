import React from 'react'
import GetInTouch from '@/components/contact/GetInTouch'
import HeroSection from '@/components/global/HeroSection'
import heroimage from '../../assets/images/contact/hero.png'

const page = () => {
  return (
    <>
    <HeroSection image={heroimage.src} title={"CONTACT US"}/>
     <GetInTouch /> 
    </>
  )
}

export default page
