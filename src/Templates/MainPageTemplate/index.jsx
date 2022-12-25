import HeaderComponent from "../../Components/HeaderComponent";
import ButtonComponent from "../../Components/ButtonComponent";
import './style.css';

const MainPageTemplate = () => {

    return (
        <>
            <HeaderComponent/>
            <div className={'backgroundImg'}>
                <h1>Web development project</h1>
                <p>Very suitable to support all web development projects</p>
                <ButtonComponent title={'our services'} onClick={() => console.log()}/>
                <ButtonComponent title={'hire is now'} onClick={() => console.log()}/>
            </div>
        </>
    )
}

export default MainPageTemplate;