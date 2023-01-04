import {useNavigate} from "react-router-dom";
import ButtonComponent from "../../Components/ButtonComponent";
import {useDispatch, useSelector} from 'react-redux';
import {useState} from "react";
import {authActionCreator} from "../../redux";
import './style.css';

const AuthPage = ({setUser}) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [incorrectPassword, setIncorrectPassword] = useState(false)
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const reduxPassword = useSelector(state => state.authReducer.password);
    const reduxUsername = useSelector(state => state.authReducer.username);

    let authAction = () => {
        debugger
        if (username === reduxUsername && password === reduxPassword) {
            dispatch(authActionCreator())
            setUser(username)
            navigate('/');
        } else {
            setIncorrectPassword(true);
            setUser(null)
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
        <div className={'form-auth'}>
            <h2 className={'form-title'}>Auth page</h2>
            <label>Login
            <input type={'text'} id={'login'} name={'login'} onChange={handleChange}/>
            </label>
            <label>Password
            <input type={'password'} id={'password'} name={'password'} onChange={handleChange}/>
            </label>
            <ButtonComponent title={'Login'} onClick={() => authAction}/>
            {incorrectPassword ? <span>Неправильный пароль</span> : null}
        </div>
    )
}

export default AuthPage;