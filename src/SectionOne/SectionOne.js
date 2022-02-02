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
      <CardBorderLeft />
    </div>
    <div className="card-content">
      <Vector className="polygon"/>
      <div className="svg flex center">{props.children}</div>
      <h3>{title}</h3>
      <div className="description">
        <DescriptionBorderTop />
        <div className="description-background">
          <p>{description}</p>
        </div>
        <DescriptionBorderBottom />
      </div>
    </div>
    <div className="border-container">
      <CardBorderRight />
    </div>
  </div>)
}

const SectionOne = () => {
  return (<div id={sections[0].replaceAll(' ', '')} className="section-one">
    <SectionTitle titleText={sections[0]} />
    <div className=" flex row space-evenly">
      <Card title={cardsTxt?.cardOne?.title} description={cardsTxt?.cardOne?.description} >
        <Swirl />
      </Card>
      <Card title={cardsTxt?.cardTwo?.title} description={cardsTxt?.cardTwo?.description} >
        <R2d2 />
      </Card>
      <Card title={cardsTxt?.cardThree?.title} description={cardsTxt?.cardThree?.description} >
        <Planet />      
      </Card>
    </div>
  </div>)
}

export default SectionOne
