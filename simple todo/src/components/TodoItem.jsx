import React from 'react'
const TodoItem = ({item,del}) => {
 
  return (
    <>
     <div>
         <input type="radio" value={item.tasks} />{item.tasks}
         <button onClick={()=>{
             del(item.id)
         }}>delete</button>
     </div>
    </>
  )
}

export default TodoItem