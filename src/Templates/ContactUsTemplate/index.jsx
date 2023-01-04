import TitleComponent from "../../Components/TitleComponent";
import ButtonComponent from "../../Components/ButtonComponent";

const ContactUsTemplate = () => {


    const onContactUsClick = () => {
        //some action;
    };
    return (
        <div id={'contactUs'} >
            <TitleComponent title={'Contact Us'} description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor \n' +
                'incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,'} />
            <ul>
                <li>
                    <img src="addresss.svg" alt="phone"/>
                    <p>Nobinagar savar,Dhaka
                        Bangladesh</p>
                </li>

                <li>
                    <img src="phone.svg" alt="phone"/>
                    <p>+8801743331996
                        +8801928737807</p>
                </li>

                <li>
                    <img src="mail.svg" alt="email"/>
                    <p>quickmasud@gmail.com
                        quickmasud@yahoo.com</p>
                </li>
            </ul>
            <input type="text" placeholder={'your name'}/>
            <input type="text" placeholder={'your email'}/>
            <input type="text" placeholder={'your phone'}/>
            <textarea name="" id="" cols="30" rows="10" placeholder={'write message'}></textarea>
            <ButtonComponent onClick={()=>onContactUsClick}/>
        </div>
    )
}

export default ContactUsTemplate;