import React, { useState } from 'react'
import axios from 'axios';
export const TodoInput = ({setTaskarr,taskarr}) => {
  const[data,setData] = useState("");
  const handleChange = (e)=>{
    setData(e.target.value);
  }
  console.log(data);
  const handleSubmit = (e)=>{
    axios.post(" http://localhost:8080/tasks",{
      tstatus:false,
      task:data     
    }).then((r)=>{setTaskarr([...taskarr,r.data])});
    setData("");
  }
  return (
    <div>
      <input type="text" name="tasks" value={data} placeholder='Enter name' onChange={handleChange} />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}
