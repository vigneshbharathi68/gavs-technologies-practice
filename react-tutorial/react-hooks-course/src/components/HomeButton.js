import { FaHome } from 'react-icons/fa';

const HomeButton = () => {
    return (
        <button className="home-btn">
            <FaHome className="fa-home" style={iconStyle} />
        </button>
    )
}

const iconStyle = {
    cursor: "pointer",
    "font-size": "2rem"
}

export default HomeButton;
