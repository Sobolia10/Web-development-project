import {useNavigate} from "react-router-dom";
import ButtonComponent from "../../Components/ButtonComponent";
import { useDispatch } from 'react-redux';
import {useState} from "react";
import {authActionCreator} from "../../redux";

const AuthPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    let authAction = () => {
        if (username === "sobolia" && password === "12345") {
            dispatch(authActionCreator())
            navigate('/');
        } else {

        }
    }


    const handleChange = (event) => {
        switch (event.target.id) {
            case "login":
                setUsername(event.target.value);
                break;
            case "password":
                setPassword(event.target.value);
                break;
            default:
                break;
        }
    }

    return (
        <div>
            <h2>Auth page</h2>
            <input type={'text'} id={'login'} name={'login'} onChange={handleChange}/>
            <input type={'password'} id={'password'} name={'password'} onChange={handleChange}/>
            <ButtonComponent title={'Login'} onClick={() => authAction}/>
        </div>
    )
}

export default AuthPage