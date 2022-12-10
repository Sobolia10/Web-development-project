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

function App() {
  return (
    <>
        <MainPageTemplate/>
        <AboutUs/>
        <OurServicesTemplate/>
        <PricingPlanTemplate/>
        <MembershipTemplate/>
        <BlogTemplate/>
        <ContactUsTemplate/>
        <FooterTemplate/>
    </>
  );
}

export default App;
