import React from 'react'
import { LogoContainer } from './LogoContainer'
import Styles from "./Card.module.css"
import { Casestudy } from './Casestudy'
import { Heading } from './Heading'
export const Card = ({info}) => {
  return (
    <div className={Styles.card}>
        <LogoContainer logo={info.logo} date={info.date} color={info.color}/>
        <Casestudy color={info.color}/>
        <Heading heading={info.heading} color={info.color}/>
    </div>
  )
}
