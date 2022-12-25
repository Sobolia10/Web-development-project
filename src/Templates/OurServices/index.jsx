import {useRef, useState} from "react";
import BannerTemplate from "./BannerTemplate";
import {Spinner} from "react-bootstrap";
import TitleComponent from "../../Components/TitleComponent";
import './style.css';


const OurServicesTemplate = () => {
    const [isLoading, setLoading] = useState(false);
    const [users, setUsers] = useState([]);
    const [filteredUsers, setFilteredUsers] = useState([]);
    const [show, setShow] = useState(false);


    const ourServicesSection = useRef(null)

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

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

        <div className={'ourServices-section'} id={'ourServices'} ref={ourServicesSection}>
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
                        <BannerTemplate
                            key={user.id}
                            user={user}
                        />)}
                {/*{filteredUsers.length > 0 &&*/}
                {/*    <button className={'button-all'} onClick={clearUsersAsync}>hide all</button>}*/}
                {/*{!filteredUsers.length && !isLoading &&*/}
                {/*    <button className={'button-all'} onClick={showUsersAsync}>view all</button>}*/}

                {/*            <Modal show={show} onHide={handleClose}>
                <Modal.Body>
                    {users.map(({id, username, address, email, name, phone, website}) => (
                        <UserCard
                            id={id}
                            key={id}
                            username={username}
                            address={address.city}
                            email={email}
                            name={name}
                            phone={phone}
                            website={website}
                        />
                    ))}
                </Modal.Body>
            </Modal>*/}
            </div>
            {filteredUsers.length > 0 &&
                <button className={'button-all'} onClick={clearUsersAsync}>hide all</button>}
            {!filteredUsers.length && !isLoading &&
                <button className={'button-all'} onClick={showUsersAsync}>view all</button>}
        </div>);
}

export default OurServicesTemplate;