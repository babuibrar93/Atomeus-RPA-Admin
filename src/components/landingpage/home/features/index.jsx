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
                <div className="grid-card">
                    <div className="heading">
                        <img src="/assets/images/home/features/features-icon.svg" alt="" />
                        <h4 className='card_title'>Accelerate growth</h4>
                    </div>
                    <p className="text-content">
                        SS&C Blue Prism intelligent automation solutions, powered by AI and machine learning, will help you deliver against strategic business goals, at speed, allowing you to remain agile in the face of an ever-changing socio-economic landscape.
                    </p>
                </div>
            </div>
        </Container>
    </FeaturesWrapper>
  )
}

export default Features