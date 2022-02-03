import React from 'react'

import SectionTitle from '../SectionTitle/SectionTitle'
// import Vector from '../img/Vector.svg'
// import Swirl from '../img/Swirl.svg'
// import R2d2 from '../img/R2d2.svg'
// import Planet from '../img/Planet.svg'
// import CardBorderLeft from '../img/CardBorderLeft.svg'
// import CardBorderRight from '../img/CardBorderRight.svg'
// import DescriptionBorderBottom from '../img/DescriptionBorderBottom.svg'
// import DescriptionBorderTop from '../img/DescriptionBorderTop.svg'

import { cardsTxt, sections } from '../texts'

import './SectionOne.scss'

const Card = (props) => {
  const {title, description} = props
  return (<div className="card flex row center">
    <div className="border-container">
      <img src="../img/CardBorderLeft.svg" />
    </div>
    <div className="card-content">
      <img src="../img/Vector.svg" className="polygon"/>

      <div className="svg flex center">{props.children}</div>
      <h3>{title}</h3>
      <div className="description">
        <img src="../img/DescriptionBorderTop.svg" />
        <div className="description-background">
          <p>{description}</p>
        </div>
        <img src="../img/DescriptionBorderBottom.svg" />
      </div>
    </div>
    <div className="border-container">
      <img src="../img/CardBorderRight.svg" />
    </div>
  </div>)
}

const SectionOne = () => {
  return (<div id={sections[0].replaceAll(' ', '')} className="section-one">
    <SectionTitle titleText={sections[0]} />
    <div className="cards-container flex row space-evenly">
      <Card title={cardsTxt?.cardOne?.title} description={cardsTxt?.cardOne?.description} >
        <img src="../img/Swirl.svg" />
      </Card>
      <Card title={cardsTxt?.cardTwo?.title} description={cardsTxt?.cardTwo?.description} >
        <img src="../img/R2d2.svg" />
      </Card>
      <Card title={cardsTxt?.cardThree?.title} description={cardsTxt?.cardThree?.description} >
        <img src="../img/Planet.svg" />      
      </Card>
    </div>
  </div>)
}

export default SectionOne
