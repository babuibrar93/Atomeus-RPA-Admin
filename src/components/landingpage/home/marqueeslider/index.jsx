import React from 'react'
import { MarqueeWrapper } from './styles'
import { marqueeSlides } from '../../../../constants/landingpage'
import { Container } from 'react-bootstrap'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

function MarqueeSlider() {
  return (
    <MarqueeWrapper>
        <Container>
            
            <Swiper
                spaceBetween={50}
                slidesPerView={3}
                breakpoints={{
                    320: {
                      slidesPerView: 1,
                      spaceBetween: 20,
                    },
                    520: {
                      slidesPerView: 2,
                      spaceBetween: 40,
                    },
                    768: {
                      slidesPerView: 3,
                      spaceBetween: 50,
                    },
                  }}
                >
                {
                    marqueeSlides.map((slide) => (
                        <SwiperSlide key={slide.id}>
                            <img src={slide.image} alt="slide image" />
                        </SwiperSlide>
                    ))
                }
            </Swiper>

        </Container>
    </MarqueeWrapper>
  )
}

export default MarqueeSlider