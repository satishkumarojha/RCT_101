import React, { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'
export const Body = () => {
  let{theme} = useContext(ThemeContext)
  return (
    <div className={theme=="light"?"body lightbody":"body darkbody"}>
    <h1>Body</h1>
  </div>
  )
}
