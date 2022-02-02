import React from 'react'
import { Carousel } from '@trendyol-js/react-carousel'

// import ArrowLeft from '../img/ArrowLeft.svg'
// import ArrowRight from '../img/ArrowRight.svg'


import SectionTitle from '../SectionTitle/SectionTitle'
import { sections } from '../texts'

import './SectionTwo.scss'

const SectionTwo = () => {
  return (<div id={sections[1].replaceAll(' ', '')} className="section-two">
    <SectionTitle titleText={sections[1]} />
    <div className="carousel-container">
      <Carousel 
        show={4.2}
        swiping
        responsive
        rightArrow={<div className="arrow-right flex col center">
          <img src="../img/ArrowRight.svg" />
        </div>}
        leftArrow={<div className="arrow-left flex col center">
          <img src="../img/ArrowLeft.svg" />
        </div>}
      >
        <img src="/Dragon/0.png" />
        <img src="/Dragon/1.png" />
        <img src="/Dragon/2.png" />
        <img src="/Dragon/3.png" />
        <img src="/Dragon/4.png" />
        <img src="/Dragon/5.png" />
        <img src="/Dragon/6.png" />
      </Carousel>
    </div>
  </div>)
}

export default SectionTwo
