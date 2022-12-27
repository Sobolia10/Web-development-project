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
import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import AuthPage from "./Pages/AuthPage";

function App() {
    const navigate = useNavigate();
    const ourServicesSection = useRef(null)


    let isAuth = useSelector(state => state.authReducer.isAuth);

    if (!isAuth) {
        navigate('/auth');
    }

    return (isAuth ?
        <>
            <MainPageTemplate refs={ourServicesSection}/>
            <AboutUs/>
            <OurServicesTemplate refs={ourServicesSection}/>
            <PricingPlanTemplate/>
            <MembershipTemplate/>
            <BlogTemplate/>
            <ContactUsTemplate/>
            <FooterTemplate/>
        </> : <AuthPage/>);
}

export default App;
