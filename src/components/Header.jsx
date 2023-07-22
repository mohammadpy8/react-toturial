import {FaUsers} from "react-icons/fa"
import Search from "./Search";
import "./header.css";

const Header = () => {
    return(
        <div>
            <div className="header-wrapper d-flex justify-content-between ">
                <span className="header-text">
                    <FaUsers size={30} className="header__icon"/>
                    <h3 className="header__text">لیست شماره تماس های ضروری</h3>
                </span>
                <Search/>
            </div>
        </div>
    )
}

export default Header; 