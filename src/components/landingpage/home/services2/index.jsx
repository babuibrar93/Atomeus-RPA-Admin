import React from 'react'
import { Services } from './styles'
import { Container } from 'react-bootstrap'

import { services2 } from '../../../../constants/landingpage'

function Services2() {
  return (
    <Services>
        <Container>  
            <div className="service_grid">
                <div className="text-content">
                    
                    <h2 className="title">Services</h2>
                    <h3 className="title2">Pellentesque tincidunt semper risus ut consectetu</h3>
                    <p className="text">Vestibulum consequat luctus magna. Praesent fringilla vestibulum congue. Cras id tempor magna, et ultricies metus.Duis nisi magna, faucibus at justo in, sollicitudin.</p>

                    <ul className='service-list'>

                        {
                            services2.map((service) => (
                                <li className="service-item" key={service.id}>
                                    <h3 className="heading">{service.heading}</h3>
                                    {service.paragraph && (
                                        <p className="info">{service.paragraph}</p>
                                    )}
                                </li>
                            ))
                        }

                    </ul>

                </div>
                <div className="image-animate">
                    <img loading='lazy' width="100%" src="/assets/images/home/services/robot.gif" alt="robot anim" />
                </div>
            </div>
        </Container>
    </Services>
  )
}

export default Services2