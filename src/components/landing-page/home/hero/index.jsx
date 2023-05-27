import React from 'react'
import {HeroSection} from './styles'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Hero() {
  return (
    <HeroSection>
      <Container>
        <div className="content">
          <div className="text-content">
            <h1 className="heading"><span>Automating</span> Tech Solutions</h1>
            <p className="text">Lorem ipsum dolor sit amet consectetur. Venenatis 
            scelerisque phasellus est nunc. Odio in mauris arcu
            malesuada maecenas. Id vitae feugiat enim id ut.</p>
            <Link to='#' className='download_btn'>Download Now</Link>
          </div>
          <div className="main-image"></div>
        </div>
      </Container>
    </HeroSection>
  )
}

export default Hero