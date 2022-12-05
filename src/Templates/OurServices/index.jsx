import {useState} from "react";
import BannerTemplate from "./BannerTemplate";
import './style.css';
import {Spinner} from "react-bootstrap";
import TitleComponent from "../../Components/TitleComponent";


const OurServicesTemplate = () => {
    const [isLoading, setLoading] = useState(false);
    const [users, setUsers] = useState([]);
    const [show, setShow] = useState(false);

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
                setLoading(false);
                //handleShow();
            }
            setLoading(false)
        } catch (error) {
            //
        }
    }

    function clearUsersAsync() {
        setUsers([])
    }

    return (

        <div className={'ourServices-section'}>
            <div className={'title-desc'}>
                <TitleComponent title={'Our Services'} description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor \n' +
                    'incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,'}/>
            </div>
            <div className={'bannerBlock-box'}>
                {isLoading && <Spinner/>}
                {users.length > 0 && !isLoading &&
                    users.map(user =>
                        <BannerTemplate
                            key={user.id}
                            user={user}
                        />)}
                {users.length > 0 && <button className={'button-all'} onClick={clearUsersAsync}>hide all</button>}
                {!users.length && !isLoading &&
                    <button className={'button-all'} onClick={showUsersAsync}>view all</button>}

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
        </div>);
}

export default OurServicesTemplate;