import {Link} from "react-router-dom";
import {NAV_BAR_DATA} from "./constants";

import './style.css';
import {useDispatch, useSelector} from "react-redux";
import {unauthActionCreator} from "../../redux";

const NavBarComponent = () => {
    const dispatch = useDispatch();
    const isAuth = useSelector(state => state.authReducer.isAuth);

    let LogOut = () => {
        dispatch(unauthActionCreator())
    }

    return (
        <>
            <nav className="nav">
                <ul className="nav__list">
                    {NAV_BAR_DATA.map(({id, label, path}) => (
                        <li key={id} className="nav__link">
                            <Link to={path}>{label}</Link>
                        </li>
                    ))}
                    {isAuth ?
                        <li id={'Logout'} className="nav__link">
                            <Link to={'/auth'} onClick={LogOut}>Logout</Link>
                        </li> :
                        <li id={'Login'} className="nav__link">
                            <Link to={'/auth'}>Log In</Link>
                        </li>}
                </ul>
            </nav>
        </>
    )
}

export default NavBarComponent;