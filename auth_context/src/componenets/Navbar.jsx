import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
export const Navbar = () => {
    let{isAuth,toggleAuth} = useContext(AuthContext);
  return (
    <div>
        Navbar: <button onClick={()=>toggleAuth(1)}>{isAuth?"Logout":"Login"}</button>
    </div>
  )
}
