import React, {useEffect} from 'react';
import fetchUsers from '../redux/users/usersAction';

import { useSelector, useDispatch } from 'react-redux';

const Users = () => {

    const dispatch = useDispatch();
    const userData = useSelector(state => state.user);

    useEffect(() => {

        dispatch(fetchUsers());

    }, [])

    return (
        <div>
            {
                userData.loading ? <h2>Loading</h2> : 
                    userData.error ? <p>{userData.error}</p> :
                        userData.users.map(user => {
                            const { id, title } = user;
                            return (
                                <h1 key={id}>{title}</h1>
                            )
                        })
            }
        </div>
    );
};

export default Users;