import './styles.css';

const AboutUsMainComponent = (props) => {
    const {
        title,
        description,
    } = props;

    return (
        <div className={'about-desc'}>
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
    )

}

export default AboutUsMainComponent;