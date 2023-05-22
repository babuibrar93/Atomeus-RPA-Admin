import React from 'react';
import { HomePage } from './styles';

import Header from '../../../common/landingpage/components/header';
import Hero from '../../../components/landingpage/home/hero';
import MarqueeSlider from '../../../components/landingpage/home/marqueeslider';
import Features from '../../../components/landingpage/home/features';
import Services from '../../../components/landingpage/home/services';
import Services2 from '../../../components/landingpage/home/services2';
import Blogs from '../../../components/landingpage/home/blogs';
import Contact from '../../../components/landingpage/home/contact';
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