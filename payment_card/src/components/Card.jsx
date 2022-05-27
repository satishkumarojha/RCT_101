import React from 'react'
import { LogoContainer } from './LogoContainer'
import Styles from "./Card.module.css"
export const Card = ({info}) => {
  return (
    <div className={Styles.card}>
        <LogoContainer logo={info.logo} date={info.date} color={info.color}/>
    </div>
  )
}
