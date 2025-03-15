import HeroSection from "@/components/Home/Herosection";
import Advantages from "@/components/Home/Advantages";
import ServiceCards from "@/components/Home/ServiceCards";
import RefrigeratorRepair from "@/components/Home/RefrigeratorRepair";
import FeaturedWorks from "@/components/Home/FeaturedWorks";

export default function Home() {
    return (
        <>
            <HeroSection />
            <Advantages />
            <ServiceCards />
            <RefrigeratorRepair />
            <FeaturedWorks />
        </>
    );
}
