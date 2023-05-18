import React from 'react'
import { ContactWrapper } from './style'
import { Container } from 'react-bootstrap'
import ContactInfo from './contactinfo'
import ContactForm from './contactform'

function Contact() {
  return (
    <ContactWrapper>
        <Container>
            <div className="contact-us">
                <ContactInfo/>
                <ContactForm/>
            </div>
        </Container>
    </ContactWrapper>
  )
}

export default Contact