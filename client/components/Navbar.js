import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { LoginButton } from './LoginButton';
import { Link } from 'react-router-dom';
import './styles/Navbar.css';

function Navbar({isLoggedIn}, {setIsLoggedIn}) {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  let investigationsTag = false;
  console.log('hhhhhhhheeeeeerrrreeee',isLoggedIn);

  if (isLoggedIn) {
    investigationsTag = 
      <li className='nav-item'>
        <Link
          to='/list'
          className='nav-links'
          onClick={closeMobileMenu}
        >
          Investigations
        </Link>
      </li>
  }
  
  let buttons = 
    <>{button && <Button buttonStyle='btn--outline'>SIGN UP</Button>
    }

      {button && <LoginButton buttonStyle='btn--outline'>LOGIN</LoginButton>}
    </>

  if (isLoggedIn) {
    buttons = <></>
  }

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            MOST WANTED
            <i className='fab fa-typo' />
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>

            <li>{investigationsTag}</li>

            <li>
              <Link
                to='/sign-up'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                Sign Up
              </Link>
            </li>

            <li>
              <Link
                to='/login'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                Login
              </Link>
            </li>
          </ul>
          <>{buttons}</>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
