import React, { useState } from 'react'
import { TodoList } from './TodoList';
import { v4 as uuidv4 } from 'uuid';
export const Todo = () => {
    const [task,setTask] = useState("");
    const [tasklist,setTaskList] = useState([]);
    const handleChange = (e)=>{
        setTask(e.target.value);
    }
    console.log(task);
    const handleClick = ()=>{
        if(task==""){
            alert("Enter a task")
        }
        else{
            setTaskList([...tasklist,{
                id:uuidv4(),
                tasks:task
            }]);
            setTask("");
        }
        
        
    }
    const del = (val)=>{
        setTaskList([...tasklist.filter((ts)=>ts.id!=val)]);
    }
  return (
      
    <div>
        <input type="text" placeholder='write something' onChange={handleChange} value={task} />
        <button disabled={!task} onClick={handleClick}>+</button>
        <TodoList list={tasklist} del={del}/>
    </div>
  )
}
