import React from 'react'
import { TodoItem } from './TodoItem'
import { v4 as uuid } from 'uuid';
export const TodoList = ({taskarr,toggle}) => {
  
  return (
    <div>
      {taskarr.map((e)=>( <TodoItem tasks={e.task} tstatus={e.tstatus} toggle={toggle} key={uuid()} />))}
    </div>
  )
}
