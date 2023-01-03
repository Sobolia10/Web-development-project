import ButtonComponent from "../../Components/ButtonComponent";
import './style.css';

const MainPageTemplate = ({ourServiceSection}) => {
    const toNavigate = () => {
        ourServiceSection.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }

    const onClickHire = () => {
        //some action
    }
    return (
        <>
            <div className={'backgroundImg'}>
                <h1>Web development project</h1>
                <p>Very suitable to support all web development projects</p>
                <ButtonComponent title={'our services'} onClick={() => toNavigate}/>
                <ButtonComponent title={'hire is now'} onClick={() => onClickHire}/>
            </div>
        </>
    )
}

export default MainPageTemplate;