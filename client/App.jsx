import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import List from './components/pages/List';
import SignUp from './components/pages/SignUp';
import Login from './components/pages/login'; 
//issue: when importing Register page, cannot find module error 
// import Register from './components/pages/register.jsx;'
import {useState} from 'react'
const [isLoggedIn, setIsLoggedIn] = useState(null);

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar isLoggedIn={isLoggedIn, setIsLoggedIn}/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/list' element={<List isLoggedIn={isLoggedIn, setIsLoggedIn}/>} />
          {/* add a path for login */}
          <Route path='/login' element={<Login isLoggedIn={isLoggedIn, setIsLoggedIn}/>} />
          {/* render the new register component on Sign-up path  */}
          <Route path='/sign-up' element={<SignUp isLoggedIn={isLoggedIn, setIsLoggedIn}/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;