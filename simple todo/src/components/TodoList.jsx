import React from 'react'
import TodoItem from './TodoItem';
import Styles from './Todolist.module.css'
export const TodoList = ({list,del}) => {
    console.log("list",list);
    
  return (
    <div className={Styles.list} >
       {list.map((e)=>{
           return <TodoItem item={e} del={del} key={e.id} />
       })}
    </div>
  )
}
