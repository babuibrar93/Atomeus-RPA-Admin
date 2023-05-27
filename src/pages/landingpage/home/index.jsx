import React from 'react';
import { HomePage } from './styles';

import Header from '../../../common/landingpage/components/header';
import Hero from '../../../components/landing-page/home/hero';
import MarqueeSlider from '../../../components/landing-page/home/marquee-slider';
import Features from '../../../components/landing-page/home/features';
import Services from '../../../components/landing-page/home/services';
import Services2 from '../../../components/landing-page/home/services2';
import Blogs from '../../../components/landing-page/home/blogs';
import Contact from '../../../components/landing-page/home/contact';
import Footer from '../../../common/landingpage/components/footer';


function Home() {
  return (
    <HomePage>
      <Header />
      <Hero />
      <MarqueeSlider/>
      <Features/>
      <Services/>
      <Services2/>
      <Blogs/>
      <Contact/>
      <Footer/>
    </HomePage>
  )
}

export default Home