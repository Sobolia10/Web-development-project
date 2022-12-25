const CardComponent = (props) => {
    const {id, title, description, img, email} = props
    return (
        <div key={id}>
            <img src={img} alt={title}/>
            <h4>{title}</h4>
            <p>{description}</p>
            <p>{email}</p>
        </div>
    )
}

export default CardComponent;