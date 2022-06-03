import React, { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'
export const Navbar = () => {
  let {theme,handleTheme} = useContext(ThemeContext);
  return (
    <div className={theme=="light"?"nav light":"nav dark"}>
        <p>Home</p>
        <p>Body</p>
        <button className={theme=="light"?"btnlight":"btndark"} onClick={handleTheme}>{theme=="light"?"light mode":"dark mode"}</button>
    </div>
  )
}
