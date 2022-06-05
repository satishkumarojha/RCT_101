import { useContext, useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { Navbar } from './componenets/Navbar'
import { Login } from './componenets/Login'
import { User } from './componenets/User'
import { AuthContext } from './context/AuthContext'
function App() {
 let{isAuth,toggleAuth,token} = useContext(AuthContext)

  return (
    <div className="App">
     <Navbar/>
     {isAuth?<User/>:<Login/>}
    </div>
  )
}

export default App
