import {useNavigate} from "react-router-dom";
import ButtonComponent from "../../Components/ButtonComponent";
import {useDispatch, useSelector} from 'react-redux';
import {useState} from "react";
import {authActionCreator} from "../../redux";

const AuthPage = ({isAuth}) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [incorrectPassword, setIncorrectPassword] = useState(false)
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const reduxPassword = useSelector(state => state.authReducer.password);
    const reduxUsername = useSelector(state => state.authReducer.username);

    let authAction = () => {
        if (username === reduxUsername && password === reduxPassword) {
            dispatch(authActionCreator())
            isAuth(username)
            navigate('/');
        } else {
            setIncorrectPassword(true);
            isAuth(null)
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
            {incorrectPassword ? <span>Неправильный пароль</span> : null}
        </div>
    )
}

export default AuthPage