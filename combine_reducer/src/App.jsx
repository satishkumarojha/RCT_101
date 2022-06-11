import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import {Routes,Route} from 'react-router-dom'
import { TodoApp } from './pages/TodoApp'
import { Login } from './pages/Login'
import { Navbar } from './components/Navbar'
import { RequireAuth } from './hoc/RequireAuth'
function App() {
 
  return (
    <div className="App">
      <Navbar/>
     <Routes>
      <Route path='/' element={<RequireAuth><TodoApp/></RequireAuth>}/>
      <Route path='/login' element={<Login/>}/>
     </Routes>
    </div>
  )
}

export default App
