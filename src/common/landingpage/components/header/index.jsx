import React from 'react'
import {HeaderSection} from './styles'
import {Link} from "react-router-dom";
import {navLinks} from '../../../../constants/landingpage';

import Container from 'react-bootstrap/Container';

export default function Header() {
  return (
    <HeaderSection>
        <Container>
          <header className="header">
            <Link to='/'>
              <img height="80px" width="" src="/assets/images/header/header-logo.svg" alt="Site Logo" />
            </Link>

            <nav className='nav'>
              {navLinks.map((Link) => (
                <li 
                key={Link.id}
                className="nav-item"
                >
                  <a className="nav-link" href={`#${Link.id}`}>{Link.title}</a>
                </li>
              ))}
            </nav>

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

                <Link to="#" className="language_item">
                    <img height="24px" src="/assets/images/header/user.svg" alt="lang sign" />
                    <span>Sign in</span>
                </Link>
            </div>

            <div className="hamburger">
              <span></span>
              <span></span>
              <span></span>
            </div>

          </header>
        </Container>
    </HeaderSection>
  )
}
