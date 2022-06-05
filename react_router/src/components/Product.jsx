import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export const Product = () => {
    let{id} = useParams();
    const[data,setData] =useState({});
    useEffect(()=>{
        const fd = async()=>{
            let fetchdata = await axios.get(`http://localhost:8080/products/${id}`)
            console.log(fetchdata.data)
            setData({...fetchdata.data})
        }
        fd();
        
    },[]);
    console.log(id);
  return (
    <div>
        <h1>Name:{data.name}</h1>
        <p>Price:{data.price}</p>
    </div>
  )
}
