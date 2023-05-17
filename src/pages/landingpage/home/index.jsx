import React from 'react';
import { HomePage } from './styles';

import Header from '../../../common/landingpage/components/header';
import Hero from '../../../components/landingpage/home/hero';
import MarqueeSlider from '../../../components/landingpage/home/marqueeslider';
import Features from '../../../components/landingpage/home/features';
import Services from '../../../components/landingpage/home/services';

function Home() {
  return (
    <HomePage>
      <Header />
      <Hero />
      <MarqueeSlider/>
      <Features/>
      <Services/>
    </HomePage>
  )
}

export default Home