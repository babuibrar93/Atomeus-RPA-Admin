import React, { useState, useEffect } from 'react'
import {DesktopMenu} from './styles'
import {Link} from "react-router-dom";
import {navLinks} from '../../../../constants/landingpage';

import Container from 'react-bootstrap/Container';

export default function DesktopNav() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [hamburgerClick, setHamburgerClick] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      setIsScrolled(scrollTop > 0);
    };

    window.addEventListener('scroll', handleScroll);

    // cleanup function is responsible for removing the event listener when the component is unmounted or updated
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <DesktopMenu className={isScrolled ? 'scrolled' : ''}>
        <Container>
          <header className="header">
            
            <Link to='/'>
              <img height="100%" width="" src="/assets/images/header/header-logo.svg" alt="Site Logo" />
            </Link>

            <ul className='nav'>
              {navLinks.map((Link) => (
                <li 
                key={Link.id}
                className="nav-item"
                >
                  <a className="nav-link" href={`#${Link.id}`}>{Link.title}</a>
                </li>
              ))}
            </ul>

            <div className="auth_icons">
                <span className='separator'></span>
                
                <div className="language_item">
                    <img height="24px" src="/assets/images/header/lang.svg" alt="lang sign" />
                    <span>EN</span>
                </div>

                <Link to="#" className="language_item">
                    <img height="24px" src="/assets/images/header/envelop.svg" alt="lang sign" />
                    <span>Contact us</span>
                </Link>

                <Link to="/dashboard" className="language_item">
                    <img height="24px" src="/assets/images/header/user.svg" alt="lang sign" />
                    <span>Sign in</span>
                </Link>
            </div>

            <div className={`hamburger ${hamburgerClick ? 'open':''}`} onClick={() => setHamburgerClick(!hamburgerClick)}>
              <span></span>
              <span></span>
              <span></span>
            </div>

          </header>
        </Container>
    </DesktopMenu>
  )
}
