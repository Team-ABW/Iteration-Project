import React, { useState } from "react";
import Axios from 'axios';

const userLogin = () => {
    //create two separate states for the login
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    //create a state for the login status
    const [loginStatus, setLoginStatus] = useState('');

    const login = () => {
        Axios.post('http://localhost:3000/auth/verify',
        {username: username,
         password: password,
        }).then((response) => {
            console.log(response);
            if(response.data.rows.length === 0) {
                console.log("Incorrect username/password");
                //when there is no user response should show "Wrong username/password combination" (check server.js)
                setLoginStatus("Incorrect Username/Password");
            } else {
                //if the user is present in the db, set LoginStatus 
                setLoginStatus("Login Successful");
                window.location.href = "http://localhost:8080";
                console.log(loginStatus);
            }

        });
    }

    return (
    
    <div>
    <div className="login">
        <h1>Login</h1>
        <input type="text" placeholder="Username..."
        onChange={(e) => {
            //sets usernamereg in state to value at e.target.value (whatever was typed into the box and submitted)
          setUsername(e.target.value)
        }}
        />
        <input type="password" placeholder="Password..."
        onChange={(e) => {
          setPassword(e.target.value)
        }}
        />
        <button onClick={login}>Login</button>
    </div>
    <h1>{loginStatus}</h1>
    </div>
    )
}

export default userLogin; 