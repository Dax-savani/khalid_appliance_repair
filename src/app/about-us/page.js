import React from 'react';
import HeroSection from "@/components/global/HeroSection";
import heroimage from "../../assets/images/about-us/HeroImage.png";
import Heating from "@/components/about-us/Heating";
import WhyChooseUs from "@/components/about-us/WhyChooseUs";
import AboutUs from "@/components/about-us/AboutUs";
import RefrigeratorRepair from '@/components/Home/RefrigeratorRepair';
function Page(props) {
    
    return (
        <>
            <HeroSection image={heroimage.src} title={"ABOUT US"}/>
            <Heating />
            <RefrigeratorRepair />
            <WhyChooseUs />
            <AboutUs />
        </>
    );
}

export default Page;
