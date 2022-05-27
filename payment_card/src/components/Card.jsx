import React from 'react'
import { LogoContainer } from './LogoContainer'
import Styles from "./Card.module.css"
export const Card = () => {
  return (
    <div className={Styles.card}>
        <LogoContainer/>
    </div>
  )
}
