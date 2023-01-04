import {useRef} from "react";
import MainPageTemplate from "../../Templates/MainPageTemplate";
import AboutUs from "../../Templates/AboutUs";
import OurServicesTemplate from "../../Templates/OurServices";
import PricingPlanTemplate from "../../Templates/PricingPlan";
import MembershipTemplate from "../../Templates/MembershipTemplate";
import BlogTemplate from "../../Templates/BlogTemplate";
import ContactUsTemplate from "../../Templates/ContactUsTemplate";

export const Landing = () => {
    const ourServicesSection = useRef(null)

    return (
        <>
            <MainPageTemplate ourServiceSection={ourServicesSection}/>
            <AboutUs/>
            <OurServicesTemplate refs={ourServicesSection}/>
            <PricingPlanTemplate/>
            <MembershipTemplate/>
            {/*<BlogTemplate/>*/}
            {/*<ContactUsTemplate/>*/}
        </>
    )
}