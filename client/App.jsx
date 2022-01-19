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

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/list' element={<List />} />
          {/* add a path for login */}
          <Route path='/login' element={<Login />} />
          {/* render the new register component on Sign-up path  */}
          <Route path='/sign-up' element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;