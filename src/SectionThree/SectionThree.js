import React from 'react'

import SectionTitle from '../SectionTitle/SectionTitle'
import GoalBorder from '../img/GoalBorder.svg'
import GoalConnector from '../img/GoalConnector.svg'
import MainGoalConnector from '../img/MainGoalConnector.svg'
import { sections, roadmap } from '../texts'

import './SectionThree.scss'

const Goal = ({isMain, title, text}) => {
  return (<div className="goal-container flex" >    
    {isMain ? <MainGoalConnector className="main-goal-connector"/> : <GoalConnector className="goal-connector"/>}
    <div className="goal" >
      <GoalBorder className="goal-border"/>
      {isMain
        ? (<>
          <div className="text main" >
            <h4 className="pink" >{title}</h4>
          </div>
        </>)
        : (<>
          <div className="text" >
            <h5 className="pink" >{title}</h5>
            <span className="white">{text}</span>
          </div>
        </>)
      }
    </div>
  </div>)
}
const empty = () => <div className="goal-container empty flex">{'   '}</div>

const SectionThree = () => {
  const { phase1, phase2, phase3 } = roadmap
  
  // phase1 goalMain goal1 title text

  return (<div id={sections[2].replaceAll(' ', '')} className="section-three">
    <SectionTitle titleText={sections[2]} />
    <div className="roadmap flex row center">
      <div className="left flex col">
        <Goal isMain title={phase1.goalMain}/>
        <Goal title={phase1.goal2.title} text={phase1.goal2.text} />
        {empty()}
        <Goal title={phase2.goal1.title} text={phase2.goal1.text}/>
        <Goal title={phase1.goal2.title} text={phase2.goal2.text} />
        <Goal isMain title={phase3.goalMain}/>
        <Goal title={phase3.goal2.title} text={phase3.goal2.text} />
      </div>
      <div className="border" />
      <div className="right flex col">
        <Goal title={phase1.goal1.title} text={phase1.goal1.text}/>
        <Goal title={phase1.goal3.title} text={phase1.goal3.text}/>
        <Goal isMain title={phase2.goalMain}/>
        <Goal title={phase2.goal3.title} text={phase2.goal3.text}/>
        {empty()}
        <Goal title={phase3.goal1.title} text={phase3.goal1.text}/>
        <Goal title={phase3.goal3.title} text={phase3.goal3.text}/>
      </div>
    </div>
  </div>)
}

export default SectionThree