import React, { useEffect, useState } from 'react'
import { TodoInput } from '../components/TodoInput'
import { TodoList } from '../components/TodoList'
import axios from 'axios';
export const TodoApp = () => {
  const[taskarr,setTaskarr] = useState([]);
  useEffect(()=>{
    axios.get(" http://localhost:8080/tasks").
    then((r)=>(setTaskarr([...r.data])))
  },[]);
  const toggle = (id)=>{
   setTaskarr([...taskarr.map((e)=>(e.task==id?{...e,tstatus:!e.tstatus}:e))]);
  }
  return (
    <div>
        <TodoInput setTaskarr={setTaskarr}taskarr={taskarr}/>
        <TodoList taskarr={taskarr} toggle={toggle}/>
    </div>
  )
}
