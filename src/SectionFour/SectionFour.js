import React from 'react'

import SectionTitle from '../SectionTitle/SectionTitle'
import { sections, openseaBtnTxt } from '../texts'
import { ReactComponent as Discord } from '../img/Discord.svg'
import { ReactComponent as Tweeter } from '../img/Tweeter.svg'

import './SectionFour.scss'

const SectionFour = () => {
  return (<div id={sections[3].replaceAll(' ', '')} className="section-four">
    <SectionTitle titleText={sections[3]} />
    <div className="flex row center">
      <Discord />
      <Tweeter />
    </div>
    <div className="flex row center">
      <a className="button white">{openseaBtnTxt}</a>
    </div>
  </div>)
}

export default SectionFour
