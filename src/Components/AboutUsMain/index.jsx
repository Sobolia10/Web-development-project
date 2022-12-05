import './styles.css';

const AboutUsMain = (props) => {
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

export default AboutUsMain;