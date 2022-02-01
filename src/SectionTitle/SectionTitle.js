import React from 'react'

import { ReactComponent as SeparatorLeft } from '../img/SeparatorLeft.svg'
import { ReactComponent as SeparatorRight } from '../img/SeparatorRight.svg'
import './SectionTitle.scss'

function SectionTitle({titleText}) {
  return (    
    <div className="flex row space-around">
      <SeparatorLeft />
      <div className="title-container">
        <h2 className="white">{titleText}</h2>
        <div className="title-with-dragon"/>
      </div>
      <SeparatorRight />
    </div>
  )
}

export default SectionTitle
