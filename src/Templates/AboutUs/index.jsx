import AboutUsBlock from "../../Components/AboutUsBlock";
import {DESCRIPTION_DATA} from "./constants";
import './style.css';
import TitleComponent from "../../Components/TitleComponent";

const AboutUs = () => {
    return (
        <>
            <div>
                <TitleComponent
                    title={'About us'}
                    description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,'}
                />
            </div>

            <div className={'aboutUsSection'}>

                {DESCRIPTION_DATA.map(({id , title, image, description}) => (
                        <AboutUsBlock
                            key={id}
                            title={title}
                            image={image}
                            description={description}
                        />
                    )
                )}
            </div>
        </>
    )
}

export default AboutUs;