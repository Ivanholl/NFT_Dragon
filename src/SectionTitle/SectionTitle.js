import React from 'react'

import SeparatorLeft from '../img/SeparatorLeft.svg'
import SeparatorRight from '../img/SeparatorRight.svg'
import './SectionTitle.scss'

function SectionTitle({titleText}) {
  return (    
    <div className="flex row space-around">
      <img src={SeparatorLeft} />
      <div className="title-container">
        <h2 className="white">{titleText}</h2>
        <div className="title-with-dragon"/>
      </div>
      <img src={SeparatorRight} />
    </div>
  )
}

export default SectionTitle
