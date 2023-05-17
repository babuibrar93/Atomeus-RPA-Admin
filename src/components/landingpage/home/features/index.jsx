import React from 'react'
import { FeaturesWrapper } from './styles'
import { Container } from 'react-bootstrap'
import { featuresCards } from '../../../../constants/landingpage'


function Features() {
  return (
    <FeaturesWrapper>
        <Container>
            <h2 className='title1'>FEATURES</h2>
            <h3 className='title2'>Pellentesque tincidunt semper risus ut consectetu</h3>

            <div className="features-grid">

            {
                featuresCards.map((card) => (
                    <div className="grid-card" key={card.id}>
                        <div className="heading">
                            <img src={card.icon} alt="feature icon" />
                            <h4 className='card_title'>{card.heading}</h4>
                        </div>
                        <p className="text-content">{card.paragraph}</p>
                    </div>
                ))
            }

                
            </div>
        </Container>
    </FeaturesWrapper>
  )
}

export default Features