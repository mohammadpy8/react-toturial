import React, { useEffect, useState } from "react";
import toast, { Toaster } from 'react-hot-toast';
// import axios from "axios";

const GetApi = () => {

  const [allUsersData, setAllUsersData] = useState([]);

  const [dataBody, setDataBody] = useState("");
  const [dataTitle, setDataTitle] = useState("");
  const [dataUserID, setDataUserID] = useState("");

    const gettingApi = async () => {
      
    await fetch(`https://jsonplaceholder.typicode.com/posts`)
      .then((response) => response.json())
      .then((data) => {
        setAllUsersData(data);
      })
      .catch((err) => console.log(err));
    };
    
    const sendingApi = () => {

        const postBody = {
            title: dataTitle,
            body: dataBody,
            userId: dataUserID,
        };

        fetch(`https://jsonplaceholder.typicode.com/posts`, {
            method: "POST",
            body: JSON.stringify(postBody),
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then(res => res.json())
            .then(postSend => {
                console.log(postSend);
                setDataBody("");
                setDataTitle("");
                setDataUserID("");
                toast.success("اطلاعات با موفقیت ارسال شد");
            })
            .catch(err => {
                console.log(err);
                toast.error("اطلاعات ارسال نشد");
        })
    }

//     useEffect(() => {

//         sendingApi();

//   }, [dataBody]);

  console.log(allUsersData);

  return (
    <div>
      <button onClick={gettingApi}>getApi</button>
      <button onClick={sendingApi}>sendApi</button>
      <input
        type="text"
        value={dataBody}
        placeholder="body"
        onChange={(e) => setDataBody(e.target.value)}
      />
      <input
        type="text"
        value={dataTitle}
        placeholder="title"
        onChange={(e) => setDataTitle(e.target.value)}
      />
      <input
        type="text"
        value={dataUserID}
        placeholder="userID"
        onChange={(e) => setDataUserID(e.target.value)}
      />
      {allUsersData.length
        ? allUsersData.map((user) => <h1 key={user.id}>{user.title}</h1>)
              : null}
          
          <Toaster />
    </div>
  );
};

export default GetApi;
