import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";

const ProtectedRoute = (props) => {
    const navigate = useNavigate();
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    let isAuthRedux = useSelector(state => state.authReducer.isAuth);

    const checkUserAuth = () => {
        if (!isAuthRedux) {
            setIsLoggedIn(false);
            return navigate('/auth');
        }
        setIsLoggedIn(true);
    }
    useEffect(() => {
        checkUserAuth();
    }, [isLoggedIn]);
    return (
        <React.Fragment>
            {
                isLoggedIn ? props.children : null
            }
        </React.Fragment>
    );
}
export default ProtectedRoute;