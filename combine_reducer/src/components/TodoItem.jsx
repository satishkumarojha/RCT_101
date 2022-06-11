import React from 'react'

export const TodoItem = ({tasks,tstatus,toggle}) => {
  return (
    <div>
        <p>{tasks}</p>
        <button onClick={()=>toggle(tasks)}>{tstatus?"Done":"Not Done"}</button>
    </div>
  )
}
