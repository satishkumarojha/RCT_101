import React from 'react'
import TodoItem from './TodoItem';
export const TodoList = ({list,del}) => {
    console.log("list",list);
    
  return (
    <>
       {list.map((e)=>{
           return <TodoItem item={e} del={del} key={e.id} />
       })}
    </>
  )
}
