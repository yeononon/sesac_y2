// props.childern
import './Button.css';
const Button = () => {
    return (
        <>
            <a href={PropTypes.link}>
                <button>{PropTypes.children}</button>
            </a>
        </>
    );
};

export default Button;
