import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import List from './components/pages/List';
import SignUp from './components/pages/SignUp';
import UserLogin from './components/pages/login'; 
//issue: when importing Register page, cannot find module error 
// import Register from './components/pages/register.jsx;'
import {useState} from 'react'

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const handleLoginState = () => {
    isLoggedIn === false ? setIsLoggedIn(true) : setIsLoggedIn(false)
  }

  return (
    <>
      <BrowserRouter>
        <Navbar isLoggedIn={isLoggedIn} handleLoginState={handleLoginState}/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/list' element={<List isLoggedIn={isLoggedIn} handleLoginState={handleLoginState}/>} />
          {/* add a path for login */}
          <Route path='/login' element={<UserLogin isLoggedIn={isLoggedIn} handleLoginState={handleLoginState}/>} />
          {/* render the new register component on Sign-up path  */}
          <Route path='/sign-up' element={<SignUp isLoggedIn={isLoggedIn} handleLoginState={handleLoginState}/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;