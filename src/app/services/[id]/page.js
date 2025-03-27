import React from 'react';
import HeroSection from "@/components/global/HeroSection";
import heroimage from "@/assets/images/contact/hero.png";
import FAQSection from "@/components/Projects/ProjectFAQ";
import SingleServiceFile from "@/components/services/SingleServiceFile";

function Page(props) {

    return (
        <>
            <HeroSection image={heroimage.src} title={"PROJECTS"} />
            <SingleServiceFile />
           <FAQSection/>

        </>
    );
}

export default Page;