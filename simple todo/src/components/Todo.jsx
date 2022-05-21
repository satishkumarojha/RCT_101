import React, { useState } from 'react'
import { TodoList } from './TodoList';
import { v4 as uuidv4 } from 'uuid';
import Styles from './Todo.module.css';
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
                tasks:task,
                status:false
            }]);
            setTask("");
        }
        
        
    }
    const del = (val)=>{
        setTaskList([...tasklist.map((e)=>{
            return (e.id===val?{...e,status:!e.status}:e)
        })]);
    }
  return (
    <>
    <div className={Styles.todo_container}>
        <input className={Styles.input} type="text" placeholder='write something' onChange={handleChange} value={task} />
        <button className={Styles.btn} disabled={!task} onClick={handleClick}>+</button>
    </div>
    <TodoList list={tasklist} del={del}/>
    </>
        
     
  )
}
