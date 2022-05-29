import React, { useEffect, useState } from 'react'
import { TodoList } from './TodoList';
import { v4 as uuidv4 } from 'uuid';
import Styles from './Todo.module.css';
export const Todo = () => {
    const [task,setTask] = useState("");
    const [tasklist,setTaskList] = useState([]);
    useEffect(()=>{
        const d = async()=>{
           let res = await fetch("http://localhost:8080/tasks");
           let data = await res.json();
        //    console.log(data); 
           setTaskList([...data]);
        }
        d();
    },[]);

    const handleChange = (e)=>{
        setTask(e.target.value);
    }
    // console.log(task);
    const handleClick = ()=>{
        if(task==""){
            alert("Enter a task")
        }
        else{
            const post = async()=>{
                let res = await fetch("http://localhost:8080/tasks",{
                    method:"POST",
                    headers:{
                        'Content-Type': 'application/json'
                    },
                    body:JSON.stringify({
                        tasks:task,
                        status:false
                    })
                })
                let dt = await res.json();
                // console.log(dt);
                setTaskList([...tasklist,{...dt}])
                setTask("");
            }
            post();
            
            // setTaskList([...tasklist,{
            //     id:uuidv4(),
            //     tasks:task,
            //     status:false
            // }]);
            
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
