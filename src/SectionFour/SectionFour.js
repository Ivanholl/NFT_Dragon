import React from 'react'

import SectionTitle from '../SectionTitle/SectionTitle'
import { sections, openseaBtnTxt, openseaLinkTwo } from '../texts'
// import Discord from '../img/Discord.svg'
// import Tweeter from '../img/Tweeter.svg'

import './SectionFour.scss'

const SectionFour = () => {
  return (<div id={sections[3].replaceAll(' ', '')} className="section-four">
    <SectionTitle titleText={sections[3]} />
    <div className="flex row center">
      {/* <Discord /> */}
      {/* <Tweeter /> */}
      <a href="https://discord.gg/Yu8wVr4hWm" target="_blank" rel="noreferrer"><img src="../img/Discord.svg" /></a>
      <a href="https://twitter.com/dragon_eth" target="_blank" rel="noreferrer"><img src="../img/Tweeter.svg" /></a> 
    </div>
    <div className="flex row center">
      <a href={openseaLinkTwo} className="button white">{openseaBtnTxt}</a>
    </div>
  </div>)
}

export default SectionFour
