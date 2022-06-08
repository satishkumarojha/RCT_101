import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { add, dec, div, inc, mult, sub } from './store/action';
 
function App() {
  let dispatch = useDispatch();
  let counter = useSelector((state)=>state.counter);
  const[xvalue,setXvalue] = useState(0);
  return (
    <div className="App">
      <h1>Value: {counter}</h1>
      <button onClick={()=>dispatch(inc())}>+</button>
      <button onClick={()=>dispatch(dec())}>-</button>
      <br />
      <hr />
      <br />
      <input type="number" name='xvalue' onChange={(e)=>setXvalue(e.target.value)} />
      <button onClick={()=>dispatch(add(Number(xvalue)))}>Add</button>
      <button onClick={()=>dispatch(sub(Number(xvalue)))}>Substract</button>
      <button onClick={()=>dispatch(mult(Number(xvalue)))}>Multiply</button>
      <button onClick={()=>dispatch(div(Number(xvalue)))}>Devide</button>
    </div>
  )
}

export default App
