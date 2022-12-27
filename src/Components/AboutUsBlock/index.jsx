import './styles.css';

const AboutUsBlock = ({id, image, title, description}) => {

    return (
        <div key={id} className="about-blocks">
            <img src={image} alt={''}/>
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    );
}

export default AboutUsBlock;