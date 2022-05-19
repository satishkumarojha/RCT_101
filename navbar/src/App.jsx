import { useState } from 'react'
import logo from './logo.svg'
import './App.css'

function App() {
  const serv = ["Services","Projects","About"]
 const Main = ({props})=>{
   return <p>{props}</p>
 }
  return (
    <div className="App">
     <h1>logobakery</h1>
     <div className='services'>{serv.map((e)=>{
       return <Main props={e}/>
     })}</div>
     <button>Contact</button>
    </div>
  )
}

export default App
