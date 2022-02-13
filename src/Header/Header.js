import React from 'react'

import Burger from '../Burger/Burger'
import useIsMobile from '../hooks/useIsMobile'
import { sections } from '../texts'

import './Header.scss'

function Header() {
  const isMobile = useIsMobile()

  const handleClick = (event) => {
    event.preventDefault()
    const selector = decodeURI(event.target.hash).replaceAll(' ', '')
    const el = document.querySelector(selector)
    el?.scrollIntoView({
      behavior: 'smooth'
    })
  }
  const renderMenu = () => {
    const anchors = sections.map((section) => <a className="link white" key={section} href={`#${section}`} onClick={(e) => handleClick(e)}>{section}</a>)
    if (isMobile) return <Burger anchors={anchors} handleClick={handleClick}/>
      
    return (<div className="links flex row space-around flex-end">
      {anchors}
    </div>)
  }

  return (
    <div className="header flex row space-between">
      <a className="link" href="/">
        <img src="../img/Logo.svg" />
      </a>
      {renderMenu()}
    </div>
  )
}

export default Header
