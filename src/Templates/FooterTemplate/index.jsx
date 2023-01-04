import NavBarComponent from "../../Components/NavBarComponent";
import './style.css';

const FooterTemplate = () => {
    return (
        <footer className={'footer'}>
            <NavBarComponent/>
            <div>
                <p>All right reserved © 2017</p>
                <img src="icon" alt=""/>
                <img src="icon" alt=""/>
                <img src="icon" alt=""/>
            </div>
        </footer>
    )
}

export default FooterTemplate;