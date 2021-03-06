import React from 'react'

import SectionTitle from '../SectionTitle/SectionTitle'
import Header from '../Header/Header'
// import ArrowUp from '../img/ArrowUp.svg'
import { footerTxt } from '../texts'

import './Footer.scss'

const Footer = () => {
  const handleClick = (event) => {
    event.preventDefault()
    const target = event.target.nodeName === 'a' ? event.target : event.target.parentNode
    const selector = decodeURI(target?.hash).replaceAll(' ', '')
    const el = document.querySelector(selector)
    el?.scrollIntoView({
      behavior: 'smooth'
    })
  }

  const arrowUp = () => <a href="#splash" onClick={(e) => handleClick(e)}><img className="animated-bounce"  src="../img/ArrowUp.svg" /></a>

  return (<div className="footer">
    <SectionTitle titleText={arrowUp()} />
    <Header />
    <p className="white">{footerTxt}</p>
  </div>)
}

export default Footer
