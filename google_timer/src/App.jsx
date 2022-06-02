import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { Timer } from './components/Timer'
import { StopWatch } from './components/StopWatch'

function App() {
  const [toggle, setToggle] = useState(true);

  return (
    <div className="App">
      <div>
        <button className={toggle?"green":"none"} onClick={()=>setToggle(true)}>Timer</button>
        <button className={toggle?"none":"green"}  onClick={()=>setToggle(false)}>Stopwatch</button>
      </div>
      {toggle?<Timer/>:<StopWatch/>}
    </div>
  )
}

export default App
