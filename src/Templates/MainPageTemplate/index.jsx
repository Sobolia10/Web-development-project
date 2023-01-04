import ButtonComponent from "../../Components/ButtonComponent";
import './style.css';
import {useNavigate} from "react-router-dom";

const MainPageTemplate = ({ourServiceSection}) => {
    const onClickOurService = () => {
        //by refs
        ourServiceSection.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }

    const onClickHire = () => {
        //by jQuery
        const section = document.querySelector( '#team' );
        section.scrollIntoView( { behavior: 'smooth', block: 'start' } );
    }
    return (
        <>
            <div className={'backgroundImg'}>
                <h1>Web development project</h1>
                <p>Very suitable to support all web development projects</p>
                <ButtonComponent title={'our services'} onClick={() => onClickOurService}/>
                <ButtonComponent title={'hire is now'} onClick={() => onClickHire}/>
            </div>
        </>
    )
}

export default MainPageTemplate;