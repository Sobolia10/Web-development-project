import './App.css';
import AboutUs from "./Templates/AboutUs";
import OurServicesTemplate from "./Templates/OurServices";
import 'bootstrap/dist/css/bootstrap.min.css';
import PricingPlanTemplate from "./Templates/PricingPlan";
import MainPageTemplate from "./Templates/MainPageTemplate";
import MembershipTemplate from "./Templates/MembershipTemplate";
import BlogTemplate from "./Templates/BlogTemplate";
import ContactUsTemplate from "./Templates/ContactUsTemplate";
import FooterTemplate from "./Templates/FooterTemplate";
import {useRef} from "react";

function App() {
    const ourServicesSection = useRef(null)

    return (
        <>
            <MainPageTemplate refs={ourServicesSection}/>
            <AboutUs/>
            <OurServicesTemplate refs={ourServicesSection}/>
            <PricingPlanTemplate/>
            <MembershipTemplate/>
            <BlogTemplate/>
            <ContactUsTemplate/>
            <FooterTemplate/>
        </>
    );
}

export default App;
