import React from 'react'

import Header from '../Header/Header'
import { splashText, sections, openseaLinkOne } from '../texts'
import './Splash.scss'

function Splash() {
  const handleClick = (event) => {
    event.preventDefault()
    const target = event.target.nodeName === 'a' ? event.target : event.target.parentNode
    const selector = decodeURI(target?.hash).replaceAll(' ', '')
    const el = document.querySelector(selector)
    el?.scrollIntoView({
      behavior: 'smooth'
    })
  }
  const arrowDown = () => <a className="arrow-down animated-bounce" href={`#${sections[0]}`}  onClick={(e) => handleClick(e)}><img className="" src="../img/ArrowDown.svg" /></a>

  return (
    <div id="splash" className="splash flex col space-around">
      <Header />
      <div className="title flex row center">
        <div className="flex col center">
          <h1 className="pink">{splashText?.title1}</h1>
        </div>
        <div className="flex col center">
          <h1 className="white">{splashText?.title2}</h1>
        </div>
      </div>
      <div className="flex row center">
        <a href={openseaLinkOne} className="button white">{splashText?.button}</a>
      </div>
      {arrowDown()}
    </div>
  )
}

export default Splash
