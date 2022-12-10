const CardComponent = (props) => {
    const {id, name, description, img, email} = props
    return (
        <div key={id}>
            <img src={img} alt={name}/>
            <h4>{name}</h4>
            <p>{description}</p>
            <p>{email}</p>
        </div>
    )
}

export default CardComponent;