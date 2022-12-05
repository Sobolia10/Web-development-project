import {useState} from "react";
import BannerTemplate from "./BannerTemplate";
import './style.css';
import {Spinner} from "react-bootstrap";


const OurServicesTemplate = () => {
    const [isLoading, setLoading] = useState(false);
    const [isLoaded, setLoaded] = useState(false)
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
            <div className={'ourServices-article'}>
                <h2>Our Services</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
                    et
                    dolore magna aliqua. Ut enim ad minim veniam,</p>
            </div>
            <div className={'bannerBlock-box'}>
                {isLoading && <Spinner/>}
                {users.length > 0 && !isLoading && users.map((currentElem) => (<BannerTemplate
                        key={currentElem.id}
                        user={currentElem}
                    />))}
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