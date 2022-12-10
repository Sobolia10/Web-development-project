import HeaderComponent from "../../Components/HeaderComponent";
import ButtonComponent from "../../Components/ButtonComponent";

const MainPageTemplate = () => {
    return (
        <>
            <HeaderComponent/>
            <div>
                <h1>Web development project</h1>
                <p>Very suitable to support all web development projects</p>
                <ButtonComponent title={'ourServices'} onClick={()=> console.log()}/>
                <ButtonComponent title={'hire is now'} onClick={()=> console.log()}/>
            </div>
        </>
    )
}

export default MainPageTemplate;