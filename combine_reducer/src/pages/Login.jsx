import axios from 'axios';
import React, { useState } from 'react'
import { login } from '../store/auth/auth.action';
import { useDispatch } from 'react-redux/es/exports';
import { Navigate, useNavigate } from "react-router-dom";
export const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const[cred,setCred] = useState({
    email:"eve.holt@reqres.in",
    password:"cityslicka"
  })
  const handleChange = ()=>{

  }
  const handleLogin = (e)=>{
    e.preventDefault();
    axios.post("https://reqres.in/api/login",{
      email:cred.email,
      password:cred.password
    }).then((r)=>{dispatch(login(r.data))
      navigate("/")
    });
    
  }
  return (
    <div>
        <input type="text" name="email" placeholder='Enter email' value={cred.email} onChange={handleChange} />
        <input type="password" name="password" placeholder='password' value={cred.password} onChange={handleChange}/>
        <button onClick={handleLogin} >Login</button>
    </div>
  )
}
