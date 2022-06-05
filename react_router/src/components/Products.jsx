import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
export const Products = () => {
    const[data,setdata] = useState([]);
    useEffect(()=>{
        const fetchdata = async()=>{
            let res = await axios.get("http://localhost:8080/products")
            console.log(res.data);
            setdata(res.data);
        }
        fetchdata();
    },[])
  return (
    <div>
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Details</th>
                </tr>
            </thead>
            <tbody>
                {data.map((e)=>{
                    return(
                        <tr key={uuidv4()}>
                            <td >{e.name}</td>
                            <td >{e.price}</td>
                            <td ><Link to={`/products/${e.id}`}>more details...</Link></td>                            
                      </tr>
                    )
                })}
            </tbody>
        </table>
    </div>
  )
}
