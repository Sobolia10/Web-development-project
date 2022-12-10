import {useNavigate} from "react-router-dom";
import ButtonComponent from "../../Components/ButtonComponent";

const ErrorPage = () => {
    let navigate = useNavigate();

    const routeChange = () => {
        navigate('');
    }

    return (
        <>
            <div>Error page</div>
            <div>Uups! Something going wrong!</div>
            <ButtonComponent onClick={() => routeChange} title={'Return'}/>
        </>
    )
}

export default ErrorPage