import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { fetchUsers } from '../features/users/usersSlice';

const UsersExtra = () => {

    const dispatch = useDispatch();
    const users = useSelector(state => state.users);

    console.log(users);

    useEffect(() => {

        dispatch(fetchUsers());

    }, []);

    return (
        <div>
            <h2>users</h2>
            {
                users.loading ? <h3>loading</h3> : null
            }
            {
                users.users.length ? users.users.map(user => {
                    const { name, id } = user;
                    return (
                        <p key={id}>{name}</p>
                    )
                }) : null 
            }
        </div>
    );
};

export default UsersExtra;