import { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({children})=>{
    const[isAuth,setIsAuth] = useState(false);
    const[token,setToken] = useState("")
    const toggleAuth = (token)=>{
        if(token==1){
            setIsAuth(!isAuth); 
        }else{
            setToken(token)
            setIsAuth(!isAuth);
        }
         
    }
    
    return (
        <AuthContext.Provider value={{isAuth,toggleAuth,token}}>{children}</AuthContext.Provider>
    )
}