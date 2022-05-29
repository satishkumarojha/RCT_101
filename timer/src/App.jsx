import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { Timer } from './components/Timer'

function App() {
  const [count, setCount] = useState(0)
  let init = 1;
  let endtime= 20;
  return (
    <div className="App">
     <Timer init={init} endtime={endtime} />
    </div>
  )
}

export default App
