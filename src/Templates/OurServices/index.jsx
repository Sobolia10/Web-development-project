import {useState} from "react";
import UserTemplate from "./UserCard";
import {Spinner} from "react-bootstrap";
import TitleComponent from "../../Components/TitleComponent";
import './style.css';


const OurServicesTemplate = ({refs}) => {
    const [isLoading, setLoading] = useState(false);
    const [users, setUsers] = useState([]);
    const [filteredUsers, setFilteredUsers] = useState([]);

    const showUsersAsync = async () => {
        setLoading(true)
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users');
            // импортировать в константы или дот энф
            const data = await response.json();
            if (data) {
                setUsers(data);
                setFilteredUsers(data);
                setLoading(false);
                //handleShow();
            }
            setLoading(false)
        } catch (error) {
            //
        }
    }

    function clearUsersAsync() {
        setFilteredUsers([])
    }

    const handleChange = (event) => {
        const newUsers = users.filter(
            user => user.name.toLowerCase().includes(event.target.value.toLowerCase())
                || user.username.toLowerCase().includes(event.target.value.toLowerCase())
        );
        setFilteredUsers(newUsers)
    };

    return (

        <div className={'ourServices-section'} id={'servicing'} ref={refs}>
            <div className={'title-desc'}>
                <TitleComponent title={'Our Services'}
                                description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor \n' +
                                    'incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,'}/>
            </div>
            {filteredUsers.length > 0 && <input type="text" onChange={handleChange}/>}
            <div className={'bannerBlock-box'}>
                {isLoading && <Spinner/>}
                {filteredUsers.length > 0 && !isLoading &&
                    filteredUsers.map(user =>
                        <UserTemplate
                            key={user.id}
                            user={user}
                        />)}
            </div>
            {filteredUsers.length > 0 &&
                <button className={'button-all'} onClick={clearUsersAsync}>hide all</button>}
            {!filteredUsers.length && !isLoading &&
                <button className={'button-all'} onClick={showUsersAsync}>view all</button>}
        </div>);
}

export default OurServicesTemplate;