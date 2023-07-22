import React from 'react';
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import "./page.css";

const Pagination = () => {
    return (
        <div className='page'>
            <div className='page1'>
                <div className='right'>
                    <div className='fa1'><FaArrowRight /></div>

                </div>
                <div className='click'>
                    <button>1</button>
                    <button className='button2'>2</button>
                    <button>3</button>
                </div>
                <div className='left'>

                    <div className='fa2'><FaArrowLeft /></div>
                </div>
            </div>
        </div>
    );
};

export default Pagination;