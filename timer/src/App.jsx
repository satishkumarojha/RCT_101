import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { Timer } from './components/Timer'
import { Show } from './components/Show'

function App() {
  const [count, setCount] = useState(false)
  let init = 1;
  let endtime= 10;
  return (
    <div className="App">
      <Show setcount={setCount} count={count} />
      {count==true? null:<Timer init={init} endtime={endtime} />}
      
    </div>
  )
}

export default App
