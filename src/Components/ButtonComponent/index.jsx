import './style.css';

const ButtonComponent = ({title, onClick}) => {
    return (
        <button className={'btnStyle'} onClick={onClick()}>
            {title}
        </button>
    );
}

export default ButtonComponent;