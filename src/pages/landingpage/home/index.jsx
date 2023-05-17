import React from 'react';
import { HomePage } from './styles';

import Header from '../../../common/landingpage/components/header';
import Hero from '../../../components/landingpage/home/hero';
import MarqueeSlider from '../../../components/landingpage/home/marqueeslider';
import Features from '../../../components/landingpage/home/features';

function Home() {
  return (
    <HomePage>
      <Header />
      <Hero />
      <MarqueeSlider/>
      <Features/>
    </HomePage>
  )
}

export default Home