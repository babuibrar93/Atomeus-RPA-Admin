import React from 'react'
import { FooterSection } from './styles'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <FooterSection>
      <Container>
        <div className="footer">
          <Link to="/">
            <img height="80px" src="/assets/images/footer/footer-logo.png" alt="footer logo" />
          </Link>
          
          <p className="privacy">Privacy Policy  /   Personal Information  /  Terms of Service</p>

          <div className="social-icons">
            <Link to="www.facebook.com">
              <img height="32px" width="32px" src="/assets/images/footer/facebook.svg" alt="facebook icon" />
            </Link>

            <Link to="www.skype.com">
              <img height="32px" width="32px" src="/assets/images/footer/skype.svg" alt="skype icon" />
            </Link>

            <Link to="www.linkedin.com">
              <img height="32px" width="32px" src="/assets/images/footer/linkedin.svg" alt="linkedin icon" />
            </Link>
          </div>
        </div>
      </Container>
    </FooterSection>
  )
}

export default Footer