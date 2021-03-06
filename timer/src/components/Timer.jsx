import React, { useEffect, useState } from 'react'

export const Timer = ({init,endtime}) => {
    const[timer,setTimer]=useState(init);
    useEffect(()=>{
    
        let id = setInterval(()=>{
           
            if(timer==endtime){
                clearInterval(id);
            }
            else{
                setTimer((prev)=>prev+1);
            }   
            
        },1000)
        return function(){
            clearInterval(id);
        }
       
    },[timer]);
    
  return (
    <div>
        <h1>Counter: {timer}</h1>
    </div>
  )
}
