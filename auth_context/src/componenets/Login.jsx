import axios from 'axios';
import React, { useContext, useState } from 'react'
import { AuthContext } from '../context/AuthContext';
export const Login = () => {
    let{isAuth,toggleAuth} = useContext(AuthContext)
    const[change,setChange] = useState({
        username:"",
        password:""
    });
    const getDetails = async()=>{
        let fetchdata = await axios.post("https://reqres.in/api/login",{
            username:change.username,
            password:change.password
        })
        if(fetchdata.data!=undefined){
            toggleAuth(fetchdata.data.token);
        }
        console.log(fetchdata.data);
    }
    const handleChange = (e)=>{
        let {name,value} = e.target;
        setChange({...change,[name]:value});

    }
  return (
    <div className='login'>
        <div className='inputs'>
        <input type="text" name='username' placeholder='Enter email as eve.holt@reqres.in'onChange={handleChange}/>
        <input type="text" name='password' placeholder='Enter Password as cityslicka'onChange={handleChange}/>
        <button onClick={getDetails}>Login</button>
        </div>
        
    </div>
  )
}
