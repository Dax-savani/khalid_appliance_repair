import ProjectDetails from "@/components/Projects/ProjectDetails";
import heroimage from "@/assets/images/contact/hero.png";
import HeroSection from "@/components/global/HeroSection";
import React from "react";

function Page() {
    return (
        <>
            <HeroSection image={heroimage.src} title={"PROJECTS"} />
        <ProjectDetails />
        </>
    );
}

export default Page;