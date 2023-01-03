import TitleComponent from "../../Components/TitleComponent";
import CardComponent from "../../Components/CardComponent";
import {MEMBERS_DATA} from "./constants";
import './style.css';

const MembershipTemplate = () => {
    return (
        <>
            <TitleComponent title={'Our Team Member'}
                            description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor \n' +
                                'incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,'}/>
            <div className={'cardMember'}>
            {MEMBERS_DATA.map(({id, img, title, description, email}) => (
                <CardComponent key={id} img={img} title={title} description={description} email={email}/>

            ))}
            </div>

        </>
    )
}

export default MembershipTemplate;