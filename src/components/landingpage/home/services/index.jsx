import React from 'react'
import { ServicesWrapper } from './styles'
import { Container } from 'react-bootstrap'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { services } from '../../../../constants/landingpage';

function Services() {
  return (
    <ServicesWrapper>
        <Container>
            
            <Row className='gx-5 gy-4 align-items-start'>
                <Col lg={6}>
                    <div className='main-image'>
                        <img src="assets/images/home/services/services-main.png" alt="services image" />
                    </div>
                </Col>
                <Col lg={6}>
                    <h2 className="title">Services</h2>
                    <h3 className="title2">Pellentesque tincidunt per risus ut consectetur</h3>

                    <div className="services-grid">
                        {
                            services.map((service) => (
                                <div className="service-card" key={service.id}>
                                    <img width="50px" src={service.icon} alt="service icon" />
                                    <p className="para">{service.heading}</p>
                                </div>
                            ))
                        }
                        
                    </div>
                </Col>
            </Row>

        </Container>
    </ServicesWrapper>
  )
}

export default Services