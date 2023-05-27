import React from 'react'
import { ContactInfoWrapper } from './style'
import { contactDetail } from '../../../../../constants/landingpage'

function ContactInfo() {
  return (
    <ContactInfoWrapper>
        {contactDetail.map((contact) => (
        <div className="item" key={contact.id}>
          <img width="32px" src={contact.icon} alt="contact icon" />
          <h2 className="title">{contact.title}</h2>
          <p className="info">{contact.info}</p>
        </div>
      ))}
    </ContactInfoWrapper>
  )
}

export default ContactInfo