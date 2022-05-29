import React from 'react'
import Styles from './Todoitem.module.css';
const TodoItem = ({item,del}) => {
  
  return (
       <>
        <li className={Styles.item}>{item.tasks}{ <button className={item.status==false?`${Styles.tbtn}`:`${Styles.dbtn}`} onClick={()=>{
             del(item.id)
         }}></button> } </li>
         
        </>

  )
}

export default TodoItem