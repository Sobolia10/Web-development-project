import NavBarComponent from '../NavBarComponent';
import './style.css';

const HeaderComponent = () => {
    return (
        <header className="header">
            <img src="/img/logo.png" alt="лого"/>
            <p>Web Development Project</p>
            <div className="header__nav-bar">
                 <NavBarComponent />
            </div>
        </header>
    )
}

export default HeaderComponent;