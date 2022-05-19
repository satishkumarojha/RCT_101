import React, { useState } from 'react'

export const Counter = ({value}) => {
    const [count,setCount] = useState(value);
    const handleChange = (val)=>{
        setCount(count+val);
    }
    const multiply = ()=>{
        setCount(count*2);
    }
  return (
    <div>
        <h1 className={count%2==0?"green":"red"}>Counter : {count}</h1>
        <button onClick={()=>{
            handleChange(-1);
        }}>-</button>
        <button onClick={()=>{
            handleChange(+1);
        }}>+</button>
        <button onClick={multiply}>Double</button>
    </div>
  )
}
