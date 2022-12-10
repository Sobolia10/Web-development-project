import BlogComponent from "../../Components/BlogComponent";
import TitleComponent from "../../Components/TitleComponent";
import {BLOG_DATA} from "../../Components/BlogComponent/constants";
import ButtonComponent from "../../Components/ButtonComponent";

const BlogTemplate = () => {
    let isLeft = false;

    return (
        <div>
            <TitleComponent title={'Blog'}
                            description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor \n' +
                                'incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,'}/>
            {BLOG_DATA.map(({title, publishDate, img, description}) => (
                isLeft = !isLeft,
                    console.log(isLeft),
                    <BlogComponent title={title} publishDate={publishDate} img={img} description={description}
                                   isLeft={isLeft}/>
            ))}
            <ButtonComponent title={'More view'} onClick={()=>(console.log)}/>
        </div>
    )
}

export default BlogTemplate;