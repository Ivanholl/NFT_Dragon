import React from 'react'

// import Logo from '../img/Logo.svg'
import { sections } from '../texts'

import './Header.scss'

function Header() {
  const handleClick = (event) => {
    event.preventDefault()
    const selector = decodeURI(event.target.hash).replaceAll(' ', '')
    const el = document.querySelector(selector)
    el?.scrollIntoView({
      behavior: 'smooth'
    })
  }
  return (
    <div className="header flex row space-between">
      <a className="link" href="/">
        <img src="../img/Logo.svg" />
      </a>
      <div className="links flex row space-around flex-end">
        {sections.map((section) => <a className="link white" key={section} href={`#${section}`} onClick={(e) => handleClick(e)}>{section}</a>)}
      </div>
    </div>
  )
}

export default Header
