import React, { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'

export const Footer = () => {
  let {theme} = useContext(ThemeContext);
  return (
    <div className={theme=="light"?"footer lightfooter":"footer darkfooter"}>
      <h1>Footer</h1>
    </div>
  )
}
