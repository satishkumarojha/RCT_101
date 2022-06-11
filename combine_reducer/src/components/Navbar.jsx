import React from 'react'
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from 'react-redux/es/exports';
import { logout } from '../store/auth/auth.action';
export const Navbar = () => {
  const dispatch = useDispatch();
  let{login} = useSelector((state)=>state.auth);
  const handleToggle = ()=>{
    dispatch(logout());
  }
  return (
    <div>
        <Link to="/login">Login</Link>
        <Link to="/">TodoApp</Link>
        <button onClick={handleToggle}>{login?"Logout":"Login"}</button>
        <hr />
        <br />
    </div>
  )
}
