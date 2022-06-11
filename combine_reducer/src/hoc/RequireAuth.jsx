import React from 'react'
import {Navigate} from 'react-router-dom'
import { useSelector } from "react-redux";
export const RequireAuth = ({children}) => {
    let{login} = useSelector((state)=>state.auth);
    // console.log(login);
    if(login){
        return children;
    }
    else{
        return <Navigate to={'/login'}/>
    }
}
