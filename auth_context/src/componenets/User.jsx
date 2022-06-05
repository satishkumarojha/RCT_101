import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
export const User = () => {
    let{isAuth,toggleAuth,token} = useContext(AuthContext)
    console.log("token:"+token);
  return (
    <div>
        token:{token}
    </div>
  )
}
