import React from 'react';
import { data } from '../services/data';
import "./show.css";

const ShowContacts = () => {
    return (
        <div className='show'>
            {
                data.map((contact, index) => {

                    const { name, phone, email, location, rotbeh, image } = contact;

                    return (
                        <div key={index} className='cont'>
                            <div className='name'>
                                <img src={image} />
                                <h2>{name}</h2>
                            </div>
                            <h2>{phone}</h2>
                            <h2>{email}</h2>
                            <h2>{location}</h2>
                            <h2>{rotbeh}</h2>
                        </div>
                    )
                })
            }
        </div>
    );
};

export default ShowContacts;