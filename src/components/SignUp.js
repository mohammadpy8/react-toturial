import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import validate from "../validators/Validation";

const SignUp = () => {

  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    isAccepted: false,
  });
    
    const [errors, setErrors] = useState({});
    
    
    useEffect(() => {

        setErrors(validate(data));

    }, [data]);

   const changeHandler = (event) => {
      
        if (event.target.name === "isAccepted") {

            setData({ ...data, [event.target.name]: event.target.checked });

        } else {

            setData({ ...data, [event.target.name]: event.target.value });
        }

  };

  return (
    <div>
      <form>
        <h2>Sign Up</h2>
        <div>
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={data.name}
            onChange={changeHandler}
          />
        </div>
        <div>
          <label>email</label>
          <input
            type="text"
            name="email"
            value={data.email}
            onChange={changeHandler}
          />
        </div>
        <div>
          <label>password</label>
          <input
            type="password"
            name="password"
            value={data.password}
            onChange={changeHandler}
          />
        </div>
        <div>
          <label>confirmPassword</label>
          <input
            type="password"
            name="confirmPassword"
            value={data.confirmPassword}
            onChange={changeHandler}
          />
        </div>
        <div>
          <label>I accepted privcy policy</label>
          <input
            type="checkbox"
            name="isAccepted"
            value={data.isAccepted}
            onChange={changeHandler}
          />
        </div>
        <div>
          <Link to="/login">Login</Link>
          <button type="submit">Sign Up</button>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
