import {useEffect, useState} from "react";
import ButtonComponent from "../../../Components/ButtonComponent";
import {Modal} from "react-bootstrap";
import UserCard from "../../../Components/UserCard";
import './style.css';


const BannerTemplate = ({id, title, description, address, name, phone, website, username, email, company}) => {
    const [user, setUser] = useState();
    const [user2, setUser2] = useState();
    const [show, setShow] = useState(false);


    const showUserAsync = async () => {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users/' + id);
            const data = await response.json();
            if (data) {
                debugger
                //set state not working
                setUser(data)
                handleShow();
            }
        } catch {
            console.log('Error');
        }
    }


    const handleClose = () => {
        setShow(false);
    }

    const handleShow = () => {
        setShow(true);
    }

    return (
        <div key={id} className={'bannerBlock'}>
            <h3>{title}</h3>
            <p>{description}</p>
            <p>{address}</p>
            <p>{name}</p>
            <p>{phone}</p>
            <p>{website}</p>
            <p>{username}</p>
            <p>{email}</p>
            <p>{company.name}</p>
            {/*<button className={'btnStyle'} onClick={showUserAsync}>*/}
            {/*    {'Read more'}*/}
            {/*</button>*/}
            <ButtonComponent title={'Read more'} onClick={() => showUserAsync}/>
            <Modal show={show} onHide={handleClose}>
                <Modal.Body>
                    <UserCard
                        id={id}
                        key={id}
                        username={username}
                        email={email}
                        name={name}
                        phone={phone}
                        website={website}
                        company={company.name}
                    />
                </Modal.Body>
            </Modal>
        </div>
    );
}

export default BannerTemplate;