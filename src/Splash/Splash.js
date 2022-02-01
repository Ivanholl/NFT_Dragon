import React from 'react'

import { splashText } from '../texts'
import './Splash.scss'

function Splash() {
  return (
    <div id="splash" className="splash flex col space-around">
      <div className="title flex row center">
        <div className="flex col center">
          <h1 className="pink">{splashText?.title1}</h1>
        </div>
        <div className="flex col center">
          <h1 className="white">{splashText?.title2}</h1>
        </div>
      </div>
      <div className="flex row center">
        <button className="button white">{splashText?.button}</button>
      </div>
    </div>
  )
}

export default Splash
