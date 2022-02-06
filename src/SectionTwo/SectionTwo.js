import React, { useRef } from 'react'
import { Slide } from 'react-slideshow-image'

import SectionTitle from '../SectionTitle/SectionTitle'
import { sections, slideImages } from '../texts'
import './SectionTwo.scss'

function vw(v) {
  const w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0)
  return (v * w) / 100
}

const SectionTwo = () => {
  const winWidth = window.screen.availWidth
  const step = winWidth > 1023 ? vw(18) : 250
  const numOfImg = winWidth / step
  const sliderRef = useRef()
  console.log(numOfImg)

  const sliderProperties = {
    duration: 3000,
    autoplay: false,
    transitionDuration: 500,
    pauseOnHover: true,
    arrows: true,
    infinite: true,
    easing: 'ease',
    slidesToShow: Math.floor(numOfImg),
    defaultIndex: Math.floor(numOfImg),
    prevArrow: (<div className="arrow-left flex col center"><img src="../img/ArrowLeft.svg" /></div>),
    nextArrow: (<div className="arrow-right flex col center"><img src="../img/ArrowRight.svg" /></div>),
    // indicators: (i) => <div className="indicator">{i + 1}</div>,
  }

  return (<div id={sections[1].replaceAll(' ', '')} className="section-two">
    <SectionTitle titleText={sections[1]} />
    <div className="carousel-container">
      <Slide ref={sliderRef} {...sliderProperties}>
        {slideImages.map((slideImage, index) => (
          <div className="each-slide" key={index}>
            <div style={{'backgroundImage': `url(${slideImage?.url})`}}>
              <span>{slideImage?.caption}</span>
            </div>
          </div>
        ))}
      </Slide>
    </div>
  </div>)
}

export default SectionTwo
