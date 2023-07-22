import React from 'react';
import "./filters.css";

const Fliters = () => {

    return (
        <div className='container'>
            <div className='filters'>
                <div className='entries'>
                    <h2 className='text'>نمایش</h2>
                    <select className='number-select' id='test'>
                        <option value="10">10</option>
                        <option value="20">20</option>
                        <option value="30">30</option>
                    </select>
                </div>
                <div className='search-form'>
                    <div className='sec1'>
                        <select className='vahed'>
                            <option value="واحد">واحد</option>
                        </select>
                    </div>
                    <div className='sec2'>
                        <select className='bakhsh'>
                            <option value="بخش">بخش</option>
                        </select>
                    </div>
                    <div className='sec3'>
                        <button className='search'>جستجو کن</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Fliters;