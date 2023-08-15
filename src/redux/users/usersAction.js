import axios from "axios";

const fetchUsersReq = () => {
    return {
        type: "FETCH_USERS_REQ"
    }
};

const fetchUsersSuccess = user => {
    return {
        type: "FETCH_USERS_SUCCESS",
        payload: user,
    }
}

const fetchUsersFailure = err => {
    return {
        type: "FETCH_USERS_FAIL",
        payload: err
    }
};

const fetchUsers = () => {
    return (dispatch) => {
        dispatch(fetchUsersReq);
        axios.get("https://jsonplaceholder.typicode.com/posts")
            .then(response => {
                const user = response.data;
                dispatch(fetchUsersSuccess(user))
            })
            .catch(err => {
                const msg = err.message;
                dispatch(fetchUsersFailure(msg))
            })
    }
};

export default fetchUsers;