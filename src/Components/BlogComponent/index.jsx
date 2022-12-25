import './style.css';

const BlogComponent= (props) => {
    const {title, publishDate, img, description, isLeft} = props;

    return (
        <div className={'blogComponent'}>
            <img className={isLeft ? 'isLeft' : 'isRight'} src={img} alt=""/>
            <h4>{title}</h4>

            <span>{publishDate}</span>
            <img src="/img/calendar.svg" alt="calendar"/>
            <span>Development</span>
            <span>{description}</span>
        </div>
    )
}

export default BlogComponent;