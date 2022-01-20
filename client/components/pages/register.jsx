import React, { useState } from "react";
import Axios from 'axios';
// import '../style/login.css';


const registerUser = () => { 
    //the two states which will store all usernames and passwords  (for registration)
    const [usernameReg, setUsernameReg] = useState('');
    const [passwordReg, setPasswordReg] = useState('');

    // create a function which makes a post request to the route /register
    const register = () => {
        //store the link on a variable

        Axios.post('http://localhost:3000/auth/create',
        {username: usernameReg,                             
         password: passwordReg,
        }).then((response) => {
            console.log(response);
            // redirect('/');
        });
       window.location.href = "http://localhost:8080";
    };

    return (

        <div className="registration">
        <h1>Signup</h1>
        <label>Username</label>
        <input type="text"
               onChange={(e) => {
                   //sets usernamereg in state to value at e.target.value (whatever was typed into the box and submitted)
                 setUsernameReg(e.target.value)
               }}
            />
        <label>Password</label>
        <input
         type= "text"
         onChange={(e) => {
            setPasswordReg(e.target.value)
          }}
        />
        <button onClick={register}> Register </button>
        </div>
    )

}

export default registerUser;