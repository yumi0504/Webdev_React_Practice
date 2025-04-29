import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { Button } from './Button';

function Navbar() {
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
    showButton()
  }, []);

  window.addEventListener('resize', showButton);
  
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            <i className="fas fa-paw" />
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/about' className='nav-links' onClick={closeMobileMenu}>
                ABOUT
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/profile' className='nav-links' onClick={closeMobileMenu}>
                PROFILE
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/story' className='nav-links' onClick={closeMobileMenu}>
                STORY
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/projects' className='nav-links-mobile' onClick={closeMobileMenu}>
                PROJECTS
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle='btn--outline'>PROJECTS</Button>}


        </div>
      </nav>
    
    </>
  )
}

export default Navbar
