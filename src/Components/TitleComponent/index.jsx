import './style.css'

const TitleComponent = (props) => {
    const {title, description} = props;
    return (
        <div className={'title-desc'}>
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
    )
}

export default TitleComponent;