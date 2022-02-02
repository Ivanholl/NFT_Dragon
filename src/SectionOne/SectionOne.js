import React from 'react'

import SectionTitle from '../SectionTitle/SectionTitle'
import Vector from '../img/Vector.svg'
import Swirl from '../img/Swirl.svg'
import R2d2 from '../img/R2d2.svg'
import Planet from '../img/Planet.svg'
import CardBorderLeft from '../img/CardBorderLeft.svg'
import CardBorderRight from '../img/CardBorderRight.svg'
import DescriptionBorderBottom from '../img/DescriptionBorderBottom.svg'
import DescriptionBorderTop from '../img/DescriptionBorderTop.svg'

import { cardsTxt, sections } from '../texts'

import './SectionOne.scss'

const Card = (props) => {
  const {title, description} = props
  return (<div className="card flex row center">
    <div className="border-container">
      <img src={CardBorderLeft} />
    </div>
    <div className="card-content">
      <img src={Vector} className="polygon" />
      <div className="svg flex center">{props.children}</div>
      <h3>{title}</h3>
      <div className="description">
        <img src={DescriptionBorderTop} />
        <div className="description-background">
          <p>{description}</p>
        </div>
        <img src={DescriptionBorderBottom} />
      </div>
    </div>
    <div className="border-container">
      <img src={CardBorderRight} />
    </div>
  </div>)
}

const SectionOne = () => {
  return (<div id={sections[0].replaceAll(' ', '')} className="section-one">
    <SectionTitle titleText={sections[0]} />
    <div className=" flex row space-evenly">
      <Card title={cardsTxt?.cardOne?.title} description={cardsTxt?.cardOne?.description} >
        <img src={Swirl} />
      </Card>
      <Card title={cardsTxt?.cardTwo?.title} description={cardsTxt?.cardTwo?.description} >
        <img src={R2d2} />
      </Card>
      <Card title={cardsTxt?.cardThree?.title} description={cardsTxt?.cardThree?.description} >
        <img src={Planet} />      
      </Card>
    </div>
  </div>)
}

export default SectionOne
