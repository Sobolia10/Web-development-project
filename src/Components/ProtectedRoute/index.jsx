import {Navigate, Outlet} from "react-router-dom";

export const ProtectedRoute = ({user}) => {
    debugger
    if (!user) {
        return <Navigate to={'auth'} replace/>;
    }
    return <Outlet/>;
};