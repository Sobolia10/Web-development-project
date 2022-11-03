import './styles.css';

const AboutUsBlocksComponent = ({id, image, important, title, description}) => {

    console.log(important)

    const importantStyle = important === true ? 'bold' : 'normal';

    return (
        <>
            <div id={id} className="about-blocks">
                <img src={image} alt={''}/>
                <h3>{title}</h3>
                <p style={{fontWeight: importantStyle}}>{description}</p>
            </div>
        </>
    );
}

export default AboutUsBlocksComponent;