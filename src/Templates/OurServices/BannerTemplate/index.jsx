import {useState} from "react";
import ButtonComponent from "../../../Components/ButtonComponent";
import {Modal} from "react-bootstrap";
import UserCard from "../../../Components/UserCard";
import './style.css';


const BannerTemplate = ({user}) => {
    const [show, setShow] = useState(false);

    const handleShowUser = () => {
        setShow(true);
    }

    const handleClose = () => {
        setShow(false);
    }


    return (
        <div key={user.id} className={'bannerBlock'}>
            <p>{user.address}</p>
            <p>{user.name}</p>
            <p>{user.username}</p>
            <p>{user.email}</p>
            <ButtonComponent title={'Read more'} onClick={() => handleShowUser}/>
            <Modal show={show} onHide={handleClose}>
                <Modal.Body>
                    <UserCard
                        user={user}
                        key={user.id}
                    />
                </Modal.Body>
            </Modal>
        </div>
    );
}

export default BannerTemplate;