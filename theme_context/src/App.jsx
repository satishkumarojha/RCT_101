import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'
import { Body } from './components/Body'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className="App">
     <Navbar/>
     <Body/>
     <Footer/>
    </div>
  )
}

export default App
