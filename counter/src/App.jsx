import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { Counter } from './components/Counter'

function App() {
 const init = 10;
  return (
    <div className="App">
      <h1>Counter App</h1>
     <Counter value={init}/>
    </div>
  )
}

export default App
