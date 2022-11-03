import AboutUsMainText from "../../../../Components/AboutUsDesc/AboutUsMainText";
import AboutUsBlocks from "../../../../Components/AboutUsDesc/AboutUsBlocks";
import './style.css';
import {DESCRIPTION_DATA} from "./constants";

const AboutUs = () => {
    return (
        <>
            <div className={'aboutUsArticle'}>
                <AboutUsMainText
                    title={'About us'}
                    description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,'}
                />
            </div>

            <div className={'aboutUsSection'}>

                {DESCRIPTION_DATA.map(({id , title, image, description}) => (
                        <AboutUsBlocks
                            id={id}
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