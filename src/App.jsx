import './App.css';
import {useRef, useState} from "react";
import AboutUs from "./Templates/AboutUs";
import OurServicesTemplate from "./Templates/OurServices";
import 'bootstrap/dist/css/bootstrap.min.css';
import PricingPlanTemplate from "./Templates/PricingPlan";
import MainPageTemplate from "./Templates/MainPageTemplate";
import MembershipTemplate from "./Templates/MembershipTemplate";
import BlogTemplate from "./Templates/BlogTemplate";
import ContactUsTemplate from "./Templates/ContactUsTemplate";
import FooterTemplate from "./Templates/FooterTemplate";
import AuthPage from "./Pages/AuthPage";
import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {wait} from "@testing-library/user-event/dist/utils";
import {Spinner} from "react-bootstrap";


const useMakeQuery = (initialUrl, initialData) => {
    const [data, setData] = useState(initialData);
    const [url, setUrl] = useState(initialUrl);
    const [isLoading, setIsLoading] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);


    const fetchData = async () => {
        setIsLoading(true);

        try {
            setIsLoaded(true)
            const response = await fetch(url);
            await wait(1000)
            const data = await response.json();
            setData(data);

        } catch (error) {
            //Ignore
        }
        setIsLoading(false);
    };

    if (!isLoaded)
        fetchData();

    return [{data, isLoading, isLoaded}, setUrl];
}


function App() {
    const [{isLoading, isLoaded}, doFetch] = useMakeQuery(
        'https://jsonplaceholder.typicode.com/users', []);

    const navigate = useNavigate();
    const ourServicesSection = useRef(null)
    let isAuth = useSelector(state => state.authReducer.isAuth);

    if (!isLoaded)
        doFetch('https://jsonplaceholder.typicode.com/users');

    if (!isAuth) {
        navigate('/auth');
    }

    return (
        <>
            {isLoading && <Spinner/>}
            {isAuth ? <>
                <MainPageTemplate refs={ourServicesSection}/>
                <AboutUs/>
                <OurServicesTemplate refs={ourServicesSection}/>
                <PricingPlanTemplate/>
                <MembershipTemplate/>
                <BlogTemplate/>
                <ContactUsTemplate/>
                <FooterTemplate/>
            </> : <AuthPage/>}
        </>

    )
}

export default App;
