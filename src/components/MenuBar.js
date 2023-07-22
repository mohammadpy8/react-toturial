import React from 'react';
import { FiUsers } from "react-icons/fi";
import { MdEmail , MdSubtitles, MdOutlineLocationOn} from "react-icons/md";
import { BsFillTelephoneOutboundFill } from "react-icons/bs";
import "./menuBar.css";

const MenuBar = () => {
    return (
        <div className='container'>
            <div className='menu'>
                <div className='se1'>
                    <FiUsers size={18} />
                    <h3>نام و نام خانوادگی</h3>
                </div>
                <div className='se2'>
                    <BsFillTelephoneOutboundFill size={15}/>
                    <h3>شماره تلفن</h3>
                </div>
                <div className='se3'>
                    <MdEmail size={20}/>
                    <h3>ایمیل</h3>
                </div>
                <div className='se4'>
                    <MdOutlineLocationOn size={21}/>
                    <h3>اتاق استاد</h3>
                </div>
                <div className='se5'>
                    <MdSubtitles size={21}/>
                    <h3>شرح وظیفه</h3>
                </div>
            </div>
        </div>
    );
};

export default MenuBar;