import React, { useEffect, useRef } from 'react'

import './Burger.scss'

const Burger = ({anchors}) => {
  const menuBg = useRef(null)
  const menuBurger = useRef(null)
  const menuItems = useRef(null)

  const openMenu = () => {
    menuBg.current.classList.toggle('fs')
    menuBurger.current.classList.toggle('fs')
    menuItems.current.classList.toggle('fs')

    if (menuBurger.current.innerText === '☰') {
      menuBurger.current.innerText = '✕'
    } else {
      menuBurger.current.innerText = '☰'
    }
  }

  useEffect(() => {
    menuBurger.current.addEventListener('click', openMenu, false)
  }, [menuBurger])

  return (<div className="burger-container">
    <div className="menu-bg" ref={menuBg}></div>
    <div className="menu-burger" ref={menuBurger}>☰</div>
    <div className="menu-items flex col" ref={menuItems}>
      {anchors}
    </div>
  </div>)
}

export default Burger
