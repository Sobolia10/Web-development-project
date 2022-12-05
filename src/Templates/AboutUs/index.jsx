import AboutUsMain from "../../Components/AboutUsMain";
import AboutUsBlock from "../../Components/AboutUsBlock";
import {DESCRIPTION_DATA} from "./constants";
import './style.css';

const AboutUs = () => {
    return (
        <>
            <div className={'aboutUsArticle'}>
                <AboutUsMain
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