import heroimage from "@/assets/images/contact/hero.png";
import HeroSection from "@/components/global/HeroSection";
import React from "react";
import Projects from "@/components/Home/Projects";

function Page() {
    return (
        <>
            <HeroSection image={heroimage.src} title={"PROJECTS"} />
            <Projects />
        </>
    );
}

export default Page;