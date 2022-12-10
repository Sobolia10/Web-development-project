const BlogComponent= (props) => {
    const {title, publishDate, img, description, isLeft} = props
    return (
        <div>
            <img className={isLeft ? 'isLeft' : 'isRight'} src={img} alt=""/>
            <h4>{title}</h4>
            <img src="calendar.svg" alt=""/>
            <span>{publishDate}</span>
            <img src="icon.svg" alt=""/>
            <span>Development</span>
            <span>{description}</span>
        </div>
    )
}

export default BlogComponent;