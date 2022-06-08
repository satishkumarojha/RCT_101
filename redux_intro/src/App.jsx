import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { dec, inc } from './store/action';
 
function App() {
  let dispatch = useDispatch();
  let counter = useSelector((state)=>state.counter);

  return (
    <div className="App">
      <h1>Value: {counter}</h1>
      <button onClick={()=>dispatch(inc())}>+</button>
      <button onClick={()=>dispatch(dec())}>-</button>
    </div>
  )
}

export default App
