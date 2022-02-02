import React from 'react'

// import SeparatorLeft from '../img/SeparatorLeft.svg'
// import SeparatorRight from '../img/SeparatorRight.svg'
import './SectionTitle.scss'

function SectionTitle({titleText}) {
  return (    
    <div className="title-container flex row space-around">
      <img src="../img/SeparatorLeft.svg" />
      <div className="title">
        <h2 className="white">{titleText}</h2>
        <div className="title-with-dragon"/>
      </div>
      <img src="../img/SeparatorRight.svg" />
    </div>
  )
}

export default SectionTitle
