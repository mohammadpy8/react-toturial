import React, { useEffect, useReducer } from 'react';
import axios from 'axios';

const initialState = {
    isLoading: true,
    postData: [],
    error: "",
};

const managmentApiReducer = (state, action) => {

    switch (action.type) {
        case "SUCCESS_GETTING_API":
            return {
                isLoading: false,
                postData: action.payload,
                error: "",
            }
        case "FAILED_GETTING_API":
            return {
                isLoading: true,
                postData: [],
                error: `Error => ${action.payload}`,
            }
        default:
            return state;
    }
};

const GetApiWithReducer = () => {

    const [managment, dispatch] = useReducer(managmentApiReducer, initialState);

    useEffect(() => {

        axios.get("https://jsonplaceholder.typicodel.com/posts")
            .then(response => {
                dispatch({ type: "SUCCESS_GETTING_API", payload: response.data });
            })
            .catch(err => {
                dispatch({ type: "FAILED_GETTING_API", payload: err });
            });
    }, []);

    return (
        <div>
            <div>
                {
                    managment.isLoading ? null :
                        managment.postData.map(post => {
                            const { id, title, body } = post;
                            return (
                                <h1 key={id}>{title}</h1>
                            )
                        })
                }
                {managment.error && <h1>{managment.error}</h1>}
            </div>
        </div>
    );
};

export default GetApiWithReducer;