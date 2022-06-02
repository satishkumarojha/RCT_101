import React from 'react'

export const Show = ({count,setcount}) => {
  return (
    <>
        <button onClick={()=>setcount(!count)} >Show</button>
    </>
  )
}
